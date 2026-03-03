"use client";

import Link from "next/link";
import Image from "next/image";
import clsx from "clsx";
import { WebsiteUrlConfig } from "@/config/routing";

type LogoProps = {
  href?: string;
  width?: number;
  height?: number;
  className?: string;
  priority?: boolean;
  withLink?: boolean;
};

export default function Logo({
  href = WebsiteUrlConfig.Home,
  width = 180,
  height = 60,
  className,
  priority = false,
  withLink = true,
}: LogoProps) {
  const image = (
    <Image
      src="/kendra-logo.png"
      alt="Kendra International"
      width={width}
      height={height}
      priority={priority}
      className={clsx("select-none object-contain", className)}
    />
  );

  if (!withLink) return image;

  return (
    <Link href={href} aria-label="Kendra International">
      {image}
    </Link>
  );
}
