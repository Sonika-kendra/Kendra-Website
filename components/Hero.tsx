"use client";
import AnimateIn from "./AnimateIn";

export default function Hero({
  title,
  subtitle,
}: {
  title: string;
  subtitle: string;
}) {
  return (
    <section className="min-h-screen flex items-center bg-gray-50 dark:bg-slate-950">
      <div className="container mx-auto px-6 text-center">
        <AnimateIn>
          <h1 className="text-5xl md:text-6xl font-bold mb-6">{title}</h1>
        </AnimateIn>

        <AnimateIn delay={0.1}>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto mb-10">
            {subtitle}
          </p>
        </AnimateIn>

        <AnimateIn delay={0.2}>
          <a className="px-8 py-4 bg-accent text-black rounded-xl font-semibold">
            Schedule a Call
          </a>
        </AnimateIn>
      </div>
    </section>
  );
}
