import { homeContent } from "@/content/home";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import CTA from "@/components/CTA";

export default function HomePage() {
  return (
    <>
      <Hero {...homeContent.hero} />
      <Services items={homeContent.services} />
      <CTA />
    </>
  );
}
