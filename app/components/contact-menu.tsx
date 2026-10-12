import { Github, Mail, Linkedin } from "lucide-react";
import { Tooltip } from "@/components/ui/tooltip";

const links = [
  {
    href: "https://www.linkedin.com/in/tommaso-laterza/",
    icon: Linkedin,
    label: "LinkedIn",
  },
  {
    href: "mailto:tommasoltrz@gmail.com",
    icon: Mail,
    label: "Email",
  },
  {
    href: "https://github.com/tommasoltrz",
    icon: Github,
    label: "GitHub",
  },
];

export function ContactMenu() {
  return (
    <div className="flex items-center gap-0.5">
      {links.map(({ href, icon: Icon, label }) => (
        <Tooltip key={label} content={label} side="top">
          <a
            href={href}
            target={href.startsWith("mailto") ? undefined : "_blank"}
            rel={href.startsWith("mailto") ? undefined : "noopener noreferrer"}
            aria-label={label}
            className="flex h-8 w-8 items-center justify-center rounded-full text-muted-foreground no-underline transition-colors hover:bg-accent hover:text-accent-foreground sm:h-9 sm:w-9"
          >
            <Icon className="h-4 w-4" aria-hidden="true" />
          </a>
        </Tooltip>
      ))}
    </div>
  );
}
