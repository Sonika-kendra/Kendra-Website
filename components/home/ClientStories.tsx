"use client";

import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { testimonials } from "@/content/testimonial";

interface Testimonial {
  quote: string;
  name: string;
  role: string;
  image?: string;
  type?: "image" | "video" | string;
}

function Media({ testimonial }: { testimonial: Testimonial }) {
  const [error, setError] = useState(false);

  if (error || !testimonial.image) {
    return (
      <div className="flex items-center justify-center text-gray-400 w-full h-full">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-20 w-20"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M5.121 17.804A7.969 7.969 0 0112 15a7.969 7.969 0 016.879 2.804M15 11a3 3 0 11-6 0 3 3 0 016 0z"
          />
        </svg>
      </div>
    );
  }

  if (testimonial.type === "video") {
    return (
      <video
        key={testimonial.image}
        src={testimonial.image}
        className="w-full h-full object-cover md:rounded-r-3xl"
        controls
        onError={() => setError(true)}
      />
    );
  }

  return (
    <img
      key={testimonial.image}
      src={testimonial.image}
      alt={testimonial.name}
      className="w-full h-full object-cover md:rounded-r-3xl"
      onError={() => setError(true)}
    />
  );
}

export default function ClientTestimonials() {
  const [index, setIndex] = useState(0);

  const prev = () =>
    setIndex((i) => (i - 1 + testimonials.length) % testimonials.length);
  const next = () => setIndex((i) => (i + 1) % testimonials.length);

  return (
    <section className="w-screen min-h-[70vh] flex items-center justify-center bg-gradient-to-b from-slate-100 to-slate-200 overflow-hidden">
      <div className="relative w-full max-w-6xl flex items-center justify-center [perspective:2000px]">
        <AnimatePresence initial={false}>
          {testimonials.map((testimonial, i) => {
            const offset = (i - index + testimonials.length) % testimonials.length;
            const normalized =
              offset > testimonials.length / 2 ? offset - testimonials.length : offset;
            if (Math.abs(normalized) > 1) return null;

            const isCenter = normalized === 0;

            return (
              <motion.div
                key={testimonial.name}
                initial={{ opacity: 0 }}
                animate={{
                  x: normalized * 250,
                  scale: isCenter ? 1 : 0.8,
                  rotateY: isCenter ? 0 : normalized > 0 ? -15 : 15,
                  opacity: isCenter ? 1 : 0.3,
                  zIndex: 10 - Math.abs(normalized),
                }}
                transition={{ type: "spring", stiffness: 200, damping: 25 }}
                drag={isCenter ? "x" : false}
                dragConstraints={{ left: 0, right: 0 }}
                dragElastic={0.2}
                onDragEnd={(e, info) => {
                  if (info.offset.x < -60) next();
                  else if (info.offset.x > 60) prev();
                }}
                className="absolute w-full max-h-[70vh] flex items-center justify-center"
                style={{ transformStyle: "preserve-3d" }}
              >
                {/* Card */}
                <div className="bg-white rounded-3xl shadow-2xl overflow-hidden w-4/5 h-[60vh] flex flex-col md:flex-row">
                  {/* LEFT SIDE — TEXT CONTENT */}
                  <div className="flex-1 p-6 flex flex-col justify-center text-left">
                    <p className="text-slate-700 text-lg md:text-xl leading-relaxed">
                      <span className="text-5xl text-gray-300 mr-2">“</span>
                      {testimonial.quote}
                      <span className="text-5xl text-gray-300 ml-2">”</span>
                    </p>
                    <div className="mt-4">
                      <h3 className="text-2xl md:text-3xl font-semibold text-navy">
                        {testimonial.name}
                      </h3>
                      <p className="text-sm md:text-base text-slate-500 mt-1">
                        {testimonial.role}
                      </p>
                    </div>
                  </div>

                  {/* RIGHT SIDE — MEDIA / PLACEHOLDER */}
                  <div className="flex-1 relative flex items-center justify-center bg-gray-200 md:rounded-r-3xl">
                    <Media testimonial={testimonial} />
                  </div>
                </div>
              </motion.div>
            );
          })}
        </AnimatePresence>

        {/* Navigation Arrows */}
        <button
          onClick={prev}
          className="absolute left-6 top-1/2 -translate-y-1/2 bg-white rounded-full p-4 shadow hover:bg-navy hover:text-white transition-colors z-30"
        >
          <ChevronLeft className="w-8 h-8" />
        </button>
        <button
          onClick={next}
          className="absolute right-6 top-1/2 -translate-y-1/2 bg-white rounded-full p-4 shadow hover:bg-navy hover:text-white transition-colors z-30"
        >
          <ChevronRight className="w-8 h-8" />
        </button>
      </div>
    </section>
  );
}
