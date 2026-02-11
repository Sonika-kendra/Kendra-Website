import "./globals.css";
import { AnnouncementBar, Navbar } from "@/components/features/header";
import { Footer } from "@/components/features/footer";
import type { Metadata, Viewport } from "next";
import { siteMeta } from "@/config/site";

export const metadata: Metadata = siteMeta as unknown as Metadata;

export const viewport: Viewport = {
  themeColor: "#1a2a4a",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="font-sans antialiased">
        <AnnouncementBar />
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
