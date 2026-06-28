export interface FAQ {
  id: string;
  question: string;
  answer: string;
  category: "ordering" | "menu" | "catering" | "general";
}

export const faqs: FAQ[] = [
  {
    id: "faq1",
    question: "How do I place an order?",
    answer:
      "The easiest way to order is via WhatsApp — just tap the Order on WhatsApp button anywhere on the site and send us a message. You can also call us directly. We take pre-orders for large groups and events.",
    category: "ordering",
  },
  {
    id: "faq2",
    question: "Do you offer delivery?",
    answer:
      "Yes, we deliver across select areas in Bengaluru. Contact us via WhatsApp with your address and we'll confirm delivery availability and estimated time.",
    category: "ordering",
  },
  {
    id: "faq3",
    question: "How much advance notice is needed for a bulk order?",
    answer:
      "For orders above 20 portions, we recommend at least 24 hours of advance notice. For large events (50+ portions), 48–72 hours is ideal to ensure quality and freshness.",
    category: "ordering",
  },
  {
    id: "faq4",
    question: "Are your biryanis Halal?",
    answer:
      "Yes, all our meat is sourced from Halal-certified suppliers. We take ingredient quality and sourcing seriously.",
    category: "menu",
  },
  {
    id: "faq5",
    question: "Do you have vegetarian options?",
    answer:
      "Absolutely. Our Garden Vegetable Dum Biryani is a full dum-style biryani prepared with seasonal vegetables and paneer. All side dishes also include vegetarian options.",
    category: "menu",
  },
  {
    id: "faq6",
    question: "What is dum biryani?",
    answer:
      "Dum biryani is the traditional method of sealing the cooking vessel (handi) with dough and slow-cooking the rice and protein together on a low flame. This process traps aroma and steam inside, cooking everything gently and infusing every grain of rice with the spices.",
    category: "menu",
  },
  {
    id: "faq7",
    question: "Do you do catering for weddings and large events?",
    answer:
      "Yes — catering is a core part of what we do. We handle celebrations, corporate events, weddings and community gatherings. Get in touch via WhatsApp or phone for a custom quote based on your event size and requirements.",
    category: "catering",
  },
  {
    id: "faq8",
    question: "Is there a minimum order for catering?",
    answer:
      "The minimum for catering enquiries is generally 30 portions. For smaller group orders (10–30 portions), our Value Combos and Family Packs are the best option.",
    category: "catering",
  },
  {
    id: "faq9",
    question: "What are your opening hours?",
    answer:
      "We are open Monday to Friday from 11:00 AM to 11:00 PM, and Saturday to Sunday from 10:00 AM to 11:30 PM. We are open on most public holidays — check our WhatsApp or Instagram for holiday updates.",
    category: "general",
  },
  {
    id: "faq10",
    question: "Do prices include taxes?",
    answer:
      "All prices displayed on the menu are inclusive of applicable taxes. Delivery charges, if any, will be communicated before confirming your order.",
    category: "general",
  },
];
