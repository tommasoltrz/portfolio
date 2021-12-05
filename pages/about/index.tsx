import * as React from "react";
import styles from "./about.module.scss";
import cn from "classnames";
import Layout from "../../components/Layout/Layout";
import { StoreProvider } from "../../components/StoreProvider/StoreProvider";
import StaggeredTitle from "../../components/StaggeredTitle/StaggeredTitle";
import Work from "../../components/Work/Work";
import { gsap } from "gsap/dist/gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { useEffect } from "react";
import RoundLink from "../../components/RoundLink/RoundLink";
import { GetStaticProps } from "next";
import { gePageData } from "../../components/pages";
import ReactMarkdown from "react-markdown";

const skillsData = [
  "JS, ES6",
  "React",
  "Angular 2+",

  "Next.js",
  "Gatsby",
  "GIT",

  "Three.js",
  "Gsap",
  "D3",

  "Contentful",
  "Netlify",
  "AWS",

  "Figma",
  "Sketch",
  "Adobe Suite",
];
gsap.registerPlugin(ScrollTrigger);

type Props = {
  data: any;
  projData: any;
};
const About: React.FC<Props> = ({ data, projData }) => {
  console.log(data);
  const { intro, description, skill } = data;
  const refTitle = React.createRef<HTMLSpanElement>();
  useEffect(() => {
    gsap.from(refTitle.current, {
      duration: 1,
      yPercent: 100,
      ease: "power4",
      delay: 0.2,
    });
  }, []);

  return (
    <StoreProvider>
      <Layout>
        <div className={cn(styles.heroContainer)}>
          <div className="grid">
            <div className={"col-12"}>
              <h1 className={styles.title}>
                <span>
                  <span ref={refTitle}> Tommaso Laterza</span>
                </span>
              </h1>
            </div>
            <div
              className={
                "col-12 col-start-sm-3 col-end-sm-12 col-start-md-3 col-end-md-12 col-start-lg-6 col-end-lg-12"
              }
            >
              <ReactMarkdown className="fade-in-up">{intro}</ReactMarkdown>
              <ReactMarkdown className="fade-in-up">
                {description}
              </ReactMarkdown>
            </div>
          </div>
        </div>
        <section className={cn("grid", styles.moreWorksSection)}>
          <div className={"col-12 col-sm-6 col-md-5"}>
            <StaggeredTitle
              label1="Tools"
              label2="& Techs"
              classname={styles.projTitle}
            />
          </div>
          <div className={cn("col-12 col-sm-6 col-md-7", styles.skillsGrid)}>
            {skill.map((tool: any, idx: number) => (
              <div
                className={cn(styles.skillsCell, "fade-in-up")}
                key={"tool" + idx}
              >
                <p>{tool}</p>
              </div>
            ))}
          </div>
        </section>
        <section className={cn("grid", styles.cvSection)}>
          <div
            className="col-12 col-start-sm-7 col-end-sm-12 col-start-md-6 col-end-md-12
              col-start-lg-6
              col-end-lg-12"
          >
            <RoundLink
              label={"Download CV"}
              url={"mailto:tommasoltrz@gmail.com"}
              classname={styles.cvLink}
            />
          </div>
        </section>

        <section className={cn("grid", styles.moreWorksSection)}>
          <div className={"col-12 col-sm-6 col-md-5"}>
            <StaggeredTitle
              label1="Selected"
              label2="Projects"
              classname={styles.projTitle}
            />
          </div>
          <div className={"col-12 col-sm-6 col-md-7"}>
            {projData.map((work: any, idx: number) => (
              <Work {...work} key={"work" + idx} />
            ))}
          </div>
        </section>
      </Layout>
    </StoreProvider>
  );
};

export default About;

export const getStaticProps: GetStaticProps = async () => {
  const data = gePageData("about");
  const projData = gePageData("homepage").selectedProjects;

  return {
    props: {
      data,
      projData,
    },
  };
};
