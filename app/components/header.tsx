import { ThemeToggle } from "./theme-toggle";
import { ContactMenu } from "./contact-menu";
import { Separator } from "@/components/ui/separator";
import Link from "next/link";

export function Header() {
  return (
    <header className="w-full flex justify-between items-center">
      <Link
        href="/"
        className="no-underline text-foreground hover:text-foreground"
      >
        <h1 className="text-l md:text-xl font-bold mr-auto">Tommaso Laterza</h1>
      </Link>
      <div className="flex gap-2 items-center">
        <ThemeToggle />
        <Separator
          orientation="vertical"
          className="h-4 mr-3 hidden md:block "
        />
        <ContactMenu />
      </div>
    </header>
  );
}
