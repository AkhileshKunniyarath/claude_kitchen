import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        terracotta: {
          DEFAULT: "#D35C30",
          light: "#E07650",
          dark: "#B84E26",
        },
        masala: {
          DEFAULT: "#4A2418",
          light: "#6B3525",
          dark: "#2E1510",
        },
        cream: {
          DEFAULT: "#FBF1E8",
          light: "#FEF8F3",
          dark: "#F0E4D4",
        },
        gold: {
          DEFAULT: "#C78A43",
          light: "#D9A05A",
          dark: "#A8732E",
        },
        leaf: {
          DEFAULT: "#556B4D",
          light: "#6B8A61",
          dark: "#3E5039",
        },
      },
      fontFamily: {
        serif: ["Cormorant Garamond", "Georgia", "serif"],
        sans: ["Manrope", "system-ui", "sans-serif"],
      },
      animation: {
        "fade-up": "fadeUp 0.8s ease-out forwards",
        "fade-in": "fadeIn 0.6s ease-out forwards",
        float: "float 6s ease-in-out infinite",
        steam: "steam 3s ease-in-out infinite",
        "spin-slow": "spin 20s linear infinite",
      },
      keyframes: {
        fadeUp: {
          "0%": { opacity: "0", transform: "translateY(30px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-15px)" },
        },
        steam: {
          "0%": { opacity: "0", transform: "translateY(0) scaleX(1)" },
          "50%": { opacity: "0.6", transform: "translateY(-20px) scaleX(1.1)" },
          "100%": { opacity: "0", transform: "translateY(-40px) scaleX(0.8)" },
        },
      },
      backgroundImage: {
        "texture-paper": "url('/textures/paper-texture.png')",
        "grain-overlay":
          "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' opacity='0.05'/%3E%3C/svg%3E\")",
      },
    },
  },
  plugins: [],
};

export default config;
