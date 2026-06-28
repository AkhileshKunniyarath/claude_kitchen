export type DishTag =
  | "signature"
  | "bestseller"
  | "spicy"
  | "family-pack"
  | "vegetarian"
  | "new";

export interface Dish {
  id: string;
  name: string;
  description: string;
  price: string;
  image: string;
  tags: DishTag[];
  category: string;
  servingNote?: string;
}

export interface MenuCategory {
  id: string;
  name: string;
  icon: string;
  description: string;
  dishes: Dish[];
}

export const menuCategories: MenuCategory[] = [
  {
    id: "signature-biryani",
    name: "Signature Biryani",
    icon: "🍲",
    description: "Our classic slow-cooked dum biryanis, layered and sealed in a traditional handi",
    dishes: [
      {
        id: "hyderabadi-dum",
        name: "Hyderabadi Dum Biryani",
        description:
          "Aged basmati rice slow-cooked with tender mutton on a bed of caramelized onions, saffron and aromatic spices in the traditional dum style.",
        price: "₹320",
        image: "/images/menu/generated/hyderabadi-dum-biryani.jpg",
        tags: ["signature", "bestseller"],
        category: "signature-biryani",
        servingNote: "Serves 1 | Best paired with raita",
      },
      {
        id: "chicken-dum",
        name: "Classic Chicken Dum Biryani",
        description:
          "Farm-fresh chicken marinated overnight, cooked with whole spices, golden fried onions and fragrant basmati rice.",
        price: "₹270",
        image: "/images/menu/generated/chicken-dum-biryani.jpg",
        tags: ["signature", "bestseller"],
        category: "signature-biryani",
        servingNote: "Serves 1",
      },
      {
        id: "prawn-biryani",
        name: "Coastal Prawn Biryani",
        description:
          "Fresh prawns cooked in a coastal masala blend with curry leaves, coconut notes and fragrant long-grain rice.",
        price: "₹350",
        image: "/images/menu/generated/coastal-prawn-biryani.jpg",
        tags: ["signature", "spicy"],
        category: "signature-biryani",
        servingNote: "Serves 1",
      },
      {
        id: "veg-dum",
        name: "Garden Vegetable Dum Biryani",
        description:
          "Seasonal vegetables slow-cooked with paneer, dry fruits and classic biryani spices in the authentic dum method.",
        price: "₹220",
        image: "/images/menu/generated/vegetable-dum-biryani.jpg",
        tags: ["vegetarian", "signature"],
        category: "signature-biryani",
        servingNote: "Serves 1",
      },
      {
        id: "egg-biryani",
        name: "Masala Egg Biryani",
        description:
          "Golden-fried eggs nestled in spiced rice with a rich masala gravy and crispy fried shallots.",
        price: "₹200",
        image: "/images/menu/generated/hyderabadi-dum-biryani.jpg",
        tags: ["bestseller"],
        category: "signature-biryani",
        servingNote: "Serves 1",
      },
      {
        id: "mutton-biryani",
        name: "Royal Mutton Biryani",
        description:
          "Bone-in mutton slow-braised with 22 whole spices, layered with saffron-infused rice and sealed with dough.",
        price: "₹380",
        image: "/images/menu/generated/royal-mutton-biryani.jpg",
        tags: ["signature", "spicy"],
        category: "signature-biryani",
        servingNote: "Serves 1 | Contains bone-in pieces",
      },
    ],
  },
  {
    id: "family-packs",
    name: "Family Packs",
    icon: "👨‍👩‍👧‍👦",
    description: "Generous portions designed for family meals and celebrations",
    dishes: [
      {
        id: "chicken-family",
        name: "Chicken Biryani Family Pack",
        description:
          "Our classic chicken dum biryani portioned for the whole family — complete with raita and papad.",
        price: "₹950",
        image: "/images/menu/generated/family-pack-feast.jpg",
        tags: ["family-pack", "bestseller"],
        category: "family-packs",
        servingNote: "Serves 4 | Includes raita & papad",
      },
      {
        id: "mutton-family",
        name: "Mutton Biryani Family Pack",
        description:
          "Slow-cooked royal mutton biryani generously portioned with sides for a celebration-worthy meal.",
        price: "₹1350",
        image: "/images/menu/generated/family-pack-feast.jpg",
        tags: ["family-pack", "signature"],
        category: "family-packs",
        servingNote: "Serves 4 | Includes raita & papad",
      },
      {
        id: "mixed-family",
        name: "Mixed Biryani Feast",
        description:
          "Half portion each of chicken and mutton biryani — perfect for families who want both.",
        price: "₹1150",
        image: "/images/menu/generated/family-pack-feast.jpg",
        tags: ["family-pack", "new"],
        category: "family-packs",
        servingNote: "Serves 4–5 | Includes raita, salan & papad",
      },
    ],
  },
  {
    id: "accompaniments",
    name: "Sides & Accompaniments",
    icon: "🥗",
    description: "Classic sides that complete the biryani experience",
    dishes: [
      {
        id: "raita",
        name: "Burhani Raita",
        description:
          "Chilled yogurt whipped with roasted cumin, mint and a hint of garlic — the classic biryani companion.",
        price: "₹60",
        image: "/images/menu/generated/burhani-raita.jpg",
        tags: ["vegetarian", "bestseller"],
        category: "accompaniments",
      },
      {
        id: "mirchi-ka-salan",
        name: "Mirchi Ka Salan",
        description:
          "Hyderabadi gravy of long green chillies in a roasted peanut and sesame base. Rich, tangy and aromatic.",
        price: "₹80",
        image: "/images/menu/generated/mirchi-ka-salan.jpg",
        tags: ["vegetarian", "signature", "spicy"],
        category: "accompaniments",
      },
      {
        id: "shorba",
        name: "Mutton Shorba",
        description:
          "Light, aromatic mutton broth with whole spices — a traditional starter or side for dum biryani.",
        price: "₹120",
        image: "/images/menu/generated/mutton-shorba.jpg",
        tags: ["signature"],
        category: "accompaniments",
      },
      {
        id: "dahi-chutney",
        name: "Mint Dahi Chutney",
        description:
          "Fresh coriander and mint churned with yogurt, green chilli and a squeeze of lime.",
        price: "₹50",
        image: "/images/menu/generated/burhani-raita.jpg",
        tags: ["vegetarian"],
        category: "accompaniments",
      },
    ],
  },
  {
    id: "combos",
    name: "Value Combos",
    icon: "🎁",
    description: "Complete meals curated for the best value",
    dishes: [
      {
        id: "classic-combo",
        name: "Classic Combo",
        description:
          "Chicken Dum Biryani + Burhani Raita + Papad + Mineral Water. A complete, satisfying meal.",
        price: "₹320",
        image: "/images/menu/generated/classic-combo-meal.jpg",
        tags: ["bestseller"],
        category: "combos",
        servingNote: "Serves 1",
      },
      {
        id: "royal-combo",
        name: "Royal Combo",
        description:
          "Mutton Biryani + Mirchi Ka Salan + Burhani Raita + Shorba + Papad. The full experience.",
        price: "₹520",
        image: "/images/menu/generated/classic-combo-meal.jpg",
        tags: ["signature"],
        category: "combos",
        servingNote: "Serves 1",
      },
      {
        id: "office-pack",
        name: "Office Lunch Pack (10 pax)",
        description:
          "10 individual chicken biryanis with raita and papad — ideal for office orders with quick dispatch.",
        price: "₹2600",
        image: "/images/menu/generated/family-pack-feast.jpg",
        tags: ["bestseller"],
        category: "combos",
        servingNote: "Serves 10 | 2 hours advance notice required",
      },
    ],
  },
];

export const signatureDishes: Dish[] = [
  menuCategories[0].dishes[0], // Hyderabadi Dum
  menuCategories[0].dishes[1], // Chicken Dum
  menuCategories[0].dishes[5], // Royal Mutton
  menuCategories[0].dishes[2], // Prawn
];
