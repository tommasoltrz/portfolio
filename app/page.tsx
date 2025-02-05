import Image from "next/image";
import { Separator } from "@/components/ui/separator";
import { JobExperience } from "./components/job-experience";
import { SpotifyNowPlaying } from "./components/spotify-now-playing";

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
            I&apos;m an Italian software engineer moving pixels in the world
            wide web. <br />
            With 8+ years in the field, I&apos;ve worn many hats - from crafting
            high-traffic platforms to building open source solutions used by
            thousands of users worldwide. <br />
            Always seeking opportunities to create meaningful impact through
            technology.
          </p>
          <p>
            Over the years, I&apos;ve worked across both open source and
            enterprise environments - from community-driven development at{" "}
            <a href="https://www.arduino.cc" target="_blank">
              Arduino
            </a>{" "}
            to building solutions for global companies at{" "}
            <a href="https://www.frogdesign.com" target="_blank">
              frog design
            </a>
            . These diverse experiences shaped my approach to software
            development, leaving me with a soft spot for open source and a knack
            for tackling complex business challenges.
          </p>

          <p>
            Currently at{" "}
            <a href="https://www.lastminute.com" target="_blank">
              Lastminute.com
            </a>{" "}
            where I architect scalable applications used by thousands of
            travelers daily.
          </p>
        </div>
      </div>
      <Separator className="mx-auto my-12" />
      <div className="grid grid-cols-1 md:grid-cols-[180px_1fr] gap-8 row-start-2 items-start">
        <h2 className="text-l font-bold">Experience</h2>
        <div className="flex flex-col gap-14">
          <JobExperience
            role="Senior Frontend Engineer"
            company="Lastminute.com"
            companyUrl="https://www.lastminute.com"
            timeFrame="2022 - Present"
            description={
              <div className="text-muted-foreground">
                <p>
                  Here I am a core developer for{" "}
                  <a href="https://www.weg.de" target="_blank">
                    weg.de
                  </a>{" "}
                  - a major German travel platform that helps thousands of users
                  book their trips daily. I&apos;m leading the modernization of
                  the web platform, implementing company-wide design system
                  standards, and building tools for monitoring performance.{" "}
                  <br /> Key focus areas include:{" "}
                </p>
                <ol className="list-disc list-inside space-y-2 mt-3 ">
                  <li>Architecting a new platform from the ground up</li>
                  <li>
                    Implementation of the design system used across multiple
                    teams
                  </li>
                  <li>
                    Development of internal tools for tracking performance and
                    KPIs
                  </li>
                  <li>
                    Coordinating with product and design teams to deliver new
                    features
                  </li>
                  <li>
                    Mentoring junior developers and coordinating knowledge
                    sharing across teams
                  </li>
                </ol>
              </div>
            }
          />
          <JobExperience
            role="Senior Frontend Engineer"
            company="BOOM"
            companyUrl="https://www.linkedin.com/company/boom-imagestudio/"
            timeFrame="2022"
            description={
              <div className="text-muted-foreground">
                <p>
                  BOOM was an early-stage startup that aimed at transforming the
                  world of visual content management.
                  <br /> Key focus areas include:{" "}
                </p>
                <ol className="list-disc list-inside space-y-2 mt-3 ">
                  <li>
                    Leading frontend development and architecture decisions
                  </li>
                  <li>Building and integrating core product features</li>
                  <li>
                    Coordinating with product team to define technical roadmap
                  </li>
                  <li>
                    Mentoring junior developers and coordinating knowledge
                    sharing across teams
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
              <p className=" text-muted-foreground">
                Frog is a world-leading design consultancy. Here I was part of a
                small, high-impact engineering team developing solutions for
                major international enterprises.
                <br />
                <br /> From rapidly prototyping concepts to delivering
                production-ready applications, I worked across diverse projects
                in healthcare, automotive, and financial sectors.
                <br />
                <br />I collaborated directly with stakeholders to transform
                strategic initiatives into technical solutions, while
                coordinating teams and working alongside industry-leading
                designers.
              </p>
            }
          />

          <JobExperience
            role="Design Technologist"
            company="Arduino"
            companyUrl="https://www.arduino.cc"
            timeFrame="2015 - 2018"
            location="Turin - Malmö"
            description={
              <p className="text-muted-foreground">
                Arduino is a global leader in open-source hardware and software.
                <br />
                Here I was the core developer of{" "}
                <a
                  href="https://blog.arduino.cc/category/casajasmina/"
                  target="_blank"
                >
                  Casa Jasmina
                </a>{" "}
                - a fully functioning open source smart home developed in
                collaboration with sci-fi author Bruce Sterling. <br />
                We used it as a living lab to explore the future of connected
                living.
                <br /> <br />
                I built web interfaces for IoT devices and created tutorials
                that helped thousands of makers get started with connected
                objects. <br /> <br />I got to wear many hats: from writing
                documentation, libraries and tutorials to running workshops at
                universities and companies across Europe. <br />
              </p>
            }
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
