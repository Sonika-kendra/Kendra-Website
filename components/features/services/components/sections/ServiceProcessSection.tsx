import { getServiceSectionClassName } from "../../config";
import type { ProcessSectionConfig } from "../../interfaces";

interface Props {
  section: ProcessSectionConfig;
}

export default function ServiceProcessSection({ section }: Props) {
  const sectionClassName = getServiceSectionClassName(section.tone);

  return (
    <section className={sectionClassName}>
      <div className="w-full px-6 lg:px-8">
        <div className="mb-12 text-center">
          <h2 className="font-display text-3xl font-bold text-navy sm:text-4xl">
            {section.title}
          </h2>
          <p className="mx-auto mt-3 max-w-2xl text-slate-text/70">
            {section.description}
          </p>
        </div>
        <div className="grid gap-8 sm:grid-cols-3">
          {section.items.map((item) => {
            const Icon = item.icon;

            return (
              <div
                key={item.title}
                className="card-hover rounded-xl border border-border bg-card p-8"
              >
                <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                  <Icon className="h-6 w-6 text-primary" strokeWidth={1.5} />
                </div>
                <h3 className="font-display text-xl font-bold text-navy">
                  {item.title}
                </h3>
                <p className="mt-3 leading-relaxed text-slate-text/70">
                  {item.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
