import type { Metadata } from "next";
import Link from "next/link";
import { CheckCircle2, Zap, Target, BarChart3 } from "lucide-react";
import { pageMeta } from "@config/site";

export const metadata: Metadata = pageMeta.cost as Metadata;

const process = [
  {
    title: "Diagnose",
    description: "Identify cost drivers and inefficiencies across your organization through detailed analysis.",
    icon: Target,
  },
  {
    title: "Optimize",
    description: "Implement targeted cost reduction initiatives without compromising quality or growth.",
    icon: Zap,
  },
  {
    title: "Monitor",
    description: "Track savings with KPIs and dashboards to ensure sustained cost management.",
    icon: BarChart3,
  },
];

const benefits = [
  "15-35% cost reduction in targeted areas",
  "Improved operational efficiency",
  "Better resource allocation",
  "Sustainable cost controls",
  "Enhanced profitability margins",
  "Faster path to positive unit economics",
];

export default function CostOptimizationPage() {
  return (
    <main>
      {/* Hero */}
      <section
        className="relative overflow-hidden"
        style={{
          background:
            "linear-gradient(135deg, #0f172a 0%, #1e293b 50%, #334155 100%)",
        }}
      >
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-white/5 rounded-full blur-3xl" />
        <div className="absolute -bottom-20 -left-20 w-64 h-64 bg-white/5 rounded-full blur-3xl" />

        <div className="relative mx-auto max-w-7xl px-6 lg:px-8 py-20 md:py-28">
          <div className="max-w-2xl">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white font-display">
              Cost Optimization & Transformation
            </h1>
            <p className="mt-4 text-lg sm:text-xl text-white/90">
              Right-size your costs while maintaining growth. We identify inefficiencies, eliminate waste, and build sustainable cost structures.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Link href="/contact" className="btn-primary">
                Start Your Transformation
              </Link>
              <Link href="/about" className="btn-secondary">
                Our Approach
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

      {/* Our Approach */}
      <section className="py-16 md:py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-navy font-display">
              Our 3-Phase Approach
            </h2>
            <p className="mt-3 text-slate-text/70 max-w-2xl mx-auto">
              From diagnosis to sustained savings
            </p>
          </div>
          <div className="grid gap-8 sm:grid-cols-3">
            {process.map((item) => {
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

      {/* Benefits */}
      <section className="py-16 md:py-20 bg-off-white">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <h2 className="text-3xl sm:text-4xl font-bold text-navy font-display text-center mb-12">
            What You&apos;ll Achieve
          </h2>
          <div className="grid gap-6 md:grid-cols-2 max-w-4xl mx-auto">
            {benefits.map((benefit) => (
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

      {/* Key Areas We Optimize */}
      <section className="py-16 md:py-20">
        <div className="mx-auto max-w-4xl px-6 lg:px-8">
          <h2 className="text-3xl sm:text-4xl font-bold text-navy font-display text-center mb-12">
            Cost Reduction Areas
          </h2>
          <div className="grid gap-8 md:grid-cols-2">
            <div className="border-l-4 border-white pl-6">
              <h3 className="text-lg font-semibold text-navy font-display">Operations</h3>
              <p className="mt-2 text-slate-text/70">
                Streamline workflows, eliminate redundancies, and optimize resource allocation across your operations.
              </p>
            </div>
            <div className="border-l-4 border-white pl-6">
              <h3 className="text-lg font-semibold text-navy font-display">Technology & Systems</h3>
              <p className="mt-2 text-slate-text/70">
                Rationalize tech stack, consolidate subscriptions, and implement automation for better ROI.
              </p>
            </div>
            <div className="border-l-4 border-white pl-6">
              <h3 className="text-lg font-semibold text-navy font-display">Procurement & Vendor Management</h3>
              <p className="mt-2 text-slate-text/70">
                Renegotiate contracts, consolidate suppliers, and establish better procurement processes.
              </p>
            </div>
            <div className="border-l-4 border-white pl-6">
              <h3 className="text-lg font-semibold text-navy font-display">Org Structure & Staffing</h3>
              <p className="mt-2 text-slate-text/70">
                Right-size your team, improve productivity, and eliminate organizational redundancies.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 md:py-20 text-center bg-off-white">
        <div className="mx-auto max-w-3xl px-6">
          <h2 className="text-3xl sm:text-4xl font-bold text-navy font-display">
            Ready to Improve Your Bottom Line?
          </h2>
          <p className="mt-4 text-slate-text/70 text-lg">
            Let&apos;s explore cost optimization opportunities specific to your business.
          </p>
          <div className="mt-8 flex flex-wrap gap-4 justify-center">
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
