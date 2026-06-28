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

export default function HomePage() {
  return (
    <>
      <HeroScene />
      <BiryaniStorySection />
      <SignatureDishesSection />
      <FamilyPackSection />
      <TestimonialsSection />
      <LocationSection />
      <FinalCTASection />
    </>
  );
}
