"use client";

import { Monitor, Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import clsx from "clsx";
import { themeModes } from "@/config/theme";
import { themeSwitcherContent } from "@/config/header";

type ThemeId = "light" | "dark" | "system";

const THEMES: { id: ThemeId; icon: React.ElementType }[] = [
  { id: "light", icon: Sun },
  { id: "dark", icon: Moon },
  { id: "system", icon: Monitor },
];

const isThemeId = (value: string): value is ThemeId =>
  themeModes.includes(value as ThemeId);

export default function ThemeSwitcher() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);
  if (!mounted) return null;

  const selectedTheme: ThemeId =
    theme && isThemeId(theme) ? theme : themeModes[2];

  return (
    <div className="themeSwitcher-shell">
      {THEMES.map(({ id, icon: Icon }) => {
        const isActive = selectedTheme === id;

        return (
          <button
            key={id}
            aria-label={`${themeSwitcherContent.setThemeAriaPrefix} ${id} ${themeSwitcherContent.setThemeAriaSuffix}`}
            onClick={() => setTheme(id)}
            className={clsx(
              "themeSwitcher-button",
              "interactive-focus-ring",
              isActive ? "themeSwitcher-active" : "themeSwitcher-inactive"
            )}
          >
            <Icon
              className={clsx("themeSwitcher-icon", isActive ? "scale-110" : "scale-95")}
            />
          </button>
        );
      })}
    </div>
  );
}
