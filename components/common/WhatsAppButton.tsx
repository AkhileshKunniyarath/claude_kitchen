"use client";

import { getWhatsAppUrl } from "@/lib/whatsapp";
import { analyticsEvents } from "@/lib/analytics";
import { WhatsAppIcon } from "@/components/common/SocialIcons";

import { useSiteConfig } from "@/providers/SiteConfigProvider";

interface WhatsAppButtonProps {
  type?: "general" | "catering" | "bulkOrder";
  dishName?: string;
  placement: string;
  label?: string;
  variant?: "primary" | "outline" | "gold";
  size?: "sm" | "md" | "lg";
  className?: string;
}

export function WhatsAppButton({
  type = "general",
  dishName,
  placement,
  label = "Order on WhatsApp",
  variant = "primary",
  className = "",
}: WhatsAppButtonProps) {
  const { whatsapp: whatsappNumber } = useSiteConfig();

  const getUrl = () => {
    if (dishName) {
      return `https://wa.me/${whatsappNumber}?text=Hi%20Claude%20Kitchen!%20I'm%20interested%20in%20ordering%20${encodeURIComponent(dishName)}.`;
    }
    return getWhatsAppUrl(whatsappNumber, type);
  };

  const handleClick = () => {
    if (dishName) {
      analyticsEvents.whatsappOrderClick(placement, dishName);
    } else if (type === "catering") {
      analyticsEvents.cateringEnquiryClick(placement);
    } else {
      analyticsEvents.whatsappOrderClick(placement);
    }
  };

  const variantClass =
    variant === "outline"
      ? "btn-outline"
      : variant === "gold"
        ? "btn-gold"
        : "btn-primary";

  return (
    <a
      href={getUrl()}
      onClick={handleClick}
      target="_blank"
      rel="noopener noreferrer"
      className={`${variantClass} ${className}`}
      aria-label={label}
    >
      <WhatsAppIcon className="w-4 h-4" aria-hidden="true" />
      {label}
    </a>
  );
}
