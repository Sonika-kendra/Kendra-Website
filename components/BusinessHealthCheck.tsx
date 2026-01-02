"use client";

import Link from "next/link";

export default function BusinessHealthCheck() {
  return (
    <section
      className="
        relative overflow-hidden py-24
        text-primary
        bg-gradient-to-br
        from-secondary/20 via-secondary/50 to-secondary/80
        dark:from-accent/20 dark:via-accent/50 dark:to-accent/80
      "
    >
      <div className="max-w-6xl mx-auto px-6 text-center">
        {/* HEADER */}
        <header className="mb-6">
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">
            Business Health Check
          </h2>

          <p className="mt-8 text-sm sm:text-base text-primary/80">
            A fast, structured snapshot of your strategy, technology, growth, and execution — with clear next steps.
          </p>
        {/* CONTENT */}
        <p className="text-sm sm:text-base text-primary/80 leading-relaxed">
          Identify blind spots, validate priorities, and uncover
          practical improvements you can act on immediately.
          No fluff. No sales pressure.
        </p>
        </header>


        {/* CTA */}
        <div className="mt-8">
          <Link
            href="/health-check"
            className="
              inline-flex items-center justify-center
              px-10 py-4 rounded-full
              bg-brand.gold text-primary font-bold
              shadow-lg
              transition-all duration-300
              hover:bg-brand.gold/90 hover:scale-105
              active:scale-95
              focus:outline-none focus:ring-2 focus:ring-brand.gold
            "
          >
            Run Free Health Check
          </Link>
        </div>
      </div>
    </section>
  );
}
