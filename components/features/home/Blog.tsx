"use client";

import { useState, useEffect, useRef, useCallback } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

interface BlogPost {
  id: number;
  title: string;
  excerpt: string;
  slug: string;
  date: string;
  author: string;
  image: string;
}

const ITEM_GAP = 12;
const AUTO_DURATION = 4000;
const ITEM_HEIGHT = 100;
const VISIBLE_ITEMS = 5;

export default function Blog() {
  const [blogPosts, setBlogPosts] = useState<BlogPost[]>([]);
  const [activeIndex, setActiveIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const [page, setPage] = useState(1);
  const [hasMore, setHasMore] = useState(true);
  const [isFetching, setIsFetching] = useState(false);

  const listRef = useRef<HTMLDivElement | null>(null);
  const itemRefs = useRef<(HTMLLIElement | null)[]>([]);
  const loadMoreRef = useRef<HTMLDivElement | null>(null);

  const total = blogPosts.length;
  const activePost = blogPosts[activeIndex];

  const RIGHT_HEIGHT =
    VISIBLE_ITEMS * ITEM_HEIGHT +
    (VISIBLE_ITEMS - 1) * ITEM_GAP;

  /* ---------------- FETCH POSTS ---------------- */
  const fetchPosts = useCallback(async (pageNumber: number) => {
    if (isFetching || !hasMore) return;

    setIsFetching(true);

    try {
      const res = await fetch(`/api/posts?page=${pageNumber}`);
      const data = await res.json();

      if (!data.length) {
        setHasMore(false);
        return;
      }

      setBlogPosts((prev) => [...prev, ...data]);
      setPage(pageNumber);
    } catch (error) {
      console.error("Failed to load posts", error);
    } finally {
      setIsFetching(false);
    }
  }, [isFetching, hasMore]);

  /* Initial load */
  useEffect(() => {
    fetchPosts(1);
  }, [fetchPosts]);

  /* ---------------- INFINITE SCROLL OBSERVER ---------------- */
  useEffect(() => {
    if (!loadMoreRef.current || !hasMore) return;

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !isFetching) {
          fetchPosts(page + 1);
        }
      },
      {
        root: listRef.current,
        threshold: 0.1,
      }
    );

    observer.observe(loadMoreRef.current);

    return () => observer.disconnect();
  }, [page, isFetching, hasMore, fetchPosts]);

  /* ---------------- AUTO ROTATE ---------------- */
  useEffect(() => {
    if (!total || isPaused) return;

    let frame: number;
    const start = Date.now();

    const animate = () => {
      const elapsed = Date.now() - start;
      const pct = Math.min((elapsed / AUTO_DURATION) * 100, 100);

      if (pct >= 100) {
        setActiveIndex((prev) => {
          const next = (prev + 1) % total;

          listRef.current?.scrollTo({
            top: next * (ITEM_HEIGHT + ITEM_GAP),
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
  }, [isPaused, total]);

  /* ---------------- SCROLL SYNC ---------------- */
  useEffect(() => {
    if (!listRef.current || !total) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = Number(
              entry.target.getAttribute("data-index")
            );
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

  if (!total) return null;

  return (
    <section className="w-full bg-background py-8 border-border">
      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-10 border-b border-border pb-6">
          <h2 className="text-4xl font-bold tracking-tight text-foreground">
            Blogs
          </h2>
        </div>

        <div
          className="grid grid-cols-1 lg:grid-cols-2 gap-10"
          style={{ minHeight: RIGHT_HEIGHT }}
        >
          {/* LEFT FEATURED */}
          <motion.article
            key={activePost.id}
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="surface-card p-4 flex flex-col h-full"
            style={{ height: RIGHT_HEIGHT }}
          >
            <div className="relative w-full h-[45%] rounded-lg overflow-hidden mb-6">
              <Image
                src={activePost.image}
                alt={activePost.title}
                fill
                priority
                className="object-cover"
              />
            </div>

            <div className="text-sm text-muted-foreground mb-3">
              {new Date(activePost.date).toLocaleDateString("en-GB")} •{" "}
              {activePost.author}
            </div>

            <h3
              className="text-2xl font-serif text-foreground mb-4"
              dangerouslySetInnerHTML={{ __html: activePost.title }}
            />

            <p className="text-muted-foreground mb-6 line-clamp-3">
              {activePost.excerpt}
            </p>

            <Link
              href={`/blog/${activePost.slug}`}
              className="mt-auto inline-block text-sm font-medium text-accent border-b border-accent pb-1"
            >
              Continue Reading
            </Link>
          </motion.article>

          {/* RIGHT LIST */}
          <div
            ref={listRef}
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
            className="relative overflow-y-auto"
            style={{
              height: RIGHT_HEIGHT,
              scrollbarWidth: "none",
              msOverflowStyle: "none",
            }}
          >
            <style jsx>{`
              div::-webkit-scrollbar {
                display: none;
              }
            `}</style>

            <ul className="flex flex-col" style={{ gap: ITEM_GAP }}>
              {blogPosts.map((post, index) => (
                <li
                  key={`${post.id}-${index}`}
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
                  className={`px-3 rounded-md transition-all cursor-pointer flex flex-col justify-between ${
                    index === activeIndex
                      ? "bg-card font-semibold border-l-4 border-accent"
                      : "bg-background font-light"
                  }`}
                  style={{ height: ITEM_HEIGHT }}
                >
                  <p className="text-xs text-muted-foreground mb-2">
                    {new Date(post.date).toLocaleDateString("en-GB")}
                  </p>

                  <h4
                    className="text-foreground hover:text-accent"
                    dangerouslySetInnerHTML={{ __html: post.title }}
                  />

                  <p className="text-sm text-muted-foreground mt-1 line-clamp-2">
                    {post.excerpt}
                  </p>
                </li>
              ))}

              {/* Sentinel */}
              {hasMore && (
                <div
                  ref={loadMoreRef}
                  className="h-10 flex items-center justify-center text-sm text-muted-foreground"
                >
                  {isFetching ? "Loading..." : ""}
                </div>
              )}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}