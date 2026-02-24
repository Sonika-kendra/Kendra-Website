"use client";

import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { testimonials } from "@/content/testimonial";
import Image from "next/image";
import type { Testimonial } from "@/interface/home";

function Media({ testimonial }: { testimonial: Testimonial }) {
  const [error, setError] = useState(false);

  if (error || !testimonial.image) {
    return null;
  }

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
        sizes="(max-width: 768px) 100vw, 50vw"
      />
    </div>
  );
}

export default function ClientTestimonials() {
  const [index, setIndex] = useState(0);

  const prev = () =>
    setIndex((i) => (i - 1 + testimonials.length) % testimonials.length);

  const next = () =>
    setIndex((i) => (i + 1) % testimonials.length);

  return (
    <section className="relative flex min-h-[75vh] w-full items-center justify-center overflow-hidden bg-gradient-to-b from-slate-100 to-slate-200 px-4 py-16 dark:bg-slate-950 dark:bg-none">
      <div className="pointer-events-none absolute inset-0 hidden dark:block dark:bg-[radial-gradient(circle_at_top,_rgba(59,130,246,0.22),_transparent_55%)]" />
      <div className="pointer-events-none absolute inset-0 hidden dark:block dark:bg-[radial-gradient(circle_at_85%_10%,_rgba(16,185,129,0.14),_transparent_40%)]" />

      <div className="relative flex w-full max-w-6xl items-center justify-center [perspective:2000px]">
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
                  x: normalized * 220,
                  scale: isCenter ? 1 : 0.86,
                  rotateY: isCenter ? 0 : normalized > 0 ? -12 : 12,
                  opacity: isCenter ? 1 : 0.28,
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
                className="absolute flex w-full items-center justify-center"
                style={{ transformStyle: "preserve-3d" }}
              >
                <div className="flex h-auto min-h-[32rem] w-[92%] max-w-4xl flex-col overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-2xl backdrop-blur dark:border-slate-700/70 dark:bg-slate-900/90 dark:shadow-[0_30px_90px_-35px_rgba(2,6,23,1)] md:flex-row">
                  
                  {/* Left Content */}
                  <div className="flex flex-1 flex-col items-center justify-center px-6 py-10 text-center md:px-10">
                    <p className="max-w-xl text-lg leading-relaxed text-slate-700 dark:text-slate-200 md:text-xl">
                      <span className="mr-2 text-5xl leading-none text-slate-300 dark:text-slate-500">
                        &quot;
                      </span>
                      {testimonial.quote}
                      <span className="ml-2 text-5xl leading-none text-slate-300 dark:text-slate-500">
                        &quot;
                      </span>
                    </p>

                    <div className="mt-8">
                      <h3 className="text-2xl font-semibold text-slate-900 dark:text-white md:text-3xl">
                        {testimonial.name}
                      </h3>
                      <p className="mt-2 text-xs uppercase tracking-[0.18em] text-slate-500 dark:text-slate-400 md:text-sm">
                        {testimonial.role}
                      </p>
                    </div>
                  </div>

                  {/* Right Media (Full Fill) */}
                  <div className="relative flex-1 h-56 md:h-auto">
                    <Media testimonial={testimonial} />
                  </div>
                </div>
              </motion.div>
            );
          })}
        </AnimatePresence>
      </div>

      {/* Navigation Buttons */}
      <div className="pointer-events-none absolute inset-0 flex items-center justify-between px-2 md:px-6">
        <button
          onClick={prev}
          className="pointer-events-auto rounded-full border border-slate-200 bg-white p-3 text-slate-700 shadow-lg backdrop-blur transition-colors hover:border-slate-300 hover:bg-slate-100 hover:text-slate-900 dark:border-slate-600 dark:bg-slate-900/80 dark:text-slate-200 dark:hover:border-slate-300 dark:hover:bg-slate-800 dark:hover:text-white"
          aria-label="Previous testimonial"
        >
          <ChevronLeft className="h-7 w-7" />
        </button>

        <button
          onClick={next}
          className="pointer-events-auto rounded-full border border-slate-200 bg-white p-3 text-slate-700 shadow-lg backdrop-blur transition-colors hover:border-slate-300 hover:bg-slate-100 hover:text-slate-900 dark:border-slate-600 dark:bg-slate-900/80 dark:text-slate-200 dark:hover:border-slate-300 dark:hover:bg-slate-800 dark:hover:text-white"
          aria-label="Next testimonial"
        >
          <ChevronRight className="h-7 w-7" />
        </button>
      </div>
    </section>
  );
}
