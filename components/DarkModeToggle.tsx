"use client";

import { Monitor, Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

const themes = [
  { id: "light", icon: Sun },
  { id: "dark", icon: Moon },
  { id: "system", icon: Monitor },
] as const;

export default function ThemeSwitcher() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);
  if (!mounted) return null;

  return (
    <div
      className="
      inline-flex w-fit items-center gap-1 rounded-full
      border border-white/20
      bg-white/60 p-1 backdrop-blur-md
      dark:bg-neutral-900 dark:backdrop-blur-none
      shadow-lg dark:bg-black/30
      "
    >
      {themes.map(({ id, icon: Icon }) => {
        const active = theme === id;

        return (
          <button
            key={id}
            aria-label={`Set ${id} theme`}
            onClick={() => setTheme(id)}
            className="relative inline-flex flex-none items-center justify-center p-1"
          >
            <span
              className={`
      flex items-center justify-center
      rounded-full p-2
      transition-all duration-300
      ${active
                  ? "bg-white/60 shadow-md dark:bg-neutral-800"
                  : "opacity-60 hover:opacity-100"
                }
    `}
            >
              <Icon
                className={`
        h-5 w-5 transition-transform duration-300
        ${active ? "scale-110" : "scale-90"}
      `}
              />
            </span>
          </button>
        );
      })}
    </div>
  );
}
