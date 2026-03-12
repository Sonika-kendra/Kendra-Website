// app/disclaimer/page.tsx
import type { Metadata } from "next";
import { pageMeta } from "@config/site";
import { WebsiteUrlConfig } from "@/config/routing";

export const metadata: Metadata = pageMeta.disclaimer as Metadata;

export default function DisclaimerPage() {
  return (
    <section className="bg-card">
      <div className="mx-auto max-w-4xl px-6 lg:px-8 py-24">
        <h1 className="text-4xl font-bold text-navy mb-8">Disclaimer</h1>

        <p className="text-slate-text/60 mb-10">
          Last updated: {new Date().getFullYear()}
        </p>

        <DisclaimerSection title="1. General Information">
          <p>
            The information provided on this website is for general informational
            purposes only. While Kendra International makes every effort to keep
            the information accurate and up to date, no representations or
            warranties of any kind, express or implied, are made about the
            completeness, accuracy, reliability, suitability, or availability
            of the information, services, or related graphics contained on the
            website.
          </p>
        </DisclaimerSection>

        <DisclaimerSection title="2. No Professional Advice">
          <p>
            The content on this website does not constitute professional,
            financial, legal, or tax advice. Users should not rely solely on the
            information provided on this website when making business or
            financial decisions. Professional advice tailored to your specific
            circumstances should always be sought.
          </p>
        </DisclaimerSection>

        <DisclaimerSection title="3. Limitation of Liability">
          <p>
            Under no circumstances shall Kendra International be liable for any
            loss or damage including, without limitation, indirect or
            consequential loss or damage arising out of or in connection with
            the use of this website or reliance on the information provided on
            it.
          </p>
        </DisclaimerSection>

        <DisclaimerSection title="4. External Links">
          <p>
            This website may contain links to third-party websites for
            convenience and additional information. Kendra International has no
            control over the content or nature of those websites and accepts no
            responsibility for their content, privacy policies, or practices.
          </p>
        </DisclaimerSection>

        <DisclaimerSection title="5. Website Availability">
          <p>
            Every effort is made to keep the website running smoothly. However,
            Kendra International takes no responsibility for, and will not be
            liable for, the website being temporarily unavailable due to
            technical issues beyond our control.
          </p>
        </DisclaimerSection>

        <DisclaimerSection title="6. Intellectual Property">
          <p>
            All content on this website, including text, graphics, logos, and
            other materials, is the property of Kendra International unless
            otherwise stated. Unauthorized reproduction or distribution of the
            content is prohibited without prior written permission.
          </p>
        </DisclaimerSection>

        <DisclaimerSection title="7. Changes to This Disclaimer">
          <p>
            Kendra International may update this disclaimer from time to time.
            Any changes will be posted on this page and will take effect
            immediately upon publication.
          </p>
        </DisclaimerSection>

        <DisclaimerSection title="8. Contact Information">
          <p>
            If you have any questions regarding this disclaimer, please contact:
          </p>

          <p className="mt-4 font-medium">
            Kendra International <br />
            Email: {WebsiteUrlConfig.Mail_Id} <br />
            Website: {process.env.NEXT_PUBLIC_APP_URL}
          </p>
        </DisclaimerSection>

        <DisclaimerSection title="9. Regulatory Information">
          <div className="space-y-4">
            <p className="font-medium">Kendra International Limited</p>

            <p>
              A company registered in England and Wales (Company No: 14147272)
              <br />
              Registered office: 148 Percy Road, Twickenham, TW2 6JF
            </p>

            <p className="font-semibold mt-4">Professional Status</p>
            <p>
              Kendra International Limited is a member firm of the Institute of
              Chartered Accountants in England and Wales (ICAEW).
            </p>

            <p>
              Firm registration number: C011008276
              <br />
              Director: Sanjay Swarup ACA (ICAEW Chartered Accountant)
            </p>

            <p className="font-semibold mt-4">
              Professional Indemnity Insurance
            </p>
            <p>
              In accordance with the disclosure requirements of the Provision
              of Services Regulations 2009, details of our professional
              indemnity insurance are as follows:
            </p>

            <p>
              Insurer: Rokstone Underwriting <br />
              Cover arranged through Rokstone Underwriting, a trading name of
              Rokstone Group Ltd (Appointed Representative of Consilium
              Insurance Brokers Ltd, FCA Ref. 306080)
              <br />
              Policy Number: RPI-UK001649-00
              <br />
              Territorial coverage: Worldwide excluding USA and Canada
            </p>

            <p className="font-semibold mt-4">Regulatory Disclosures</p>
            <p>
              VAT registration number: 490 1591 87
              <br />
              Kendra International Limited is subject to the ICAEW Code of
              Ethics and is regulated by ICAEW for the provision of accountancy
              and related services.
            </p>

            <p>
              Our engagement terms, including details of services and fees,
              are available upon request.
            </p>

            <p className="font-semibold mt-4">Complaints Procedure</p>
            <p>
              We are committed to providing a high-quality service. If you have
              a complaint, please contact Sanjay Swarup on
              {" "}
              <a
                href="mailto:s.swarup@kendra-intl.com"
                className="text-primary underline"
              >
                s.swarup@kendra-intl.com
              </a>{" "}
              in the first instance.
            </p>

            <p>
              If your complaint cannot be resolved with us, you may be able to
              refer it to the Institute of Chartered Accountants in England and
              Wales (ICAEW). Further information can be found at
              {" "}
              <a
                href="https://www.icaew.com/regulations"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary underline"
              >
                www.icaew.com/regulations
              </a>.
            </p>
          </div>
        </DisclaimerSection>
      </div>
    </section>
  );
}

/* ---------- Helper Component ---------- */

function DisclaimerSection({
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