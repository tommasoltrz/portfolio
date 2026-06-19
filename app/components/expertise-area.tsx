import { slugify } from "@/lib/utils";

export interface ExpertiseAreaProps {
  title: string;
  description: string;
}

export function ExpertiseArea({ title, description }: ExpertiseAreaProps) {
  const id = slugify(title);

  return (
    <section
      aria-labelledby={id}
      className="flex flex-col gap-2 border-b border-border py-[22px] md:flex-row md:items-start md:gap-8"
    >
      <h3
        id={id}
        className="text-[16px] font-medium text-foreground md:w-[280px] md:flex-none"
      >
        {title}
      </h3>
      <p className="text-[15px] leading-[1.5] text-muted-foreground md:flex-1">
        {description}
      </p>
    </section>
  );
}
