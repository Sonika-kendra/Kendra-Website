"use client";

import Link from "next/link";

export default function Hero({
  title,
  subtitle,
  cta,
}: {
  title: string;
  subtitle: string;
  cta: string;
}) {
  return (
    <section
      id="hero"
      className="relative w-full overflow-hidden"
      style={{
        background: "linear-gradient(135deg, #4a6a8a 0%, #8096af 50%, #a3b8cc 100%)",
      }}
    >
      {/* Decorative curve */}
      <div className="absolute bottom-0 right-0 w-1/2 h-1/2 opacity-20">
        <svg viewBox="0 0 400 400" className="w-full h-full" aria-hidden="true">
          <circle cx="400" cy="400" r="350" fill="none" stroke="white" strokeWidth="0.5" />
          <circle cx="400" cy="400" r="250" fill="none" stroke="white" strokeWidth="0.5" />
        </svg>
      </div>

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8 py-20 md:py-28 lg:py-36">
        <div className="max-w-2xl">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight text-white">
            {title}
          </h1>

          <p className="mt-4 text-base sm:text-lg text-white/90 leading-relaxed max-w-xl">
            {subtitle}
          </p>

          <div className="mt-8">
            <Link
              href="/services"
              className="inline-flex items-center justify-center rounded-md bg-navy px-6 py-3 text-sm font-semibold text-white transition-all hover:bg-navy/90 hover:shadow-lg"
            >
              {cta}
            </Link>
          </div>
        </div>
      </div>

      {/* Bottom wave */}
      <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-none">
        <svg
          viewBox="0 0 1440 60"
          className="w-full h-8 sm:h-12"
          preserveAspectRatio="none"
          aria-hidden="true"
        >
          <path
            d="M0,60 L0,20 Q360,0 720,20 Q1080,40 1440,20 L1440,60 Z"
            fill="white"
          />
        </svg>
      </div>
    </section>
  );
}
