import { getServiceSectionClassName } from "../../config";
import type { TimelineSectionConfig } from "../../interfaces";

interface Props {
  section: TimelineSectionConfig;
}

export default function ServiceTimelineSection({ section }: Props) {
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

        <div className="space-y-6">
          {section.items.map((item, index) => (
            <div
              key={item.title}
              className="group flex gap-6 rounded-2xl bg-card p-6 shadow-sm ring-1 ring-border transition-all hover:-translate-y-1 hover:shadow-md"
            >
              <div className="flex-shrink-0">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 font-display font-bold text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                  {index + 1}
                </div>
              </div>
              <div>
                <h3 className="font-display text-xl font-semibold text-navy">
                  {item.title}
                </h3>
                <p className="mt-2 text-slate-text/70">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
