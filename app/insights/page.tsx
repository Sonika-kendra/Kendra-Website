import { insights } from "@/data/insights";

export default function InsightsPage() {
  return (
    <section className="py-32">
      <div className="max-w-[1280px] mx-auto px-6">
        <h1 className="text-5xl font-semibold">
          Insights & Perspectives
        </h1>

        <p className="mt-6 max-w-2xl text-slate-600">
          Expert perspectives on M&A, strategy, and business transformation.
        </p>

        <div className="grid md:grid-cols-3 gap-16 mt-20">
          {insights.map((i) => (
            <article key={i.title}>
              <p className="text-xs uppercase tracking-widest text-slate-500">
                {i.tag}
              </p>
              <h3 className="mt-4 text-xl font-medium">
                {i.title}
              </h3>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
