import { homeContent } from "@/content/home";
import { WebsiteUrlConfig } from "./routing";

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
    href: WebsiteUrlConfig.About,
    label: "About",
  },
  {
    href: WebsiteUrlConfig.Service,
    label: "Services",
    children: [
      { href: WebsiteUrlConfig.Fueling_Growth, label: "FaaS" },
      { href: WebsiteUrlConfig.Optimizing_Operations, label: "Turnover & Transformation" },
      { href: WebsiteUrlConfig.MandM_Exit, label: "M&A & Exit Strategy Planning" },
      { href: WebsiteUrlConfig.Strengthening_Liquidity, label: "Strengthening Liquidity" },
    ],
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
  quickLinks: [
    { href: WebsiteUrlConfig.Home, label: "Home" },
    { href: WebsiteUrlConfig.About, label: "About" },
    { href: WebsiteUrlConfig.Service, label: "Services" },
    { href: WebsiteUrlConfig.Contact, label: "Contact" },
  ],
  services: [
    { href: WebsiteUrlConfig.Fueling_Growth, label: "FaaS" },
    { href: WebsiteUrlConfig.Optimizing_Operations, label: "Turnover & Transformation" },
    { href: WebsiteUrlConfig.MandM_Exit, label: "Buy & Build" },
    { href: WebsiteUrlConfig.Strengthening_Liquidity, label: "Strengthening Liquidity" },
  ],
  legal: [
    { href: WebsiteUrlConfig.Privacy, label: "Privacy Policy" },
    { href: WebsiteUrlConfig.Terms, label: "Terms & Conditions" },
  ],
  social: [
    { href: WebsiteUrlConfig.LinkedIn, label: "LinkedIn" },
    { href: WebsiteUrlConfig.WhatsApp, label: "WhatsApp" },
    { href: WebsiteUrlConfig.Phone, label: "Phone" },
    { href: WebsiteUrlConfig.Email, label: "Email" },
  ],
};

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
