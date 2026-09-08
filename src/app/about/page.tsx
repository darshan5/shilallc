import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ScrollReveal from "@/components/ScrollReveal";

export const metadata: Metadata = {
  title: "About Us | Shila LLC",
  description:
    "Learn about Shila LLC, a family-owned multi-unit Dunkin' Donuts franchise group serving Bucks & Montgomery County, Pennsylvania since 1999.",
};

export default function AboutPage() {
  return (
    <>
      <Header />
      <main>
        {/* Hero */}
        <section className="relative flex items-center justify-center overflow-hidden py-32 md:py-40">
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: "url(/images/store-photo-2.jpg)" }}
          />
          <div className="absolute inset-0 bg-warm-dark/70" />
          <div className="relative z-10 mx-auto max-w-4xl px-6 text-center">
            <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl md:text-6xl">
              Our Story
            </h1>
            <p className="mx-auto mt-4 max-w-2xl text-lg text-white/70">
              A family legacy of dedication, service, and community since 1999
            </p>
          </div>
        </section>

        {/* Company Story */}
        <section className="bg-white py-24 md:py-32">
          <div className="mx-auto max-w-6xl px-6">
            <ScrollReveal>
              <div className="mx-auto max-w-3xl text-center">
                <span className="inline-block text-sm font-semibold uppercase tracking-widest text-brick">
                  Who We Are
                </span>
                <h2 className="mt-4 text-3xl font-bold tracking-tight text-warm-dark sm:text-4xl">
                  Family Owned. Community Driven.
                </h2>
                <p className="mt-6 text-lg leading-relaxed text-warm-gray">
                  Founded in 1999, we are a family owned multi-unit Dunkin&rsquo;
                  Donuts franchise group. We currently own and operate
                  Dunkin&rsquo; Donuts restaurants in Bucks and Montgomery
                  County, Pennsylvania. We have an exceptional management team,
                  well maintained stores and, most importantly, amazing team
                  members at all of our locations.
                </p>
              </div>
            </ScrollReveal>
          </div>
        </section>

        {/* Founders Section */}
        <section className="bg-cream py-24 md:py-32 pattern-dots">
          <div className="mx-auto max-w-6xl px-6">
            <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2">
              <ScrollReveal>
                <div className="overflow-hidden rounded-2xl">
                  <img
                    src="/images/about-team.jpg"
                    alt="Shila LLC founders Bob and Aruna"
                    className="h-full w-full object-cover"
                  />
                </div>
              </ScrollReveal>

              <ScrollReveal>
                <div>
                  <span className="inline-block text-sm font-semibold uppercase tracking-widest text-brick">
                    Our Founders
                  </span>
                  <h2 className="mt-4 text-3xl font-bold tracking-tight text-warm-dark sm:text-4xl">
                    Where It All Began
                  </h2>
                  <p className="mt-6 text-lg leading-relaxed text-warm-gray">
                    Bob and Aruna opened their first store in Willow Grove, PA
                    19090. From then till now, our values to treat employees like
                    family and deliver the best experience to our guests have
                    remained unchanged.
                  </p>
                  <p className="mt-4 text-lg leading-relaxed text-warm-gray">
                    We now have locations throughout Bucks and Montgomery County
                    in Pennsylvania, each one upholding the same commitment to
                    quality and community that started with our very first store.
                  </p>
                </div>
              </ScrollReveal>
            </div>
          </div>
        </section>

        {/* Values & Vision */}
        <section className="bg-white py-24 md:py-32">
          <div className="mx-auto max-w-6xl px-6">
            <ScrollReveal>
              <div className="mx-auto max-w-3xl text-center">
                <span className="inline-block text-sm font-semibold uppercase tracking-widest text-brick">
                  Our Values
                </span>
                <h2 className="mt-4 text-3xl font-bold tracking-tight text-warm-dark sm:text-4xl">
                  Family First
                </h2>
                <p className="mt-6 text-lg leading-relaxed text-warm-gray">
                  Our employees are our family, and we treat each other with
                  respect and kindness. They extend this respect to our guests
                  and provide the best experience at the store. We work hard to
                  provide a clean and friendly environment.
                </p>
              </div>
            </ScrollReveal>

            <ScrollReveal stagger className="mt-16">
              <div className="grid grid-cols-1 gap-8 sm:grid-cols-3">
                <div className="reveal rounded-2xl border border-gray-100 bg-cream p-8 text-center">
                  <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-brick-pale text-brick">
                    <svg className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                      <path d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
                    </svg>
                  </div>
                  <h3 className="text-lg font-semibold text-warm-dark">Respect</h3>
                  <p className="mt-3 text-sm leading-relaxed text-warm-gray">
                    We treat every team member and guest with kindness and dignity.
                  </p>
                </div>

                <div className="reveal rounded-2xl border border-gray-100 bg-cream p-8 text-center">
                  <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-brick-pale text-brick">
                    <svg className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                      <path d="M15 19.128a9.38 9.38 0 002.625.372 9.337 9.337 0 004.121-.952 4.125 4.125 0 00-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 018.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0111.964-3.07M12 6.375a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zm8.25 2.25a2.625 2.625 0 11-5.25 0 2.625 2.625 0 015.25 0z" />
                    </svg>
                  </div>
                  <h3 className="text-lg font-semibold text-warm-dark">Family</h3>
                  <p className="mt-3 text-sm leading-relaxed text-warm-gray">
                    Our team is our family, and we support each other every day.
                  </p>
                </div>

                <div className="reveal rounded-2xl border border-gray-100 bg-cream p-8 text-center">
                  <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-brick-pale text-brick">
                    <svg className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                      <path d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z" />
                    </svg>
                  </div>
                  <h3 className="text-lg font-semibold text-warm-dark">Excellence</h3>
                  <p className="mt-3 text-sm leading-relaxed text-warm-gray">
                    We maintain clean, friendly stores that deliver outstanding service.
                  </p>
                </div>
              </div>
            </ScrollReveal>

            {/* CTA */}
            <ScrollReveal className="mt-16">
              <div className="text-center">
                <a
                  href="/employment"
                  className="group inline-flex items-center gap-2 rounded-full bg-brick px-8 py-3.5 text-base font-semibold text-white transition-all hover:bg-brick-dark hover:shadow-lg hover:shadow-brick/25"
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
              </div>
            </ScrollReveal>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
