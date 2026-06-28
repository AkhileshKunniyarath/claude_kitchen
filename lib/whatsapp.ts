import { siteConfig, whatsappMessages } from "@/data/site-config";
import { analyticsEvents } from "@/lib/analytics";

export function openWhatsApp(
  type: "general" | "catering" | "bulkOrder",
  placement: string
) {
  const number = siteConfig.whatsapp;
  const url =
    type === "catering"
      ? whatsappMessages.catering(number)
      : type === "bulkOrder"
        ? whatsappMessages.bulkOrder(number)
        : whatsappMessages.general(number);

  analyticsEvents.whatsappOrderClick(placement);
  window.open(url, "_blank", "noopener,noreferrer");
}

export function openWhatsAppForDish(dishName: string, placement: string) {
  const number = siteConfig.whatsapp;
  const url = whatsappMessages.dish(number, dishName);
  analyticsEvents.whatsappOrderClick(placement, dishName);
  window.open(url, "_blank", "noopener,noreferrer");
}

export function getWhatsAppUrl(
  type: "general" | "catering" | "bulkOrder" = "general"
) {
  const number = siteConfig.whatsapp;
  return type === "catering"
    ? whatsappMessages.catering(number)
    : type === "bulkOrder"
      ? whatsappMessages.bulkOrder(number)
      : whatsappMessages.general(number);
}
