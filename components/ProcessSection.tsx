const steps = [
  {
    num: "01",
    title: "Discovery Call",
    desc: "We start with a free 30-minute call to understand your goals, challenges, and what success looks like.",
  },
  {
    num: "02",
    title: "Proposal & Scope",
    desc: "I send a clear proposal with scope, deliverables, timeline, and pricing — no surprises.",
  },
  {
    num: "03",
    title: "Deep Work",
    desc: "Depending on the engagement, this is where workshops, audits, reviews, or coaching sessions happen.",
  },
  {
    num: "04",
    title: "Deliverables & Handoff",
    desc: "You receive polished, actionable deliverables with a follow-up session to walk through implementation.",
  },
];

export default function ProcessSection() {
  return (
    <section className="py-20 px-6 bg-[#EDE9E3]">
      <div className="max-w-6xl mx-auto">
        <p className="text-[#C4622D] font-body text-sm uppercase tracking-widest mb-3">How It Works</p>
        <h2 className="font-heading text-5xl text-[#1A1814] mb-12">My Process</h2>
        <div className="grid md:grid-cols-4 gap-8">
          {steps.map((s) => (
            <div key={s.num}>
              <div className="font-heading text-5xl text-[#C4622D] opacity-40 mb-3">{s.num}</div>
              <h3 className="font-heading text-2xl text-[#1A1814] mb-3">{s.title}</h3>
              <p className="font-body text-sm text-[#7A7570] leading-relaxed">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
