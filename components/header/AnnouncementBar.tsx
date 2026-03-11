"use client";

import { useState } from "react";
import Link from "next/link";
import { announcement } from "@/config/site";
import clsx from "clsx";

export default function AnnouncementBar() {
  const [visible] = useState(true);

  if (!visible) return null;

  return (
    <div className="announcement-root">
      <div className="announcement-container">
        <p className="text-center font-sans text-foreground">
          {announcement.message
            .split(announcement.ctaLabel)
            .map((part, i, arr) => (
              <span key={i} className="text-foreground">
                {part}
                {i < arr.length - 1 && (
                  <Link
                    href={announcement.ctaHref}
                    className={clsx("announcement-link", "interactive-focus-ring")}
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

