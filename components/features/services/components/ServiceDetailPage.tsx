import Link from "next/link";
import HeroSection from "@/components/common/sections/HeroSection";
import { aboutHero } from "@/config/pages/about";
import { resolveServiceActionClass } from "../config";
import type { ServicePageConfig } from "../interfaces";
import ServiceSectionRenderer from "./ServiceSectionRenderer";

interface Props {
  page: ServicePageConfig;
}

export default function ServiceDetailPage({ page }: Props) {
  return (
    <main>
      <HeroSection
        title={page.hero.title}
        description={page.hero.description}
        imageUrl={aboutHero.image.src}
        imageAlt={aboutHero.image.alt}
        withWave={false}
      >
        <div className="flex flex-wrap gap-4">
          {page.hero.actions.map((action) => (
            <Link
              key={`hero-${action.label}`}
              href={action.href}
              className={resolveServiceActionClass(action, "hero")}
            >
              {action.label}
            </Link>
          ))}
        </div>
      </HeroSection>

      {page.sections.map((section) => (
        <ServiceSectionRenderer key={section.id} section={section} />
      ))}
    </main>
  );
}
