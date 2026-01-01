"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { usePathname } from "next/navigation";
import clsx from "clsx";
import { useEffect, useState } from "react";
import Logo from "./Logo";

export default function Navbar() {
  const pathname = usePathname();
  const [onHero, setOnHero] = useState(false);

  useEffect(() => {
    const hero = document.getElementById("hero");
    if (!hero) return;

    const observer = new IntersectionObserver(
      ([entry]) => setOnHero(entry.isIntersecting),
      { threshold: 0.6 }
    );

    observer.observe(hero);
    return () => observer.disconnect();
  }, []);

  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About" },
    { href: "/services", label: "Services" },
    { href: "/contact", label: "Contact" },
  ];

  return (
    <motion.header
      className={clsx(
        "sticky top-0 z-50 w-full backdrop-blur-md transition-colors duration-300",
        onHero
          ? "bg-transparent border-transparent"
          : "bg-white/80 dark:bg-black/90 border-b border-black/10 dark:border-white/10"
      )}
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.4 }}
    >
      <div className="w-full h-16 flex items-center justify-between px-20">
        <Logo width={150} height={40} priority />

        <nav
          className={clsx(
            "hidden md:flex items-center gap-8 text-sm tracking-wide transition-colors",
            onHero
              ? "text-primary"
              : "text-black dark:text-white"
          )}
        >
          {navLinks.map((link) => {
            const isActive =
              link.href === "/"
                ? pathname === "/"
                : pathname.startsWith(link.href);

            return (
              <Link
                key={link.href}
                href={link.href}
                className={clsx(
                  "relative px-2 py-1 rounded-md transition-all",
                  isActive
                    ? "font-semibold border border-dotted border-secondary"
                    : "opacity-70 hover:opacity-100"
                )}
              >
                {link.label}
              </Link>
            );
          })}
        </nav>
      </div>
    </motion.header>
  );
}
