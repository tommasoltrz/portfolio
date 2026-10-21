import Image from "next/image";

import { cn } from "@/lib/utils";

export interface SideProjectProps {
  name: string;
  description: string;
  badges: string[];
  url: string;
  icon: string;
  /** Optional icon variant shown in dark mode. */
  iconDark?: string;
}

const iconClass = "size-10 flex-none rounded-[22%]";

export function SideProject({
  name,
  description,
  badges,
  url,
  icon,
  iconDark,
}: SideProjectProps) {
  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className="group flex items-start gap-4 md:items-center border-b border-border py-[18px] font-normal text-foreground no-underline hover:text-foreground"
    >
      <Image
        src={icon}
        alt=""
        width={40}
        height={40}
        className={cn(iconClass, iconDark && "dark:hidden")}
      />
      {iconDark && (
        <Image
          src={iconDark}
          alt=""
          width={40}
          height={40}
          className={cn(iconClass, "hidden dark:block")}
        />
      )}
      {/* Badges sit under the text on mobile, on the right from md up. */}
      <div className="flex min-w-0 flex-1 flex-col gap-2 md:flex-row md:items-center md:gap-4">
        <div className="flex min-w-0 flex-1 flex-col">
          <h3 className="text-base font-medium text-foreground transition-colors duration-200 group-hover:text-primary group-hover:underline group-focus-visible:text-primary group-focus-visible:underline motion-reduce:transition-none">
            {name}
          </h3>
          <p className="text-body text-muted-foreground">{description}</p>
        </div>
        <ul className="flex flex-wrap gap-1.5 md:flex-none md:justify-end">
          {badges.map((badge) => (
            <li
              key={badge}
              className="rounded-full border border-border px-2.5 py-0.5 font-roboto-mono text-meta text-muted-foreground/70"
            >
              {badge}
            </li>
          ))}
        </ul>
      </div>
    </a>
  );
}
