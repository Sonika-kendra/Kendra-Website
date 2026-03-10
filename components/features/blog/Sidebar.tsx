import Image from "next/image";
import Link from "next/link";
import clsx from "clsx";
import { getSidebarData } from "@/lib";
import type { BlogCategory, SidebarPost } from "@/interface/blog";
import { ui } from "@/config/theme";
import { blogSidebarContent } from "@/config/blog";

interface SidebarProps {
  activeCategorySlug?: string;
}

export async function Sidebar({ activeCategorySlug }: SidebarProps) {
  const { latestPosts, categories } = await getSidebarData();

  return (
    <aside className="lg:col-span-1 space-y-10 lg:sticky lg:top-24 h-fit">
      {/* Categories */}
      <div>
        <h3 className="text-xl font-semibold mb-4">
          {blogSidebarContent.categoriesTitle}
        </h3>
        <ul className="flex flex-wrap gap-3">
          {categories.map((cat: BlogCategory) => (
            <li key={cat.id} className="list-none">
              <Link
                href={
                  activeCategorySlug === cat.slug
                    ? "/blog"
                    : `/category/${cat.slug}`
                }
                className={clsx(
                  ui.blog.categoryLink,
                  activeCategorySlug === cat.slug &&
                    "bg-primary p-auto text-primary-foreground hover:bg-primary hover:text-primary-foreground"
                )}
              >
                {cat.name} ({cat.count})
              </Link>
            </li>
          ))}
        </ul>
      </div>

      {/* Latest Posts */}
      <div>
        <h3 className="text-xl font-semibold mb-4">
          {blogSidebarContent.latestPostsTitle}
        </h3>

        <ul className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {latestPosts.map((item: SidebarPost) => {
            const image = item._embedded?.["wp:featuredmedia"]?.[0]?.source_url;

            return (
              <li key={item.id}>
                <Link href={`/blog/${item.slug}`} className="block group">
                  {image && (
                    <div className="relative w-full h-44 rounded-lg overflow-hidden">
                      <Image
                        src={image}
                        alt={item.title.rendered}
                        fill
                        sizes="(max-width: 1024px) 100vw, 300px"
                        className="object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                  )}

                  <div className="mt-3">
                    <h4
                      className={ui.blog.sidebarPostTitle}
                      dangerouslySetInnerHTML={{
                        __html: item.title.rendered,
                      }}
                    />
                    <p className="text-xs text-gray-500 dark:text-slate-400 mt-1">
                      {new Date(item.date).toLocaleDateString()}
                    </p>
                  </div>
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
    </aside>
  );
}
