import "./globals.css";
import { ThemeProvider } from "next-themes";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import type { Metadata } from "next";

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
    <html lang="en" suppressHydrationWarning>
      <body>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <Navbar />
          {children}
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
