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
    sm: "h-10 w-10",
    md: "h-12 w-12",
    lg: "h-16 w-16",
  },
  horizontal: {
    sm: "h-10 w-auto",
    md: "h-12 w-auto",
    lg: "h-16 w-auto",
  },
  stacked: {
    sm: "h-auto w-28",
    md: "h-auto w-36",
    lg: "h-auto w-44",
  },
};

export function BrandLogo({
  variant = "horizontal",
  theme = "dark",
  size = "md",
  className = "",
  priority = false,
}: BrandLogoProps) {
  const horizontalSrc =
    theme === "light"
      ? "/logo/claude-kitchen-lockup-horizontal-light.svg"
      : "/logo/claude-kitchen-lockup-horizontal-dark.svg";
  const stackedSrc = "/logo/claude-kitchen-lockup-stacked.png";

  const mark = (
    <Image
      src="/logo/claude-kitchen-mark.png"
      alt="Claude Kitchen"
      width={96}
      height={96}
      priority={priority}
      className={`${sizeStyles.mark[size]} rounded-[22%] shadow-lg ${variant === "mark" ? className : ""}`}
    />
  );

  if (variant === "mark") {
    return mark;
  }

  return (
    <Image
      src={variant === "stacked" ? stackedSrc : horizontalSrc}
      alt="Claude Kitchen"
      width={variant === "stacked" ? 520 : 720}
      height={variant === "stacked" ? 620 : 180}
      priority={priority}
      className={`${variant === "stacked" ? sizeStyles.stacked[size] : sizeStyles.horizontal[size]} ${className}`}
    />
  );
}
