import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: ["class"],
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  // tailwind.config.ts
  theme: {
    extend: {
      colors: {
        brand: {
          dark: "#0f172a",     // slate-900
          primary: "#1e3a8a",  // blue-800
          accent: "#fbbf24",   // amber-400
          muted: "#64748b",    // slate-500
        },
      },
    },
  },
  plugins: [],
};

export default config;
