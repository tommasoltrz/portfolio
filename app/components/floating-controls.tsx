import { ThemeToggle } from "./theme-toggle";
import { ContactMenu } from "./contact-menu";

const pill =
  "pointer-events-auto rounded-full border border-border/60 bg-background/80 backdrop-blur-sm";

export function FloatingControls() {
  return (
    <div className="pointer-events-none fixed inset-x-0 top-4 z-50 sm:top-6">
      <div className="mx-auto flex max-w-[930px] items-center justify-end gap-3 px-4 sm:px-20">
        <div className={`${pill} flex items-center px-5 py-2.5`}>
          <ContactMenu />
        </div>
        <div className={`${pill} flex items-center justify-center`}>
          <ThemeToggle />
        </div>
      </div>
    </div>
  );
}
