import type { Metadata } from "next";
import Link from "next/link";
import { CheckCircle2, TrendingUp } from "lucide-react";
import { pageMeta } from "@config/site";
import HeroSection from "@components/common/HeroSection";
import { aboutHero } from "@content/about";
import { maCapabilities, maBenefits, maIndustries } from "@content/services";

export const metadata: Metadata = pageMeta.ma as Metadata;

export default function MAExitPlanningPage() {
  return (
    <main>
      <HeroSection
        title="M&A and Exit Planning"
        description="From assessing strategic options to preparing for transactions, we
              advise on acquisitions, exits, and capital events to maximize
              value and reduce execution risk."
        imageUrl={aboutHero.image.src}
        imageAlt={aboutHero.image.alt}
        withWave={false}
      >
        <div className="flex flex-wrap gap-4">
          <Link href="/contact" className="btn-hero">
            Discuss Transaction Priorities
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
              Our M&A and Exit Capabilities
            </h2>
            <p className="mx-auto mt-3 max-w-2xl text-slate-text/70">
              Advisory support from strategic option assessment through
              transaction execution.
            </p>
          </div>
          <div className="grid gap-8 sm:grid-cols-3">
            {maCapabilities.map((item) => {
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
            Why Teams Partner With Us
          </h2>
          <div className="mx-auto grid max-w-4xl gap-6 md:grid-cols-2">
            {maBenefits.map((benefit) => (
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
            Typical Engagement Flow
          </h2>
          <div className="space-y-8">
            <div className="flex gap-6">
              <div className="flex-shrink-0">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-white font-display font-bold text-navy">
                  1
                </div>
              </div>
              <div>
                <h3 className="font-display text-xl font-semibold text-navy">
                  Clarify Strategic Options
                </h3>
                <p className="mt-2 text-slate-text/70">
                  Define the strategic path, timing considerations, and value
                  priorities before entering execution.
                </p>
              </div>
            </div>
            <div className="flex gap-6">
              <div className="flex-shrink-0">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-white font-display font-bold text-navy">
                  2
                </div>
              </div>
              <div>
                <h3 className="font-display text-xl font-semibold text-navy">
                  Prepare for Transaction
                </h3>
                <p className="mt-2 text-slate-text/70">
                  Prepare financials, operational narratives, and leadership
                  alignment to support efficient diligence.
                </p>
              </div>
            </div>
            <div className="flex gap-6">
              <div className="flex-shrink-0">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-white font-display font-bold text-navy">
                  3
                </div>
              </div>
              <div>
                <h3 className="font-display text-xl font-semibold text-navy">
                  Run Diligence and Structuring
                </h3>
                <p className="mt-2 text-slate-text/70">
                  Support valuation and structure decisions to protect value and
                  reduce downside risk.
                </p>
              </div>
            </div>
            <div className="flex gap-6">
              <div className="flex-shrink-0">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-white font-display font-bold text-navy">
                  4
                </div>
              </div>
              <div>
                <h3 className="font-display text-xl font-semibold text-navy">
                  Execute and Transition
                </h3>
                <p className="mt-2 text-slate-text/70">
                  Navigate closing and transition priorities with practical
                  execution support.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-off-white py-16 md:py-20">
        <div className="mx-auto max-w-4xl px-6 lg:px-8">
          <h2 className="mb-12 text-center font-display text-3xl font-bold text-navy sm:text-4xl">
            Typical Transaction Contexts
          </h2>
          <div className="grid gap-4 sm:grid-cols-2">
            {maIndustries.map((item) => (
              <div key={item} className="flex items-center gap-3">
                <TrendingUp className="h-5 w-5 flex-shrink-0 text-white" strokeWidth={2} />
                <span className="font-medium text-slate-text">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 text-center md:py-20">
        <div className="mx-auto max-w-3xl px-6">
          <h2 className="font-display text-3xl font-bold text-navy sm:text-4xl">
            Considering a Transaction or Exit?
          </h2>
          <p className="mt-4 text-lg text-slate-text/70">
            Let us align your strategic options, preparedness, and execution plan
            before the process begins.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <Link href="/contact" className="btn-primary">
              Start the Conversation
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
