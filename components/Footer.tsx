import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-[#1A1814] text-[#F5F2EE] py-12 mt-16">
      <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-3 gap-8">
        <div>
          <h3 className="font-heading text-2xl mb-3">Moulinath N.</h3>
          <p className="text-[#7A7570] text-sm leading-relaxed">
            Senior UX &amp; Design Strategy Consultant helping teams build world-class design practices.
          </p>
        </div>
        <div>
          <h4 className="font-body font-semibold text-sm uppercase tracking-wider mb-4 text-[#7A7570]">
            Quick Links
          </h4>
          <ul className="space-y-2 text-sm">
            {[
              { href: "/about", label: "About" },
              { href: "/services", label: "Services" },
              { href: "/case-studies", label: "Case Studies" },
              { href: "/blog", label: "Blog" },
              { href: "/contact", label: "Contact" },
            ].map((l) => (
              <li key={l.href}>
                <Link href={l.href} className="text-[#7A7570] hover:text-[#F5F2EE] transition-colors">
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h4 className="font-body font-semibold text-sm uppercase tracking-wider mb-4 text-[#7A7570]">
            Contact
          </h4>
          <p className="text-[#7A7570] text-sm">hello@moulinathn.com</p>
          <Link
            href="/book"
            className="inline-block mt-4 bg-[#C4622D] text-white text-sm px-5 py-2 rounded hover:bg-[#a84f22] transition-colors"
          >
            Book a Call
          </Link>
        </div>
      </div>
      <div className="max-w-6xl mx-auto px-6 mt-10 pt-6 border-t border-[#2e2b27] text-center text-[#7A7570] text-xs">
        © {new Date().getFullYear()} Moulinath N. All rights reserved.
      </div>
    </footer>
  );
}
