import type { LucideIcon } from "lucide-react";

export type ServiceSectionTone = "default" | "muted";

export type ServiceActionVariant = "hero" | "primary" | "secondary";

export interface ServiceActionConfig {
  label: string;
  href: string;
  variant?: ServiceActionVariant;
  className?: string;
}

export interface ServiceHeroConfig {
  title: string;
  description: string;
  actions: ServiceActionConfig[];
}

export interface ServiceProcessItem {
  title: string;
  description: string;
  icon: LucideIcon;
}

export interface ServiceHighlightItem {
  title: string;
  description: string;
}

export interface ServiceTimelineItem {
  title: string;
  description: string;
}

export interface BaseSectionConfig {
  id: string;
  title: string;
  description?: string;
  tone?: ServiceSectionTone;
}

export interface ProcessSectionConfig extends BaseSectionConfig {
  type: "process";
  description: string;
  items: ServiceProcessItem[];
}

export interface BenefitsSectionConfig extends BaseSectionConfig {
  type: "benefits";
  items: string[];
}

export interface HighlightsSectionConfig extends BaseSectionConfig {
  type: "highlights";
  items: ServiceHighlightItem[];
}

export interface TimelineSectionConfig extends BaseSectionConfig {
  type: "timeline";
  items: ServiceTimelineItem[];
}

export interface TagsSectionConfig extends BaseSectionConfig {
  type: "tags";
  items: string[];
  icon?: LucideIcon;
}

export interface CtaSectionConfig extends BaseSectionConfig {
  type: "cta";
  description: string;
  actions: ServiceActionConfig[];
}

export type ServiceSectionConfig =
  | ProcessSectionConfig
  | BenefitsSectionConfig
  | HighlightsSectionConfig
  | TimelineSectionConfig
  | TagsSectionConfig
  | CtaSectionConfig;

export type ServiceSectionType = ServiceSectionConfig["type"];

export interface ServicePageConfig {
  hero: ServiceHeroConfig;
  sections: ServiceSectionConfig[];
}
