import Link from "next/link";
import { ArrowRight, Star, Users, Cpu, BarChart2 } from "lucide-react";

const services = [
  {
    slug: "portfolio-review",
    title: "Portfolio Review",
    price: "₹4,999",
    icon: Star,
    desc: "In-depth critique of your design portfolio with actionable feedback to help you land senior roles or new clients.",
  },
  {
    slug: "ux-leadership-coaching",
    title: "UX Leadership Coaching",
    price: "₹9,999",
    icon: Users,
    desc: "1:1 coaching sessions for design leads navigating team building, stakeholder management, and career growth.",
  },
  {
    slug: "ai-for-design-workshops",
    title: "AI for Design Workshops",
    price: "₹24,999",
    icon: Cpu,
    desc: "Hands-on workshop teaching your team how to integrate AI tools into every stage of the design process.",
  },
  {
    slug: "design-team-audits",
    title: "Design Team Audits",
    price: "₹49,999",
    icon: BarChart2,
    desc: "Comprehensive audit of your design org — process, tooling, talent, output quality — with a 90-day action plan.",
  },
];

export default function ServicesSection() {
  return (
    <section className="py-20 px-6 bg-[#F5F2EE]">
      <div className="max-w-6xl mx-auto">
        <p className="text-[#C4622D] font-body text-sm uppercase tracking-widest mb-3">What I Offer</p>
        <h2 className="font-heading text-5xl text-[#1A1814] mb-4">Services</h2>
        <p className="font-body text-[#7A7570] mb-12 max-w-2xl">
          Tailored consulting engagements designed for designers, design leaders, and product organisations.
        </p>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((s) => (
            <div key={s.slug} className="bg-[#EDE9E3] rounded-xl p-6 flex flex-col">
              <s.icon size={28} className="text-[#C4622D] mb-4" />
              <h3 className="font-heading text-2xl text-[#1A1814] mb-2">{s.title}</h3>
              <p className="font-body text-sm text-[#7A7570] leading-relaxed flex-1 mb-4">{s.desc}</p>
              <div className="flex items-center justify-between mt-auto">
                <span className="font-heading text-xl text-[#C4622D]">{s.price}</span>
                <Link
                  href={`/services/${s.slug}`}
                  className="text-[#1A1814] hover:text-[#C4622D] transition-colors"
                  aria-label={`Learn more about ${s.title}`}
                >
                  <ArrowRight size={18} />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
