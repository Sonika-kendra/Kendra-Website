// app/privacy/page.tsx
import type { Metadata } from "next";
import { pageMeta } from "@config/site";
import { WebsiteUrlConfig } from "@/config/routing";

export const metadata: Metadata = pageMeta.privacy as Metadata;

export default function PrivacyPage() {
  return (
    <section className="bg-card">
      <div className="mx-auto max-w-4xl px-6 lg:px-8 py-24">
        <h1 className="text-4xl font-bold text-navy mb-8">
          Cookie & Privacy Policy
        </h1>

        <p className="text-slate-text/60 mb-10">
          Last updated: {new Date().getFullYear()}
        </p>

        {/* ---------------- COOKIE POLICY ---------------- */}

        <PrivacySection title="1. Cookie Policy Overview">
          <p>
            At Kendra International, we value your privacy and aim to provide a
            transparent experience on our website. This Cookie Policy explains
            how cookies and similar technologies are used, the types of cookies
            we utilize, and how you can manage your preferences while visiting
            our website.
          </p>
        </PrivacySection>

        <PrivacySection title="2. What Are Cookies">
          <p>
            Cookies are small text files stored on your device (computer,
            smartphone, or tablet) when you visit a website. They help websites
            function efficiently and provide insights into how users interact
            with the website.
          </p>
        </PrivacySection>

        <PrivacySection title="3. Why We Use Cookies">
          <ul className="list-disc pl-6 space-y-2">
            <li>Ensure the website operates efficiently.</li>
            <li>Remember user preferences and settings.</li>
            <li>Analyze website traffic and user behavior.</li>
            <li>Improve content and user experience.</li>
            <li>Provide relevant information and services.</li>
          </ul>
        </PrivacySection>

        <PrivacySection title="4. Use of Google Analytics">
          <p>
            Our website uses Google Analytics to collect anonymized data about
            website usage, visitor behavior, and traffic patterns. This
            information helps us understand how users interact with our website
            and allows us to improve its functionality and performance.
          </p>
        </PrivacySection>

        <PrivacySection title="5. Types of Cookies We Use">
          <ul className="list-disc pl-6 space-y-3">
            <li>
              <strong>Essential Cookies</strong> – Necessary for core website
              functionality such as navigation and secure access.
            </li>
            <li>
              <strong>Performance & Analytics Cookies</strong> – Used to analyze
              how visitors interact with the site and improve overall
              performance.
            </li>
            <li>
              <strong>Functionality Cookies</strong> – Allow the website to
              remember preferences such as language or form inputs.
            </li>
            <li>
              <strong>Advertising & Targeting Cookies</strong> – Help deliver
              personalized content and measure marketing effectiveness.
            </li>
          </ul>
        </PrivacySection>

        <PrivacySection title="6. Managing Cookies">
          <p>
            You can manage or disable cookies through your browser settings.
            Please note that disabling certain cookies may affect the
            functionality and performance of the website.
          </p>
        </PrivacySection>

        <PrivacySection title="7. Third-Party Cookies">
          <p>
            We may use third-party services such as analytics tools that place
            cookies on your device. These cookies are governed by the privacy
            policies of the respective providers.
          </p>
        </PrivacySection>

        <PrivacySection title="8. Updates to Cookie Policy">
          <p>
            We may update this Cookie Policy periodically to reflect changes in
            technology, legal requirements, or our business practices. Users are
            encouraged to review this policy regularly.
          </p>
        </PrivacySection>

        {/* ---------------- PRIVACY POLICY ---------------- */}

        <PrivacySection title="9. Privacy Policy Overview">
          <p>
            Kendra International is committed to protecting your personal data
            and ensuring your privacy is respected. This policy explains how we
            collect, process, and use personal data in accordance with
            applicable data protection regulations including the General Data
            Protection Regulation (GDPR).
          </p>
        </PrivacySection>

        <PrivacySection title="10. Personal Data We Collect">
          <ul className="list-disc pl-6 space-y-2">
            <li>Name, email address, phone number, and company details.</li>
            <li>
              Website usage information such as IP address, browser type, and
              pages visited.
            </li>
            <li>
              Communication records including inquiries, emails, or messages
              sent through the website.
            </li>
          </ul>
        </PrivacySection>

        <PrivacySection title="11. How We Collect Your Data">
          <ul className="list-disc pl-6 space-y-2">
            <li>
              Directly from you when you fill out forms or contact us through
              the website.
            </li>
            <li>
              Automatically through cookies and tracking technologies while you
              browse our website.
            </li>
          </ul>
        </PrivacySection>

        <PrivacySection title="12. How We Use Your Personal Data">
          <ul className="list-disc pl-6 space-y-2">
            <li>Respond to inquiries and provide requested services.</li>
            <li>Improve our website and user experience.</li>
            <li>Meet legal and regulatory obligations.</li>
            <li>Send marketing communications where consent is provided.</li>
          </ul>
        </PrivacySection>

        <PrivacySection title="13. Legal Basis for Processing">
          <ul className="list-disc pl-6 space-y-2">
            <li>Consent from the user.</li>
            <li>Performance of a contract.</li>
            <li>Compliance with legal obligations.</li>
            <li>Legitimate business interests.</li>
          </ul>
        </PrivacySection>

        <PrivacySection title="14. Sharing Your Data">
          <p>
            We do not sell or rent personal data. Information may be shared with
            trusted service providers who help operate our website or deliver
            services. Data may also be disclosed if required by law.
          </p>
        </PrivacySection>

        <PrivacySection title="15. Data Retention">
          <p>
            Personal data is retained only for as long as necessary to fulfill
            the purposes described in this policy or to comply with legal
            obligations.
          </p>
        </PrivacySection>

        <PrivacySection title="16. Your Rights Under GDPR">
          <ul className="list-disc pl-6 space-y-2">
            <li>Right to access personal data.</li>
            <li>Right to correct inaccurate information.</li>
            <li>Right to request deletion of personal data.</li>
            <li>Right to restrict processing.</li>
            <li>Right to data portability.</li>
            <li>Right to object to processing.</li>
            <li>Right to withdraw consent at any time.</li>
          </ul>
        </PrivacySection>

        <PrivacySection title="17. Updates to Privacy Policy">
          <p>
            This privacy policy may be updated from time to time to reflect
            changes in legal requirements or our operational practices. The
            latest version will always be available on this page.
          </p>
        </PrivacySection>

        <PrivacySection title="18. Contact Information">
          <p>
            If you have any questions regarding this Cookie and Privacy Policy
            or your personal data, please contact us at:
          </p>

          <p className="mt-4 font-medium">
            Kendra International <br />
            Email: {WebsiteUrlConfig.Mail_Id} <br />
            Website: {process.env.NEXT_PUBLIC_APP_URL}
          </p>

          <p className="mt-4">
            You also have the right to file a complaint with your local data
            protection authority if you believe your data has been handled
            unlawfully.
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
      <h2 className="text-2xl font-bold text-navy mb-4">{title}</h2>
      <div className="text-slate-text/80 leading-relaxed space-y-4">
        {children}
      </div>
    </div>
  );
}