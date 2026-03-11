import type { ServiceSectionTone } from "../interfaces";

const DEFAULT_SECTION_CLASS_NAME = "py-10 md:py-14";
const MUTED_SECTION_CLASS_NAME = `bg-muted ${DEFAULT_SECTION_CLASS_NAME}`;

export function getServiceSectionClassName(tone?: ServiceSectionTone): string {
  return tone === "muted" ? MUTED_SECTION_CLASS_NAME : DEFAULT_SECTION_CLASS_NAME;
}
