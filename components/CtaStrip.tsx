import Link from "next/link";

export default function CtaStrip() {
  return (
    <section className="bg-[#C4622D] py-16 px-6">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="font-heading text-5xl text-white mb-4">Ready to level up your design practice?</h2>
        <p className="font-body text-white/80 text-lg mb-8">
          Book a free discovery call and let&apos;s find the right engagement for your goals.
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <Link
            href="/book"
            className="bg-white text-[#C4622D] px-8 py-3 rounded font-body font-semibold hover:bg-[#F5F2EE] transition-colors"
          >
            Book a Free Call
          </Link>
          <Link
            href="/services"
            className="border border-white text-white px-8 py-3 rounded font-body hover:bg-white/10 transition-colors"
          >
            View Services
          </Link>
        </div>
      </div>
    </section>
  );
}
