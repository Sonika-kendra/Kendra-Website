// app/services/consulting/page.tsx
import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Business Consulting | Kendra International",
  description:
    "Strategic business consulting services focused on growth, performance improvement, and operational excellence.",
};

export default function ConsultingPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-brand.navy text-white">
        <div className="container py-24 text-center">
          <h1 className="text-5xl mb-6">
            Business Consulting
          </h1>
          <p className="max-w-3xl mx-auto text-lg text-slate-300">
            Strategic advisory services designed to help organizations improve
            performance, scale effectively, and navigate complex challenges.
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="bg-white">
        <div className="container py-24 max-w-4xl">
          <ContentBlock title="Our Approach">
            <p>
              We partner with leadership teams to identify strategic priorities,
              optimize operations, and unlock sustainable growth. Our approach
              is data-driven, pragmatic, and execution-focused.
            </p>
          </ContentBlock>

          <ContentBlock title="What We Support">
            <ul className="list-disc pl-6 space-y-3">
              <li>Corporate and business strategy development</li>
              <li>Operational efficiency and process improvement</li>
              <li>Organizational design and transformation</li>
              <li>Performance management frameworks</li>
              <li>Change management and execution support</li>
            </ul>
          </ContentBlock>

          <ContentBlock title="Who We Work With">
            <p>
              We support growth-focused companies, private equity–backed
              businesses, and established organizations navigating periods of
              change, expansion, or restructuring.
            </p>
          </ContentBlock>

          <ContentBlock title="Why Kendra International">
            <p>
              Our consultants combine strategic insight with real-world
              execution experience. We focus on delivering practical solutions
              that create measurable and lasting impact.
            </p>
          </ContentBlock>

          {/* CTA */}
          <div className="mt-20 text-center">
            <Link
              href="/contact"
              className="inline-block px-10 py-4 bg-brand.gold text-brand.navy rounded-md font-medium hover:bg-brand.goldSoft transition"
            >
              Discuss Your Requirements
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
