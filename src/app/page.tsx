import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ScrollReveal from "@/components/ScrollReveal";

const stats = [
  { number: "25+", label: "Years of Service" },
  { number: "Multiple", label: "Locations in PA" },
  { number: "100+", label: "Team Members" },
];

export default function Home() {
  return (
    <>
      <Header />
      <main>
        {/* Hero Section */}
        <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: "url(/images/hero-bg.jpg)" }}
          />
          <div className="absolute inset-0 bg-warm-dark/70" />

          <div className="relative z-10 mx-auto max-w-4xl px-6 text-center">
            <h1 className="text-4xl font-bold leading-tight tracking-tight text-white sm:text-5xl md:text-6xl lg:text-7xl">
              Laying the Foundation
              <br />
              <span className="text-brick-light">for Success</span>
            </h1>

            <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-white/80 sm:text-xl">
              Family-owned Dunkin&rsquo; franchise group proudly serving Bucks
              &amp; Montgomery County, Pennsylvania since 1999
            </p>

            <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <a
                href="/employment"
                className="group inline-flex items-center gap-2 rounded-full bg-brick px-8 py-3.5 text-base font-semibold text-white transition-all hover:bg-brick-dark hover:shadow-lg hover:shadow-brick/25"
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
              <a
                href="/about"
                className="inline-flex items-center gap-2 rounded-full border border-white/20 px-8 py-3.5 text-base font-semibold text-white transition-all hover:border-white/40 hover:bg-white/5"
              >
                About Us
              </a>
            </div>

            <p className="mx-auto mt-16 max-w-2xl text-xs leading-relaxed text-white/40">
              The Dunkin&rsquo; Donuts restaurants are independently owned and
              operated by Shila LLC under a franchise granted by Dunkin&rsquo;
              Donuts Franchising LLC.
            </p>
          </div>
        </section>

        {/* About Preview Section */}
        <section className="bg-white py-24 md:py-32">
          <div className="mx-auto max-w-6xl px-6">
            <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2">
              <ScrollReveal>
                <div>
                  <span className="inline-block text-sm font-semibold uppercase tracking-widest text-brick">
                    About Us
                  </span>
                  <h2 className="mt-4 text-3xl font-bold tracking-tight text-warm-dark sm:text-4xl">
                    A Family Legacy of Excellence
                  </h2>
                  <p className="mt-6 text-lg leading-relaxed text-warm-gray">
                    Founded in 1999, we are a family owned multi-unit
                    Dunkin&rsquo; Donuts franchise group. We currently own and
                    operate Dunkin&rsquo; Donuts restaurants in Bucks and
                    Montgomery County, Pennsylvania.
                  </p>

                  {/* Stats */}
                  <div className="mt-10 grid grid-cols-3 gap-6">
                    {stats.map((stat) => (
                      <div key={stat.label}>
                        <div className="text-2xl font-bold text-brick sm:text-3xl">
                          {stat.number}
                        </div>
                        <div className="mt-1 text-sm font-medium text-warm-gray">
                          {stat.label}
                        </div>
                      </div>
                    ))}
                  </div>

                  <a
                    href="/about"
                    className="group mt-8 inline-flex items-center gap-2 text-base font-semibold text-brick transition-colors hover:text-brick-dark"
                  >
                    Learn Our Story
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

              <ScrollReveal>
                <div className="overflow-hidden rounded-2xl">
                  <img
                    src="/images/about-team.jpg"
                    alt="Shila LLC founders"
                    className="h-full w-full object-cover"
                  />
                </div>
              </ScrollReveal>
            </div>
          </div>
        </section>

        {/* Employment Preview */}
        <section className="relative overflow-hidden py-24 md:py-32">
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: "url(/images/employment-team.jpg)" }}
          />
          <div className="absolute inset-0 bg-warm-dark/80" />

          <div className="relative z-10 mx-auto max-w-4xl px-6 text-center">
            <ScrollReveal>
              <span className="inline-block text-sm font-semibold uppercase tracking-widest text-brick-light">
                Careers
              </span>
              <h2 className="mt-4 text-3xl font-bold tracking-tight text-white sm:text-4xl md:text-5xl">
                Build Your Career With Us
              </h2>
              <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-white/80">
                We are always looking for energetic and motivated individuals to
                join our team. Whether you are looking for part time work or to
                build a career with us, we have opportunities for everyone.
              </p>
              <a
                href="/employment"
                className="group mt-10 inline-flex items-center gap-2 rounded-full bg-brick px-8 py-3.5 text-base font-semibold text-white transition-all hover:bg-brick-dark hover:shadow-lg hover:shadow-brick/25"
              >
                View Opportunities
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
            </ScrollReveal>
          </div>
        </section>

        {/* Charity Preview */}
        <section className="bg-cream py-24 md:py-32 pattern-dots">
          <div className="mx-auto max-w-6xl px-6">
            <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2">
              <ScrollReveal>
                <div className="overflow-hidden rounded-2xl">
                  <img
                    src="/images/charity-event.jpg"
                    alt="Shila LLC charity event with kids"
                    className="h-full w-full object-cover"
                  />
                </div>
              </ScrollReveal>

              <ScrollReveal>
                <div>
                  <span className="inline-block text-sm font-semibold uppercase tracking-widest text-brick">
                    Community
                  </span>
                  <h2 className="mt-4 text-3xl font-bold tracking-tight text-warm-dark sm:text-4xl">
                    Giving Back to Our Community
                  </h2>
                  <p className="mt-6 text-lg leading-relaxed text-warm-gray">
                    We have partnered with various charities such as the Joy in
                    Childhood Foundation and Roast Hunger as well as local food
                    banks. We take pride in giving back to our communities.
                  </p>
                  <a
                    href="/charity"
                    className="group mt-8 inline-flex items-center gap-2 text-base font-semibold text-brick transition-colors hover:text-brick-dark"
                  >
                    Learn More
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
