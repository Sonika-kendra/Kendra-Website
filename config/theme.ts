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

export const ui = {
  layout: {
    body: "min-h-screen bg-background text-foreground font-sans antialiased",
  },
  interactive: {
    focusRing:
      "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background",
  },
  announcement: {
    root: "relative z-50 border-b border-border bg-muted text-foreground",
    container:
      "mx-auto flex max-w-7xl items-center justify-center px-6 py-2 text-sm font-medium lg:px-8",
    link: "inline font-semibold text-accent underline underline-offset-2 transition-opacity hover:opacity-80",
  },
  nav: {
    header:
      "sticky top-0 z-50 w-full border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/85",
    shell: "mx-auto flex h-14 max-w-7xl items-center justify-between px-6",
    desktop: "hidden items-center gap-2 md:flex",
    linkBase: "rounded-md px-4 py-1.5 text-sm font-medium transition-colors",
    linkActive: "bg-primary text-primary-foreground",
    linkInactive: "text-foreground hover:bg-muted hover:text-foreground",
    dropdownPanel:
      "absolute left-0 top-full mt-2 w-56 rounded-md border border-border bg-card py-2 shadow-md",
    dropdownLink:
      "block rounded-md px-4 py-2 text-sm font-medium text-foreground transition-colors hover:bg-muted hover:text-foreground",
    mobileToggle: "text-foreground md:hidden",
    mobilePanel: "border-t border-border bg-card px-6 py-4 md:hidden",
    mobileLink:
      "block py-2 text-sm font-medium text-foreground transition-colors hover:text-primary",
    mobileChildLink:
      "block py-1.5 text-sm text-muted-foreground transition-colors hover:text-primary",
  },
  footer: {
  root: "border-t border-border bg-muted text-foreground",
  container: "mx-auto max-w-7xl px-4 py-8 md:py-10 lg:px-6",
    heading:
      "mb-3 text-sm font-semibold uppercase tracking-wider text-foreground/70",
    bodyText: "text-sm text-foreground/70",
    link: "transition-colors hover:text-accent",
    divider:
      "mt-10 flex flex-col items-center justify-between gap-4 border-t border-border pt-6 text-sm text-foreground/60 md:flex-row",
  },
  blog: {
    backLink:
      "inline-block text-sm text-muted-foreground transition-colors hover:text-accent hover:underline",
    postTitle:
      "text-2xl font-semibold leading-tight transition-colors hover:text-accent",
    categoryLink:
      "rounded-full bg-muted px-3 py-1 text-sm font-medium text-foreground transition-colors hover:bg-primary hover:text-primary-foreground",
    sidebarPostTitle:
      "text-sm font-semibold text-foreground leading-snug transition-colors group-hover:text-accent",
  },
  themeSwitcher: {
    shell:
      "inline-flex w-fit items-center gap-1 rounded-full border border-border bg-card/80 p-1 shadow-sm backdrop-blur",
    button:
      "relative inline-flex items-center justify-center rounded-full p-1 transition-colors",
    active: "bg-muted text-foreground shadow-sm",
    inactive: "text-muted-foreground hover:text-foreground",
    icon: "h-5 w-5 transition-transform duration-200",
  },
  socialIcon: "text-foreground/70 transition-colors hover:text-accent",
} as const;
