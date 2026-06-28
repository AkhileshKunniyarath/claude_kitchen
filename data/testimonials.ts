export interface Testimonial {
  id: string;
  name: string;
  location: string;
  rating: number;
  review: string;
  source: "google" | "zomato" | "instagram" | "direct";
  date: string;
  avatar?: string;
}

export const testimonials: Testimonial[] = [
  {
    id: "t1",
    name: "Priya Menon",
    location: "Koramangala, Bengaluru",
    rating: 5,
    review:
      "The Hyderabadi Dum Biryani is absolutely outstanding. You can tell it's been slow-cooked — the aroma when they open the handi is something else entirely. Best biryani in the area, hands down.",
    source: "google",
    date: "November 2024",
  },
  {
    id: "t2",
    name: "Arjun Sharma",
    location: "HSR Layout, Bengaluru",
    rating: 5,
    review:
      "Ordered the Family Pack for Diwali — 4 people and we were all genuinely impressed. The mutton was so tender, the rice perfectly spiced. Already planning to order again for our next gathering.",
    source: "google",
    date: "October 2024",
  },
  {
    id: "t3",
    name: "Nadia Rahman",
    location: "Indiranagar, Bengaluru",
    rating: 5,
    review:
      "This is the kind of biryani you grow up dreaming about. Classic, aromatic, no shortcuts. The Mirchi Ka Salan on the side is extraordinary. Highly recommend for anyone who takes biryani seriously.",
    source: "zomato",
    date: "December 2024",
  },
  {
    id: "t4",
    name: "Ravi & Family",
    location: "BTM Layout, Bengaluru",
    rating: 5,
    review:
      "We've been ordering for our office team every Friday and the quality never dips. Consistent, delicious, great packaging and always on time. This is our go-to biryani place now.",
    source: "google",
    date: "January 2025",
  },
  {
    id: "t5",
    name: "Fatima Zahra",
    location: "Shivajinagar, Bengaluru",
    rating: 5,
    review:
      "Ordered catering for our family event — 50 portions — and Claude Kitchen delivered perfectly. Everything was fresh, quantities were accurate and the guests wouldn't stop asking where the biryani was from.",
    source: "direct",
    date: "February 2025",
  },
  {
    id: "t6",
    name: "Karthik Nair",
    location: "Jayanagar, Bengaluru",
    rating: 5,
    review:
      "The Coastal Prawn Biryani is unique and genuinely special. That hint of coconut in the masala is subtle but makes it stand out. Please never take it off the menu!",
    source: "instagram",
    date: "March 2025",
  },
];
