import Image from "next/image";
import { JobExperience } from "./components/job-experience";
import { SpotifyNowPlaying } from "./components/spotify-now-playing";
import { SkillCategory } from "./components/skill-category";
import { ExpertiseArea } from "./components/expertise-area";
import { Section } from "./components/section";

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
            I build and lead web platforms at scale.
            I specialize in frontend architecture and design systems, 
            and work best at the intersection of design vision and technical reality.
            <br />
            <br />
            A decade across the <a href="https://www.arduino.cc" target="_blank">
              Arduino
            </a> ecosystem, <a href="https://www.frogdesign.com" target="_blank">
              frog
            </a>, and now <a href="https://www.lastminute.com" target="_blank">
              lastminute.com
            </a>.
          </p>
        </div>
      </div>

      <Section title="Experience" hint="Tap to expand">
          <JobExperience
            role="Lead Product Engineer"
            company="Lastminute.com"
            companyUrl="https://www.lastminute.com"
            timeFrame="2023"
            current
            summary="Leading the Next.js / RSC re-platforming of weg.de and the company-wide Design System — A/B-validated work that lifted CTR 15% and conversion ~4% (peaking at 10%)."
            intro="lastminute.com is a European leader in the travel domain, operating a diverse ecosystem of sub-brands and web applications across multiple markets."
            bullets={[
              {
                lead: "Leading the architectural re-platforming",
                body: (
                  <>
                    {" "}
                    of{" "}
                    <a
                      href="https://www.weg.de"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      weg.de
                    </a>{" "}
                    to a modern Next.js stack, replacing a legacy React monolith
                    with a RSC-driven architecture.
                  </>
                ),
              },
              {
                lead: "Primary lead for the new company-wide Design System:",
                body: " architected a Multi-brand Token System unifying dozens of white-label applications, and led hiring for dedicated design talent to bridge Figma and production code.",
              },
              {
                lead: "Measuring business impact:",
                body: " Partnered with data teams to monitor KPIs, conversion, and A/B tests — building internal dashboards (Grafana, GA, Sentry) to validate migrations and tie technical work to revenue.",
              },
            ]}
          />

          <JobExperience
            role="Senior Frontend Engineer"
            company="BOOM"
            companyUrl="https://www.linkedin.com/company/boom-imagestudio/"
            timeFrame="2022"
            summary="Built in-browser image-editing features for an automated visual-content platform at an early-stage startup."
            intro="BOOM was an Italian startup (Forbes 30 Under 30) building automated visual content management. The product was browser-based image editing; the company didn't survive, but the engineering problems were fun."
            bullets={[
              {
                lead: "In-browser image editing: ",
                body: "Built editing tools for manipulating large visual assets directly in the browser — the technical core of the product.",
              },
              {
                lead: "Standards & mentorship: ",
                body: "Set code-quality practices and mentored junior developers through a fast, high-pressure delivery cycle.",
              },
            ]}
          />

          <JobExperience
            role="Design Technologist"
            company="frog"
            companyUrl="https://www.frogdesign.com"
            timeFrame="2018 – 2022"
            summary="Delivered end-to-end frontend architecture and hi-fi prototypes for Fortune 500 clients; built scalable component libraries and token-driven design → dev handoffs."
            intro="frog is a global creative consultancy. I was a core member of a lean, cross-European engineering team (Munich/Milan/London) delivering digital products for Fortune 500 clients."
            bullets={[
              {
                lead: "End-to-End Product Delivery:",
                body: " Developed frontend architecture and high-fidelity functional prototypes for market leaders in the Automotive, Retail, and Insurance sectors, transitioning from conceptual design to production-ready code.",
              },
              {
                lead: "Technical Modernization & Recovery:",
                body: " Contributed to the technical rescue and revamp of a legacy codebase for a Major Telecommunications Provider, working alongside external consultants to re-architect the platform into a modern React application.",
              },
              {
                lead: "Design Systems Advocacy:",
                body: " Partnered with design teams to establish scalable component libraries, educating stakeholders on technical feasibility and token-driven structures to ensure seamless handoffs and developer-ready specifications.",
              },
              {
                lead: "Cross-Disciplinary Innovation:",
                body: " Collaborated directly with designers to bridge the gap between physical and digital, utilizing React, Angular, and Arduino to validate complex hardware-software integrations for emerging ventures.",
              },
            ]}
          />

          <JobExperience
            role="Design Technologist"
            company="Arduino"
            companyUrl="https://www.arduino.cc"
            timeFrame="2015 – 2018"
            summary="Core developer of Casa Jasmina, an open-source smart-home “Living Lab” created with Bruce Sterling, and author of docs & libraries used by thousands of makers."
            intro={
              <>
                Arduino is a global leader in open-source hardware and software.
                Here I was the core developer of{" "}
                <a
                  href="https://blog.arduino.cc/category/casajasmina/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Casa Jasmina
                </a>{" "}
                — a collaborative “Living Lab” for open-source smart home
                technology created with Bruce Sterling.
              </>
            }
            bullets={[
              {
                lead: "IoT Interface Development:",
                body: " Engineered web-based interfaces and communication layers for connected home devices, exploring the intersection of open-source hardware and human-centric digital control.",
              },
              {
                lead: "Educational Leadership & Open Source:",
                body: " Authored comprehensive technical documentation, libraries, and tutorials that enabled thousands of makers globally to build and scale their own connected objects.",
              },
              {
                lead: "Knowledge Design & Workshops:",
                body: " Led technical workshops at universities and corporate environments across Europe, educating diverse audiences on the practical implementation of IoT and smart-home ecosystems.",
              },
              {
                lead: "Technical Communication:",
                body: " Balanced engineering with technical writing to bridge the gap between complex hardware protocols and accessible developer experiences (DX), fostering a global community of innovators.",
              },
            ]}
          />
      </Section>

      <Section title="Areas of Expertise">
          <ExpertiseArea
            title="Technical Leadership"
            description="Setting architectural direction, mentoring engineers, and raising code-quality and delivery standards across teams."
          />
          <ExpertiseArea
            title="Fullstack & Architecture"
            description="Next.js & Node.js as foundations for performance, A/B testing, and long-term stability."
          />
          <ExpertiseArea
            title="Data-Informed Delivery"
            description="Working with data teams on KPIs, conversion, and A/B testing to ensure technical work moves business metrics."
          />
          <ExpertiseArea
            title="Design Systems & Tooling"
            description="Building and implementing design systems, and working closely with designers to speak a shared language between design and code."
          />
      </Section>

      <Section title="How I build today">
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
              "a11y",
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
              "Grafana",
              "Sentry",
            ]}
          />
          <SkillCategory
            category="Backend and CMS"
            stack={["PostgreSQL", "Supabase", "Payload CMS"]}
          />
      </Section>

      <Section title="Recently played" bodyClassName="pt-6">
          <SpotifyNowPlaying />
      </Section>
    </>
  );
}
