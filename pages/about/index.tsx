import * as React from "react";
import styles from "./about.module.scss";
import cn from "classnames";
import Layout from "../../components/Layout/Layout";
import StaggeredTitle from "../../components/StaggeredTitle/StaggeredTitle";
import Work from "../../components/Work/Work";
import { gsap } from "gsap/dist/gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { useEffect } from "react";
import RoundLink from "../../components/RoundLink/RoundLink";
import { GetStaticProps } from "next";
import ReactMarkdown from "react-markdown";
import Cursor from "../../components/Cursor/Cursor";
import { StoreProvider } from "../../utils/StoreProvider";
import { gePageData } from "../../utils/pages";
import BasicMeta from "../../utils/BasicMeta";
import { aboutPageData, selectedProject } from "../../utils/customTypes";
gsap.registerPlugin(ScrollTrigger);

type Props = {
  data: aboutPageData;
  projData: selectedProject[];
};
const About: React.FC<Props> = ({ data, projData }) => {
  const { intro, description, skill } = data;
  const refTitle = React.createRef<HTMLSpanElement>();

  useEffect(() => {
    if (refTitle.current) {
      gsap.from(refTitle.current, {
        duration: 1,
        yPercent: 100,
        ease: "power4",
        delay: 0.2,
      });
    }
  }, []);

  return (
    <StoreProvider>
      <Layout>
        <BasicMeta url={"/about"} />
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
                "col-12 col-start-sm-3 col-end-sm-12 col-start-md-3 col-end-md-12 col-start-lg-5 col-end-lg-12"
              }
            >
              <ReactMarkdown className="fade-in-up">{intro}</ReactMarkdown>
              <ReactMarkdown className="fade-in-up">
                {description}
              </ReactMarkdown>
            </div>
          </div>
        </div>
        <section className={cn("grid sectionSpacing", styles.moreWorksSection)}>
          <div className={"col-12 col-sm-6 col-md-5"}>
            <StaggeredTitle
              label1="Tools"
              label2="& Techs"
              classname={styles.projTitle}
            />
          </div>
          <div className={cn("col-12 col-sm-6 col-md-7", styles.skillsGrid)}>
            {skill.map((tool, idx: number) => (
              <div
                className={cn(styles.skillsCell, "fade-in-up")}
                key={"tool" + idx}
              >
                <p>{tool}</p>
              </div>
            ))}
          </div>
        </section>
        <section className={cn("grid sectionSpacing", styles.cvSection)}>
          <div
            className="col-12 col-start-sm-7 col-end-sm-12 col-start-md-6 col-end-md-12
              col-start-lg-6
              col-end-lg-12"
          >
            <RoundLink
              label={"Download CV"}
              url={"/tommaso_laterza-cv.pdf"}
              classname={styles.cvLink}
            />
          </div>
        </section>

        <section className={cn("grid sectionSpacing", styles.moreWorksSection)}>
          <div className={"col-12 col-sm-6 col-md-5"}>
            <StaggeredTitle
              label1="Selected"
              label2="Projects"
              classname={styles.projTitle}
            />
          </div>
          <div className={"col-12 col-sm-6 col-md-7"}>
            {projData.map((work, idx: number) => (
              <Work {...work} key={"work" + idx} />
            ))}
          </div>
        </section>
      </Layout>
      <Cursor imgArray={projData.map((work) => work.image)} />
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
