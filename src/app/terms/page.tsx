import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Terms of Service | Shila LLC",
  description:
    "Terms of service for Shila LLC, a family-owned Dunkin' Donuts franchise group in Bucks & Montgomery County, Pennsylvania.",
};

export default function TermsOfService() {
  return (
    <>
      <Header solid />
      <main className="pt-24 pb-20">
        <article className="mx-auto max-w-3xl px-6">
          <h1 className="text-3xl font-bold tracking-tight text-charcoal sm:text-4xl">
            Terms of Service
          </h1>
          <p className="mt-3 text-sm text-charcoal-light">
            Last updated: September 2024
          </p>

          <div className="mt-10 space-y-8 text-base leading-relaxed text-charcoal-light">
            <section>
              <h2 className="text-xl font-semibold text-charcoal">
                Acceptance of Terms
              </h2>
              <p className="mt-3">
                By accessing and using the Shila LLC website (shilallc.com), you
                accept and agree to be bound by these Terms of Service. If you
                do not agree to these terms, please do not use our website.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-charcoal">
                Description of Business
              </h2>
              <p className="mt-3">
                Shila LLC is a family-owned multi-unit Dunkin&rsquo; Donuts
                franchise group operating in Bucks and Montgomery County,
                Pennsylvania. The Dunkin&rsquo; Donuts restaurants are
                independently owned and operated by Shila LLC under a franchise
                granted by Dunkin&rsquo; Donuts Franchising LLC.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-charcoal">
                Intellectual Property
              </h2>
              <p className="mt-3">
                The Dunkin&rsquo; Donuts trademarks, logos, and designs are
                trademarks of DD IP Holder LLC and are used by Shila LLC under
                license. All other content on this website, including text,
                graphics, and layout, is the property of Shila LLC and is
                protected by applicable intellectual property laws.
              </p>
              <p className="mt-3">
                You may not reproduce, distribute, modify, or create derivative
                works from any content on this website without our prior written
                consent.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-charcoal">
                Employment Disclaimer
              </h2>
              <p className="mt-3">
                All employment opportunities listed on this website are with
                Shila LLC, not with Dunkin&rsquo; Donuts Franchising LLC or any
                of its affiliates. Shila LLC is the employer and is solely
                responsible for all employment decisions, including hiring,
                compensation, benefits, and termination. Employment with Shila
                LLC does not constitute employment with Dunkin&rsquo; Donuts
                Franchising LLC.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-charcoal">
                Use of Website
              </h2>
              <p className="mt-3">You agree to use this website only for lawful purposes and in a manner that does not:</p>
              <ul className="mt-3 list-disc space-y-2 pl-6">
                <li>Infringe on the rights of others</li>
                <li>Restrict or inhibit anyone else&rsquo;s use of the website</li>
                <li>Violate any applicable laws or regulations</li>
                <li>Transmit any harmful, threatening, or offensive material</li>
                <li>Attempt to gain unauthorized access to any part of the website</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-charcoal">
                Disclaimer of Warranties
              </h2>
              <p className="mt-3">
                This website is provided on an &ldquo;as is&rdquo; and &ldquo;as
                available&rdquo; basis without warranties of any kind, either
                express or implied. Shila LLC does not warrant that the website
                will be uninterrupted, error-free, or free of viruses or other
                harmful components.
              </p>
              <p className="mt-3">
                We make no representations or warranties regarding the accuracy,
                completeness, or timeliness of any content on this website.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-charcoal">
                Limitation of Liability
              </h2>
              <p className="mt-3">
                To the fullest extent permitted by law, Shila LLC shall not be
                liable for any direct, indirect, incidental, special,
                consequential, or punitive damages arising from your use of, or
                inability to use, this website or any content on it.
              </p>
              <p className="mt-3">
                This limitation applies regardless of whether the damages are
                based on warranty, contract, tort, negligence, strict liability,
                or any other legal theory, even if Shila LLC has been advised of
                the possibility of such damages.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-charcoal">
                Third-Party Links
              </h2>
              <p className="mt-3">
                Our website may contain links to third-party websites or
                services. Shila LLC is not responsible for the content, privacy
                policies, or practices of any third-party sites. We encourage
                you to review the terms and privacy policies of any
                third-party websites you visit.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-charcoal">
                Governing Law
              </h2>
              <p className="mt-3">
                These Terms of Service shall be governed by and construed in
                accordance with the laws of the Commonwealth of Pennsylvania,
                without regard to its conflict of law provisions. Any disputes
                arising under these terms shall be subject to the exclusive
                jurisdiction of the courts located in Pennsylvania.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-charcoal">
                Changes to These Terms
              </h2>
              <p className="mt-3">
                We reserve the right to modify these Terms of Service at any
                time. Any changes will be posted on this page with an updated
                &ldquo;Last updated&rdquo; date. Your continued use of the
                website after any changes constitutes your acceptance of the
                revised terms.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-charcoal">
                Contact Us
              </h2>
              <p className="mt-3">
                If you have questions about these Terms of Service, please
                contact us at:
              </p>
              <div className="mt-3">
                <p>Shila LLC</p>
                <p>Bucks &amp; Montgomery County, Pennsylvania</p>
                <p>
                  Email:{" "}
                  <a
                    href="mailto:info@shilallc.com"
                    className="text-green-primary hover:text-green-dark transition-colors"
                  >
                    info@shilallc.com
                  </a>
                </p>
              </div>
            </section>
          </div>
        </article>
      </main>
      <Footer />
    </>
  );
}
