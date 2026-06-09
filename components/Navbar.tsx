"use client";

import Link from "next/link";
import { useState } from "react";
import { Menu, X } from "lucide-react";

const links = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/services", label: "Services" },
  { href: "/case-studies", label: "Case Studies" },
  { href: "/blog", label: "Blog" },
  { href: "/contact", label: "Contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-[#F5F2EE] border-b border-[#EDE9E3]">
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        <Link href="/" className="font-heading text-xl font-semibold text-[#1A1814]">
          Moulinath N.
        </Link>
        <nav className="hidden md:flex items-center gap-8">
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className="text-sm font-body text-[#7A7570] hover:text-[#1A1814] transition-colors"
            >
              {l.label}
            </Link>
          ))}
          <Link
            href="/book"
            className="bg-[#C4622D] text-white text-sm px-4 py-2 rounded hover:bg-[#a84f22] transition-colors"
          >
            Book a Call
          </Link>
        </nav>
        <button
          className="md:hidden text-[#1A1814]"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>
      {open && (
        <div className="md:hidden bg-[#F5F2EE] border-t border-[#EDE9E3] px-6 py-4 flex flex-col gap-4">
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className="text-sm font-body text-[#7A7570] hover:text-[#1A1814]"
              onClick={() => setOpen(false)}
            >
              {l.label}
            </Link>
          ))}
          <Link
            href="/book"
            className="bg-[#C4622D] text-white text-sm px-4 py-2 rounded text-center hover:bg-[#a84f22]"
            onClick={() => setOpen(false)}
          >
            Book a Call
          </Link>
        </div>
      )}
    </header>
  );
}
