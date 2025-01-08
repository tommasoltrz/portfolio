export function Footer() {
  return (
    <footer className="text-xs text-muted-foreground/80 flex justify-between font-medium">
      <div className="flex flex-col gap-2">
        <span>
          Drop me a line at{" "}
          <span className="text-foreground">tommasoltrz [at] gmail.com</span>
        </span>
        <div className="flex gap-2">
          <a href="/privacy">Privacy</a>
          <a href="/cookies">Cookies</a>
        </div>
      </div>
      <span>© Portfolio 2025</span>
    </footer>
  );
}
