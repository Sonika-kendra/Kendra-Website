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
        navy: "rgb(var(--navy))",
        gold: "rgb(var(--gold))",
        steel: "rgb(var(--steel))",
        "off-white": "rgb(var(--off-white))",
        "slate-text": "rgb(var(--slate-text))",
        bg: "rgb(var(--bg))",
        text: "rgb(var(--text))",
        card: "rgb(var(--card))",
        border: "rgb(var(--border))",

        // Semantic aliases (use these going forward)
        primary: "rgb(var(--navy))",
        "primary-foreground": "rgb(var(--off-white))",
        secondary: "rgb(var(--steel))",
        "secondary-foreground": "rgb(var(--off-white))",
        background: "rgb(var(--bg))",
        foreground: "rgb(var(--text))",
        muted: "rgb(var(--off-white))",
        "muted-foreground": "rgb(var(--slate-text))",
        accent: "rgb(var(--gold))",
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
