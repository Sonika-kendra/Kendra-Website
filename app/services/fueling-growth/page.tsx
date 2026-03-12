import type { Metadata } from "next";
import { pageMeta } from "@config/site";
import { serviceDetailPages } from "@/config/pages/services";
import { ServiceDetailPage } from "@features/services";

export const metadata: Metadata = pageMeta.consulting as Metadata;

export default function TopLineGrowthPage() {
  return <ServiceDetailPage page={serviceDetailPages.fuelingGrowth} />;
}
