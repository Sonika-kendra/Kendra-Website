import Image from "next/image";
import { ReactNode } from "react";

interface HeroSectionProps {
  title: string;
  description: string;
  imageUrl: string;
  imageAlt: string;
  withWave?: boolean;
  children?: ReactNode;
}

export default function HeroSection({ title, description, imageUrl, imageAlt, withWave = false, children }: HeroSectionProps) {
  return (
    <section className="relative overflow-hidden">

      {/* Background Image */}
      <Image
        src={imageUrl}
        alt={imageAlt}
        fill
        priority
        sizes="100vw"
        className="object-cover object-right"
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/40 to-transparent" />

      {/* Content */}
      <div className="relative mx-auto max-w-7xl px-6 py-20 lg:px-8 md:py-28">
        <div className="max-w-3xl">
          <h1 className="font-display text-3xl font-bold text-white sm:text-4xl lg:text-5xl">
            {title}
          </h1>
          <p className="mt-3 text-lg text-white/90">
            {description}
          </p>
          {children && <div className="mt-8">{children}</div>}
        </div>
      </div>

      {withWave && (
        <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-none">
          <svg
            viewBox="0 0 1440 60"
            className="h-8 w-full sm:h-12"
            preserveAspectRatio="none"
            aria-hidden="true"
          >
            <path
              d="M0,60 L0,20 Q360,0 720,20 Q1080,40 1440,20 L1440,60 Z"
              fill="var(--background)"
            />
          </svg>
        </div>
      )}
    </section>
  );
}
