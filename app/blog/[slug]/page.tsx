import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { Sidebar } from "@/components/features/blog/Sidebar";
import type { BlogPageProps, BlogPostDetail, BlogTerm } from "@/interface/blog";

/* -------------------- FETCH SINGLE POST -------------------- */
async function getPostBySlug(slug: string) {
  const res = await fetch(
    `${process.env.WORDPRESS_URL}/posts?slug=${slug}&_embed=wp:featuredmedia,wp:term`,
    {
      next: { revalidate: 60 },
    }
  );

  if (!res.ok) return null;

  const data = (await res.json()) as BlogPostDetail[];
  return data?.[0] || null;
}

/* -------------------- GENERATE STATIC PATHS -------------------- */
export async function generateStaticParams() {
  const res = await fetch(`${process.env.WORDPRESS_URL}/posts`);
  const posts = await res.json();

  return posts.map((post: BlogPostDetail) => ({
    slug: post.slug,
  }));
}

/* -------------------- SEO METADATA -------------------- */
export async function generateMetadata({ params }: BlogPageProps) {
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

/* -------------------- BLOG PAGE -------------------- */
export default async function BlogDetails({ params }: BlogPageProps) {
  const post = await getPostBySlug(params.slug);

  if (!post) return notFound();

  const categories: BlogTerm[] =
    post._embedded?.["wp:term"]
      ?.flat()
      .filter((term: BlogTerm) => term.taxonomy === "category") || [];

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
    <div className="max-w-8xl mx-auto px-24 py-12">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
        {/* ================= LEFT CONTENT ================= */}
        <article className="lg:col-span-2">
          {/* Title */}
          <h1
            className="text-4xl md:text-5xl font-bold mb-6 leading-tight"
            dangerouslySetInnerHTML={{ __html: post.title.rendered }}
          />

          {/* Categories */}
          {categories.length > 0 && (
            <div className="mb-6 flex flex-wrap gap-2">
              {categories.map((category: BlogTerm) => (
                <Link
                  key={category.id}
                  href={`/category/${category.slug}`}
                  className="blog-categoryLink"
                >
                  {category.name}
                </Link>
              ))}
            </div>
          )}

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
            className="blog-content text-justify text-gray-800 dark:text-slate-200"
            dangerouslySetInnerHTML={{ __html: content }}
          />
        </article>

        {/* ================= RIGHT SIDEBAR ================= */}
        <Sidebar />
      </div>
    </div>
  );
}
