"use client";

import { useState, useEffect } from "react";
import { DishCard } from "@/components/common/DishCard";
import { WhatsAppButton } from "@/components/common/WhatsAppButton";
import { menuCategories } from "@/data/menu";
import { analyticsEvents } from "@/lib/analytics";
import { Info } from "lucide-react";

export function MenuClient() {
  const [activeCategory, setActiveCategory] = useState(menuCategories[0].id);

  useEffect(() => {
    analyticsEvents.menuView(activeCategory);
  }, [activeCategory]);

  const activeCat = menuCategories.find((c) => c.id === activeCategory);

  return (
    <div className="min-h-screen bg-cream">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        {/* Category tabs */}
        <div
          className="premium-panel mb-10 flex gap-2 overflow-x-auto p-3 scrollbar-thin"
          role="tablist"
          aria-label="Menu categories"
        >
          {menuCategories.map((cat) => (
            <button
              key={cat.id}
              role="tab"
              aria-selected={activeCategory === cat.id}
              aria-controls={`panel-${cat.id}`}
              onClick={() => setActiveCategory(cat.id)}
              className={`flex items-center gap-2 whitespace-nowrap rounded-full px-5 py-3 text-sm font-semibold uppercase tracking-[0.16em] transition-all ${
                activeCategory === cat.id
                  ? "bg-terracotta text-cream shadow-[0_12px_28px_rgba(211,92,48,0.28)]"
                  : "bg-transparent text-masala/65 hover:bg-terracotta/8 hover:text-terracotta"
              }`}
            >
              <span aria-hidden="true">{cat.icon}</span>
              {cat.name}
            </button>
          ))}
        </div>

        {/* Active category content */}
        {activeCat && (
          <div
            id={`panel-${activeCat.id}`}
            role="tabpanel"
            aria-label={`${activeCat.name} dishes`}
          >
            <div className="premium-panel mb-8 px-6 py-6 md:px-8">
              <div className="mb-2 text-[11px] font-semibold uppercase tracking-[0.28em] text-terracotta">
                Selected Category
              </div>
              <h2 className="mb-2 font-serif text-3xl font-semibold text-masala md:text-4xl">
                <span aria-hidden="true">{activeCat.icon}</span>{" "}
                {activeCat.name}
              </h2>
              <p className="max-w-3xl text-masala/60 leading-8">{activeCat.description}</p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
              {activeCat.dishes.map((dish) => (
                <DishCard key={dish.id} dish={dish} placement="menu-page" />
              ))}
            </div>
          </div>
        )}

        {/* Disclaimer */}
        <div className="premium-panel mb-12 flex items-start gap-3 border-gold/20 bg-gold/10 p-5">
          <Info
            size={18}
            className="text-gold-dark mt-0.5 shrink-0"
            aria-hidden="true"
          />
          <p className="text-sm text-masala/70">
            Menu prices and availability are subject to change without notice.
            Please confirm current prices when ordering. All prices are
            inclusive of applicable taxes.
          </p>
        </div>

        {/* Order CTA */}
        <div className="text-center">
          <WhatsAppButton
            placement="menu-bottom"
            label="Order via WhatsApp"
            className="text-base px-8 py-4"
          />
        </div>
      </div>
    </div>
  );
}
