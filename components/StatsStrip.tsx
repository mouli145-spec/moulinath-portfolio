const stats = [
  { value: "15+", label: "Years Experience" },
  { value: "150+", label: "Teams Transformed" },
  { value: "₹2Cr+", label: "Value Delivered" },
  { value: "40+", label: "Enterprise Clients" },
];

export default function StatsStrip() {
  return (
    <section className="bg-[#1A1814] py-10">
      <div className="max-w-6xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-8">
        {stats.map((s) => (
          <div key={s.label} className="text-center">
            <div className="font-heading text-4xl text-[#C4622D] mb-1">{s.value}</div>
            <div className="font-body text-sm text-[#7A7570] uppercase tracking-wider">{s.label}</div>
          </div>
        ))}
      </div>
    </section>
  );
}
