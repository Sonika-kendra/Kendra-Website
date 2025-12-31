// components/Navbar.tsx
"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import Image from "next/image";

export default function Navbar() {
  return (
    <motion.header
      className="top-0 z-50 w-full bg-primary text-white"
    >
      <div className="container h-20 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-3">
          <div className="relative w-36 h-36 flex-shrink-0">
            <Image
              src="/kendra-logo-200.png"      // place logo in /public/logo.png
              alt="Kendra International Logo"
              fill
              className="object-contain"
              priority
            />
          </div>
        </Link>

        <nav className="hidden md:flex gap-10 text-md tracking-wider">
          <Link href="/">Home</Link>
          <Link href="/about">About</Link>
          <Link href="/services">Services</Link>
          <Link href="/contact">Contact</Link>
        </nav>
      </div>
    </motion.header>
  );
}
