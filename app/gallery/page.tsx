import type { Metadata } from "next";
import Image from "next/image";
import { WhatsAppButton } from "@/components/common/WhatsAppButton";
import { InstagramIcon } from "@/components/common/SocialIcons";
import { siteConfig } from "@/data/site-config";
import { PageHero } from "@/components/common/PageHero";

export const metadata: Metadata = {
  title: "Gallery",
  description:
    "A visual journey through Claude Kitchen — slow-cooked biryani, fresh ingredients, classic handi and celebratory serving moments.",
};

const galleryItems = [
  {
    id: "g1",
    label: "Hyderabadi Dum Biryani",
    group: "signature",
    src: "/images/menu/generated/hyderabadi-dum-biryani.jpg",
    span: "md:col-span-2 md:row-span-2",
  },
  {
    id: "g2",
    label: "Classic Chicken Dum",
    group: "signature",
    src: "/images/menu/generated/chicken-dum-biryani.jpg",
  },
  {
    id: "g3",
    label: "Royal Mutton Biryani",
    group: "signature",
    src: "/images/menu/generated/royal-mutton-biryani.jpg",
  },
  {
    id: "g4",
    label: "Coastal Prawn Biryani",
    group: "signature",
    src: "/images/menu/generated/coastal-prawn-biryani.jpg",
  },
  {
    id: "g5",
    label: "Garden Vegetable Dum",
    group: "veg",
    src: "/images/menu/generated/vegetable-dum-biryani.jpg",
  },
  {
    id: "g6",
    label: "Family Pack Feast",
    group: "family",
    src: "/images/menu/generated/family-pack-feast.jpg",
    span: "md:col-span-2",
  },
  {
    id: "g7",
    label: "Burhani Raita",
    group: "sides",
    src: "/images/menu/generated/burhani-raita.jpg",
  },
  {
    id: "g8",
    label: "Mirchi Ka Salan",
    group: "sides",
    src: "/images/menu/generated/mirchi-ka-salan.jpg",
  },
  {
    id: "g9",
    label: "Mutton Shorba",
    group: "sides",
    src: "/images/menu/generated/mutton-shorba.jpg",
  },
  {
    id: "g10",
    label: "Classic Combo Meal",
    group: "combo",
    src: "/images/menu/generated/classic-combo-meal.jpg",
  },
];

export default function GalleryPage() {
  return (
    <>
      <PageHero
        eyebrow="Visual Story"
        title="Gallery"
        subtitle="A product-first look at Claude Kitchen's signature biryanis, family-style spreads, and classic accompaniments, photographed to feel rich, warm, and immediately craveable."
        compactLogo
      />

      {/* Gallery grid */}
      <section className="py-12 bg-ivory" aria-label="Gallery">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 auto-rows-[180px] md:auto-rows-[200px]">
            {galleryItems.map((item, i) => (
              <div
                key={item.id}
                className={`${item.span || ""} group relative overflow-hidden rounded-2xl border border-sand bg-charcoal transition-all hover:border-gold/30 hover:shadow-md`}
                role="img"
                aria-label={item.label}
              >
                <Image
                  src={item.src}
                  alt={item.label}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                  sizes="(max-width: 768px) 50vw, 25vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-charcoal/90 via-charcoal/25 to-transparent" />
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(255,255,255,0.10),_transparent_30%)]" />
                <div className="relative z-10 flex h-full flex-col justify-between p-4">
                  <div className="flex items-start justify-between gap-3">
                    <span className="rounded-full border border-ivory/20 bg-ivory/8 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.24em] text-ivory">
                      {item.group}
                    </span>
                    <span className="text-[10px] font-semibold uppercase tracking-[0.24em] text-ivory/60">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                  </div>
                  <div>
                    <div className="font-serif text-xl md:text-2xl font-bold leading-tight text-ivory">
                      {item.label}
                    </div>
                    <div className="mt-2 text-xs uppercase tracking-[0.24em] text-ivory/55">
                      Claude Kitchen Visual Story
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Instagram CTA */}
          <div className="mt-14 text-center">
            <div className="premium-panel inline-flex flex-col items-center gap-4 px-8 py-8">
              <p className="text-text-secondary">
                Follow us for daily food stories and behind-the-scenes from the
                kitchen.
              </p>
              <a
                href={siteConfig.social.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary"
              >
                <InstagramIcon className="w-[18px] h-[18px]" />
                Follow @claudekitchen
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Order CTA */}
      <section className="py-14 bg-ivory-warm text-center px-4">
        <div className="premium-panel mx-auto max-w-xl px-8 py-8">
          <div className="premium-kicker mb-3 text-gold-dark">Order Prompt</div>
          <h2 className="font-serif text-charcoal text-3xl md:text-4xl font-semibold mb-3">
            Hungry Already?
          </h2>
          <p className="text-text-secondary mb-6">
            Good. That was the plan. Order now and have it at your door.
          </p>
          <WhatsAppButton placement="gallery-cta" label="Order on WhatsApp" />
        </div>
      </section>
    </>
  );
}
