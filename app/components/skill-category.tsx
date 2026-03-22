export interface SkillCategoryProps {
  category: string;
  stack: string[];
}

export function SkillCategory({ category, stack }: SkillCategoryProps) {
  const id = category.toLowerCase().replace(/\s+/g, "-");

  return (
    <section
      className="grid grid-cols-1 md:grid-cols-[180px_1fr] gap-2 md:gap-8 items-start"
      aria-labelledby={id}
    >
      <h3 id={id} className="font-medium text-foreground text-sm md:pt-1">
        {category}
      </h3>
      <ul className="flex flex-wrap gap-2" role="list">
        {stack.map((item) => (
          <li key={item}>
            <span className="px-2.5 py-1 bg-muted/80 text-foreground rounded text-sm inline-block">
              {item}
            </span>
          </li>
        ))}
      </ul>
    </section>
  );
}
