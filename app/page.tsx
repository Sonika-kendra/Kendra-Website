import { homeContent } from "@/content/home";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import CTA from "@/components/CTA";
import WhyKendra from "@/components/WhyKendra";
import BusinessHealthCheck from "@/components/BusinessHealthCheck";
import LeadPopup  from "@/components/LeadPopup";

export default function HomePage() {
  return (
    <>
      <LeadPopup />
      <Hero { ...homeContent.hero } />
      <Services items = { homeContent.services } />
      <BusinessHealthCheck />
      <WhyKendra { ...homeContent.whyKendra } />
      <CTA />
    </>
  );
}
