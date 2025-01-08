import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Github, Mail, Linkedin, ChevronDown } from "lucide-react";

export function ContactMenu() {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button className="font-bold">
          Reach out
          {/* <ChevronDown className={`hidden md:block`} /> */}
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        <DropdownMenuItem className="cursor-pointer">
          <a
            href="https://www.linkedin.com/in/tommaso-laterza/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 w-full text-foreground no-underline hover:text-foreground/80"
          >
            <Linkedin className="h-4 w-4" />
            <span className="text-sm w-full">LinkedIn</span>
          </a>
        </DropdownMenuItem>
        <DropdownMenuItem className="cursor-pointer">
          <a
            href="mailto:tommasoltrz@gmail.com"
            className="flex items-center gap-2 w-full text-foreground no-underline hover:text-foreground/80"
          >
            <Mail className="h-4 w-4" />
            <span className="text-sm w-full">Email</span>
          </a>
        </DropdownMenuItem>
        <DropdownMenuItem className="cursor-pointer">
          <a
            href="https://github.com/tommasoltrz"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 w-full text-foreground no-underline hover:text-foreground/80"
          >
            <Github className="h-4 w-4" />
            <span className="text-sm w-full">GitHub</span>
          </a>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
