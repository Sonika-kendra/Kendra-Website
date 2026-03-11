import { TrendingUp } from "lucide-react";
import { getServiceSectionClassName } from "../../config";
import type { TagsSectionConfig } from "../../interfaces";

interface Props {
  section: TagsSectionConfig;
}

export default function ServiceTagsSection({ section }: Props) {
  const sectionClassName = getServiceSectionClassName(section.tone);
  const Icon = section.icon ?? TrendingUp;

  return (
    <section className={sectionClassName}>
      <div className="w-full px-6 lg:px-8">
        <h2 className="mb-12 text-center font-display text-3xl font-bold text-navy sm:text-4xl">
          {section.title}
        </h2>
        <div className="grid gap-4 sm:grid-cols-2">
          {section.items.map((item) => (
            <div
              key={item}
              className="group flex items-center gap-3 rounded-full bg-card px-6 py-4 shadow-sm ring-1 ring-border transition-all hover:-translate-y-1 hover:shadow-md"
            >
              <div className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                <Icon className="h-4 w-4" strokeWidth={2} />
              </div>
              <span className="font-medium text-slate-text">{item}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
