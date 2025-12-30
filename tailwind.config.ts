import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: ["class"],
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./content/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#104573",  // blue-800
        secondary: "#6B9FBF",
        accent: "#fbbf24",   // amber-400
        muted: "#F2F2F2",    // slate-500
        brand: {
          navy: "#0f172a",
          blue: "#1e3a8a",
          gold: "#fbbf24",
          slate: "#64748b",
        },
      },
    },
  },
  plugins: [],
};

export default config;
