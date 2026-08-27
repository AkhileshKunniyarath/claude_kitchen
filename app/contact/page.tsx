import type { Metadata } from "next";
import { Phone, MapPin, Clock } from "lucide-react";
import {
  InstagramIcon,
  FacebookIcon,
  YoutubeIcon,
  WhatsAppIcon,
} from "@/components/common/SocialIcons";
import { siteConfig } from "@/data/site-config";
import { faqs as staticFaqs } from "@/data/faqs";
import { WhatsAppButton } from "@/components/common/WhatsAppButton";
import { FAQAccordion } from "@/components/contact/FAQAccordion";
import { PageHero } from "@/components/common/PageHero";

import connectDB from "@/lib/db";
import { FAQ } from "@/models/FAQ";

export const metadata: Metadata = {
  title: "Contact Us",
  description:
    "Reach Claude Kitchen via WhatsApp, phone or visit us in Bengaluru. Opening hours, address and frequently asked questions.",
};

export const revalidate = 60;

export default async function ContactPage() {
  let faqs: any[] = [];
  try {
    const db = await connectDB();
    if (db) {
      faqs = await FAQ.find({}).lean();
    }
  } catch {
    // DB unavailable — fallback to static FAQs
  }

  if (!faqs || faqs.length === 0) {
    faqs = staticFaqs as any[];
  }
  
  const serializedFaqs = faqs.map(faq => ({
    ...faq,
    _id: faq._id?.toString()
  }));

  return (
    <>
      <PageHero
        eyebrow="Get In Touch"
        title="Contact Claude Kitchen"
        subtitle="We're a WhatsApp message or phone call away for direct orders, catering coordination, location details, and any questions before you place an order."
        compactLogo
      />

      <div className="bg-ivory">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* ── Contact details ── */}
            <div>
              <div className="premium-kicker mb-3 text-gold-dark">Direct Channels</div>
              <h2 className="font-serif text-charcoal text-4xl font-semibold mb-8">
                Reach Us Directly
              </h2>

              <div className="space-y-6 mb-10">
                {/* WhatsApp */}
                <div className="premium-panel flex items-start gap-4 p-6">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-ember/10">
                    <WhatsAppIcon
                      className="w-6 h-6 text-ember"
                      aria-hidden="true"
                    />
                  </div>
                  <div className="flex-1">
                    <div className="mb-1 text-xs font-semibold uppercase tracking-[0.24em] text-gold-dark">
                      Fastest Response
                    </div>
                    <div className="font-serif text-3xl font-semibold text-charcoal mb-2">
                      WhatsApp Order
                    </div>
                    <p className="text-sm leading-7 text-text-secondary mb-4">
                      Fastest way to order or ask any question. We typically
                      reply within minutes.
                    </p>
                    <WhatsAppButton
                      placement="contact-page"
                      label="Message Us"
                      className="text-sm py-2 px-5"
                    />
                  </div>
                </div>

                {/* Phone */}
                <div className="premium-panel flex items-start gap-4 p-6">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-gold/12">
                    <Phone
                      size={18}
                      className="text-gold-dark"
                      aria-hidden="true"
                    />
                  </div>
                  <div>
                    <div className="mb-1 text-xs font-semibold uppercase tracking-[0.24em] text-gold-dark">Phone</div>
                    <a
                      href={`tel:${siteConfig.phone}`}
                      className="font-serif text-2xl text-charcoal/80 transition-colors hover:text-ember"
                    >
                      {siteConfig.phone}
                    </a>
                  </div>
                </div>

                {/* Address */}
                <div className="premium-panel flex items-start gap-4 p-6">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-gold/12">
                    <MapPin
                      size={18}
                      className="text-gold-dark"
                      aria-hidden="true"
                    />
                  </div>
                  <div>
                    <div className="mb-1 text-xs font-semibold uppercase tracking-[0.24em] text-gold-dark">
                      Address
                    </div>
                    <div className="text-text-secondary text-sm mb-3 leading-7">
                      {siteConfig.address.line1}
                      <br />
                      {siteConfig.address.line2}
                    </div>
                    <a
                      href={siteConfig.address.mapUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-ember text-sm font-medium hover:underline"
                    >
                      Get Directions →
                    </a>
                  </div>
                </div>

                {/* Hours */}
                <div className="premium-panel flex items-start gap-4 p-6">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-gold/12">
                    <Clock
                      size={18}
                      className="text-gold-dark"
                      aria-hidden="true"
                    />
                  </div>
                  <div>
                    <div className="mb-2 text-xs font-semibold uppercase tracking-[0.24em] text-gold-dark">
                      Opening Hours
                    </div>
                    <div className="space-y-1">
                      {siteConfig.hours.map((h) => (
                        <div key={h.day} className="text-sm text-text-secondary">
                          <span className="text-text-muted">{h.day}:</span>{" "}
                          {h.time}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* Social links */}
              <div>
                <div className="premium-kicker mb-3 text-gold-dark">
                  Follow Us
                </div>
                <div className="flex flex-wrap gap-3">
                  <a
                    href={siteConfig.social.instagram}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 rounded-full border border-sand bg-ivory-warm/60 px-4 py-2 text-sm text-text-secondary transition-colors hover:text-ember"
                  >
                    <InstagramIcon
                      className="w-[15px] h-[15px]"
                      aria-hidden="true"
                    />{" "}
                    Instagram
                  </a>
                  <a
                    href={siteConfig.social.facebook}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 rounded-full border border-sand bg-ivory-warm/60 px-4 py-2 text-sm text-text-secondary transition-colors hover:text-ember"
                  >
                    <FacebookIcon
                      className="w-[15px] h-[15px]"
                      aria-hidden="true"
                    />{" "}
                    Facebook
                  </a>
                  <a
                    href={siteConfig.social.youtube}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 rounded-full border border-sand bg-ivory-warm/60 px-4 py-2 text-sm text-text-secondary transition-colors hover:text-ember"
                  >
                    <YoutubeIcon
                      className="w-[15px] h-[15px]"
                      aria-hidden="true"
                    />{" "}
                    YouTube
                  </a>
                </div>
              </div>
            </div>

            {/* ── FAQ ── */}
            <div>
              <div className="premium-kicker mb-3 text-gold-dark">Need More Clarity?</div>
              <h2 className="font-serif text-charcoal text-4xl font-semibold mb-8">
                Frequently Asked Questions
              </h2>
              <FAQAccordion faqs={serializedFaqs as any} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
