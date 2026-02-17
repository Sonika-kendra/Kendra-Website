"use client";

import { ReactNode } from "react";
import clsx from "clsx";
import { ui } from "@/config/theme";

interface Props {
  href: string;
  label: string;
  children: ReactNode;
}

export default function SocialIcon({ href, label, children }: Props) {
  return (
    <a
      href={href}
      aria-label={label}
      target="_blank"
      rel="noopener noreferrer"
      className={clsx(ui.socialIcon, ui.interactive.focusRing)}
    >
      {children}
    </a>
  );
}
