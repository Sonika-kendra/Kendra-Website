import type { Metadata } from "next";
import { BusinessHealthCheck } from "@features/home";
import { pageMeta } from "@config/site";
import Image from "next/image";
import { aboutHero } from "@content/about";

export const metadata: Metadata = pageMeta.businessHealth as Metadata;

export default function BusinessHealthAnalyzerPage() {
  return (
    <main>
      <div className="relative">
        <Image
          src={aboutHero.image.src}
          alt={aboutHero.image.alt}
          fill
          priority
          sizes="100vw"
          className="object-cover object-right"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/40 to-transparent" />
        <div className="relative">
          <BusinessHealthCheck transparent={true} />
        </div>
      </div>
    </main>
  );
}
