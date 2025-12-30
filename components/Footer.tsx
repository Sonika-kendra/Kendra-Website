// components/Footer.tsx
import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-brand.navy text-slate-300 py-10 bg-black">
      <div className="container grid md:grid-cols-3 gap-12">
        <div>
          <Link href="/" className="flex items-center gap-3">
            <div className="relative w-36 h-36 flex-shrink-0">
              <Image
                src="/kendra-logo-200.png"      // place logo in /public/logo.png
                  alt="Kendra International Logo"
                  fill
                  className="object-contain"
                  priority
              />
            </div>
          </Link>
          <p className="text-sm">
            M&A and business consulting advisory firm.
          </p>
        </div>

        <div>
          <h5 className="text-white mb-4">Services</h5>
          <ul className="space-y-2 text-sm">
            <li>Mergers & Acquisitions</li>
            <li>Business Consulting</li>
            <li>Cost Rationalization</li>
          </ul>
        </div>

        <div>
          <h5 className="text-white mb-4">Contact</h5>
          <p className="text-sm">United Kingdom</p>
        </div>
      </div>
    </footer>
  );
}
