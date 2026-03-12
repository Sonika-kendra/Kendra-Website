import type { Metadata } from "next";
import { pageMeta } from "@config/site";
import { serviceDetailPages } from "@/config/pages/services";
import { ServiceDetailPage } from "@features/services";

export const metadata: Metadata = pageMeta.ma as Metadata;

export default function MAExitPlanningPage() {
  return <ServiceDetailPage page={serviceDetailPages.maExitStrategy} />;
}
