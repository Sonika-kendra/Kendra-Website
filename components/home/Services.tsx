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
  aboutContent: { heading: string; description: string };
}

export default function Services({ items, aboutContent }: ServicesProps) {
  return (
    <section className="w-full h-auto bg-gray-50 my-5">
      <div className="flex flex-col lg:flex-row w-full h-full">
        {/* About Us Section */}
        <div className="lg:w-1/2 flex flex-col justify-center p-8 lg:p-16">
          <h2 className="text-3xl md:text-4xl font-bold text-navy">
            {aboutContent.heading}
          </h2>
          <p className="text-lg text-gray-700">{aboutContent.description}</p>
        </div>

        {/* Services Section */}
        <div className="lg:w-1/2 flex flex-wrap">
          {items.slice(0, 4).map((item) => (
            <Link
              key={item.title}
              href={item.slug}
              className="relative flex-1 flex flex-col min-h-[280px] overflow-hidden shadow-lg group hover:shadow-2xl transition-shadow duration-300"
              style={{ flexBasis: "calc(50% - 1rem)" }}
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
