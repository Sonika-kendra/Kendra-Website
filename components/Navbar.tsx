"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import Image from "next/image";
import { usePathname } from "next/navigation";
import clsx from "clsx";

export default function Navbar() {
  const pathname = usePathname();

  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About" },
    { href: "/services", label: "Services" },
    { href: "/contact", label: "Contact" },
  ];

  return (
    <motion.header className="top-0 z-50 w-full bg-primary text-white">
      <div className="container h-20 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-3">
          <div className="relative w-36 h-36 flex-shrink-0">
            <Image
              src="/kendra-logo-200.png"
              alt="Kendra International Logo"
              fill
              className="object-contain"
              priority
            />
          </div>
        </Link>

        <nav className="hidden md:flex gap-10 text-md tracking-wider">
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
                  "relative transition-colors duration-200 hover:text-secondary",
                  isActive
                    ? "text-secondary font-semibold after:absolute after:-bottom-2 after:left-0 after:h-[2px] after:w-full after:bg-secondary"
                    : "text-white"
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
