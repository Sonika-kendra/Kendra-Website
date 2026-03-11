import Link from "next/link";
import { getServiceSectionClassName, resolveServiceActionClass } from "../../config";
import type { CtaSectionConfig } from "../../interfaces";

interface Props {
  section: CtaSectionConfig;
}

export default function ServiceCtaSection({ section }: Props) {
  const sectionClassName = getServiceSectionClassName(section.tone);

  return (
    <section className={`${sectionClassName} text-center`}>
      <div className="w-full px-6">
        <h2 className="font-display text-3xl font-bold text-navy sm:text-4xl">
          {section.title}
        </h2>
        <p className="mx-auto mt-4 max-w-3xl text-lg text-slate-text/70">
          {section.description}
        </p>
        <div className="mt-8 flex flex-wrap justify-center gap-4">
          {section.actions.map((action, index) => (
            <Link
              key={`${section.id}-${action.label}`}
              href={action.href}
              className={resolveServiceActionClass(
                action,
                index === 0 ? "primary" : "secondary"
              )}
            >
              {action.label}
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
