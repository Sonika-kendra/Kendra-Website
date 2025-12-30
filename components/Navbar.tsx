// components/Navbar.tsx
"use client";

import Link from "next/link";
import { motion } from "framer-motion";

export default function Navbar() {
  return (
    <motion.header
      initial={{ y: -40, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.4 }}
      className="fixed top-0 z-50 w-full bg-brand.navy text-white"
    >
      <div className="container h-20 flex items-center justify-between">
        <Link href="/" className="text-lg font-semibold tracking-wide">
          Kendra International
        </Link>

        <nav className="hidden md:flex gap-10 text-sm uppercase tracking-wider">
          <Link href="/services">Services</Link>
          <Link href="/about">About</Link>
          <Link href="/contact">Contact</Link>
        </nav>

        <Link
          href="/contact"
          className="px-6 py-3 rounded-md bg-brand.gold text-brand.navy font-medium hover:bg-brand.goldSoft transition"
        >
          Contact Us
        </Link>
      </div>
    </motion.header>
  );
}
