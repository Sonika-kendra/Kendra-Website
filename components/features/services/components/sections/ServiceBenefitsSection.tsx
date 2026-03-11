import { CheckCircle2 } from "lucide-react";
import { getServiceSectionClassName } from "../../config";
import type { BenefitsSectionConfig } from "../../interfaces";

interface Props {
  section: BenefitsSectionConfig;
}

export default function ServiceBenefitsSection({ section }: Props) {
  const sectionClassName = getServiceSectionClassName(section.tone);

  return (
    <section className={sectionClassName}>
      <div className="w-full px-6 lg:px-8">
        <h2 className="mb-12 text-center font-display text-3xl font-bold text-navy sm:text-4xl">
          {section.title}
        </h2>
        <div className="grid w-full gap-6 md:grid-cols-2">
          {section.items.map((benefit) => (
            <div
              key={benefit}
              className="group flex items-start gap-4 rounded-xl bg-card p-6 shadow-sm ring-1 ring-border transition-all hover:-translate-y-1 hover:shadow-md"
            >
              <div className="flex-shrink-0">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                  <CheckCircle2 className="h-6 w-6" strokeWidth={2} />
                </div>
              </div>
              <div className="pt-2">
                <p className="font-medium text-slate-text">{benefit}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
