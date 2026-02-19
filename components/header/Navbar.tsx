"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import clsx from "clsx";
import { useState, useRef, useEffect } from "react";
import Logo from "./Logo";
import { ChevronDown, Menu, X } from "lucide-react";
import { navLinks } from "@/config/site";

export default function Navbar() {
  const pathname = usePathname();
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const [mobileOpen, setMobileOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setOpenDropdown(null);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <header className="top-0 z-50 border-b border-border bg-background/80 backdrop-blur-md">
      {/* CHANGE HERE */}
      <div className="container flex h-16 items-center justify-between">

        {/* Logo - Left */}
        <Logo width={130} height={36} priority />

        {/* Desktop Navigation - Right Side */}
        <nav className="hidden lg:flex items-center gap-10 ml-auto">
          {navLinks.map((link) => {
            const isActive =
              link.href === "/"
                ? pathname === "/"
                : pathname.startsWith(link.href);

            const hasChildren = !!link.children;

            if (hasChildren) {
              return (
                <div key={link.href} className="relative" ref={dropdownRef}>
                  <button
                    onClick={() =>
                      setOpenDropdown(
                        openDropdown === link.href ? null : link.href
                      )
                    }
                    className="group relative text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
                  >
                    <span className="flex items-center gap-1">
                      {link.label}
                      <ChevronDown
                        className={clsx(
                          "h-3 w-3 transition-transform",
                          openDropdown === link.href && "rotate-180"
                        )}
                      />
                    </span>

                    {/* Animated Underline */}
                    <span
                      className={clsx(
                        "absolute -bottom-1 left-0 h-[2px] w-full bg-primary origin-left scale-x-0 transition-transform duration-300",
                        isActive && "scale-x-100"
                      )}
                    />
                  </button>

                  {openDropdown === link.href && (
                    <div className="absolute right-0 mt-4 w-56 rounded-xl border border-border bg-card p-2 shadow-xl animate-fade-in">
                      {link.children?.map((child) => (
                        <Link
                          key={child.href}
                          href={child.href}
                          onClick={() => setOpenDropdown(null)}
                          className="block rounded-md px-3 py-2 text-sm text-muted-foreground hover:bg-muted hover:text-foreground transition-colors"
                        >
                          {child.label}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              );
            }

            return (
              <Link
                key={link.href}
                href={link.href}
                className="group relative text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
              >
                {link.label}

                {/* Animated Underline */}
                <span
                  className={clsx(
                    "absolute -bottom-1 left-0 h-[2px] w-full bg-primary origin-left scale-x-0 transition-transform duration-300",
                    isActive && "scale-x-100"
                  )}
                />
              </Link>
            );
          })}
        </nav>

        {/* Mobile Toggle */}
        <div className="ml-4 lg:hidden">
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="inline-flex items-center justify-center rounded-md p-2 text-foreground hover:bg-muted"
            aria-label="Toggle menu"
          >
            {mobileOpen ? (
              <X className="h-5 w-5" />
            ) : (
              <Menu className="h-5 w-5" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="lg:hidden border-t border-border bg-background animate-fade-in">
          <div className="container py-4 space-y-2">
            {navLinks.map((link) => (
              <div key={link.href}>
                <Link
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  className="block rounded-md px-3 py-2 text-sm font-medium text-muted-foreground hover:bg-muted hover:text-foreground"
                >
                  {link.label}
                </Link>

                {link.children && (
                  <div className="ml-4 mt-1 space-y-1">
                    {link.children.map((child) => (
                      <Link
                        key={child.href}
                        href={child.href}
                        onClick={() => setMobileOpen(false)}
                        className="block rounded-md px-3 py-2 text-sm text-muted-foreground hover:bg-muted hover:text-foreground"
                      >
                        {child.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      )}
    </header>
  );
}
