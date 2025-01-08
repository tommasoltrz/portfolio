import Image from "next/image";
import { Separator } from "@/components/ui/separator";
import { JobExperience } from "./components/job-experience";
import { SpotifyNowPlaying } from "./components/spotify-now-playing";

export default function Home() {
  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-[180px_1fr] gap-8 row-start-2 items-start">
        <Image
          src="/profile.jpg"
          alt="Tommaso Laterza"
          width={180}
          height={180}
          className="rounded-md w-full max-w-[180px] mx-auto"
        />
        <div className="flex flex-col gap-8">
          <p>
            Hi 👋 <br />
            I'm an Italian software engineer moving pixels in the world wide
            web. <br />
            With 8+ years in the field, I've worn many hats - from crafting
            high-traffic platforms to building open source solutions used by
            thousands of users worldwide. <br />
            Always seeking opportunities to create meaningful impact through
            technology.
          </p>
          <p>
            Over the years, I've worked across both open source and enterprise
            environments - from community-driven development at{" "}
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
        <div className="flex flex-col gap-12">
          <JobExperience
            role="Senior Frontend Engineer"
            company="Lastminute.com"
            companyUrl="https://www.lastminute.com"
            timeFrame="2023 - Present"
            description={
              <div className="text-muted-foreground text-sm">
                <p>
                  Here I'm mostly responsible for{" "}
                  <a href="https://www.weg.de" target="_blank">
                    weg.de
                  </a>{" "}
                  - a major German travel platform that helps thousands of users
                  book their trips daily. I'm leading the modernization of our
                  web platform while maintaining the current website,
                  implementing company-wide design system standards, and
                  building tools for monitoring performance. Key focus areas
                  include:{" "}
                </p>
                <ol className="list-disc list-inside space-y-2 my-2 ">
                  <li>Architecting a new platform from the ground up</li>
                  <li>
                    Implementation of the design system used across multiple
                    teams
                  </li>
                  <li>
                    Development of internal tools for tracking performance and
                    business KPIs
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
              <p className="text-muted-foreground text-sm">
                BOOM was an italian startup that aimed at transforming the world
                of visual content management. <br />
                Here I experienced first hand the fast-paced environment of a
                startup. <br />
                Unfortunately the company went bankrupt few months after I
                joined.
              </p>
            }
          />

          <JobExperience
            role="Fullstack Engineer"
            company="Frog Design"
            companyUrl="https://www.frogdesign.com"
            location="Munich - Milan"
            timeFrame="2018 - 2022"
            description={
              <p className="text-sm text-muted-foreground">
                At frog I was part of a small team of engineers building digital
                products for some of the world's leading companies - from
                healthcare providers to car manufacturers.
                <br /> Being in a design consultancy meant constantly switching
                between different challenges: one day rapidly prototyping new
                ideas, the next leading development of production applications.{" "}
                <br />I worked directly with stakeholders to turn their
                ambitious visions into working solutions, while coordinating
                teams and collaborating with some of the best designers in the
                industry.
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
              <p className="text-sm text-muted-foreground">
                At Arduino I mostly worked on{" "}
                <a
                  href="https://blog.arduino.cc/category/casajasmina/"
                  target="_blank"
                >
                  Casa Jasmina
                </a>{" "}
                - a fully functioning open source smart home developed in
                collaboration with sci-fi author Bruce Sterling.
                <br /> We used it as a living lab to explore the future of
                connected living.
                <br /> <br />
                Here I built web interfaces for IoT devices and created
                tutorials that helped thousands of makers get started with
                connected objects. <br /> <br />I got to wear many hats: from
                writing documentation, libraries and tutorials of{" "}
                <a
                  href="https://projecthub.arduino.cc/Arduino_Genuino/pavlovs-cat-296cc2"
                  target="_blank"
                >
                  questionable taste
                </a>
                , to running workshops at universities and companies across
                Europe. <br />
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
