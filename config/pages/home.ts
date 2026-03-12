import { WebsiteUrlConfig } from "../routing";

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

export const testimonials = [
  {
    quote:
      "Using this platform has completely transformed the way our team collaborates. Productivity has skyrocketed, and everyone loves the intuitive interface.",
    name: "Alex Johnson",
    role: "Product Manager",
    image: "/testimonial/slide-1.jpg",
    type: "image",
  },
  {
    quote:
      "The customer support is phenomenal. Whenever we had an issue, the team resolved it immediately and even suggested improvements we hadn't thought of.",
    name: "Priya Mehta",
    role: "Operations Lead",
    image: "/testimonial/slide-2.mp4",
    type: "video",
  },
  {
    quote:
      "Since adopting this solution, our workflow has become seamless. Tasks that used to take hours now take minutes. Highly recommend it!",
    name: "Michael Lee",
    role: "Software Engineer",
    image: "/testimonial/user-box-svgrepo-com.svg",
    type: "svg",
  },
  {
    quote:
      "The analytics and reporting features have given us insights we never had before. We can now make data-driven decisions faster than ever.",
    name: "Sara Kim",
    role: "Data Analyst",
    image: "/testimonial/slide-4.jpg",
    type: "image",
  },
  {
    quote:
      "I was skeptical at first, but this tool exceeded all expectations. Our team morale and efficiency have improved dramatically.",
    name: "David Brown",
    role: "Team Lead",
    image: "/testimonial/slide-5.mp4",
    type: "video",
  },
];

export const homeHeroContent = {
  primaryCtaLabel: "Get Business Report",
  servicesCtaLabel: "Services",
  servicesCtaHref: WebsiteUrlConfig.Service,
  contactCtaLabel: "Contact Us",
  contactCtaHref: WebsiteUrlConfig.Contact,
  previousSlideAriaLabel: "Previous slide",
  nextSlideAriaLabel: "Next slide",
  goToSlideAriaPrefix: "Go to slide",
} as const;

export const homeServicesSectionContent = {
  aboutHref: WebsiteUrlConfig.About,
  discoverLabel: "Discover",
} as const;

export type WhyKendraHighlightIcon = "User" | "Zap" | "Target";

export const whyKendraSectionContent = {
  subtitle: "Why businesses trust Kendra for transformation",
  highlights: [
    {
      icon: "User",
      title: "Expert Team",
      description: "CFO-level expertise with proven track record",
      features: ["20+ years experience", "Multi-sector expertise"],
    },
    {
      icon: "Zap",
      title: "Speed First",
      description: "Results delivered in hours, not months",
      features: ["Rapid deployment", "Quick wins"],
    },
    {
      icon: "Target",
      title: "Results Driven",
      description: "Measurable business growth achieved",
      features: ["Actionable insights", "Guaranteed outcomes"],
    },
  ],
} as const;

export const globalFootprintContent = {
  title: "Global Reach, Local Touch",
  description:
    "Serving businesses across continents with personalized advisory",
  ctaTitle: "Ready to scale globally?",
  ctaDescription: "Let's start building your international success story.",
  ctaButtonLabel: "Contact us",
  mapGeoUrl: "https://cdn.jsdelivr.net/npm/world-atlas@2/countries-110m.json",
  locations: [
    { name: "New Delhi", coordinates: [77.209, 28.6139] as [number, number] },
    { name: "Dubai", coordinates: [55.2708, 25.2048] as [number, number] },
    { name: "London", coordinates: [-0.1276, 51.5072] as [number, number] },
  ],
  stats: [
    { value: "10,000+", label: "Solar Systems Installed" },
    { value: "50+", label: "Countries Served" },
    { value: "5M", label: "Tons of CO2 Offset" },
    { value: "10+", label: "Years of Innovating" },
  ],
} as const;

export const homeBlogSectionContent = {
  title: "Blogs",
  continueReadingLabel: "Continue Reading",
  loadingLabel: "Loading...",
} as const;

export const clientStoriesContent = {
  previousTestimonialAriaLabel: "Previous testimonial",
  nextTestimonialAriaLabel: "Next testimonial",
} as const;

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

export const businessHealthCheckContent = {
  requiredFieldsError: "Please fill in all required fields (* marked)",
  submitError: "Failed to submit form",
  unexpectedError: "An error occurred. Please try again.",
  sectionTitle: "Business Health Check Analyzer",
  sectionDescription:
    "Get instant insights into your business performance. Our AI-powered analyzer evaluates revenue growth, margin health, and operational efficiency in seconds.",
  cards: [
    {
      title: "Revenue Analysis",
      description: "Track growth trends and identify opportunities",
    },
    {
      title: "Margin Health",
      description: "Understand profitability metrics",
    },
    {
      title: "Quick Snapshot",
      description: "Actionable insights in moments",
    },
  ],
  launchButtonLabel: "Start Your Analysis",
  closeModalAriaLabel: "Close modal",
  success: {
    title: "Analysis Submitted!",
    description:
      "We'll generate your personalized report and send it to your email shortly.",
  },
  modal: {
    title: "Quick Analysis",
    description: "Share your details and get instant insights",
  },
  fields: {
    firstName: "First Name *",
    lastName: "Last Name *",
    email: "Work Email *",
    phone: "Phone (optional)",
    company: "Company (optional)",
    revenue: "Annual Revenue (optional)",
    employees: "Number of Employees (optional)",
    industry: "Select Industry (optional)",
  },
  industryOptions: [
    "Technology",
    "Finance",
    "Manufacturing",
    "Retail",
    "Healthcare",
    "SaaS",
    "Other",
  ],
  consentPrefix: "I agree to receive insights and analysis. See our",
  privacyPolicyLabel: "Privacy Policy",
  submitLabel: "Get My Report",
  submittingLabel: "Processing...",
} as const;
