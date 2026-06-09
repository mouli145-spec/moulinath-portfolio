import { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Star, Users, Cpu, BarChart2 } from "lucide-react";

export const metadata: Metadata = {
  title: "Services — Moulinath N.",
  description: "Design consulting services including portfolio review, UX coaching, AI workshops, and team audits.",
};

const services = [
  {
    slug: "portfolio-review",
    title: "Portfolio Review",
    price: "₹4,999",
    duration: "2-hour session",
    icon: Star,
    desc: "An in-depth critique of your design portfolio with specific, actionable feedback. I review structure, case study depth, storytelling, visual quality, and positioning — then deliver a prioritised improvement list.",
    includes: [
      "2-hour live review session (recorded)",
      "Written feedback document",
      "Prioritised action checklist",
      "30-day follow-up check-in",
    ],
  },
  {
    slug: "ux-leadership-coaching",
    title: "UX Leadership Coaching",
    price: "₹9,999",
    duration: "Per month (4 sessions)",
    icon: Users,
    desc: "Monthly coaching for design leads who want to grow from individual contributor to strategic design leader. Topics include hiring, managing up, influencing roadmaps, and building high-performing teams.",
    includes: [
      "4 x 60-min coaching sessions",
      "Async support via messaging",
      "Leadership framework templates",
      "Resource library access",
    ],
  },
  {
    slug: "ai-for-design-workshops",
    title: "AI for Design Workshops",
    price: "₹24,999",
    duration: "Full-day workshop",
    icon: Cpu,
    desc: "A hands-on, full-day workshop for design teams (up to 12 people) on integrating AI tools into every phase of the design process — from research and ideation to prototyping and delivery.",
    includes: [
      "Full-day in-person or virtual workshop",
      "Custom toolkit for your workflow",
      "Team assessment & recommendations",
      "90-day AI adoption roadmap",
    ],
  },
  {
    slug: "design-team-audits",
    title: "Design Team Audits",
    price: "₹49,999",
    duration: "2-week engagement",
    icon: BarChart2,
    desc: "A comprehensive audit of your design organisation — covering process maturity, tooling, talent gaps, output quality, and stakeholder alignment. Delivered with a 90-day action plan.",
    includes: [
      "Stakeholder interviews",
      "Process & tooling assessment",
      "Portfolio and output quality review",
      "Executive-ready audit report",
      "90-day action plan presentation",
    ],
  },
];

export default function ServicesPage() {
  return (
    <div className="bg-[#F5F2EE] min-h-screen">
      <section className="max-w-6xl mx-auto px-6 py-20">
        <p className="text-[#C4622D] font-body text-sm uppercase tracking-widest mb-3">What I Offer</p>
        <h1 className="font-heading text-6xl text-[#1A1814] mb-6">Services</h1>
        <p className="font-body text-lg text-[#7A7570] max-w-2xl mb-16">
          Every engagement is designed to deliver measurable change — not just a report. Pick the service that
          matches where you are right now.
        </p>
        <div className="grid md:grid-cols-2 gap-8">
          {services.map((s) => (
            <div key={s.slug} className="bg-[#EDE9E3] rounded-xl p-8 flex flex-col">
              <s.icon size={32} className="text-[#C4622D] mb-4" />
              <div className="flex items-start justify-between mb-3">
                <h2 className="font-heading text-3xl text-[#1A1814]">{s.title}</h2>
                <span className="font-heading text-2xl text-[#C4622D]">{s.price}</span>
              </div>
              <p className="font-body text-xs text-[#7A7570] uppercase tracking-wider mb-4">{s.duration}</p>
              <p className="font-body text-[#7A7570] leading-relaxed mb-6">{s.desc}</p>
              <ul className="space-y-2 mb-8 flex-1">
                {s.includes.map((item) => (
                  <li key={item} className="flex items-start gap-2 font-body text-sm text-[#1A1814]">
                    <span className="text-[#C4622D] mt-0.5">✓</span>
                    {item}
                  </li>
                ))}
              </ul>
              <Link
                href={`/services/${s.slug}`}
                className="flex items-center justify-center gap-2 bg-[#C4622D] text-white px-6 py-3 rounded font-body hover:bg-[#a84f22] transition-colors"
              >
                Book This Service <ArrowRight size={16} />
              </Link>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
