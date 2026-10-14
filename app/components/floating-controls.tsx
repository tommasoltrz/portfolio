import { ThemeToggle } from "./theme-toggle";
import { ContactMenu } from "./contact-menu";

const pill = [
  "pointer-events-auto rounded-full border border-border/60 bg-background/70 backdrop-blur-md backdrop-saturate-150",
  // Solid fallbacks when the user asks for less transparency or more contrast.
  "[@media(prefers-reduced-transparency:reduce)]:bg-background [@media(prefers-reduced-transparency:reduce)]:backdrop-blur-none",
  "contrast-more:border-foreground/50 contrast-more:bg-background contrast-more:backdrop-blur-none",
].join(" ");

export function FloatingControls() {
  return (
    // Mobile: fixed above the header, since there isn't room beside the name.
    // sm+: spans from the header down to the bottom of the page, so the sticky
    // row starts aligned with the header and pins near the top once scrolled past.
    <div className="pointer-events-none fixed inset-x-4 top-4 z-50 sm:absolute sm:inset-x-20 sm:top-32 sm:bottom-0">
      <div className="flex items-center justify-end gap-2 sm:sticky sm:top-6 sm:gap-3">
        <div className={`${pill} flex h-10 items-center px-1 sm:h-12 sm:px-1.5`}>
          <ContactMenu />
        </div>
        <div className={`${pill} flex h-10 w-10 items-center justify-center sm:h-12 sm:w-12`}>
          <ThemeToggle />
        </div>
      </div>
    </div>
  );
}
