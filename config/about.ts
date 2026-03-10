import { WebsiteUrlConfig } from "./routing";

export const founderSectionContent = {
  title: "Our Founder",
  paragraphs: [
    "Kendra International was founded by Gagandeep Singh, an experienced advisor with a track record in corporate finance, M&A strategy, and business transformation.",
    "Gagandeep founded Kendra to provide practical and strategic support to growth-focused businesses. His goal is to help entrepreneurs make confident decisions, strengthen operations, and prepare for the next stage of growth.",
  ],
} as const;

export const aboutCtaContent = {
  title: "Let's Chat",
  description:
    "Whether you are planning growth, preparing for investment, or solving complex business challenges, we are here to help. Contact us to start the conversation.",
  buttonLabel: "Contact Us",
  buttonHref: WebsiteUrlConfig.Contact,
} as const;

export const teamSectionContent = {
  previousMemberAriaLabel: "View previous team member",
  nextMemberAriaLabel: "View next team member",
  carouselRegionAriaLabel: "Our team carousel",
  goToMemberAriaPrefix: "Go to",
} as const;
