"use client";

import Link from "next/link";
import SocialIcon from "./SocialIcon";
import LinkedIn from "./icons/Linkedin";
import WhatsApp from "./icons/Whatsapp";
import Phone from "./icons/Phone";
import Email from "./icons/Email";
import Logo from "./Logo";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-navy text-white/80">
      <div className="mx-auto max-w-7xl px-6 lg:px-8 py-12">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-5">
          {/* Brand */}
          <div className="lg:col-span-1">
            <Logo width={160} height={48} priority />
            <p className="mt-4 text-sm text-white/60">
              Scaling businesses smarter through finance, transformation, and M&A support.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h5 className="mb-3 text-sm font-semibold text-gold uppercase tracking-wider">
              Quick Links
            </h5>
            <ul className="flex flex-col gap-2 text-sm">
              <li><Link href="/" className="hover:text-gold transition-colors">Home</Link></li>
              <li><Link href="/about" className="hover:text-gold transition-colors">About</Link></li>
              <li><Link href="/services" className="hover:text-gold transition-colors">Services</Link></li>
              <li><Link href="/contact" className="hover:text-gold transition-colors">Contact</Link></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h5 className="mb-3 text-sm font-semibold text-gold uppercase tracking-wider">
              Services
            </h5>
            <ul className="flex flex-col gap-2 text-sm">
              <li><Link href="/services/consulting" className="hover:text-gold transition-colors">FaaS</Link></li>
              <li><Link href="/services/cost" className="hover:text-gold transition-colors">Turnover & Transformation</Link></li>
              <li><Link href="/services/ma" className="hover:text-gold transition-colors">Buy & Build</Link></li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h5 className="mb-3 text-sm font-semibold text-gold uppercase tracking-wider">
              Legal
            </h5>
            <ul className="flex flex-col gap-2 text-sm">
              <li><Link href="/privacy" className="hover:text-gold transition-colors">Privacy Policy</Link></li>
              <li><Link href="/terms" className="hover:text-gold transition-colors">Terms & Conditions</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h5 className="mb-3 text-sm font-semibold text-gold uppercase tracking-wider">
              Connect
            </h5>
            <div className="flex gap-3">
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

        <div className="mt-10 border-t border-white/10 pt-6 text-center text-sm text-white/50">
          &copy; {year} Kendra International. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
