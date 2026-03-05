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
    iconText: "Planning",
    title: "Structured Growth for Startups",
    description:
      "We help startups create repeatable systems and processes that turn ideas into actionable growth plans.",
    image: "/differentiators/card1.jpg",
  },
  {
    icon: BriefcaseBusiness,
    iconText: "Expertise",
    title: "Senior-Level Guidance",
    description:
      "Access seasoned business leaders to guide your decisions without committing to full-time hires.",
    image: "/differentiators/card2.jpg",
  },
  {
    icon: Gauge,
    iconText: "Performance",
    title: "Executing Strategies Effectively",
    description:
      "Bridge the gap between strategy and results with clear action plans and measurable outcomes.",
    image: "/differentiators/card3.jpg",
  },
  {
    icon: Milestone,
    iconText: "Scaling",
    title: "Prepare for Major Milestones",
    description:
      "From fundraising readiness to operational expansion, we help your business reach key growth targets.",
    image: "/differentiators/card4.jpg",
  },
  {
    icon: Handshake,
    iconText: "Value",
    title: "Creating Long-Term Impact",
    description:
      "We focus on lasting value for customers, employees, and stakeholders rather than short-term fixes.",
    image: "/differentiators/card5.jpg",
  },
];

export default function DifferentiatorsSection() {
  return (
    <section className="mb-5 w-full bg-background">
      {/* Heading */}
      <div className="text-center py-12">
        <h2 className="font-display text-4xl font-bold text-foreground">
          Why We Do
        </h2>
      </div>

      {/* Cards */}
      <div className="grid w-full grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-5">
        {differentiators.map((item) => (
          <div
            key={item.title}
            className="flex h-[650px] flex-col overflow-hidden rounded-xl border border-border bg-card text-card-foreground shadow-md"
          >
            {/* Image */}
            <div className="relative h-[65%] w-full overflow-hidden">
              <img
                src={item.image}
                alt={item.title}
                className="h-full w-full object-cover transition-transform duration-500 hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
            </div>

            {/* Bottom Panel */}
            <div className="flex h-[35%] flex-col items-center px-6 py-5 text-center">
              <div className="mb-3 flex items-center justify-center gap-2">
                <div className="flex h-10 w-10 items-center justify-center rounded-md bg-primary/10">
                  <item.icon className="h-6 w-6 text-primary" strokeWidth={2} />
                </div>

                <span className="text-sm font-medium uppercase tracking-wide text-muted-foreground">
                  {item.iconText}
                </span>
              </div>

              <h3 className="mb-2 font-display text-lg font-semibold text-foreground">
                {item.title}
              </h3>

              <p className="text-sm leading-relaxed text-muted-foreground">
                {item.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
