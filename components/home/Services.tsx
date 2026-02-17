"use client";

import Link from "next/link";

interface ServiceItem {
  title: string;
  slug: string;
  description: string;
  icon: string;
}

interface ServicesProps {
  items: ServiceItem[];
}

export default function Services({ items }: ServicesProps) {
  return (
    <section className="py-16 md:py-20">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {items.slice(0, 3).map((item) => (
            <Link
              key={item.title}
              href={item.slug}
              className="card-hover group flex flex-col p-6"
            >
              <h3 className="text-lg font-bold font-display text-navy">{item.title}</h3>
              <p className="mt-2 text-sm text-slate-text/80 leading-relaxed flex-1">{item.description}</p>
              <span className="mt-4 text-sm font-medium text-navy group-hover:text-steel transition-colors">Learn More</span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
