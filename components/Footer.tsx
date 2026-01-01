"use client";

import Link from "next/link";
import SocialIcon from "./SocialIcon";
import DarkModeToggle from "./DarkModeToggle";

import LinkedIn from "./icons/Linkedin";
import WhatsApp from "./icons/Whatsapp";
import Phone from "./icons/Phone";
import Email from "./icons/Email";
import Logo from "./Logo";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-bg text-text border-t border-border">
      <div className="container py-14 grid gap-12 md:grid-cols-5">
        {/* Brand */}
        <div>
          <Logo priority />

          <p className="mt-4 text-sm text-text/70">
            © {year} Kendra International
          </p>

          <div className="mt-4">
            <DarkModeToggle />
          </div>
        </div>

        {/* Resources */}
        <div>
          <h5 className="mb-4 font-semibold">Resources</h5>
          <ul className="space-y-2 text-sm text-text/80">
            <li><Link href="/resources/insights">Insights</Link></li>
            <li><Link href="/resources/case-studies">Case Studies</Link></li>
            <li><Link href="/resources/reports">Reports</Link></li>
          </ul>
        </div>

        {/* About */}
        <div>
          <h5 className="mb-4 font-semibold">About Kendra</h5>
          <ul className="space-y-2 text-sm text-text/80">
            <li><Link href="/about">Our Story</Link></li>
            <li><Link href="/leadership">Leadership</Link></li>
            <li><Link href="/careers">Careers</Link></li>
          </ul>
        </div>

        {/* Legal */}
        <div>
          <h5 className="mb-4 font-semibold">Legal</h5>
          <ul className="space-y-2 text-sm text-text/80">
            <li><Link href="/privacy-policy">Privacy Policy</Link></li>
            <li><Link href="/terms">Terms & Conditions</Link></li>
            <li><Link href="/compliance">Compliance</Link></li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h5 className="mb-4 font-semibold">Contact Us</h5>

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

            <SocialIcon
              href="mailto:info@kendrainternational.com"
              label="Email"
            >
              <Email className="h-5 w-5" />
            </SocialIcon>
          </div>
        </div>
      </div>
    </footer>
  );
}
