import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { type Dish } from "@/data/menu";
import { DishCard } from "@/components/common/DishCard";

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

interface SignatureDishesSectionProps {
  signatureDishes: Dish[];
}

export function SignatureDishesSection({ signatureDishes }: SignatureDishesSectionProps) {
  return (
    <section className="relative overflow-hidden bg-ivory py-20 md:py-32" aria-labelledby="signature-heading">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(200,90,47,0.06),_transparent_28%),radial-gradient(circle_at_bottom_right,_rgba(212,168,83,0.05),_transparent_24%)]" aria-hidden="true" />
      <div className="absolute inset-0 premium-grid opacity-[0.05]" aria-hidden="true" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-8 lg:grid-cols-[0.94fr_1.06fr] lg:items-end">
          <div>
            <div className="text-[11px] font-bold uppercase tracking-[0.34em] text-gold-dark">
              Meet The Handis
            </div>
            <h2
              id="signature-heading"
              className="mt-5 font-sans text-4xl font-extrabold uppercase leading-tight tracking-tight text-charcoal md:text-6xl"
            >
              The menu should
              <span className="block text-ember">feel expensive</span>
              before it feels long.
            </h2>
            <p className="mt-6 max-w-2xl text-base leading-8 text-text-secondary">
              This section takes the product-led confidence of the burger reference
              and translates it into biryani: fewer weak moments, stronger dish
              framing, and cards that feel like premium features instead of a flat list.
            </p>
          </div>

          <div className="overflow-hidden rounded-[34px] border border-ivory/8 bg-charcoal/50 p-4 sm:p-5">
            <div className="grid gap-4 lg:grid-cols-[0.96fr_1.04fr]">
              <div className="relative min-h-[260px] overflow-hidden rounded-[28px] border border-ivory/8">
                <Image
                  src="/images/menu/generated/coastal-prawn-biryani.jpg"
                  alt="Coastal prawn biryani"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 24vw"
                />
                <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(28,20,18,0.08),rgba(28,20,18,0.72))]" />
                <div className="absolute bottom-4 left-4 right-4">
                  <div className="text-[10px] font-bold uppercase tracking-[0.28em] text-gold">
                    Featured drop
                  </div>
                  <div className="mt-2 font-sans text-lg font-extrabold uppercase tracking-[0.08em] text-ivory">
                    Coastal prawn biryani
                  </div>
                </div>
              </div>

              <div className="grid gap-3">
                {premiumSignals.map((item) => (
                  <div key={item.value} className="rounded-[24px] border-l-2 border-l-ember border border-ivory/6 bg-charcoal/60 p-4">
                    <div className="font-sans text-lg font-extrabold uppercase tracking-[0.06em] text-ivory">
                      {item.value}
                    </div>
                    <p className="mt-2 text-sm leading-7 text-ivory/55">{item.label}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-5 flex justify-end">
              <Link
                href="/menu"
                className="inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-[0.22em] text-gold transition-all hover:gap-3 hover:text-gold-light"
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
