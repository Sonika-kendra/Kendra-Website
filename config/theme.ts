export const themeModes = ["light", "dark", "system"] as const;

export type ThemeMode = (typeof themeModes)[number];

export const themeConfig = {
  attribute: "class",
  defaultTheme: "system" as ThemeMode,
  enableSystem: true,
  disableTransitionOnChange: true,
  viewportThemeColor: [
    { media: "(prefers-color-scheme: light)", color: "#f8fafc" },
    { media: "(prefers-color-scheme: dark)", color: "#020617" },
  ],
} as const;
