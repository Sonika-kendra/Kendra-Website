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

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: [0.4, 0, 0.2, 1] },
  },
};

export default function Services({ items }: ServicesProps) {
  const reduceMotion = useReducedMotion();

  return (
    <section className="py-10 bg-brand.section">
      <div className="container">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10"
        >
          {items.map((item) => {
            const Icon = lazyIcons[item.icon]
              ? dynamic(lazyIcons[item.icon], { ssr: false })
              : HelpCircle;

            return (
              <motion.div
                key={item.title}
                variants={reduceMotion ? {} : cardVariants}
              >
                <Link
                  href={item.slug}
                  className="group block h-full bg-white border border-brand.border rounded-2xl p-10
             transition-all hover:shadow-xl hover:-translate-y-1"
                >
                  
                  <div className="flex h-full flex-col">
                    {/* ICON */}
                    <div className="mb-8 flex justify-center">
                      <div
                        className="flex items-center justify-center
                          w-20 h-20 rounded-2xl
                          bg-brand.primary/10 text-brand.primary
                          transition-all duration-300
                          group-hover:scale-110 group-hover:bg-brand.primary/15"
                      >
                        <Icon className="w-10 h-10" aria-hidden />
                      </div>
                    </div>

                    <h3 className="text-xl font-semibold mb-4">
                      {item.title}
                    </h3>

                    <p className="text-brand.muted leading-relaxed flex-grow">
                      {item.description}
                    </p>
                  </div>
                </Link>

              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
