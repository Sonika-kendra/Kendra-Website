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

        {/* DARK OVERLAY */}
        <div className="absolute inset-0 bg-black/50 sm:bg-black/40" />

        {/* TEXT OVERLAY */}
        <div className="absolute inset-0 flex items-center m-10">
          <div className="w-full max-w-7xl px-6">
            <div
              className="
                w-full
                lg:max-w-[35%]
                rounded-2xl
                bg-black/60 backdrop-blur-md
                px-6 py-8 sm:px-8 sm:py-9
                shadow-2xl
              "
            >
              {/* TITLE */}
              <h1
                className="
                  font-bold text-white drop-shadow-lg
                  leading-tight
                  max-w-[22ch]
                  text-[clamp(1.8rem,3.5vw,3.2rem)]
                  lg:text-[clamp(2rem,2.8vw,3.5rem)]
                "
              >
                {title}
              </h1>

              {/* SUBTITLE */}
              <p
                className="
                  mt-4 text-white/90 drop-shadow
                  leading-snug
                  max-w-[36ch]
                  text-[clamp(0.95rem,1.4vw,1.2rem)]
                  lg:text-[clamp(1rem,1.2vw,1.35rem)]
                "
              >
                {subtitle}
              </p>

              {/* CTA */}
              <div className="mt-8 flex flex-wrap gap-4">
                <Link
                  href="/contact"
                  className="
                    px-8 py-3 rounded-full
                    bg-white text-black font-bold
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
                    px-8 py-3 rounded-full
                    border border-white
                    text-white font-bold
                    transition-all duration-300
                    hover:bg-white/10
                    hover:scale-105
                    active:scale-95
                  "
                >
                  Contact Us
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* NAV */}
        <div className="absolute inset-y-0 left-0 right-0 flex items-center justify-between px-6 pointer-events-none">
          <button
            onClick={prev}
            aria-label="Previous slide"
            className="pointer-events-auto text-white text-5xl opacity-70 hover:opacity-100"
          >
            ‹
          </button>
          <button
            onClick={next}
            aria-label="Next slide"
            className="pointer-events-auto text-white text-5xl opacity-70 hover:opacity-100"
          >
            ›
          </button>
        </div>
      </div>
    </section>
  );
}
