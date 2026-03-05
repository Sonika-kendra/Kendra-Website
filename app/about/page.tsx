import type { Metadata } from "next";
import {
  AboutDifferentiatorsSection,
  AboutHeroSection,
  AboutStorySection,
  AboutValuesSection,
} from "@features/about";
import { aboutMeta } from "@content/about";

export const metadata: Metadata = aboutMeta;

export default function AboutPage() {
  return (
    <main className="bg-background text-foreground">
      <AboutHeroSection />
      <AboutStorySection />
      {/* <AboutFounderSection /> */}
      <AboutValuesSection />
      <AboutDifferentiatorsSection />
      {/* <AboutCtaSection /> */}
    </main>
  );
}
