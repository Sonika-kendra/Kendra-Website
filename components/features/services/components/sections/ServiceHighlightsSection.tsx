import { getServiceSectionClassName } from "../../config";
import type { HighlightsSectionConfig } from "../../interfaces";

interface Props {
  section: HighlightsSectionConfig;
}

export default function ServiceHighlightsSection({ section }: Props) {
  const sectionClassName = getServiceSectionClassName(section.tone);

  return (
    <section className={sectionClassName}>
      <div className="w-full px-6 lg:px-8">
        <h2 className="mb-12 text-center font-display text-3xl font-bold text-navy sm:text-4xl">
          {section.title}
        </h2>

        {section.description ? (
          <p className="mx-auto mb-12 max-w-2xl text-center text-slate-text/70">
            {section.description}
          </p>
        ) : null}

        <div className="grid gap-8 md:grid-cols-2">
          {section.items.map((item) => (
            <div
              key={item.title}
              className="group relative overflow-hidden rounded-2xl bg-card p-8 shadow-sm ring-1 ring-border transition-all hover:-translate-y-1 hover:shadow-xl"
            >
              <div className="absolute left-0 top-0 h-1 w-full bg-navy/10 transition-colors group-hover:bg-accent" />
              <h3 className="font-display text-xl font-bold text-navy">
                {item.title}
              </h3>
              <p className="mt-3 leading-relaxed text-slate-text/70">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
