import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        navy: "rgb(var(--navy))",
        gold: "rgb(var(--gold))",
        steel: "rgb(var(--steel))",
        "off-white": "rgb(var(--off-white))",
        "slate-text": "rgb(var(--slate-text))",
        bg: "rgb(var(--bg))",
        text: "rgb(var(--text))",
        card: "rgb(var(--card))",
        border: "rgb(var(--border))",
      },
      fontFamily: {
        sans: ["Inter", "system-ui", "sans-serif"],
        display: ["DM Sans", "system-ui", "sans-serif"],
      },
    },
  },
  plugins: [],
};

export default config;
