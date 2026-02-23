import type { Metadata } from "next";
import {
  AboutCtaSection,
  AboutDifferentiatorsSection,
  AboutHeroSection,
  AboutStorySection,
  AboutValuesSection,
} from "@features/about";
import { aboutMeta } from "@content/about";

export const metadata: Metadata = aboutMeta;

export default function AboutPage() {
  return (
    <main>
      <AboutHeroSection />
      <AboutStorySection />
      <AboutValuesSection />
      <AboutDifferentiatorsSection />
      <AboutCtaSection />
    </main>
  );
}
