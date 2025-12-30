// app/privacy/page.tsx
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy | Kendra International",
  description:
    "Privacy policy outlining how Kendra International collects, uses, and protects personal information.",
};

export default function PrivacyPage() {
  return (
    <section className="bg-white">
      <div className="container py-24 max-w-4xl">
        <h1 className="text-4xl mb-8">Privacy Policy</h1>

        <p className="text-brand.muted mb-10">
          Last updated: {new Date().getFullYear()}
        </p>

        {/* Section */}
        <PrivacySection title="1. Introduction">
          <p>
            Kendra International (“we”, “our”, “us”) is committed to protecting
            and respecting your privacy. This policy explains how we collect,
            use, and safeguard your personal data.
          </p>
        </PrivacySection>

        <PrivacySection title="2. Information We Collect">
          <ul className="list-disc pl-6 space-y-2">
            <li>Contact information (name, email address)</li>
            <li>Business-related inquiries submitted via forms</li>
            <li>Technical data such as IP address and browser type</li>
          </ul>
        </PrivacySection>

        <PrivacySection title="3. How We Use Your Information">
          <ul className="list-disc pl-6 space-y-2">
            <li>To respond to inquiries and provide services</li>
            <li>To improve our website and services</li>
            <li>To comply with legal and regulatory obligations</li>
          </ul>
        </PrivacySection>

        <PrivacySection title="4. Data Sharing">
          <p>
            We do not sell or rent your personal data. Information may be shared
            with trusted professional partners only where necessary and under
            strict confidentiality agreements.
          </p>
        </PrivacySection>

        <PrivacySection title="5. Data Security">
          <p>
            We implement appropriate technical and organizational measures to
            protect personal data against unauthorized access, alteration, or
            loss.
          </p>
        </PrivacySection>

        <PrivacySection title="6. Cookies">
          <p>
            Our website may use cookies to improve user experience. You can
            control cookie usage through your browser settings.
          </p>
        </PrivacySection>

        <PrivacySection title="7. Your Rights">
          <ul className="list-disc pl-6 space-y-2">
            <li>Right to access your personal data</li>
            <li>Right to request correction or deletion</li>
            <li>Right to object to processing</li>
          </ul>
        </PrivacySection>

        <PrivacySection title="8. Contact Us">
          <p>
            If you have any questions regarding this privacy policy, please
            contact us at:
          </p>
          <p className="mt-2 font-medium">
            info@kendra-international.com
          </p>
        </PrivacySection>
      </div>
    </section>
  );
}

/* ---------- Helper Component ---------- */

function PrivacySection({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <div className="mb-12">
      <h2 className="text-2xl mb-4">{title}</h2>
      <div className="text-brand.text leading-relaxed space-y-4">
        {children}
      </div>
    </div>
  );
}
