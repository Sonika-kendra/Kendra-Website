"use client";

import Link from "next/link";

interface WhyKendraProps {
  heading: string;
  reasons: {
    title: string;
    points: string[];
  }[];
}

export default function WhyKendra({
  heading,
  reasons,
}: WhyKendraProps) {
  console.log(reasons);
  
  return (
    <section
      id="why-kendra"
      className="
        relative overflow-hidden py-28
        bg-white dark:bg-neutral-950
        text-neutral-900 dark:text-neutral-100
      "
    >
      {/* Content */}
      <div className="relative max-w-6xl mx-auto px-6">
        <div
          className="
            flex flex-col items-center gap-10
            md:flex-row md:justify-between
            text-center md:text-left
          "
        >
          {/* Text */}
          <div className="max-w-2xl">
            <h2 className="text-4xl md:text-5xl font-bold">
              {heading}
            </h2>
            <p className="mt-6 text-lg text-neutral-600 dark:text-neutral-400">
              A modern, performance-first approach to building
              scalable, elegant web experiences — without
              unnecessary complexity.
            </p>
          </div>

          {/* CTA */}
          <Link
            href="/contact"
            className="
              inline-flex items-center justify-center
              h-14 px-10 rounded-full
              bg-brand.gold text-neutral-900 font-semibold
              shadow-lg transition-all duration-300
              hover:bg-brand.gold/90 hover:scale-105
              active:scale-95
              focus:outline-none focus:ring-2 focus:ring-brand.gold
            "
          >
            Want to learn more?
          </Link>
        </div>
      </div>
    </section>
  );
}
