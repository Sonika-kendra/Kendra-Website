"use client";

import { CheckCircle2, TrendingUp } from "lucide-react";
import { businessHealthCheckContent } from "@/config/pages/home";
import { useModal } from "@/components/common/sections/leadPopup/context/ModalContext";

export default function BusinessHealthCheck() {
  const { openLeadPopUp } = useModal();

  return (
    <section className="py-16 md:py-20">
      <div className="mx-auto max-w-6xl px-6 lg:px-8">
        <div className="relative overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-2xl dark:border-slate-700/70 dark:bg-slate-900/90 dark:shadow-[0_30px_90px_-35px_rgba(2,6,23,1)]">
          <div className="pointer-events-none absolute inset-0 hidden dark:block dark:bg-[radial-gradient(circle_at_top,_rgba(59,130,246,0.22),_transparent_55%)]" />
          <div className="pointer-events-none absolute inset-0 hidden dark:block dark:bg-[radial-gradient(circle_at_85%_10%,_rgba(16,185,129,0.14),_transparent_40%)]" />

          <div className="relative p-8 text-center md:p-16">
            <div className="mb-6 flex justify-center">
              <div className="rounded-full bg-slate-100 p-3 dark:bg-slate-800/70">
                <TrendingUp className="h-8 w-8 text-slate-700 dark:text-slate-200" strokeWidth={1.5} />
              </div>
            </div>

            <h2 className="text-3xl font-display font-bold text-slate-900 dark:text-white sm:text-4xl">
              {businessHealthCheckContent.sectionTitle}
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-lg leading-relaxed text-slate-600 dark:text-slate-300">
              {businessHealthCheckContent.sectionDescription}
            </p>

            <div className="mt-12 grid gap-6 md:grid-cols-3">
              {businessHealthCheckContent.cards.map((card) => (
                <div
                  key={card.title}
                  className="rounded-xl border border-slate-200 bg-slate-50 p-6 backdrop-blur-sm dark:border-slate-700 dark:bg-slate-800/70"
                >
                  <CheckCircle2 className="mx-auto mb-3 h-6 w-6 text-slate-700 dark:text-slate-200" />
                  <h3 className="mb-2 font-semibold text-slate-900 dark:text-white">
                    {card.title}
                  </h3>
                  <p className="text-sm text-slate-600 dark:text-slate-300">
                    {card.description}
                  </p>
                </div>
              ))}
            </div>

            <div className="mt-12">
              <button
                type="button"
                onClick={openLeadPopUp}
                className="inline-flex items-center justify-center rounded-lg bg-slate-900 px-10 py-3.5 text-sm font-semibold text-white transition-all hover:bg-slate-800 hover:shadow-lg dark:bg-white dark:text-slate-900 dark:hover:bg-slate-200"
              >
                {businessHealthCheckContent.launchButtonLabel}
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
