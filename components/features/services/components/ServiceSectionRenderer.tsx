import type { ServiceSectionConfig } from "../interfaces";
import {
  ServiceBenefitsSection,
  ServiceCtaSection,
  ServiceHighlightsSection,
  ServiceProcessSection,
  ServiceTagsSection,
  ServiceTimelineSection,
} from "./sections";

interface Props {
  section: ServiceSectionConfig;
}

export default function ServiceSectionRenderer({ section }: Props) {
  switch (section.type) {
    case "process":
      return <ServiceProcessSection section={section} />;
    case "benefits":
      return <ServiceBenefitsSection section={section} />;
    case "highlights":
      return <ServiceHighlightsSection section={section} />;
    case "timeline":
      return <ServiceTimelineSection section={section} />;
    case "tags":
      return <ServiceTagsSection section={section} />;
    case "cta":
      return <ServiceCtaSection section={section} />;
    default:
      return null;
  }
}
