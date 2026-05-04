import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // Custom color palette from design.md
        primary: {
          dark: "#2B2623", // Deep Charcoal Brown - main background
          DEFAULT: "#2B2623",
        },
        secondary: {
          warm: "#6B4C3B", // Warm Walnut Brown - cards, borders
          DEFAULT: "#6B4C3B",
        },
        accent: {
          light: "#E8DCCB", // Soft Ivory Warm Light - text
          gold: "#C2A878", // Muted Gold Accent - interactive elements
        },
      },
      fontFamily: {
        sans: ["var(--font-geist-sans)", "system-ui", "sans-serif"],
        mono: ["var(--font-geist-mono)", "monospace"],
      },
    },
  },
  plugins: [],
};

export default config;
