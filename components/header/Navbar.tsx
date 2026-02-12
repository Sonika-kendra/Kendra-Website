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

  // Close dropdown on outside click
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
    <header className="sticky top-0 z-50 w-full bg-gray-100 border-b border-gray-200">
      <div className="mx-auto flex h-14 max-w-7xl items-center justify-between px-6">
        {/* Logo */}
        <Logo width={130} height={36} priority />

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-2">
          {navLinks.map((link) => {
            const isActive =
              link.href === "/"
                ? pathname === "/"
                : pathname.startsWith(link.href);

            const hasChildren = !!link.children;

            if (hasChildren) {
              return (
                <div
                  key={link.href}
                  className="relative"
                  ref={dropdownRef}
                >
                  <button
                    onClick={() =>
                      setOpenDropdown(
                        openDropdown === link.href ? null : link.href
                      )
                    }
                    className={clsx(
                      "flex items-center gap-1 px-4 py-1.5 text-sm font-medium rounded-md transition-all",
                      isActive
                        ? "bg-navy text-white"
                        : "text-slate-800 hover:bg-gray-300 hover:text-slate-900"
                    )}
                  >
                    {link.label}
                    <ChevronDown
                      className={clsx(
                        "h-3 w-3 transition-transform",
                        openDropdown === link.href && "rotate-180"
                      )}
                    />
                  </button>

                  {openDropdown === link.href && (
                    <div className="absolute top-full left-0 mt-2 w-56 rounded-md bg-white py-2 shadow-md border border-gray-200">
                      {link.children?.map((child) => (
                        <Link
                          key={child.href}
                          href={child.href}
                          onClick={() => setOpenDropdown(null)}
                          className="block px-4 py-2 text-sm font-medium text-slate-800 rounded-md transition-all hover:bg-gray-300 hover:text-slate-900"
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
                className={clsx(
                  "px-4 py-1.5 text-sm font-medium rounded-md transition-all",
                  isActive
                    ? "bg-navy text-white"
                    : "text-slate-800 hover:bg-gray-300 hover:text-slate-900"
                )}
              >
                {link.label}
              </Link>
            );
          })}
        </nav>

        {/* Mobile Toggle */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="md:hidden text-slate-800"
          aria-label="Toggle menu"
        >
          {mobileOpen ? (
            <X className="h-5 w-5" />
          ) : (
            <Menu className="h-5 w-5" />
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="md:hidden bg-white border-t border-gray-200 px-6 py-4">
          {navLinks.map((link) => (
            <div key={link.href}>
              <Link
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className="block py-2 text-sm font-medium text-slate-700 hover:text-navy"
              >
                {link.label}
              </Link>

              {link.children && (
                <div className="ml-4">
                  {link.children.map((child) => (
                    <Link
                      key={child.href}
                      href={child.href}
                      onClick={() => setMobileOpen(false)}
                      className="block py-1.5 text-sm text-slate-500 hover:text-navy"
                    >
                      {child.label}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      )}
    </header>
  );
}
