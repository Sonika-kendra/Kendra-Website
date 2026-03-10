"use client";

import Link from "next/link";
import Image from "next/image";
import type { ServicesProps } from "@/interface/home";
import { homeServicesSectionContent } from "@/config/home";

export default function Services({ items, aboutContent }: ServicesProps) {
  return (
    <section className="w-full h-auto bg-background dark:bg-background-dark my-5">
      <div className="flex flex-col lg:flex-row w-full h-full">

        {/* About Section */}
        <div className="relative lg:w-1/3 flex flex-col justify-start p-8 lg:p-16 overflow-hidden">

          {/* Breathing Dot Grid */}
          <div className="breathing-grid dark:opacity-60" />

          {/* Soft Fade Overlay */}
          <div className="about-fade-overlay dark:bg-gradient-to-t dark:from-background-dark/80 dark:to-transparent" />

          <div className="relative z-10">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground dark:text-foreground-dark mb-4">
              {aboutContent.heading}
            </h2>

            <p className="text-lg text-muted-foreground dark:text-muted-foreground-dark">
              {aboutContent.description}
            </p>

            <Link
              href={homeServicesSectionContent.aboutHref}
              className="mt-4 relative inline-flex items-center text-base font-medium text-foreground dark:text-foreground-dark hover:text-accent dark:hover:text-accent-dark transition-colors duration-300 group"
            >
              <span className="relative">
                {homeServicesSectionContent.discoverLabel}
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
            </Link>
          </div>
        </div>

        {/* Services Section */}
        <div className="lg:w-2/3 flex flex-wrap p-4">
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
                  {/* <img src={`/icons/${item.icon}.svg`} alt={item.title} className="w-8 h-8 filter brightness-0 invert" /> */}
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
                    {homeServicesSectionContent.discoverLabel}
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
      </div>
    </section>
  );
}
