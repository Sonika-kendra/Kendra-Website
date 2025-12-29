import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

export const metadata = {
  title: "Kendra International",
  description: "Enterprise M&A & Business Consulting",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-white text-slate-800">
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
