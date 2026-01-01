"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { usePathname } from "next/navigation";
import clsx from "clsx";
import Logo from "./Logo";

export default function Navbar() {
  const pathname = usePathname();

  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About" },
    { href: "/services", label: "Services" },
    { href: "/contact", label: "Contact" },
  ];

  return (
    <motion.header
      className="
        sticky top-0 z-50 w-full
        backdrop-blur-md
        bg-white/80 dark:bg-black/90
        border-b border-black/10 dark:border-white/10
      "
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.4 }}
    >
      <div className="container h-16 flex items-center justify-between px-4">
        {/* Logo */}
        <Logo width={120} height={40} priority />

        {/* Navigation */}
        <nav className="hidden md:flex items-center gap-8 text-sm tracking-wide text-black dark:text-white">
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
                  "relative transition-all",
                  isActive
                    ? "font-semibold"
                    : "opacity-70 hover:opacity-100"
                )}
              >
                {link.label}

                {isActive && (
                  <motion.span
                    layoutId="nav-underline"
                    className="
                      absolute -bottom-1 left-0 h-[2px] w-full
                      bg-current rounded-full
                    "
                    transition={{
                      type: "spring",
                      stiffness: 300,
                      damping: 25,
                    }}
                  />
                )}
              </Link>
            );
          })}
        </nav>
      </div>
    </motion.header>
  );
}
