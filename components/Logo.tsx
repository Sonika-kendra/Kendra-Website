"use client";

import Link from "next/link";
import Image from "next/image";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import clsx from "clsx";

type LogoProps = {
  href?: string;
  width?: number;
  height?: number;
  className?: string;
  priority?: boolean;
  withLink?: boolean;
};

export default function Logo({
  href = "/",
  width = 120,
  height = 120,
  className,
  priority = false,
  withLink = true,
}: LogoProps) {
  const { resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  // Prevent hydration mismatch
  if (!mounted) return null;

  const logoSrc =
    resolvedTheme === "dark"
      ? "/kendra-logo-light.png"
      : "/kendra-logo-dark.png";

  const image = (
    <Image
      src={logoSrc}
      alt="Kendra International"
      width={width}
      height={height}
      priority={priority}
      className={clsx("select-none", className)}
    />
  );

  if (!withLink) return image;

  return (
    <Link href={href} aria-label="Kendra International">
      {image}
    </Link>
  );
}
