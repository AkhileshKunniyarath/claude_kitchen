import connectDB from "@/lib/db";
import { MenuCategory } from "@/models/Menu";
import { Testimonial } from "@/models/Testimonial";
import { FAQ } from "@/models/FAQ";
import { UtensilsCrossed, MessageSquareQuote, HelpCircle } from "lucide-react";
import Link from "next/link";

export const dynamic = "force-dynamic";

export default async function AdminDashboard() {
  await connectDB();
  
  const [menuCount, dishCountData, testimonialCount, faqCount] = await Promise.all([
    MenuCategory.countDocuments({}),
    MenuCategory.aggregate([{ $project: { dishCount: { $size: "$dishes" } } }]),
    Testimonial.countDocuments({}),
    FAQ.countDocuments({}),
  ]);

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
      <h1 className="text-3xl font-bold text-charcoal mb-8">Dashboard Overview</h1>

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
