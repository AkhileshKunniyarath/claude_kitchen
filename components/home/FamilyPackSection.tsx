import Image from "next/image";
import Link from "next/link";
import { Building2, Calendar, ChevronRight, Users } from "lucide-react";
import { WhatsAppButton } from "@/components/common/WhatsAppButton";

const useCases = [
  {
    icon: Users,
    title: "Family meals",
    desc: "A larger handi, generous portions, and the kind of spread that still feels festive on a regular weekend.",
    cta: "Order Family Pack",
  },
  {
    icon: Calendar,
    title: "Celebrations",
    desc: "Birthday tables, Eid lunches, and festive orders that need both quantity and a premium first impression.",
    cta: "Enquire for Events",
  },
  {
    icon: Building2,
    title: "Office orders",
    desc: "Consistent group ordering with cleaner logistics, advance prep, and delivery that still arrives looking composed.",
    cta: "Order for Office",
  },
];

export function FamilyPackSection() {
  return (
    <section className="relative overflow-hidden bg-ivory py-20 md:py-32 border-t border-gold/10" aria-labelledby="family-heading">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(212,168,83,0.06),_transparent_28%),radial-gradient(circle_at_bottom_right,_rgba(200,90,47,0.06),_transparent_26%)]" aria-hidden="true" />

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-8 lg:grid-cols-[0.94fr_1.06fr] lg:items-center">
          <div>
            <div className="text-[11px] font-bold uppercase tracking-[0.34em] text-gold-dark">
              Bigger Orders, Same Appetite
            </div>
            <h2
              id="family-heading"
              className="mt-5 font-sans text-4xl font-extrabold uppercase leading-tight tracking-tight text-charcoal md:text-6xl"
            >
              The biryani
              <span className="block text-ember">still has to look</span>
              big on arrival.
            </h2>
            <p className="mt-6 max-w-2xl text-base leading-8 text-text-secondary">
              Premium fast-casual brands sell portability without losing desire.
              For Claude Kitchen, that means family packs, office orders, and
              catering spreads that travel well but still land with visual weight.
            </p>

            <div className="mt-10 grid gap-4 sm:grid-cols-3">
              {[
                { value: "4-40", label: "guest coverage" },
                { value: "2 HR", label: "bulk notice window" },
                { value: "HOT", label: "arrival experience" },
              ].map((item) => (
                <div key={item.label} className="rounded-[24px] border border-sand bg-ivory-warm p-5">
                  <div className="font-sans text-2xl font-extrabold uppercase tracking-[0.1em] text-ember">
                    {item.value}
                  </div>
                  <div className="mt-2 text-[10px] font-bold uppercase tracking-[0.24em] text-text-muted">
                    {item.label}
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="relative overflow-hidden rounded-[38px] border border-ivory/8 bg-charcoal p-4 shadow-[0_30px_80px_rgba(28,20,18,0.14)] sm:p-5">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(200,90,47,0.08),_transparent_36%)]" aria-hidden="true" />
            <div className="relative grid gap-4 lg:grid-cols-[1.05fr_0.95fr]">
              <div className="relative min-h-[420px] overflow-hidden rounded-[30px] border border-ivory/8">
                <Image
                  src="/images/menu/generated/family-pack-feast.jpg"
                  alt="Claude Kitchen family pack feast"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 42vw"
                />
                <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(28,20,18,0.05),rgba(28,20,18,0.72))]" />
                <div className="absolute left-4 right-4 top-4 rounded-full border border-ivory/10 bg-charcoal/76 px-4 py-2 text-center text-[10px] font-bold uppercase tracking-[0.28em] text-gold backdrop-blur-md">
                  Family handi • raita • salan • papad
                </div>
                <div className="absolute bottom-4 left-4 right-4 rounded-[26px] border border-ivory/10 bg-charcoal/80 p-5 backdrop-blur-md">
                  <div className="font-sans text-2xl font-extrabold uppercase tracking-[0.05em] text-ivory">
                    Built for the whole table.
                  </div>
                  <p className="mt-2 text-sm leading-7 text-ivory/60">
                    It should feel like something worth passing around, not just a larger box.
                  </p>
                </div>
              </div>

              <div className="grid gap-4">
                {useCases.map((item) => {
                  const Icon = item.icon;

                  return (
                    <div
                      key={item.title}
                      className="rounded-[28px] border border-ivory/8 bg-charcoal-warm/60 p-6 backdrop-blur-md"
                    >
                      <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-2xl border border-ivory/8 bg-charcoal-muted/40">
                        <Icon size={22} className="text-gold" aria-hidden="true" />
                      </div>
                      <div className="font-sans text-2xl font-extrabold uppercase tracking-[0.05em] text-ivory">
                        {item.title}
                      </div>
                      <p className="mt-3 text-sm leading-7 text-ivory/60">{item.desc}</p>
                      <WhatsAppButton
                        type={item.title === "Celebrations" ? "catering" : "bulkOrder"}
                        placement={`family-${item.title.toLowerCase().replace(/\s+/g, "-")}`}
                        label={item.cta}
                        variant="outline"
                        className="mt-5 border-ivory/20 bg-ivory/[0.04] text-ivory hover:bg-ivory hover:text-charcoal"
                      />
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>

        <div className="mt-10 text-center">
          <Link
            href="/catering"
            className="inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-[0.22em] text-text-secondary transition-colors hover:text-ember"
          >
            Learn about our catering services <ChevronRight size={18} />
          </Link>
        </div>
      </div>
    </section>
  );
}
