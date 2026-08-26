import type { Metadata } from "next";
import { HeroScene } from "@/components/home/HeroScene";
import { BiryaniStorySection } from "@/components/home/BiryaniStorySection";
import { SignatureDishesSection } from "@/components/home/SignatureDishesSection";
import { FamilyPackSection } from "@/components/home/FamilyPackSection";
import { TestimonialsSection } from "@/components/home/TestimonialsSection";
import { LocationSection } from "@/components/home/LocationSection";
import { FinalCTASection } from "@/components/home/FinalCTASection";

export const metadata: Metadata = {
  title: "Claude Kitchen — Classic Biryani Hub, Bengaluru",
  description:
    "Experience the aroma of authentic slow-cooked dum biryani at Claude Kitchen, Bengaluru. Traditional Hyderabadi, Chicken and Mutton Biryani. Order via WhatsApp.",
  openGraph: {
    title: "Claude Kitchen — Classic Biryani Hub, Bengaluru",
    description:
      "Slow-cooked dum biryani sealed in the traditional handi. Order for delivery, family packs or catering.",
    images: ["/og/og-default.png"],
  },
};

import connectDB from "@/lib/db";
import { MenuCategory } from "@/models/Menu";
import { Testimonial } from "@/models/Testimonial";

export const revalidate = 60;

export default async function HomePage() {
  let menuCategories: any[] = [];
  let testimonials: any[] = [];

  try {
    await connectDB();
    [menuCategories, testimonials] = await Promise.all([
      MenuCategory.find({}).lean(),
      Testimonial.find({}).lean(),
    ]);
  } catch {
    // DB unavailable — render with empty data
  }

  // Extract signature dishes based on the previous static logic
  const signatureCategory = menuCategories.find(c => c.id === "signature-biryani");
  let signatureDishes: any[] = [];
  if (signatureCategory && signatureCategory.dishes.length >= 6) {
    signatureDishes = [
      signatureCategory.dishes[0], // Hyderabadi Dum
      signatureCategory.dishes[1], // Chicken Dum
      signatureCategory.dishes[5], // Royal Mutton
      signatureCategory.dishes[2], // Prawn
    ];
  } else if (signatureCategory) {
    signatureDishes = signatureCategory.dishes.slice(0, 4);
  }

  // Serialize IDs
  const serializedSignatureDishes = signatureDishes.map(dish => ({
    ...dish,
    _id: dish._id?.toString()
  }));

  const serializedTestimonials = testimonials.map(t => ({
    ...t,
    _id: t._id?.toString()
  }));

  return (
    <>
      <HeroScene />
      <BiryaniStorySection />
      <SignatureDishesSection signatureDishes={serializedSignatureDishes} />
      <FamilyPackSection />
      <TestimonialsSection testimonials={serializedTestimonials as any} />
      <LocationSection />
      <FinalCTASection />
    </>
  );
}
