import { Metadata } from "next";
import Link from "next/link";
import { Calendar, Clock, Video, CheckCircle } from "lucide-react";

export const metadata: Metadata = {
  title: "Book a Call — Moulinath N.",
  description: "Book a free 30-minute discovery call with Moulinath N. to discuss your design challenges.",
};

const services = [
  { href: "/services/portfolio-review", title: "Portfolio Review", price: "₹4,999" },
  { href: "/services/ux-leadership-coaching", title: "UX Leadership Coaching", price: "₹9,999/mo" },
  { href: "/services/ai-for-design-workshops", title: "AI for Design Workshop", price: "₹24,999" },
  { href: "/services/design-team-audits", title: "Design Team Audit", price: "₹49,999" },
];

export default function BookPage() {
  return (
    <div className="bg-[#F5F2EE] min-h-screen">
      <section className="max-w-5xl mx-auto px-6 py-20">
        <p className="text-[#C4622D] font-body text-sm uppercase tracking-widest mb-3">Schedule</p>
        <h1 className="font-heading text-6xl text-[#1A1814] mb-6">Book a Call</h1>
        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <p className="font-body text-lg text-[#7A7570] mb-8 leading-relaxed">
              Start with a free 30-minute discovery call. We&apos;ll discuss your goals, challenges, and
              which engagement makes the most sense for where you are right now. No pressure, no pitch.
            </p>
            <div className="space-y-4 mb-10">
              {[
                { icon: Clock, text: "30 minutes" },
                { icon: Video, text: "Google Meet or Zoom" },
                { icon: Calendar, text: "Mon–Fri, 9am–6pm IST" },
                { icon: CheckCircle, text: "Free — no obligation" },
              ].map(({ icon: Icon, text }) => (
                <div key={text} className="flex items-center gap-3">
                  <Icon size={20} className="text-[#C4622D]" />
                  <span className="font-body text-[#7A7570]">{text}</span>
                </div>
              ))}
            </div>
            <div className="bg-[#EDE9E3] rounded-xl p-6">
              <h3 className="font-heading text-2xl text-[#1A1814] mb-4">Or book a paid service directly</h3>
              <div className="space-y-3">
                {services.map((s) => (
                  <Link
                    key={s.href}
                    href={s.href}
                    className="flex items-center justify-between p-3 bg-white rounded-lg hover:shadow-sm transition-shadow"
                  >
                    <span className="font-body text-sm text-[#1A1814]">{s.title}</span>
                    <span className="font-heading text-[#C4622D]">{s.price}</span>
                  </Link>
                ))}
              </div>
            </div>
          </div>
          <div className="bg-[#EDE9E3] rounded-xl p-8">
            <h2 className="font-heading text-3xl text-[#1A1814] mb-6">Schedule Your Call</h2>
            {/* Placeholder for calendar embed */}
            <div className="bg-white rounded-xl p-8 text-center border-2 border-dashed border-[#d4cfc9] mb-6">
              <Calendar size={40} className="text-[#C4622D] mx-auto mb-4" />
              <p className="font-body text-[#7A7570] text-sm mb-4">
                Calendar booking widget will be embedded here (Cal.com, Calendly, etc.)
              </p>
              <p className="font-body text-xs text-[#7A7570]">
                In the meantime, email{" "}
                <a href="mailto:hello@moulinathn.com" className="text-[#C4622D] hover:underline">
                  hello@moulinathn.com
                </a>{" "}
                to schedule.
              </p>
            </div>
            <Link
              href="/contact"
              className="block text-center border border-[#1A1814] text-[#1A1814] py-3 rounded-lg font-body hover:bg-[#1A1814] hover:text-white transition-colors"
            >
              Or send a message instead
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
