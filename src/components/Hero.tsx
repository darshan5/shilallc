export default function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-charcoal via-[#252540] to-[#1a2a1a]" />

      {/* Decorative circles */}
      <div className="absolute top-1/4 -left-32 w-96 h-96 rounded-full bg-green-primary/10 blur-3xl" />
      <div className="absolute bottom-1/4 -right-32 w-80 h-80 rounded-full bg-green-primary/8 blur-3xl" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full border border-green-primary/5" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] rounded-full border border-green-primary/8" />

      {/* Content */}
      <div className="relative z-10 mx-auto max-w-4xl px-6 text-center">
        {/* Pill badge */}
        <div className="mb-8 inline-flex items-center gap-2 rounded-full border border-green-primary/30 bg-green-primary/10 px-4 py-1.5">
          <span className="h-2 w-2 rounded-full bg-green-primary animate-pulse" />
          <span className="text-sm font-medium text-green-primary">
            Serving Pennsylvania Since 1999
          </span>
        </div>

        <h1 className="text-4xl font-bold leading-tight tracking-tight text-white sm:text-5xl md:text-6xl lg:text-7xl">
          Laying the Foundation
          <br />
          <span className="text-green-primary">for Success</span>
        </h1>

        <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-white/70 sm:text-xl">
          Family-owned Dunkin&rsquo; franchise group serving Bucks &amp;
          Montgomery County, Pennsylvania since 1999
        </p>

        <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <a
            href="#employment"
            className="group inline-flex items-center gap-2 rounded-full bg-green-primary px-8 py-3.5 text-base font-semibold text-white transition-all hover:bg-green-dark hover:shadow-lg hover:shadow-green-primary/25"
          >
            Join Our Team
            <svg
              className="h-4 w-4 transition-transform group-hover:translate-x-0.5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
          <a
            href="#about"
            className="inline-flex items-center gap-2 rounded-full border border-white/20 px-8 py-3.5 text-base font-semibold text-white transition-all hover:border-white/40 hover:bg-white/5"
          >
            Learn More
          </a>
        </div>

        {/* Scroll indicator */}
        <div className="mt-20 flex flex-col items-center gap-2 text-white/30">
          <span className="text-xs tracking-widest uppercase">Scroll</span>
          <svg className="h-5 w-5 animate-bounce" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
            <path d="M19 14l-7 7m0 0l-7-7" />
          </svg>
        </div>
      </div>
    </section>
  );
}
