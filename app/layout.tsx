import "./globals.css";
import { AnnouncementBar, Navbar } from "@features/header";
import { Footer } from "@features/footer";
import type { Metadata, Viewport } from "next";
import { siteMeta } from "@config/site";
import { Providers } from "@features/common";

export const metadata: Metadata = siteMeta as unknown as Metadata;

export const viewport: Viewport = {
  themeColor: "#0f172a",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="font-sans antialiased">
        <Providers>
          <AnnouncementBar />
          <Navbar />
          {children}
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
