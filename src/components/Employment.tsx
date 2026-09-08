import ScrollReveal from "./ScrollReveal";

const perks = [
  {
    title: "Flexible Scheduling",
    description: "Work hours that fit your life, whether part-time or full-time.",
    icon: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5" />
      </svg>
    ),
  },
  {
    title: "Growth Opportunities",
    description: "Build a career path from team member to management and beyond.",
    icon: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path d="M2.25 18L9 11.25l4.306 4.307a11.95 11.95 0 015.814-5.519l2.74-1.22m0 0l-5.94-2.28m5.94 2.28l-2.28 5.941" />
      </svg>
    ),
  },
  {
    title: "Team Culture",
    description: "Join a supportive family-owned environment that values every member.",
    icon: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
      </svg>
    ),
  },
  {
    title: "Competitive Pay",
    description: "Fair compensation with opportunities for raises and bonuses.",
    icon: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path d="M12 6v12m-3-2.818l.879.659c1.171.879 3.07.879 4.242 0 1.172-.879 1.172-2.303 0-3.182C13.536 12.219 12.768 12 12 12c-.725 0-1.45-.22-2.003-.659-1.106-.879-1.106-2.303 0-3.182s2.9-.879 4.006 0l.415.33M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
  },
];

export default function Employment() {
  return (
    <section id="employment" className="bg-off-white py-24 md:py-32 pattern-dots">
      <div className="mx-auto max-w-6xl px-6">
        <ScrollReveal>
          <div className="mx-auto max-w-3xl text-center">
            <span className="inline-block text-sm font-semibold uppercase tracking-widest text-green-primary">
              Careers
            </span>
            <h2 className="mt-4 text-3xl font-bold tracking-tight text-charcoal sm:text-4xl md:text-5xl">
              Grow With <span className="text-green-primary">Our Team</span>
            </h2>
            <p className="mt-6 text-lg leading-relaxed text-charcoal-light">
              We are always looking for energetic and motivated individuals to
              join our team. Whether you are looking for some part time work or
              to build a career with us, we have opportunities for everyone.
            </p>
          </div>
        </ScrollReveal>

        {/* Perks grid */}
        <ScrollReveal stagger className="mt-16">
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {perks.map((perk) => (
              <div
                key={perk.title}
                className="reveal rounded-2xl bg-white p-6 shadow-sm transition-all hover:shadow-md hover:-translate-y-1"
              >
                <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-xl bg-green-light text-green-primary">
                  {perk.icon}
                </div>
                <h3 className="text-base font-semibold text-charcoal">
                  {perk.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-charcoal-light">
                  {perk.description}
                </p>
              </div>
            ))}
          </div>
        </ScrollReveal>

        {/* CTA */}
        <ScrollReveal className="mt-16">
          <div className="rounded-2xl bg-gradient-to-br from-charcoal to-[#252540] p-10 text-center md:p-16">
            <h3 className="text-2xl font-bold text-white sm:text-3xl">
              Ready to Join Our Family?
            </h3>
            <p className="mx-auto mt-4 max-w-xl text-base leading-relaxed text-white/70">
              We&rsquo;d love to hear from you. Send us your resume and let&rsquo;s start
              a conversation about your future with Shila LLC.
            </p>
            <a
              href="mailto:careers@shilallc.com"
              className="group mt-8 inline-flex items-center gap-2 rounded-full bg-green-primary px-8 py-3.5 text-base font-semibold text-white transition-all hover:bg-green-dark hover:shadow-lg hover:shadow-green-primary/25"
            >
              Apply Now
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
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
