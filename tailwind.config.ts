import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        ember: {
          DEFAULT: "#C85A2F",
          light: "#E8774A",
          dark: "#A34420",
        },
        charcoal: {
          DEFAULT: "#2A1610",
          warm: "#351E14",
          muted: "#4A2E22",
        },
        gold: {
          DEFAULT: "#D4A853",
          light: "#E8C97A",
          dark: "#B8912F",
        },
        ivory: {
          DEFAULT: "#FAF6F0",
          warm: "#F3EBE0",
        },
        sand: {
          DEFAULT: "#E8DFD2",
        },
        "text-primary": "#2A1610",
        "text-secondary": "#5C3A2E",
        "text-muted": "#8A5F4D",
      },
      fontFamily: {
        serif: ["Poppins", "system-ui", "sans-serif"],
        sans: ["Poppins", "system-ui", "sans-serif"],
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
