import type { Metadata } from "next";
import { MenuClient } from "@/components/menu/MenuClient";
import { PageHero } from "@/components/common/PageHero";
import connectDB from "@/lib/db";
import { MenuCategory } from "@/models/Menu";
import { menuCategories as staticMenuCategories } from "@/data/menu";

export const metadata: Metadata = {
  title: "Menu",
  description:
    "Explore Claude Kitchen's full menu — classic Hyderabadi Dum Biryani, Chicken, Mutton, Prawn, Family Packs, combos and sides. Order via WhatsApp.",
};

export const revalidate = 60; // Revalidate every 60 seconds

export default async function MenuPage() {
  let menuCategories: any[] = [];
  try {
    const db = await connectDB();
    if (db) {
      menuCategories = await MenuCategory.find({}).lean();
    }
  } catch {
    // DB unavailable — fallback to static menu categories
  }

  if (!menuCategories || menuCategories.length === 0) {
    menuCategories = staticMenuCategories as any[];
  }

  // Convert _id to string for serialization
  const serializedCategories = menuCategories.map(cat => ({
    ...cat,
    _id: cat._id?.toString(),
    dishes: (cat.dishes || []).map((dish: any) => ({
      ...dish,
      _id: dish._id?.toString()
    }))
  }));

  return (
    <>
      <PageHero
        eyebrow="What We Serve"
        title="Our Menu"
        subtitle="Every dish is built around patient layering, whole spices, and the slow fire of tradition. Browse by category, then order directly through WhatsApp."
        compactLogo
      />

      <MenuClient initialCategories={serializedCategories as any} />
    </>
  );
}
