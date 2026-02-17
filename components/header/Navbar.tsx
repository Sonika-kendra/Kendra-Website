"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import clsx from "clsx";
import { useState, useRef, useEffect } from "react";
import Logo from "./Logo";
import { ChevronDown, Menu, X } from "lucide-react";
import { navLinks } from "@/config/site";
import { ui } from "@/config/theme";

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
    <header className={ui.nav.header}>
      <div className={ui.nav.shell}>
        {/* Logo */}
        <Logo width={130} height={36} priority />

        {/* Desktop Navigation */}
        <nav className={ui.nav.desktop}>
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
                      ui.nav.linkBase,
                      "flex items-center gap-1",
                      ui.interactive.focusRing,
                      isActive
                        ? ui.nav.linkActive
                        : ui.nav.linkInactive
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
                    <div className={ui.nav.dropdownPanel}>
                      {link.children?.map((child) => (
                        <Link
                          key={child.href}
                          href={child.href}
                          onClick={() => setOpenDropdown(null)}
                          className={clsx(
                            ui.nav.dropdownLink,
                            ui.interactive.focusRing
                          )}
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
                  ui.nav.linkBase,
                  ui.interactive.focusRing,
                  isActive
                    ? ui.nav.linkActive
                    : ui.nav.linkInactive
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
          className={clsx(ui.nav.mobileToggle, ui.interactive.focusRing)}
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
        <div className={ui.nav.mobilePanel}>
          {navLinks.map((link) => (
            <div key={link.href}>
              <Link
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className={clsx(ui.nav.mobileLink, ui.interactive.focusRing)}
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
                      className={clsx(
                        ui.nav.mobileChildLink,
                        ui.interactive.focusRing
                      )}
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
