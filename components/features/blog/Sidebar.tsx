import { getSidebarData } from "@/lib";
import type { BlogCategory, SidebarPost } from "@/interface/blog";

export async function Sidebar() {
  const { latestPosts, categories } = await getSidebarData();

  return (
    <aside className="lg:col-span-1 space-y-10 lg:sticky lg:top-24 h-fit">
      
      {/* Search */}
      <div>
        <input
          type="text"
          placeholder="Search..."
          className="w-full border rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>

      {/* Latest Posts */}
      <div>
        <h3 className="text-xl font-semibold mb-4">Latest Posts</h3>
        <ul className="space-y-4">
          {latestPosts.map((item: SidebarPost) => (
            <li key={item.id}>
              <a
                href={`/blog/${item.slug}`}
                className="text-gray-800 hover:text-blue-600 font-medium"
                dangerouslySetInnerHTML={{ __html: item.title.rendered }}
              />
              <p className="text-sm text-gray-500">
                {new Date(item.date).toLocaleDateString()}
              </p>
            </li>
          ))}
        </ul>
      </div>

      {/* Categories */}
      <div>
        <h3 className="text-xl font-semibold mb-4">Categories</h3>
        <ul className="space-y-2">
          {categories.map((cat: BlogCategory) => (
            <li key={cat.id}>
              <a
                href={`/category/${cat.slug}`}
                className="text-gray-700 hover:text-blue-600"
              >
                {cat.name} ({cat.count})
              </a>
            </li>
          ))}
        </ul>
      </div>
    </aside>
  );
}
