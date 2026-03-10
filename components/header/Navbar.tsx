"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import clsx from "clsx";
import { useState, useRef, useEffect } from "react";
import Logo from "./Logo";
import { ChevronDown, Menu, X } from "lucide-react";
import { navLinks } from "@/config/site";
import { WebsiteUrlConfig } from "@/config/routing";

export default function Navbar() {
  const pathname = usePathname();
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const [openMobileDropdown, setOpenMobileDropdown] = useState<string | null>(
    null
  );
  const [mobileOpen, setMobileOpen] = useState(false);
  const desktopNavRef = useRef<HTMLElement>(null);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        desktopNavRef.current &&
        !desktopNavRef.current.contains(event.target as Node)
      ) {
        setOpenDropdown(null);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  useEffect(() => {
    setOpenDropdown(null);
    setOpenMobileDropdown(null);
    setMobileOpen(false);
  }, [pathname]);

  return (
    <header className="relative top-0 z-[100] border-b border-border bg-background/80 backdrop-blur-md">
      {/* CHANGE HERE */}
      <div className="container flex h-16 items-center justify-between">

        {/* Logo - Left */}
        <Logo width={130} height={36} priority />

        {/* Desktop Navigation - Right Side */}
        <nav ref={desktopNavRef} className="relative hidden lg:flex items-center gap-10 ml-auto">
          {navLinks.map((link) => {
            const isActive =
              link.href === WebsiteUrlConfig.Home
                ? pathname === WebsiteUrlConfig.Home
                : pathname.startsWith(link.href);

            const hasChildren = !!link.children;

            if (hasChildren) {
              return (
                <div key={link.href} className="relative flex items-center gap-1">
                  <Link
                    href={link.href}
                    onClick={() => setOpenDropdown(null)}
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
                  <button
                    type="button"
                    onClick={(e) => {
                      e.preventDefault();
                      setOpenDropdown(
                        openDropdown === link.href ? null : link.href
                      );
                    }}
                    className="rounded-sm p-1 text-muted-foreground hover:text-foreground transition-colors"
                    aria-label={`Toggle ${link.label} submenu`}
                    aria-expanded={openDropdown === link.href}
                    aria-haspopup="menu"
                  >
                    <ChevronDown
                      className={clsx(
                        "h-3 w-3 transition-transform",
                        openDropdown === link.href && "rotate-180"
                      )}
                    />
                  </button>

                  <div
                    className={clsx(
                      "absolute right-0 top-full z-[120] mt-2 w-56 rounded-xl border border-border bg-card p-2 shadow-xl transition-all duration-200",
                      openDropdown === link.href
                        ? "opacity-100 pointer-events-auto translate-y-0"
                        : "opacity-0 pointer-events-none -translate-y-1"
                    )}
                  >
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
                </div>
              );
            }

            return (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setOpenDropdown(null)}
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
            {navLinks.map((link) => {
              if (link.children?.length) {
                const isOpen = openMobileDropdown === link.href;

                return (
                  <div key={link.href}>
                    <div className="flex items-center gap-1">
                      <Link
                        href={link.href}
                        onClick={() => {
                          setMobileOpen(false);
                          setOpenMobileDropdown(null);
                        }}
                        className="flex-1 rounded-md px-3 py-2 text-sm font-medium text-muted-foreground hover:bg-muted hover:text-foreground"
                      >
                        {link.label}
                      </Link>
                      <button
                        onClick={(e) => {
                          e.preventDefault();
                          setOpenMobileDropdown(isOpen ? null : link.href);
                        }}
                        className="rounded-md p-2 text-muted-foreground hover:bg-muted hover:text-foreground"
                        aria-label={`Toggle ${link.label} submenu`}
                        aria-expanded={isOpen}
                        aria-controls={`mobile-submenu-${link.href}`}
                      >
                        <ChevronDown
                          className={clsx(
                            "h-4 w-4 transition-transform",
                            isOpen && "rotate-180"
                          )}
                        />
                      </button>
                    </div>

                    {isOpen && (
                      <div
                        id={`mobile-submenu-${link.href}`}
                        className="ml-4 mt-1 space-y-1"
                      >
                        {link.children.map((child) => (
                          <Link
                            key={child.href}
                            href={child.href}
                            onClick={() => {
                              setMobileOpen(false);
                              setOpenMobileDropdown(null);
                            }}
                            className="block rounded-md px-3 py-2 text-sm text-muted-foreground hover:bg-muted hover:text-foreground"
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
                <div key={link.href}>
                  <Link
                    href={link.href}
                    onClick={() => setMobileOpen(false)}
                    className="block rounded-md px-3 py-2 text-sm font-medium text-muted-foreground hover:bg-muted hover:text-foreground"
                  >
                    {link.label}
                  </Link>
                </div>
              );
            })}
          </div>
        </div>
      )}
    </header>
  );
}
