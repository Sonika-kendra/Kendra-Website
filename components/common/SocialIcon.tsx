"use client";

import clsx from "clsx";
import type { SocialIconProps } from "@/interface/common";

export default function SocialIcon({ href, label, children }: SocialIconProps) {
  return (
    <a
      href={href}
      aria-label={label}
      target="_blank"
      rel="noopener noreferrer"
      className={clsx("socialIcon", "interactive-focus-ring")}
    >
      {children}
    </a>
  );
}
