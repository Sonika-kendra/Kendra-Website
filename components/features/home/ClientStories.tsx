"use client";

import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { testimonials } from "@/config/pages/home";
import Image from "next/image";
import type { Testimonial } from "@/interface/home";
import { clientStoriesContent } from "@/config/pages/home";

function Media({ testimonial }: { testimonial: Testimonial }) {
  const [error, setError] = useState(false);

  if (error || !testimonial.image) return null;

  const commonClasses = "object-cover";

  if (testimonial.type === "video") {
    return (
      <video
        key={testimonial.image}
        src={testimonial.image}
        className={`h-full w-full ${commonClasses}`}
        controls
        onError={() => setError(true)}
      />
    );
  }

  if (testimonial.type === "svg") {
    return (
      <div className="flex h-full w-full items-center justify-center bg-slate-100 dark:bg-slate-800">
        <div className="relative h-40 w-40 md:h-52 md:w-52">
          <Image
            key={testimonial.image}
            src={testimonial.image}
            alt={testimonial.name}
            fill
            className="object-contain"
            onError={() => setError(true)}
            sizes="208px"
          />
        </div>
      </div>
    );
  }

  return (
    <div className="relative h-full w-full">
      <Image
        key={testimonial.image}
        src={testimonial.image}
        alt={testimonial.name}
        fill
        className={commonClasses}
        onError={() => setError(true)}
        sizes="100vw"
      />
    </div>
  );
}

export default function ClientTestimonials() {
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);

  const prev = () =>
    setIndex((i) => (i - 1 + testimonials.length) % testimonials.length);

  const next = () => setIndex((i) => (i + 1) % testimonials.length);

  /* AUTO SLIDE */
  useEffect(() => {
    if (paused) return;

    const interval = setInterval(() => {
      next();
    }, 6000);

    return () => clearInterval(interval);
  }, [paused]);

  return (
    <section
      className="relative flex h-[70vh] w-full items-center justify-center overflow-hidden bg-gradient-to-b from-slate-100 to-slate-200 dark:bg-slate-950 dark:bg-none"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      <div className="relative flex h-full w-full items-center justify-center [perspective:2000px]">
        <AnimatePresence initial={false}>
          {testimonials.map((testimonial, i) => {
            const offset =
              (i - index + testimonials.length) % testimonials.length;

            const normalized =
              offset > testimonials.length / 2
                ? offset - testimonials.length
                : offset;

            if (Math.abs(normalized) > 1) return null;

            const isCenter = normalized === 0;

            return (
              <motion.div
                key={testimonial.name}
                initial={{ opacity: 0 }}
                animate={{
                  x: normalized * 260,
                  scale: isCenter ? 1 : 0.88,
                  rotateY: isCenter ? 0 : normalized > 0 ? -12 : 12,
                  opacity: isCenter ? 1 : 0.3,
                  zIndex: 10 - Math.abs(normalized),
                }}
                transition={{
                  type: "spring",
                  stiffness: 180,
                  damping: 24,
                }}
                drag={isCenter ? "x" : false}
                dragConstraints={{ left: 0, right: 0 }}
                dragElastic={0.2}
                onDragEnd={(_, info) => {
                  if (info.offset.x < -60) next();
                  else if (info.offset.x > 60) prev();
                }}
                className="absolute flex h-full w-full items-center justify-center"
                style={{ transformStyle: "preserve-3d" }}
              >
                <div className="flex h-full w-full flex-col overflow-hidden bg-white dark:bg-slate-900 md:flex-row">
                  
                  {/* Text */}
                  <div className="flex flex-1 flex-col items-center justify-center px-8 text-center md:px-16">
                    <p className="max-w-2xl text-xl leading-relaxed text-slate-700 dark:text-slate-200 md:text-2xl">
                      <span className="mr-2 text-6xl text-slate-300 dark:text-slate-500">
                        &quot;
                      </span>
                      {testimonial.quote}
                      <span className="ml-2 text-6xl text-slate-300 dark:text-slate-500">
                        &quot;
                      </span>
                    </p>

                    <div className="mt-10">
                      <h3 className="text-3xl font-semibold text-slate-900 dark:text-white md:text-4xl">
                        {testimonial.name}
                      </h3>

                      <p className="mt-3 text-sm uppercase tracking-[0.2em] text-slate-500 dark:text-slate-400">
                        {testimonial.role}
                      </p>
                    </div>
                  </div>

                  {/* Media */}
                  <div className="relative flex-1 h-[40vh] md:h-full">
                    <Media testimonial={testimonial} />
                  </div>
                </div>
              </motion.div>
            );
          })}
        </AnimatePresence>
      </div>

      {/* NAV BUTTONS */}
      <div className="pointer-events-none absolute inset-0 flex items-center justify-between px-6">
        <button
          onClick={prev}
          className="pointer-events-auto rounded-full bg-white p-3 shadow-lg dark:bg-slate-900"
          aria-label={clientStoriesContent.previousTestimonialAriaLabel}
        >
          <ChevronLeft className="h-7 w-7" />
        </button>

        <button
          onClick={next}
          className="pointer-events-auto rounded-full bg-white p-3 shadow-lg dark:bg-slate-900"
          aria-label={clientStoriesContent.nextTestimonialAriaLabel}
        >
          <ChevronRight className="h-7 w-7" />
        </button>
      </div>

      {/* DOT INDICATORS */}
      <div className="absolute bottom-6 flex gap-3">
        {testimonials.map((_, i) => (
          <button
            key={i}
            onClick={() => setIndex(i)}
            className={`h-3 w-3 rounded-full transition-all ${
              i === index
                ? "bg-slate-900 dark:bg-white scale-125"
                : "bg-slate-400"
            }`}
          />
        ))}
      </div>
    </section>
  );
}