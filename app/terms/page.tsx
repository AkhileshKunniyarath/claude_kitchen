import type { Metadata } from "next";
import { generateMetadata as genMeta } from "@/lib/seo";
import { siteConfig } from "@/data/site-config";

export const metadata: Metadata = genMeta({
  title: "Terms of Use",
  description: "Terms of use for the Claude Kitchen website.",
  path: "/terms",
});

export default function TermsPage() {
  return (
    <>
      <div className="bg-masala pt-28 pb-12 px-4">
        <div className="max-w-3xl mx-auto">
          <h1 className="font-serif text-cream text-4xl font-bold">
            Terms of Use
          </h1>
          <p className="text-cream/50 mt-2 text-sm">
            Last updated: January 2025
          </p>
        </div>
      </div>

      <div className="bg-cream py-14 px-4">
        <div className="max-w-3xl mx-auto space-y-8 text-masala/75 text-sm leading-relaxed">

          <section>
            <h2 className="font-serif text-masala text-2xl font-bold mb-3">
              1. Acceptance of Terms
            </h2>
            <p>
              By accessing or using the Claude Kitchen website at{" "}
              {siteConfig.url}, you agree to be bound by these Terms of Use. If
              you do not agree, please do not use the site.
            </p>
          </section>

          <section>
            <h2 className="font-serif text-masala text-2xl font-bold mb-3">
              2. Website Purpose
            </h2>
            <p>
              This website is a static marketing and information site for Claude
              Kitchen. It is designed to provide information about our menu,
              location, services and contact details. It does not process
              payments or orders directly.
            </p>
          </section>

          <section>
            <h2 className="font-serif text-masala text-2xl font-bold mb-3">
              3. Menu Prices and Availability
            </h2>
            <p>
              Menu items, prices and availability displayed on this website are
              subject to change without notice. All prices shown are indicative.
              Please confirm current prices and availability when placing an
              order via WhatsApp or phone before completing any transaction.
            </p>
          </section>

          <section>
            <h2 className="font-serif text-masala text-2xl font-bold mb-3">
              4. Order Channels
            </h2>
            <p>
              Orders placed through WhatsApp, phone or any other external
              channel are subject to Claude Kitchen&apos;s order confirmation
              and availability. Clicking a WhatsApp or phone link on this
              website does not constitute a confirmed order until acknowledged
              by Claude Kitchen.
            </p>
          </section>

          <section>
            <h2 className="font-serif text-masala text-2xl font-bold mb-3">
              5. Intellectual Property
            </h2>
            <p>
              All content on this website, including text, images, the logo and
              design, is the property of Claude Kitchen. You may not reproduce,
              distribute or use any content from this website without written
              permission.
            </p>
          </section>

          <section>
            <h2 className="font-serif text-masala text-2xl font-bold mb-3">
              6. Limitation of Liability
            </h2>
            <p>
              Claude Kitchen makes every reasonable effort to keep information
              on this website accurate and up to date. However, we make no
              warranty, express or implied, as to the accuracy, completeness or
              fitness for a particular purpose of any information on this site.
              We are not liable for any direct, indirect or consequential loss
              arising from use of this website.
            </p>
          </section>

          <section>
            <h2 className="font-serif text-masala text-2xl font-bold mb-3">
              7. External Links
            </h2>
            <p>
              This website contains links to third-party platforms such as
              WhatsApp, Google Maps, Instagram, Facebook and YouTube. These
              links are provided for convenience. Claude Kitchen has no control
              over, and accepts no responsibility for, the content or practices
              of external websites.
            </p>
          </section>

          <section>
            <h2 className="font-serif text-masala text-2xl font-bold mb-3">
              8. Changes to These Terms
            </h2>
            <p>
              We reserve the right to update these terms at any time. Continued
              use of the website after changes are posted constitutes acceptance
              of the revised terms.
            </p>
          </section>

          <section>
            <h2 className="font-serif text-masala text-2xl font-bold mb-3">
              9. Contact
            </h2>
            <p>
              For any questions about these terms, contact us at{" "}
              <a
                href={`mailto:${siteConfig.email}`}
                className="text-terracotta hover:underline"
              >
                {siteConfig.email}
              </a>.
            </p>
          </section>
        </div>
      </div>
    </>
  );
}
