import type { Metadata } from "next";
import { WhatsAppButton } from "@/components/common/WhatsAppButton";
import { Phone, CheckCircle } from "lucide-react";
import { siteConfig } from "@/data/site-config";
import { PageHero } from "@/components/common/PageHero";

export const metadata: Metadata = {
  title: "Catering & Bulk Orders",
  description:
    "Claude Kitchen offers biryani catering for weddings, corporate events, celebrations and bulk orders across Bengaluru. Enquire via WhatsApp.",
};

const useCases = [
  {
    index: "01",
    title: "Weddings & Engagements",
    desc: "Make biryani the centerpiece of your celebration. We handle 50–500+ portions with consistent quality.",
  },
  {
    index: "02",
    title: "Birthdays & Anniversaries",
    desc: "Celebrate with a handi of real biryani for the people who matter. Custom pack sizes available.",
  },
  {
    index: "03",
    title: "Eid, Diwali & Festivals",
    desc: "Tradition calls for exceptional biryani. We scale to festival-size quantities with plenty of notice.",
  },
  {
    index: "04",
    title: "Corporate & Office Events",
    desc: "Individual or sharing portions for team lunches, client events and office celebrations.",
  },
  {
    index: "05",
    title: "Community Gatherings",
    desc: "Religious and community events catered respectfully with Halal-certified ingredients throughout.",
  },
  {
    index: "06",
    title: "Private Parties",
    desc: "House parties, family reunions and private dinners. We bring the kitchen to your occasion.",
  },
];

const process = [
  {
    step: "01",
    title: "Send Us a Message",
    desc: "WhatsApp or call with your event date, estimated guest count and preferred biryani varieties.",
  },
  {
    step: "02",
    title: "We Confirm & Quote",
    desc: "We review your requirements, confirm availability and provide a clear, all-inclusive quote.",
  },
  {
    step: "03",
    title: "Advance Booking",
    desc: "Confirm the order with a booking advance. We begin preparations based on your timeline.",
  },
  {
    step: "04",
    title: "Fresh Delivery",
    desc: "Biryani delivered fresh, hot and on time. Ready to serve directly from the handi.",
  },
];

const highlights = [
  "Halal-certified ingredients",
  "Minimum 30 portions for catering",
  "Custom menu selection",
  "Handi and serving equipment available",
  "48–72 hours advance booking required",
  "Delivery available across Bengaluru",
];

export default function CateringPage() {
  return (
    <>
      <PageHero
        eyebrow="Catering & Events"
        title="Biryani for Every Celebration"
        subtitle="From intimate family dinners to large-scale weddings, Claude Kitchen brings the same slow-cooked excellence, aromatic balance, and event-ready consistency to every table."
      >
        <div className="flex flex-col justify-center gap-4 sm:flex-row">
          <WhatsAppButton
            type="catering"
            placement="catering-hero"
            label="Enquire on WhatsApp"
            className="text-base px-8 py-4"
          />
          <a
            href={`tel:${siteConfig.phone}`}
            className="btn-outline border-ivory/24 bg-ivory/5 text-ivory hover:bg-ivory hover:text-charcoal text-base px-8 py-4"
          >
            <Phone size={18} /> Call to Discuss
          </a>
        </div>
      </PageHero>

      {/* Use cases */}
      <section className="bg-ivory py-16 md:py-24" aria-labelledby="occasions-heading">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-14 text-center">
            <div className="premium-kicker mb-3 text-gold-dark">Event Formats</div>
            <h2
              id="occasions-heading"
              className="font-serif text-4xl font-semibold text-charcoal md:text-5xl"
            >
              Every Occasion, Perfectly Served
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-lg leading-8 text-text-secondary">
              We have catered celebrations of every kind. If there are people
              gathering, we can bring the biryani.
            </p>
          </div>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {useCases.map((item) => (
              <div
                key={item.title}
                className="premium-panel p-7"
              >
                <div className="mb-4 text-xs font-semibold uppercase tracking-[0.28em] text-gold-dark">
                  {item.index}
                </div>
                <h3 className="mb-3 font-serif text-3xl font-semibold text-charcoal">
                  {item.title}
                </h3>
                <p className="text-sm leading-7 text-text-secondary">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="bg-charcoal py-16 md:py-24" aria-labelledby="process-heading">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-14 text-center">
            <div className="premium-kicker mb-3 text-gold">Booking Flow</div>
            <h2
              id="process-heading"
              className="font-serif text-4xl font-semibold text-ivory md:text-5xl"
            >
              How It Works
            </h2>
            <p className="text-on-dark mx-auto mt-4 max-w-2xl text-lg leading-8">
              Simple, clear and stress-free. Your job is to enjoy the event.
            </p>
          </div>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {process.map((step) => (
              <div key={step.step} className="rounded-[30px] border border-ivory/10 bg-charcoal-warm/60 p-6 backdrop-blur-sm">
                <div className="mb-5 font-serif text-6xl leading-none text-ivory/15">
                  {step.step}
                </div>
                <h3 className="mb-3 font-serif text-3xl font-semibold text-ivory">
                  {step.title}
                </h3>
                <p className="text-on-dark-soft text-sm leading-7">
                  {step.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Highlights & CTA */}
      <section className="bg-ivory py-16 md:py-24" aria-labelledby="details-heading">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 items-center gap-12 md:grid-cols-2">
            <div className="premium-panel p-8 md:p-10">
              <div className="premium-kicker mb-3 text-gold-dark">What To Expect</div>
              <h2
                id="details-heading"
                className="mb-6 font-serif text-4xl font-semibold text-charcoal"
              >
                Event-ready, without the guesswork
              </h2>
              <ul className="space-y-4">
                {highlights.map((item) => (
                  <li key={item} className="flex items-center gap-3">
                    <CheckCircle
                      size={18}
                      className="shrink-0 text-ember"
                      aria-hidden="true"
                    />
                    <span className="text-text-secondary">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="premium-panel-dark p-10 text-center">
              <div className="premium-kicker mb-3 text-gold">Custom Quote</div>
              <h3 className="mb-3 font-serif text-4xl font-semibold text-ivory">
                Get a Custom Quote
              </h3>
              <p className="text-on-dark-soft mb-6 text-sm leading-7">
                Share your event details and guest count and we will come back
                with a clear, all-inclusive quote within the hour.
              </p>
              <WhatsAppButton
                type="catering"
                placement="catering-quote"
                label="Send Catering Enquiry"
                className="w-full justify-center"
              />
              <div className="mt-4">
                <a
                  href={`tel:${siteConfig.phone}`}
                  className="text-sm text-ivory/60 transition-colors hover:text-ivory"
                >
                  Or call us directly: {siteConfig.phone}
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
