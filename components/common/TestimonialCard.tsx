import { type Testimonial } from "@/data/testimonials";
import { Star } from "lucide-react";

interface TestimonialCardProps {
  testimonial: Testimonial;
}

const sourceLabels: Record<string, string> = {
  google: "Google",
  zomato: "Zomato",
  instagram: "Instagram",
  direct: "Verified Order",
};

export function TestimonialCard({ testimonial }: TestimonialCardProps) {
  return (
    <div className="premium-panel flex h-full flex-col gap-5 p-7">
      {/* Stars */}
      <div className="flex gap-1" aria-label={`${testimonial.rating} out of 5 stars`}>
        {Array.from({ length: testimonial.rating }).map((_, i) => (
          <Star
            key={i}
            size={16}
            className="fill-gold text-gold"
            aria-hidden="true"
          />
        ))}
      </div>

      {/* Review */}
      <blockquote className="font-serif text-xl leading-8 text-masala/90 italic">
        &ldquo;{testimonial.review}&rdquo;
      </blockquote>

      {/* Author */}
      <div className="mt-auto flex items-center justify-between border-t border-gold/15 pt-5">
        <div>
          <div className="text-base font-semibold text-masala">
            {testimonial.name}
          </div>
          <div className="text-xs uppercase tracking-[0.24em] text-masala/45">{testimonial.location}</div>
        </div>
        <div className="text-right">
          <div className="text-xs font-semibold uppercase tracking-[0.24em] text-gold">
            {sourceLabels[testimonial.source]}
          </div>
          <div className="text-xs text-masala/40">{testimonial.date}</div>
        </div>
      </div>
    </div>
  );
}
