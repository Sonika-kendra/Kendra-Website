import Link from "next/link";

type Service = {
  title: string;
  description: string;
  slug: string;
};

export default function Services({
  items,
}: {
  items: Service[];
}) {
  return (
    <section id="services" className="py-24 bg-slate-50">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-4xl font-semibold text-center">
          Our Services
        </h2>

        <div className="mt-16 grid gap-8 md:grid-cols-3">
          {items.map((service) => (
            <Link
              key={service.title}
              href={service.slug}
              className="rounded-2xl bg-white p-8 shadow-sm hover:shadow-md transition"
            >
              <h3 className="text-xl font-semibold">
                {service.title}
              </h3>
              <p className="mt-4 text-slate-600">
                {service.description}
              </p>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
