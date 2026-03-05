"use client";

import Image from "next/image";
import { CheckCircle2, Target, Users, Zap } from "lucide-react";
import { aboutValues } from "@content/about";

const ICONS = {
  Target,
  Zap,
  Users,
  CheckCircle2,
} as const;

export default function ValuesSection() {
  return (
    <section className="relative w-full py-24 overflow-hidden">

      {/* Background Image */}
      <Image
        src={aboutValues.image.src}
        alt={aboutValues.image.alt}
        fill
        sizes="100vw"
        className="object-cover"
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/75 via-black/65 to-black/75"></div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6">

        {/* Heading */}
        <div className="text-center mb-16">
          <h2 className="font-display text-4xl font-bold text-white">
            {aboutValues.title}
          </h2>

          <p className="mt-4 text-white/80 max-w-2xl mx-auto">
            {aboutValues.description}
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {aboutValues.cards.map((card) => {
            const Icon = ICONS[card.icon];
            return (
              <div
                key={card.title}
                className="group p-6 rounded-xl border border-white/20 bg-white/10 backdrop-blur-md text-white transition duration-300 hover:-translate-y-2 hover:bg-white/20 hover:shadow-xl"
              >
                <Icon
                  className="h-6 w-6 text-white mb-4 transition group-hover:scale-110"
                  strokeWidth={1.5}
                />
                <h3 className="font-display font-semibold text-white">
                  {card.title}
                </h3>
                <p className="mt-2 text-sm text-white/80">
                  {card.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
