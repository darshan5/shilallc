import ScrollReveal from "./ScrollReveal";

export default function Contact() {
  return (
    <section id="contact" className="bg-off-white py-24 md:py-32 pattern-dots">
      <div className="mx-auto max-w-6xl px-6">
        <ScrollReveal>
          <div className="mx-auto max-w-3xl text-center">
            <span className="inline-block text-sm font-semibold uppercase tracking-widest text-green-primary">
              Contact
            </span>
            <h2 className="mt-4 text-3xl font-bold tracking-tight text-charcoal sm:text-4xl md:text-5xl">
              Get In <span className="text-green-primary">Touch</span>
            </h2>
            <p className="mt-6 text-lg leading-relaxed text-charcoal-light">
              We strive to provide exceptional service and welcome any feedback
              you may have.
            </p>
          </div>
        </ScrollReveal>

        <ScrollReveal stagger className="mt-16">
          <div className="mx-auto grid max-w-3xl grid-cols-1 gap-6 sm:grid-cols-2">
            {/* Email card */}
            <a
              href="mailto:info@shilallc.com"
              className="reveal group flex items-start gap-4 rounded-2xl bg-white p-6 shadow-sm transition-all hover:shadow-md hover:-translate-y-1"
            >
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-green-light text-green-primary transition-colors group-hover:bg-green-primary group-hover:text-white">
                <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                  <path d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                </svg>
              </div>
              <div>
                <h3 className="font-semibold text-charcoal">Email Us</h3>
                <p className="mt-1 text-sm text-charcoal-light">
                  General inquiries
                </p>
                <p className="mt-2 text-sm font-medium text-green-primary">
                  info@shilallc.com
                </p>
              </div>
            </a>

            {/* Careers card */}
            <a
              href="mailto:careers@shilallc.com"
              className="reveal group flex items-start gap-4 rounded-2xl bg-white p-6 shadow-sm transition-all hover:shadow-md hover:-translate-y-1"
            >
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-green-light text-green-primary transition-colors group-hover:bg-green-primary group-hover:text-white">
                <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                  <path d="M20.25 14.15v4.25c0 1.094-.787 2.036-1.872 2.18-2.087.277-4.216.42-6.378.42s-4.291-.143-6.378-.42c-1.085-.144-1.872-1.086-1.872-2.18v-4.25m16.5 0a2.18 2.18 0 00.75-1.661V8.706c0-1.081-.768-2.015-1.837-2.175a48.114 48.114 0 00-3.413-.387m4.5 8.006c-.194.165-.42.295-.673.38A23.978 23.978 0 0112 15.75c-2.648 0-5.195-.429-7.577-1.22a2.016 2.016 0 01-.673-.38m0 0A2.18 2.18 0 013 12.489V8.706c0-1.081.768-2.015 1.837-2.175a48.111 48.111 0 013.413-.387m7.5 0V5.25A2.25 2.25 0 0013.5 3h-3a2.25 2.25 0 00-2.25 2.25v.894m7.5 0a48.667 48.667 0 00-7.5 0M12 12.75h.008v.008H12v-.008z" />
                </svg>
              </div>
              <div>
                <h3 className="font-semibold text-charcoal">Careers</h3>
                <p className="mt-1 text-sm text-charcoal-light">
                  Join our team
                </p>
                <p className="mt-2 text-sm font-medium text-green-primary">
                  careers@shilallc.com
                </p>
              </div>
            </a>
          </div>
        </ScrollReveal>

        {/* Location info */}
        <ScrollReveal className="mt-12">
          <div className="mx-auto max-w-3xl rounded-2xl border border-gray-100 bg-white p-8 text-center">
            <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-green-light text-green-primary">
              <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                <path d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                <path d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
              </svg>
            </div>
            <h3 className="font-semibold text-charcoal">Our Locations</h3>
            <p className="mt-2 text-sm text-charcoal-light">
              Proudly serving communities across Bucks and Montgomery County,
              Pennsylvania
            </p>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
