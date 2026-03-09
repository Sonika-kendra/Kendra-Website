"use client";

import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { aboutTeam } from "@/content/about";

export default function TeamSection() {
  const carouselRef = useRef<HTMLDivElement>(null);
  const cardRefs = useRef<Array<HTMLElement | null>>([]);

  const members = useMemo(() => aboutTeam.members, []);

  const [activeIndex, setActiveIndex] = useState(0);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(members.length > 1);
  const [isPaused, setIsPaused] = useState(false);
  const [edgePadding, setEdgePadding] = useState(0);

  const updateCarouselState = useCallback(() => {
    const carousel = carouselRef.current;
    if (!carousel) return;

    const cards = cardRefs.current.filter(
      (card): card is HTMLElement => card !== null
    );
    if (!cards.length) {
      setCanScrollLeft(false);
      setCanScrollRight(false);
      return;
    }

    const baseCardWidth = cards[0].offsetWidth;
    const nextEdgePadding = Math.max(0, (carousel.clientWidth - baseCardWidth) / 2);
    setEdgePadding((prev) =>
      Math.abs(prev - nextEdgePadding) > 1 ? nextEdgePadding : prev
    );

    const carouselCenter =
      carousel.getBoundingClientRect().left + carousel.clientWidth / 2;

    let closest = 0;
    let smallest = Infinity;

    cards.forEach((card, index) => {
      const rect = card.getBoundingClientRect();
      const cardCenter = rect.left + rect.width / 2;
      const offset = Math.abs(carouselCenter - cardCenter);

      if (offset < smallest) {
        smallest = offset;
        closest = index;
      }
    });

    setActiveIndex(closest);
    setCanScrollLeft(closest > 0);
    setCanScrollRight(closest < cards.length - 1);
  }, []);

  const scrollToIndex = useCallback((index: number) => {
    const carousel = carouselRef.current;
    const cards = cardRefs.current;

    if (!carousel || !cards.length) return;

    const targetIndex = Math.max(0, Math.min(index, cards.length - 1));
    const targetCard = cards[targetIndex];

    if (!targetCard) return;

    targetCard.scrollIntoView({
      behavior: "smooth",
      block: "nearest",
      inline: "center",
    });
  }, []);

  const scrollCarousel = useCallback(
    (dir: "left" | "right", wrap = false) => {
      if (!members.length) return;

      const delta = dir === "right" ? 1 : -1;
      let nextIndex = activeIndex + delta;

      if (wrap) {
        nextIndex = (nextIndex + members.length) % members.length;
      } else {
        nextIndex = Math.max(0, Math.min(nextIndex, members.length - 1));
      }

      scrollToIndex(nextIndex);
    },
    [activeIndex, members.length, scrollToIndex]
  );

  useEffect(() => {
    const carousel = carouselRef.current;
    if (!carousel) return;

    updateCarouselState();

    let rafId = 0;
    const onScroll = () => {
      cancelAnimationFrame(rafId);
      rafId = requestAnimationFrame(updateCarouselState);
    };

    carousel.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", updateCarouselState);

    return () => {
      cancelAnimationFrame(rafId);
      carousel.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", updateCarouselState);
    };
  }, [updateCarouselState]);

  useEffect(() => {
    updateCarouselState();
  }, [edgePadding, updateCarouselState]);

  useEffect(() => {
    if (isPaused || members.length < 2) return;

    const timer = window.setInterval(() => {
      scrollCarousel("right", true);
    }, 4500);

    return () => window.clearInterval(timer);
  }, [isPaused, members.length, scrollCarousel]);

  useEffect(() => {
    if (!members.length) return;
    scrollToIndex(0);
  }, [members.length, scrollToIndex]);

  const onKeyDown = (e: React.KeyboardEvent<HTMLDivElement>) => {
    if (e.key === "ArrowRight") {
      e.preventDefault();
      scrollCarousel("right");
    }

    if (e.key === "ArrowLeft") {
      e.preventDefault();
      scrollCarousel("left");
    }
  };

  return (
    <section className="flex items-center bg-background py-10 md:py-12">
      <div className="w-full px-6 lg:px-10">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-4xl font-bold">{aboutTeam.title}</h2>
          <p className="mt-4 text-muted-foreground">{aboutTeam.description}</p>
        </div>

        <div className="relative mt-12 flex items-center gap-4">
          <button
            onClick={() => scrollCarousel("left")}
            disabled={!canScrollLeft}
            aria-label="View previous team member"
            className="z-20 hidden h-11 w-11 shrink-0 items-center justify-center rounded-full border border-border bg-background text-foreground shadow-md transition hover:bg-muted disabled:opacity-45 md:flex"
          >
            <ChevronLeft />
          </button>

          <div
            className="relative min-w-0 flex-1"
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
            onFocusCapture={() => setIsPaused(true)}
            onBlurCapture={() => setIsPaused(false)}
          >
            <div className="pointer-events-none absolute left-0 top-0 z-10 hidden h-full w-16 bg-gradient-to-r from-background to-transparent md:block" />
            <div className="pointer-events-none absolute right-0 top-0 z-10 hidden h-full w-16 bg-gradient-to-l from-background to-transparent md:block" />

            <div
              ref={carouselRef}
              role="region"
              aria-label="Our team carousel"
              tabIndex={0}
              onKeyDown={onKeyDown}
              className="flex gap-4 overflow-x-auto pb-4 pt-2 scroll-smooth snap-x snap-mandatory [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
              style={{
                paddingInline: `${edgePadding}px`,
                scrollPaddingInline: `${edgePadding}px`,
              }}
            >
              {members.map((member, index) => {
                const isActive = index === activeIndex;

                return (
                  <article
                    ref={(el) => {
                      cardRefs.current[index] = el;
                    }}
                    key={member.name}
                    className={`group relative h-[390px] min-w-[260px] snap-center overflow-hidden rounded-2xl border border-border/40 bg-[#ececec] transition-all duration-500 sm:basis-[52%] md:basis-[36%] lg:basis-[26%]
                    ${
                      isActive
                        ? "scale-100 opacity-100 shadow-2xl"
                        : "scale-[0.96] opacity-70"
                    }`}
                    aria-current={isActive}
                  >
                    <Image
                      src={member.photo}
                      alt={member.name}
                      fill
                      sizes="(max-width: 640px) 70vw, (max-width: 1024px) 40vw, 24vw"
                      className="object-cover transition duration-700 group-hover:scale-105"
                    />

                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />

                    <div className="absolute bottom-4 left-4 z-10 max-w-[calc(100%-2rem)] bg-black/80 px-4 py-3 text-white shadow-lg">
                      <h3 className="text-lg font-bold leading-tight text-white">{member.name}</h3>
                      <p className="mt-1 text-sm leading-tight text-white/90">{member.role}</p>
                    </div>
                  </article>
                );
              })}
            </div>

            <div className="mt-6 flex items-center justify-center gap-2">
              {members.map((member, index) => {
                const isActive = index === activeIndex;

                return (
                  <button
                    key={`${member.name}-dot`}
                    onClick={() => scrollToIndex(index)}
                    aria-label={`Go to ${member.name}`}
                    aria-current={isActive}
                    className={`h-2.5 rounded-full transition-all ${
                      isActive
                        ? "w-7 bg-foreground"
                        : "w-2.5 bg-foreground/30 hover:bg-foreground/50"
                    }`}
                  />
                );
              })}
            </div>
          </div>

          <button
            onClick={() => scrollCarousel("right")}
            disabled={!canScrollRight}
            aria-label="View next team member"
            className="z-20 hidden h-11 w-11 shrink-0 items-center justify-center rounded-full border border-border bg-background text-foreground shadow-md transition hover:bg-muted disabled:opacity-45 md:flex"
          >
            <ChevronRight />
          </button>
        </div>

        <div className="mt-8 flex items-center justify-center gap-3 md:hidden">
          <button
            onClick={() => scrollCarousel("left")}
            disabled={!canScrollLeft}
            aria-label="View previous team member"
            className="flex h-10 w-10 items-center justify-center rounded-full border border-border bg-background text-foreground shadow-sm transition hover:bg-muted disabled:opacity-45"
          >
            <ChevronLeft className="h-4 w-4" />
          </button>

          <button
            onClick={() => scrollCarousel("right")}
            disabled={!canScrollRight}
            aria-label="View next team member"
            className="flex h-10 w-10 items-center justify-center rounded-full border border-border bg-background text-foreground shadow-sm transition hover:bg-muted disabled:opacity-45"
          >
            <ChevronRight className="h-4 w-4" />
          </button>
        </div>
      </div>
    </section>
  );
}
