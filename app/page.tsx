"use client";

import { useEffect, useRef } from "react";
import { useModal } from "@/context/ModalContext";
import { homeAboutUsContent, homeContent, homeServiceContent } from "@content/home";
import {
  Hero,
  Services,
  ClientStories,
  GlobalFootprint,
  BusinessHealthCheck,
  WhyKendra,
} from "@features/home";
import { CTA } from "@features/footer";

export default function HomePage() {
  const { openLeadPopUp } = useModal();
  const hasOpenedRef = useRef(false); // local flag

  useEffect(() => {
    if (!hasOpenedRef.current) {
      openLeadPopUp();
      hasOpenedRef.current = true; // mark as opened
    }
  }, [openLeadPopUp]);

  return (
    <main>
      <Hero />
      {/* <Services items={homeContent.services} /> */}
      {/* <WhyKendra {...homeContent.whyKendra} /> */}
      <Services
      items={homeServiceContent}
      aboutContent={homeAboutUsContent}
    />
      <ClientStories />
      <GlobalFootprint />
      <CTA />
      <BusinessHealthCheck />
    </main>
  );
}
