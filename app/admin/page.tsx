import connectDB from "@/lib/db";
import { MenuCategory } from "@/models/Menu";
import { Testimonial } from "@/models/Testimonial";
import { FAQ } from "@/models/FAQ";
import { UtensilsCrossed, MessageSquareQuote, HelpCircle, RefreshCw } from "lucide-react";
import Link from "next/link";
import { revalidatePath } from "next/cache";

export const dynamic = "force-dynamic";

async function seedDatabaseAction() {
  "use server";
  const { menuCategories } = await import("@/data/menu");
  const { faqs } = await import("@/data/faqs");
  const { testimonials } = await import("@/data/testimonials");
  const { siteConfig } = await import("@/data/site-config");
  const { SiteConfigModel } = await import("@/models/SiteConfig");

  await connectDB();
  await Promise.all([
    MenuCategory.deleteMany({}),
    FAQ.deleteMany({}),
    Testimonial.deleteMany({}),
    SiteConfigModel.deleteMany({}),
  ]);
  await Promise.all([
    MenuCategory.insertMany(menuCategories),
    FAQ.insertMany(faqs),
    Testimonial.insertMany(testimonials),
    SiteConfigModel.create(siteConfig),
  ]);
  revalidatePath("/admin");
  revalidatePath("/menu");
  revalidatePath("/");
}

export default async function AdminDashboard() {
  const db = await connectDB();
  
  let menuCount = 0;
  let dishCountData: any[] = [];
  let testimonialCount = 0;
  let faqCount = 0;

  if (db) {
    try {
      [menuCount, dishCountData, testimonialCount, faqCount] = await Promise.all([
        MenuCategory.countDocuments({}),
        MenuCategory.aggregate([{ $project: { dishCount: { $size: "$dishes" } } }]),
        Testimonial.countDocuments({}),
        FAQ.countDocuments({}),
      ]);
    } catch {
      // DB query failed
    }
  }

  const totalDishes = dishCountData.reduce((acc, curr) => acc + curr.dishCount, 0);

  const stats = [
    {
      name: "Total Dishes",
      value: totalDishes,
      icon: UtensilsCrossed,
      href: "/admin/menu",
      color: "bg-blue-500/10 text-blue-600",
    },
    {
      name: "Menu Categories",
      value: menuCount,
      icon: UtensilsCrossed,
      href: "/admin/menu",
      color: "bg-emerald-500/10 text-emerald-600",
    },
    {
      name: "Testimonials",
      value: testimonialCount,
      icon: MessageSquareQuote,
      href: "/admin/testimonials",
      color: "bg-purple-500/10 text-purple-600",
    },
    {
      name: "FAQs",
      value: faqCount,
      icon: HelpCircle,
      href: "/admin/faqs",
      color: "bg-orange-500/10 text-orange-600",
    },
  ];

  return (
    <div>
      <div className="flex items-center justify-between mb-8">
        <h1 className="text-3xl font-bold text-charcoal">Dashboard Overview</h1>
        <form action={seedDatabaseAction}>
          <button
            type="submit"
            className="inline-flex items-center gap-2 rounded-xl bg-gold px-4 py-2.5 text-sm font-semibold text-charcoal transition-all hover:bg-gold-light"
          >
            <RefreshCw size={16} />
            Seed Initial Data to Database
          </button>
        </form>
      </div>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {stats.map((stat) => {
          const Icon = stat.icon;
          return (
            <Link
              key={stat.name}
              href={stat.href}
              className="rounded-2xl border border-sand bg-white p-6 shadow-sm transition-all hover:shadow-md"
            >
              <div className="flex items-center gap-4">
                <div className={`p-4 rounded-xl ${stat.color}`}>
                  <Icon size={24} />
                </div>
                <div>
                  <div className="text-sm font-medium text-charcoal/60">
                    {stat.name}
                  </div>
                  <div className="text-2xl font-bold text-charcoal">
                    {stat.value}
                  </div>
                </div>
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
}
