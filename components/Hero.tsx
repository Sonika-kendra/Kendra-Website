"use client";

import Link from "next/link";
import { motion, AnimatePresence } from "motion/react";
import { useState, useEffect } from "react";
import Image from "next/image";

const slides = [
  "/hero/slide-2.jpg",
  "/hero/slide-1.png",
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
    const interval = setInterval(next, 8000);
    return () => clearInterval(interval);
  }, []);

  const MotionImage = motion.create(Image);

  return (
    <section id="hero" className="relative w-full overflow-hidden">
      <div className="relative h-[220px] sm:h-[260px] lg:h-[340px] w-full">
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
          <div className="absolute inset-0 bg-gradient-to-r from-black/55 via-black/25 to-transparent" />

          <div className="relative w-full max-w-2xl px-6 ml-20">
            <h1
              className="
                font-bold text-white
                leading-tight
                drop-shadow-[0_4px_10px_rgba(0,0,0,0.75)]
                text-[clamp(1.1rem,1.8vw,1.9rem)]
              "
            >
              {title}
            </h1>

            <p
              className="
                mt-3 text-white/95
                leading-snug
                drop-shadow-[0_2px_6px_rgba(0,0,0,0.7)]
                text-[clamp(0.85rem,1.2vw,1.05rem)]
              "
            >
              {subtitle}
            </p>

            <div className="mt-4 flex flex-wrap gap-2">
              <Link
                href="/contact"
                className="
                  px-4 py-1.5
                  rounded-full
                  bg-white text-black
                  font-semibold
                  text-xs
                  hover:scale-105 active:scale-95
                  transition
                "
              >
                {cta}
              </Link>

              <Link
                href="/contact"
                className="
                  px-4 py-1.5
                  rounded-full
                  bg-white text-black
                  font-semibold
                  text-xs
                  hover:scale-105 active:scale-95
                  transition
                "
              >
                Contact Us
              </Link>

              <Link
                href="/services"
                className="
                  px-4 py-1.5
                  rounded-full
                  bg-white text-black
                  font-semibold
                  text-xs
                  hover:scale-105 active:scale-95
                  transition
                "
              >
                Services
              </Link>
            </div>
          </div>
        </div>

        {/* NAV ARROWS */}
        <div className="absolute inset-y-0 left-0 right-0 flex items-center justify-between px-6 pointer-events-none">
          <button
            onClick={prev}
            aria-label="Previous slide"
            className="pointer-events-auto text-white text-3xl opacity-70 hover:opacity-100"
          >
            ‹
          </button>
          <button
            onClick={next}
            aria-label="Next slide"
            className="pointer-events-auto text-white text-3xl opacity-70 hover:opacity-100"
          >
            ›
          </button>
        </div>
      </div>
    </section>
  );
}
