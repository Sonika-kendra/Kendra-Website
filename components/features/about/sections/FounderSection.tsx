import { founderSectionContent } from "@/config/pages/about";

export default function FounderSection() {
  return (
    <section className="bg-off-white py-16 md:py-20">
      <div className="mx-auto max-w-4xl px-6 lg:px-8">
        <article className="rounded-xl border border-border bg-white p-8">
          <h2 className="font-display text-3xl font-bold text-navy">
            {founderSectionContent.title}
          </h2>
          <p className="mt-4 leading-relaxed text-slate-text/80">
            {founderSectionContent.paragraphs[0]}
          </p>
          <p className="mt-4 leading-relaxed text-slate-text/80">
            {founderSectionContent.paragraphs[1]}
          </p>
        </article>
      </div>
    </section>
  );
}
