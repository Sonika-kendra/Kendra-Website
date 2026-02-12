"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import clsx from "clsx";
import { useState } from "react";
import Logo from "./Logo";
import { ChevronDown, Menu, X } from "lucide-react";
import { navLinks as NAV_LINKS, serviceLinks as SERVICE_LINKS } from "@/config/site";

export default function Navbar() {
  const pathname = usePathname();
  const [servicesOpen, setServicesOpen] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  const navLinks = NAV_LINKS;
  const serviceLinks = SERVICE_LINKS;

  return (
    <header className="sticky top-0 z-50 w-full bg-navy">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6 lg:px-8">
        <Logo width={200} height={56} priority />

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => {
            const isActive =
              link.href === "/"
                ? pathname === "/"
                : pathname.startsWith(link.href);

            if (link.hasDropdown) {
              return (
                <div
                  key={link.href}
                  className="relative"
                  onMouseEnter={() => setServicesOpen(true)}
                  onMouseLeave={() => setServicesOpen(false)}
                >
                  <button
                    className={clsx(
                      "flex items-center gap-1 text-sm font-medium transition-colors",
                      isActive ? "text-white" : "text-white/80 hover:text-white"
                    )}
                  >
                    {link.label}
                    <ChevronDown className="h-3.5 w-3.5" />
                  </button>

                  {servicesOpen && (
                    <div className="absolute top-full left-0 mt-2 w-56 rounded-lg bg-white py-2 shadow-xl">
                      {serviceLinks.map((s) => (
                        <Link
                          key={s.href}
                          href={s.href}
                          className="block px-4 py-2.5 text-sm text-navy hover:bg-off-white transition-colors"
                        >
                          {s.label}
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
                  "text-sm font-medium transition-colors",
                  isActive ? "text-gold" : "text-white/80 hover:text-gold"
                )}
              >
                {link.label}
              </Link>
            );
          })}

          <Link
            href="/contact"
            className="ml-4 rounded-md border border-white px-5 py-2 text-sm font-medium text-white transition-colors hover:bg-white hover:text-navy"
          >
            Contact
          </Link>
        </nav>

        {/* Mobile toggle */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="md:hidden text-white"
          aria-label="Toggle menu"
        >
          {mobileOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="md:hidden bg-navy border-t border-white/10 px-6 py-4">
          {navLinks.map((link) => (
            <div key={link.href}>
              <Link
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className="block py-3 text-sm font-medium text-white/80 hover:text-white"
              >
                {link.label}
              </Link>
              {link.hasDropdown && (
                <div className="ml-4">
                  {serviceLinks.map((s) => (
                    <Link
                      key={s.href}
                      href={s.href}
                      onClick={() => setMobileOpen(false)}
                      className="block py-2 text-sm text-white/60 hover:text-white"
                    >
                      {s.label}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          ))}
          <Link
            href="/contact"
            onClick={() => setMobileOpen(false)}
            className="mt-4 block rounded-md border border-white px-5 py-2 text-center text-sm font-medium text-white"
          >
            Contact
          </Link>
        </div>
      )}
    </header>
  );
}
