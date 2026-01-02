import { homeContent } from "@/content/home";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import CTA from "@/components/CTA";
import WhyKendra from "@/components/WhyKendra";
import BusinessHealthCheck from "@/components/BusinessHealthCheck";

export default function HomePage() {
  return (
    <>
      <Hero { ...homeContent.hero } />
      <Services items = { homeContent.services } />
      <WhyKendra { ...homeContent.whyKendra } />
      <BusinessHealthCheck />
      <CTA />
    </>
  );
}
