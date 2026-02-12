"use client";

import { useState } from "react";
import Link from "next/link";
import { announcement } from "@/config/site";

export default function AnnouncementBar() {
  const [visible] = useState(true);

  if (!visible) return null;

  return (
    <div className="relative z-50 bg-muted text-foreground border-b border-border">
      <div className="mx-auto flex max-w-7xl items-center justify-center px-6 py-2 text-sm font-medium lg:px-8">
        <p className="text-center font-sans text-foreground">
          {announcement.message
            .split(announcement.ctaLabel)
            .map((part, i, arr) => (
              <span key={i} className="text-foreground">
                {part}
                {i < arr.length - 1 && (
                  <Link
                    href={announcement.ctaHref}
                    className="inline font-semibold underline underline-offset-2 text-accent hover:opacity-80"
                  >
                    {announcement.ctaLabel}
                  </Link>
                )}
              </span>
            ))}
        </p>
      </div>
    </div>
  );
}

