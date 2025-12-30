// app/services/cost/page.tsx
import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Cost Rationalization | Kendra International",
  description:
    "Cost rationalization and optimization services focused on improving efficiency while supporting long-term growth.",
};

export default function CostRationalizationPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-brand.navy text-white">
        <div className="container py-24 text-center">
          <h1 className="text-5xl mb-6">
            Cost Rationalization
          </h1>
          <p className="max-w-3xl mx-auto text-lg text-slate-300">
            Helping organizations optimize costs without compromising
            performance, capability, or future growth.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="bg-white">
        <div className="container py-24 max-w-4xl">
          <ContentBlock title="Our Philosophy">
            <p>
              Cost rationalization is not about indiscriminate cost cutting.
              It is about aligning cost structures with strategic priorities
              while preserving the capabilities that drive value creation.
            </p>
          </ContentBlock>

          <ContentBlock title="How We Help">
            <ul className="list-disc pl-6 space-y-3">
              <li>Cost structure and spend analysis</li>
              <li>Operational efficiency assessments</li>
              <li>Zero-based budgeting and cost control frameworks</li>
              <li>Process optimization and simplification</li>
              <li>Supplier and procurement optimization</li>
            </ul>
          </ContentBlock>

          <ContentBlock title="When Cost Rationalization Is Needed">
            <ul className="list-disc pl-6 space-y-3">
              <li>Periods of margin pressure or declining profitability</li>
              <li>Post-merger or integration scenarios</li>
              <li>Rapid growth leading to cost inefficiencies</li>
              <li>Preparation for investment, sale, or restructuring</li>
            </ul>
          </ContentBlock>

          <ContentBlock title="Our Value">
            <p>
              We combine analytical rigor with practical execution experience.
              Our focus is on delivering sustainable cost improvements that
              support strategic objectives and long-term performance.
            </p>
          </ContentBlock>

          {/* CTA */}
          <div className="mt-20 text-center">
            <Link
              href="/contact"
              className="inline-block px-10 py-4 bg-brand.gold text-brand.navy rounded-md font-medium hover:bg-brand.goldSoft transition"
            >
              Discuss Cost Optimization
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}

/* ---------- Helper ---------- */

function ContentBlock({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <div className="mb-16">
      <h2 className="text-3xl mb-4">
        {title}
      </h2>
      <div className="text-brand.muted leading-relaxed space-y-4">
        {children}
      </div>
    </div>
  );
}
