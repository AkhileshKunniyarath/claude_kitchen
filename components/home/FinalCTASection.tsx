"use client";

import Image from "next/image";
import { MapPin, Phone } from "lucide-react";
import { WhatsAppButton } from "@/components/common/WhatsAppButton";
import { siteConfig } from "@/data/site-config";
import { analyticsEvents } from "@/lib/analytics";

export function FinalCTASection() {
  return (
    <section className="relative overflow-hidden bg-[#120805] py-20 md:py-28" aria-labelledby="cta-heading">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(211,92,48,0.28),_transparent_28%),radial-gradient(circle_at_bottom_right,_rgba(199,138,67,0.18),_transparent_24%)]" aria-hidden="true" />
      <div className="absolute inset-0 premium-grid opacity-[0.04]" aria-hidden="true" />

      <div className="pointer-events-none absolute inset-x-0 top-10 hidden xl:block text-center font-sans text-[8rem] font-extrabold uppercase leading-none tracking-[-0.08em] text-white/[0.04]" aria-hidden="true">
        ORDER BIRYANI
      </div>

      <div className="relative z-10 mx-auto max-w-6xl px-4 sm:px-6">
        <div className="overflow-hidden rounded-[40px] border border-cream/10 bg-[#1c0d08] p-5 shadow-[0_32px_100px_rgba(0,0,0,0.34)] sm:p-6 md:p-8">
          <div className="grid gap-6 lg:grid-cols-[1.02fr_0.98fr] lg:items-center">
            <div className="relative min-h-[420px] overflow-hidden rounded-[32px] border border-cream/10">
              <Image
                src="/images/menu/generated/royal-mutton-biryani.jpg"
                alt="Royal mutton biryani"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 44vw"
              />
              <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(12,6,4,0.08),rgba(12,6,4,0.74))]" />
              <div className="absolute left-4 right-4 top-4 rounded-full border border-cream/12 bg-[#180b07]/78 px-4 py-2 text-center text-[10px] font-bold uppercase tracking-[0.28em] text-gold backdrop-blur-md">
                Slow fire finish • bold arrival • premium order flow
              </div>
              <div className="absolute bottom-4 left-4 right-4 rounded-[26px] border border-cream/12 bg-[#180b07]/84 p-5 backdrop-blur-md">
                <div className="text-[10px] font-bold uppercase tracking-[0.28em] text-gold">
                  Claude Kitchen
                </div>
                <div className="mt-2 font-sans text-2xl font-extrabold uppercase tracking-[0.05em] text-cream">
                  The table is ready.
                </div>
              </div>
            </div>

            <div className="px-1 sm:px-3">
              <div className="text-[11px] font-bold uppercase tracking-[0.34em] text-gold">
                Make The Order Feel Worth It
              </div>
              <h2
                id="cta-heading"
                className="mt-5 font-sans text-4xl font-extrabold uppercase leading-[0.94] tracking-[-0.05em] text-cream md:text-6xl"
              >
                Ready for a
                <span className="block text-terracotta">grander biryani site?</span>
              </h2>
              <p className="mt-6 max-w-2xl text-base leading-8 text-cream/76">
                The homepage now pushes the food the way a premium burger brand pushes
                its hero stack: bigger type, stronger product drama, and cleaner action
                paths that keep the appetite moving forward.
              </p>

              <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:flex-wrap sm:items-center">
                <WhatsAppButton
                  placement="final-cta"
                  label="Order on WhatsApp"
                  className="px-8 py-4 text-base"
                />
                <a
                  href={`tel:${siteConfig.phone}`}
                  onClick={() => analyticsEvents.phoneClick("final-cta")}
                  className="inline-flex items-center justify-center gap-2 rounded-full border border-cream/14 bg-white/[0.06] px-8 py-4 text-base font-semibold text-cream transition-all hover:border-cream/28 hover:bg-white/[0.12]"
                >
                  <Phone size={18} />
                  Call Us
                </a>
                <a
                  href={siteConfig.address.mapUrl}
                  onClick={() => analyticsEvents.mapDirectionsClick("final-cta")}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-[0.22em] text-cream/82 transition-colors hover:text-cream"
                >
                  <MapPin size={18} />
                  Get Directions
                </a>
              </div>

              <div className="mt-8 grid gap-4 border-t border-cream/10 pt-6 sm:grid-cols-3">
                {[
                  { value: "DUM", label: "sealed finish" },
                  { value: "BOLD", label: "visual hierarchy" },
                  { value: "FAST", label: "order path" },
                ].map((item) => (
                  <div key={item.label}>
                    <div className="font-sans text-xl font-extrabold uppercase tracking-[0.12em] text-cream">
                      {item.value}
                    </div>
                    <div className="mt-2 text-[10px] font-bold uppercase tracking-[0.24em] text-cream/56">
                      {item.label}
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-8 text-xs uppercase tracking-[0.24em] text-cream/54">
                {siteConfig.address.line1}, {siteConfig.address.line2}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
