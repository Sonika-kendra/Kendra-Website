export interface HeroSlide {
  title: string;
  subtitle: string;
  cta: string;
  ctaLink: string;  
  image: string;
}

export const heroSlidContent = [
  {
    title: "Scale Smarter with Strategic Advisory",
    subtitle:
    "Expert-led M&A, transformation, and financial advisory for growth-focused SMEs. Measurable results delivered in days, not months.",
    cta: "Start Your Transformation",
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
      title: "Finance as a Service",
      slug: "/services/consulting",
      description: "Outsource your finance function with CFO-level expertise, automated processes, and upgraded reporting.",
      icon: "wallet",
    },
    {
      title: "Operational Transformation",
      slug: "/services/cost",
      description: "Fix inefficiencies and future-proof your business. Unlock hidden value through strategic restructuring.",
      icon: "settings",
    },
    {
      title: "Buy & Build Strategy",
      slug: "/services/ma",
      description: "Strategic M&A advisory to identify, negotiate, and integrate the right acquisitions for growth.",
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
