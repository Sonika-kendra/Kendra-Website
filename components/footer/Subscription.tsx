"use client";

import { useState, type FormEvent } from "react";
import clsx from "clsx";
import { footer as FOOTER } from "@/config/site";

type NewsletterResponse = {
  success?: boolean;
  error?: string;
};

export default function Subscription() {
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
    <section className="subscription-root" aria-labelledby="subscription-title">
      <div className="subscription-container">
        <div className="subscription-shell">
          <div>
            <h2 id="subscription-title" className="subscription-heading">
              {FOOTER.sectionTitles.newsletter}
            </h2>
            <p className={clsx("mt-2", "footer-bodyText")}>
              {FOOTER.newsletter.description}
            </p>
          </div>
          <div className="w-full max-w-xl">
            <form
              onSubmit={handleNewsletterSubmit}
              noValidate
              className="footer-newsletterForm"
            >
              <label htmlFor="subscription-newsletter-email" className="sr-only">
                Newsletter email
              </label>
              <input
                id="subscription-newsletter-email"
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
        </div>
      </div>
    </section>
  );
}
