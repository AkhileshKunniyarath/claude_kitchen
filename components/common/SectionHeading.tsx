interface SectionHeadingProps {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  align?: "left" | "center";
  light?: boolean;
}

export function SectionHeading({
  eyebrow,
  title,
  subtitle,
  align = "center",
  light = false,
}: SectionHeadingProps) {
  const alignClass = align === "center" ? "text-center items-center" : "text-left items-start";
  const titleColor = light ? "text-cream" : "text-masala";
  const subtitleColor = light ? "text-cream/70" : "text-masala/60";
  const eyebrowColor = light ? "text-gold" : "text-terracotta";
  const ornamentColor = light ? "bg-gold/45" : "bg-gold/35";
  const dotColor = light ? "bg-gold" : "bg-terracotta";

  return (
    <div className={`flex flex-col gap-4 ${alignClass}`}>
      {eyebrow && (
        <span
          className={`premium-kicker ${eyebrowColor}`}
        >
          {eyebrow}
        </span>
      )}
      <h2 className={`font-serif text-4xl md:text-5xl lg:text-6xl font-semibold leading-[0.92] ${titleColor}`}>
        {title}
      </h2>
      <div className={`flex items-center gap-3 ${align === "center" ? "" : "justify-start"}`}>
        <div className={`h-px w-14 ${ornamentColor}`} />
        <div className={`h-2 w-2 rotate-45 rounded-[2px] ${dotColor}`} />
        <div className={`h-px w-14 ${ornamentColor}`} />
      </div>
      {subtitle && (
        <p className={`max-w-2xl text-[15px] md:text-lg leading-8 ${subtitleColor}`}>
          {subtitle}
        </p>
      )}
    </div>
  );
}
