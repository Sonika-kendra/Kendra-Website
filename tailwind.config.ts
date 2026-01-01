import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: [
    "./app/**/*.{ts,tsx}",
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./content/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#292966",  
        secondary: "#5C5C99",
        accent: "#A3A3CC",   
        muted: "#CCCCFF",   
        brand: {
          primary: "#292966",  
          secondary: "#5C5C99",
          accent: "#A3A3CC",   
          muted: "#CCCCFF", 
        },
      },
    },
  },
  plugins: [],
};

export default config;
