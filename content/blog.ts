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
  {
    id: "4",
    title: "Micro-Frontend Architecture Explained",
    excerpt:
      "Breaking large frontend applications into independent, deployable modules.",
    image: "/blog/blog4.jpg",
    date: "Dec 22, 2025",
    author: "Admin",
    slug: "micro-frontend-architecture-explained",
  },
  {
    id: "5",
    title: "Improving API Performance with Caching",
    excerpt:
      "Strategies for reducing latency and improving response times using caching layers.",
    image: "/blog/blog5.jpg",
    date: "Dec 10, 2025",
    author: "Admin",
    slug: "improving-api-performance-with-caching",
  },
  {
    id: "6",
    title: "State Management Patterns in React",
    excerpt:
      "Comparing Context API, Redux, Zustand, and modern lightweight alternatives.",
    image: "/blog/blog6.jpg",
    date: "Nov 30, 2025",
    author: "Admin",
    slug: "state-management-patterns-in-react",
  },
  {
    id: "7",
    title: "Building Accessible Web Interfaces",
    excerpt:
      "Practical guidelines to meet WCAG standards and improve usability for all users.",
    image: "/blog/blog7.jpg",
    date: "Nov 18, 2025",
    author: "Admin",
    slug: "building-accessible-web-interfaces",
  },
  {
    id: "8",
    title: "TypeScript Tips for Large Projects",
    excerpt:
      "Advanced typing patterns that improve maintainability and developer experience.",
    image: "/blog/blog8.jpg",
    date: "Nov 05, 2025",
    author: "Admin",
    slug: "typescript-tips-large-projects",
  },
  {
    id: "9",
    title: "CI/CD Pipelines for Frontend Teams",
    excerpt:
      "Automating testing, linting, and deployment workflows for modern web apps.",
    image: "/blog/blog9.jpg",
    date: "Oct 25, 2025",
    author: "Admin",
    slug: "cicd-pipelines-frontend-teams",
  },
  {
    id: "10",
    title: "Serverless vs Traditional Backend",
    excerpt:
      "A technical comparison of serverless architecture and monolithic backends.",
    image: "/blog/blog10.jpg",
    date: "Oct 12, 2025",
    author: "Admin",
    slug: "serverless-vs-traditional-backend",
  },
];
