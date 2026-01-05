"use client";

import Link from "next/link";
import { motion, AnimatePresence } from "motion/react";
import { useState, useEffect } from "react";
import Image from "next/image";

const slides = [
  "/hero/slide-1.png",
  "/hero/slide-2.png",
  "/hero/slide-3.jpg",
];

export default function Hero({
  title,
  subtitle,
  cta,
}: {
  title: string;
  subtitle: string;
  cta: string;
}) {
  const [index, setIndex] = useState(0);

  const next = () => setIndex((i) => (i + 1) % slides.length);
  const prev = () =>
    setIndex((i) => (i - 1 + slides.length) % slides.length);

  useEffect(() => {
    const interval = setInterval(next, 5000);
    return () => clearInterval(interval);
  }, []);

  const MotionImage = motion(Image);

  return (
    <section id="hero" className="relative overflow-hidden py-5 text-primary">
      <div
        className="
          mx-auto max-w-8xl px-6
          grid grid-cols-1 lg:grid-cols-5
          gap-20 items-center
        "
      >
        {/* LEFT — TEXT */}
        <div className="lg:col-span-2">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold leading-snug">
            {title}
          </h1>
          <p className="mt-8 text-lg text-primary/80">{subtitle}</p>
        </div>

        {/* RIGHT — CAROUSEL + CTA */}
        <div className="lg:col-span-3">
          {/* WRAPPER keeps buttons centered to carousel width */}
          <div className="w-full">
            {/* CAROUSEL */}
            <div
              className="
                relative w-full
                h-[280px] sm:h-[360px] lg:h-[440px]
                rounded-2xl overflow-hidden
                shadow-2xl
              "
            >
              <AnimatePresence mode="wait">
                <MotionImage
                  key={index}
                  src={slides[index]}
                  alt="Hero slide"
                  fill
                  priority={index === 0}
                  sizes="(min-width: 1024px) 60vw, 100vw"
                  className="object-cover"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.6, ease: "easeInOut" }}
                />
              </AnimatePresence>

              {/* NAV ARROWS */}
              <div className="absolute inset-y-0 left-0 right-0 flex items-center justify-between px-4 pointer-events-none">
                <button
                  onClick={prev}
                  aria-label="Previous slide"
                  className="pointer-events-auto text-white text-4xl drop-shadow-lg opacity-70 hover:opacity-100"
                >
                  ‹
                </button>
                <button
                  onClick={next}
                  aria-label="Next slide"
                  className="pointer-events-auto text-white text-4xl drop-shadow-lg opacity-70 hover:opacity-100"
                >
                  ›
                </button>
              </div>
            </div>

            {/* CTA — CENTERED UNDER CAROUSEL */}
            <div className="mt-6 flex justify-center gap-4">
              <Link
                href="/contact"
                className="
                  px-10 py-4 rounded-full
                  bg-brand.gold text-primary font-bold
                  shadow-lg
                  transition-all duration-300
                  hover:bg-brand.gold/90 hover:scale-105
                  active:scale-95
                "
              >
                {cta}
              </Link>

              <Link
                href="/contact"
                className="
                  px-10 py-4 rounded-full
                  border border-brand.gold
                  text-primary font-bold
                  shadow-lg
                  transition-all duration-300
                  hover:bg-brand.gold/10 hover:scale-105
                  active:scale-95
                "
              >
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
