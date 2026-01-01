// lib/lazyIcons.ts
import dynamic from "next/dynamic";
import { LucideIcon } from "lucide-react";

export const lazyIcons: Record<string, () => Promise<{ default: LucideIcon }>> = {
  "trending-up": () =>
    import("lucide-react").then((m) => ({ default: m.TrendingUp })),

  settings: () =>
    import("lucide-react").then((m) => ({ default: m.Settings })),

  wallet: () =>
    import("lucide-react").then((m) => ({ default: m.Wallet })),

  briefcase: () =>
    import("lucide-react").then((m) => ({ default: m.Briefcase })),
};
