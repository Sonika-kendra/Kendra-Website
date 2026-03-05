export const aboutHero = {
  title: "About Us",
  description: "Kendra International helps small and medium-sized enterprises scale, streamline, and succeed with tailored strategy, finance, and operational advisory.",
  image: {
    src: "/common/header.jpg",
    alt: "Kendra International consulting and growth advisory",
  },
} as const;

export const aboutStoryRows = [
  {
    title: "About Kendra International",
    description: "Kendra International is a strategic advisory firm focused on helping SMEs and scale-ups solve challenges and unlock growth. We work closely with founders and leadership teams to strengthen business models, improve financial control, and build scalable operations.",
    image: {
      src: "/about/about-us.png",
      alt: "About Kendra International",
    },
  },
  {
    title: "Our Mission",
    description: "Our mission is to make high-impact strategy and execution support practical and accessible for growing businesses. We offer a flexible consulting model that combines deep expertise with a hands-on approach so your team can move quickly, improve performance, and sustain long-term value creation.",
    image: {
      src: "/about/our-mission.jpg",
      alt: "Our Mission",
    },
  },
] as const;

export const aboutValues = {
  title: "Why Choose Kendra International?",
  description: "Success requires execution, accountability, and the right expertise guiding decisions.",
  image: {
    src: "/about/brand-values.jpg",
    alt: "Business strategy discussion",
  },
  cards: [
    {
      icon: "Target",
      title: "Tailored Strategy",
      description: "Every engagement is customized to your business stage, market dynamics, and strategic objectives.",
    },
    {
      icon: "Zap",
      title: "Cross-Functional Expertise",
      description: "Finance, strategy, operations, and M&A expertise integrated into one advisory team.",
    },
    {
      icon: "Users",
      title: "Action-Oriented Delivery",
      description: "Recommendations are translated into operational improvements and measurable outcomes.",
    },
    {
      icon: "CheckCircle2",
      title: "Trusted Partner Mindset",
      description: "We operate as an extension of your leadership team with transparency and accountability.",
    },
  ],
} as const;

export const aboutTeam = {
  title: "Meet our Team",
  description:
    "Our philosophy is simple: hire great people and give them the resources and support to do their best work.",
  members: [
    {
      name: "Camilla Wilson",
      role: "Payment Gateway Support",
      photo: "/team/user-1.jpg",
    },
    {
      name: "Olive Nacelle",
      role: "VP of Customer Success",
      photo: "/team/user-2.jpg",
    },
    {
      name: "Sophie Chamberlain",
      role: "Specialized Support",
      photo: "/team/user-box-svgrepo-com.svg",
    },
    {
      name: "Jessica Dobrev",
      role: "Payments Support",
      photo: "/team/user-4.jpg",
    },
    {
      name: "Orlando Diggs",
      role: "Customer Success Lead",
      photo: "/team/user-5.jpg",
    },
    {
      name: "Sasha Kim",
      role: "Customer Success",
      photo: "/team/user-6.jpg",
    },
    {
      name: "Amélie Laurent",
      role: "CTO",
      photo: "/team/user-3.jpg",
    },
    {
      name: "Liam Rodriguez",
      role: "Product Manager",
      photo: "/team/user-2.jpg",
    },
    {
      name: "Nina Patel",
      role: "UX Designer",
      photo: "/team/user-box-svgrepo-com.svg",
    },
  ],
};

export const aboutDifferentiators = {
  title: "Why We Do",
  cards: [
    {
      icon: "BarChart3",
      iconText: "Planning",
      title: "Structured Growth for Startups",
      description: "We help startups create repeatable systems and processes that turn ideas into actionable growth plans.",
      image: {
        src: "/differentiators/card1.jpg",
        alt: "Structured growth planning for startups",
      },
    },
    {
      icon: "BriefcaseBusiness",
      iconText: "Expertise",
      title: "Senior-Level Guidance",
      description: "Access seasoned business leaders to guide your decisions without committing to full-time hires.",
      image: {
        src: "/differentiators/card2.jpg",
        alt: "Senior advisory guidance for business decisions",
      },
    },
    {
      icon: "Gauge",
      iconText: "Performance",
      title: "Executing Strategies Effectively",
      description: "Bridge the gap between strategy and results with clear action plans and measurable outcomes.",
      image: {
        src: "/differentiators/card3.jpg",
        alt: "Execution-focused strategy and performance tracking",
      },
    },
    {
      icon: "Milestone",
      iconText: "Scaling",
      title: "Prepare for Major Milestones",
      description: "From fundraising readiness to operational expansion, we help your business reach key growth targets.",
      image: {
        src: "/differentiators/card4.jpg",
        alt: "Business scaling support for key growth milestones",
      },
    },
    {
      icon: "Handshake",
      iconText: "Value",
      title: "Creating Long-Term Impact",
      description: "We focus on lasting value for customers, employees, and stakeholders rather than short-term fixes.",
      image: {
        src: "/differentiators/card5.jpg",
        alt: "Long-term value creation through trusted partnerships",
      },
    },
  ],
} as const;
