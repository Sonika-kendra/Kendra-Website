export interface BlogPageProps {
  params: {
    slug: string;
  };
}

export interface BlogPostDetail {
  id: number;
  title: { rendered: string };
  excerpt: { rendered: string };
  content: { rendered: string };
  slug: string;
  date: string;
  categories?: number[];
  _embedded?: {
    "wp:featuredmedia"?: {
      source_url: string;
      media_details?: {
        sizes?: { large?: { source_url: string } };
      };
    }[];
    "wp:term"?: BlogTerm[][];
  };
}

export interface BlogTerm {
  id: number;
  name: string;
  slug: string;
  taxonomy: string;
}

export interface SidebarPost {
  id: number;
  title: { rendered: string };
  slug: string;
  date: string;
  _embedded?: {
  "wp:featuredmedia"?: {
    source_url: string;
  }[];
};
}

export interface BlogCategory {
  id: number;
  name: string;
  slug: string;
  count: number;
}

export interface HomeBlogPost {
  id: number;
  title: string;
  excerpt: string;
  slug: string;
  date: string;
  author: string;
  image: string;
}
