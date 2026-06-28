"use client";

import { getWhatsAppUrl } from "@/lib/whatsapp";
import { analyticsEvents } from "@/lib/analytics";
import { WhatsAppIcon } from "@/components/common/SocialIcons";

export function FloatingOrderButton() {
  return (
    <a
      href={getWhatsAppUrl("general")}
      onClick={() => analyticsEvents.whatsappOrderClick("floating-button")}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-40 md:hidden flex items-center gap-2.5 
                 bg-terracotta text-cream font-semibold text-sm px-5 py-3.5 
                 rounded-full shadow-lg hover:bg-terracotta-dark transition-all 
                 duration-300 active:scale-95"
      aria-label="Order now on WhatsApp"
    >
      <WhatsAppIcon className="w-5 h-5" aria-hidden="true" />
      Order Now
    </a>
  );
}
