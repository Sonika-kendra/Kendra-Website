import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import type { Metadata } from "next";
import { Providers } from "@/components/Providers";

export const metadata: Metadata = {
  title: {
    default: "Kendra International | M&A & Business Consulting",
    template: "%s | Kendra International",
  },
  description:
    "Strategic M&A advisory, business consulting, and cost optimization services.",
  openGraph: {
    title: "Kendra International",
    description: "Strategic M&A and business consulting firm.",
    url: "https://kendra-intl.com",
    siteName: "Kendra International",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Providers>
          <Navbar />
          {children}
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
