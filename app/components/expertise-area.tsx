export interface ExpertiseAreaProps {
  title: string;
  description: string;
}

export function ExpertiseArea({ title, description }: ExpertiseAreaProps) {
  const id = title.toLowerCase().replace(/\s+/g, "-");

  return (
    <section
      className="grid grid-cols-1 md:grid-cols-[180px_1fr] gap-2 md:gap-8 items-start"
      aria-labelledby={id}
    >
      <h3 id={id} className="font-bold md:font-medium text-muted-foreground text-sm md:pt-1">
        {title}
      </h3>
      <p className="text-muted-foreground">{description}</p>
    </section>
  );
}
