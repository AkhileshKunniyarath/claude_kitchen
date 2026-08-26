"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight, MapPin, Phone } from "lucide-react";
import { BrandLogo } from "@/components/common/BrandLogo";
import { WhatsAppButton } from "@/components/common/WhatsAppButton";
import { useSiteConfig } from "@/providers/SiteConfigProvider";
import { analyticsEvents } from "@/lib/analytics";

const heroStats = [
  { value: "45 MIN", label: "sealed dum finish" },
  { value: "22 SPICES", label: "whole spice layering" },
  { value: "4.9 / 5", label: "guest love across orders" },
];

const heroNotes = [
  "Slow-fire handi finish",
  "Large-format family spreads",
  "Premium delivery presentation",
];

export function HeroScene() {
  const siteConfig = useSiteConfig();
  return (
    <section
      className="relative overflow-hidden bg-ember pb-16 pt-28 text-ivory md:pb-24 md:pt-32"
      aria-label="Claude Kitchen hero section"
    >
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

      <div className="pointer-events-none absolute inset-x-0 top-14 hidden overflow-hidden xl:block" aria-hidden="true">
        <div className="mx-auto max-w-[1500px] px-6 font-sans text-[9rem] font-extrabold uppercase leading-tight tracking-tight text-ivory/[0.03]">
          BIRYANI BIRYANI BIRYANI
        </div>
        <div className="mx-auto mt-2 max-w-[1500px] px-6 text-right font-sans text-[8rem] font-extrabold uppercase leading-tight tracking-tight text-ivory/[0.02]">
          HANDI FEAST
        </div>
      </div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-[0.92fr_1.08fr] lg:items-center">
          <div className="max-w-2xl">
            <div className="mb-6 inline-flex items-center gap-3 rounded-full border border-gold/20 bg-gold/[0.06] px-4 py-2 backdrop-blur-md">
              <span className="h-2 w-2 rounded-full bg-gold" />
              <span className="text-[11px] font-bold uppercase tracking-[0.34em] text-gold">
                Premium Dum House
              </span>
            </div>

            <BrandLogo
              variant="stacked"
              theme="light"
              size="md"
              className="mb-8"
              priority
            />

            <h1 className="font-sans text-[3.25rem] font-extrabold uppercase leading-tight tracking-tight text-ivory sm:text-[4.6rem] lg:text-[5.75rem]">
              This is what
              <span className="block text-gold">premium biryani</span>
              looks like.
            </h1>

            <p className="mt-6 max-w-xl text-base leading-8 text-ivory/70 md:text-lg">
              Inspired by the appetite-first confidence of premium burger brands,
              Claude Kitchen now leads with what matters most: loaded handis,
              richer visual drama, and biryani that feels like an occasion before
              the lid is even lifted.
            </p>

            <div className="mt-7 flex flex-wrap gap-3">
              {heroNotes.map((note) => (
                <span
                  key={note}
                  className="rounded-full border border-ivory/10 bg-charcoal-warm/60 px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.22em] text-ivory/70"
                >
                  {note}
                </span>
              ))}
            </div>

            <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:flex-wrap sm:items-center">
              <WhatsAppButton
                placement="hero"
                label="Order the Signature"
                className="px-8 py-4 text-base"
              />
              <Link
                href="/menu"
                className="inline-flex items-center justify-center gap-2 rounded-full border border-ivory/14 bg-ivory/[0.06] px-6 py-4 text-sm font-semibold uppercase tracking-[0.22em] text-ivory transition-all hover:border-ivory/26 hover:bg-ivory/[0.12]"
              >
                View Full Menu <ArrowRight size={18} />
              </Link>
              <a
                href={`tel:${siteConfig.phone}`}
                onClick={() => analyticsEvents.phoneClick("hero")}
                className="inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-[0.18em] text-ivory/60 transition-colors hover:text-ivory"
              >
                <Phone size={16} />
                {siteConfig.phone}
              </a>
            </div>

            <div className="mt-12 grid gap-4 border-t border-ivory/8 pt-8 sm:grid-cols-3">
              {heroStats.map((item) => (
                <div key={item.label}>
                  <div className="font-sans text-xl font-extrabold uppercase tracking-[0.14em] text-gold">
                    {item.value}
                  </div>
                  <div className="mt-2 text-xs uppercase tracking-[0.24em] text-ivory/50">
                    {item.label}
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="relative">
            <div className="absolute -left-8 top-16 hidden h-28 w-28 rounded-full border border-gold/10 xl:block" aria-hidden="true" />
            <div className="absolute -right-4 bottom-8 hidden h-44 w-44 rounded-full border border-ember/10 xl:block" aria-hidden="true" />

            <div className="relative overflow-hidden rounded-[38px] border border-ivory/8 bg-charcoal-warm p-4 shadow-[0_35px_100px_rgba(42,22,16,0.40)] sm:p-6">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(200,90,47,0.12),_transparent_36%),linear-gradient(180deg,rgba(212,168,83,0.04),transparent)]" />

              <div className="relative grid gap-4 lg:grid-cols-[1fr_220px]">
                <div className="relative min-h-[520px] overflow-hidden rounded-[30px] border border-ivory/8">
                  <Image
                    src="/images/menu/generated/hyderabadi-dum-biryani.jpg"
                    alt="Claude Kitchen Hyderabadi Dum Biryani"
                    fill
                    className="object-cover"
                    priority
                    sizes="(max-width: 1024px) 100vw, 52vw"
                  />
                  <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(42,22,16,0.04),rgba(42,22,16,0.62))]" />

                  <div className="absolute left-4 top-4 rounded-[22px] border border-ivory/10 bg-charcoal/80 px-4 py-3 backdrop-blur-md">
                    <div className="text-[10px] font-bold uppercase tracking-[0.28em] text-gold">
                      Signature Handi
                    </div>
                    <div className="mt-2 font-sans text-lg font-extrabold uppercase tracking-[0.12em] text-ivory">
                      Hyderabadi Dum
                    </div>
                  </div>

                  <div className="absolute bottom-4 left-4 right-4 rounded-[28px] border border-ivory/10 bg-charcoal/80 p-5 backdrop-blur-md">
                    <div className="flex items-start justify-between gap-4">
                      <div>
                        <div className="text-[10px] font-bold uppercase tracking-[0.28em] text-gold">
                          Layered Rice. Tender Mutton. Real Aroma.
                        </div>
                        <div className="mt-2 max-w-md text-sm leading-7 text-ivory/65">
                          Built to look abundant on screen and even better when it reaches
                          the table.
                        </div>
                      </div>
                      <a
                        href={siteConfig.address.mapUrl}
                        onClick={() => analyticsEvents.mapDirectionsClick("hero")}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hidden items-center gap-2 rounded-full border border-ivory/12 px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.22em] text-ivory/70 transition-colors hover:text-ivory sm:inline-flex"
                      >
                        <MapPin size={14} />
                        Find Us
                      </a>
                    </div>
                  </div>
                </div>

                <div className="grid gap-4">
                  <div className="rounded-[28px] border border-ivory/8 bg-charcoal/60 p-5">
                    <div className="text-[10px] font-bold uppercase tracking-[0.28em] text-gold">
                      Premium Delivery Flow
                    </div>
                    <div className="mt-3 font-sans text-2xl font-extrabold uppercase tracking-[0.06em] text-ivory">
                      Heavy on product. Light on clutter.
                    </div>
                    <p className="mt-3 text-sm leading-7 text-ivory/60">
                      The same appetite-first approach that makes a burger brand
                      feel expensive now powers every biryani moment here too.
                    </p>
                  </div>

                  <div className="relative min-h-[250px] overflow-hidden rounded-[28px] border border-ivory/8">
                    <Image
                      src="/images/menu/generated/family-pack-feast.jpg"
                      alt="Claude Kitchen family pack biryani spread"
                      fill
                      className="object-cover"
                      sizes="(max-width: 1024px) 100vw, 20vw"
                    />
                    <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(42,22,16,0.18),rgba(42,22,16,0.74))]" />
                    <div className="absolute bottom-4 left-4 right-4">
                      <div className="text-[10px] font-bold uppercase tracking-[0.28em] text-gold">
                        Family Packs
                      </div>
                      <div className="mt-2 font-sans text-lg font-extrabold uppercase tracking-[0.08em] text-ivory">
                        Feast-ready presentation
                      </div>
                    </div>
                  </div>

                  <div className="rounded-[28px] border border-ivory/8 bg-charcoal-warm/60 p-5">
                    <div className="flex items-center justify-between gap-4">
                      <div>
                        <div className="text-[10px] font-bold uppercase tracking-[0.28em] text-gold">
                          Best Entry Point
                        </div>
                        <div className="mt-2 font-sans text-lg font-extrabold uppercase tracking-[0.08em] text-ivory">
                          Start with the Signature Menu
                        </div>
                      </div>
                      <Link
                        href="/gallery"
                        className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-ivory/14 text-ivory transition-colors hover:bg-ivory/[0.08]"
                        aria-label="View the gallery"
                      >
                        <ArrowRight size={18} />
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-10 overflow-hidden rounded-full border border-ivory/6 bg-charcoal-warm/40 px-4 py-4">
          <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-3 text-center text-[11px] font-bold uppercase tracking-[0.32em] text-ivory/40">
            <span>Slow Fire</span>
            <span>Saffron Rice</span>
            <span>Bone-in Richness</span>
            <span>Travel-ready Packaging</span>
            <span>Family Table Energy</span>
          </div>
        </div>
      </div>
    </section>
  );
}
