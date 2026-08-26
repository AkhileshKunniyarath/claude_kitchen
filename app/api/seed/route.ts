export const dynamic = "force-dynamic";
import { NextResponse } from "next/server";
import connectDB from "@/lib/db";
import { MenuCategory } from "@/models/Menu";
import { FAQ } from "@/models/FAQ";
import { Testimonial } from "@/models/Testimonial";
import { SiteConfigModel } from "@/models/SiteConfig";

// Import static data
import { menuCategories } from "@/data/menu";
import { faqs } from "@/data/faqs";
import { testimonials } from "@/data/testimonials";
import { siteConfig } from "@/data/site-config";

export async function GET() {
  try {
    await connectDB();

    // 1. Wipe existing data
    await Promise.all([
      MenuCategory.deleteMany({}),
      FAQ.deleteMany({}),
      Testimonial.deleteMany({}),
      SiteConfigModel.deleteMany({}),
    ]);

    // 2. Insert new data
    await Promise.all([
      MenuCategory.insertMany(menuCategories),
      FAQ.insertMany(faqs),
      Testimonial.insertMany(testimonials),
      SiteConfigModel.create(siteConfig),
    ]);

    return NextResponse.json({ message: "Database seeded successfully!" });
  } catch (error: any) {
    console.error("Seeding error:", error);
    return NextResponse.json(
      { error: "Failed to seed database", details: error.message },
      { status: 500 }
    );
  }
}
