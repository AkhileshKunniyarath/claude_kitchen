import { TestimonialCard } from "@/components/common/TestimonialCard";
import { testimonials } from "@/data/testimonials";

const proofPoints = [
  "Guests keep talking about the aroma before they talk about the portions.",
  "Repeat family orders say the food arrives looking richer than standard delivery.",
  "Bulk buyers remember consistency, packing discipline, and the feeling of abundance.",
];

export function TestimonialsSection() {
  const featuredTestimonial = testimonials[0];
  const secondaryTestimonials = testimonials.slice(1, 4);

  return (
    <section className="relative overflow-hidden bg-[#160b07] py-20 md:py-32" aria-labelledby="testimonials-heading">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(211,92,48,0.24),_transparent_26%),radial-gradient(circle_at_bottom_right,_rgba(199,138,67,0.16),_transparent_24%)]" aria-hidden="true" />
      <div className="absolute inset-0 premium-grid opacity-[0.04]" aria-hidden="true" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-8 lg:grid-cols-[0.88fr_1.12fr] lg:items-end">
          <div>
            <div className="text-[11px] font-bold uppercase tracking-[0.34em] text-gold">
              Real Appetite Signals
            </div>
            <h2
              id="testimonials-heading"
              className="mt-5 font-sans text-4xl font-extrabold uppercase leading-[0.94] tracking-[-0.05em] text-cream md:text-6xl"
            >
              People remember
              <span className="block text-terracotta">the aroma first.</span>
            </h2>
          </div>

          <div className="grid gap-4 sm:grid-cols-3">
            {[
              { value: "4.9", label: "google rating" },
              { value: "200+", label: "guest reviews" },
              { value: "4.8", label: "zomato rating" },
            ].map((item) => (
              <div key={item.label} className="rounded-[24px] border border-cream/12 bg-white/[0.06] p-5 text-center">
                <div className="font-sans text-3xl font-extrabold uppercase tracking-[0.06em] text-cream">
                  {item.value}
                </div>
                <div className="mt-2 text-[10px] font-bold uppercase tracking-[0.24em] text-cream/56">
                  {item.label}
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-10 grid gap-6 lg:grid-cols-[1.02fr_0.98fr]">
          <div className="overflow-hidden rounded-[36px] border border-cream/12 bg-white/[0.05] p-6 sm:p-8">
            <div className="rounded-[30px] border border-cream/12 bg-[#23110c] p-6 sm:p-8">
              <div className="text-[10px] font-bold uppercase tracking-[0.28em] text-gold">
                Featured guest note
              </div>
              <blockquote className="mt-5 font-serif text-3xl font-semibold italic leading-[1.24] text-cream md:text-4xl">
                &ldquo;{featuredTestimonial.review}&rdquo;
              </blockquote>
              <div className="mt-6 border-t border-cream/10 pt-5">
                <div className="font-sans text-lg font-extrabold uppercase tracking-[0.08em] text-cream">
                  {featuredTestimonial.name}
                </div>
                <div className="mt-1 text-[10px] font-bold uppercase tracking-[0.24em] text-cream/56">
                  {featuredTestimonial.location} • {featuredTestimonial.date}
                </div>
              </div>
            </div>

            <div className="mt-5 grid gap-4 sm:grid-cols-3">
              {proofPoints.map((point) => (
                <div key={point} className="rounded-[24px] border border-cream/10 bg-[#1c0d08] p-4 text-sm leading-7 text-cream/76">
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
