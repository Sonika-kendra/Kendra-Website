"use client";

import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const stories = [
  {
    title: "Tech Scale-Up Achieves 3x Revenue Growth",
    description:
      "Through strategic FaaS implementation, we helped a growing tech company triple their revenue while maintaining lean operations.",
    metric: "3x Revenue",
  },
  {
    title: "Manufacturing Firm Cuts Costs by 40%",
    description:
      "Our Turnover & Transformation service identified key inefficiencies and implemented changes that reduced operating costs significantly.",
    metric: "40% Cost Reduction",
  },
  {
    title: "Successful Cross-Border Acquisition",
    description:
      "Our Buy & Build strategy enabled a mid-market company to complete its first international acquisition seamlessly.",
    metric: "First International M&A",
  },
];

export default function ClientStories() {
  const [index, setIndex] = useState(0);
  const story = stories[index];

  const prev = () => setIndex((i) => (i - 1 + stories.length) % stories.length);
  const next = () => setIndex((i) => (i + 1) % stories.length);

  return (
    <section className="py-16 md:py-20">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <h2 className="text-3xl sm:text-4xl font-bold text-navy text-center">Client Success Stories</h2>

        <div className="mt-12 flex items-center gap-6">
          <button
            onClick={prev}
            className="flex-shrink-0 flex h-10 w-10 items-center justify-center rounded-full border border-border text-slate-text hover:bg-off-white transition-colors"
            aria-label="Previous story"
          >
            <ChevronLeft className="h-5 w-5" />
          </button>

          <div className="flex-1 grid gap-6 md:grid-cols-2 items-center">
            {/* Image placeholder */}
            <div className="aspect-video rounded-xl bg-off-white" />

            {/* Content */}
            <div>
              <span className="text-sm font-semibold text-gold">{story.metric}</span>
              <h3 className="mt-2 text-xl font-bold font-serif text-navy">{story.title}</h3>
              <p className="mt-3 text-sm text-slate-text/70 leading-relaxed">{story.description}</p>
            </div>
          </div>

          <button
            onClick={next}
            className="flex-shrink-0 flex h-10 w-10 items-center justify-center rounded-full border border-border text-slate-text hover:bg-off-white transition-colors"
            aria-label="Next story"
          >
            <ChevronRight className="h-5 w-5" />
          </button>
        </div>

        {/* Dots */}
        <div className="mt-6 flex justify-center gap-2">
          {stories.map((_, i) => (
            <button
              key={i}
              onClick={() => setIndex(i)}
              className={`h-2 rounded-full transition-all ${
                i === index ? "w-6 bg-navy" : "w-2 bg-steel/40"
              }`}
              aria-label={`Go to story ${i + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
