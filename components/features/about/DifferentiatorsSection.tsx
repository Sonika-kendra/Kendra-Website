import {
  BarChart3,
  BriefcaseBusiness,
  Gauge,
  Handshake,
  Milestone,
} from "lucide-react";

const differentiators = [
  {
    icon: BarChart3,
    iconText: "Structure",
    title: "To help founders turn ambition into structure",
    description:
      "We help leadership teams create the systems, financial clarity, and decision rhythm needed to grow with control.",
  },
  {
    icon: BriefcaseBusiness,
    iconText: "Senior Support",
    title: "To bring experienced support without adding full-time overhead",
    description:
      "Businesses gain senior-level capability where and when it is needed without long hiring cycles.",
  },
  {
    icon: Gauge,
    iconText: "Execution",
    title: "To close the gap between strategy and execution",
    description:
      "Clear plans only matter when they are implemented. We help teams execute with measurable outcomes.",
  },
  {
    icon: Milestone,
    iconText: "Milestones",
    title: "To prepare businesses for scale, investment, or exit",
    description:
      "From operational readiness to financial storytelling, we help companies build toward major milestones.",
  },
  {
    icon: Handshake,
    iconText: "Long-Term Value",
    title: "To create lasting value for customers, teams, and stakeholders",
    description:
      "Our focus is long-term business health, not short-term fixes.",
  },
];

export default function DifferentiatorsSection() {
  return (
    <section className="py-16 md:py-20">
      <div className="mx-auto max-w-4xl px-6 lg:px-8">
        <div className="mb-12 text-center">
          <h2 className="font-display text-3xl font-bold text-navy">Why We Do</h2>
        </div>

        <div className="space-y-6">
          {differentiators.map((item) => (
            <div key={item.title} className="flex gap-4">
              <div className="flex-shrink-0">
                <div className="flex flex-col items-center gap-2">
                  <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-muted">
                    <item.icon className="h-6 w-6 text-primary" strokeWidth={2} />
                  </div>
                  <span className="text-xs font-medium uppercase tracking-wide text-slate-text/70">
                    {item.iconText}
                  </span>
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
