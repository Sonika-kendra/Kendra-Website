"use client";

import { User, Zap, Target } from "lucide-react";

interface WhyKendraProps {
  heading: string;
  reasons: {
    title: string;
    points: string[];
  }[];
}

const highlights = [
  {
    icon: User,
    title: "Expert Team",
    description: "CFO-level expertise with proven track record",
    features: ["20+ years experience", "Multi-sector expertise"],
  },
  {
    icon: Zap,
    title: "Speed First",
    description: "Results delivered in hours, not months",
    features: ["Rapid deployment", "Quick wins"],
  },
  {
    icon: Target,
    title: "Results Driven",
    description: "Measurable business growth achieved",
    features: ["Actionable insights", "Guaranteed outcomes"],
  },
];

export default function WhyKendra({ heading }: WhyKendraProps) {
  return (
    <section className="py-16 md:py-20">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-navy">{heading}</h2>
          <p className="mt-3 text-slate-text/70 max-w-2xl mx-auto">Why businesses trust Kendra for transformation</p>
        </div>

        <div className="grid gap-8 sm:grid-cols-3">
          {highlights.map((item) => {
            const Icon = item.icon;
            return (
              <div key={item.title} className="group card-hover p-8">
                <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-gold/20 mb-4 group-hover:bg-gold/30 transition-colors">
                  <Icon className="h-7 w-7 text-gold" strokeWidth={1.5} />
                </div>
                <h3 className="text-lg font-bold font-display text-navy group-hover:text-gold transition-colors">{item.title}</h3>
                <p className="mt-2 text-sm text-slate-text/70 leading-relaxed">{item.description}</p>
                <ul className="mt-4 space-y-2">
                  {item.features.map((feature) => (
                    <li key={feature} className="text-xs text-slate-text/60 flex items-center gap-2">
                      <span className="h-1.5 w-1.5 rounded-full bg-gold" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
