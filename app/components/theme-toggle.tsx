"use client";

import { Button } from "@/components/ui/button";
import { Sun } from "lucide-react";
import { Moon } from "lucide-react";
import { useTheme } from "next-themes";
import { useEffect, useRef } from "react";
import { flushSync } from "react-dom";

export function ThemeToggle() {
  // Only read/written, never rendered, so a ref avoids a needless re-render.
  const mounted = useRef(false);
  const { resolvedTheme, setTheme } = useTheme();

  // useEffect only runs on the client, so this flips true once we've hydrated.
  useEffect(() => {
    mounted.current = true;
  }, []);

  const toggle = () => {
    const next = resolvedTheme === "dark" ? "light" : "dark";
    // Cross-fade the whole page instead of an abrupt brightness jump. flushSync
    // makes next-themes apply the class inside the transition callback, so the
    // browser snapshots the new theme. Falls back to an instant swap.
    if (!document.startViewTransition) {
      setTheme(next);
      return;
    }
    document.startViewTransition(() => flushSync(() => setTheme(next)));
  };

  return (
    <Button
      onClick={() => {
        if (mounted.current) toggle();
      }}
      aria-label="Toggle theme"
      variant="ghost"
      size="icon"
      className="rounded-full transition-[color,background-color,transform] duration-100 ease-out active:scale-90"
    >
      <Moon className="h-5 w-5 rotate-0 scale-100 transition-all motion-reduce:transition-none dark:-rotate-90 dark:scale-0" />
      <Sun className="absolute h-5 w-5 rotate-90 scale-0 transition-all motion-reduce:transition-none dark:rotate-0 dark:scale-100" />
    </Button>
  );
}
