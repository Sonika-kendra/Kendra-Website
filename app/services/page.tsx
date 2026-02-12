import type { Metadata } from "next";
import Link from "next/link";
import { pageMeta } from "@config/site";
import { Wallet, Zap, Building2 } from "lucide-react";

export const metadata: Metadata = pageMeta.services as Metadata;

const services = [
  {
    title: "Finance as a Service",
    subtitle: "FaaS",
    description:
      "Outsource your entire finance function or specific operations. Get CFO-level expertise, automated processes, and upgraded reporting—all at predictable cost.",
    benefits: ["Cost reduction", "Process automation", "Better reporting"],
    icon: Wallet,
    href: "/services/consulting",
  },
  {
    title: "Operational Transformation",
    subtitle: "Fix & Future-Proof",
    description:
      "Identify operational bottlenecks and implement strategic changes. Improve efficiency, reduce costs, and strengthen your financial performance.",
    benefits: ["Process optimization", "Cost cuts", "Efficiency gains"],
    icon: Zap,
    href: "/services/cost",
  },
  {
    title: "Buy & Build Strategy",
    subtitle: "M&A Advisory",
    description:
      "Navigate the complete M&A journey. From acquisition targeting and due diligence to post-merger integration, we ensure strategic fit and value creation.",
    benefits: ["Deal sourcing", "Due diligence", "Integration support"],
    icon: Building2,
    href: "/services/ma",
  },
];

export default function ServicesPage() {
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
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-white/5 rounded-full blur-3xl" />
        
        <div className="relative mx-auto max-w-7xl px-6 lg:px-8 py-20 md:py-28">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white font-display">
            Strategic Services for Growth
          </h1>
          <p className="mt-3 text-lg text-white/90 max-w-2xl">
            Tailored solutions to scale your business smarter, faster, and more profitably.
          </p>
        </div>
        <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-none">
          <svg viewBox="0 0 1440 60" className="w-full h-8 sm:h-12" preserveAspectRatio="none" aria-hidden="true">
            <path d="M0,60 L0,20 Q360,0 720,20 Q1080,40 1440,20 L1440,60 Z" fill="white" />
          </svg>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16 md:py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid gap-8 md:grid-cols-3">
            {services.map((service) => {
              const Icon = service.icon;
              return (
                <Link
                  key={service.title}
                  href={service.href}
                  className="card-hover group flex flex-col p-8"
                >
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <p className="text-xs font-semibold text-slate-text/60 uppercase tracking-wider">{service.subtitle}</p>
                      <h2 className="text-2xl font-bold font-display text-navy group-hover:text-white transition-colors mt-1">
                        {service.title}
                      </h2>
                    </div>
                    <div className="p-3 bg-white/20 rounded-lg group-hover:bg-white/30 transition-colors">
                      <Icon className="h-6 w-6 text-white" strokeWidth={1.5} />
                    </div>
                  </div>
                  
                  <p className="mt-4 text-sm text-slate-text/70 leading-relaxed flex-1">
                    {service.description}
                  </p>
                  
                  <div className="mt-6 space-y-2">
                    {service.benefits.map((benefit) => (
                      <p key={benefit} className="text-xs text-slate-text/60 flex items-center gap-2">
                        <span className="h-1 w-1 rounded-full bg-white" />
                        {benefit}
                      </p>
                    ))}
                  </div>
                  
                  <span className="mt-6 inline-flex text-sm font-medium text-navy group-hover:text-white transition-colors">
                    Learn More &rarr;
                  </span>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* Why Choose Section */}
      <section className="py-16 md:py-20 bg-off-white">
        <div className="mx-auto max-w-7xl px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-navy">Why Our Services Work</h2>
          <p className="mt-3 text-slate-text/70 max-w-2xl mx-auto">We combine deep expertise, rapid execution, and measurable results</p>
          
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            <div className="bg-white rounded-xl p-6 border border-border">
              <h3 className="font-display font-semibold text-navy">Expert Team</h3>
              <p className="mt-2 text-sm text-slate-text/70">20+ years of combined experience across finance, operations, and M&A</p>
            </div>
            <div className="bg-white rounded-xl p-6 border border-border">
              <h3 className="font-display font-semibold text-navy">Rapid Execution</h3>
              <p className="mt-2 text-sm text-slate-text/70">Results in days or weeks, not months—proven methodologies for speed</p>
            </div>
            <div className="bg-white rounded-xl p-6 border border-border">
              <h3 className="font-display font-semibold text-navy">Measurable Impact</h3>
              <p className="mt-2 text-sm text-slate-text/70">Clear KPIs and accountability—we&apos;re invested in your success</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 md:py-20 text-center">
        <div className="mx-auto max-w-3xl px-6">
          <h2 className="text-3xl sm:text-4xl font-bold text-navy">
            Ready to Transform Your Business?
          </h2>
          <p className="mt-4 text-slate-text/70 max-w-2xl mx-auto">
            Let&apos;s discuss how our services can drive growth and unlock hidden value
          </p>
          <div className="mt-8 flex gap-4 justify-center flex-wrap">
            <Link
              href="/contact"
              className="btn-primary"
            >
              Schedule a Consultation
            </Link>
            <Link
              href="/"
              className="inline-flex items-center justify-center rounded-lg border border-navy text-navy px-8 py-3.5 text-sm font-semibold transition-all hover:bg-navy hover:text-white"
            >
              Back to Home
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
