import Image from "next/image";
import {
  BarChart3,
  BriefcaseBusiness,
  Gauge,
  Handshake,
  Milestone,
} from "lucide-react";
import { aboutDifferentiators } from "@content/about";

const iconMap = {
  BarChart3,
  BriefcaseBusiness,
  Gauge,
  Milestone,
  Handshake,
} as const;

export default function DifferentiatorsSection() {
  return (
    <section className="mb-5 w-full bg-background">
      {/* Heading */}
      <div className="text-center py-12">
        <h2 className="font-display text-4xl font-bold text-foreground">
          {aboutDifferentiators.title}
        </h2>
      </div>

      {/* Cards */}
      <div className="grid w-full grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-5">
        {aboutDifferentiators.cards.map((item) => {
          const Icon = iconMap[item.icon];

          return (
            <div
              key={item.title}
              className="flex h-[650px] flex-col overflow-hidden rounded-xl border border-border bg-card text-card-foreground shadow-md"
            >
              {/* Image */}
              <div className="relative h-[65%] w-full overflow-hidden">
                <Image
                  src={item.image.src}
                  alt={item.image.alt}
                  fill
                  sizes="(min-width: 1024px) 20vw, (min-width: 640px) 50vw, 100vw"
                  className="object-cover transition-transform duration-500 hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
              </div>

              {/* Bottom Panel */}
              <div className="flex h-[35%] flex-col items-center px-6 py-5 text-center">
                <div className="mb-3 flex items-center justify-center gap-2">
                  <div className="flex h-10 w-10 items-center justify-center rounded-md bg-primary/10">
                    <Icon className="h-6 w-6 text-primary" strokeWidth={2} />
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
          );
        })}
      </div>
    </section>
  );
}
