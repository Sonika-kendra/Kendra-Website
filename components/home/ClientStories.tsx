"use client";

import { useState } from "react";
import { ChevronLeft, ChevronRight, TrendingUp, Target, Award } from "lucide-react";

const stories = [
  {
    title: "Tech Scale-Up Achieves 3x Revenue Growth",
    description:
      "Through strategic FaaS implementation, we helped a growing tech company triple their revenue while maintaining lean operations and improving operational efficiency by 45%.",
    metric: "3x Revenue",
    icon: TrendingUp,
    industry: "Technology",
  },
  {
    title: "Manufacturing Firm Cuts Costs by 40%",
    description:
      "Our Turnover & Transformation service identified key inefficiencies and implemented changes that reduced operating costs significantly, improving EBITDA margins from 12% to 24%.",
    metric: "40% Cost Reduction",
    icon: Target,
    industry: "Manufacturing",
  },
  {
    title: "Successful Cross-Border Acquisition",
    description:
      "Our Buy & Build strategy enabled a mid-market company to complete its first international acquisition seamlessly, integrating operations within 6 months.",
    metric: "First International M&A",
    icon: Award,
    industry: "Financial Services",
  },
];

export default function ClientStories() {
  const [index, setIndex] = useState(0);
  const story = stories[index];
  const Icon = story.icon;

  const prev = () => setIndex((i) => (i - 1 + stories.length) % stories.length);
  const next = () => setIndex((i) => (i + 1) % stories.length);

  return (
    <section className="py-16 md:py-20 bg-off-white">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-navy">Client Success Stories</h2>
          <p className="mt-3 text-slate-text/70 max-w-2xl mx-auto">Real results from real clients who scaled smarter with Kendra</p>
        </div>

        <div className="mt-12">
          <div className="flex items-center gap-4 md:gap-8">
            {/* Previous button */}
            <button
              onClick={prev}
              className="flex-shrink-0 flex h-12 w-12 items-center justify-center rounded-full border border-border bg-white text-slate-text hover:bg-navy hover:text-white hover:border-navy transition-all"
              aria-label="Previous story"
            >
              <ChevronLeft className="h-6 w-6" />
            </button>

            {/* Story content */}
            <div className="flex-1 bg-white rounded-2xl p-8 md:p-12 border border-border shadow-sm">
              <div className="grid gap-8 md:grid-cols-5 items-start">
                {/* Metrics & Icon - left column */}
                <div className="md:col-span-2">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="p-4 bg-steel/20 rounded-lg">
                      <Icon className="h-7 w-7 text-steel" strokeWidth={1.5} />
                    </div>
                    <div>
                      <p className="text-xs font-semibold text-slate-text/60 uppercase tracking-wider">{story.industry}</p>
                      <p className="text-sm font-semibold text-steel mt-1">{story.metric}</p>
                    </div>
                  </div>
                </div>

                {/* Story text - right columns */}
                <div className="md:col-span-3">
                  <h3 className="text-2xl font-bold font-display text-navy">{story.title}</h3>
                  <p className="mt-4 text-slate-text/70 leading-relaxed">{story.description}</p>
                </div>
              </div>
            </div>

            {/* Next button */}
            <button
              onClick={next}
              className="flex-shrink-0 flex h-12 w-12 items-center justify-center rounded-full border border-border bg-white text-slate-text hover:bg-navy hover:text-white hover:border-navy transition-all"
              aria-label="Next story"
            >
              <ChevronRight className="h-6 w-6" />
            </button>
          </div>

          {/* Dots */}
          <div className="mt-8 flex justify-center gap-3">
            {stories.map((_, i) => (
              <button
                key={i}
                onClick={() => setIndex(i)}
                className={`transition-all ${
                  i === index 
                    ? "w-8 h-2.5 bg-navy rounded-full" 
                    : "w-2.5 h-2.5 bg-steel/30 rounded-full hover:bg-steel/50"
                }`}
                aria-label={`Go to story ${i + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
