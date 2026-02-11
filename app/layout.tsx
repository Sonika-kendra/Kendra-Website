import "./globals.css";
import AnnouncementBar from "@/components/AnnouncementBar";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import type { Metadata, Viewport } from "next";

export const metadata: Metadata = {
  title: {
    default: "Kendra International | M&A & Business Consulting",
    template: "%s | Kendra International",
  },
  description:
    "Strategic M&A advisory, business consulting, and cost optimization services for scaling businesses smarter.",
  icons: {
    icon: "/favicon.png",
  },
  openGraph: {
    title: "Kendra International",
    description: "Strategic M&A and business consulting firm.",
    url: "https://kendra-intl.com",
    siteName: "Kendra International",
    type: "website",
  },
};

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
