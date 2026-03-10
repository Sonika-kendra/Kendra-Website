import { WebsiteUrlConfig } from "./routing";

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
