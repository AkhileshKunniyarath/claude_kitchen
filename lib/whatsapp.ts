import { analyticsEvents } from "@/lib/analytics";

export const whatsappMessages = {
  general: (number: string) =>
    `https://wa.me/${number}?text=Hi%20Claude%20Kitchen!%20I'd%20like%20to%20place%20an%20order.`,
  dish: (number: string, dish: string) =>
    `https://wa.me/${number}?text=Hi%20Claude%20Kitchen!%20I'm%20interested%20in%20ordering%20${encodeURIComponent(dish)}.`,
  catering: (number: string) =>
    `https://wa.me/${number}?text=Hi%20Claude%20Kitchen!%20I'd%20like%20to%20enquire%20about%20catering%20for%20an%20event.`,
  bulkOrder: (number: string) =>
    `https://wa.me/${number}?text=Hi%20Claude%20Kitchen!%20I'm%20looking%20to%20place%20a%20bulk%20order.`,
};

export function openWhatsApp(
  whatsappNumber: string,
  type: "general" | "catering" | "bulkOrder",
  placement: string
) {
  const url =
    type === "catering"
      ? whatsappMessages.catering(whatsappNumber)
      : type === "bulkOrder"
        ? whatsappMessages.bulkOrder(whatsappNumber)
        : whatsappMessages.general(whatsappNumber);

  analyticsEvents.whatsappOrderClick(placement);
  window.open(url, "_blank", "noopener,noreferrer");
}

export function openWhatsAppForDish(
  whatsappNumber: string,
  dishName: string,
  placement: string
) {
  const url = whatsappMessages.dish(whatsappNumber, dishName);
  analyticsEvents.whatsappOrderClick(placement, dishName);
  window.open(url, "_blank", "noopener,noreferrer");
}

export function getWhatsAppUrl(
  whatsappNumber: string,
  type: "general" | "catering" | "bulkOrder" = "general"
) {
  return type === "catering"
    ? whatsappMessages.catering(whatsappNumber)
    : type === "bulkOrder"
      ? whatsappMessages.bulkOrder(whatsappNumber)
      : whatsappMessages.general(whatsappNumber);
}
