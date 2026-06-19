import Link from "next/link";

const navLink =
  "font-medium no-underline text-muted-foreground/60 transition-colors hover:text-foreground";

export function Footer() {
  return (
    <footer className="flex flex-wrap items-center justify-between gap-x-[22px] gap-y-3.5 font-roboto-mono text-xs font-medium tracking-[0.1em] text-muted-foreground/60">
      <span className="normal-case tracking-[0.02em] text-muted-foreground/80">
        Drop me a line at{" "}
        <span className="whitespace-nowrap text-foreground">
          tommasoltrz [at] gmail.com
        </span>
      </span>
      <div className="flex items-center gap-[22px]">
        <Link href="/privacy" className={navLink}>
          Privacy
        </Link>
        <Link href="/cookies" className={navLink}>
          Cookies
        </Link>
         <span>© Portfolio {new Date().getFullYear()}</span>
      </div>
    </footer>
  );
}
