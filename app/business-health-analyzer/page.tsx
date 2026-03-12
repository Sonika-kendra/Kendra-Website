"use client"
import { BusinessHealthCheck } from "@features/home";
import Image from "next/image";
import { aboutHero } from "@/config/pages/about";
import { useRef } from "react";
import DownloadButton from "@/components/common/sections/DownloadButton";

export default function BusinessHealthAnalyzerPage() {
    const pdfRef = useRef<HTMLDivElement>(null);

  return (
    <main>
      <div className="relative h-[260px] md:h-[320px] lg:h-[380px]" ref={pdfRef}>
        <Image
          src={aboutHero.image.src}
          alt={aboutHero.image.alt}
          fill
          priority
          sizes="100vw"
          className="object-cover object-right"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/40 to-transparent" />
      </div>
        <DownloadButton pdfRef={pdfRef} fileName="business-health-analyzer.pdf" />
        <div className="relative">
          <BusinessHealthCheck />
        </div>
    </main>
  );
}
