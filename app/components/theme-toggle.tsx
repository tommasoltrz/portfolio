"use client";

import { Button } from "@/components/ui/button";
import { FaRegSun, FaRegMoon } from "react-icons/fa6";
import { useTheme } from "next-themes";
import { useEffect, useRef } from "react";

export function ThemeToggle() {
  // Only read/written, never rendered, so a ref avoids a needless re-render.
  const mounted = useRef(false);
  const { resolvedTheme, setTheme } = useTheme();

  // useEffect only runs on the client, so this flips true once we've hydrated.
  useEffect(() => {
    mounted.current = true;
  }, []);

  return (
    <Button
      onClick={() => {
        if (mounted.current) {
          setTheme(resolvedTheme === "dark" ? "light" : "dark");
        }
      }}
      aria-label="Toggle theme"
      variant="ghost"
      size="icon"
      className="rounded-full"
    >
      <FaRegMoon className="h-[18px] w-[18px] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
      <FaRegSun className="absolute h-[18px] w-[18px] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
    </Button>
  );
}
