export async function GET() {
  try {
    const res = await fetch(
      "https://kendra-intl.com/wp-json/wp/v2/posts?_embed&per_page=10",
      { next: { revalidate: 300 } } // ISR
    );

    if (!res.ok) {
      return Response.json({ error: "Failed to fetch" }, { status: 500 });
    }

    const posts = await res.json();

    const formatted = posts.map((post: any) => ({
      id: post.id,
      title: post.title.rendered,
      excerpt: post.excerpt.rendered.replace(/<[^>]+>/g, ""),
      slug: post.slug,
      date: post.date,
      author: post._embedded?.author?.[0]?.name || "Admin",
      image:
        post._embedded?.["wp:featuredmedia"]?.[0]?.source_url ||
        "/placeholder.jpg",
    }));

    return Response.json(formatted);
  } catch (error) {
    return Response.json({ error: "Server error" }, { status: 500 });
  }
}