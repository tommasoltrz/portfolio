import * as React from "react";
import styles from "./index.module.scss";
import cn from "classnames";
import Layout from "../components/Layout/Layout";
import { StoreProvider } from "../components/StoreProvider/StoreProvider";
import Three from "../components/Three/Three";

import { gsap } from "gsap";
import { useEffect, useState } from "react";
import FloatingLink from "../components/FloatingLink/FloatingLink";
import MasonryGrid from "../components/MasonryGrid/MasonryGrid";
import StaggeredTitle from "../components/StaggeredTitle/StaggeredTitle";
import CaseStudy from "../components/CaseStudy/CaseStudy";
import Work from "../components/Work/Work";
import Link from "next/link";
import { ScrollTriggerProxy } from "../components/ScrollTriggerProxy/ScrollTriggerProxy";
import { GetStaticProps } from "next";
import { gePageData } from "../components/pages";
import Cursor from "../components/Cursor/Cursor";

const floatingLinksData = [
  {
    name: "Linkedin",
    imgUrl: "../assets/icons/linkedin.svg",
    bgColor: "#E7F1F7",
    url: "https://www.linkedin.com/in/tommaso-laterza",
  },
  {
    name: "Gmail",
    imgUrl: "../assets/icons/gmail.svg",
    bgColor: "#FBEDEA",
    url: "mailto:tommasoltrz@gmail.com",
  },
  {
    name: "Github",
    imgUrl: "../assets/icons/github.svg",
    bgColor: "#E7E7E7",
    url: "https://github.com/tommasoltrz",
  },
];

type Props = {
  data: any;
};
const IndexPage: React.FC<Props> = ({ data }) => {
  const { aboutShort, selectedProjects, moreWorksDesc, moreWorks } = data;
  useEffect(() => {
    gsap.set(".hero-text-line", { opacity: 1 });
    gsap.from(".hero-text-line", {
      duration: 1,
      yPercent: 100,
      ease: "power4",
      stagger: 0.1,
      delay: 0.2,
    });
  }, []);

  return (
    <StoreProvider>
      <ScrollTriggerProxy />
      <Layout>
        <div className={cn(styles.heroContainer)}>
          <section className={cn("grid")}>
            <div
              className={cn(
                "col-12 col-start-md-2 col-end-md-11 col-start-lg-2 col-end-lg-11"
              )}
            >
              <h1 className={styles.name}>
                <span>
                  <span className={"hero-text-line"}>Tommaso Laterza</span>
                </span>
              </h1>
              <h2 className={styles.subTitle}>
                <span>
                  <span className={"hero-text-line"}>Web Developer</span>
                </span>
                <span className={styles.offset}>
                  <span className={"hero-text-line"}>IxD Designer</span>
                </span>
              </h2>
            </div>
            <div className={styles.heroLinkContainer}>
              {floatingLinksData.map((link, idx) => (
                <FloatingLink {...link} idx={idx} key={idx} />
              ))}
            </div>
          </section>
        </div>
        <section className={cn("grid", styles.aboutSection)}>
          <div
            className={cn("col-12 col-sm-7 col-md-6 col-lg-5", styles.aboutCol)}
          >
            <p className={"fade-in-up"}>{aboutShort}</p>
            <Link href="/about">
              <a className={"fade-in-up"}>About me</a>
            </Link>
          </div>
        </section>
        <section className={styles.selectedWorkContainer}>
          <MasonryGrid>
            <StaggeredTitle
              label1="Selected"
              label2="Projects"
              classname={styles.projTitle}
            />
            {selectedProjects.map((proj: any, idx: number) => (
              <CaseStudy {...proj} key={"proj" + idx} />
            ))}
          </MasonryGrid>
        </section>

        <section className={cn("grid", styles.moreWorksSection)}>
          <div className={"col-12 col-sm-6 col-md-5"}>
            <StaggeredTitle
              label1="More"
              label2="Works"
              classname={styles.projTitle}
            />
          </div>
          <div className={"col-12 col-sm-6 col-md-7"}>
            <p className={styles.description}>{moreWorksDesc}</p>
            {moreWorks.map((work: any, idx: number) => (
              <Work {...work} key={"work" + idx} />
            ))}
          </div>
        </section>
      </Layout>
      {/* <Three /> */}
      <Cursor imgArray={moreWorks.map((work: any) => work.image)} />
    </StoreProvider>
  );
};

export default IndexPage;

export const getStaticProps: GetStaticProps = async () => {
  const data = gePageData("homepage");

  return {
    props: {
      data,
    },
  };
};
