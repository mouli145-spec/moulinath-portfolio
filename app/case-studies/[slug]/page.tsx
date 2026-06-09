import { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

interface CaseStudy {
  slug: string;
  title: string;
  subtitle: string;
  desc: string;
  tags: string[];
  metric: string;
  overview: string;
  challenge: string;
  approach: string;
  outcome: string;
}

const publicCaseStudies: CaseStudy[] = [
  {
    slug: "razorpay-design-system",
    title: "Building Razorpay's First Design System",
    subtitle: "Design System · 18 months · 35-person team",
    desc: "How I led the creation of a comprehensive design system that unified 12 products.",
    tags: ["Design Systems", "Leadership", "Fintech"],
    metric: "60% faster delivery",
    overview:
      "When I joined Razorpay as Head of Design, the company had 12 distinct product surfaces — each with its own visual language, component patterns, and interaction paradigms. Designers were recreating the same components repeatedly. Engineers were implementing the same UI logic in different ways across codebases.",
    challenge:
      "The core challenge wasn't technical — it was organisational. 35 designers had developed strong opinions and habits over years. Getting alignment on a shared component language required as much change management as it did design work. We also needed to maintain product velocity while building the system.",
    approach:
      "I started by auditing all 12 products and identifying the 20% of components that covered 80% of use cases. We formed a cross-functional design system team of 4 designers and 3 engineers, ran weekly open critiques to build buy-in, and shipped the foundation in 3-month phases rather than one big release. Every component shipped with documentation, usage guidelines, and accessibility specs.",
    outcome:
      "After 18 months, the design system covered 94% of UI patterns across all products. Design-to-engineering handoff time dropped by 60%. New designer onboarding went from 6 weeks to 2 weeks. The system became an asset that allowed us to launch new products in weeks rather than months.",
  },
  {
    slug: "amazon-pay-checkout",
    title: "Amazon Pay India: Redesigning Checkout for 40M Users",
    subtitle: "UX Strategy · 12 months · Cross-functional",
    desc: "Redesigning India's most-used payment checkout experience.",
    tags: ["E-Commerce", "Research", "Scale"],
    metric: "28% conversion lift",
    overview:
      "Amazon Pay's checkout flow in India had grown organically over 5 years — layers of features added without coherent UX strategy. By 2019, the flow had 11 steps for a first-time user, a 68% drop-off rate on mobile, and a Net Promoter Score of 23. My mandate was to redesign it end-to-end.",
    challenge:
      "The scale of this project made conventional design process insufficient. Any change to the checkout flow needed to work across 6 languages, 4 payment methods, 2G–4G network conditions, and a device landscape ranging from flagship iPhones to entry-level Android devices. The stakes of getting it wrong were enormous.",
    approach:
      "We started with a 3-month research phase: diary studies with 40 users across Tier 1–3 cities, competitive analysis across 15 checkout flows globally, and a comprehensive error analysis of existing failure modes. The redesign prioritised progressive disclosure — surfacing only what users needed at each step, using smart defaults aggressively, and reducing cognitive load at the payment selection screen.",
    outcome:
      "The redesigned checkout reduced average completion time from 4.2 minutes to 1.8 minutes. Conversion increased 28% within 3 months of full rollout. Support tickets related to checkout dropped 41%. The experience design became the template for Amazon Pay's expansion into 3 additional markets.",
  },
];

interface PageProps {
  params: { slug: string };
}

export async function generateStaticParams() {
  return publicCaseStudies.map((cs) => ({ slug: cs.slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const study = publicCaseStudies.find((cs) => cs.slug === params.slug);
  if (!study) return {};
  return {
    title: `${study.title} — Moulinath N.`,
    description: study.desc,
  };
}

export default function CaseStudyDetailPage({ params }: PageProps) {
  const study = publicCaseStudies.find((cs) => cs.slug === params.slug);
  if (!study) notFound();

  return (
    <div className="bg-[#F5F2EE] min-h-screen">
      <div className="max-w-4xl mx-auto px-6 py-20">
        <Link
          href="/case-studies"
          className="inline-flex items-center gap-2 font-body text-sm text-[#7A7570] hover:text-[#1A1814] mb-10 transition-colors"
        >
          <ArrowLeft size={16} /> Back to Case Studies
        </Link>
        <div className="flex flex-wrap gap-2 mb-6">
          {study.tags.map((tag) => (
            <span
              key={tag}
              className="bg-[#C4622D]/10 text-[#C4622D] text-xs font-body px-3 py-1 rounded-full"
            >
              {tag}
            </span>
          ))}
        </div>
        <h1 className="font-heading text-5xl text-[#1A1814] mb-4 leading-tight">{study.title}</h1>
        <p className="font-body text-xs text-[#7A7570] uppercase tracking-wider mb-10">{study.subtitle}</p>

        <div className="bg-[#C4622D] text-white rounded-xl px-8 py-6 mb-12">
          <p className="font-body text-sm uppercase tracking-widest opacity-80 mb-1">Key Outcome</p>
          <p className="font-heading text-4xl">{study.metric}</p>
        </div>

        <div className="space-y-10">
          {[
            { label: "Overview", content: study.overview },
            { label: "The Challenge", content: study.challenge },
            { label: "Our Approach", content: study.approach },
            { label: "The Outcome", content: study.outcome },
          ].map((section) => (
            <div key={section.label} className="bg-[#EDE9E3] rounded-xl p-8">
              <h2 className="font-heading text-3xl text-[#1A1814] mb-4">{section.label}</h2>
              <p className="font-body text-[#7A7570] leading-relaxed">{section.content}</p>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <h3 className="font-heading text-3xl text-[#1A1814] mb-4">Interested in similar work?</h3>
          <p className="font-body text-[#7A7570] mb-6">Let&apos;s talk about your design challenges.</p>
          <div className="flex justify-center gap-4">
            <Link
              href="/book"
              className="bg-[#C4622D] text-white px-6 py-3 rounded font-body hover:bg-[#a84f22] transition-colors"
            >
              Book a Call
            </Link>
            <Link
              href="/services"
              className="border border-[#1A1814] text-[#1A1814] px-6 py-3 rounded font-body hover:bg-[#1A1814] hover:text-white transition-colors"
            >
              View Services
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
