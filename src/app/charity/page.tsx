import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ScrollReveal from "@/components/ScrollReveal";

export const metadata: Metadata = {
  title: "Charity | Shila LLC",
  description:
    "Shila LLC gives back to our communities through partnerships with the Joy in Childhood Foundation, Roast Hunger, and local food banks.",
};

const partners = [
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

export default function CharityPage() {
  return (
    <>
      <Header />
      <main>
        {/* Hero */}
        <section className="relative flex items-center justify-center overflow-hidden py-32 md:py-40">
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: "url(/images/charity-event.jpg)" }}
          />
          <div className="absolute inset-0 bg-warm-dark/70" />
          <div className="relative z-10 mx-auto max-w-4xl px-6 text-center">
            <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl md:text-6xl">
              Giving Back
            </h1>
            <p className="mx-auto mt-4 max-w-2xl text-lg text-white/70">
              Making a difference in our communities through charitable partnerships
            </p>
          </div>
        </section>

        {/* Partners */}
        <section className="bg-white py-24 md:py-32">
          <div className="mx-auto max-w-6xl px-6">
            <ScrollReveal>
              <div className="mx-auto max-w-3xl text-center">
                <span className="inline-block text-sm font-semibold uppercase tracking-widest text-brick">
                  Our Partners
                </span>
                <h2 className="mt-4 text-3xl font-bold tracking-tight text-warm-dark sm:text-4xl">
                  Community Partnerships
                </h2>
                <p className="mt-6 text-lg leading-relaxed text-warm-gray">
                  We give back to the local communities and take pride in our
                  involvement with charitable organizations. We have partnered
                  with various charities to make a positive impact.
                </p>
              </div>
            </ScrollReveal>

            <ScrollReveal stagger className="mt-16">
              <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
                {partners.map((partner) => (
                  <div
                    key={partner.name}
                    className="reveal group relative rounded-2xl border border-gray-100 bg-cream p-8 transition-all hover:border-brick/20 hover:shadow-lg hover:shadow-brick/5"
                  >
                    <div className="absolute left-0 top-6 h-10 w-1 rounded-r-full bg-brick transition-all group-hover:h-14" />
                    <div className="ml-4">
                      <div className="mb-5 text-brick">{partner.icon}</div>
                      <h3 className="text-lg font-semibold text-warm-dark">
                        {partner.name}
                      </h3>
                      <p className="mt-3 text-sm leading-relaxed text-warm-gray">
                        {partner.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </ScrollReveal>
          </div>
        </section>

        {/* Fundraising */}
        <section className="bg-cream py-24 md:py-32 pattern-dots">
          <div className="mx-auto max-w-6xl px-6">
            <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2">
              <ScrollReveal>
                <div className="overflow-hidden rounded-2xl">
                  <img
                    src="/images/charity-event.jpg"
                    alt="Community charity event"
                    className="h-full w-full object-cover"
                  />
                </div>
              </ScrollReveal>

              <ScrollReveal>
                <div>
                  <span className="inline-block text-sm font-semibold uppercase tracking-widest text-brick">
                    Fundraising
                  </span>
                  <h2 className="mt-4 text-3xl font-bold tracking-tight text-warm-dark sm:text-4xl">
                    How We Can Help
                  </h2>
                  <p className="mt-6 text-lg leading-relaxed text-warm-gray">
                    Whether you are a local organization looking for a place to
                    raise funds for your organization or looking for a donation,
                    we are here to help. We take pride in giving back to our
                    communities.
                  </p>
                  <a
                    href="/contact"
                    className="group mt-8 inline-flex items-center gap-2 rounded-full bg-brick px-8 py-3.5 text-base font-semibold text-white transition-all hover:bg-brick-dark hover:shadow-lg hover:shadow-brick/25"
                  >
                    Get In Touch
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
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
