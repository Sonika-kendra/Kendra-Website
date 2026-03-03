import Image from "next/image";
import Link from "next/link";
import { getSidebarData } from "@/lib";
import type { BlogCategory, SidebarPost } from "@/interface/blog";

export async function Sidebar() {
  const { latestPosts, categories } = await getSidebarData();

  return (
    <aside className="lg:col-span-1 space-y-10 lg:sticky lg:top-24 h-fit">
      {/* Categories */}
      <div>
        <h3 className="text-xl font-semibold mb-4">Categories</h3>
        <ul className="flex flex-wrap gap-3">
          {categories.map((cat: BlogCategory) => (
            <li key={cat.id}>
              <Link
                href={`/category/${cat.slug}`}
                className="px-3 py-1 text-sm bg-gray-100 rounded-full hover:bg-blue-600 hover:text-white transition dark:bg-slate-800 dark:text-slate-200 dark:hover:bg-slate-700 dark:hover:text-white"
              >
                {cat.name} ({cat.count})
              </Link>
            </li>
          ))}
        </ul>
      </div>

      {/* Latest Posts */}
      <div>
        <h3 className="text-xl font-semibold mb-4">Latest Posts</h3>

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
                      className="text-sm font-semibold text-gray-800 dark:text-slate-100 group-hover:text-blue-600 dark:group-hover:text-sky-300 leading-snug"
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
