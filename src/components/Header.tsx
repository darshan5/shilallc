"use client";

import { useEffect, useState } from "react";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/about" },
  { label: "Employment", href: "/employment" },
  { label: "Charity", href: "/charity" },
  { label: "Contact", href: "/contact" },
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
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-3">
        {/* Logo */}
        <a href="/" className="shrink-0">
          <img
            src="/images/logo.png"
            alt="Shila"
            className={`h-10 w-auto transition-all ${
              scrolled ? "" : "brightness-0 invert"
            }`}
          />
        </a>

        {/* Desktop nav */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className={`text-sm font-medium transition-colors hover:text-brick ${
                scrolled ? "text-warm-gray" : "text-white/90"
              }`}
            >
              {link.label}
            </a>
          ))}
          <a
            href="/employment"
            className="rounded-full bg-brick px-5 py-2 text-sm font-semibold text-white transition-colors hover:bg-brick-dark"
          >
            Apply Now
          </a>
        </div>

        {/* Mobile menu button */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className={`md:hidden p-2 transition-colors ${
            scrolled ? "text-warm-dark" : "text-white"
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
                className="text-warm-gray text-base font-medium py-2 transition-colors hover:text-brick"
              >
                {link.label}
              </a>
            ))}
            <a
              href="/employment"
              onClick={() => setMobileOpen(false)}
              className="mt-2 rounded-full bg-brick px-5 py-2.5 text-center text-sm font-semibold text-white transition-colors hover:bg-brick-dark"
            >
              Apply Now
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
