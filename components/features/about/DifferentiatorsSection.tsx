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
    image: "/differentiators/card1.jpg",
  },
  {
    icon: BriefcaseBusiness,
    iconText: "Senior Support",
    title: "To bring experienced support without adding full-time overhead",
    description:
      "Businesses gain senior-level capability where and when it is needed without long hiring cycles.",
    image: "/differentiators/card2.jpg",
  },
  {
    icon: Gauge,
    iconText: "Execution",
    title: "To close the gap between strategy and execution",
    description:
      "Clear plans only matter when they are implemented. We help teams execute with measurable outcomes.",
    image: "/differentiators/card3.jpg",
  },
  {
    icon: Milestone,
    iconText: "Milestones",
    title: "To prepare businesses for scale, investment, or exit",
    description:
      "From operational readiness to financial storytelling, we help companies build toward major milestones.",
    image: "/differentiators/card4.jpg",
  },
  {
    icon: Handshake,
    iconText: "Long-Term Value",
    title: "To create lasting value for customers, teams, and stakeholders",
    description:
      "Our focus is long-term business health, not short-term fixes.",
    image: "/differentiators/card5.jpg",
  },
];

export default function DifferentiatorsSection() {
  return (
    <section className="w-full">
      {/* Heading */}
      <div className="text-center py-12">
        <h2 className="font-display text-3xl font-bold text-navy">
          Why We Do
        </h2>
      </div>

      {/* Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 w-full">
        {differentiators.map((item) => (
          <div
            key={item.title}
            className="flex flex-col h-[500px] bg-white shadow-sm"
          >
            {/* Image */}
            <div className="h-[70%] w-full overflow-hidden">
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
              />
            </div>

            {/* Bottom Panel */}
            <div className="h-[30%] px-6 py-5 flex flex-col items-center text-center">
              <div className="flex items-center justify-center gap-2 mb-2">
                <div className="flex h-9 w-9 items-center justify-center rounded-md bg-navy/10">
                  <item.icon className="h-5 w-5 text-navy" strokeWidth={2} />
                </div>

                <span className="text-xs font-medium uppercase tracking-wide text-gray-500">
                  {item.iconText}
                </span>
              </div>

              <h3 className="font-display text-sm font-semibold text-navy mb-2">
                {item.title}
              </h3>

              <p className="text-xs text-gray-600 leading-relaxed">
                {item.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}