import Image from "next/image";

interface BrandLogoProps {
  variant?: "mark" | "horizontal" | "stacked";
  theme?: "light" | "dark";
  size?: "sm" | "md" | "lg";
  className?: string;
  priority?: boolean;
}

const sizeStyles = {
  mark: {
    sm: "h-12 w-12",
    md: "h-14 w-14",
    lg: "h-20 w-20",
  },
  horizontal: {
    sm: "h-auto w-24",
    md: "h-auto w-28",
    lg: "h-auto w-36",
  },
  stacked: {
    sm: "h-auto w-24",
    md: "h-auto w-32",
    lg: "h-auto w-40",
  },
};

export function BrandLogo({
  variant = "horizontal",
  theme = "dark",
  size = "md",
  className = "",
  priority = false,
}: BrandLogoProps) {
  const exactLogoSrc = "/logo/claude-kitchen-lockup-stacked.png";
  const logoClassName = `${sizeStyles[variant][size]} rounded-[18px] object-contain ${className}`.trim();

  const mark = (
    <Image
      src={exactLogoSrc}
      alt="Claude Kitchen"
      width={512}
      height={512}
      priority={priority}
      className={logoClassName}
    />
  );

  if (variant === "mark") {
    return mark;
  }

  return (
    <Image
      src={exactLogoSrc}
      alt="Claude Kitchen"
      width={512}
      height={512}
      priority={priority}
      className={logoClassName}
    />
  );
}
