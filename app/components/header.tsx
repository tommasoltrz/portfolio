import { ThemeToggle } from "./theme-toggle";
import { ContactMenu } from "./contact-menu";
import Link from "next/link";

export function Header() {
  return (
    <header className="w-full flex justify-between items-center">
      <div className="flex items-center gap-3">
        <Link
          href="/"
          className="no-underline text-foreground hover:text-foreground"
        >
          <h1 className="text-l md:text-xl font-bold">Tommaso Laterza</h1>
        </Link>
        <ThemeToggle />
      </div>
      <ContactMenu />
    </header>
  );
}
