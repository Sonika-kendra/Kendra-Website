import { CheckCircle2 } from "lucide-react";

const differentiators = [
  {
    title: "Deep Industry Expertise",
    description:
      "Our team has worked with 50+ high-growth companies across sectors, giving us insights that drive faster, smarter decisions.",
  },
  {
    title: "Rapid Execution",
    description:
      "We deliver results in days or weeks, not months. Our streamlined processes ensure initiatives move at startup speed.",
  },
  {
    title: "Hands-On Support",
    description:
      "We do not just advise. We help you execute changes, train teams, and embed new processes.",
  },
];

export default function DifferentiatorsSection() {
  return (
    <section className="py-16 md:py-20">
      <div className="mx-auto max-w-4xl px-6 lg:px-8">
        <div className="mb-12 text-center">
          <h2 className="font-display text-3xl font-bold text-navy">What Sets Us Apart</h2>
        </div>

        <div className="space-y-6">
          {differentiators.map((item) => (
            <div key={item.title} className="flex gap-4">
              <div className="flex-shrink-0">
                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-white/20">
                  <CheckCircle2 className="h-6 w-6 text-white" strokeWidth={2} />
                </div>
              </div>

              <div>
                <h3 className="font-display text-lg font-semibold text-navy">{item.title}</h3>
                <p className="mt-1 text-slate-text/70">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
