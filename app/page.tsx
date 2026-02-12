import { homeContent } from "@content/home";
import {
  Hero,
  WhyKendra,
  Services,
  ClientStories,
  GlobalFootprint,
  BusinessHealthCheck,
} from "@features/home";
import { CTA } from "@features/footer";

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
