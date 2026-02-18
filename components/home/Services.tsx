"use client";

import Link from "next/link";

interface ServiceItem {
  title: string;
  slug: string;
  description: string;
  icon: string;
  image: string;
}

interface ServicesProps {
  items: ServiceItem[];
}

export default function Services({ items }: ServicesProps) {
  return (
    <section className="py-16 md:py-20 bg-gray-50">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-navy mb-12">
          Strategic Solutions to Empower Your Business
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-8">
          {items.slice(0, 4).map((item) => (
            <Link
              key={item.title}
              href={item.slug}
              className="relative flex flex-col h-64 rounded-2xl overflow-hidden shadow-lg group hover:shadow-2xl transition-shadow duration-300"
            >
              {/* Background Image */}
              <div
                className="absolute inset-0 bg-cover bg-center"
                style={{ backgroundImage: `url(${item.image})` }}
              />
              {/* Overlay */}
              <div className="absolute inset-0 bg-black/40 group-hover:bg-black/30 transition-colors" />

              {/* Content */}
              <div className="relative p-6 flex flex-col h-full justify-between">
                <div className="flex items-center mb-2">
                  <div className="w-12 h-12 flex items-center justify-center rounded-full bg-white/80">
                    <img
                      src={`/icons/${item.icon}.svg`}
                      alt={item.title}
                      className="w-6 h-6"
                    />
                  </div>
                </div>

                <h3 className="text-xl font-bold text-white mb-1">{item.title}</h3>
                <p className="text-sm text-white/90 flex-1">{item.description}</p>

                <span className="mt-4 inline-flex items-center text-sm font-medium text-white group-hover:text-blue-200 transition-colors">
                  Learn More
                  <svg
                    className="ml-2 w-4 h-4"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={2}
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 12h14m0 0l-6-6m6 6l-6 6" />
                  </svg>
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
