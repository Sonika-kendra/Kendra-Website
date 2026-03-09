import type { Metadata } from "next";
import { BusinessHealthCheck } from "@features/home";
import { pageMeta } from "@config/site";

export const metadata: Metadata = pageMeta.businessHealth as Metadata;

export default function BusinessHealthAnalyzerPage() {
  return (
    <main className="bg-background text-foreground">
      <BusinessHealthCheck />
    </main>
  );
}
