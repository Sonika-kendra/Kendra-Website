import type { Metadata } from "next";
import Link from "next/link";
import { TrendingUp, CheckCircle2 } from "lucide-react";

export const metadata: Metadata = {
  title: "FaaS - Finance Function as a Service | Kendra International",
  description:
    "Outsource, automate, and upgrade your finance function with Kendra International's FaaS service.",
};

const whatWeDo = [
  {
    title: "Outsource",
    description: "Your finance function to reduce costs",
  },
  {
    title: "Automate",
    description: "Processes using modern technology",
  },
  {
    title: "Upgrade",
    description: "Reporting and analytics",
  },
];

const benefits = [
  "Focused financial management",
  "Scalable solutions",
  "Improved accuracy",
];

export default function FaaSPage() {
  return (
    <main>
      {/* Hero */}
      <section
        className="relative overflow-hidden"
        style={{
          background:
            "linear-gradient(135deg, #4a6a8a 0%, #8096af 50%, #a3b8cc 100%)",
        }}
      >
        <div className="absolute bottom-0 right-0 w-1/2 h-1/2 opacity-15">
          <svg viewBox="0 0 400 400" className="w-full h-full" aria-hidden="true">
            <circle cx="400" cy="400" r="350" fill="none" stroke="white" strokeWidth="0.5" />
            <circle cx="400" cy="400" r="250" fill="none" stroke="white" strokeWidth="0.5" />
          </svg>
        </div>

        <div className="relative mx-auto max-w-7xl px-6 lg:px-8 py-20 md:py-28">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold italic text-gold font-serif">
            FAAS
          </h1>
          <p className="mt-3 text-lg sm:text-xl text-white/90">
            Finance function as a Service
          </p>
          <div className="mt-8">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center rounded-md bg-navy px-6 py-3 text-sm font-semibold text-white transition-all hover:bg-navy/90 hover:shadow-lg"
            >
              Learn More
            </Link>
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
          <h2 className="text-3xl sm:text-4xl font-bold text-navy">
            What We Do
          </h2>
          <div className="mt-10 grid gap-6 sm:grid-cols-3">
            {whatWeDo.map((item) => (
              <div
                key={item.title}
                className="rounded-xl border border-border bg-card p-6"
              >
                <h3 className="text-xl font-bold font-serif text-navy">
                  {item.title}
                </h3>
                <p className="mt-2 text-sm text-slate-text/70 leading-relaxed">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-16 md:py-20 bg-off-white">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid gap-10 md:grid-cols-2 items-center">
            <div>
              <h2 className="text-3xl sm:text-4xl font-bold text-navy">
                Benefits
              </h2>
              <ul className="mt-8 flex flex-col gap-4">
                {benefits.map((benefit) => (
                  <li key={benefit} className="flex items-center gap-3">
                    <CheckCircle2 className="h-5 w-5 text-steel flex-shrink-0" strokeWidth={1.5} />
                    <span className="text-slate-text">{benefit}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="flex justify-center">
              <div className="flex h-24 w-24 items-center justify-center rounded-2xl bg-white shadow-sm border border-border">
                <TrendingUp className="h-12 w-12 text-navy" strokeWidth={1.5} />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 md:py-20 text-center">
        <div className="mx-auto max-w-3xl px-6">
          <h2 className="text-3xl sm:text-4xl font-bold text-navy">
            Ready to Get Started?
          </h2>
          <div className="mt-8">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center rounded-md bg-navy px-8 py-3.5 text-sm font-semibold text-white transition-all hover:bg-navy/90 hover:shadow-lg"
            >
              Get Started
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
