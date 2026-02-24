import { notFound } from "next/navigation";
import Image from "next/image";
import { Sidebar } from "@/components/features/blog/Sidebar";

interface PageProps {
  params: {
    slug: string;
  };
}

/* -------------------- FETCH SINGLE POST -------------------- */
async function getPostBySlug(slug: string) {
  const res = await fetch(
    `${process.env.WORDPRESS_URL}/posts?slug=${slug}&_embed=wp:featuredmedia`,
    {
      next: { revalidate: 60 },
    }
  );

  if (!res.ok) return null;

  const data = await res.json();
  return data?.[0] || null;
}

/* -------------------- GENERATE STATIC PATHS -------------------- */
export async function generateStaticParams() {
  const res = await fetch(
    `${process.env.WORDPRESS_URL}/posts`
  );

  const posts = await res.json();

  return posts.map((post: any) => ({
    slug: post.slug,
  }));
}

/* -------------------- SEO METADATA -------------------- */
export async function generateMetadata({ params }: PageProps) {
  const post = await getPostBySlug(params.slug);

  if (!post) {
    return {
      title: "Post Not Found",
    };
  }

  const cleanExcerpt = post.excerpt.rendered.replace(/<[^>]+>/g, "");

  return {
    title: post.title.rendered,
    description: cleanExcerpt,
  };
}

/* -------------------- FETCH SIDEBAR DATA -------------------- */
export async function getSidebarData() {
  const [postsRes, categoriesRes] = await Promise.all([
    fetch(`${process.env.WORDPRESS_URL}/posts?per_page=5`, {
      next: { revalidate: 60 },
    }),
    fetch(`${process.env.WORDPRESS_URL}/categories`, {
      next: { revalidate: 60 },
    }),
  ]);

  const latestPosts = await postsRes.json();
  const categories = await categoriesRes.json();

  return { latestPosts, categories };
}

/* -------------------- BLOG PAGE -------------------- */
export default async function BlogDetails({ params }: PageProps) {
  const post = await getPostBySlug(params.slug);

  if (!post) return notFound();

  console.log(post.content);

const content = post.content.rendered
  .replace(/<noscript>[\s\S]*?<\/noscript>/g, "")
  .replace(/src="data:image[^"]*"/g, "")
  .replace(/data-src=/g, "src=")
  .replace(/class="lazyload"/g, "")
  .replace(/src="\/wp-content/g, `src="https://kendra-intl.com/wp-content`)
  .replace(/http:\/\/kendra-intl\.com/g, "https://kendra-intl.com");

  /* ✅ Safer featured image */
  const featuredImage =
    post._embedded?.["wp:featuredmedia"]?.[0]?.media_details?.sizes?.large
      ?.source_url ||
    post._embedded?.["wp:featuredmedia"]?.[0]?.source_url ||
    null;

return (
  <div className="max-w-7xl mx-auto px-6 py-12">
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
      
      {/* ================= LEFT CONTENT ================= */}
      <article className="lg:col-span-2">
        {/* Title */}
        <h1
          className="text-4xl md:text-5xl font-bold mb-6 leading-tight"
          dangerouslySetInnerHTML={{ __html: post.title.rendered }}
        />

        {/* Featured Image */}
        {featuredImage && (
          <div className="relative w-full h-[400px] mb-8 rounded-xl overflow-hidden">
            <Image
              src={featuredImage}
              alt={post.title.rendered}
              fill
              sizes="(max-width: 768px) 100vw, 1024px"
              className="object-cover"
              priority
            />
          </div>
        )}

        {/* Content */}
        <div
          className="prose prose-lg max-w-none"
          dangerouslySetInnerHTML={{ __html: content }}
        />
      </article>

      {/* ================= RIGHT SIDEBAR ================= */}
      <Sidebar />
    </div>
  </div>
);
}