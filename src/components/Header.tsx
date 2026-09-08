"use client";

import { useEffect, useState } from "react";

const navLinks = [
  { label: "About", href: "/#about" },
  { label: "Careers", href: "/#employment" },
  { label: "Community", href: "/#charity" },
  { label: "Contact", href: "/#contact" },
];

export default function Header({ solid = false }: { solid?: boolean }) {
  const [scrolled, setScrolled] = useState(solid);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    if (solid) return;
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, [solid]);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/95 backdrop-blur-md shadow-sm"
          : "bg-transparent"
      }`}
    >
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        {/* Logo */}
        <a
          href="/"
          className={`text-xl font-bold tracking-tight transition-colors ${
            scrolled ? "text-charcoal" : "text-white"
          }`}
        >
          <span className="text-green-primary">Shila</span>
          <span className="font-light ml-0.5">LLC</span>
        </a>

        {/* Desktop nav */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className={`text-sm font-medium transition-colors hover:text-green-primary ${
                scrolled ? "text-charcoal-light" : "text-white/90"
              }`}
            >
              {link.label}
            </a>
          ))}
          <a
            href="/#employment"
            className="rounded-full bg-green-primary px-5 py-2 text-sm font-semibold text-white transition-colors hover:bg-green-dark"
          >
            Join Our Team
          </a>
        </div>

        {/* Mobile menu button */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className={`md:hidden p-2 transition-colors ${
            scrolled ? "text-charcoal" : "text-white"
          }`}
          aria-label="Toggle menu"
        >
          {mobileOpen ? (
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M18 6L6 18M6 6l12 12" />
            </svg>
          ) : (
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M3 12h18M3 6h18M3 18h18" />
            </svg>
          )}
        </button>
      </nav>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="md:hidden bg-white border-t border-gray-100 shadow-lg">
          <div className="flex flex-col px-6 py-4 gap-3">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className="text-charcoal-light text-base font-medium py-2 transition-colors hover:text-green-primary"
              >
                {link.label}
              </a>
            ))}
            <a
              href="/#employment"
              onClick={() => setMobileOpen(false)}
              className="mt-2 rounded-full bg-green-primary px-5 py-2.5 text-center text-sm font-semibold text-white transition-colors hover:bg-green-dark"
            >
              Join Our Team
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
