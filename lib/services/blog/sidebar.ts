// app/blog/utils/sidebar.ts
export async function getSidebarData() {
  const [postsRes, categoriesRes] = await Promise.all([
    fetch(
      `${process.env.WORDPRESS_URL}/posts?per_page=4&_embed=wp:featuredmedia`,
      { next: { revalidate: 60 } }
    ),
    fetch(
      `${process.env.WORDPRESS_URL}/categories`,
      { next: { revalidate: 60 } }
    ),
  ]);

  const latestPosts = await postsRes.json();
  const categories = await categoriesRes.json();

  return { latestPosts, categories };
}