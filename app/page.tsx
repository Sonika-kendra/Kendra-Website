import { homeContent } from "@/content/home";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import CTA from "@/components/CTA";
import WhyKendra from "@/components/WhyKendra";
import BusinessHealthCheck from "@/components/BusinessHealthCheck";
import ClientStories from "@/components/ClientStories";
import GlobalFootprint from "@/components/GlobalFootprint";

export default function HomePage() {
  return (
    <main>
      <Hero />
      <Services items={homeContent.services} />
      <WhyKendra {...homeContent.whyKendra} />
      <ClientStories />
      <GlobalFootprint />
      <BusinessHealthCheck />
      <CTA />
    </main>
  );
}
