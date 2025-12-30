// components/Footer.tsx
import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="bg-black text-slate-300 py-10">
      <div className="container grid md:grid-cols-3 gap-12">
        {/* Logo */}
        <div>
          <Link href="/" className="flex items-center gap-3">
            <div className="relative w-36 h-36 flex-shrink-0">
              <Image
                src="/kendra-logo-200.png"
                alt="Kendra International Logo"
                fill
                className="object-contain"
                priority
              />
            </div>
          </Link>
          <span className="text-center text-sm text-slate-400"> © {currentYear} Kendra International </span>
        </div>

        {/* Services */}
        <div>
          <h5 className="text-white mb-4">Services</h5>
          <ul className="space-y-2 text-sm">
            <li>Mergers &amp; Acquisitions</li>
            <li>Business Consulting</li>
            <li>Cost Rationalization</li>
          </ul>
        </div>

        {/* Contact + Social */}
        <div>
          <h5 className="text-white mb-4">Contact Us</h5>
          {/* <p className="text-sm mb-4">United Kingdom</p> */}

          <div className="flex items-center gap-4">
            {/* LinkedIn */}
            <a
              href="https://www.linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="hover:text-white transition"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M4.98 3.5C4.98 4.88 3.87 6 2.5 6S0 4.88 0 3.5 1.12 1 2.5 1s2.48 1.12 2.48 2.5zM.5 8h4V24h-4V8zm7.5 0h3.8v2.2h.05c.53-1 1.83-2.2 3.77-2.2 4.03 0 4.78 2.65 4.78 6.1V24h-4v-7.8c0-1.86-.03-4.25-2.6-4.25-2.6 0-3 2.03-3 4.12V24h-4V8z" />
              </svg>
            </a>

            {/* WhatsApp */}
            <a
              href="https://wa.me/447000000000"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="WhatsApp"
              className="hover:text-white transition"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12.04 2C6.58 2 2.1 6.48 2.1 11.94c0 2.1.55 4.15 1.6 5.97L2 22l4.25-1.64a9.9 9.9 0 005.79 1.83h.01c5.46 0 9.94-4.48 9.94-9.94S17.5 2 12.04 2zm5.77 14.36c-.24.68-1.4 1.3-1.93 1.37-.5.07-1.13.1-1.82-.12-.42-.13-.97-.32-1.67-.64-2.94-1.27-4.85-4.24-4.99-4.44-.13-.2-1.2-1.6-1.2-3.05 0-1.45.75-2.17 1.02-2.47.27-.3.6-.37.8-.37.2 0 .4 0 .58.01.18.01.42-.07.66.5.24.57.8 1.95.87 2.09.07.13.12.3.02.5-.1.2-.15.32-.3.5-.15.18-.32.4-.46.54-.15.15-.3.32-.13.62.17.3.77 1.26 1.65 2.04 1.13 1.01 2.08 1.33 2.38 1.48.3.15.47.13.65-.08.18-.2.74-.86.94-1.16.2-.3.4-.25.66-.15.27.1 1.7.8 2 .95.3.15.5.22.57.35.07.13.07.77-.17 1.45z" />
              </svg>
            </a>

            {/* Call */}
            <a
              href="tel:+447000000000"
              aria-label="Call"
              className="hover:text-white transition"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M6.62 10.79a15.05 15.05 0 006.59 6.59l2.2-2.2a1 1 0 011.01-.24c1.12.37 2.33.57 3.58.57a1 1 0 011 1V20a1 1 0 01-1 1C10.3 21 3 13.7 3 4a1 1 0 011-1h3.5a1 1 0 011 1c0 1.25.2 2.46.57 3.58a1 1 0 01-.24 1.01l-2.21 2.2z" />
              </svg>
            </a>

            {/* Email */}
            <a
              href="mailto:info@kendrainternational.com"
              aria-label="Email"
              className="hover:text-white transition"
            >
              <svg
                className="w-5 h-5"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M2 4h20v16H2V4zm10 7L4 6v12h16V6l-8 5z" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}


