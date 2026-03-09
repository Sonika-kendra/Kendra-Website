import type { Metadata } from "next";
import Link from "next/link";
import { pageMeta } from "@config/site";
import { servicesOverview } from "@content/services";
import { WebsiteUrlConfig } from "@/config/routing";

import HeroSection from "@components/common/HeroSection";
import { aboutHero } from "@content/about";

export const metadata: Metadata = pageMeta.services as Metadata;

export default function ServicesPage() {
  return (
    <main>
      <HeroSection
        title="Service Lines at Kendra"
        description="In every engagement, our objective is to improve financial
            performance and strategic clarity while remaining practical,
            focused, and outcome-driven."
        imageUrl={aboutHero.image.src}
        imageAlt={aboutHero.image.alt}
        withWave={false}
      />

      <section className="py-16 md:py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid gap-8 md:grid-cols-2">
            {servicesOverview.map((service) => {
              const Icon = service.icon;
              return (
                <Link
                  key={service.title}
                  href={service.href}
                  className="card-hover group flex flex-col p-8"
                >
                  <div className="mb-4 flex items-start justify-between">
                    <div>
                      <p className="text-xs font-semibold uppercase tracking-wider text-slate-text/60">
                        {service.subtitle}
                      </p>
                      <h2 className="mt-1 font-display text-2xl font-bold text-navy transition-colors group-hover:text-white">
                        {service.title}
                      </h2>
                    </div>
                    <div className="rounded-lg bg-white/20 p-3 transition-colors group-hover:bg-white/30">
                      <Icon className="h-6 w-6 text-white" strokeWidth={1.5} />
                    </div>
                  </div>

                  <p className="mt-4 flex-1 text-sm leading-relaxed text-slate-text/70">
                    {service.description}
                  </p>

                  <div className="mt-6 space-y-2">
                    {service.benefits.map((benefit) => (
                      <p
                        key={benefit}
                        className="flex items-center gap-2 text-xs text-slate-text/60"
                      >
                        <span className="h-1 w-1 rounded-full bg-white" />
                        {benefit}
                      </p>
                    ))}
                  </div>

                  <span className="mt-6 inline-flex text-sm font-medium text-navy transition-colors group-hover:text-white">
                    Learn More &rarr;
                  </span>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      <section className="bg-off-white py-16 md:py-20">
        <div className="mx-auto max-w-7xl px-6 text-center lg:px-8">
          <h2 className="text-3xl font-bold text-navy sm:text-4xl">How We Work</h2>
          <p className="mx-auto mt-3 max-w-2xl text-slate-text/70">
            Practical advisory support focused on measurable outcomes.
          </p>

          <div className="mt-12 grid gap-6 md:grid-cols-3">
            <div className="rounded-xl border border-border bg-white p-6">
              <h3 className="font-display font-semibold text-navy">Outcome-Driven</h3>
              <p className="mt-2 text-sm text-slate-text/70">
                Every engagement is designed to improve financial performance and
                strategic clarity.
              </p>
            </div>
            <div className="rounded-xl border border-border bg-white p-6">
              <h3 className="font-display font-semibold text-navy">Practical by Design</h3>
              <p className="mt-2 text-sm text-slate-text/70">
                We focus on actions your team can execute quickly in live operating
                conditions.
              </p>
            </div>
            <div className="rounded-xl border border-border bg-white p-6">
              <h3 className="font-display font-semibold text-navy">Senior-Led Delivery</h3>
              <p className="mt-2 text-sm text-slate-text/70">
                Direct involvement from experienced advisors through planning,
                execution, and follow-through.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 text-center md:py-20">
        <div className="mx-auto max-w-3xl px-6">
          <h2 className="text-3xl font-bold text-navy sm:text-4xl">
            Ready to Discuss Your Priorities?
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-slate-text/70">
            Let us identify the right service line for your growth, margin, cash,
            or transaction agenda.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <Link href="/contact" className="btn-primary">
              Schedule a Consultation
            </Link>
            <Link
              href={WebsiteUrlConfig.Home}
              className="inline-flex items-center justify-center rounded-lg border border-navy px-8 py-3.5 text-sm font-semibold text-navy transition-all hover:bg-navy hover:text-white"
            >
              Back to Home
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
