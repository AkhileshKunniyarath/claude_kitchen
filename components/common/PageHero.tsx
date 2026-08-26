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
    <section className="relative overflow-hidden bg-ember px-4 pb-16 pt-32">
      <div
        className="absolute inset-0"
        style={{
          backgroundImage:
            "radial-gradient(circle at 18% 18%, rgba(200,90,47,0.22), transparent 26%), radial-gradient(circle at 78% 22%, rgba(212,168,83,0.10), transparent 20%), radial-gradient(circle at 54% 75%, rgba(200,90,47,0.12), transparent 22%)",
        }}
        aria-hidden="true"
      />
      <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(42,22,16,0.12),rgba(42,22,16,0.88))]" aria-hidden="true" />
      <div className="absolute inset-0 premium-grid opacity-[0.03]" aria-hidden="true" />
      <div className="relative mx-auto max-w-7xl">
        <div className="mx-auto max-w-5xl rounded-[40px] border border-ivory/10 bg-ember-dark/60 px-6 py-10 shadow-[0_24px_80px_rgba(42,22,16,0.30)] backdrop-blur-md sm:px-10 md:px-14 md:py-12">
          <div className={centered ? "text-center" : "text-left"}>
            <BrandLogo
              variant="stacked"
              theme="light"
              size={compactLogo ? "sm" : "md"}
              className={centered ? "mx-auto mb-8" : "mb-8"}
            />
            <span className="premium-kicker mb-4 block text-gold">{eyebrow}</span>
            <h1 className="font-serif text-5xl font-semibold leading-tight text-ivory md:text-7xl">
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
