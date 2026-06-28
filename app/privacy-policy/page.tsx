import type { Metadata } from "next";
import { generateMetadata as genMeta } from "@/lib/seo";
import { siteConfig } from "@/data/site-config";

export const metadata: Metadata = genMeta({
  title: "Privacy Policy",
  description: "Claude Kitchen privacy policy — how we collect and use information.",
  path: "/privacy-policy",
  noIndex: false,
});

export default function PrivacyPolicyPage() {
  return (
    <>
      <div className="bg-masala pt-28 pb-12 px-4">
        <div className="max-w-3xl mx-auto">
          <h1 className="font-serif text-cream text-4xl font-bold">
            Privacy Policy
          </h1>
          <p className="text-cream/50 mt-2 text-sm">
            Last updated: January 2025
          </p>
        </div>
      </div>

      <div className="bg-cream py-14 px-4">
        <div className="max-w-3xl mx-auto prose prose-stone">
          <div className="space-y-8 text-masala/75 text-sm leading-relaxed">

            <section>
              <h2 className="font-serif text-masala text-2xl font-bold mb-3">
                1. Introduction
              </h2>
              <p>
                Claude Kitchen (&quot;we&quot;, &quot;our&quot; or &quot;us&quot;)
                operates the website at {siteConfig.url}. This Privacy Policy
                explains what information we collect when you visit our website,
                how we use it and your rights in relation to that information.
              </p>
            </section>

            <section>
              <h2 className="font-serif text-masala text-2xl font-bold mb-3">
                2. Information We Collect
              </h2>
              <p>
                This website is a static marketing site. We do not have a
                backend database and we do not collect personal information
                through forms on this website.
              </p>
              <p className="mt-3">
                We use the following third-party analytics and tracking tools,
                which may collect anonymized usage data:
              </p>
              <ul className="list-disc list-inside space-y-2 mt-3">
                <li>
                  <strong>Google Tag Manager</strong> — used to deploy analytics
                  and marketing tags without requiring code changes.
                </li>
                <li>
                  <strong>Google Analytics 4</strong> — collects anonymized data
                  about page views, session duration, device type and user
                  interactions to help us understand how visitors use our site.
                </li>
                <li>
                  <strong>Meta Pixel</strong> — may be deployed to measure
                  campaign performance from Meta advertisements, if applicable.
                </li>
              </ul>
              <p className="mt-3">
                When you click a WhatsApp, phone or maps link on this site, you
                will leave our website and your interaction will be governed by
                those platforms&apos; respective privacy policies.
              </p>
            </section>

            <section>
              <h2 className="font-serif text-masala text-2xl font-bold mb-3">
                3. Cookies
              </h2>
              <p>
                Our analytics tools use cookies to track anonymous usage data.
                These cookies do not identify you personally. You can manage or
                disable cookies through your browser settings at any time.
              </p>
            </section>

            <section>
              <h2 className="font-serif text-masala text-2xl font-bold mb-3">
                4. How We Use Information
              </h2>
              <p>Analytics data is used solely to:</p>
              <ul className="list-disc list-inside space-y-2 mt-3">
                <li>Understand how visitors navigate the website</li>
                <li>Improve the user experience and content</li>
                <li>Measure the effectiveness of marketing campaigns</li>
              </ul>
              <p className="mt-3">
                We do not sell personal data to third parties. We do not use
                data for automated decision-making.
              </p>
            </section>

            <section>
              <h2 className="font-serif text-masala text-2xl font-bold mb-3">
                5. External Links
              </h2>
              <p>
                This website links to external platforms including WhatsApp,
                Google Maps, Instagram, Facebook and YouTube. Claude Kitchen is
                not responsible for the privacy practices of those platforms.
                We encourage you to review their privacy policies before
                interacting with them.
              </p>
            </section>

            <section>
              <h2 className="font-serif text-masala text-2xl font-bold mb-3">
                6. Your Rights
              </h2>
              <p>
                You may request information about any personal data we hold
                about you or ask us to delete it. Since this website does not
                collect personal data directly, there is typically no
                identifiable data we hold. For analytics-related data requests,
                please refer to Google&apos;s and Meta&apos;s own data-deletion
                tools.
              </p>
            </section>

            <section>
              <h2 className="font-serif text-masala text-2xl font-bold mb-3">
                7. Contact
              </h2>
              <p>
                For any privacy-related questions, contact us at{" "}
                <a
                  href={`mailto:${siteConfig.email}`}
                  className="text-terracotta hover:underline"
                >
                  {siteConfig.email}
                </a>{" "}
                or call {siteConfig.phone}.
              </p>
            </section>
          </div>
        </div>
      </div>
    </>
  );
}
