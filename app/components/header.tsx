import Image from "next/image";
import Link from "next/link";

export function Header() {
  return (
    <header className="w-full flex justify-between items-center">
      <Link
        href="/"
        className="flex items-center gap-3 no-underline text-foreground hover:text-foreground sm:gap-5"
      >
        <Image
          src="/profile.jpg"
          alt="Tommaso Laterza"
          width={112}
          height={112}
          priority
          className="h-10 w-10 rounded-full bg-muted object-cover sm:h-12 sm:w-12"
        />
        <h1 className="text-base font-bold sm:text-2xl">Tommaso Laterza</h1>
      </Link>
    </header>
  );
}
