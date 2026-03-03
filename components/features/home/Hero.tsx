"use client";

import { useState, useEffect, useCallback } from "react";
import Link from "next/link";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { heroSlidContent as slides } from "@content/home";
import { useModal } from "@/context/ModalContext";

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
  const { openLeadPopUp } = useModal();
  const [current, setCurrent] = useState(0);
  const [direction, setDirection] = useState(1);
  const [isPaused, setIsPaused] = useState(false);

  const paginate = useCallback((dir: number) => {
    setDirection(dir);
    setCurrent((prev) => (prev + dir + slides.length) % slides.length);
  }, []);

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
      className="relative w-full overflow-hidden h-[260px] md:h-[320px] lg:h-[380px]"
      style={{ background: "var(--hero-gradient)" }}
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      {/* Background Image */}
      <AnimatePresence initial={false} custom={direction}>
        <motion.div
          key={`bg-${current}`}
          custom={direction}
          variants={variants}
          initial="enter"
          animate="center"
          exit="exit"
          transition={{ duration: 0.6, ease: "easeInOut" }}
          className="absolute inset-0"
        >
          <Image
            src={slides[current].image}
            alt={slides[current].title}
            fill
            priority={current === 0}
            className="object-cover"
            sizes="100vw"
          />
        </motion.div>
      </AnimatePresence>

      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/55" />

      {/* Decorative circles */}
      {/* <div className="absolute bottom-0 right-0 w-1/2 h-1/2 opacity-60 text-white pointer-events-none">
        <svg viewBox="0 0 400 400" className="w-full h-full" aria-hidden="true">
          <circle cx="400" cy="400" r="350" fill="none" stroke="currentColor" strokeWidth="1.8" />
          <circle cx="400" cy="400" r="250" fill="none" stroke="currentColor" strokeWidth="1.8" />
        </svg>
      </div> */}

      {/* Two Full Circular White Waves - Right Side */}
      <motion.div className="absolute inset-0 flex items-center justify-end pr-12 pointer-events-none">
        <svg viewBox="0 0 400 400" className="w-[60%] h-[60%] max-w-[500px]">

          {/* Static Center Dot */}
          <circle
            cx="200"
            cy="200"
            r="6"
            fill="white"
          />

          {/* Wave 1 */}
          <motion.circle
            cx="200"
            cy="200"
            r="0"
            fill="none"
            stroke="white"
            strokeWidth="2"
            initial={{ r: 0, opacity: 0.25 }}
            animate={{ r: 180, opacity: 0 }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: "easeOut",
            }}
          />

          {/* Wave 2 */}
          <motion.circle
            cx="200"
            cy="200"
            r="0"
            fill="none"
            stroke="white"
            strokeWidth="1.8"
            initial={{ r: 0, opacity: 0.2 }}
            animate={{ r: 180, opacity: 0 }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: "easeOut",
              delay: 4,
            }}
          />

        </svg>
      </motion.div>


      {/* Navigation Arrows */}
      <button
        onClick={() => paginate(-1)}
        className="absolute left-4 top-1/2 -translate-y-1/2 z-20 flex items-center justify-center w-10 h-10 rounded-full bg-white/20 text-white backdrop-blur-sm hover:bg-white/40 transition"
        aria-label="Previous slide"
      >
        <ChevronLeft className="w-5 h-5" />
      </button>

      <button
        onClick={() => paginate(1)}
        className="absolute right-4 top-1/2 -translate-y-1/2 z-20 flex items-center justify-center w-10 h-10 rounded-full bg-white/20 text-white backdrop-blur-sm hover:bg-white/40 transition"
        aria-label="Next slide"
      >
        <ChevronRight className="w-5 h-5" />
      </button>

      {/* Slide Content */}
      {/* <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-8 h-full flex items-center">
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
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight text-white font-display">
              {slides[current].title}
            </h1>

            <p className="mt-4 text-base sm:text-lg text-white/90 leading-relaxed max-w-xl font-sans">
              {slides[current].subtitle}
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <Link
                href={slides[current].ctaLink}
                className="inline-flex items-center justify-center rounded-md bg-white px-6 py-3 text-sm font-semibold text-black transition-all duration-200 hover:brightness-110"
              >
                {slides[current].cta}
              </Link>

              <Link
                href="/contact"
                className="inline-flex items-center justify-center rounded-md border-2 border-white px-6 py-3 text-sm font-semibold text-white transition-all duration-200 hover:bg-white/10"
              >
                Contact Us
              </Link>
            </div>
          </motion.div>
        </AnimatePresence>
      </div> */}

      <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-8 h-full flex items-center">
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
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight text-white font-display">
              {slides[current].title}
            </h1>

            <p className="mt-4 text-base sm:text-lg text-white/90 leading-relaxed max-w-xl font-sans">
              {slides[current].subtitle}
            </p>

            {/* Updated Buttons */}
            <div className="mt-8 flex flex-wrap gap-4">
              <button
                type="button"
                onClick={openLeadPopUp}
                className="inline-flex items-center justify-center rounded-md border-2 border-white px-6 py-3 text-sm font-semibold text-white transition-all duration-200 hover:bg-white hover:text-black"
              >
                Get Business Report
              </button>


              <Link
                href="/services"
                className="inline-flex items-center justify-center rounded-md border-2 border-white px-6 py-3 text-sm font-semibold text-white transition-all duration-200 hover:bg-white hover:text-black"
              >
                Services
              </Link>

              <Link
                href="/contact"
                className="inline-flex items-center justify-center rounded-md border-2 border-white px-6 py-3 text-sm font-semibold text-white transition-all duration-200 hover:bg-white hover:text-black"
              >
                Contact Us
              </Link>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>


      {/* Dot Indicators */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex gap-2">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => goTo(i)}
            aria-label={`Go to slide ${i + 1}`}
            className={`w-2.5 h-2.5 rounded-full transition-all ${i === current ? "bg-white scale-110" : "bg-white/40 hover:bg-white/60"
              }`}
          />
        ))}
      </div>
    </section>
  );
}
