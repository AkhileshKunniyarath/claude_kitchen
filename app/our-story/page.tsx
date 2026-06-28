import type { Metadata } from "next";
import { WhatsAppButton } from "@/components/common/WhatsAppButton";
import { MapPin } from "lucide-react";
import Link from "next/link";
import { PageHero } from "@/components/common/PageHero";

export const metadata: Metadata = {
  title: "Our Story",
  description:
    "The story behind Claude Kitchen — a classic biryani hub born from a love of slow cooking, layered spices and honest hospitality.",
};

const values = [
  {
    index: "01",
    title: "No Shortcuts",
    desc: "We do not hurry the biryani. Every batch is cooked on its own timeline, not a production clock.",
  },
  {
    index: "02",
    title: "Fresh Ingredients",
    desc: "Herbs, protein and produce sourced every morning. Never frozen, never compromised.",
  },
  {
    index: "03",
    title: "Whole Spices Only",
    desc: "We use whole, hand-selected spices. Ground spice powders take shortcuts. We do not.",
  },
  {
    index: "04",
    title: "Honest Hospitality",
    desc: "Whether it is one plate or a hundred, every order receives the same care.",
  },
];

export default function OurStoryPage() {
  return (
    <>
      <PageHero
        eyebrow="Who We Are"
        title="A Kitchen Born From Patience"
        subtitle="Claude Kitchen began with a single conviction: the biryani people remember most is never the hurried one. Every detail here is built around aroma, timing, and respectful craft."
      >
        <div className="grid gap-4 text-left sm:grid-cols-3">
          {[
            { value: "45 Min", label: "sealed dum finish" },
            { value: "22 Spice", label: "whole-spice layering" },
            { value: "Daily Prep", label: "fresh kitchen rhythm" },
          ].map((item) => (
            <div key={item.label} className="rounded-2xl border border-cream/18 bg-cream/10 px-4 py-4">
              <div className="font-serif text-2xl text-cream">{item.value}</div>
              <div className="mt-1 text-xs uppercase tracking-[0.22em] text-cream/80">{item.label}</div>
            </div>
          ))}
        </div>
      </PageHero>

      {/* Main story */}
      <section className="bg-cream py-16 md:py-24" aria-label="Our story">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <div className="grid grid-cols-1 items-center gap-10 mb-16 md:grid-cols-2">
            <div className="premium-panel p-8 md:p-10">
              <div className="mb-3 text-xs font-semibold uppercase tracking-[0.28em] text-terracotta">
                Kitchen Philosophy
              </div>
              <h2 className="mb-5 font-serif text-4xl font-semibold leading-[0.98] text-masala">
                The Tradition We Protect
              </h2>
              <p className="mb-4 leading-8 text-masala/82">
                Dum biryani is one of the great slow-food traditions of South
                Asia. At its core it is deceptively simple: rice, protein,
                spices and fire. But great biryani is not about ingredients
                alone — it is about respect for the process.
              </p>
              <p className="leading-8 text-masala/82">
                At Claude Kitchen, we seal each handi the traditional way, let
                the steam build pressure inside and leave the fire to do its
                patient work. There is no peeking, no stirring, no
                interference. The result is biryani that tastes like it was
                made by someone who truly cared.
              </p>
            </div>
            <div className="premium-panel-dark flex aspect-square items-center justify-center p-10">
              <div className="rounded-full border border-gold/20 bg-terracotta/15 px-10 py-10 text-center">
                <div className="font-serif text-5xl text-cream">Dum</div>
                <div className="mt-2 text-xs uppercase tracking-[0.32em] text-gold">sealed handi ritual</div>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 items-center gap-10 mb-16 md:grid-cols-2">
            <div className="premium-panel order-2 aspect-[4/3] p-8 md:order-1">
              <div className="flex h-full flex-col justify-between">
                <div className="text-xs font-semibold uppercase tracking-[0.28em] text-terracotta">
                  Signature Balance
                </div>
                <div className="font-serif text-5xl font-semibold leading-none text-masala">
                  22
                  <span className="block text-2xl tracking-[0.2em] text-gold-dark">WHOLE SPICES</span>
                </div>
                <div className="text-sm leading-7 text-masala/78">
                  Toasted, layered, and released gradually into the steam instead of flattened into one-note heat.
                </div>
              </div>
            </div>
            <div className="order-1 md:order-2">
              <div className="mb-3 text-xs font-semibold uppercase tracking-[0.28em] text-terracotta">
                Craft Notes
              </div>
              <h2 className="mb-5 font-serif text-4xl font-semibold leading-[0.98] text-masala">
                Our Spice Philosophy
              </h2>
              <p className="mb-4 leading-8 text-masala/82">
                We work with whole spices — cardamom pods, cinnamon bark,
                cloves, star anise, bay leaves, mace and more. They are
                dry-roasted before each batch, releasing their oils into the
                cooking fat. You cannot achieve that flavour from a powder.
              </p>
              <p className="leading-8 text-masala/82">
                The spice balance in our biryani is not sharp or aggressive —
                it is layered, warm and aromatic. Heat is present but never
                dominant. We want you to taste the rice, the protein and the
                spices together as one experience.
              </p>
            </div>
          </div>

          <div className="premium-panel-dark mb-16 p-10 text-center md:p-14">
            <blockquote className="mx-auto max-w-3xl font-serif text-3xl font-semibold italic leading-relaxed text-cream md:text-4xl">
              &ldquo;The aroma of a well-made biryani should reach you before
              the plate does. That moment of anticipation — that is what we
              cook for.&rdquo;
            </blockquote>
            <div className="mt-6 text-xs uppercase tracking-[0.26em] text-gold">
              Claude Kitchen Kitchen Team
            </div>
          </div>
        </div>
      </section>

      {/* Values grid */}
      <section className="bg-[#f5e7d8] py-16" aria-labelledby="values-heading">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-12 text-center">
            <div className="premium-kicker mb-3 text-terracotta">Guiding Principles</div>
            <h2
              id="values-heading"
              className="font-serif text-4xl font-semibold text-masala md:text-5xl"
            >
              What Guides Us
            </h2>
          </div>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {values.map((v) => (
              <div
                key={v.title}
                className="premium-panel p-6"
              >
                <div className="mb-4 text-xs font-semibold uppercase tracking-[0.28em] text-terracotta">
                  {v.index}
                </div>
                <h3 className="mb-3 font-serif text-3xl font-semibold text-masala">
                  {v.title}
                </h3>
                <p className="text-sm leading-7 text-masala/78">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-cream px-4 py-16 text-center" aria-label="Order call to action">
        <div className="premium-panel mx-auto max-w-3xl px-6 py-10 sm:px-10">
          <div className="premium-kicker mb-3 text-terracotta">Taste The Story</div>
          <h2 className="mb-4 font-serif text-4xl font-semibold text-masala">
            Come Taste the Difference
          </h2>
          <p className="mb-8 text-lg leading-8 text-masala/76">
            Words can describe patience and craft, but biryani has to be
            experienced. Order now and taste what we mean.
          </p>
          <div className="flex flex-col justify-center gap-4 sm:flex-row">
            <WhatsAppButton placement="our-story-cta" label="Order Now" />
            <Link
              href="/contact"
              className="btn-outline"
            >
              <MapPin size={18} /> Find Us
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
