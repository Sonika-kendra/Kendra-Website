"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronUp, ChevronDown } from "lucide-react";
import { blogPosts } from "@/content/blog";

export default function Blog() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [sidebarIndex, setSidebarIndex] = useState(0);

  const total = blogPosts.length;

  /* ---------------- Featured Auto Slide ---------------- */
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev === total - 1 ? 0 : prev + 1));
    }, 8000);

    return () => clearInterval(interval);
  }, [total]);

  /* ---------------- Sidebar Auto Slide ---------------- */
  useEffect(() => {
    const interval = setInterval(() => {
      setSidebarIndex((prev) => (prev === total - 1 ? 0 : prev + 1));
    }, 7000);

    return () => clearInterval(interval);
  }, [total]);

  const featured = blogPosts[currentIndex];

  // Get 3 posts in loop
  const sidebarPosts = [
    blogPosts[sidebarIndex],
    blogPosts[(sidebarIndex + 1) % total],
    blogPosts[(sidebarIndex + 2) % total],
  ];

  const handleNext = () =>
    setSidebarIndex((prev) => (prev === total - 1 ? 0 : prev + 1));

  const handlePrev = () =>
    setSidebarIndex((prev) => (prev === 0 ? total - 1 : prev - 1));

  return (
    <section className="w-full bg-white py-24">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="mb-16 border-b border-gray-200 pb-6">
          <h2 className="text-5xl font-bold tracking-tight text-gray-900">
            Blogs
          </h2>
          {/* <p className="text-gray-500 mt-3 max-w-2xl">
            Long-form thinking, technical depth, and perspectives from our team.
          </p> */}
        </div>

        <div className="grid lg:grid-cols-3 gap-16">
          {/* ---------------- Featured Article ---------------- */}
          <div className="lg:col-span-2 relative overflow-hidden">
            <AnimatePresence mode="wait">
              <motion.article
                key={featured.id}
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -40 }}
                transition={{ duration: 0.6 }}
              >
                <div className="relative w-full h-[420px] mb-8">
                  <Image
                    src={featured.image}
                    alt={featured.title}
                    fill
                    priority
                    className="object-cover"
                  />
                </div>

                <div className="text-sm text-gray-400 mb-3">
                  {featured.date} • {featured.author}
                </div>

                <h3 className="text-3xl font-semibold text-gray-900 mb-4 leading-snug">
                  {featured.title}
                </h3>

                <p className="text-gray-600 text-base leading-relaxed mb-6 max-w-3xl">
                  {featured.excerpt}
                </p>

                <Link
                  href={`/blog/${featured.slug}`}
                  className="inline-block text-sm font-medium text-black border-b border-black pb-1"
                >
                  Continue Reading
                </Link>
              </motion.article>
            </AnimatePresence>
          </div>

          {/* ---------------- Sidebar Vertical Carousel ---------------- */}
          <div className="relative h-[650px] overflow-hidden">
            {/* Controls */}
            <div className="absolute right-0 top-0 flex flex-col gap-2 z-10">
              <button
                onClick={handlePrev}
                className="p-2 bg-white border rounded hover:bg-gray-100"
              >
                <ChevronUp size={18} />
              </button>
              <button
                onClick={handleNext}
                className="p-2 bg-white border rounded hover:bg-gray-100"
              >
                <ChevronDown size={18} />
              </button>
            </div>

            <AnimatePresence mode="wait">
              <motion.div
                key={sidebarIndex}
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -40 }}
                transition={{ duration: 0.5 }}
                className="space-y-10 pr-12"
              >
                {sidebarPosts.map((post) => (
                  <article key={post.id} className="flex gap-6 group">
                    <div className="relative w-28 h-28 flex-shrink-0">
                      <Image
                        src={post.image}
                        alt={post.title}
                        fill
                        className="object-cover"
                      />
                    </div>

                    <div>
                      <div className="text-xs text-gray-400 mb-1">
                        {post.date}
                      </div>

                      <h4 className="text-lg font-medium text-gray-900 group-hover:underline">
                        <Link href={`/blog/${post.slug}`}>
                          {post.title}
                        </Link>
                      </h4>

                      <p className="text-sm text-gray-500 mt-2 line-clamp-2">
                        {post.excerpt}
                      </p>
                    </div>
                  </article>
                ))}
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}
