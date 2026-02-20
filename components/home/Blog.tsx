"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { blogPosts } from "@/content/blog";

const ITEM_GAP = 12; 
const AUTO_DURATION = 4000;
const ITEM_HEIGHT = 80;
const VISIBLE_ITEMS = 6;

export default function Blog() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [progress, setProgress] = useState(0);

  const listRef = useRef<HTMLDivElement | null>(null);
  const itemRefs = useRef<(HTMLLIElement | null)[]>([]);

  const total = blogPosts.length;
  if (!total) return null;

  const activePost = blogPosts[activeIndex];

  /* ---------------- AUTO ROTATE ---------------- */
  useEffect(() => {
    if (isPaused) return;

    let frame: number;
    const start = Date.now();

    const animate = () => {
      const elapsed = Date.now() - start;
      const pct = Math.min((elapsed / AUTO_DURATION) * 100, 100);
      setProgress(pct);

      if (pct >= 100) {
        setActiveIndex((prev) => {
          const next = (prev + 1) % total;

          listRef.current?.scrollTo({
            top: next * ITEM_HEIGHT,
            behavior: "smooth",
          });

          return next;
        });

        return;
      }

      frame = requestAnimationFrame(animate);
    };

    frame = requestAnimationFrame(animate);

    return () => cancelAnimationFrame(frame);
  }, [activeIndex, isPaused, total]);

  /* ---------------- SCROLL SYNC ---------------- */
  useEffect(() => {
    if (!listRef.current) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = Number(entry.target.getAttribute("data-index"));
            if (!Number.isNaN(index)) {
              setActiveIndex(index);
            }
          }
        });
      },
      {
        root: listRef.current,
        threshold: 0.6,
      }
    );

    itemRefs.current.forEach((el) => {
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, [total]);

  return (
    <section className="w-full bg-background py-8 border-border">
      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-10 border-b border-border pb-6">
          <h2 className="text-4xl font-bold tracking-tight text-foreground">
            Blogs
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-stretch">
          {/* LEFT: FEATURED */}
          <motion.article
            key={activePost.id}
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="surface-card p-4 h-full flex flex-col"
          >
            <div className="relative w-full h-[300px] mb-8 rounded-lg overflow-hidden">
              <Image
                src={activePost.image}
                alt={activePost.title}
                fill
                priority
                className="object-cover"
              />
            </div>

            <div className="text-sm text-muted-foreground mb-3">
              {new Date(activePost.date).toLocaleDateString("en-GB", {
                day: "2-digit",
                month: "long",
                year: "numeric",
              })}{" "}
              • {activePost.author}
            </div>

            <h3 className="text-3xl font-serif text-foreground mb-4">
              {activePost.title}
            </h3>

            <p className="text-muted-foreground mb-6">
              {activePost.excerpt}
            </p>

            <Link
              href={`/blog/${activePost.slug}`}
              className="mt-auto inline-block text-sm font-medium text-accent border-b border-accent pb-1"
            >
              Continue Reading
            </Link>
          </motion.article>

          {/* RIGHT: LIST */}
          <div
            ref={listRef}
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
            className="relative overflow-y-auto"
            style={{
              height: VISIBLE_ITEMS * ITEM_HEIGHT + (VISIBLE_ITEMS - 1) * ITEM_GAP,
              scrollbarWidth: "none", // Firefox
              msOverflowStyle: "none", // IE/Edge
            }}
          >
            {/* Hide Webkit Scrollbar */}
            <style jsx>{`
              div::-webkit-scrollbar {
                display: none;
              }
            `}</style>

            <ul
              className="flex flex-col"
              style={{ gap: ITEM_GAP }}
            >
              {blogPosts.map((post, index) => (
                <li
                  key={post.id}
                  ref={(el) => {
                    itemRefs.current[index] = el;
                  }}
                  data-index={index}
                  onClick={() => {
                    setActiveIndex(index);
                    listRef.current?.scrollTo({
                      top: index * (ITEM_HEIGHT + ITEM_GAP),
                      behavior: "smooth",
                    });
                  }}
                  className={`px-3 mb-3 rounded-md transition-all cursor-pointer flex flex-col justify-between ${
                    index === activeIndex
                      ? "bg-card font-semibold border-l-4 border-accent"
                      : "bg-background font-light"
                  }`}
                  style={{ height: ITEM_HEIGHT }}
                >
                  <p className="text-xs text-muted-foreground mb-2">
                    {new Date(post.date).toLocaleDateString("en-GB", {
                      day: "2-digit",
                      month: "long",
                      year: "numeric",
                    })}
                  </p>

                  <h4 className="text-foreground hover:text-accent">
                    {post.title}
                  </h4>

                  <p className="text-sm text-muted-foreground mt-1 line-clamp-2">
                    {post.excerpt}
                  </p>
                </li>
              ))}
            </ul>

            {/* PROGRESS INDICATOR */}
            <div className="absolute right-0 top-0 bottom-0 flex flex-col gap-2 w-[2px]">
              {blogPosts.map((_, i) => (
                <div key={i} className="w-full bg-muted flex-1">
                  <motion.div
                    className="w-full bg-accent"
                    animate={{
                      height:
                        i === activeIndex
                          ? `${progress}%`
                          : i < activeIndex
                          ? "100%"
                          : "0%",
                    }}
                    transition={{ ease: "linear" }}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
