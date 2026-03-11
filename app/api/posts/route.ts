import type { WPPost } from "@/interface/api";
import { htmlToPlainText } from "@/lib/services/blog/text";

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const page = searchParams.get("page") || "1";

  try {
    const res = await fetch(
      `${process.env.WORDPRESS_URL}/posts?_embed&per_page=10&page=${page}`,
      { next: { revalidate: 300 } }
    );

    if (!res.ok) {
      return Response.json({ error: "Failed to fetch" }, { status: 500 });
    }

    const posts: WPPost[] = await res.json();

    const formatted = posts.map((post) => ({
      id: post.id,
      title: post.title.rendered,
      excerpt: htmlToPlainText(post.excerpt.rendered),
      slug: post.slug,
      date: post.date,
      author: post._embedded?.author?.[0]?.name || "Admin",
      image: post._embedded?.["wp:featuredmedia"]?.[0]?.source_url || "/placeholder.jpg",
    }));

    return Response.json(formatted);
  } catch {
    return Response.json({ error: "Server error" }, { status: 500 });
  }
}
