import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function HeroSection() {
  return (
    <section className="min-h-[90vh] flex items-center bg-[#F5F2EE] px-6 py-20">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16 items-center">
        <div>
          <p className="text-[#C4622D] font-body text-sm uppercase tracking-widest mb-4">
            Design Strategy Consultant
          </p>
          <h1 className="font-heading text-6xl md:text-7xl font-semibold text-[#1A1814] leading-tight mb-6">
            Build design that <em className="not-italic text-[#C4622D]">moves</em> the needle.
          </h1>
          <p className="font-body text-lg text-[#7A7570] leading-relaxed mb-10 max-w-lg">
            I help founders, product teams, and enterprises elevate their design practice — from portfolio reviews
            to full design team audits. 15+ years shaping products at scale.
          </p>
          <div className="flex flex-wrap gap-4">
            <Link
              href="/services"
              className="flex items-center gap-2 bg-[#C4622D] text-white px-6 py-3 rounded hover:bg-[#a84f22] transition-colors font-body"
            >
              Explore Services <ArrowRight size={16} />
            </Link>
            <Link
              href="/book"
              className="flex items-center gap-2 border border-[#1A1814] text-[#1A1814] px-6 py-3 rounded hover:bg-[#1A1814] hover:text-white transition-colors font-body"
            >
              Book a Call
            </Link>
          </div>
        </div>
        <div className="relative">
          <div className="bg-[#EDE9E3] rounded-2xl p-10 aspect-square flex items-center justify-center">
            <div className="text-center">
              <div className="font-heading text-8xl font-light text-[#C4622D] mb-2">MN</div>
              <div className="font-body text-sm text-[#7A7570] uppercase tracking-widest">
                Design Consultancy
              </div>
            </div>
          </div>
          <div className="absolute -bottom-6 -left-6 bg-white shadow-lg rounded-xl px-6 py-4">
            <div className="font-heading text-3xl text-[#C4622D]">150+</div>
            <div className="font-body text-xs text-[#7A7570]">Teams Transformed</div>
          </div>
        </div>
      </div>
    </section>
  );
}
