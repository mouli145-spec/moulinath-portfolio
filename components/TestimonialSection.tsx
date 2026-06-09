const testimonials = [
  {
    quote:
      "Moulinath's portfolio review was the most valuable hour I've spent on my career. I went from getting ignored to landing three senior UX offers within 6 weeks.",
    name: "Priya Krishnamurthy",
    role: "Senior UX Designer, Flipkart",
  },
  {
    quote:
      "The design team audit gave us clarity we'd been lacking for two years. The 90-day roadmap alone was worth every rupee.",
    name: "Akash Mehra",
    role: "VP Product, FinTech Startup",
  },
  {
    quote:
      "The AI for Design workshop transformed how our whole team works. We cut production time by 40% without losing quality.",
    name: "Sneha Patel",
    role: "Head of Design, SaaS Company",
  },
];

export default function TestimonialSection() {
  return (
    <section className="py-20 px-6 bg-[#F5F2EE]">
      <div className="max-w-6xl mx-auto">
        <p className="text-[#C4622D] font-body text-sm uppercase tracking-widest mb-3">Client Feedback</p>
        <h2 className="font-heading text-5xl text-[#1A1814] mb-12">What People Say</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((t) => (
            <div key={t.name} className="bg-[#EDE9E3] rounded-xl p-8">
              <p className="font-heading text-xl text-[#1A1814] leading-relaxed mb-6 italic">
                &ldquo;{t.quote}&rdquo;
              </p>
              <div>
                <div className="font-body font-semibold text-sm text-[#1A1814]">{t.name}</div>
                <div className="font-body text-xs text-[#7A7570]">{t.role}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
