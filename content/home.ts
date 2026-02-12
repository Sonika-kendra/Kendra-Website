export interface HeroSlide {
  title: string;
  subtitle: string;
  cta: string;
  ctaLink: string;  
  image: string;
}

export const heroSlidContent = [
  {
    title: "Scaling Businesses Smarter: Finance, Transformation, and M&A Support",
    subtitle:
    "Expert-led transformation strategies to unlock hidden value and drive sustainable success for SMEs.",
    cta: "Explore Our Services",
    ctaLink: "/",
    image: "/hero/slide-1.jpg",
  },
  {
    title: "Finance Function as a Service",
    subtitle:
    "Outsource, automate, and upgrade your finance operations with CFO-level expertise on demand.",
    cta: "Learn More",
    ctaLink: "/services/consulting",
    image: "/hero/slide-2.jpg",
  },
  {
    title: "Turnover & Transformation",
    subtitle:
    "Fix and future-proof your finance function with hands-on operational improvement.",
    cta: "Learn More",
    ctaLink: "/services/cost",
    image: "/hero/slide-3.jpg",
  },
  {
    title: "Buy & Build Strategy",
    subtitle:
    "Accelerating growth through acquisition — identifying targets, investors, and strategic fit.",
    cta: "Learn More",
    ctaLink: "/services/ma",
    image: "/hero/slide-4.jpg",
  },
];

export const homeContent = {
  services: [
    {
      title: "FaaS",
      description: "Finance-Function as a Service",
      slug: "/services/consulting",
      icon: "wallet",
    },
    {
      title: "Turnover & Transformation",
      description: "Fix and future-proof",
      slug: "/services/cost",
      icon: "settings",
    },
    {
      title: "Buy & Build",
      description: "Mergers and acquisitions strategy",
      slug: "/services/ma",
      icon: "briefcase",
    },
  ],

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
