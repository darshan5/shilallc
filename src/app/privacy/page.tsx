import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Privacy Policy | Shila LLC",
  description:
    "Privacy policy for Shila LLC, a family-owned Dunkin' Donuts franchise group in Bucks & Montgomery County, Pennsylvania.",
};

export default function PrivacyPolicy() {
  return (
    <>
      <Header solid />
      <main className="pt-24 pb-20">
        <article className="mx-auto max-w-3xl px-6">
          <h1 className="text-3xl font-bold tracking-tight text-warm-dark sm:text-4xl">
            Privacy Policy
          </h1>
          <p className="mt-3 text-sm text-warm-dark-light">
            Last updated: September 2024
          </p>

          <div className="mt-10 space-y-8 text-base leading-relaxed text-warm-dark-light">
            <section>
              <h2 className="text-xl font-semibold text-warm-dark">
                Introduction
              </h2>
              <p className="mt-3">
                Shila LLC (&ldquo;we,&rdquo; &ldquo;us,&rdquo; or
                &ldquo;our&rdquo;) operates the website shilallc.com. This
                Privacy Policy explains how we collect, use, disclose, and
                safeguard your information when you visit our website or interact
                with us.
              </p>
              <p className="mt-3">
                Shila LLC operates independently from Dunkin&rsquo; Donuts
                Franchising LLC. This privacy policy applies only to information
                collected by Shila LLC through shilallc.com.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-warm-dark">
                Information We Collect
              </h2>
              <p className="mt-3">
                We may collect information about you in a variety of ways,
                including:
              </p>
              <ul className="mt-3 list-disc space-y-2 pl-6">
                <li>
                  <strong>Employment Applications:</strong> When you apply for a
                  position, we collect your name, contact information, work
                  history, education, and other details you provide in your
                  application.
                </li>
                <li>
                  <strong>Contact Form Submissions:</strong> When you reach out
                  through our contact form, we collect your name, email address,
                  phone number, and the content of your message.
                </li>
                <li>
                  <strong>Website Visitor Data:</strong> We automatically collect
                  certain information when you visit our website, including your
                  IP address, browser type, operating system, referring URLs, and
                  information about how you interact with our site.
                </li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-warm-dark">
                How We Use Your Information
              </h2>
              <p className="mt-3">
                We use the information we collect for the following purposes:
              </p>
              <ul className="mt-3 list-disc space-y-2 pl-6">
                <li>
                  To process and evaluate employment applications
                </li>
                <li>
                  To respond to inquiries and communicate with you
                </li>
                <li>
                  To improve our website and user experience
                </li>
                <li>
                  To comply with legal obligations
                </li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-warm-dark">
                Cookies and Tracking Technologies
              </h2>
              <p className="mt-3">
                Our website may use cookies and similar tracking technologies to
                enhance your browsing experience. These include:
              </p>
              <ul className="mt-3 list-disc space-y-2 pl-6">
                <li>
                  <strong>Session Cookies:</strong> Temporary cookies that expire
                  when you close your browser, used to maintain your session.
                </li>
                <li>
                  <strong>Analytics Cookies:</strong> Used to understand how
                  visitors interact with our website, helping us improve content
                  and functionality.
                </li>
              </ul>
              <p className="mt-3">
                You can control cookies through your browser settings. Disabling
                cookies may affect your ability to use certain features of our
                website.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-warm-dark">
                Data Retention
              </h2>
              <p className="mt-3">
                We retain personal information only for as long as necessary to
                fulfill the purposes for which it was collected, including to
                satisfy legal, accounting, or reporting requirements. Employment
                application data is retained in accordance with applicable
                employment laws and regulations.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-warm-dark">
                Disclosure of Your Information
              </h2>
              <p className="mt-3">
                We do not sell your personal information. We may share your
                information in the following situations:
              </p>
              <ul className="mt-3 list-disc space-y-2 pl-6">
                <li>
                  <strong>Service Providers:</strong> With third-party vendors
                  who assist us in operating our website and conducting our
                  business, provided they agree to keep your information
                  confidential.
                </li>
                <li>
                  <strong>Legal Requirements:</strong> When required by law or in
                  response to valid legal processes.
                </li>
                <li>
                  <strong>Business Transfers:</strong> In connection with a
                  merger, acquisition, or sale of assets.
                </li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-warm-dark">
                Your Rights
              </h2>
              <p className="mt-3">
                Depending on your location, you may have the following rights
                regarding your personal information:
              </p>
              <ul className="mt-3 list-disc space-y-2 pl-6">
                <li>The right to access your personal information</li>
                <li>The right to correct inaccurate information</li>
                <li>The right to request deletion of your information</li>
                <li>
                  The right to opt out of certain data processing activities
                </li>
              </ul>
              <p className="mt-3">
                To exercise any of these rights, please contact us using the
                information provided below.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-warm-dark">
                Security
              </h2>
              <p className="mt-3">
                We use reasonable administrative, technical, and physical
                security measures to protect your personal information. However,
                no method of transmission over the Internet or electronic storage
                is completely secure, and we cannot guarantee absolute security.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-warm-dark">
                Changes to This Policy
              </h2>
              <p className="mt-3">
                We may update this Privacy Policy from time to time. Any changes
                will be posted on this page with an updated &ldquo;Last
                updated&rdquo; date. We encourage you to review this policy
                periodically.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-warm-dark">
                Contact Us
              </h2>
              <p className="mt-3">
                If you have questions or concerns about this Privacy Policy or
                our data practices, please contact us at:
              </p>
              <div className="mt-3">
                <p>Shila LLC</p>
                <p>Bucks &amp; Montgomery County, Pennsylvania</p>
                <p>
                  Email:{" "}
                  <a
                    href="mailto:info@shilallc.com"
                    className="text-brick hover:text-brick-dark transition-colors"
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
