"use client";

import { ChevronDown } from "lucide-react";
import { useId, useState, type ReactNode } from "react";

export interface JobBullet {
  /** Bold lead-in, rendered in the foreground colour. */
  lead: string;
  /** Remainder of the bullet; may contain links. Start with a leading space. */
  body: ReactNode;
}

interface JobExperienceProps {
  role: string;
  company: string;
  /** Optional company URL. When set, the company name renders as a link. */
  companyUrl?: string;
  timeFrame: string;
  /** Short blurb shown in the collapsed header. Keep it link-free. */
  summary: ReactNode;
  /** Paragraph revealed when the row is expanded. */
  intro: ReactNode;
  bullets: JobBullet[];
  current?: boolean;
  defaultOpen?: boolean;
}

export function JobExperience({
  role,
  company,
  companyUrl,
  timeFrame,
  summary,
  intro,
  bullets,
  current = false,
  defaultOpen = false,
}: JobExperienceProps) {
  const [open, setOpen] = useState(defaultOpen);
  const triggerId = useId();
  const panelId = useId();

  return (
    <div className="border-b border-border">
      <h3 className="m-0">
        <button
          type="button"
          id={triggerId}
          aria-expanded={open}
          aria-controls={panelId}
          onClick={() => setOpen((v) => !v)}
          className="group flex w-full flex-col py-6 text-left transition-opacity hover:opacity-[0.78]"
        >
          <span className="flex items-baseline justify-between gap-6">
            <span className="flex flex-wrap items-center gap-x-[11px] gap-y-1.5 text-[16px] font-medium text-foreground">
              {role}
              <span className="font-normal text-muted-foreground/40">/</span>
              {companyUrl ? (
                <a
                  href={companyUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={(e) => e.stopPropagation()}
                  className="font-medium text-primary no-underline hover:underline"
                >
                  {company}
                </a>
              ) : (
                <span className="text-primary">{company}</span>
              )}
              {current && (
                <span className="rounded-full border border-primary px-2.5 py-1 font-roboto-mono text-[9.5px] font-medium uppercase leading-none tracking-[0.12em] text-primary">
                  Current
                </span>
              )}
            </span>
            <span className="flex flex-none items-center gap-[18px]">
              <span className="font-roboto-mono text-[13px] font-medium leading-none tracking-[0.04em] text-muted-foreground/60">
                {timeFrame}
              </span>
              <ChevronDown
                aria-hidden
                className={`size-[18px] flex-none text-muted-foreground/45 transition-transform duration-200 ${
                  open ? "rotate-180" : ""
                }`}
              />
            </span>
          </span>
          <span className="mt-2.5 block max-w-[700px] text-[15px] font-normal leading-[1.55] text-muted-foreground">
            {summary}
          </span>
        </button>
      </h3>
      <div
        id={panelId}
        role="region"
        aria-labelledby={triggerId}
        className={`grid transition-[grid-template-rows] duration-300 ease-out ${
          open ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
        }`}
      >
        {/* overflow-hidden gives the grid item an automatic min-height of 0 so
            the 0fr row can collapse it fully; padding lives on the inner box so
            it gets clipped along with the content. */}
        <div className="overflow-hidden">
          <div inert={!open} className="max-w-[720px] pb-7 pt-0.5">
            <p className="mb-5 text-[14.5px] leading-[1.6] text-muted-foreground">
              {intro}
            </p>
            <p className="mb-4 font-roboto-mono text-[11px] font-medium uppercase tracking-[0.16em] text-muted-foreground/45">
              Key initiatives
            </p>
            <ul className="flex flex-col gap-3.5">
              {bullets.map((bullet, i) => (
                <li
                  key={i}
                  className="flex gap-[13px] text-[15px] leading-[1.62] text-muted-foreground"
                >
                  <span aria-hidden className="flex-none text-primary">
                    →
                  </span>
                  <span>
                    <strong className="font-medium text-foreground">
                      {bullet.lead}
                    </strong>
                    {bullet.body}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
