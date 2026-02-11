import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Services | Kendra International",
  description:
    "Explore Kendra International's services: FaaS, Turnover & Transformation, and Buy & Build.",
};

const services = [
  {
    title: "FaaS",
    subtitle: "Finance-Function as a Service",
    description:
      "Outsource, automate, and upgrade your finance function to reduce costs and improve accuracy.",
    href: "/services/consulting",
  },
  {
    title: "Turnover & Transformation",
    subtitle: "Fix and future-proof",
    description:
      "Identify challenges, optimize processes, and implement changes to improve your finance function and performance.",
    href: "/services/cost",
  },
  {
    title: "Buy & Build",
    subtitle: "Mergers and acquisitions strategy",
    description:
      "Accelerate growth through strategic acquisition targeting, investor matching, and M&A execution.",
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
            "linear-gradient(135deg, #4a6a8a 0%, #8096af 50%, #a3b8cc 100%)",
        }}
      >
        <div className="relative mx-auto max-w-7xl px-6 lg:px-8 py-20 md:py-28">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white font-serif">
            Our Services
          </h1>
          <p className="mt-3 text-lg text-white/90 max-w-2xl">
            Comprehensive solutions for scaling your business smarter.
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
            {services.map((service) => (
              <Link
                key={service.title}
                href={service.href}
                className="group flex flex-col rounded-xl border border-border bg-card p-8 transition-all hover:shadow-lg hover:border-steel/40"
              >
                <h2 className="text-2xl font-bold font-serif text-navy group-hover:text-gold transition-colors">
                  {service.title}
                </h2>
                <p className="mt-1 text-sm font-medium text-steel">
                  {service.subtitle}
                </p>
                <p className="mt-4 text-sm text-slate-text/70 leading-relaxed flex-1">
                  {service.description}
                </p>
                <span className="mt-6 text-sm font-medium text-navy group-hover:text-gold transition-colors">
                  Learn More &rarr;
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 md:py-20 text-center bg-off-white">
        <div className="mx-auto max-w-3xl px-6">
          <h2 className="text-3xl sm:text-4xl font-bold text-navy">
            Ready to Get Started?
          </h2>
          <p className="mt-4 text-slate-text/70">
            Speak with our consultants today.
          </p>
          <div className="mt-8">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center rounded-md bg-navy px-8 py-3.5 text-sm font-semibold text-white transition-all hover:bg-navy/90 hover:shadow-lg"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
