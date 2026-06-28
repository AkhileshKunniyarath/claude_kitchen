export const siteConfig = {
  name: "Claude Kitchen",
  tagline: "Cook. Create. Deliver.",
  description:
    "Classic Biryani Hub — Experience the aroma of slow-cooked, layered biryani crafted the traditional way. Order now via WhatsApp.",
  url: process.env.NEXT_PUBLIC_SITE_URL || "https://www.claudekitchen.com",
  phone: process.env.NEXT_PUBLIC_PHONE_NUMBER || "+91 98765 43210",
  whatsapp: process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || "919876543210",
  email: "hello@claudekitchen.com",
  address: {
    line1: "12, Spice Lane, Koramangala",
    line2: "Bengaluru, Karnataka 560034",
    mapUrl:
      process.env.NEXT_PUBLIC_GOOGLE_MAPS_URL ||
      "https://maps.google.com/?q=Claude+Kitchen+Bengaluru",
  },
  hours: [
    { day: "Monday – Friday", time: "11:00 AM – 11:00 PM" },
    { day: "Saturday – Sunday", time: "10:00 AM – 11:30 PM" },
  ],
  social: {
    instagram:
      process.env.NEXT_PUBLIC_INSTAGRAM_URL ||
      "https://instagram.com/claudekitchen",
    facebook: "https://facebook.com/claudekitchen",
    youtube: "https://youtube.com/@claudekitchen",
  },
  gtmId: process.env.NEXT_PUBLIC_GTM_ID || "",
  gaId: process.env.NEXT_PUBLIC_GA_ID || "",
  metaPixelId: process.env.NEXT_PUBLIC_META_PIXEL_ID || "",
  ogImage: "/og/og-default.png",
};

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
