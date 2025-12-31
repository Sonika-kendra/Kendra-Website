import Link from "next/link";
import Image from "next/image";
import SocialIcon from "./SocialIcon";
import DarkModeToggle from "./DarkModeToggle";

import LinkedIn from "./icons/Linkedin";
import WhatsApp from "./icons/Whatsapp";
import Phone from "./icons/Phone";
import Email from "./icons/Email";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="py-10 text-slate-900 dark:text-slate-300">
      <div className="container grid gap-12 md:grid-cols-3">
        {/* Logo */}
        <div>
          <Link href="/">
            <Image
              src="/kendra-logo-200.png"
              alt="Kendra International"
              width={140}
              height={140}
            />
          </Link>

          <p className="mt-4 text-sm text-slate-600 dark:text-slate-400">
            © {year} Kendra International
          </p>

          <div className="mt-4">
            <DarkModeToggle />
          </div>
        </div>

        {/* Services */}
        <div>
          <h5 className="mb-4 font-semibold text-black dark:text-white">
            Services
          </h5>
          <ul className="space-y-2 text-sm">
            <li>Mergers & Acquisitions</li>
            <li>Business Consulting</li>
            <li>Cost Rationalization</li>
          </ul>
        </div>

        {/* Social */}
        <div>
          <h5 className="mb-4 font-semibold text-black dark:text-white">
            Contact Us
          </h5>

          <div className="flex gap-4">
            <SocialIcon href="https://linkedin.com" label="LinkedIn">
              <LinkedIn className="h-5 w-5" />
            </SocialIcon>

            <SocialIcon href="https://wa.me/447000000000" label="WhatsApp">
              <WhatsApp className="h-5 w-5" />
            </SocialIcon>

            <SocialIcon href="tel:+447000000000" label="Phone">
              <Phone className="h-5 w-5" />
            </SocialIcon>

            <SocialIcon href="mailto:info@kendrainternational.com" label="Email">
              <Email className="h-5 w-5" />
            </SocialIcon>
          </div>
        </div>
      </div>
    </footer>
  );
}
