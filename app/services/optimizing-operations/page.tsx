import type { Metadata } from "next";
import Link from "next/link";
import { CheckCircle2 } from "lucide-react";
import { pageMeta } from "@config/site";
import HeroSection from "@components/common/HeroSection";
import { aboutHero } from "@content/about";
import {
  costRationalisationProcess,
  costRationalisationBenefits,
} from "@content/services";

export const metadata: Metadata = pageMeta.cost as Metadata;

export default function CostRationalisationPage() {
  return (
    <main>
      <HeroSection
        title="Cost Rationalisation"
        description="We identify inefficiencies across your operating model and help
              you redesign cost structures to improve margins while protecting
              critical capabilities."
        imageUrl={aboutHero.image.src}
        imageAlt={aboutHero.image.alt}
        withWave={true}
      >
        <div className="flex flex-wrap gap-4">
          <Link href="/contact" className="btn-hero">
            Improve Margins
          </Link>
          <Link href="/services" className="btn-hero">
            All Services
          </Link>
        </div>
      </HeroSection>

      <section className="py-16 md:py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mb-12 text-center">
            <h2 className="font-display text-3xl font-bold text-navy sm:text-4xl">
              Our 3-Phase Approach
            </h2>
            <p className="mx-auto mt-3 max-w-2xl text-slate-text/70">
              Move from inefficiency diagnosis to durable margin improvement.
            </p>
          </div>
          <div className="grid gap-8 sm:grid-cols-3">
            {costRationalisationProcess.map((item) => {
              const Icon = item.icon;
              return (
                <div
                  key={item.title}
                  className="card-hover rounded-xl border border-border bg-white p-8"
                >
                  <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-white/20">
                    <Icon className="h-6 w-6 text-white" strokeWidth={1.5} />
                  </div>
                  <h3 className="font-display text-xl font-bold text-navy">
                    {item.title}
                  </h3>
                  <p className="mt-3 leading-relaxed text-slate-text/70">
                    {item.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="bg-off-white py-16 md:py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <h2 className="mb-12 text-center font-display text-3xl font-bold text-navy sm:text-4xl">
            What You Can Improve
          </h2>
          <div className="mx-auto grid max-w-4xl gap-6 md:grid-cols-2">
            {costRationalisationBenefits.map((benefit) => (
              <div key={benefit} className="flex items-start gap-4">
                <div className="flex-shrink-0">
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-white/20">
                    <CheckCircle2 className="h-6 w-6 text-white" strokeWidth={2} />
                  </div>
                </div>
                <div>
                  <p className="font-medium text-slate-text">{benefit}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 md:py-20">
        <div className="mx-auto max-w-4xl px-6 lg:px-8">
          <h2 className="mb-12 text-center font-display text-3xl font-bold text-navy sm:text-4xl">
            Common Cost Focus Areas
          </h2>
          <div className="grid gap-8 md:grid-cols-2">
            <div className="border-l-4 border-white pl-6">
              <h3 className="font-display text-lg font-semibold text-navy">
                Operating Model
              </h3>
              <p className="mt-2 text-slate-text/70">
                Remove duplication, simplify structures, and align accountability
                with value delivery.
              </p>
            </div>
            <div className="border-l-4 border-white pl-6">
              <h3 className="font-display text-lg font-semibold text-navy">
                Spend and Procurement
              </h3>
              <p className="mt-2 text-slate-text/70">
                Improve supplier economics, category control, and purchasing
                discipline.
              </p>
            </div>
            <div className="border-l-4 border-white pl-6">
              <h3 className="font-display text-lg font-semibold text-navy">
                Process and Systems
              </h3>
              <p className="mt-2 text-slate-text/70">
                Simplify workflows and reduce waste through practical process and
                systems redesign.
              </p>
            </div>
            <div className="border-l-4 border-white pl-6">
              <h3 className="font-display text-lg font-semibold text-navy">
                Governance and Controls
              </h3>
              <p className="mt-2 text-slate-text/70">
                Build consistent decision rules and cost ownership to sustain
                gains over time.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-off-white py-16 text-center md:py-20">
        <div className="mx-auto max-w-3xl px-6">
          <h2 className="font-display text-3xl font-bold text-navy sm:text-4xl">
            Ready to Strengthen Margins?
          </h2>
          <p className="mt-4 text-lg text-slate-text/70">
            Let us identify practical cost levers that improve profitability
            without weakening critical capabilities.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <Link href="/contact" className="btn-primary">
              Schedule Consultation
            </Link>
            <Link href="/services" className="btn-secondary">
              Back to Services
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
