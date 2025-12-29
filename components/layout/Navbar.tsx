import Link from "next/link";

export default function Navbar() {
  return (
    <header className="border-b">
      <div className="max-w-[1280px] mx-auto px-6 h-20 flex items-center justify-between">
        <Link href="/" className="text-xl font-semibold">
          Kendra
        </Link>

        <nav className="hidden md:flex items-center gap-10 text-sm">
          <Link href="/services" className="hover:text-accent">
            Services
          </Link>
          <Link href="/insights" className="hover:text-accent">
            Insights
          </Link>
          <Link href="/contact" className="hover:text-accent">
            Contact
          </Link>
        </nav>

        <Link
          href="/contact"
          className="hidden md:inline-flex px-6 py-3 border border-slate-400 rounded hover:border-accent hover:text-accent transition"
        >
          Engage Us
        </Link>
      </div>
    </header>
  );
}
