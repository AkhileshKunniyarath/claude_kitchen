"use client";

import Image from "next/image";
import { useState } from "react";
import { type Dish } from "@/data/menu";
import { WhatsAppButton } from "@/components/common/WhatsAppButton";
import { analyticsEvents } from "@/lib/analytics";
import { DishArtwork } from "@/components/common/DishArtwork";

interface DishCardProps {
  dish: Dish;
  placement?: string;
}

const tagLabels: Record<string, string> = {
  signature: "★ Signature",
  bestseller: "Bestseller",
  spicy: "🌶 Spicy",
  vegetarian: "🌿 Veg",
  "family-pack": "Family Pack",
  new: "New",
};

export function DishCard({ dish, placement = "dish-card" }: DishCardProps) {
  const usesArtwork = dish.image.endsWith(".svg");
  const [showArtwork, setShowArtwork] = useState(usesArtwork);

  return (
    <div
      className="card-dish group"
      onClick={() =>
        analyticsEvents.dishInterest(dish.name, dish.category, placement)
      }
    >
      {/* Image */}
      <div className="relative h-52 overflow-hidden bg-cream-dark">
        {showArtwork ? (
          <DishArtwork dish={dish} />
        ) : (
          <Image
            src={dish.image}
            alt={`${dish.name} — Claude Kitchen`}
            fill
            className="object-cover group-hover:scale-105 transition-transform duration-500"
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
            onError={() => setShowArtwork(true)}
          />
        )}
        {/* Tags overlay */}
        {dish.tags.length > 0 && (
          <div className="absolute right-3 top-3 z-10 flex max-w-[70%] flex-wrap justify-end gap-1.5">
            {dish.tags.slice(0, 2).map((tag) => (
              <span key={tag} className={`tag-${tag}`}>
                {tagLabels[tag] || tag}
              </span>
            ))}
          </div>
        )}
      </div>

      {/* Content */}
      <div className="flex flex-1 flex-col p-5">
        <div className="mb-3 grid grid-cols-[1fr_auto] items-start gap-4">
          <h3 className="min-h-[5.5rem] font-serif text-[2rem] font-semibold leading-[1.05] text-masala">
            {dish.name}
          </h3>
          <span className="pt-1 text-right font-serif text-2xl font-semibold text-terracotta">
            {dish.price}
          </span>
        </div>
        <p className="mb-4 min-h-[5.75rem] text-sm leading-7 text-masala/60">
          {dish.description}
        </p>
        <div className="mb-5 min-h-[2.5rem]">
          {dish.servingNote && (
            <p className="text-xs uppercase tracking-[0.18em] text-masala/40">{dish.servingNote}</p>
          )}
        </div>
        <WhatsAppButton
          dishName={dish.name}
          placement={placement}
          label="Order This"
          variant="outline"
          className="mt-auto w-full justify-center text-sm py-2.5"
        />
      </div>
    </div>
  );
}
