"use client";

import Link from "next/link";

export default function BusinessHealthCheck() {
  return (
    <section className="py-5">
      <div className="px-7">
        {/* HEADER */}
        <header className="mb-6 text-center max-w-3xl mx-auto">
          <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight">
            Business Health Check
          </h2>

          <p className="mt-1 text-sm sm:text-base text-brand.muted">
            A fast, structured snapshot of your strategy, technology,
            growth, and execution — with clear next steps.
          </p>
        </header>

        {/* CONTENT */}
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-sm sm:text-base text-brand.muted leading-relaxed">
            Identify blind spots, validate priorities, and uncover
            practical improvements you can act on immediately.
            No fluff. No sales pressure.
          </p>

          {/* CTA */}
          <div className="mt-6">
            <Link
              href="/health-check"
              className="
    inline-flex items-center justify-center
    h-12 px-8 rounded-md
    bg-brand.primary text-primary-foreground
    text-sm font-semibold
    transition-colors duration-200
    hover:bg-brand.primary/90
    active:scale-95
    focus:outline-none focus:ring-2 focus:ring-brand.primary
  "
            >
              Run Free Health Check
            </Link>

          </div>
        </div>
      </div>
    </section>
  );
}
