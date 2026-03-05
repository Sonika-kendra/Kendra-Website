import {
  AboutDifferentiatorsSection,
  AboutHeroSection,
  AboutStorySection,
  AboutValuesSection,
} from "@features/about";

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
