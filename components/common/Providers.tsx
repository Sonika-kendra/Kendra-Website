// components/Providers.tsx
"use client";

import { ThemeProvider } from "next-themes";
import { themeConfig } from "@/config/theme";
import { ModalProvider } from "@/context/ModalContext";

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <ThemeProvider
      attribute={themeConfig.attribute}
      defaultTheme={themeConfig.defaultTheme}
      enableSystem={themeConfig.enableSystem}
      disableTransitionOnChange={themeConfig.disableTransitionOnChange}
    >
      <ModalProvider>
        {children}
      </ModalProvider>
    </ThemeProvider>
  );
}
