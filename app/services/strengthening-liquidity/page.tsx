import type { Metadata } from "next";
import { pageMeta } from "@config/site";
import { serviceDetailPages } from "@/config/pages/services";
import { ServiceDetailPage } from "@features/services";

export const metadata: Metadata = pageMeta.liquidity as Metadata;

export default function LiquidityImprovementPage() {
  return <ServiceDetailPage page={serviceDetailPages.strengtheningLiquidity} />;
}
