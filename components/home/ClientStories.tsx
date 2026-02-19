"use client";

import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { testimonials } from "@/content/testimonial";

export default function ClientTestimonials() {
  const [index, setIndex] = useState(0);

  const prev = () =>
    setIndex((i) => (i - 1 + testimonials.length) % testimonials.length);

  const next = () =>
    setIndex((i) => (i + 1) % testimonials.length);

  return (
    <section className="pt-24 md:pt-32 pb-16 md:pb-24 min-h-[80vh] flex items-center justify-center bg-gradient-to-b from-slate-100 to-slate-200">
      <div className="relative w-full max-w-5xl h-[620px] flex items-center justify-center overflow-hidden [perspective:2000px]">
        
        <AnimatePresence initial={false}>
          {testimonials.map((testimonial, i) => {
            const offset =
              (i - index + testimonials.length) % testimonials.length;

            const normalized =
              offset > testimonials.length / 2
                ? offset - testimonials.length
                : offset;

            // Only 1 slide on each side (very subtle preview)
            if (Math.abs(normalized) > 1) return null;

            const isCenter = normalized === 0;
            const isVideo = testimonial.type === "video";

            return (
              <motion.div
                key={testimonial.name}
                initial={{ opacity: 0 }}
                animate={{
                  x: normalized * 160, // smaller movement
                  scale: isCenter ? 1 : 0.75, // much smaller side slides
                  rotateY: isCenter ? 0 : normalized > 0 ? -15 : 15,
                  opacity: isCenter ? 1 : 0.25, // barely visible
                  zIndex: 10 - Math.abs(normalized),
                  filter: isCenter ? "blur(0px)" : "blur(3px)",
                }}
                transition={{
                  type: "spring",
                  stiffness: 200,
                  damping: 25,
                }}
                drag={isCenter ? "x" : false}
                dragConstraints={{ left: 0, right: 0 }}
                dragElastic={0.2}
                onDragEnd={(e, info) => {
                  if (info.offset.x < -60) next();
                  else if (info.offset.x > 60) prev();
                }}
                className="absolute"
                style={{ transformStyle: "preserve-3d" }}
              >
                <div className="bg-white rounded-3xl shadow-2xl overflow-hidden w-96 text-center">

                  {/* Media */}
                  <div className="relative">
                    {isVideo ? (
                      <video
                        src={testimonial.image}
                        className="w-full h-96 object-cover"
                        controls
                      />
                    ) : (
                      <img
                        src={testimonial.image}
                        alt={testimonial.name}
                        className="w-full h-96 object-cover"
                      />
                    )}
                  </div>

                  {/* Quote */}
                  <p className="mt-4 px-6 text-slate-700 text-base sm:text-lg leading-relaxed">
                    <span className="text-4xl text-gray-300 mr-2">“</span>
                    {testimonial.quote}
                    <span className="text-4xl text-gray-300 ml-2">”</span>
                  </p>

                  {/* Name & Role */}
                  <div className="mt-4 mb-6">
                    <h3 className="text-xl font-semibold text-navy">
                      {testimonial.name}
                    </h3>
                    <p className="text-sm text-slate-500">
                      {testimonial.role}
                    </p>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </AnimatePresence>

        {/* Navigation Arrows */}
        <button
          onClick={prev}
          className="absolute left-4 top-1/2 -translate-y-1/2 bg-white rounded-full p-3 shadow hover:bg-navy hover:text-white transition-colors z-30"
        >
          <ChevronLeft className="w-6 h-6" />
        </button>

        <button
          onClick={next}
          className="absolute right-4 top-1/2 -translate-y-1/2 bg-white rounded-full p-3 shadow hover:bg-navy hover:text-white transition-colors z-30"
        >
          <ChevronRight className="w-6 h-6" />
        </button>
      </div>
    </section>
  );
}
