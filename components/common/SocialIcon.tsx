"use client";

import { ReactNode } from "react";

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
      className="text-white/60 hover:text-white transition-colors"
    >
      {children}
    </a>
  );
}
