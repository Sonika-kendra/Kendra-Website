import Image from "next/image";
import { aboutHero } from "@content/about";

export default function AboutHeroSection() {
  return (
    <section className="relative overflow-hidden h-[260px] md:h-[320px] lg:h-[380px]">

      {/* Background Image */}
      <Image
        src={aboutHero.image.src}
        alt={aboutHero.image.alt}
        fill
        priority
        sizes="100vw"
        className="object-cover object-right"
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/40 to-transparent" />

      {/* Content */}
      <div className="relative mx-auto max-w-7xl px-6 py-24 md:py-32 lg:px-8">
        <div className="max-w-xl">
          <h1 className="font-display text-3xl font-bold text-white sm:text-4xl lg:text-5xl">
            {aboutHero.title}
          </h1>

          <p className="mt-4 text-lg text-white/90">
            {aboutHero.description}
          </p>
        </div>
      </div>

    </section>
  );
}
