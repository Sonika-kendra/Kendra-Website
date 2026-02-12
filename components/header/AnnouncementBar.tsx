"use client";

import { useState } from "react";
import Link from "next/link";
import { X } from "lucide-react";
import { announcement } from "@/config/site";

export default function AnnouncementBar() {
  const [visible, setVisible] = useState(true);

  if (!visible) return null;

  return (
    <div className="relative z-50 bg-[#fdf6e3] text-[#3b342a] border-b border-[#e6d3a3]">
      <div className="mx-auto flex max-w-7xl items-center justify-center px-6 py-2 text-sm font-medium lg:px-8">
        <p className="text-center font-sans">
          {announcement.message
            .split(announcement.ctaLabel)
            .map((part, i, arr) => (
              <span key={i}>
                {part}
                {i < arr.length - 1 && (
                  <Link
                    href={announcement.ctaHref}
                    className="inline font-semibold underline underline-offset-2 text-[#8b6f3d] hover:text-[#6f552c]"
                  >
                    {announcement.ctaLabel}
                  </Link>
                )}
              </span>
            ))}
        </p>

        <button
          onClick={() => setVisible(false)}
          className="absolute right-4 flex items-center justify-center rounded-full p-1 text-[#8b6f3d]/70 transition-colors hover:text-[#6f552c]"
          aria-label="Dismiss announcement"
        >
          <X className="h-4 w-4" />
        </button>
      </div>
    </div>
  );
}
