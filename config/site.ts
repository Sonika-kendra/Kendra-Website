import { homeContent } from "@/config/pages/home";
import { WebsiteUrlConfig } from "./routing";

export const siteMeta = {
  title: {
    default: "Kendra International | Strategic Advisory Services",
    template: "%s | Kendra International",
  },
  description:
    "Top-line growth, cost rationalisation, liquidity improvement, and M&A and exit planning services for growth-focused businesses.",
  icons: { icon: "/favicon.png" },
  openGraph: {
    title: "Kendra International",
    description: "Strategic advisory services for growth-focused businesses.",
    url: "https://kendra-intl.com",
    siteName: "Kendra International",
    type: "website",
  },
};

export const announcement = {
  message: "New users get a FREE Business Health Check - Limited time!",
  ctaLabel: "FREE Business Health Check",
  ctaHref: WebsiteUrlConfig.Contact,
};

export type NavItem = {
  href: string;
  label: string;
  children?: NavItem[];
};

export const navLinks: NavItem[] = [
  {
    href: WebsiteUrlConfig.Home,
    label: "Home",
  },
  {
    href: WebsiteUrlConfig.Service,
    label: "Services",
    children: [
      { href: WebsiteUrlConfig.Fueling_Growth, label: "Top-Line Growth" },
      {
        href: WebsiteUrlConfig.Optimizing_Operations,
        label: "Cost Rationalisation",
      },
      {
        href: WebsiteUrlConfig.Strengthening_Liquidity,
        label: "Liquidity Improvement",
      },
      { href: WebsiteUrlConfig.MandM_Exit, label: "M&A and Exit Planning" },
    ],
  },
  // {
  //   href: WebsiteUrlConfig.Business_Health_Analyzer,
  //   label: "Business Health Analyzer",
  // },
  {
    href: WebsiteUrlConfig.About,
    label: "About",
  },
  {
    href: WebsiteUrlConfig.Blogs,
    label: "Blog",
  },
  {
    href: WebsiteUrlConfig.Contact,
    label: "Contact",
  },
];

export const footer = {
  brandDescription:
    "Improving financial performance and strategic clarity through practical advisory support.",
  sectionTitles: {
    quickLinks: "Quick Links",
    services: "Services",
    legal: "Legal",
    connect: "Connect",
    newsletter: "Newsletter",
  },
  companyName: "Kendra International",
  copyrightSuffix: "All rights reserved.",
  quickLinks: [
    { href: WebsiteUrlConfig.Home, label: "Home" },
    { href: WebsiteUrlConfig.About, label: "About" },
    { href: WebsiteUrlConfig.Service, label: "Services" },
    { href: WebsiteUrlConfig.Contact, label: "Contact" },
  ],
  services: [
    { href: WebsiteUrlConfig.Fueling_Growth, label: "Top-Line Growth" },
    {
      href: WebsiteUrlConfig.Optimizing_Operations,
      label: "Cost Rationalisation",
    },
    {
      href: WebsiteUrlConfig.Strengthening_Liquidity,
      label: "Liquidity Improvement",
    },
    { href: WebsiteUrlConfig.MandM_Exit, label: "M&A and Exit Planning" },
  ],
  legal: [
    { href: WebsiteUrlConfig.Privacy, label: "Privacy Policy" },
    { href: WebsiteUrlConfig.Disclaimer, label: "Disclaimer" },
    { href: WebsiteUrlConfig.Terms, label: "Terms & Conditions" },
  ],
  social: [
    { href: WebsiteUrlConfig.LinkedIn, label: "LinkedIn" },
    { href: WebsiteUrlConfig.WhatsApp, label: "WhatsApp" },
    { href: WebsiteUrlConfig.Phone, label: "Phone" },
    { href: WebsiteUrlConfig.Email, label: "Email" },
  ],
  newsletter: {
    description: "Get practical strategy updates and insights in your inbox.",
    emailPlaceholder: "Enter your email",
    buttonLabel: "Subscribe",
    submittingLabel: "Subscribing...",
    successMessage: "Thanks for subscribing. We will stay in touch.",
    errorMessage: "Unable to subscribe right now. Please try again.",
  },
  partner: "Kendra International Limited is a member firm of the Institute of Chartered Accountants in England and Wales (ICAEW). Firm registration number: C011008276."
};

export const footerCta = {
  title: "Ready to Get Started?",
  description: "Speak with our consultants today.",
  buttonLabel: "Get Started",
  buttonHref: WebsiteUrlConfig.Contact,
} as const;

export default {
  siteMeta,
  announcement,
  navLinks,
  footer,
  homeContent,
};

export const pageMeta = {
  contact: {
    title: "Contact | Kendra International",
    description:
      "Get in touch with Kendra International for strategic advisory services.",
  },
  privacy: {
    title: "Privacy Policy | Kendra International",
    description:
      "Privacy policy outlining how Kendra International collects, uses, and protects personal information.",
  },
  disclaimer: {
    title: "Disclaimer | Kendra International",
    description:
      "Disclaimer outlining the terms and conditions of use for the Kendra International website.",
  },
  services: {
    title: "Services | Kendra International",
    description:
      "Explore Kendra International services: Top-Line Growth, Cost Rationalisation, Liquidity Improvement, and M&A and Exit Planning.",
  },
  businessHealth: {
    title: "Business Health Analyzer | Kendra International",
    description:
      "Run a quick business health analysis and get actionable insights for growth, margins, and operations.",
  },
  consulting: {
    title: "Top-Line Growth | Kendra International",
    description:
      "Design and execute practical growth strategies to strengthen sales performance, customer economics, and channel expansion.",
  },
  liquidity: {
    title: "Liquidity Improvement | Kendra International",
    description:
      "Improve cash generation, optimize working capital, and build resilience during periods of pressure or transition.",
  },
  ma: {
    title: "M&A and Exit Planning | Kendra International",
    description:
      "Advisory support for acquisitions, exits, and capital events to maximize value and reduce execution risk.",
  },
  cost: {
    title: "Cost Rationalisation | Kendra International",
    description:
      "Identify inefficiencies and redesign cost structures to improve margins while protecting critical capabilities.",
  },
};
