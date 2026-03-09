import type { Metadata } from "next";
import { pageMeta } from "@config/site";
import HeroSection from "@components/common/HeroSection";
import { aboutHero } from "@content/about";
import { ContactInfo, ContactForm, ContactCTA } from "@features/contact";

export const metadata: Metadata = pageMeta.contact as Metadata;

export default function ContactPage() {
  return (
    <main>
      <HeroSection
        title="Get in Touch"
        description="Let's discuss how we can help scale your business. Reach out
            today."
        imageUrl={aboutHero.image.src}
        imageAlt={aboutHero.image.alt}
        withWave={false}
      />

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
