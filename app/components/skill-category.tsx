import { slugify } from "@/lib/utils";

export interface SkillCategoryProps {
  category: string;
  stack: string[];
}

export function SkillCategory({ category, stack }: SkillCategoryProps) {
  const id = slugify(category);

  return (
    <section
      aria-labelledby={id}
      className="flex flex-col gap-1 border-b border-border py-[18px] md:flex-row md:items-baseline md:justify-between md:gap-8"
    >
      <h3
        id={id}
        className="text-base font-medium text-foreground md:flex-none"
      >
        {category}
      </h3>
      <p className="font-roboto-mono text-[13.5px] font-normal leading-[1.6] text-muted-foreground/70 md:text-right">
        {stack.join(" · ")}
      </p>
    </section>
  );
}
