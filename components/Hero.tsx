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
    <section id="hero" className="relative w-full overflow-hidden">
      <div className="relative h-[360px] sm:h-[420px] lg:h-[520px] max-h-[560px] w-full">
        {/* SLIDES */}
        <AnimatePresence mode="wait">
          <MotionImage
            key={index}
            src={slides[index]}
            alt="Hero slide"
            fill
            priority={index === 0}
            sizes="100vw"
            className="object-cover"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.6, ease: "easeInOut" }}
          />
        </AnimatePresence>

        {/* TEXT OVERLAY */}
        <div className="absolute inset-0 flex items-center">
          {/* Gradient near text */}
          <div className="absolute inset-0 bg-gradient-to-r from-black/55 via-black/25 to-transparent" />

          <div className="relative w-full max-w-7xl px-6 m-10">
            <div className="lg:max-w-[35%]">
              {/* TITLE */}
              <h1
                className="
                  font-bold text-white
                  leading-snug
                  max-w-[22ch]
                  drop-shadow-[0_4px_10px_rgba(0,0,0,0.75)]
                  text-[clamp(1.4rem,2.6vw,2.6rem)]
                  lg:text-[clamp(1.6rem,2.2vw,2.8rem)]
                "
              >
                {title}
              </h1>

              {/* SUBTITLE */}
              <p
                className="
                  mt-3 text-white/95
                  leading-snug
                  max-w-[36ch]
                  drop-shadow-[0_2px_6px_rgba(0,0,0,0.7)]
                  text-[clamp(0.9rem,1.3vw,1.1rem)]
                  lg:text-[clamp(0.95rem,1.1vw,1.25rem)]
                "
              >
                {subtitle}
              </p>

              {/* CTA BUTTONS */}
              <div className="mt-6 flex flex-wrap gap-3">
                <Link
                  href="/contact"
                  className="
                    px-6 py-2 rounded-full
                    bg-white text-black
                    font-semibold text-sm
                    transition-all duration-300
                    hover:scale-105
                    active:scale-95
                  "
                >
                  {cta}
                </Link>

                <Link
                  href="/contact"
                  className="
                    px-6 py-2 rounded-full
                    bg-white text-black
                    font-semibold text-sm
                    transition-all duration-300
                    hover:scale-105
                    active:scale-95
                  "
                >
                  Contact Us
                </Link>

                <Link
                  href="/services"
                  className="
                    px-6 py-2 rounded-full
                    bg-white text-black
                    font-semibold text-sm
                    transition-all duration-300
                    hover:scale-105
                    active:scale-95
                  "
                >
                  Services
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* NAV ARROWS */}
        <div className="absolute inset-y-0 left-0 right-0 flex items-center justify-between px-6 pointer-events-none">
          <button
            onClick={prev}
            aria-label="Previous slide"
            className="pointer-events-auto text-white text-4xl opacity-70 hover:opacity-100"
          >
            ‹
          </button>
          <button
            onClick={next}
            aria-label="Next slide"
            className="pointer-events-auto text-white text-4xl opacity-70 hover:opacity-100"
          >
            ›
          </button>
        </div>
      </div>
    </section>
  );
}
