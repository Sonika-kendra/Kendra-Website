"use client";

import { Monitor, Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import clsx from "clsx";
import { themeModes, ui } from "@/config/theme";

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
    <div className={ui.themeSwitcher.shell}>
      {THEMES.map(({ id, icon: Icon }) => {
        const isActive = selectedTheme === id;

        return (
          <button
            key={id}
            aria-label={`Set ${id} theme`}
            onClick={() => setTheme(id)}
            className={clsx(
              ui.themeSwitcher.button,
              ui.interactive.focusRing,
              isActive ? ui.themeSwitcher.active : ui.themeSwitcher.inactive
            )}
          >
            <Icon
              className={clsx(ui.themeSwitcher.icon, isActive ? "scale-110" : "scale-95")}
            />
          </button>
        );
      })}
    </div>
  );
}
