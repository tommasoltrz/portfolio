import { ReactNode } from "react";

interface JobExperienceProps {
  role: string;
  company: string;
  companyUrl: string;
  timeFrame: string;
  description: ReactNode;
  location?: string;
}

export function JobExperience({
  role,
  company,
  companyUrl,
  timeFrame,
  description,
  location = "Remote",
}: JobExperienceProps) {
  return (
    <div className="flex flex-col gap-2">
      <div className="flex justify-between">
        <div className="">
          <h3 className="text-md font-semibold">{role}</h3>
          <a href={companyUrl} target="_blank" className="text-sm">
            {company}
          </a>
          <p className="text-sm">{location}</p>
        </div>
        <p className="text-sm text-muted-foreground/80 font-semibold">
          {timeFrame}
        </p>
      </div>
      <div>{description}</div>
    </div>
  );
}
