import type { BlogCategory, BlogPostDetail } from "@/interface/blog";

const BLOG_REVALIDATE_SECONDS = 60;

function getWordpressBaseUrl() {
  const baseUrl = process.env.WORDPRESS_URL;

  if (!baseUrl) {
    throw new Error("WORDPRESS_URL is not configured");
  }

  return baseUrl;
}

export async function getAllBlogPosts(
  perPage = 20
): Promise<BlogPostDetail[]> {
  const res = await fetch(
    `${getWordpressBaseUrl()}/posts?_embed=wp:featuredmedia,wp:term&per_page=${perPage}`,
    {
      next: { revalidate: BLOG_REVALIDATE_SECONDS },
    }
  );

  if (!res.ok) return [];

  return (await res.json()) as BlogPostDetail[];
}

export async function getAllBlogCategories(): Promise<BlogCategory[]> {
  const res = await fetch(`${getWordpressBaseUrl()}/categories`, {
    next: { revalidate: BLOG_REVALIDATE_SECONDS },
  });

  if (!res.ok) return [];

  return (await res.json()) as BlogCategory[];
}

export async function getBlogCategoryBySlug(
  slug: string
): Promise<BlogCategory | null> {
  const res = await fetch(`${getWordpressBaseUrl()}/categories?slug=${slug}`, {
    next: { revalidate: BLOG_REVALIDATE_SECONDS },
  });

  if (!res.ok) return null;

  const categories = (await res.json()) as BlogCategory[];
  return categories[0] || null;
}

export async function getBlogPostsByCategoryId(
  categoryId: number,
  perPage = 20
): Promise<BlogPostDetail[]> {
  const res = await fetch(
    `${getWordpressBaseUrl()}/posts?categories=${categoryId}&_embed=wp:featuredmedia,wp:term&per_page=${perPage}`,
    {
      next: { revalidate: BLOG_REVALIDATE_SECONDS },
    }
  );

  if (!res.ok) return [];

  return (await res.json()) as BlogPostDetail[];
}
