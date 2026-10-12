import { ThemeToggle } from "./theme-toggle";
import { ContactMenu } from "./contact-menu";

const pill =
  "pointer-events-auto rounded-full border border-border/60 bg-background/80 backdrop-blur-sm";

export function FloatingControls() {
  return (
    <div className="pointer-events-none fixed inset-x-0 top-4 z-50 sm:top-10">
      <div className="mx-auto flex max-w-[930px] items-center justify-end gap-2 px-4 sm:gap-3 sm:px-20">
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
