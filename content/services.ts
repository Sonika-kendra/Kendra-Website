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
import type { ServicePageConfig } from "@features/services/interfaces";

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

const topLineGrowthProcess = [
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

const topLineGrowthBenefits = [
  "Sharper sales performance across core channels",
  "Improved customer economics and retention",
  "Actionable channel expansion roadmap",
  "Stronger pricing and commercial discipline",
  "Data-backed growth decision making",
  "Sustainable top-line momentum",
];

const topLineGrowthLevers = [
  {
    title: "Sales Performance",
    description:
      "Improve conversion quality, pipeline health, and commercial focus in the sales engine.",
  },
  {
    title: "Customer Economics",
    description:
      "Strengthen pricing, retention, and unit economics to improve growth quality.",
  },
  {
    title: "Channel Expansion",
    description:
      "Prioritize and launch channels with the best strategic fit, revenue potential, and execution feasibility.",
  },
  {
    title: "Commercial Rhythm",
    description:
      "Set practical targets, performance reviews, and ownership models that sustain momentum.",
  },
];

const costRationalisationProcess = [
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

const costRationalisationBenefits = [
  "Improved margins across targeted areas",
  "Lean, capability-protective operating model",
  "Better visibility into structural cost drivers",
  "Improved budget discipline and accountability",
  "Sustainable cost controls, not one-time cuts",
  "Stronger financial performance under pressure",
];

const costFocusAreas = [
  {
    title: "Operating Model",
    description:
      "Remove duplication, simplify structures, and align accountability with value delivery.",
  },
  {
    title: "Spend and Procurement",
    description:
      "Improve supplier economics, category control, and purchasing discipline.",
  },
  {
    title: "Process and Systems",
    description:
      "Simplify workflows and reduce waste through practical process and systems redesign.",
  },
  {
    title: "Governance and Controls",
    description:
      "Build consistent decision rules and cost ownership to sustain gains over time.",
  },
];

const liquidityImprovementProcess = [
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

const liquidityImprovementBenefits = [
  "Improved operating cash generation",
  "Healthier working capital position",
  "Better short-term and medium-term liquidity visibility",
  "Reduced cash volatility during transitions",
  "Stronger resilience under market or operational pressure",
  "Practical cash governance embedded in operations",
];

const liquidityPriorityLevers = [
  {
    title: "Cash Forecasting",
    description:
      "Build clear short-term and medium-term forecasts to improve cash decision quality.",
  },
  {
    title: "Working Capital",
    description:
      "Improve receivables, payables, and inventory cycles to release trapped cash.",
  },
  {
    title: "Cash Controls",
    description:
      "Strengthen payment governance and spending discipline to protect liquidity.",
  },
  {
    title: "Contingency Planning",
    description:
      "Prepare practical response plans for operating pressure, refinancing events, or transition periods.",
  },
];

const maCapabilities = [
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

const maBenefits = [
  "Clear, objective view of strategic transaction options",
  "Improved preparedness for buyers, investors, and counterparties",
  "Stronger deal economics and execution confidence",
  "Reduced transaction risk through disciplined planning",
  "Better alignment between strategy, timing, and valuation",
  "Practical advisory support from planning through completion",
];

const maEngagementFlow = [
  {
    title: "Clarify Strategic Options",
    description:
      "Define the strategic path, timing considerations, and value priorities before entering execution.",
  },
  {
    title: "Prepare for Transaction",
    description:
      "Prepare financials, operational narratives, and leadership alignment to support efficient diligence.",
  },
  {
    title: "Run Diligence and Structuring",
    description:
      "Support valuation and structure decisions to protect value and reduce downside risk.",
  },
  {
    title: "Execute and Transition",
    description:
      "Navigate closing and transition priorities with practical execution support.",
  },
];

const maTransactionContexts = [
  "Acquisitions",
  "Exits",
  "Capital Events",
  "Owner-Managed Businesses",
  "Growth-Stage Companies",
  "Operational Turnaround Situations",
];

export const serviceDetailPages = {
  fuelingGrowth: {
    hero: {
      title: "Top-Line Growth",
      description:
        "Whether your goal is to strengthen sales performance, improve customer economics, or unlock new channels, we help design and execute growth strategies grounded in data and market realities.",
      actions: [
        {
          label: "Accelerate Revenue Growth",
          href: WebsiteUrlConfig.Contact,
          variant: "hero",
        },
        {
          label: "All Services",
          href: WebsiteUrlConfig.Service,
          variant: "hero",
        },
      ],
    },
    sections: [
      {
        id: "growth-process",
        type: "process",
        title: "How We Drive Top-Line Growth",
        description:
          "Data-led strategy, practical execution, and measurable commercial outcomes.",
        items: topLineGrowthProcess,
      },
      {
        id: "growth-benefits",
        type: "benefits",
        title: "Outcomes You Can Expect",
        tone: "muted",
        items: topLineGrowthBenefits,
      },
      {
        id: "growth-levers",
        type: "highlights",
        title: "Growth Levers We Activate",
        items: topLineGrowthLevers,
      },
      {
        id: "growth-cta",
        type: "cta",
        title: "Ready to Grow Your Top Line?",
        description:
          "Let us prioritize the initiatives that can drive revenue performance in your current operating reality.",
        tone: "muted",
        actions: [
          {
            label: "Schedule Consultation",
            href: WebsiteUrlConfig.Contact,
            variant: "primary",
          },
          {
            label: "Back to Services",
            href: WebsiteUrlConfig.Service,
            variant: "secondary",
          },
        ],
      },
    ],
  },
  optimizingOperations: {
    hero: {
      title: "Cost Rationalisation",
      description:
        "We identify inefficiencies across your operating model and help you redesign cost structures to improve margins while protecting critical capabilities.",
      actions: [
        {
          label: "Improve Margins",
          href: WebsiteUrlConfig.Contact,
          variant: "hero",
        },
        {
          label: "All Services",
          href: WebsiteUrlConfig.Service,
          variant: "hero",
        },
      ],
    },
    sections: [
      {
        id: "cost-process",
        type: "process",
        title: "Our 3-Phase Approach",
        description:
          "Move from inefficiency diagnosis to durable margin improvement.",
        items: costRationalisationProcess,
      },
      {
        id: "cost-benefits",
        type: "benefits",
        title: "What You Can Improve",
        tone: "muted",
        items: costRationalisationBenefits,
      },
      {
        id: "cost-focus-areas",
        type: "highlights",
        title: "Common Cost Focus Areas",
        items: costFocusAreas,
      },
      {
        id: "cost-cta",
        type: "cta",
        title: "Ready to Strengthen Margins?",
        description:
          "Let us identify practical cost levers that improve profitability without weakening critical capabilities.",
        tone: "muted",
        actions: [
          {
            label: "Schedule Consultation",
            href: WebsiteUrlConfig.Contact,
            variant: "primary",
          },
          {
            label: "Back to Services",
            href: WebsiteUrlConfig.Service,
            variant: "secondary",
          },
        ],
      },
    ],
  },
  strengtheningLiquidity: {
    hero: {
      title: "Liquidity Improvement",
      description:
        "We support businesses in improving cash generation, managing working capital, and building financial resilience in periods of pressure or transition.",
      actions: [
        {
          label: "Strengthen Liquidity",
          href: WebsiteUrlConfig.Contact,
          variant: "hero",
        },
        {
          label: "All Services",
          href: WebsiteUrlConfig.Service,
          variant: "hero",
        },
      ],
    },
    sections: [
      {
        id: "liquidity-process",
        type: "process",
        title: "Liquidity Improvement Framework",
        description:
          "Improve cash visibility, release working capital, and build durable financial resilience.",
        items: liquidityImprovementProcess,
      },
      {
        id: "liquidity-benefits",
        type: "benefits",
        title: "What You Can Improve",
        tone: "muted",
        items: liquidityImprovementBenefits,
      },
      {
        id: "liquidity-levers",
        type: "highlights",
        title: "Priority Liquidity Levers",
        items: liquidityPriorityLevers,
      },
      {
        id: "liquidity-cta",
        type: "cta",
        title: "Ready to Improve Cash Resilience?",
        description:
          "Let us identify the most practical liquidity actions for your current business context.",
        tone: "muted",
        actions: [
          {
            label: "Schedule Consultation",
            href: WebsiteUrlConfig.Contact,
            variant: "primary",
          },
          {
            label: "Back to Services",
            href: WebsiteUrlConfig.Service,
            variant: "secondary",
          },
        ],
      },
    ],
  },
  maExitStrategy: {
    hero: {
      title: "M&A and Exit Planning",
      description:
        "From assessing strategic options to preparing for transactions, we advise on acquisitions, exits, and capital events to maximize value and reduce execution risk.",
      actions: [
        {
          label: "Discuss Transaction Priorities",
          href: WebsiteUrlConfig.Contact,
          variant: "hero",
        },
        {
          label: "All Services",
          href: WebsiteUrlConfig.Service,
          variant: "hero",
        },
      ],
    },
    sections: [
      {
        id: "ma-capabilities",
        type: "process",
        title: "Our M&A and Exit Capabilities",
        description:
          "Advisory support from strategic option assessment through transaction execution.",
        items: maCapabilities,
      },
      {
        id: "ma-benefits",
        type: "benefits",
        title: "Why Teams Partner With Us",
        tone: "muted",
        items: maBenefits,
      },
      {
        id: "ma-flow",
        type: "timeline",
        title: "Typical Engagement Flow",
        items: maEngagementFlow,
      },
      {
        id: "ma-contexts",
        type: "tags",
        title: "Typical Transaction Contexts",
        tone: "muted",
        icon: TrendingUp,
        items: maTransactionContexts,
      },
      {
        id: "ma-cta",
        type: "cta",
        title: "Considering a Transaction or Exit?",
        description:
          "Let us align your strategic options, preparedness, and execution plan before the process begins.",
        actions: [
          {
            label: "Start the Conversation",
            href: WebsiteUrlConfig.Contact,
            variant: "primary",
          },
          {
            label: "Back to Services",
            href: WebsiteUrlConfig.Service,
            variant: "secondary",
          },
        ],
      },
    ],
  },
} satisfies Record<string, ServicePageConfig>;

export type ServiceDetailPageKey = keyof typeof serviceDetailPages;
