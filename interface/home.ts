export interface WhyKendraProps {
  heading: string;
  reasons: {
    title: string;
    points: string[];
  }[];
}

export interface Location {
  name: string;
  coordinates: [number, number];
}

export interface ServiceItem {
  title: string;
  slug: string;
  description: string;
  icon: string;
  image: string;
}

export interface ServicesProps {
  items: ServiceItem[];
  aboutContent: { heading: string; description: string };
}

export interface Testimonial {
  quote: string;
  name: string;
  role: string;
  image?: string;
  type?: "image" | "video" | "svg" | string;
}
