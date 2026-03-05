import {
  AboutDifferentiatorsSection,
  AboutHeroSection,
  AboutTeamSection,
  AboutStorySection,
  AboutValuesSection,
} from "@features/about";

export default function AboutPage() {
  return (
    <main className="bg-background text-foreground">
      <AboutHeroSection />
      <AboutStorySection />
      <AboutTeamSection />
      <AboutValuesSection />
      <AboutDifferentiatorsSection />
      {/* <AboutCtaSection /> */}
    </main>
  );
}
