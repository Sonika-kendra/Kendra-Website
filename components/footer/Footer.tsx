"use client";

import Link from "next/link";
import SocialIcon from "../common/SocialIcon";
import LinkedIn from "../icons/Linkedin";
import WhatsApp from "../icons/Whatsapp";
import Phone from "../icons/Phone";
import Email from "../icons/Email";
import Logo from "../header/Logo";
import { footer as FOOTER } from "@/config/site";
import DarkModeToggle from "../header/DarkModeToggle";

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
              {FOOTER.quickLinks.map((l) => (
                <li key={l.href}><Link href={l.href} className="hover:text-gold transition-colors">{l.label}</Link></li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h5 className="mb-3 text-sm font-semibold text-gold uppercase tracking-wider">
              Services
            </h5>
            <ul className="flex flex-col gap-2 text-sm">
              {FOOTER.services.map((s) => (
                <li key={s.href}><Link href={s.href} className="hover:text-gold transition-colors">{s.label}</Link></li>
              ))}
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h5 className="mb-3 text-sm font-semibold text-gold uppercase tracking-wider">
              Legal
            </h5>
            <ul className="flex flex-col gap-2 text-sm">
              {FOOTER.legal.map((l) => (
                <li key={l.href}><Link href={l.href} className="hover:text-gold transition-colors">{l.label}</Link></li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h5 className="mb-3 text-sm font-semibold text-gold uppercase tracking-wider">
              Connect
            </h5>
            
            <div className="flex gap-3">
              {FOOTER.social.map((s) => {
                const key = s.label;
                return (
                  <SocialIcon key={s.href} href={s.href} label={s.label}>
                    {key === "LinkedIn" && <LinkedIn className="h-5 w-5" />}
                    {key === "WhatsApp" && <WhatsApp className="h-5 w-5" />}
                    {key === "Phone" && <Phone className="h-5 w-5" />}
                    {key === "Email" && <Email className="h-5 w-5" />}
                  </SocialIcon>
                );
              })}
            </div>
          </div>
        </div>

        <div className="mt-10 border-t border-white/10 pt-6 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-white/50">
          <p>
            &copy; {year} Kendra International. All rights reserved.
          </p>
          <DarkModeToggle />
        </div>
      </div>
    </footer>
  );
}
