import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: [
    "./app/**/*.{ts,tsx}",
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        bg: "rgb(var(--bg))",
        text: "rgb(var(--text))",

        primary: "rgb(var(--primary))",
        secondary: "rgb(var(--secondary))",
        accent: "rgb(var(--accent))",
        muted: "rgb(var(--muted))",

        card: "rgb(var(--card))",
        border: "rgb(var(--border))",
      },
      backgroundImage: {
        "brand-gradient": "var(--gradient-brand)",
        "cta-gradient": "var(--gradient-cta)",
      },
    },
  },
  plugins: [],
};

export default config;
