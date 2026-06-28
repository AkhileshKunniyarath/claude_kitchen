import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { DishCard } from "@/components/common/DishCard";
import { signatureDishes } from "@/data/menu";

const premiumSignals = [
  {
    value: "Loaded visuals",
    label: "The handi looks abundant before the description even starts.",
  },
  {
    value: "Confident hierarchy",
    label: "Big type, tighter messaging, and cleaner calls to action.",
  },
  {
    value: "Built to travel",
    label: "Delivery-ready portions still feel like a dine-in moment.",
  },
  {
    value: "Craveable lineup",
    label: "Signature choices get treated like hero products, not generic cards.",
  },
];

export function SignatureDishesSection() {
  return (
    <section className="relative overflow-hidden bg-[#180b07] py-20 md:py-32" aria-labelledby="signature-heading">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(211,92,48,0.24),_transparent_28%),radial-gradient(circle_at_bottom_right,_rgba(199,138,67,0.16),_transparent_24%)]" aria-hidden="true" />
      <div className="absolute inset-0 premium-grid opacity-[0.05]" aria-hidden="true" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-8 lg:grid-cols-[0.94fr_1.06fr] lg:items-end">
          <div>
            <div className="text-[11px] font-bold uppercase tracking-[0.34em] text-gold">
              Meet The Handis
            </div>
            <h2
              id="signature-heading"
              className="mt-5 font-sans text-4xl font-extrabold uppercase leading-[0.94] tracking-[-0.05em] text-cream md:text-6xl"
            >
              The menu should
              <span className="block text-terracotta">feel expensive</span>
              before it feels long.
            </h2>
            <p className="mt-6 max-w-2xl text-base leading-8 text-cream/74">
              This section takes the product-led confidence of the burger reference
              and translates it into biryani: fewer weak moments, stronger dish
              framing, and cards that feel like premium features instead of a flat list.
            </p>
          </div>

          <div className="overflow-hidden rounded-[34px] border border-cream/12 bg-white/[0.05] p-4 sm:p-5">
            <div className="grid gap-4 lg:grid-cols-[0.96fr_1.04fr]">
              <div className="relative min-h-[260px] overflow-hidden rounded-[28px] border border-cream/10">
                <Image
                  src="/images/menu/generated/coastal-prawn-biryani.jpg"
                  alt="Coastal prawn biryani"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 24vw"
                />
                <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(16,8,6,0.08),rgba(16,8,6,0.72))]" />
                <div className="absolute bottom-4 left-4 right-4">
                  <div className="text-[10px] font-bold uppercase tracking-[0.28em] text-gold">
                    Featured drop
                  </div>
                  <div className="mt-2 font-sans text-lg font-extrabold uppercase tracking-[0.08em] text-cream">
                    Coastal prawn biryani
                  </div>
                </div>
              </div>

              <div className="grid gap-3">
                {premiumSignals.map((item) => (
                  <div key={item.value} className="rounded-[24px] border border-cream/10 bg-[#24120d] p-4">
                    <div className="font-sans text-lg font-extrabold uppercase tracking-[0.06em] text-cream">
                      {item.value}
                    </div>
                    <p className="mt-2 text-sm leading-7 text-cream/68">{item.label}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-5 flex justify-end">
              <Link
                href="/menu"
                className="inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-[0.22em] text-gold transition-all hover:gap-3 hover:text-cream"
                aria-label="View full menu"
              >
                View the full menu <ArrowRight size={18} />
              </Link>
            </div>
          </div>
        </div>

        <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 xl:grid-cols-4">
          {signatureDishes.map((dish) => (
            <DishCard key={dish.id} dish={dish} placement="home-signature" />
          ))}
        </div>
      </div>
    </section>
  );
}
