import { TestimonialCard } from "@/components/common/TestimonialCard";
import { type Testimonial } from "@/data/testimonials";

interface TestimonialsSectionProps {
  testimonials: Testimonial[];
}

const proofPoints = [
  "Guests keep talking about the aroma before they talk about the portions.",
  "Repeat family orders say the food arrives looking richer than standard delivery.",
  "Bulk buyers remember consistency, packing discipline, and the feeling of abundance.",
];

export function TestimonialsSection({ testimonials }: TestimonialsSectionProps) {
  const featuredTestimonial = testimonials[0];
  const secondaryTestimonials = testimonials.slice(1, 4);

  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-ember via-ember to-ember-dark py-20 md:py-32" aria-labelledby="testimonials-heading">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(232,119,74,0.24),_transparent_26%),radial-gradient(circle_at_bottom_right,_rgba(212,168,83,0.14),_transparent_24%)]" aria-hidden="true" />
      <div className="absolute inset-0 premium-grid opacity-[0.04]" aria-hidden="true" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-8 lg:grid-cols-[0.88fr_1.12fr] lg:items-end">
          <div>
            <div className="text-[11px] font-bold uppercase tracking-[0.34em] text-ivory">
              Real Appetite Signals
            </div>
            <h2
              id="testimonials-heading"
              className="mt-5 font-sans text-4xl font-extrabold uppercase leading-tight tracking-tight text-ivory md:text-6xl"
            >
              People remember
              <span className="block text-gold-light">the aroma first.</span>
            </h2>
          </div>

          <div className="grid gap-4 sm:grid-cols-3">
            {[
              { value: "4.9", label: "google rating" },
              { value: "200+", label: "guest reviews" },
              { value: "4.8", label: "zomato rating" },
            ].map((item) => (
              <div key={item.label} className="rounded-[24px] border border-ivory/12 bg-ivory/[0.08] p-5 text-center">
                <div className="font-sans text-3xl font-extrabold uppercase tracking-[0.06em] text-ivory">
                  {item.value}
                </div>
                <div className="mt-2 text-[10px] font-bold uppercase tracking-[0.24em] text-ivory/50">
                  {item.label}
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-10 grid gap-6 lg:grid-cols-[1.02fr_0.98fr]">
          <div className="overflow-hidden rounded-[36px] border border-ivory/10 bg-ivory/[0.05] p-6 sm:p-8">
            <div className="rounded-[30px] border border-ivory/10 bg-ember-dark/60 p-6 sm:p-8 backdrop-blur-sm">
              <div className="text-[10px] font-bold uppercase tracking-[0.28em] text-gold-light">
                Featured guest note
              </div>
              <blockquote className="mt-5 font-serif text-3xl font-semibold italic leading-snug text-ivory md:text-4xl">
                &ldquo;{featuredTestimonial.review}&rdquo;
              </blockquote>
              <div className="mt-6 border-t border-ivory/10 pt-5">
                <div className="font-sans text-lg font-extrabold uppercase tracking-[0.08em] text-ivory">
                  {featuredTestimonial.name}
                </div>
                <div className="mt-1 text-[10px] font-bold uppercase tracking-[0.24em] text-ivory/50">
                  {featuredTestimonial.location} • {featuredTestimonial.date}
                </div>
              </div>
            </div>

            <div className="mt-5 grid gap-4 sm:grid-cols-3">
              {proofPoints.map((point) => (
                <div key={point} className="rounded-[24px] border border-ivory/8 bg-ember-dark/40 p-4 text-sm leading-7 text-ivory/70">
                  {point}
                </div>
              ))}
            </div>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-1">
            {secondaryTestimonials.map((testimonial) => (
              <TestimonialCard key={testimonial.id} testimonial={testimonial} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
