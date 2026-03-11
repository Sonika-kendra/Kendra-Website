"use client";

import { useState, type FormEvent } from "react";
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

type NewsletterResponse = {
  success?: boolean;
  error?: string;
};

export default function Footer() {
  const year = new Date().getFullYear();
  const [newsletterEmail, setNewsletterEmail] = useState("");
  const [newsletterState, setNewsletterState] = useState<
    "idle" | "loading" | "success" | "error"
  >("idle");
  const [newsletterMessage, setNewsletterMessage] = useState("");

  const handleNewsletterSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const email = newsletterEmail.trim();
    if (!email) {
      setNewsletterState("error");
      setNewsletterMessage(FOOTER.newsletter.errorMessage);
      return;
    }

    setNewsletterState("loading");
    setNewsletterMessage("");

    try {
      const response = await fetch("/api/zoho/email", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          firstName: "Newsletter",
          lastName: "Subscriber",
          email,
          message: `Newsletter subscription request from ${email}.`,
        }),
      });

      const payload = (await response
        .json()
        .catch(() => ({}))) as NewsletterResponse;

      if (response.ok && payload.success) {
        setNewsletterState("success");
        setNewsletterEmail("");
        setNewsletterMessage(FOOTER.newsletter.successMessage);
        return;
      }

      setNewsletterState("error");
      setNewsletterMessage(payload.error || FOOTER.newsletter.errorMessage);
    } catch {
      setNewsletterState("error");
      setNewsletterMessage(FOOTER.newsletter.errorMessage);
    }
  };

  return (
    <footer className="footer-root">
      <div className="footer-container">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-8">
          {/* Brand */}
          <div className="lg:col-span-2 pr-6">
            <Logo width={160} height={48} priority />
            <p className={clsx("mt-3", "footer-bodyText")}>
              {FOOTER.brandDescription}
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h5 className="footer-heading">
              {FOOTER.sectionTitles.quickLinks}
            </h5>
            <ul className="flex flex-col gap-2 text-sm">
              {FOOTER.quickLinks.map((l) => (
                <li key={l.href}>
                  <Link
                    href={l.href}
                    className={clsx("footer-link", "interactive-focus-ring")}
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h5 className="footer-heading">
              {FOOTER.sectionTitles.services}
            </h5>
            <ul className="flex flex-col gap-2 text-sm">
              {FOOTER.services.map((s) => (
                <li key={s.href}>
                  <Link
                    href={s.href}
                    className={clsx("footer-link", "interactive-focus-ring")}
                  >
                    {s.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h5 className="footer-heading">
              {FOOTER.sectionTitles.legal}
            </h5>
            <ul className="flex flex-col gap-2 text-sm">
              {FOOTER.legal.map((l) => (
                <li key={l.href}>
                  <Link
                    href={l.href}
                    className={clsx("footer-link", "interactive-focus-ring")}
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter */}
          <div className="lg:col-span-2">
            <h5 className="footer-heading">
              {FOOTER.sectionTitles.newsletter}
            </h5>
            <p className={clsx("mb-3", "footer-bodyText")}>
              {FOOTER.newsletter.description}
            </p>
            <form
              onSubmit={handleNewsletterSubmit}
              noValidate
              className="footer-newsletterForm"
            >
              <label htmlFor="footer-newsletter-email" className="sr-only">
                Newsletter email
              </label>
              <input
                id="footer-newsletter-email"
                type="email"
                value={newsletterEmail}
                onChange={(event) => setNewsletterEmail(event.target.value)}
                placeholder={FOOTER.newsletter.emailPlaceholder}
                className={clsx(
                  "footer-newsletterInput",
                  "interactive-focus-ring"
                )}
                disabled={newsletterState === "loading"}
                required
              />
              <button
                type="submit"
                className={clsx(
                  "footer-newsletterButton",
                  "interactive-focus-ring"
                )}
                disabled={newsletterState === "loading"}
              >
                {newsletterState === "loading"
                  ? FOOTER.newsletter.submittingLabel
                  : FOOTER.newsletter.buttonLabel}
              </button>
            </form>
            {newsletterState !== "idle" && (
              <p
                aria-live="polite"
                className={clsx(
                  "mt-2 text-xs",
                  newsletterState === "success"
                    ? "text-emerald-600 dark:text-emerald-400"
                    : "text-red-600 dark:text-red-400"
                )}
              >
                {newsletterMessage}
              </p>
            )}
          </div>

          {/* Contact */}
          <div>
            <h5 className="footer-heading">
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

        <div className="footer-divider">
          <p>
            &copy; {year} {FOOTER.companyName}. {FOOTER.copyrightSuffix}
          </p>
          <DarkModeToggle />
        </div>
      </div>
    </footer>
  );
}
