import ScrollReveal from "./ScrollReveal";

const stats = [
  {
    number: "25+",
    label: "Years of Service",
    icon: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
  },
  {
    number: "Multiple",
    label: "Locations Across PA",
    icon: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
        <path d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
      </svg>
    ),
  },
  {
    number: "100+",
    label: "Team Members Strong",
    icon: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path d="M15 19.128a9.38 9.38 0 002.625.372 9.337 9.337 0 004.121-.952 4.125 4.125 0 00-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 018.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0111.964-3.07M12 6.375a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zm8.25 2.25a2.625 2.625 0 11-5.25 0 2.625 2.625 0 015.25 0z" />
      </svg>
    ),
  },
];

export default function About() {
  return (
    <section id="about" className="bg-white py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-6">
        <ScrollReveal>
          <div className="mx-auto max-w-3xl text-center">
            <span className="inline-block text-sm font-semibold uppercase tracking-widest text-green-primary">
              About Us
            </span>
            <h2 className="mt-4 text-3xl font-bold tracking-tight text-charcoal sm:text-4xl md:text-5xl">
              A Family Legacy of{" "}
              <span className="text-green-primary">Excellence</span>
            </h2>
            <p className="mt-6 text-lg leading-relaxed text-charcoal-light">
              Founded in 1999, we are a family owned multi-unit Dunkin&rsquo;
              Donuts franchise group. We currently own and operate Dunkin&rsquo;
              Donuts restaurants in Bucks and Montgomery County, Pennsylvania.
              We have an exceptional management team, well maintained stores
              and, most importantly, amazing team members at all of our
              locations.
            </p>
          </div>
        </ScrollReveal>

        {/* Stats */}
        <ScrollReveal stagger className="mt-16 md:mt-20">
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-3">
            {stats.map((stat) => (
              <div
                key={stat.label}
                className="reveal group rounded-2xl border border-gray-100 bg-off-white p-8 text-center transition-all hover:border-green-primary/20 hover:shadow-lg hover:shadow-green-primary/5"
              >
                <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-green-light text-green-primary transition-colors group-hover:bg-green-primary group-hover:text-white">
                  {stat.icon}
                </div>
                <div className="text-3xl font-bold text-charcoal sm:text-4xl">
                  {stat.number}
                </div>
                <div className="mt-2 text-sm font-medium text-charcoal-light">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
