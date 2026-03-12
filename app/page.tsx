"use client";

import { useEffect, useRef } from "react";
import { homeAboutUsContent, homeServiceContent } from "@/config/pages/home";
import {
  Hero,
  Services,
  ClientStories,
  GlobalFootprint,
  BusinessHealthCheck,
  Blog
} from "@features/home";
import { useModal } from "@/components/common/sections/leadPopup/context/ModalContext";
// import { CTA } from "@features/footer";

export default function HomePage() {
  const { openLeadPopUp } = useModal();
  const hasOpenedRef = useRef(false);

  useEffect(() => {
    if (!hasOpenedRef.current) {
      const timer = setTimeout(() => {
        openLeadPopUp();
        hasOpenedRef.current = true;
      }, 15000);

      return () => clearTimeout(timer);
    }
  }, [openLeadPopUp]);

  return (
    <main>
      <Hero />
      {/* <Services items={homeContent.services} /> */}
      {/* <WhyKendra {...whyKendra} /> */}
      <Services
      items={homeServiceContent}
      aboutContent={homeAboutUsContent}
    />
      <ClientStories />
      <GlobalFootprint />
      {/* <CTA /> */}
      <BusinessHealthCheck />
      <Blog />
    </main>
  );
}
