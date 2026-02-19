export interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  image: string;
  date: string;
  author: string;
  slug: string;
}

export const blogPosts: BlogPost[] = [
  {
    id: "1",
    title: "Scaling Modern Web Applications",
    excerpt:
      "Best practices for building scalable and maintainable web platforms using modern stacks.",
    image: "/blog/blog1.jpg",
    date: "Feb 12, 2026",
    author: "Admin",
    slug: "scaling-modern-web-applications",
  },
  {
    id: "2",
    title: "Design Systems in 2026",
    excerpt:
      "How component-driven architecture improves speed, consistency, and maintainability.",
    image: "/blog/blog2.jpg",
    date: "Jan 28, 2026",
    author: "Admin",
    slug: "design-systems-2026",
  },
  {
    id: "3",
    title: "Next.js Performance Optimization",
    excerpt:
      "Advanced techniques to improve Core Web Vitals and server rendering efficiency.",
    image: "/blog/blog3.jpg",
    date: "Jan 10, 2026",
    author: "Admin",
    slug: "nextjs-performance-optimization",
  },
];
