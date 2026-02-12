import type { Metadata } from "next";
import Link from "next/link";
import { TrendingUp, CheckCircle2, Zap, BarChart3 } from "lucide-react";
import { pageMeta } from "@/config/site";

export const metadata: Metadata = pageMeta.consulting as Metadata;

const whatWeDo = [
  {
    title: "Outsource",
    description: "Your finance function to reduce costs and free up internal resources for strategic initiatives",
    icon: Zap,
  },
  {
    title: "Automate",
    description: "Processes using modern technology and proven frameworks for faster, error-free operations",
    icon: BarChart3,
  },
  {
    title: "Upgrade",
    description: "Reporting and analytics to give you real-time visibility into financial performance",
    icon: TrendingUp,
  },
];

const benefits = [
  "30-50% reduction in finance function costs",
  "Real-time financial reporting and insights",
  "Improved compliance and audit readiness",
  "Scalable infrastructure that grows with you",
  "Access to CFO-level expertise",
  "Technology implementation included",
];

export default function FaaSPage() {
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
              Finance as a Service (FaaS)
            </h1>
            <p className="mt-4 text-lg sm:text-xl text-white/90">
              Outsource your finance function to experienced CFOs and finance leaders. Reduce costs, improve controls, and get real-time insights.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Link href="/contact" className="btn-primary">
                Get Started
              </Link>
              <Link href="/about" className="btn-secondary">
                Learn More
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

      {/* What We Do */}
      <section className="py-16 md:py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-navy font-display">
              What We Deliver
            </h2>
            <p className="mt-3 text-slate-text/70 max-w-2xl mx-auto">
              Comprehensive financial management services designed for growing businesses
            </p>
          </div>
          <div className="mt-10 grid gap-8 sm:grid-cols-3">
            {whatWeDo.map((item) => {
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
            Why Choose Our FaaS Solution?
          </h2>
          <div className="grid gap-6 md:grid-cols-2">
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

      {/* How It Works */}
      <section className="py-16 md:py-20">
        <div className="mx-auto max-w-4xl px-6 lg:px-8">
          <h2 className="text-3xl sm:text-4xl font-bold text-navy font-display text-center mb-12">
            How It Works
          </h2>
          <div className="space-y-8">
            <div className="flex gap-6">
              <div className="flex-shrink-0">
                <div className="flex items-center justify-center h-12 w-12 rounded-full bg-white text-navy font-bold font-display">
                  1
                </div>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-navy font-display">Assessment</h3>
                <p className="mt-2 text-slate-text/70">
                  We analyze your current finance function, identify inefficiencies, and quantify potential savings.
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
                <h3 className="text-xl font-semibold text-navy font-display">Optimization</h3>
                <p className="mt-2 text-slate-text/70">
                  We implement automation, improve processes, and set up modern tools for better financial management.
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
                <h3 className="text-xl font-semibold text-navy font-display">Execution &amp; Support</h3>
                <p className="mt-2 text-slate-text/70">
                  Our team takes over day-to-day finance operations, reporting, and compliance while training your staff.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 md:py-20 text-center bg-off-white">
        <div className="mx-auto max-w-3xl px-6">
          <h2 className="text-3xl sm:text-4xl font-bold text-navy font-display">
            Ready to Transform Your Finance Function?
          </h2>
          <p className="mt-4 text-slate-text/70 text-lg">
            Let&apos;s discuss how FaaS can reduce costs and improve financial visibility for your business.
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
