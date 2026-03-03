import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { Sidebar } from "@/components/features/blog/Sidebar";
import {
  getAllBlogCategories,
  getBlogCategoryBySlug,
  getBlogPostsByCategoryId,
} from "@/lib/services/blog/posts";
import type { BlogPostDetail, BlogTerm } from "@/interface/blog";

interface CategoryPageProps {
  params: {
    slug: string;
  };
}

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

export async function generateStaticParams() {
  const categories = await getAllBlogCategories();

  return categories.map((category) => ({
    slug: category.slug,
  }));
}

export async function generateMetadata({
  params,
}: CategoryPageProps): Promise<Metadata> {
  const category = await getBlogCategoryBySlug(params.slug);

  if (!category) {
    return {
      title: "Category Not Found",
    };
  }

  return {
    title: `${category.name} Blogs`,
    description: `Browse all blog posts in ${category.name}.`,
  };
}

export default async function CategoryPage({ params }: CategoryPageProps) {
  const category = await getBlogCategoryBySlug(params.slug);

  if (!category) return notFound();

  const posts = await getBlogPostsByCategoryId(category.id);

  return (
    <div className="max-w-8xl mx-auto px-6 md:px-10 xl:px-16 py-12">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
        <section className="lg:col-span-2">
          <div className="mb-8">
            <Link
              href="/blog"
              className="text-sm text-blue-700 hover:underline inline-block mb-4 dark:text-sky-300"
            >
              Back to all blogs
            </Link>
            <h1 className="text-4xl md:text-5xl font-bold">{category.name}</h1>
            <p className="text-gray-600 dark:text-slate-300 mt-3">
              Showing {posts.length} post{posts.length === 1 ? "" : "s"} in this
              category.
            </p>
          </div>

          {posts.length === 0 ? (
            <p className="text-gray-500 dark:text-slate-400">
              No posts found in this category.
            </p>
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
                            className="text-2xl font-semibold leading-tight hover:text-blue-700 dark:hover:text-sky-300 transition-colors"
                            dangerouslySetInnerHTML={{ __html: post.title.rendered }}
                          />
                        </Link>

                        <p className="text-gray-700 dark:text-slate-300 mt-4 line-clamp-3">
                          {stripHtml(post.excerpt.rendered)}
                        </p>

                        {categories.length > 0 && (
                          <div className="mt-5 flex flex-wrap gap-2">
                            {categories.map((item: BlogTerm) => (
                              <Link
                                key={item.id}
                                href={`/category/${item.slug}`}
                                className="rounded-full bg-blue-50 px-3 py-1 text-sm font-medium text-blue-700 hover:bg-blue-700 hover:text-white transition dark:bg-slate-800 dark:text-slate-200 dark:hover:bg-slate-700 dark:hover:text-white"
                              >
                                {item.name}
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
