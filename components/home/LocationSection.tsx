"use client";

import Image from "next/image";
import { Clock, MapPin, Phone } from "lucide-react";
import { InstagramIcon } from "@/components/common/SocialIcons";
import { useSiteConfig } from "@/providers/SiteConfigProvider";
import { analyticsEvents } from "@/lib/analytics";
import { WhatsAppButton } from "@/components/common/WhatsAppButton";
import { BrandLogo } from "@/components/common/BrandLogo";

export function LocationSection() {
  const siteConfig = useSiteConfig();
  return (
    <section className="relative overflow-hidden bg-ember py-20 md:py-32" aria-labelledby="location-heading">
      <div
        className="absolute inset-0"
        style={{
          backgroundImage:
            "radial-gradient(circle at 18% 18%, rgba(200,90,47,0.22), transparent 26%), radial-gradient(circle at 78% 22%, rgba(212,168,83,0.10), transparent 20%), radial-gradient(circle at 54% 75%, rgba(200,90,47,0.12), transparent 22%)",
        }}
        aria-hidden="true"
      />
      <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(42,22,16,0.12),rgba(42,22,16,0.88))]" aria-hidden="true" />
      <div className="absolute inset-0 premium-grid opacity-[0.03]" aria-hidden="true" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-[0.92fr_1.08fr] lg:items-center">
          <div>
            <div className="text-[11px] font-bold uppercase tracking-[0.34em] text-gold">
              Visit The Kitchen
            </div>
            <h2
              id="location-heading"
              className="mt-5 font-sans text-4xl font-extrabold uppercase leading-tight tracking-tight text-ivory md:text-6xl"
            >
              Come for the handi.
              <span className="block text-gold">Stay for the whole mood.</span>
            </h2>
            <p className="mt-6 max-w-2xl text-base leading-8 text-ivory/65">
              The premium feel has to carry beyond the hero and into the final action.
              So the location block lands more like a brand invitation than a plain contact list.
            </p>

            <div className="mt-10 space-y-5">
              <div className="flex items-start gap-4 rounded-[28px] border border-ivory/8 bg-charcoal-warm/60 p-5">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-charcoal-muted/40">
                  <MapPin size={18} className="text-gold" aria-hidden="true" />
                </div>
                <div>
                  <div className="text-[10px] font-bold uppercase tracking-[0.24em] text-gold">Address</div>
                  <div className="mt-2 text-sm leading-7 text-ivory/65">
                    {siteConfig.address.line1}
                    <br />
                    {siteConfig.address.line2}
                  </div>
                </div>
              </div>

              <div className="grid gap-5 sm:grid-cols-2">
                <div className="rounded-[28px] border border-ivory/8 bg-charcoal-warm/60 p-5">
                  <div className="flex items-start gap-4">
                    <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-charcoal-muted/40">
                      <Phone size={18} className="text-gold" aria-hidden="true" />
                    </div>
                    <div>
                      <div className="text-[10px] font-bold uppercase tracking-[0.24em] text-gold">Phone</div>
                      <a
                        href={`tel:${siteConfig.phone}`}
                        onClick={() => analyticsEvents.phoneClick("location-section")}
                        className="mt-2 block text-sm leading-7 text-ivory/65 transition-colors hover:text-ivory"
                      >
                        {siteConfig.phone}
                      </a>
                    </div>
                  </div>
                </div>

                <div className="rounded-[28px] border border-ivory/8 bg-charcoal-warm/60 p-5">
                  <div className="flex items-start gap-4">
                    <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-charcoal-muted/40">
                      <Clock size={18} className="text-gold" aria-hidden="true" />
                    </div>
                    <div>
                      <div className="text-[10px] font-bold uppercase tracking-[0.24em] text-gold">Hours</div>
                      <div className="mt-2 space-y-1 text-sm leading-7 text-ivory/65">
                        {siteConfig.hours.map((h) => (
                          <div key={h.day}>
                            <span className="text-ivory/40">{h.day}:</span> {h.time}
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="rounded-[28px] border border-ivory/8 bg-charcoal-warm/60 p-5">
                <div className="flex items-start gap-4">
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-charcoal-muted/40">
                    <InstagramIcon className="h-[18px] w-[18px] text-gold" aria-hidden="true" />
                  </div>
                  <div>
                    <div className="text-[10px] font-bold uppercase tracking-[0.24em] text-gold">Instagram</div>
                    <a
                      href={siteConfig.social.instagram}
                      onClick={() => analyticsEvents.instagramClick("location-section")}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-2 block text-sm leading-7 text-ivory/65 transition-colors hover:text-ivory"
                    >
                      @claudekitchen
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-8 flex flex-wrap gap-4">
              <WhatsAppButton placement="location" label="Order Now" className="px-6 py-3" />
              <a
                href={siteConfig.address.mapUrl}
                onClick={() => analyticsEvents.mapDirectionsClick("location-section")}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-outline border-ivory/20 bg-ivory/[0.04] px-6 py-3 text-ivory hover:bg-ivory hover:text-charcoal"
              >
                <MapPin size={16} />
                Get Directions
              </a>
            </div>
          </div>

          <div className="overflow-hidden rounded-[38px] border border-ivory/8 bg-charcoal-warm/50 p-4 sm:p-5">
            <div className="grid gap-4 lg:grid-cols-[0.98fr_1.02fr]">
              <div className="relative min-h-[420px] overflow-hidden rounded-[30px] border border-ivory/8">
                <Image
                  src="/images/menu/generated/classic-combo-meal.jpg"
                  alt="Classic combo meal from Claude Kitchen"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 40vw"
                />
                <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(28,20,18,0.1),rgba(28,20,18,0.78))]" />
                <div className="absolute left-4 right-4 top-4 rounded-full border border-ivory/10 bg-charcoal/76 px-4 py-2 text-center text-[10px] font-bold uppercase tracking-[0.28em] text-gold backdrop-blur-md">
                  Open kitchen energy, delivery-ready finish
                </div>
                <div className="absolute bottom-4 left-4 right-4 rounded-[26px] border border-ivory/10 bg-charcoal/80 p-5 backdrop-blur-md">
                  <div className="font-sans text-xl font-extrabold uppercase tracking-[0.08em] text-ivory">
                    Take the premium feeling all the way to the order.
                  </div>
                </div>
              </div>

              <div className="flex flex-col justify-between rounded-[30px] border border-ivory/8 bg-charcoal/60 p-6">
                <div>
                  <BrandLogo variant="stacked" theme="light" size="md" className="mb-6" />
                  <div className="text-[10px] font-bold uppercase tracking-[0.28em] text-gold">
                    Bengaluru kitchen
                  </div>
                  <div className="mt-3 font-sans text-2xl font-extrabold uppercase tracking-[0.06em] text-ivory">
                    Open the map.
                    <span className="block text-ivory/80">Follow the aroma.</span>
                  </div>
                  <p className="mt-4 text-sm leading-7 text-ivory/60">
                    Orders, pickups, and directions should feel as polished as the product photography above them.
                  </p>
                </div>

                <a
                  href={siteConfig.address.mapUrl}
                  onClick={() => analyticsEvents.mapDirectionsClick("map-widget")}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary mt-8 px-5 py-3 text-sm"
                >
                  <MapPin size={15} />
                  Open in Google Maps
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
