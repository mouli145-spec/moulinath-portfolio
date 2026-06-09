import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "About — Moulinath N.",
  description: "Career timeline and background of Moulinath N., Senior UX & Design Strategy Consultant.",
};

const timeline = [
  {
    year: "2023–Present",
    role: "Independent Design Consultant",
    company: "Moulinath N. Consultancy",
    desc: "Running a boutique consultancy serving Series A–C startups and enterprise design teams. Specialising in UX maturity, AI-augmented design workflows, and design leadership coaching.",
  },
  {
    year: "2020–2023",
    role: "Head of Design",
    company: "Razorpay (Fintech)",
    desc: "Led a 35-person design team across consumer and B2B products. Established design systems, shifted team culture to outcome-led design, and grew NPS by 22 points.",
  },
  {
    year: "2017–2020",
    role: "Principal UX Designer",
    company: "Amazon (India & US)",
    desc: "Owned UX for Amazon Pay India — scaled from 2M to 40M active users. Pioneered voice-first checkout experience and led cross-functional design sprints.",
  },
  {
    year: "2014–2017",
    role: "Senior Product Designer",
    company: "Zomato",
    desc: "Designed the restaurant discovery and ordering experience from mobile web MVP to a full native app with 10M+ downloads. Hired and mentored junior designers.",
  },
  {
    year: "2011–2014",
    role: "UX Designer",
    company: "Infosys (Consulting)",
    desc: "Enterprise UX consulting for banking, insurance, and healthcare clients. Delivered usability studies, journey maps, and interaction design for complex workflows.",
  },
  {
    year: "2008–2011",
    role: "B.Des, Visual Communication",
    company: "National Institute of Design, Ahmedabad",
    desc: "Foundation in visual communication, typography, interaction design, and design research. Graduated with distinction.",
  },
];

export default function AboutPage() {
  return (
    <div className="bg-[#F5F2EE] min-h-screen">
      <section className="max-w-6xl mx-auto px-6 py-20">
        <p className="text-[#C4622D] font-body text-sm uppercase tracking-widest mb-3">My Story</p>
        <h1 className="font-heading text-6xl text-[#1A1814] mb-6">About Moulinath</h1>
        <p className="font-body text-lg text-[#7A7570] max-w-3xl leading-relaxed mb-16">
          I&apos;m a design strategist and educator with 15+ years of experience building products and design
          organisations across India&apos;s most influential technology companies. Today I consult independently —
          helping teams at every stage build the systems, skills, and culture that produce great design
          consistently.
        </p>

        {/* Timeline */}
        <div className="relative border-l-2 border-[#EDE9E3] pl-10 space-y-12">
          {timeline.map((item) => (
            <div key={item.year} className="relative">
              <div className="absolute -left-[2.85rem] top-1 w-4 h-4 rounded-full bg-[#C4622D] border-4 border-[#F5F2EE]" />
              <span className="font-body text-xs text-[#C4622D] uppercase tracking-widest">{item.year}</span>
              <h3 className="font-heading text-3xl text-[#1A1814] mt-1">{item.role}</h3>
              <p className="font-body text-sm text-[#7A7570] font-semibold mb-2">{item.company}</p>
              <p className="font-body text-[#7A7570] leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>

        <div className="mt-16 flex gap-4">
          <Link
            href="/services"
            className="bg-[#C4622D] text-white px-6 py-3 rounded font-body hover:bg-[#a84f22] transition-colors"
          >
            Work With Me
          </Link>
          <Link
            href="/contact"
            className="border border-[#1A1814] text-[#1A1814] px-6 py-3 rounded font-body hover:bg-[#1A1814] hover:text-white transition-colors"
          >
            Get in Touch
          </Link>
        </div>
      </section>
    </div>
  );
}
