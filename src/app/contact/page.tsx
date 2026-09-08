"use client";

import { useState } from "react";
import type { FormEvent } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ScrollReveal from "@/components/ScrollReveal";

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: FormEvent) {
    e.preventDefault();
    setSubmitted(true);
  }

  return (
    <>
      <Header solid />
      <main className="pt-24 pb-20">
        <div className="mx-auto max-w-6xl px-6">
          <ScrollReveal>
            <div className="mx-auto max-w-3xl text-center">
              <span className="inline-block text-sm font-semibold uppercase tracking-widest text-brick">
                Contact
              </span>
              <h1 className="mt-4 text-3xl font-bold tracking-tight text-warm-dark sm:text-4xl md:text-5xl">
                Get In Touch
              </h1>
              <p className="mt-6 text-lg leading-relaxed text-warm-gray">
                Whether you want to give us feedback or have a question, please
                send us a message and we will get back to you as soon as
                possible.
              </p>
            </div>
          </ScrollReveal>

          <ScrollReveal className="mt-16">
            <div className="mx-auto max-w-xl">
              {submitted ? (
                <div className="rounded-2xl border border-gray-100 bg-cream p-10 text-center">
                  <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-brick-pale text-brick">
                    <svg className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                      <path d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-semibold text-warm-dark">
                    Thank You!
                  </h3>
                  <p className="mt-3 text-base text-warm-gray">
                    Your message has been received. We will get back to you as
                    soon as possible.
                  </p>
                </div>
              ) : (
                <form
                  onSubmit={handleSubmit}
                  className="space-y-6 rounded-2xl border border-gray-100 bg-cream p-8 md:p-10"
                >
                  <div>
                    <label
                      htmlFor="name"
                      className="block text-sm font-medium text-warm-dark"
                    >
                      Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      className="mt-2 block w-full rounded-lg border border-gray-200 bg-white px-4 py-3 text-warm-dark placeholder:text-warm-gray/50 focus:border-brick focus:ring-2 focus:ring-brick/20 focus:outline-none transition-colors"
                      placeholder="Your name"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="email"
                      className="block text-sm font-medium text-warm-dark"
                    >
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      className="mt-2 block w-full rounded-lg border border-gray-200 bg-white px-4 py-3 text-warm-dark placeholder:text-warm-gray/50 focus:border-brick focus:ring-2 focus:ring-brick/20 focus:outline-none transition-colors"
                      placeholder="your@email.com"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="message"
                      className="block text-sm font-medium text-warm-dark"
                    >
                      Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={5}
                      required
                      className="mt-2 block w-full rounded-lg border border-gray-200 bg-white px-4 py-3 text-warm-dark placeholder:text-warm-gray/50 focus:border-brick focus:ring-2 focus:ring-brick/20 focus:outline-none transition-colors resize-none"
                      placeholder="How can we help?"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full rounded-full bg-brick px-8 py-3.5 text-base font-semibold text-white transition-all hover:bg-brick-dark hover:shadow-lg hover:shadow-brick/25"
                  >
                    Send Message
                  </button>
                </form>
              )}
            </div>
          </ScrollReveal>

          {/* Contact info cards */}
          <ScrollReveal stagger className="mt-16">
            <div className="mx-auto grid max-w-3xl grid-cols-1 gap-6 sm:grid-cols-2">
              <a
                href="mailto:info@shilallc.com"
                className="reveal group flex items-start gap-4 rounded-2xl bg-white border border-gray-100 p-6 transition-all hover:shadow-md hover:-translate-y-1"
              >
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-brick-pale text-brick transition-colors group-hover:bg-brick group-hover:text-white">
                  <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-semibold text-warm-dark">Email Us</h3>
                  <p className="mt-1 text-sm text-warm-gray">General inquiries</p>
                  <p className="mt-2 text-sm font-medium text-brick">
                    info@shilallc.com
                  </p>
                </div>
              </a>

              <a
                href="mailto:careers@shilallc.com"
                className="reveal group flex items-start gap-4 rounded-2xl bg-white border border-gray-100 p-6 transition-all hover:shadow-md hover:-translate-y-1"
              >
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-brick-pale text-brick transition-colors group-hover:bg-brick group-hover:text-white">
                  <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path d="M20.25 14.15v4.25c0 1.094-.787 2.036-1.872 2.18-2.087.277-4.216.42-6.378.42s-4.291-.143-6.378-.42c-1.085-.144-1.872-1.086-1.872-2.18v-4.25m16.5 0a2.18 2.18 0 00.75-1.661V8.706c0-1.081-.768-2.015-1.837-2.175a48.114 48.114 0 00-3.413-.387m4.5 8.006c-.194.165-.42.295-.673.38A23.978 23.978 0 0112 15.75c-2.648 0-5.195-.429-7.577-1.22a2.016 2.016 0 01-.673-.38m0 0A2.18 2.18 0 013 12.489V8.706c0-1.081.768-2.015 1.837-2.175a48.111 48.111 0 013.413-.387m7.5 0V5.25A2.25 2.25 0 0013.5 3h-3a2.25 2.25 0 00-2.25 2.25v.894m7.5 0a48.667 48.667 0 00-7.5 0M12 12.75h.008v.008H12v-.008z" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-semibold text-warm-dark">Careers</h3>
                  <p className="mt-1 text-sm text-warm-gray">Join our team</p>
                  <p className="mt-2 text-sm font-medium text-brick">
                    careers@shilallc.com
                  </p>
                </div>
              </a>
            </div>
          </ScrollReveal>
        </div>
      </main>
      <Footer />
    </>
  );
}
