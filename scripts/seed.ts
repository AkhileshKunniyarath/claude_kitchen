import mongoose from "mongoose";
import * as dotenv from "dotenv";
import path from "path";
import { MenuCategory } from "../models/Menu";
import { Testimonial } from "../models/Testimonial";
import { FAQ } from "../models/FAQ";
import { menuCategories } from "../data/menu";
import { testimonials } from "../data/testimonials";
import { faqs } from "../data/faqs";

// Load environment variables from .env.local
dotenv.config({ path: path.resolve(process.cwd(), ".env.local") });

const MONGODB_URI = process.env.MONGODB_URI;

if (!MONGODB_URI) {
  console.error("Please define the MONGODB_URI environment variable inside .env.local");
  process.exit(1);
}

async function seed() {
  try {
    await mongoose.connect(MONGODB_URI as string);
    console.log("Connected to MongoDB");

    // Clear existing data
    await MenuCategory.deleteMany({});
    await Testimonial.deleteMany({});
    await FAQ.deleteMany({});
    console.log("Cleared existing data");

    // Seed Menu Categories
    await MenuCategory.insertMany(menuCategories);
    console.log(`Seeded ${menuCategories.length} menu categories`);

    // Seed Testimonials
    await Testimonial.insertMany(testimonials);
    console.log(`Seeded ${testimonials.length} testimonials`);

    // Seed FAQs
    await FAQ.insertMany(faqs);
    console.log(`Seeded ${faqs.length} FAQs`);

    console.log("Seeding complete!");
    process.exit(0);
  } catch (error) {
    console.error("Error seeding data:", error);
    process.exit(1);
  }
}

seed();
