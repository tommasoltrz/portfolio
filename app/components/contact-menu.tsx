import { FaLinkedin, FaRegEnvelope, FaGithub } from "react-icons/fa6";
import { Tooltip } from "@/components/ui/tooltip";

const links = [
  {
    href: "https://www.linkedin.com/in/tommaso-laterza/",
    icon: FaLinkedin,
    label: "LinkedIn",
  },
  {
    href: "mailto:tommasoltrz@gmail.com",
    icon: FaRegEnvelope,
    label: "Email",
  },
  {
    href: "https://github.com/tommasoltrz",
    icon: FaGithub,
    label: "GitHub",
  },
];

export function ContactMenu() {
  return (
    <div className="flex items-center gap-3">
      {links.map(({ href, icon: Icon, label }) => (
        <Tooltip key={label} content={label} side="top">
          <a
            href={href}
            target={href.startsWith("mailto") ? undefined : "_blank"}
            rel={href.startsWith("mailto") ? undefined : "noopener noreferrer"}
            aria-label={label}
            className="text-muted-foreground hover:text-foreground no-underline transition-colors"
          >
            <Icon className="h-4 w-4" aria-hidden="true" />
          </a>
        </Tooltip>
      ))}
    </div>
  );
}
