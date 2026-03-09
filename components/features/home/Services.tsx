"use client";

import Link from "next/link";
import Image from "next/image";
import type { ServicesProps } from "@/interface/home";

export default function Services({ items, aboutContent }: ServicesProps) {
  return (
    <section className="w-full h-auto bg-background dark:bg-background-dark my-5">
      {/* About Section */}
      <div className="relative isolate overflow-hidden min-h-[320px] bg-[#02060f] md:min-h-[380px] lg:min-h-[430px] lg:flex lg:items-center">
        <div className="relative z-10 px-6 py-12 lg:w-[30%] lg:px-8 lg:py-16">
          <div className="text-left">
            <h2 className="text-4xl font-bold text-white sm:text-5xl">
              {aboutContent.heading}
            </h2>

            <p className="mt-5 text-lg leading-relaxed text-white/90">
              {aboutContent.description}
            </p>

            <Link
              href="/about"
              className="mt-6 relative inline-flex items-center text-base font-medium text-white transition-colors duration-300 group hover:text-white/90"
            >
              <span className="relative">
                Discover
                <span className="absolute left-0 -bottom-1 h-[2px] w-0 bg-current transition-all duration-300 ease-out group-hover:w-full" />
              </span>

              <svg
                className="ml-2 h-4 w-4 opacity-0 transition-all duration-300 ease-out group-hover:translate-x-1 group-hover:opacity-100"
                fill="none"
                stroke="currentColor"
                strokeWidth={2}
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 12h14m0 0l-6-6m6 6l-6 6" />
              </svg>
            </Link>
          </div>
        </div>

        <div className="relative h-[220px] sm:h-[280px] lg:absolute lg:inset-y-0 lg:right-0 lg:h-full lg:w-[60%]">
          <Image
            src="/common/header.jpg"
            alt="About Kendra International"
            fill
            sizes="(min-width: 1024px) 60vw, 100vw"
            className="object-cover object-center lg:object-right"
          />
          <div className="pointer-events-none absolute inset-y-0 left-0 w-20 bg-gradient-to-r from-[#02060f] to-transparent sm:w-28" />
        </div>
      </div>

      {/* Services Section */}
      <div className="flex flex-wrap p-4">
        {items.slice(0, 4).map((item) => (
          <Link
            key={item.title}
            href={item.slug}
            className="relative flex-1 h-[280px] sm:h-[320px] lg:h-[360px] flex flex-col overflow-hidden shadow-lg group hover:shadow-2xl transition-shadow duration-300"
            style={{ flexBasis: "calc(50% - 1rem)" }}
          >
            <div
              className="absolute inset-0 bg-cover bg-center"
              style={{ backgroundImage: `url(${item.image})` }}
            />
            <div className="absolute inset-0 bg-slate-900/55 group-hover:bg-slate-900/45 transition-colors duration-300" />
            <div className="relative p-6 flex flex-col h-full justify-between">
              <div className="flex items-center mb-2">
                <Image
                  src={`/icons/${item.icon}.svg`}
                  alt={item.title}
                  width={32}
                  height={32}
                  className="filter brightness-0 invert"
                />
              </div>

              <h3 className="text-2xl font-bold text-slate-50 mb-1">{item.title}</h3>
              <p className="text-base text-slate-100/90 flex-1">{item.description}</p>

              <span className="mt-4 relative inline-flex items-center text-base font-medium text-slate-50 group-hover:text-white transition-colors duration-300">
                <span className="relative">
                  Discover
                  <span className="absolute left-0 -bottom-1 h-[2px] w-0 bg-current transition-all duration-300 ease-out group-hover:w-full" />
                </span>

                <svg
                  className="ml-2 w-4 h-4 opacity-0 transition-all duration-300 ease-out group-hover:opacity-100 group-hover:translate-x-1"
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
    </section>
  );
}
