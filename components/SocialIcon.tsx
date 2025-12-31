"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";

interface Props {
  href: string;
  label: string;
  children: ReactNode;
}

export default function SocialIcon({ href, label, children }: Props) {
  return (
    <motion.a
      href={href}
      aria-label={label}
      target="_blank"
      rel="noopener noreferrer"
      whileHover={{ scale: 1.15, rotate: 5 }}
      whileTap={{ scale: 0.95 }}
      className="text-slate-700 dark:text-slate-300 hover:text-black dark:hover:text-white transition"
    >
      {children}
    </motion.a>
  );
}
