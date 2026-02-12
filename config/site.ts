import { homeContent } from "@/content/home";

export const siteMeta = {
  title: {
    default: "Kendra International | M&A & Business Consulting",
    template: "%s | Kendra International",
  },
  description:
    "Strategic M&A advisory, business consulting, and cost optimization services for scaling businesses smarter.",
  icons: { icon: "/favicon.png" },
  openGraph: {
    title: "Kendra International",
    description: "Strategic M&A and business consulting firm.",
    url: "https://kendra-intl.com",
    siteName: "Kendra International",
    type: "website",
  },
};

export const announcement = {
  message: "New users get a FREE Business Health Check — Limited time!",
  ctaLabel: "FREE Business Health Check",
  ctaHref: "/contact",
};

export const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/services", label: "Services", hasDropdown: true },
  { href: "/contact", label: "Insights" },
];

export const serviceLinks = [
  { href: "/services/consulting", label: "FaaS" },
  { href: "/services/cost", label: "Turnover & Transformation" },
  { href: "/services/ma", label: "Buy & Build" },
];

export const footer = {
  quickLinks: [
    { href: "/", label: "Home" },
    { href: "/about", label: "About" },
    { href: "/services", label: "Services" },
    { href: "/contact", label: "Contact" },
  ],
  services: [
    { href: "/services/consulting", label: "FaaS" },
    { href: "/services/cost", label: "Turnover & Transformation" },
    { href: "/services/ma", label: "Buy & Build" },
  ],
  legal: [
    { href: "/privacy", label: "Privacy Policy" },
    { href: "/terms", label: "Terms & Conditions" },
  ],
  social: [
    { href: "https://linkedin.com", label: "LinkedIn" },
    { href: "https://wa.me/447000000000", label: "WhatsApp" },
    { href: "tel:+447000000000", label: "Phone" },
    { href: "mailto:info@kendrainternational.com", label: "Email" },
  ],
};

export default {
  siteMeta,
  announcement,
  navLinks,
  serviceLinks,
  footer,
  homeContent,
};

export const pageMeta = {
  contact: {
    title: "Contact | Kendra International",
    description: "Get in touch with Kendra International for strategic advisory services.",
  },
  privacy: {
    title: "Privacy Policy | Kendra International",
    description: "Privacy policy outlining how Kendra International collects, uses, and protects personal information.",
  },
  services: {
    title: "Services | Kendra International",
    description: "Explore Kendra International's services: FaaS, Turnover & Transformation, and Buy & Build.",
  },
  consulting: {
    title: "FaaS - Finance Function as a Service | Kendra International",
    description: "Outsource, automate, and upgrade your finance function with Kendra International's FaaS service.",
  },
  ma: {
    title: "Buy & Build | Kendra International",
    description: "Accelerating growth through acquisition with Kendra International's Buy & Build strategy.",
  },
  cost: {
    title: "Turnover & Transformation | Kendra International",
    description: "Fix and future-proof your finance with Kendra International's Turnover & Transformation service.",
  },
};
