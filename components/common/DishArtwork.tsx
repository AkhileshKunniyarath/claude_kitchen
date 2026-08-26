import type { Dish } from "@/data/menu";

interface DishArtworkProps {
  dish: Dish;
}

const artworkByCategory: Record<
  string,
  {
    shell: string;
    halo: string;
    badge: string;
  }
> = {
  "signature-biryani": {
    shell: "from-charcoal via-charcoal-warm to-ember/40",
    halo: "bg-gold/20",
    badge: "Chef's Signature",
  },
  "family-packs": {
    shell: "from-charcoal-warm via-ember/40 to-gold/20",
    halo: "bg-ivory/15",
    badge: "Sharing Feast",
  },
  accompaniments: {
    shell: "from-charcoal via-charcoal-warm to-gold/30",
    halo: "bg-ember/15",
    badge: "Perfect Pairing",
  },
  combos: {
    shell: "from-gold/30 via-charcoal-warm to-charcoal",
    halo: "bg-ivory/10",
    badge: "Complete Meal",
  },
};

export function DishArtwork({ dish }: DishArtworkProps) {
  const palette = artworkByCategory[dish.category] ?? artworkByCategory["signature-biryani"];

  return (
    <div className={`relative h-full w-full overflow-hidden bg-gradient-to-br ${palette.shell}`}>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(255,255,255,0.15),_transparent_46%)]" />
      <div className={`absolute -right-10 -top-10 h-32 w-32 rounded-full blur-xl ${palette.halo}`} />
      <div className="absolute inset-x-0 bottom-0 h-28 bg-gradient-to-t from-charcoal/55 to-transparent" />
      <div className="absolute left-4 top-4 text-[10px] font-semibold uppercase tracking-[0.3em] text-ivory/80">
        Claude Kitchen
      </div>
      <div className="absolute left-4 top-9 text-[10px] font-medium uppercase tracking-[0.26em] text-ivory/50">
        {dish.category.replace("-", " ")}
      </div>

      <div className="absolute inset-x-0 top-[30%] flex justify-center px-6">
        <div className="relative h-24 w-40 sm:h-28 sm:w-48">
          <div className="absolute left-1/2 top-0 h-24 w-24 -translate-x-1/2 rounded-full bg-ivory/20 blur-2xl" />
          <div className="absolute inset-x-0 top-8 h-5 rounded-full bg-charcoal/30 blur-md" />
          <div className="absolute inset-x-3 top-5 h-12 rounded-[999px] border-[8px] border-ivory bg-ivory shadow-[0_8px_0_rgba(28,20,18,0.20)]" />
          <div className="absolute left-1/2 top-8 h-5 w-24 -translate-x-1/2 rounded-full border-[5px] border-ember bg-gold" />
          <div className="absolute left-5 top-14 h-10 w-10 rounded-full border-b-[5px] border-l-[5px] border-ivory/60" />
          <div className="absolute right-5 top-14 h-10 w-10 rounded-full border-b-[5px] border-r-[5px] border-ivory/60" />
        </div>
      </div>

      <div className="absolute bottom-4 left-4 right-4">
        <div className="inline-flex rounded-full border border-ivory/15 bg-ivory/8 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.24em] text-ivory/80">
          {palette.badge}
        </div>
        <div className="mt-3 max-w-[80%] font-serif text-2xl font-bold leading-tight text-ivory">
          {dish.name}
        </div>
        <div className="mt-2 text-xs leading-relaxed text-ivory/70">
          {dish.servingNote || "Slow-cooked in the classic dum style."}
        </div>
      </div>
    </div>
  );
}
