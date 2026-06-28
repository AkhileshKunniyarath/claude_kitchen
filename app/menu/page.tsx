import type { Metadata } from "next";
import { MenuClient } from "@/components/menu/MenuClient";
import { PageHero } from "@/components/common/PageHero";

export const metadata: Metadata = {
  title: "Menu",
  description:
    "Explore Claude Kitchen's full menu — classic Hyderabadi Dum Biryani, Chicken, Mutton, Prawn, Family Packs, combos and sides. Order via WhatsApp.",
};

export default function MenuPage() {
  return (
    <>
      <PageHero
        eyebrow="What We Serve"
        title="Our Menu"
        subtitle="Every dish is built around patient layering, whole spices, and the slow fire of tradition. Browse by category, then order directly through WhatsApp."
        compactLogo
      />

      <MenuClient />
    </>
  );
}
