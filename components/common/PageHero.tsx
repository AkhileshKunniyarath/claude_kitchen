import { BrandLogo } from "@/components/common/BrandLogo";

interface PageHeroProps {
  eyebrow: string;
  title: string;
  subtitle: string;
  align?: "left" | "center";
  compactLogo?: boolean;
  children?: React.ReactNode;
}

export function PageHero({
  eyebrow,
  title,
  subtitle,
  align = "center",
  compactLogo = false,
  children,
}: PageHeroProps) {
  const centered = align === "center";

  return (
    <section className="relative overflow-hidden bg-masala px-4 pb-16 pt-32">
      <div
        className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(211,92,48,0.35),_transparent_30%),radial-gradient(circle_at_bottom_right,_rgba(199,138,67,0.2),_transparent_28%)]"
        aria-hidden="true"
      />
      <div className="absolute inset-0 premium-grid opacity-[0.06]" aria-hidden="true" />
      <div className="relative mx-auto max-w-7xl">
        <div className="mx-auto max-w-5xl rounded-[40px] border border-cream/14 bg-cream/8 px-6 py-10 shadow-[0_24px_80px_rgba(20,10,7,0.28)] backdrop-blur-md sm:px-10 md:px-14 md:py-12">
          <div className={centered ? "text-center" : "text-left"}>
            <BrandLogo
              variant={compactLogo ? "horizontal" : "stacked"}
              theme="light"
              size={compactLogo ? "md" : "sm"}
              className={centered ? "mx-auto mb-8" : "mb-8"}
            />
            <span className="premium-kicker mb-4 block text-gold">{eyebrow}</span>
            <h1 className="font-serif text-5xl font-semibold leading-[0.94] text-cream md:text-7xl">
              {title}
            </h1>
            <p className="text-on-dark mt-6 max-w-2xl text-lg leading-8">
              {subtitle}
            </p>
            {children && <div className="mt-8">{children}</div>}
          </div>
        </div>
      </div>
    </section>
  );
}
