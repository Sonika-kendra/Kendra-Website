"use client";

import { User, Zap, Target } from "lucide-react";
import type { WhyKendraProps } from "@/interface/home";
import {
  whyKendraSectionContent,
  type WhyKendraHighlightIcon,
} from "@/config/pages/home";

const HIGHLIGHT_ICONS: Record<WhyKendraHighlightIcon, typeof User> = {
  User,
  Zap,
  Target,
};

export default function WhyKendra({ heading }: WhyKendraProps) {
  return (
    <section className="py-16 md:py-20">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-navy">{heading}</h2>
          <p className="mt-3 text-slate-text/70 max-w-2xl mx-auto">
            {whyKendraSectionContent.subtitle}
          </p>
        </div>

        <div className="grid gap-8 sm:grid-cols-3">
          {whyKendraSectionContent.highlights.map((item) => {
            const Icon = HIGHLIGHT_ICONS[item.icon];
            return (
              <div key={item.title} className="group card-hover p-8">
                <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-xl bg-navy/5 transition-colors group-hover:bg-navy/10 dark:bg-white/10 dark:group-hover:bg-white/20">
                  <Icon className="h-7 w-7 text-navy dark:text-white" strokeWidth={1.5} />
                </div>
                <h3 className="font-display text-lg font-bold text-navy transition-colors group-hover:text-accent dark:text-white">{item.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-text/70">{item.description}</p>
                <ul className="mt-4 space-y-2">
                  {item.features.map((feature) => (
                    <li key={feature} className="flex items-center gap-2 text-xs text-slate-text/60">
                      <span className="h-1.5 w-1.5 rounded-full bg-navy/40 dark:bg-white/40" />
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
