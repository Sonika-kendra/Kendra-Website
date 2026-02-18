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
      <Services
      items={homeServiceContent}
      aboutContent={homeAboutUsContent}
    />
      {/* <WhyKendra {...homeContent.whyKendra} /> */}
      <ClientStories />
      <GlobalFootprint />
      <CTA />
      <BusinessHealthCheck />
    </main>
  );
}
