"use client";

import { ChevronLeft, ChevronRight } from "lucide-react";
import { useRef } from "react";
import { aboutTeam } from "@content/about";

export default function TeamSection() {
  const carouselRef = useRef<HTMLDivElement>(null);

  const scrollCarousel = (direction: "left" | "right") => {
    if (!carouselRef.current) return;
    const firstSlide = carouselRef.current.querySelector("article");
    const gap = 16;
    const slideWidth = firstSlide instanceof HTMLElement ? firstSlide.offsetWidth : 220;
    const offset = direction === "left" ? -(slideWidth + gap) : slideWidth + gap;
    carouselRef.current.scrollBy({ left: offset, behavior: "smooth" });
  };

  return (
    <section className="flex min-h-screen w-full items-center overflow-hidden bg-background py-8">
      <div className="w-full px-4 sm:px-6 lg:px-10">
        {/* Title */}
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="font-display text-4xl font-bold text-foreground">
            {aboutTeam.title}
          </h2>
          <p className="mt-4 text-muted-foreground">{aboutTeam.description}</p>
        </div>

        {/* Carousel */}
        <div className="relative mt-8 h-[360px] min-h-[320px] w-full overflow-hidden rounded-2xl border border-black/10 bg-white/60 p-4 sm:mt-10 sm:h-[400px] sm:rounded-3xl sm:p-8">
          {/* Left button */}
          <button
            type="button"
            onClick={() => scrollCarousel("left")}
            aria-label="Previous team members"
            className="absolute left-2 top-1/2 z-10 hidden h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full border border-black/10 bg-white/90 text-foreground shadow-sm transition hover:bg-white md:flex"
          >
            <ChevronLeft className="h-5 w-5" />
          </button>

          {/* Carousel items */}
          <div
            ref={carouselRef}
            className="flex h-full gap-4 overflow-x-auto overflow-y-hidden px-2 pb-3 pt-2 scroll-smooth snap-x snap-mandatory [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
          >
            {aboutTeam.members.map((member) => {
              const isSVG = member.photo.endsWith(".svg");

              return (
                <article
                  key={member.name}
                  className="relative h-full min-w-[160px] flex-shrink-0 basis-[70%] snap-start overflow-hidden rounded-md bg-[#ececec] sm:basis-[46%] md:basis-[31%] lg:basis-[calc((100%-4rem)/5)]"
                >
                  {isSVG ? (
                    <img
                      src={member.photo}
                      alt={member.name}
                      className="h-full w-full rounded-md object-cover object-center p-4"
                    />
                  ) : (
                    <img
                      src={member.photo}
                      alt={member.name}
                      className="h-full w-full rounded-md object-cover object-center"
                    />
                  )}

                  <div className="absolute bottom-0 left-0 right-0 bg-white/95 px-4 py-3 shadow-md backdrop-blur-sm">
                    <h3 className="font-display text-[22px] leading-6 text-foreground">
                      {member.name}
                    </h3>
                    <p className="mt-1 text-sm font-medium text-muted-foreground">
                      {member.role}
                    </p>
                  </div>
                </article>
              );
            })}
          </div>

          {/* Right button */}
          <button
            type="button"
            onClick={() => scrollCarousel("right")}
            aria-label="Next team members"
            className="absolute right-2 top-1/2 z-10 hidden h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full border border-black/10 bg-white/90 text-foreground shadow-sm transition hover:bg-white md:flex"
          >
            <ChevronRight className="h-5 w-5" />
          </button>
        </div>
      </div>
    </section>
  );
}
