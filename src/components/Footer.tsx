const footerLinks = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/about" },
  { label: "Employment", href: "/employment" },
  { label: "Charity", href: "/charity" },
  { label: "Contact", href: "/contact" },
];

export default function Footer() {
  return (
    <footer className="bg-warm-dark py-16">
      <div className="mx-auto max-w-6xl px-6">
        {/* Top section */}
        <div className="flex flex-col items-center text-center">
          <a href="/">
            <img
              src="/images/logo.png"
              alt="Shila"
              className="h-10 w-auto brightness-0 invert"
            />
          </a>
          <p className="mt-4 max-w-md text-sm leading-relaxed text-white/60">
            Locally owned and operated, we strive daily for excellence in all we
            do.
          </p>

          {/* Nav links */}
          <div className="mt-8 flex flex-wrap justify-center gap-6">
            {footerLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm text-white/50 transition-colors hover:text-brick-light"
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>

        {/* Divider */}
        <div className="mt-12 border-t border-white/10" />

        {/* Bottom section */}
        <div className="mt-8 flex flex-col items-center gap-4 text-center">
          <p className="max-w-2xl text-xs leading-relaxed text-white/40">
            The Dunkin&rsquo; Donuts restaurants are independently owned and
            operated by Shila LLC under a franchise granted by Dunkin&rsquo;
            Donuts Franchising LLC. The Dunkin&rsquo; Donuts trademarks, logos
            and designs are trademarks of DD IP Holder LLC. Used under license.
          </p>
          <div className="flex flex-col items-center gap-2 sm:flex-row sm:gap-4">
            <p className="text-xs text-white/40">
              &copy; {new Date().getFullYear()} Shila LLC. All rights reserved.
            </p>
            <span className="hidden text-white/20 sm:inline">&middot;</span>
            <a
              href="/privacy"
              className="text-xs text-white/40 transition-colors hover:text-white/60"
            >
              Privacy Policy
            </a>
            <span className="hidden text-white/20 sm:inline">&middot;</span>
            <a
              href="/terms"
              className="text-xs text-white/40 transition-colors hover:text-white/60"
            >
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
