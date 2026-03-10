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
import clsx from "clsx";
import { ui } from "@/config/theme";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className={ui.footer.root}>
      <div className={ui.footer.container}>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-6">
          {/* Brand */}
          <div className="lg:col-span-2 pr-6">
            <Logo width={160} height={48} priority />
            <p className={clsx("mt-3", ui.footer.bodyText)}>
              {FOOTER.brandDescription}
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h5 className={ui.footer.heading}>
              {FOOTER.sectionTitles.quickLinks}
            </h5>
            <ul className="flex flex-col gap-2 text-sm">
              {FOOTER.quickLinks.map((l) => (
                <li key={l.href}>
                  <Link
                    href={l.href}
                    className={clsx(ui.footer.link, ui.interactive.focusRing)}
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h5 className={ui.footer.heading}>
              {FOOTER.sectionTitles.services}
            </h5>
            <ul className="flex flex-col gap-2 text-sm">
              {FOOTER.services.map((s) => (
                <li key={s.href}>
                  <Link
                    href={s.href}
                    className={clsx(ui.footer.link, ui.interactive.focusRing)}
                  >
                    {s.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h5 className={ui.footer.heading}>
              {FOOTER.sectionTitles.legal}
            </h5>
            <ul className="flex flex-col gap-2 text-sm">
              {FOOTER.legal.map((l) => (
                <li key={l.href}>
                  <Link
                    href={l.href}
                    className={clsx(ui.footer.link, ui.interactive.focusRing)}
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h5 className={ui.footer.heading}>
              {FOOTER.sectionTitles.connect}
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

        <div className={ui.footer.divider}>
          <p>
            &copy; {year} {FOOTER.companyName}. {FOOTER.copyrightSuffix}
          </p>
          <DarkModeToggle />
        </div>
      </div>
    </footer>
  );
}
