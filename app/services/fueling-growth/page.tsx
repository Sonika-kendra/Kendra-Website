import type { Metadata } from "next";
import Link from "next/link";
import { CheckCircle2 } from "lucide-react";
import { pageMeta } from "@config/site";
import HeroSection from "@components/common/HeroSection";
import { aboutHero } from "@content/about";
import {
  topLineGrowthProcess,
  topLineGrowthBenefits,
} from "@content/services";

export const metadata: Metadata = pageMeta.consulting as Metadata;

export default function TopLineGrowthPage() {
  return (
    <main>
      <HeroSection
        title="Top-Line Growth"
        description="Whether your goal is to strengthen sales performance, improve
              customer economics, or unlock new channels, we help design and
              execute growth strategies grounded in data and market realities."
        imageUrl={aboutHero.image.src}
        imageAlt={aboutHero.image.alt}
        withWave={false}
      >
        <div className="flex flex-wrap gap-4">
          <Link href="/contact" className="btn-hero">
            Accelerate Revenue Growth
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
              How We Drive Top-Line Growth
            </h2>
            <p className="mx-auto mt-3 max-w-2xl text-slate-text/70">
              Data-led strategy, practical execution, and measurable commercial
              outcomes.
            </p>
          </div>
          <div className="grid gap-8 sm:grid-cols-3">
            {topLineGrowthProcess.map((item) => {
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
            Outcomes You Can Expect
          </h2>
          <div className="mx-auto grid max-w-4xl gap-6 md:grid-cols-2">
            {topLineGrowthBenefits.map((benefit) => (
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
            Growth Levers We Activate
          </h2>
          <div className="grid gap-8 md:grid-cols-2">
            <div className="border-l-4 border-white pl-6">
              <h3 className="font-display text-lg font-semibold text-navy">
                Sales Performance
              </h3>
              <p className="mt-2 text-slate-text/70">
                Improve conversion quality, pipeline health, and commercial focus
                in the sales engine.
              </p>
            </div>
            <div className="border-l-4 border-white pl-6">
              <h3 className="font-display text-lg font-semibold text-navy">
                Customer Economics
              </h3>
              <p className="mt-2 text-slate-text/70">
                Strengthen pricing, retention, and unit economics to improve
                growth quality.
              </p>
            </div>
            <div className="border-l-4 border-white pl-6">
              <h3 className="font-display text-lg font-semibold text-navy">
                Channel Expansion
              </h3>
              <p className="mt-2 text-slate-text/70">
                Prioritize and launch channels with the best strategic fit,
                revenue potential, and execution feasibility.
              </p>
            </div>
            <div className="border-l-4 border-white pl-6">
              <h3 className="font-display text-lg font-semibold text-navy">
                Commercial Rhythm
              </h3>
              <p className="mt-2 text-slate-text/70">
                Set practical targets, performance reviews, and ownership models
                that sustain momentum.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-off-white py-16 text-center md:py-20">
        <div className="mx-auto max-w-3xl px-6">
          <h2 className="font-display text-3xl font-bold text-navy sm:text-4xl">
            Ready to Grow Your Top Line?
          </h2>
          <p className="mt-4 text-lg text-slate-text/70">
            Let us prioritize the initiatives that can drive revenue performance
            in your current operating reality.
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
