import Image from "next/image";

const craftPoints = [
  {
    title: "No rushed rice",
    description:
      "Aged basmati keeps structure so every layer lands separately instead of collapsing into one heavy bite.",
  },
  {
    title: "No flat masala",
    description:
      "Whole spices bloom gradually through steam, which gives the handi lift, warmth, and a cleaner finish.",
  },
  {
    title: "No weak arrival",
    description:
      "The package opens with fragrance first, then color, then texture. That sequence is part of the product.",
  },
];

const ritualSteps = [
  "Marinate overnight so the protein carries spice through the grain, not just around it.",
  "Layer rice, onions, herbs, saffron, and masala in stages instead of dumping everything into one finish.",
  "Seal the handi and let steam do the final work so the opening moment still feels dramatic at delivery.",
];

export function BiryaniStorySection() {
  return (
    <section className="relative overflow-hidden bg-ivory py-20 md:py-32" aria-labelledby="story-heading">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_rgba(212,168,83,0.08),_transparent_26%),radial-gradient(circle_at_bottom_left,_rgba(200,90,47,0.06),_transparent_24%)]" aria-hidden="true" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-[0.86fr_1.14fr] lg:items-start">
          <div className="lg:sticky lg:top-28">
            <div className="text-[11px] font-bold uppercase tracking-[0.34em] text-gold-dark">
              Why It Feels Premium
            </div>
            <h2
              id="story-heading"
              className="mt-5 font-sans text-4xl font-extrabold uppercase leading-tight tracking-tight text-charcoal md:text-6xl"
            >
              Built like a headline.
              <span className="block text-ember">Cooked like a ritual.</span>
            </h2>
            <p className="mt-6 max-w-xl text-base leading-8 text-text-secondary">
              Premium fast-casual brands win when every section sells appetite with
              confidence. For biryani, that means pushing the handi forward, keeping
              the messaging tighter, and making the craft feel like part of the luxury.
            </p>

            <div className="mt-10 space-y-4">
              {craftPoints.map((point, index) => (
                <div
                  key={point.title}
                  className="rounded-[28px] border border-sand bg-ivory-warm/70 p-5 shadow-[0_18px_40px_rgba(28,20,18,0.04)]"
                >
                  <div className="text-[10px] font-bold uppercase tracking-[0.28em] text-gold-dark">
                    0{index + 1}
                  </div>
                  <div className="mt-3 font-sans text-xl font-extrabold uppercase tracking-[0.04em] text-charcoal">
                    {point.title}
                  </div>
                  <p className="mt-3 text-sm leading-7 text-text-secondary">{point.description}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="grid gap-6">
            <div className="grid gap-6 lg:grid-cols-[1.06fr_0.94fr]">
              <div className="relative min-h-[420px] overflow-hidden rounded-[34px] border border-sand bg-charcoal shadow-[0_30px_80px_rgba(28,20,18,0.10)]">
                <Image
                  src="/images/menu/generated/chicken-dum-biryani.jpg"
                  alt="Classic Chicken Dum Biryani"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 40vw"
                />
                <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(28,20,18,0.04),rgba(28,20,18,0.74))]" />
                <div className="absolute left-5 right-5 top-5 flex items-start justify-between gap-4">
                  <div className="rounded-full border border-ivory/10 bg-charcoal/76 px-4 py-2 text-[10px] font-bold uppercase tracking-[0.28em] text-gold backdrop-blur-md">
                    Layered for aroma
                  </div>
                  <div className="rounded-full border border-ivory/10 bg-charcoal/76 px-4 py-2 text-[10px] font-bold uppercase tracking-[0.28em] text-ivory/70 backdrop-blur-md">
                    Classic chicken dum
                  </div>
                </div>
                <div className="absolute bottom-5 left-5 right-5 rounded-[26px] border border-ivory/10 bg-charcoal/80 p-5 backdrop-blur-md">
                  <div className="text-[10px] font-bold uppercase tracking-[0.28em] text-gold">
                    Product-first presentation
                  </div>
                  <div className="mt-2 font-sans text-2xl font-extrabold uppercase tracking-[0.05em] text-ivory">
                    Appetite has to hit before the first order click.
                  </div>
                </div>
              </div>

              <div className="grid gap-6">
                <div className="premium-panel-soft p-6">
                  <div className="text-[10px] font-bold uppercase tracking-[0.28em] text-gold-dark">
                    The Dum Sequence
                  </div>
                  <div className="mt-4 space-y-4">
                    {ritualSteps.map((step) => (
                      <div key={step} className="flex items-start gap-3">
                        <span className="mt-2 h-2.5 w-2.5 shrink-0 rounded-full bg-ember" />
                        <p className="text-sm leading-7 text-text-secondary">{step}</p>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="relative min-h-[220px] overflow-hidden rounded-[30px] border border-sand">
                  <Image
                    src="/images/menu/generated/burhani-raita.jpg"
                    alt="Burhani raita side dish"
                    fill
                    className="object-cover"
                    sizes="(max-width: 1024px) 100vw, 24vw"
                  />
                  <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(28,20,18,0.14),rgba(28,20,18,0.76))]" />
                  <div className="absolute bottom-4 left-4 right-4">
                    <div className="text-[10px] font-bold uppercase tracking-[0.28em] text-gold">
                      Supporting cast
                    </div>
                    <div className="mt-2 font-sans text-lg font-extrabold uppercase tracking-[0.08em] text-ivory">
                      Sides that look as intentional as the handi.
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="rounded-[34px] border border-sand bg-ivory-warm/72 p-7 shadow-[0_20px_60px_rgba(28,20,18,0.04)] sm:p-9">
              <div className="grid gap-7 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
                <div>
                  <div className="text-[10px] font-bold uppercase tracking-[0.28em] text-gold-dark">
                    Every Layer Matters
                  </div>
                  <div className="mt-4 font-sans text-3xl font-extrabold uppercase leading-tight tracking-tight text-charcoal md:text-4xl">
                    Richer visuals work because the product already has the depth.
                  </div>
                </div>

                <div className="grid gap-4 sm:grid-cols-3">
                  {[
                    { value: "AGED", label: "basmati texture" },
                    { value: "SEALED", label: "steam finish" },
                    { value: "BOLD", label: "arrival energy" },
                  ].map((item) => (
                    <div key={item.label} className="rounded-[24px] border border-sand bg-ivory p-5 text-center">
                      <div className="font-sans text-xl font-extrabold uppercase tracking-[0.08em] text-charcoal">
                        {item.value}
                      </div>
                      <div className="mt-2 text-[10px] font-bold uppercase tracking-[0.24em] text-text-muted">
                        {item.label}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
