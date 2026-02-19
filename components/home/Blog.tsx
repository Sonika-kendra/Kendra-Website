"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { blogPosts } from "@/content/blog";

const AUTO_DURATION = 4000;
const ITEM_HEIGHT = 110;

export default function Blog() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [progress, setProgress] = useState(0);

  const listRef = useRef<HTMLDivElement | null>(null);
  const itemRefs = useRef<(HTMLDivElement | null)[]>([]);

  const total = blogPosts.length;
  if (!total) return null;

  const activePost = blogPosts[activeIndex];

  /* ---------------- Auto Rotate ---------------- */
  useEffect(() => {
    if (isPaused) return;

    setProgress(0);
    const start = Date.now();

    const timer = setInterval(() => {
      const elapsed = Date.now() - start;
      const pct = Math.min((elapsed / AUTO_DURATION) * 100, 100);
      setProgress(pct);

      if (pct === 100) {
        const next = (activeIndex + 1) % total;
        setActiveIndex(next);

        listRef.current?.scrollTo({
          top: next * ITEM_HEIGHT,
          behavior: "smooth",
        });
      }
    }, 50);

    return () => clearInterval(timer);
  }, [activeIndex, isPaused, total]);

  /* ---------------- Sync on Scroll ---------------- */
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

    itemRefs.current.forEach((el) => el && observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <section className="w-full bg-white py-16">
      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-14 border-b border-gray-200 pb-6">
          <h2 className="text-4xl font-bold tracking-tight text-gray-900">
            Blogs
          </h2>
        </div>

        <div className="grid lg:grid-cols-3 gap-16 items-start">
          {/* ---------------- Left: Featured ---------------- */}
          <motion.article
            key={activePost.id}
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-2"
          >
            <div className="relative w-full h-[420px] mb-8">
              <Image
                src={activePost.image}
                alt={activePost.title}
                fill
                priority
                className="object-cover"
              />
            </div>

            <div className="text-sm text-gray-400 mb-3">
              {activePost.date} • {activePost.author}
            </div>

            <h3 className="text-3xl font-semibold text-gray-900 mb-4">
              {activePost.title}
            </h3>

            <p className="text-gray-600 mb-6 max-w-2xl">
              {activePost.excerpt}
            </p>

            <Link
              href={`/blog/${activePost.slug}`}
              className="inline-block text-sm font-medium text-black border-b border-black pb-1"
            >
              Continue Reading
            </Link>
          </motion.article>

          {/* ---------------- Right: Vertical Carousel ---------------- */}
          <div
            ref={listRef}
            className="relative overflow-y-auto pr-6"
            style={{ height: ITEM_HEIGHT * 4 }}
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
          >
            <div className="space-y-6 relative">
              {blogPosts.map((post, index) => (
                <div
                  key={post.id}
                  // ref={(el) => (itemRefs.current[index] = el)}
                  data-index={index}
                  onClick={() => setActiveIndex(index)}
                  className={`flex gap-4 cursor-pointer transition-all duration-300 ${
                    index === activeIndex
                      ? "opacity-100 scale-[1.02]"
                      : "opacity-60 hover:opacity-100"
                  }`}
                  style={{ height: ITEM_HEIGHT }}
                >
                  <div className="relative w-20 h-20 flex-shrink-0">
                    <Image
                      src={post.image}
                      alt={post.title}
                      fill
                      className="object-cover"
                    />
                  </div>

                  <div>
                    <p className="text-xs text-gray-400 mb-1">
                      {post.date}
                    </p>

                    <h4 className="text-base font-medium text-gray-900">
                      {post.title}
                    </h4>

                    <p className="text-sm text-gray-500 line-clamp-2 mt-1">
                      {post.excerpt}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* Progress Indicator */}
            <div className="absolute right-0 top-0 bottom-0 flex flex-col gap-2 w-[2px]">
              {blogPosts.map((_, i) => (
                <div key={i} className="w-full bg-gray-200 flex-1">
                  <motion.div
                    className="w-full bg-black"
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
