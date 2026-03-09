import { WebsiteUrlConfig } from "@/config/routing";

export interface HeroSlide {
  title: string;
  subtitle: string;
  cta: string;
  ctaLink: string;
  image: string;
}

export const heroSlidContent = [
  {
    title: "Service Lines at Kendra",
    subtitle:
      "In every engagement, our objective is to improve financial performance and strategic clarity while remaining practical, focused, and outcome-driven.",
    cta: "Explore Services",
    ctaLink: WebsiteUrlConfig.Service,
    image: "/hero/slide-1.png",
  },
  {
    title: "Top-Line Growth",
    subtitle:
      "Whether your goal is to strengthen sales performance, improve customer economics, or unlock new channels, we help design and execute growth strategies grounded in data and market realities.",
    cta: "Learn More",
    ctaLink: WebsiteUrlConfig.Fueling_Growth,
    image: "/hero/slide-2.jpg",
  },
  {
    title: "Cost Rationalisation",
    subtitle:
      "We identify inefficiencies across your operating model and help you redesign cost structures to improve margins while protecting critical capabilities.",
    cta: "Learn More",
    ctaLink: WebsiteUrlConfig.Optimizing_Operations,
    image: "/hero/slide-3.jpg",
  },
  {
    title: "Liquidity Improvement",
    subtitle:
      "We support businesses in improving cash generation, managing working capital, and building financial resilience in periods of pressure or transition.",
    cta: "Learn More",
    ctaLink: WebsiteUrlConfig.Strengthening_Liquidity,
    image: "/hero/slide-4.jpg",
  },
  {
    title: "M&A and Exit Planning",
    subtitle:
      "From assessing strategic options to preparing for transactions, we advise on acquisitions, exits, and capital events to maximize value and reduce execution risk.",
    cta: "Learn More",
    ctaLink: WebsiteUrlConfig.MandM_Exit,
    image: "/hero/slide-4.jpg",
  },
];

export const homeAboutUsContent = {
  heading: "About Us",
  description:
    "Kendra International empowers businesses with strategic solutions, helping them achieve growth, efficiency, and financial resilience.",
};

export const homeServiceContent = [
  {
    title: "Top-Line Growth",
    slug: WebsiteUrlConfig.Fueling_Growth,
    description:
      "Strengthen sales performance, improve customer economics, and unlock new channels with data-led growth strategies.",
    icon: "growth",
    image: "/services/service-1.jpg",
  },
  {
    title: "Cost Rationalisation",
    slug: WebsiteUrlConfig.Optimizing_Operations,
    description:
      "Redesign cost structures and remove inefficiencies to improve margins while protecting critical capabilities.",
    icon: "operations",
    image: "/services/service-2.jpg",
  },
  {
    title: "M&A and Exit Planning",
    slug: WebsiteUrlConfig.MandM_Exit,
    description:
      "Assess strategic options and prepare for acquisitions, exits, and capital events to maximize value.",
    icon: "strategy",
    image: "/services/service-4.jpg",
  },
  {
    title: "Liquidity Improvement",
    slug: WebsiteUrlConfig.Strengthening_Liquidity,
    description:
      "Improve cash generation, optimize working capital, and build resilience during pressure or transition.",
    icon: "liquidity",
    image: "/services/service-3.jpg",
  },
];

export const whyKendra = {
  heading: "Why Kendra International?",
  reasons: [
    {
      title: "Expertise",
      points: ["CFO-level expertise"],
    },
    {
      title: "Speed",
      points: ["Results in hours/days"],
    },
    {
      title: "Results",
      points: ["Fast growth milestones"],
    },
  ],
};

export const homeContent = {
  whyKendra: {
    heading: "Why Kendra International?",
    reasons: [
      {
        title: "Expertise",
        points: ["CFO-level expertise"],
      },
      {
        title: "Speed",
        points: ["Results in hours/days"],
      },
      {
        title: "Results",
        points: ["Fast growth milestones"],
      },
    ],
  },
};
