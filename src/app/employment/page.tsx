import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ScrollReveal from "@/components/ScrollReveal";

export const metadata: Metadata = {
  title: "Employment | Shila LLC",
  description:
    "Join our team at Shila LLC, a family-owned Dunkin' Donuts franchise group in Bucks & Montgomery County, Pennsylvania. We're always looking for motivated individuals.",
};

const qualities = [
  {
    title: "Fun Work Environment",
    description: "Want to work in a fun and nurturing work environment",
    icon: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path d="M15.182 15.182a4.5 4.5 0 01-6.364 0M21 12a9 9 0 11-18 0 9 9 0 0118 0zM9.75 9.75c0 .414-.168.75-.375.75S9 10.164 9 9.75 9.168 9 9.375 9s.375.336.375.75zm-.375 0h.008v.015h-.008V9.75zm5.625 0c0 .414-.168.75-.375.75s-.375-.336-.375-.75.168-.75.375-.75.375.336.375.75zm-.375 0h.008v.015h-.008V9.75z" />
      </svg>
    ),
  },
  {
    title: "Positive Attitude",
    description: "Have a positive and upbeat attitude",
    icon: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path d="M6.633 10.5c.806 0 1.533-.446 2.031-1.08a9.041 9.041 0 012.861-2.4c.723-.384 1.35-.956 1.653-1.715a4.498 4.498 0 00.322-1.672V3a.75.75 0 01.75-.75A2.25 2.25 0 0116.5 4.5c0 1.152-.26 2.243-.723 3.218-.266.558.107 1.282.725 1.282h3.126c1.026 0 1.945.694 2.054 1.715.045.422.068.85.068 1.285a11.95 11.95 0 01-2.649 7.521c-.388.482-.987.729-1.605.729H13.48a4.53 4.53 0 01-1.423-.23l-3.114-1.04a4.501 4.501 0 00-1.423-.23H5.904M14.25 9h2.25M5.904 18.75c.083.205.173.405.27.602.197.4-.078.898-.523.898h-.908c-.889 0-1.713-.518-1.972-1.368a12 12 0 01-.521-3.507c0-1.553.295-3.036.831-4.398C3.387 10.203 4.167 9.75 5 9.75h1.053c.472 0 .745.556.5.96a8.958 8.958 0 00-1.302 4.665c0 1.194.232 2.333.654 3.375z" />
      </svg>
    ),
  },
  {
    title: "Team Player",
    description: "Hardworking, friendly, and team-oriented",
    icon: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path d="M15 19.128a9.38 9.38 0 002.625.372 9.337 9.337 0 004.121-.952 4.125 4.125 0 00-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 018.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0111.964-3.07M12 6.375a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zm8.25 2.25a2.625 2.625 0 11-5.25 0 2.625 2.625 0 015.25 0z" />
      </svg>
    ),
  },
  {
    title: "Growth Mindset",
    description: "Desire growth, learning and advancement opportunities",
    icon: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path d="M2.25 18L9 11.25l4.306 4.307a11.95 11.95 0 015.814-5.519l2.74-1.22m0 0l-5.94-2.28m5.94 2.28l-2.28 5.941" />
      </svg>
    ),
  },
  {
    title: "Great People & Food",
    description:
      "Looking for a fulfilling career around great people, great food & drinks",
    icon: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path d="M12 8.25v-1.5m0 1.5c-1.355 0-2.697.056-4.024.166C6.845 8.51 6 9.473 6 10.608v2.513m6-4.871c1.355 0 2.697.056 4.024.166C17.155 8.51 18 9.473 18 10.608v2.513M15 8.25v-1.5m-6 1.5v-1.5m12 9.75l-1.5.75a3.354 3.354 0 01-3 0 3.354 3.354 0 00-3 0 3.354 3.354 0 01-3 0 3.354 3.354 0 00-3 0 3.354 3.354 0 01-3 0L3 16.5m15-3.379a48.474 48.474 0 00-6-.371c-2.032 0-4.034.126-6 .371m12 0c.39.049.777.102 1.163.16 1.07.16 1.837 1.094 1.837 2.175v5.169c0 .621-.504 1.125-1.125 1.125H4.125A1.125 1.125 0 013 20.625v-5.17c0-1.08.768-2.014 1.837-2.174A47.78 47.78 0 016 13.12M12.265 3.11a.375.375 0 11-.53 0L12 2.845l.265.265z" />
      </svg>
    ),
  },
  {
    title: "Fast-Paced",
    description: "Thrive in a fast-paced work environment",
    icon: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" />
      </svg>
    ),
  },
];

export default function EmploymentPage() {
  return (
    <>
      <Header />
      <main>
        {/* Hero */}
        <section className="relative flex items-center justify-center overflow-hidden py-32 md:py-40">
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: "url(/images/employment-team.jpg)" }}
          />
          <div className="absolute inset-0 bg-warm-dark/75" />
          <div className="relative z-10 mx-auto max-w-4xl px-6 text-center">
            <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl md:text-6xl">
              Build Your Career With Us
            </h1>
            <p className="mx-auto mt-4 max-w-2xl text-lg text-white/70">
              Join a family-owned team that values growth, respect, and great service
            </p>
          </div>
        </section>

        {/* What We Look For */}
        <section className="bg-white py-24 md:py-32">
          <div className="mx-auto max-w-6xl px-6">
            <ScrollReveal>
              <div className="mx-auto max-w-3xl text-center">
                <span className="inline-block text-sm font-semibold uppercase tracking-widest text-brick">
                  Join Us
                </span>
                <h2 className="mt-4 text-3xl font-bold tracking-tight text-warm-dark sm:text-4xl">
                  We Are Looking for Individuals That
                </h2>
              </div>
            </ScrollReveal>

            <ScrollReveal stagger className="mt-16">
              <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
                {qualities.map((q) => (
                  <div
                    key={q.title}
                    className="reveal rounded-2xl border border-gray-100 bg-cream p-6 transition-all hover:border-brick/20 hover:shadow-lg hover:shadow-brick/5"
                  >
                    <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-xl bg-brick-pale text-brick">
                      {q.icon}
                    </div>
                    <h3 className="text-base font-semibold text-warm-dark">
                      {q.title}
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-warm-gray">
                      {q.description}
                    </p>
                  </div>
                ))}
              </div>
            </ScrollReveal>
          </div>
        </section>

        {/* Apply CTA */}
        <section className="bg-cream py-24 md:py-32 pattern-dots">
          <div className="mx-auto max-w-4xl px-6">
            <ScrollReveal>
              <div className="rounded-2xl bg-warm-dark p-10 text-center md:p-16">
                <h3 className="text-2xl font-bold text-white sm:text-3xl">
                  Ready to Join Our Family?
                </h3>
                <p className="mx-auto mt-4 max-w-xl text-base leading-relaxed text-white/70">
                  We&rsquo;d love to hear from you. Send us your resume and
                  let&rsquo;s start a conversation about your future with Shila
                  LLC.
                </p>
                <a
                  href="mailto:careers@shilallc.com"
                  className="group mt-8 inline-flex items-center gap-2 rounded-full bg-brick px-8 py-3.5 text-base font-semibold text-white transition-all hover:bg-brick-dark hover:shadow-lg hover:shadow-brick/25"
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

        {/* Franchise Disclaimer */}
        <section className="bg-white py-12">
          <div className="mx-auto max-w-3xl px-6">
            <p className="text-xs leading-relaxed text-warm-gray text-center">
              Please Note: You are applying for work with a franchisee of
              Dunkin&rsquo; Donuts, not Dunkin&rsquo; Brands, Inc. or any of its
              affiliates. Any application or information you submit will be
              provided solely to the franchisee. If hired, the franchisee will
              be your only employer. Franchisees are independent business owners
              who are solely responsible for their own employees and set their
              own wage and benefit programs that can vary among franchisees.
            </p>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
