import Image from "next/image";
import { Separator } from "@/components/ui/separator";
import { JobExperience } from "./components/job-experience";
import { SpotifyNowPlaying } from "./components/spotify-now-playing";
import { SkillCategory } from "./components/skill-category";
import { ExpertiseArea } from "./components/expertise-area";

export default function Home() {
  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-[180px_1fr] gap-8 row-start-2 items-start">
        <div className="relative w-full max-w-[180px] mx-auto">
          <div className="absolute inset-0 rounded-md bg-muted animate-pulse" />
          <Image
            src="/profile.jpg"
            alt="Tommaso Laterza"
            width={180}
            height={180}
            loading="lazy"
            className="rounded-md w-full relative"
          />
        </div>
        <div className="flex flex-col gap-8">
          <p>
            Hi 👋 <br />
            I&apos;m an Italian software engineer moving pixels in the world wide
            web.
            <br />
            <br />
            I design and lead frontend platforms for the web. I specialize in
            large scale Frontend Architecture and Design Systems. I work best at
            the intersection of design vision and technical reality.
            <br />
            <br />
            Over the past decade, I&apos;ve moved from the{" "}
            <a href="https://www.arduino.cc" target="_blank">
              Arduino ecosystem
            </a>{" "}
            to building and shipping products at{" "}
            <a href="https://www.frogdesign.com" target="_blank">
              frog design
            </a>
            , and I&apos;m currently working on modern web platforms used daily
            by thousands of travelers at{" "}
            <a href="https://www.lastminute.com" target="_blank">
              lastminute.com
            </a>
            .
            <br />
            <br />
            Always seeking opportunities to create meaningful impact through
            technology.
          </p>
        </div>
      </div>
      <Separator className="mx-auto my-12" />

      <div className="flex flex-col gap-12 row-start-2 items-start w-full">
        <div className="grid grid-cols-1 md:grid-cols-[180px_1fr] gap-8 w-full">
          <h2 className="text-l font-bold">Areas of Expertise</h2>
        </div>
        <div className="flex flex-col gap-8 w-full">
          <ExpertiseArea
            title="Frontend Architecture"
            description="I enjoy the challenge of building platforms that stay maintainable as they grow. Lately, that means working deeply with Next.js and React Server Components to create solid foundations for performance, A/B testing, and long-term stability."
          />
          <ExpertiseArea
            title="Bridging Design & Engineering"
            description="I work where design meets engineering to make the handoff actually work. I have a lot of experience with Multi-brand Token Systems and shared libraries, the kind of tooling that keeps Figma and production code in sync without the usual friction."
          />
          <ExpertiseArea
            title="Engineering Leadership & Developer Experience"
            description="I focus on making teams more effective by improving the daily development cycle. From Mentorship and Code Reviews to automating CI/CD and experimenting with LLM workflows,"
          />
        </div>
      </div>

      <Separator className="mx-auto my-12" />

      <div className="flex flex-col gap-12 row-start-2 items-start w-full">
        <div className="grid grid-cols-1 md:grid-cols-[180px_1fr] gap-8 w-full">
          <h2 className="text-l font-bold">Experience</h2>
        </div>
        <div className="flex flex-col gap-16 w-full">
          <JobExperience
            role="Senior Frontend Engineer"
            company="Lastminute.com"
            companyUrl="https://www.lastminute.com"
            timeFrame="2023 - Present"
            description={
              <div className="text-muted-foreground">
                <p>
                  lastminute.com is a European leader in the travel domain,
                  operating a diverse ecosystem of sub-brands and web
                  applications across multiple markets.
                  <br />
                  <br /> Key Initiatives:{" "}
                </p>
                <ol className="list-disc list-inside space-y-2 mt-3 ">
                  <li>
                    <span className="font-bold">
                      Leading the architectural re-platforming
                    </span>{" "}
                    of{" "}
                    <a href="https://www.weg.de" target="_blank">
                      weg.de
                    </a>{" "}
                    to a modern Next.js stack, replacing a legacy React monolith
                    with a high-performance RSC-driven architecture.
                  </li>
                  <li>
                    <span className="font-bold">
                      Revitalized a dormant Enterprise Design System
                    </span>{" "}
                    by hiring dedicated design talent and architecting a
                    Multi-brand Token System, unifying dozens of white-label
                    applications and significantly reducing frontend overhead
                    across the group.
                  </li>
                  <li>
                    <span className="font-bold">
                      Directing a data-validated migration strategy
                    </span>{" "}
                    through A/B testing and performance monitoring, ensuring
                    platform stability and business-metric parity before
                    executing full-scale production rollouts.
                  </li>
                </ol>
              </div>
            }
          />

          <JobExperience
            role="Senior Frontend Engineer"
            company="BOOM"
            companyUrl="https://www.linkedin.com/company/boom-imagestudio/"
            timeFrame="2022 - 2022"
            description={
              <div className="text-muted-foreground">
                <p>
                  BOOM was a high-growth Italian startup (recognized in Forbes
                  30 Under 30) focused on automated visual content management.
                  <br /> <br />
                  Key Initiatives:{" "}
                </p>
                <ol className="list-disc list-inside space-y-2 mt-3 ">
                  <li>
                    <span className="font-bold">
                      Product Feature Expansion:
                    </span>{" "}
                    Led the development and integration of core product features
                    for the content management platform, focusing on
                    high-performance interfaces for large-scale visual assets.
                  </li>
                  <li>
                    <span className="font-bold">Roadmap Collaboration:</span>{" "}
                    Partnered with the product team to translate business
                    requirements into technical milestones, ensuring engineering
                    efforts aligned with the rapid growth of the startup.
                  </li>
                  <li>
                    <span className="font-bold">
                      Engineering Standards & Mentorship:
                    </span>{" "}
                    Established best practices for code quality and knowledge
                    sharing, mentoring junior developers to maintain velocity
                    during a period of intense feature delivery.
                  </li>
                </ol>
              </div>
            }
          />

          <JobExperience
            role="Design Technologist"
            company="Frog Design"
            companyUrl="https://www.frogdesign.com"
            location="Munich - Milan"
            timeFrame="2018 - 2022"
            description={
              <div className="text-muted-foreground">
                <p>
                  frog is a global creative consultancy. I was a core member of
                  a lean, cross-European engineering team (Munich/Milan/London)
                  delivering digital products for Fortune 500 clients.
                </p>
                <br />
                Key Initiatives:{" "}
                <ol className="list-disc list-inside space-y-2 mt-3 ">
                  <li>
                    <span className="font-bold">
                      End-to-End Product Delivery:
                    </span>{" "}
                    Developed frontend architecture and high-fidelity functional
                    prototypes for market leaders in the Automotive, Retail, and
                    Insurance sectors, transitioning from conceptual design to
                    production-ready code.
                  </li>
                  <li>
                    <span className="font-bold">
                      Technical Modernization & Recovery:
                    </span>{" "}
                    Contributed to the technical rescue and revamp of a legacy
                    codebase for a Major Telecommunications Provider, working
                    alongside external consultants to re-architect the platform
                    into a modern React application.
                  </li>
                  <li>
                    <span className="font-bold">Design Systems Advocacy:</span>{" "}
                    Partnered with design teams to establish scalable component
                    libraries, educating stakeholders on technical feasibility
                    and token-driven structures to ensure seamless handoffs and
                    developer-ready specifications.
                  </li>
                  <li>
                    <span className="font-bold">
                      Cross-Disciplinary Innovation:
                    </span>{" "}
                    Collaborated directly with designers to bridge the gap
                    between physical and digital, utilizing React, Angular, and
                    Arduino to validate complex hardware-software integrations
                    for emerging ventures.
                  </li>
                </ol>
              </div>
            }
          />

          <JobExperience
            role="Design Technologist"
            company="Arduino"
            companyUrl="https://www.arduino.cc"
            timeFrame="2015 - 2018"
            location="Turin - Malmö"
            description={
              <div className="text-muted-foreground">
                <p>
                  Arduino is a global leader in open-source hardware and
                  software.
                  <br />
                  Here I was the core developer of{" "}
                  <a
                    href="https://blog.arduino.cc/category/casajasmina/"
                    target="_blank"
                  >
                    Casa Jasmina
                  </a>{" "}
                  - a collaborative &ldquo;Living Lab&rdquo; for open-source
                  smart home technology created with Bruce Sterling.
                  <br /> <br />
                  Key Initiatives:{" "}
                </p>

                <ol className="list-disc list-inside space-y-2 mt-3 ">
                  <li>
                    <span className="font-bold">
                      IoT Interface Development:
                    </span>{" "}
                    Engineered web-based interfaces and communication layers for
                    connected home devices, exploring the intersection of
                    open-source hardware and human-centric digital control.
                  </li>
                  <li>
                    <span className="font-bold">
                      Educational Leadership & Open Source:
                    </span>{" "}
                    Authored comprehensive technical documentation, libraries,
                    and tutorials that enabled thousands of makers globally to
                    build and scale their own connected objects.
                  </li>
                  <li>
                    <span className="font-bold">
                      Knowledge Design & Workshops:
                    </span>{" "}
                    Led technical workshops at universities and corporate
                    environments across Europe, educating diverse audiences on
                    the practical implementation of IoT and smart-home
                    ecosystems.
                  </li>
                  <li>
                    <span className="font-bold">Technical Communication:</span>{" "}
                    Balanced engineering with technical writing to bridge the
                    gap between complex hardware protocols and accessible
                    developer experiences (DX), fostering a global community of
                    innovators.
                  </li>
                </ol>
              </div>
            }
          />
        </div>
      </div>

      <Separator className="mx-auto my-12" />

      <div className="flex flex-col gap-12 row-start-2 items-start w-full">
        <div className="grid grid-cols-1 md:grid-cols-[180px_1fr] gap-8 w-full">
          <h2 className="text-l font-bold">How I build today</h2>
        </div>
        <div className="flex flex-col gap-8 w-full">
          <SkillCategory
            category="Core Architecture"
            stack={["Next.js", "React", "RSC", "TypeScript", "Node.js"]}
          />
          <SkillCategory
            category="Design & UI"
            stack={[
              "Design Systems",
              "Storybook",
              "Figma",
              "Accessibility (a11y)",
              "Radix UI",
            ]}
          />
          <SkillCategory
            category="State & Data"
            stack={["REST", "GraphQL", "TanStack Query", "Zustand"]}
          />
          <SkillCategory
            category="DevOps & Testing"
            stack={[
              "Docker",
              "GitHub Actions",
              "Cypress",
              "Turborepo",
              "Sentry",
            ]}
          />
          <SkillCategory
            category="Backend and CMS"
            stack={["PostgreSQL", "Supabase", "Payload CMS"]}
          />
        </div>
      </div>

      <Separator className="mx-auto my-12" />
      <div className="grid grid-cols-1 md:grid-cols-[180px_1fr] gap-8 row-start-2 items-start">
        <h2 className="text-l font-bold">Recently played</h2>
        <SpotifyNowPlaying />
      </div>
    </>
  );
}
