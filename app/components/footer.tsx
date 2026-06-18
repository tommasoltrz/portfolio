import Link from "next/link";

export function Footer() {
  return (
    <footer className="text-xs text-muted-foreground/80 flex justify-between font-medium">
      <div className="flex flex-col gap-2">
        <span>
          Drop me a line at{" "}
          <span className="text-foreground block sm:inline mt-1 sm:mt-0">
            tommasoltrz [at] gmail.com
          </span>
        </span>
        <div className="flex gap-2">
          <Link href="/privacy">Privacy</Link>
          <Link href="/cookies">Cookies</Link>
        </div>
      </div>
      <span>© Portfolio {new Date().getFullYear()}</span>
    </footer>
  );
}
