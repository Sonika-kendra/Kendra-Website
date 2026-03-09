import type { Metadata } from "next";
import Link from "next/link";
import { CheckCircle2, TrendingUp } from "lucide-react";
import { pageMeta } from "@config/site";
import { maCapabilities, maBenefits, maIndustries } from "@content/services";

export const metadata: Metadata = pageMeta.ma as Metadata;

export default function MAPage() {
  return (
    <main>
      {/* Hero */}
      <section
        className="relative overflow-hidden"
        style={{ background: "var(--hero-gradient)" }}
      >
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-white/5 rounded-full blur-3xl" />
        <div className="absolute -bottom-20 -left-20 w-64 h-64 bg-white/5 rounded-full blur-3xl" />

        <div className="relative mx-auto max-w-7xl px-6 lg:px-8 py-20 md:py-28">
          <div className="max-w-2xl">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white font-display">
              M&A Advisory
            </h1>
            <p className="mt-4 text-lg sm:text-xl text-white/90">
              Strategic growth through acquisitions. From target identification to post-close integration, we guide you through every phase.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Link href="/contact" className="btn-primary">
                Discuss Your Strategy
              </Link>
              <Link href="/about" className="btn-secondary">
                Our Track Record
              </Link>
            </div>
          </div>
        </div>

        <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-none">
          <svg viewBox="0 0 1440 60" className="w-full h-8 sm:h-12" preserveAspectRatio="none" aria-hidden="true">
            <path d="M0,60 L0,20 Q360,0 720,20 Q1080,40 1440,20 L1440,60 Z" fill="white" />
          </svg>
        </div>
      </section>

      {/* Our Capabilities */}
      <section className="py-16 md:py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-navy font-display">
              Our M&A Capabilities
            </h2>
            <p className="mt-3 text-slate-text/70 max-w-2xl mx-auto">
              End-to-end acquisition advisory to maximize deal value and success
            </p>
          </div>
          <div className="grid gap-8 sm:grid-cols-3">
            {maCapabilities.map((item) => {
              const Icon = item.icon;
              return (
                <div
                  key={item.title}
                  className="rounded-xl border border-border bg-white p-8 card-hover"
                >
                  <div className="inline-flex items-center justify-center h-12 w-12 rounded-lg bg-white/20 mb-4">
                    <Icon className="h-6 w-6 text-white" strokeWidth={1.5} />
                  </div>
                  <h3 className="text-xl font-bold font-display text-navy">
                    {item.title}
                  </h3>
                  <p className="mt-3 text-slate-text/70 leading-relaxed">
                    {item.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Why Partner With Us */}
      <section className="py-16 md:py-20 bg-off-white">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <h2 className="text-3xl sm:text-4xl font-bold text-navy font-display text-center mb-12">
            Why Choose Kendra for M&A
          </h2>
          <div className="grid gap-6 md:grid-cols-2 max-w-4xl mx-auto">
            {maBenefits.map((benefit) => (
              <div key={benefit} className="flex items-start gap-4">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center h-10 w-10 rounded-lg bg-white/20">
                    <CheckCircle2 className="h-6 w-6 text-white" strokeWidth={2} />
                  </div>
                </div>
                <div>
                  <p className="text-slate-text font-medium">{benefit}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Process */}
      <section className="py-16 md:py-20">
        <div className="mx-auto max-w-4xl px-6 lg:px-8">
          <h2 className="text-3xl sm:text-4xl font-bold text-navy font-display text-center mb-12">
            Our M&A Process
          </h2>
          <div className="space-y-8">
            <div className="flex gap-6">
              <div className="flex-shrink-0">
                <div className="flex items-center justify-center h-12 w-12 rounded-full bg-white text-navy font-bold font-display">
                  1
                </div>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-navy font-display">Strategy & Planning</h3>
                <p className="mt-2 text-slate-text/70">
                  Define acquisition criteria, identify target markets, and build an acquisition roadmap aligned with your strategic goals.
                </p>
              </div>
            </div>
            <div className="flex gap-6">
              <div className="flex-shrink-0">
                <div className="flex items-center justify-center h-12 w-12 rounded-full bg-white text-navy font-bold font-display">
                  2
                </div>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-navy font-display">Target Identification & Sourcing</h3>
                <p className="mt-2 text-slate-text/70">
                  Leverage our network and proprietary tools to identify and assess potential targets that match your criteria.
                </p>
              </div>
            </div>
            <div className="flex gap-6">
              <div className="flex-shrink-0">
                <div className="flex items-center justify-center h-12 w-12 rounded-full bg-white text-navy font-bold font-display">
                  3
                </div>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-navy font-display">Due Diligence & Valuation</h3>
                <p className="mt-2 text-slate-text/70">
                  Conduct comprehensive financial, operational, and legal due diligence to ensure informed decision-making.
                </p>
              </div>
            </div>
            <div className="flex gap-6">
              <div className="flex-shrink-0">
                <div className="flex items-center justify-center h-12 w-12 rounded-full bg-white text-navy font-bold font-display">
                  4
                </div>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-navy font-display">Deal Negotiation & Closing</h3>
                <p className="mt-2 text-slate-text/70">
                  Optimize deal structure, negotiate favorable terms, and navigate closing logistics to maximize value.
                </p>
              </div>
            </div>
            <div className="flex gap-6">
              <div className="flex-shrink-0">
                <div className="flex items-center justify-center h-12 w-12 rounded-full bg-white text-navy font-bold font-display">
                  5
                </div>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-navy font-display">Post-Acquisition Integration</h3>
                <p className="mt-2 text-slate-text/70">
                  Support 100-day integration planning, identify quick wins, and drive value capture post-close.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Industries We Serve */}
      <section className="py-16 md:py-20 bg-off-white">
        <div className="mx-auto max-w-4xl px-6 lg:px-8">
          <h2 className="text-3xl sm:text-4xl font-bold text-navy font-display text-center mb-12">
            Industries & Deal Types
          </h2>
          <div className="grid gap-4 sm:grid-cols-2">
            {maIndustries.map((item) => (
              <div key={item} className="flex items-center gap-3">
                <TrendingUp className="h-5 w-5 text-white flex-shrink-0" strokeWidth={2} />
                <span className="text-slate-text font-medium">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 md:py-20 text-center">
        <div className="mx-auto max-w-3xl px-6">
          <h2 className="text-3xl sm:text-4xl font-bold text-navy font-display">
            Ready to Pursue Your Next Acquisition?
          </h2>
          <p className="mt-4 text-slate-text/70 text-lg">
            Let&apos;s discuss your growth strategy and how we can support your M&amp;A objectives.
          </p>
          <div className="mt-8 flex flex-wrap gap-4 justify-center">
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
