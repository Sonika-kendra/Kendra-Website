"use client";

import Link from "next/link";

export default function BusinessHealthCheck() {
  return (
    <section className="py-16 md:py-20">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="rounded-2xl bg-off-white p-8 md:p-12 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-navy">Business Health Check Analyzer</h2>
          <p className="mt-4 text-slate-text/80 max-w-2xl mx-auto leading-relaxed">
            Enter your financials for the past few years, and our Business Health
            Analyzer delivers a clear snapshot of revenue growth, margin health,
            and cost ratios in moments.
          </p>
          <div className="mt-8">
            <Link
              href="/health-check"
              className="inline-flex items-center justify-center rounded-md bg-navy px-8 py-3.5 text-sm font-semibold text-white transition-all hover:bg-navy/90 hover:shadow-lg"
            >
              Business Health Check Analyzer
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
