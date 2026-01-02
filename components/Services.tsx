"use client";

import Link from "next/link";
import dynamic from "next/dynamic";
import { motion, Variants, useReducedMotion } from "framer-motion";
import { HelpCircle } from "lucide-react";
import { lazyIcons } from "@/lib/lazyIcons";

interface ServiceItem {
  title: string;
  slug: string;
  description: string;
  icon: string;
}

interface ServicesProps {
  items: ServiceItem[];
}

/**
 * Subtle, system-first motion
 */
const itemVariants: Variants = {
  hidden: { opacity: 0, y: 8 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.25,
      ease: "easeOut",
    },
  },
};

export default function Services({ items }: ServicesProps) {
  const reduceMotion = useReducedMotion();

  return (
    <section className="py-5 bg-brand.section">
      <div className="px-7">
        {/* HEADER */}
        <header className="mb-6 text-center">
          <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight">
            Services
          </h2>
          <p className="mt-1 text-sm sm:text-base text-brand.muted">
            What we can help you with
          </p>
        </header>

        <motion.ul
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="
            flex flex-col sm:flex-row
            divide-y sm:divide-y-0 sm:divide-x
            divide-brand.border
          "
        >
          {items.map((item) => {
            const Icon = lazyIcons[item.icon]
              ? dynamic(lazyIcons[item.icon], { ssr: false })
              : HelpCircle;

            return (
              <motion.li
                key={item.title}
                variants={reduceMotion ? undefined : itemVariants}
                className="flex-1"
              >
                <Link
                  href={item.slug}
                  className="
                    group flex h-full flex-col items-center text-center
                    px-6 py-8 gap-4
                    transition-colors
                    hover:bg-brand.primary/5
                  "
                >
                  {/* ICON */}
                  <div
                    className="
                      flex items-center justify-center
                      w-12 h-12 rounded-md
                      bg-brand.primary/10 text-brand.primary
                      transition-colors
                      group-hover:bg-brand.primary/15
                    "
                  >
                    <Icon className="w-6 h-6" aria-hidden />
                  </div>

                  {/* CONTENT */}
                  <div className="flex flex-col items-center">
                    <h3 className="text-sm font-semibold tracking-tight mb-1">
                      {item.title}
                    </h3>

                    <p className="text-sm text-brand.muted leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </Link>
              </motion.li>
            );
          })}
        </motion.ul>
      </div>
    </section>
  );
}
