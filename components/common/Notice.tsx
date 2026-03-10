"use client";
import { announcement } from "@/config/site";

export default function Notice() {
  return (
    <div className="w-full bg-white text-navy text-sm font-medium">
      <div className="mx-auto max-w-7xl px-4 py-2.5 text-center">
        {announcement.message
          .split(announcement.ctaLabel)
          .map((part, i, arr) => (
            <span key={i}>
              {part}
              {i < arr.length - 1 && <strong>{announcement.ctaLabel}</strong>}
            </span>
          ))}
      </div>
    </div>
  );
}
