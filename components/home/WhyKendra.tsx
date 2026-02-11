"use client";

import { User, Clock, TrendingUp } from "lucide-react";

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
    title: "Expertise",
    description: "CFO-level expertise",
  },
  {
    icon: Clock,
    title: "Speed",
    description: "Results in hours/days",
  },
  {
    icon: TrendingUp,
    title: "Results",
    description: "Fast growth milestones",
  },
];

export default function WhyKendra({ heading }: WhyKendraProps) {
  return (
    <section className="py-16 md:py-20 bg-off-white">
      <div className="mx-auto max-w-7xl px-6 lg:px-8 text-center">
        <h2 className="text-3xl sm:text-4xl font-bold text-navy">{heading}</h2>

        <div className="mt-12 grid gap-10 sm:grid-cols-3">
          {highlights.map((item) => (
            <div key={item.title} className="flex flex-col items-center">
              <div className="flex h-16 w-16 items-center justify-center rounded-full border-2 border-steel/30 bg-white">
                <item.icon className="h-7 w-7 text-navy" strokeWidth={1.5} />
              </div>
              <h3 className="mt-4 text-lg font-bold font-serif text-navy">{item.title}</h3>
              <p className="mt-1 text-sm text-slate-text/70">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
