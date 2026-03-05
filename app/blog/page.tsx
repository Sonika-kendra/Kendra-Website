import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import { Sidebar } from "@/components/features/blog/Sidebar";
import { getAllBlogPosts } from "@/lib/services/blog/posts";
import type { BlogPostDetail, BlogTerm } from "@/interface/blog";
import { ui } from "@/config/theme";

export const metadata: Metadata = {
  title: "Blog",
  description: "Read the latest insights and updates from Kendra International.",
};

function stripHtml(html: string) {
  return html.replace(/<[^>]+>/g, "").trim();
}

function getPostCategories(post: BlogPostDetail): BlogTerm[] {
  return (
    post._embedded?.["wp:term"]
      ?.flat()
      .filter((term: BlogTerm) => term.taxonomy === "category") || []
  );
}

export default async function BlogPage() {
  const posts = await getAllBlogPosts();

  return (
    <div className="max-w-8xl mx-auto px-6 md:px-10 xl:px-16 py-12">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
        <section className="lg:col-span-2">
          <h1 className="text-4xl md:text-5xl font-bold mb-3">Blog</h1>
          <p className="text-gray-600 dark:text-slate-300 mb-10">
            Explore all blog posts and browse by category.
          </p>

          {posts.length === 0 ? (
            <p className="text-gray-500 dark:text-slate-400">No blog posts found.</p>
          ) : (
            <ul className="space-y-8">
              {posts.map((post: BlogPostDetail) => {
                const featuredImage =
                  post._embedded?.["wp:featuredmedia"]?.[0]?.source_url || null;
                const categories = getPostCategories(post);

                return (
                  <li
                    key={post.id}
                    className="border border-gray-200 dark:border-slate-700 rounded-xl overflow-hidden bg-white dark:bg-slate-900"
                  >
                    <article
                      className={
                        featuredImage
                          ? "grid grid-cols-1 md:grid-cols-[300px_1fr]"
                          : "block"
                      }
                    >
                      {featuredImage && (
                        <Link
                          href={`/blog/${post.slug}`}
                          className="relative min-h-[220px] block"
                        >
                          <Image
                            src={featuredImage}
                            alt={post.title.rendered}
                            fill
                            sizes="(max-width: 768px) 100vw, 300px"
                            className="object-cover"
                          />
                        </Link>
                      )}

                      <div className="p-6">
                        <p className="text-sm text-gray-500 dark:text-slate-400 mb-3">
                          {new Date(post.date).toLocaleDateString()}
                        </p>

                        <Link href={`/blog/${post.slug}`}>
                          <h2
                            className={ui.blog.postTitle}
                            dangerouslySetInnerHTML={{ __html: post.title.rendered }}
                          />
                        </Link>

                        <p className="text-gray-700 dark:text-slate-300 mt-4 line-clamp-3">
                          {stripHtml(post.excerpt.rendered)}
                        </p>

                        {categories.length > 0 && (
                          <div className="mt-5 flex flex-wrap gap-2">
                            {categories.map((category: BlogTerm) => (
                              <Link
                                key={category.id}
                                href={`/category/${category.slug}`}
                                className={ui.blog.categoryLink}
                              >
                                {category.name}
                              </Link>
                            ))}
                          </div>
                        )}
                      </div>
                    </article>
                  </li>
                );
              })}
            </ul>
          )}
        </section>

        <Sidebar />
      </div>
    </div>
  );
}
