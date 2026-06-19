import { type ReactNode } from "react";

import { cn } from "@/lib/utils";

interface SectionProps {
  title: string;
  /** Optional right-aligned hint, shown on sm+ screens. */
  hint?: string;
  /** Extra classes for the bordered body (e.g. "pt-6"). */
  bodyClassName?: string;
  children: ReactNode;
}

export function Section({ title, hint, bodyClassName, children }: SectionProps) {
  return (
    <section className="mt-24 w-full md:mt-44">
      <div className="flex items-baseline justify-between font-roboto-mono text-xs font-medium uppercase tracking-[0.18em] text-muted-foreground/60">
        <h2>{title}</h2>
        {hint && <span className="hidden sm:inline">{hint}</span>}
      </div>
      <div className={cn("mt-3.5 border-t border-border", bodyClassName)}>
        {children}
      </div>
    </section>
  );
}
