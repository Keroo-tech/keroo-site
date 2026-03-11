import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "#1E3A5F",
          50: "#E8EFF6",
          100: "#C5D5E8",
          200: "#9FBAD8",
          300: "#789FC8",
          400: "#5284B8",
          500: "#1E3A5F",
          600: "#183051",
          700: "#122643",
          800: "#0C1C35",
          900: "#061227",
        },
        accent: {
          DEFAULT: "#F97316",
          50: "#FFF4ED",
          100: "#FFE4CC",
          200: "#FFC999",
          300: "#FFAD66",
          400: "#FF9233",
          500: "#F97316",
          600: "#EA6C10",
          700: "#C25A0D",
          800: "#9A480A",
          900: "#723607",
        },
        background: "#F8FAFC",
      },
      fontFamily: {
        sans: ["Inter", "sans-serif"],
      },
      animation: {
        "fade-in": "fadeIn 0.6s ease-out",
        "slide-up": "slideUp 0.6s ease-out",
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        slideUp: {
          "0%": { opacity: "0", transform: "translateY(20px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
      },
    },
  },
  plugins: [],
};

export default config;
