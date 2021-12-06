import * as React from "react";
import styles from "./project.module.scss";
import cn from "classnames";

import { gsap } from "gsap";
import { useEffect, useState } from "react";

import { GetStaticPaths, GetStaticProps } from "next";
import { StoreProvider } from "../../components/StoreProvider/StoreProvider";
import { ScrollTriggerProxy } from "../../components/ScrollTriggerProxy/ScrollTriggerProxy";
import Layout from "../../components/Layout/Layout";
import { gePageData } from "../../components/pages";
import StaggeredTitle from "../../components/StaggeredTitle/StaggeredTitle";
import Work from "../../components/Work/Work";
import ReactMarkdown from "react-markdown";

export type project = {
  title: string;
  image: string;
  description: string;
  company: string;
  link: string;
  date: string;
  textBlock: Array<{
    category: string;
    body: string;
  }>;
};

type Props = {
  data: project;
  selectedPjs: any;
};
const projectPage: React.FC<Props> = ({ data, selectedPjs }) => {
  const title = React.createRef<HTMLDivElement>();
  const imgForeground = React.createRef<HTMLDivElement>();

  useEffect(() => {
    gsap.set(title.current, { opacity: 1 });
    gsap.from(title.current, {
      duration: 1,
      yPercent: 100,
      ease: "power4",
      stagger: 0.1,
      delay: 0.2,
    });
    gsap.to(imgForeground.current, {
      duration: 1,
      width: 0,
      ease: "power4",
      stagger: 0.1,
      delay: 0.2,
    });
  }, []);

  return (
    <StoreProvider>
      <ScrollTriggerProxy />
      <Layout>
        <section className={cn("grid", styles.prjTitleSection)}>
          <div className={styles.prjTitleContainer}>
            <h1 className={styles.title}>
              <span>
                <span ref={title} className={styles.titleSpan}>
                  {data.title}
                </span>
              </span>
            </h1>
            <div
              className={styles.imageContainer}
              style={{ backgroundImage: `url(../../${data.image})` }}
            >
              <div ref={imgForeground} className={styles.imgForeground}></div>
            </div>
          </div>
          <div className={cn("col-12", styles.description)}>
            <h4 className="fade-in-up">{data.description}</h4>
          </div>
          <div
            className={cn("grid no-pad fade-in-up", styles.bottomTitleSection)}
          >
            <div className={"col-12 col-sm-4 col-lg-3"}>
              <p className={cn("small ", styles.label)}>Client</p>
              <p className={styles.keyFact}>{data.company}</p>
            </div>
            <div className={"col-12 col-sm-4 col-lg-3"}>
              <p className={cn("small", styles.label)}>Project date</p>
              <p className={styles.keyFact}>{data.date}</p>
            </div>
            <div className={"col-12 col-sm-4 col-lg-3"}>
              <p className={cn("small", styles.label)}>Project Link</p>
              <p className={styles.keyFact}>
                <a href={data.link} target="_blank">
                  {data.link}
                </a>
              </p>
            </div>
          </div>
        </section>
        <section className={cn("grid", styles.projDetailsSection)}>
          {data.textBlock.map((block, idx) => (
            <React.Fragment key={idx}>
              <div
                className={cn("col-12 col-md-3 col-lg-4", styles.detailLabel)}
              >
                <h5 className="fade-in-up">{block.category}</h5>
              </div>
              <div
                className={cn("col-12 col-md-9 col-lg-8", styles.detailBody)}
              >
                <ReactMarkdown className="fade-in-up">
                  {block.body}
                </ReactMarkdown>
              </div>
            </React.Fragment>
          ))}
          <div className={cn("col-12", styles.divider)}></div>
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
            {selectedPjs.map((work: any, idx: number) => (
              <Work {...work} key={"work" + idx} />
            ))}
          </div>
        </section>
      </Layout>
    </StoreProvider>
  );
};

export default projectPage;

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const data = gePageData("projects").projects.filter(
    // @ts-ignore
    (el: project) => el.title.toUpperCase() == params?.pageSlug?.toUpperCase()
  )[0];
  const selectedPjs = gePageData("homepage").selectedProjects.filter(
    (el: any) => el.slug !== `/projects/${params?.pageSlug}`
  );
  return {
    props: {
      data,
      selectedPjs,
    },
    notFound: !data,
  };
};

export const getStaticPaths: GetStaticPaths = async () => {
  return {
    paths: [{ params: { pageSlug: "stc" } }],
    fallback: true,
  };
};
