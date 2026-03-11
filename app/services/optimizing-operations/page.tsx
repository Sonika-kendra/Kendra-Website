import type { Metadata } from "next";
import { pageMeta } from "@config/site";
import { serviceDetailPages } from "@content/services";
import { ServiceDetailPage } from "@features/services";

export const metadata: Metadata = pageMeta.cost as Metadata;

export default function CostRationalisationPage() {
  return <ServiceDetailPage page={serviceDetailPages.optimizingOperations} />;
}
