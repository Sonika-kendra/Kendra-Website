import type { Config } from "tailwindcss";

const withOpacity = (variable: string) => `rgb(var(${variable}) / <alpha-value>)`;

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
        /* Legacy names (kept for compatibility) */
        navy: withOpacity("--navy"),
        gold: withOpacity("--gold"),
        steel: withOpacity("--steel"),
        "off-white": withOpacity("--off-white"),
        "slate-text": withOpacity("--slate-text"),
        bg: withOpacity("--bg"),
        text: withOpacity("--text"),

        /* Semantic theme tokens */
        border: withOpacity("--border"),
        input: withOpacity("--border"),
        ring: withOpacity("--ring"),
        background: withOpacity("--background"),
        foreground: withOpacity("--foreground"),
        card: withOpacity("--card"),
        "card-foreground": withOpacity("--card-foreground"),
        primary: withOpacity("--primary"),
        "primary-foreground": withOpacity("--primary-foreground"),
        secondary: withOpacity("--secondary"),
        "secondary-foreground": withOpacity("--secondary-foreground"),
        muted: withOpacity("--muted"),
        "muted-foreground": withOpacity("--muted-foreground"),
        accent: withOpacity("--accent"),
        "accent-foreground": withOpacity("--accent-foreground"),
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
