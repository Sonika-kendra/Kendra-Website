"use client";

import { useState, useEffect, useCallback } from "react";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";

interface HeroSlide {
  title: string;
  subtitle: string;
  cta: string;
  ctaLink: string;
}

const slides: HeroSlide[] = [
  {
    title: "Scaling Businesses Smarter: Finance, Transformation, and M&A Support",
    subtitle:
      "Expert-led transformation strategies to unlock hidden value and drive sustainable success for SMEs.",
    cta: "Explore Our Services",
    ctaLink: "/services",
  },
  {
    title: "Finance Function as a Service",
    subtitle:
      "Outsource, automate, and upgrade your finance operations with CFO-level expertise on demand.",
    cta: "Learn More",
    ctaLink: "/services/consulting",
  },
  {
    title: "Turnover & Transformation",
    subtitle:
      "Fix and future-proof your finance function with hands-on operational improvement.",
    cta: "Learn More",
    ctaLink: "/services/cost",
  },
  {
    title: "Buy & Build Strategy",
    subtitle:
      "Accelerating growth through acquisition — identifying targets, investors, and strategic fit.",
    cta: "Learn More",
    ctaLink: "/services/ma",
  },
];

const variants = {
  enter: (direction: number) => ({
    x: direction > 0 ? 300 : -300,
    opacity: 0,
  }),
  center: {
    x: 0,
    opacity: 1,
  },
  exit: (direction: number) => ({
    x: direction > 0 ? -300 : 300,
    opacity: 0,
  }),
};

export default function Hero() {
  const [current, setCurrent] = useState(0);
  const [direction, setDirection] = useState(1);
  const [isPaused, setIsPaused] = useState(false);

  const paginate = useCallback(
    (dir: number) => {
      setDirection(dir);
      setCurrent((prev) => (prev + dir + slides.length) % slides.length);
    },
    []
  );

  useEffect(() => {
    if (isPaused) return;
    const timer = setInterval(() => paginate(1), 5000);
    return () => clearInterval(timer);
  }, [isPaused, paginate]);

  const goTo = (index: number) => {
    setDirection(index > current ? 1 : -1);
    setCurrent(index);
  };

  return (
    <section
      id="hero"
      className="relative w-full overflow-hidden"
      style={{
        background:
          "linear-gradient(135deg, #1a2a4a 0%, #4a6a8a 40%, #8096af 70%, #a3b8cc 100%)",
      }}
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      {/* Decorative circles */}
      <div className="absolute bottom-0 right-0 w-1/2 h-1/2 opacity-10 pointer-events-none">
        <svg viewBox="0 0 400 400" className="w-full h-full" aria-hidden="true">
          <circle cx="400" cy="400" r="350" fill="none" stroke="white" strokeWidth="0.5" />
          <circle cx="400" cy="400" r="250" fill="none" stroke="white" strokeWidth="0.5" />
        </svg>
      </div>

      {/* Arrow buttons */}
      <button
        onClick={() => paginate(-1)}
        className="absolute left-4 top-1/2 -translate-y-1/2 z-20 flex items-center justify-center w-10 h-10 rounded-full bg-white/10 text-white backdrop-blur-sm transition-colors hover:bg-white/25"
        aria-label="Previous slide"
      >
        <ChevronLeft className="w-5 h-5" />
      </button>
      <button
        onClick={() => paginate(1)}
        className="absolute right-4 top-1/2 -translate-y-1/2 z-20 flex items-center justify-center w-10 h-10 rounded-full bg-white/10 text-white backdrop-blur-sm transition-colors hover:bg-white/25"
        aria-label="Next slide"
      >
        <ChevronRight className="w-5 h-5" />
      </button>

      {/* Slide content */}
      <div className="relative mx-auto max-w-7xl px-6 lg:px-8 py-20 md:py-28 lg:py-36 min-h-[380px] md:min-h-[420px]">
        <AnimatePresence initial={false} custom={direction} mode="wait">
          <motion.div
            key={current}
            custom={direction}
            variants={variants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{ duration: 0.45, ease: "easeInOut" }}
            className="max-w-2xl"
          >
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight text-white font-serif">
              {slides[current].title}
            </h1>

            <p className="mt-4 text-base sm:text-lg text-white/90 leading-relaxed max-w-xl font-sans">
              {slides[current].subtitle}
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <Link
                href={slides[current].ctaLink}
                className="inline-flex items-center justify-center rounded-md bg-navy px-6 py-3 text-sm font-semibold text-white transition-all hover:bg-navy/90 hover:shadow-lg border border-white/20"
              >
                {slides[current].cta}
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center rounded-md border border-white/40 px-6 py-3 text-sm font-semibold text-white transition-all hover:bg-white/10"
              >
                Contact Us
              </Link>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Dot indicators */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20 flex gap-2">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => goTo(i)}
            aria-label={`Go to slide ${i + 1}`}
            className={`w-2.5 h-2.5 rounded-full transition-all ${
              i === current
                ? "bg-white scale-110"
                : "bg-white/40 hover:bg-white/60"
            }`}
          />
        ))}
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
