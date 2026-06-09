import { Metadata } from "next";
import Link from "next/link";
import { Lock, ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Case Studies — Moulinath N.",
  description: "Design case studies showcasing UX strategy, design leadership, and product transformation work.",
};

const caseStudies = [
  {
    slug: "razorpay-design-system",
    title: "Building Razorpay's First Design System",
    subtitle: "Design System · 18 months · 35-person team",
    desc: "How I led the creation of a comprehensive design system that unified 12 products, reduced design-to-engineering handoff time by 60%, and onboarded the entire design team in under 6 weeks.",
    tags: ["Design Systems", "Leadership", "Fintech"],
    nda: false,
    metric: "60% faster delivery",
  },
  {
    slug: "amazon-pay-checkout",
    title: "Amazon Pay India: Redesigning Checkout for 40M Users",
    subtitle: "UX Strategy · 12 months · Cross-functional",
    desc: "The full story of redesigning India's most-used payment checkout experience — from zero-to-one research through to a phased rollout that increased conversion by 28%.",
    tags: ["E-Commerce", "Research", "Scale"],
    nda: false,
    metric: "28% conversion lift",
  },
  {
    slug: "enterprise-banking-ux",
    title: "Enterprise Banking Platform Overhaul",
    subtitle: "UX Audit + Redesign · 8 months",
    desc: "A complete UX overhaul of a major Indian bank's corporate banking platform serving 200,000+ business users. Detailed process, research methodology, and solution rationale available on request.",
    tags: ["Banking", "Enterprise", "Audit"],
    nda: true,
    metric: "NDA Protected",
  },
  {
    slug: "healthtech-ai-triage",
    title: "AI-Assisted Triage for HealthTech Startup",
    subtitle: "0→1 Product Design · 6 months",
    desc: "Designed the end-to-end experience for an AI-powered patient triage system from first principles — including the ethical framework for AI recommendations in clinical settings.",
    tags: ["HealthTech", "AI", "0→1"],
    nda: true,
    metric: "NDA Protected",
  },
];

export default function CaseStudiesPage() {
  return (
    <div className="bg-[#F5F2EE] min-h-screen">
      <section className="max-w-6xl mx-auto px-6 py-20">
        <p className="text-[#C4622D] font-body text-sm uppercase tracking-widest mb-3">Selected Work</p>
        <h1 className="font-heading text-6xl text-[#1A1814] mb-6">Case Studies</h1>
        <p className="font-body text-lg text-[#7A7570] max-w-2xl mb-16">
          A selection of projects spanning design systems, product redesigns, and 0→1 design work. Two
          studies are under NDA — available to serious enquiries with signed NDA.
        </p>
        <div className="grid md:grid-cols-2 gap-8">
          {caseStudies.map((study) => (
            <div key={study.slug} className="relative">
              {study.nda ? (
                <div className="bg-[#EDE9E3] rounded-xl p-8 h-full select-none">
                  {/* Blurred content */}
                  <div className="filter blur-sm pointer-events-none">
                    <div className="flex flex-wrap gap-2 mb-4">
                      {study.tags.map((tag) => (
                        <span
                          key={tag}
                          className="bg-[#C4622D]/10 text-[#C4622D] text-xs font-body px-3 py-1 rounded-full"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                    <h2 className="font-heading text-3xl text-[#1A1814] mb-2">{study.title}</h2>
                    <p className="font-body text-xs text-[#7A7570] uppercase tracking-wider mb-4">
                      {study.subtitle}
                    </p>
                    <p className="font-body text-[#7A7570] text-sm leading-relaxed">{study.desc}</p>
                  </div>
                  {/* Lock overlay */}
                  <div className="absolute inset-0 flex flex-col items-center justify-center bg-[#EDE9E3]/80 rounded-xl">
                    <Lock size={32} className="text-[#C4622D] mb-3" />
                    <span className="font-heading text-xl text-[#1A1814] mb-2">NDA Protected</span>
                    <p className="font-body text-sm text-[#7A7570] text-center px-8 mb-4">
                      Available to serious enquiries with a signed NDA.
                    </p>
                    <Link
                      href="/contact"
                      className="bg-[#C4622D] text-white text-sm px-5 py-2 rounded font-body hover:bg-[#a84f22] transition-colors"
                    >
                      Request Access
                    </Link>
                  </div>
                </div>
              ) : (
                <Link href={`/case-studies/${study.slug}`} className="group block">
                  <div className="bg-[#EDE9E3] rounded-xl p-8 h-full hover:shadow-lg transition-shadow">
                    <div className="flex flex-wrap gap-2 mb-4">
                      {study.tags.map((tag) => (
                        <span
                          key={tag}
                          className="bg-[#C4622D]/10 text-[#C4622D] text-xs font-body px-3 py-1 rounded-full"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                    <h2 className="font-heading text-3xl text-[#1A1814] mb-2 group-hover:text-[#C4622D] transition-colors">
                      {study.title}
                    </h2>
                    <p className="font-body text-xs text-[#7A7570] uppercase tracking-wider mb-4">
                      {study.subtitle}
                    </p>
                    <p className="font-body text-[#7A7570] text-sm leading-relaxed mb-6">{study.desc}</p>
                    <div className="flex items-center justify-between">
                      <span className="font-body text-sm font-semibold text-[#C4622D]">{study.metric}</span>
                      <ArrowRight size={16} className="text-[#C4622D]" />
                    </div>
                  </div>
                </Link>
              )}
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
