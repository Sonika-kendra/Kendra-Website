import {
  Wallet,
  Zap,
  Building2,
  BarChart3,
  Target,
  Briefcase,
  DollarSign,
  TrendingUp,
} from "lucide-react";
import { WebsiteUrlConfig } from "@/config/routing";

export const servicesOverview = [
  {
    title: "Top-Line Growth",
    subtitle: "Growth Strategy",
    description:
      "Whether your goal is to strengthen sales performance, improve customer economics, or unlock new channels, we help design and execute growth strategies grounded in data and market realities.",
    benefits: ["Sales performance", "Customer economics", "New channels"],
    icon: TrendingUp,
    href: WebsiteUrlConfig.Fueling_Growth,
  },
  {
    title: "Cost Rationalisation",
    subtitle: "Margin Improvement",
    description:
      "We identify inefficiencies across your operating model and help you redesign cost structures to improve margins while protecting critical capabilities.",
    benefits: [
      "Inefficiency diagnosis",
      "Cost structure redesign",
      "Margin improvement",
    ],
    icon: Zap,
    href: WebsiteUrlConfig.Optimizing_Operations,
  },
  {
    title: "Liquidity Improvement",
    subtitle: "Cash Resilience",
    description:
      "We support businesses in improving cash generation, managing working capital, and building financial resilience in periods of pressure or transition.",
    benefits: ["Cash generation", "Working capital control", "Resilience"],
    icon: Wallet,
    href: WebsiteUrlConfig.Strengthening_Liquidity,
  },
  {
    title: "M&A and Exit Planning",
    subtitle: "Transaction Advisory",
    description:
      "From assessing strategic options to preparing for transactions, we advise on acquisitions, exits, and capital events to maximize value and reduce execution risk.",
    benefits: ["Strategic options", "Transaction readiness", "Execution risk"],
    icon: Building2,
    href: WebsiteUrlConfig.MandM_Exit,
  },
];

export const topLineGrowthProcess = [
  {
    title: "Assess",
    description:
      "Assess sales performance, customer economics, and channel potential to identify high-impact growth opportunities.",
    icon: Target,
  },
  {
    title: "Design",
    description:
      "Design growth initiatives grounded in market data and aligned with your commercial priorities.",
    icon: TrendingUp,
  },
  {
    title: "Execute",
    description:
      "Support execution with clear KPIs and tracking so initiatives translate into sustainable top-line momentum.",
    icon: BarChart3,
  },
];

export const topLineGrowthBenefits = [
  "Sharper sales performance across core channels",
  "Improved customer economics and retention",
  "Actionable channel expansion roadmap",
  "Stronger pricing and commercial discipline",
  "Data-backed growth decision making",
  "Sustainable top-line momentum",
];

export const costRationalisationProcess = [
  {
    title: "Diagnose",
    description:
      "Identify cost drivers and inefficiencies across your operating model through focused analysis.",
    icon: Target,
  },
  {
    title: "Redesign",
    description:
      "Redesign cost structures to improve margins while preserving critical capabilities.",
    icon: Zap,
  },
  {
    title: "Embed",
    description:
      "Embed controls, governance, and performance tracking to sustain improvements over time.",
    icon: BarChart3,
  },
];

export const costRationalisationBenefits = [
  "Improved margins across targeted areas",
  "Lean, capability-protective operating model",
  "Better visibility into structural cost drivers",
  "Improved budget discipline and accountability",
  "Sustainable cost controls, not one-time cuts",
  "Stronger financial performance under pressure",
];

export const liquidityImprovementProcess = [
  {
    title: "Measure",
    description:
      "Assess cash conversion, working capital cycles, and liquidity risks across the business.",
    icon: Target,
  },
  {
    title: "Improve",
    description:
      "Implement practical actions to improve cash generation and optimize working capital.",
    icon: DollarSign,
  },
  {
    title: "Stabilize",
    description:
      "Build liquidity controls and forecasting discipline to strengthen resilience during pressure or transition.",
    icon: BarChart3,
  },
];

export const liquidityImprovementBenefits = [
  "Improved operating cash generation",
  "Healthier working capital position",
  "Better short-term and medium-term liquidity visibility",
  "Reduced cash volatility during transitions",
  "Stronger resilience under market or operational pressure",
  "Practical cash governance embedded in operations",
];

export const maCapabilities = [
  {
    title: "Strategic Option Assessment",
    description:
      "Evaluate acquisitions, exits, and capital event pathways against your strategic and financial objectives.",
    icon: Target,
  },
  {
    title: "Transaction Readiness",
    description:
      "Prepare leadership, financials, and operating narratives for cleaner diligence and smoother execution.",
    icon: Briefcase,
  },
  {
    title: "Deal Execution Support",
    description:
      "Support valuation, structuring, and negotiations to maximize value and reduce execution risk.",
    icon: DollarSign,
  },
];

export const maBenefits = [
  "Clear, objective view of strategic transaction options",
  "Improved preparedness for buyers, investors, and counterparties",
  "Stronger deal economics and execution confidence",
  "Reduced transaction risk through disciplined planning",
  "Better alignment between strategy, timing, and valuation",
  "Practical advisory support from planning through completion",
];

export const maIndustries = [
  "Acquisitions",
  "Exits",
  "Capital Events",
  "Owner-Managed Businesses",
  "Growth-Stage Companies",
  "Operational Turnaround Situations",
];
