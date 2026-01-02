"use client";

import Link from "next/link";
import { motion } from "motion/react";

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
      className="
        relative overflow-hidden py-36 text-primary
        bg-gradient-to-br
        from-secondary/20 via-secondary/50 to-secondary/80
        dark:from-accent/20 dark:via-accent/50 dark:to-accent/80
      "
    >
      {/* Animated SVG background */}
      <svg
        viewBox="0 0 800 400"
        className="absolute inset-0 w-full h-full opacity-40"
        preserveAspectRatio="none"
      >
        {/* Path */}
        <motion.path
          d="M 0 300 C 200 100 400 500 800 200"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          className="text-brand.gold"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{
            duration: 4,
            ease: "easeInOut",
          }}
        />

        {/* Moving dot */}
        <motion.circle
          r="6"
          fill="currentColor"
          className="text-brand.gold"
          animate={{
            offsetDistance: ["0%", "100%"],
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: "linear",
          }}
          style={{
            offsetPath:
              "path('M 0 300 C 200 100 400 500 800 200')",
          }}
        />
      </svg>

      {/* Content */}
      <div className="relative max-w-6xl mx-auto text-center px-6">
        <h1 className="text-5xl md:text-6xl font-bold leading-tight">
          {title}
        </h1>

        <p className="mt-8 text-lg text-primary/80">
          {subtitle}
        </p>

        <Link
          href="/contact"
          className="
            inline-flex items-center justify-center mt-12
            px-10 py-4 rounded-full
            bg-brand.gold text-primary font-bold
            shadow-lg transition-all duration-300
            hover:bg-brand.gold/90 hover:scale-105
            active:scale-95
            focus:outline-none focus:ring-2 focus:ring-brand.gold
          "
        >
          {cta}
        </Link>
      </div>
    </section>
  );
}
