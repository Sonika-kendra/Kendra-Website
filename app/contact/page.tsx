import type { Metadata } from "next";
import { pageMeta } from "@config/site";
import { ContactInfo, ContactForm, ContactCTA } from "@features/contact";

export const metadata: Metadata = pageMeta.contact as Metadata;

export default function ContactPage() {
  return (
    <main>
      {/* Hero */}
      <section
        className="relative overflow-hidden"
        style={{ background: "var(--hero-gradient)" }}
      >
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-white/5 rounded-full blur-3xl" />

        <div className="relative mx-auto max-w-7xl px-6 lg:px-8 py-20 md:py-28">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white font-display">
            Get in Touch
          </h1>
          <p className="mt-3 text-lg text-white/90 max-w-2xl">
            Let&apos;s discuss how we can help scale your business. Reach out
            today.
          </p>
        </div>
        <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-none">
          <svg
            viewBox="0 0 1440 60"
            className="w-full h-8 sm:h-12"
            preserveAspectRatio="none"
            aria-hidden="true"
          >
            <path
              d="M0,60 L0,20 Q360,0 720,20 Q1080,40 1440,20 L1440,60 Z"
              fill="white"
            />
          </svg>
        </div>
      </section>

      {/* Contact Content */}
      <section className="py-16 md:py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-3">
            <ContactInfo />
            <ContactForm />
          </div>
        </div>
      </section>

      {/* CTA */}
      <ContactCTA />
    </main>
  );
}
