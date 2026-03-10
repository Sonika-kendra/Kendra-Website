import type { Metadata } from "next";
import Link from "next/link";
import { CheckCircle2 } from "lucide-react";
import { pageMeta } from "@config/site";
import HeroSection from "@components/common/HeroSection";
import { aboutHero } from "@content/about";
import {
  liquidityImprovementProcess,
  liquidityImprovementBenefits,
} from "@content/services";

export const metadata: Metadata = pageMeta.liquidity as Metadata;

export default function LiquidityImprovementPage() {
  return (
    <main>
      <HeroSection
        title="Liquidity Improvement"
        description="We support businesses in improving cash generation, managing
              working capital, and building financial resilience in periods of
              pressure or transition."
        imageUrl={aboutHero.image.src}
        imageAlt={aboutHero.image.alt}
        withWave={false}
      >
        <div className="flex flex-wrap gap-4">
          <Link href="/contact" className="btn-hero">
            Strengthen Liquidity
          </Link>
          <Link href="/services" className="btn-hero">
            All Services
          </Link>
        </div>
      </HeroSection>

      <section className="py-10 md:py-14">
        <div className="w-full px-6 lg:px-8">
          <div className="mb-12 text-center">
            <h2 className="font-display text-3xl font-bold text-navy sm:text-4xl">
              Liquidity Improvement Framework
            </h2>
            <p className="mx-auto mt-3 max-w-2xl text-slate-text/70">
              Improve cash visibility, release working capital, and build durable
              financial resilience.
            </p>
          </div>
          <div className="grid gap-8 sm:grid-cols-3">
            {liquidityImprovementProcess.map((item) => {
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

      <section className="bg-off-white py-10 md:py-14">
        <div className="w-full px-6 lg:px-8">
          <h2 className="mb-12 text-center font-display text-3xl font-bold text-navy sm:text-4xl">
            What You Can Improve
          </h2>
          <div className="grid w-full gap-6 md:grid-cols-2">
            {liquidityImprovementBenefits.map((benefit) => (
              <div
                key={benefit}
                className="group flex items-start gap-4 rounded-xl bg-white p-6 shadow-sm ring-1 ring-border transition-all hover:-translate-y-1 hover:shadow-md"
              >
                <div className="flex-shrink-0">
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-navy/5 text-navy transition-colors group-hover:bg-navy group-hover:text-white">
                    <CheckCircle2 className="h-6 w-6" strokeWidth={2} />
                  </div>
                </div>
                <div className="pt-2">
                  <p className="font-medium text-slate-text">{benefit}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-10 md:py-14">
        <div className="w-full px-6 lg:px-8">
          <h2 className="mb-12 text-center font-display text-3xl font-bold text-navy sm:text-4xl">
            Priority Liquidity Levers
          </h2>
          <div className="grid gap-8 md:grid-cols-2">
            <div className="group relative overflow-hidden rounded-2xl bg-white p-8 shadow-sm ring-1 ring-border transition-all hover:-translate-y-1 hover:shadow-xl">
              <div className="absolute left-0 top-0 h-1 w-full bg-navy/10 transition-colors group-hover:bg-accent" />
              <h3 className="font-display text-xl font-bold text-navy">
                Cash Forecasting
              </h3>
              <p className="mt-3 leading-relaxed text-slate-text/70">
                Build clear short-term and medium-term forecasts to improve cash
                decision quality.
              </p>
            </div>
            <div className="group relative overflow-hidden rounded-2xl bg-white p-8 shadow-sm ring-1 ring-border transition-all hover:-translate-y-1 hover:shadow-xl">
              <div className="absolute left-0 top-0 h-1 w-full bg-navy/10 transition-colors group-hover:bg-accent" />
              <h3 className="font-display text-xl font-bold text-navy">
                Working Capital
              </h3>
              <p className="mt-3 leading-relaxed text-slate-text/70">
                Improve receivables, payables, and inventory cycles to release
                trapped cash.
              </p>
            </div>
            <div className="group relative overflow-hidden rounded-2xl bg-white p-8 shadow-sm ring-1 ring-border transition-all hover:-translate-y-1 hover:shadow-xl">
              <div className="absolute left-0 top-0 h-1 w-full bg-navy/10 transition-colors group-hover:bg-accent" />
              <h3 className="font-display text-xl font-bold text-navy">
                Cash Controls
              </h3>
              <p className="mt-3 leading-relaxed text-slate-text/70">
                Strengthen payment governance and spending discipline to protect
                liquidity.
              </p>
            </div>
            <div className="group relative overflow-hidden rounded-2xl bg-white p-8 shadow-sm ring-1 ring-border transition-all hover:-translate-y-1 hover:shadow-xl">
              <div className="absolute left-0 top-0 h-1 w-full bg-navy/10 transition-colors group-hover:bg-accent" />
              <h3 className="font-display text-xl font-bold text-navy">
                Contingency Planning
              </h3>
              <p className="mt-3 leading-relaxed text-slate-text/70">
                Prepare practical response plans for operating pressure,
                refinancing events, or transition periods.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-off-white py-10 text-center md:py-14">
        <div className="w-full px-6">
          <h2 className="font-display text-3xl font-bold text-navy sm:text-4xl">
            Ready to Improve Cash Resilience?
          </h2>
          <p className="mt-4 text-lg text-slate-text/70">
            Let us identify the most practical liquidity actions for your current
            business context.
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
