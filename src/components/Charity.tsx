import ScrollReveal from "./ScrollReveal";

const charities = [
  {
    name: "Joy in Childhood Foundation",
    description:
      "Providing the simple joys of childhood to kids battling hunger and illness across the country.",
    icon: (
      <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path d="M15.182 15.182a4.5 4.5 0 01-6.364 0M21 12a9 9 0 11-18 0 9 9 0 0118 0zM9.75 9.75c0 .414-.168.75-.375.75S9 10.164 9 9.75 9.168 9 9.375 9s.375.336.375.75zm-.375 0h.008v.015h-.008V9.75zm5.625 0c0 .414-.168.75-.375.75s-.375-.336-.375-.75.168-.75.375-.75.375.336.375.75zm-.375 0h.008v.015h-.008V9.75z" />
      </svg>
    ),
  },
  {
    name: "Roast Hunger",
    description:
      "Fighting food insecurity by partnering with local food banks and hunger relief organizations.",
    icon: (
      <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path d="M12 8.25v-1.5m0 1.5c-1.355 0-2.697.056-4.024.166C6.845 8.51 6 9.473 6 10.608v2.513m6-4.871c1.355 0 2.697.056 4.024.166C17.155 8.51 18 9.473 18 10.608v2.513M15 8.25v-1.5m-6 1.5v-1.5m12 9.75l-1.5.75a3.354 3.354 0 01-3 0 3.354 3.354 0 00-3 0 3.354 3.354 0 01-3 0 3.354 3.354 0 00-3 0 3.354 3.354 0 01-3 0L3 16.5m15-3.379a48.474 48.474 0 00-6-.371c-2.032 0-4.034.126-6 .371m12 0c.39.049.777.102 1.163.16 1.07.16 1.837 1.094 1.837 2.175v5.169c0 .621-.504 1.125-1.125 1.125H4.125A1.125 1.125 0 013 20.625v-5.17c0-1.08.768-2.014 1.837-2.174A47.78 47.78 0 016 13.12M12.265 3.11a.375.375 0 11-.53 0L12 2.845l.265.265z" />
      </svg>
    ),
  },
  {
    name: "Local Food Banks",
    description:
      "Supporting our neighbors in Bucks and Montgomery County through partnerships with area food banks.",
    icon: (
      <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path d="M8.25 21v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21m0 0h4.5V3.545M12.75 21h7.5V10.75M2.25 21h1.5m18 0h-18M2.25 9l4.5-1.636M18.75 3l-1.5.545m0 6.205l3 1m1.5.5l-1.5-.5M6.75 7.364V3h-3v18m3-13.636l10.5-3.819" />
      </svg>
    ),
  },
];

export default function Charity() {
  return (
    <section id="charity" className="bg-white py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-6">
        <ScrollReveal>
          <div className="mx-auto max-w-3xl text-center">
            <span className="inline-block text-sm font-semibold uppercase tracking-widest text-green-primary">
              Community
            </span>
            <h2 className="mt-4 text-3xl font-bold tracking-tight text-charcoal sm:text-4xl md:text-5xl">
              Giving Back to{" "}
              <span className="text-green-primary">Our Community</span>
            </h2>
            <p className="mt-6 text-lg leading-relaxed text-charcoal-light">
              We give back to the local communities and take pride in our
              involvement with charitable organizations. We have partnered with
              various charities such as the Joy in Childhood Foundation and
              Roast Hunger as well as local food banks.
            </p>
          </div>
        </ScrollReveal>

        <ScrollReveal stagger className="mt-16">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
            {charities.map((charity) => (
              <div
                key={charity.name}
                className="reveal group relative rounded-2xl border border-gray-100 bg-off-white p-8 transition-all hover:border-green-primary/20 hover:shadow-lg hover:shadow-green-primary/5"
              >
                {/* Green accent bar */}
                <div className="absolute left-0 top-6 h-10 w-1 rounded-r-full bg-green-primary transition-all group-hover:h-14" />

                <div className="ml-4">
                  <div className="mb-5 text-green-primary">{charity.icon}</div>
                  <h3 className="text-lg font-semibold text-charcoal">
                    {charity.name}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-charcoal-light">
                    {charity.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
