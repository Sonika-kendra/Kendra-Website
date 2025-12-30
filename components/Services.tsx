// components/Services.tsx
import Link from "next/link";

interface ServiceItem {
  title: string;
  slug: string;
  description: string;
}

interface ServicesProps {
  items: ServiceItem[];
}

export default function Services({ items }: ServicesProps) {
  return (
    <section className="py-20 bg-brand.section">
      <div className="container">
        <h2 className="text-4xl text-center mb-16">
          Our Services
        </h2>

        <div className="grid md:grid-cols-3 gap-12">
          {items.map((item) => (
            <Link
              key={item.title}
              href={item.slug}
              className="bg-white border border-brand.border rounded-xl p-10 hover:shadow-lg transition"
            >
              <h3 className="text-2xl mb-4">
                {item.title}
              </h3>
              <p className="text-brand.muted">
                {item.description}
              </p>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
