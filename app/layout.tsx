import "./globals.css";
import "./theme-components.css";
import { AnnouncementBar, Navbar } from "@features/header";
import { Footer, Subscription } from "@features/footer";
import type { Metadata, Viewport } from "next";
import { siteMeta } from "@config/site";
import { themeConfig } from "@config/theme";
import { Providers } from "@/components/common";
import { Analytics } from "@vercel/analytics/next";

export const metadata: Metadata = siteMeta as unknown as Metadata;

export const viewport: Viewport = {
  themeColor: [...themeConfig.viewportThemeColor],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="layout-body">
        <Providers>
          <AnnouncementBar />
          <Navbar />
          {children}
          <Subscription />
          <Footer />
        </Providers>
        <Analytics />
      </body>
    </html>
  );
}
