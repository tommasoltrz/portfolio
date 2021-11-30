import * as React from "react";
import * as styles from "./index.module.scss";
import Three from "../components/Three/Three";
import cn from "classnames";
import Layout from "../components/Layout/Layout";
import { StoreProvider } from "../components/StoreProvider/StoreProvider";
import linkedin from "../assets/icons/linkedin.svg";
import gmail from "../assets/icons/gmail.svg";
import github from "../assets/icons/github.svg";
import stc from "../assets/images/stc.png";
import frog from "../assets/images/frogdesign.png";
import allvest from "../assets/images/allvest.png";
import referralId from "../assets/images/referralId.png";
import { gsap } from "gsap";
import { useEffect } from "react";
import FloatingLink from "../components/FloatingLink/FloatingLink";
import MasonryGrid from "../components/MasonryGrid/MasonryGrid";
import StaggeredTitle from "../components/StaggeredTitle/StaggeredTitle";
import CaseStudy from "../components/CaseStudy/CaseStudy";
import { Link } from "gatsby";
import arrow from "../assets/icons/arrow.svg";
import Work from "../components/Work/Work";

const floatingLinksData = [
  {
    name: "Linkedin",
    imgUrl: linkedin,
    bgColor: "#E7F1F7",
    url: "https://www.linkedin.com/in/tommaso-laterza",
  },
  {
    name: "Gmail",
    imgUrl: gmail,
    bgColor: "#FBEDEA",
    url: "mailto:tommasoltrz@gmail.com",
  },
  {
    name: "Github",
    imgUrl: github,
    bgColor: "#E7E7E7",
    url: "https://github.com/tommasoltrz",
  },
];

const spData = [
  {
    imgUrl: stc,
    url: "/about",
    title: "STC - Telcom",
    tags: ["Website", "Design Language System"],
  },
  {
    imgUrl: frog,
    url: "/about",
    title: "Frogdesign",
    tags: ["Website"],
  },
  {
    imgUrl: referralId,
    url: "/about",
    title: "Referral ID - Astrazeneca",
    tags: ["Website", "Medical Tool"],
  },
  {
    imgUrl: allvest,
    url: "/about",
    title: "Allvest",
    tags: ["Website", "Fintech"],
  },
];

const aboutData =
  "Hi 👋, I am an Italian web developer moving pixels in the www. I specialize in building, and sometime designing, digital experiences. Currently working at frog.";

const moreWorksData = {
  description:
    "This is a collection of smaller or older project that I worked on. Some even unrelated to web dev.",
  works: [
    {
      title: "Knots Analytics",
      description: "Website",
      img: stc,
      url: "https://knotsanalytics.com/",
    },
    {
      title: "Knots Analytics",
      description: "Website",
      img: stc,
      url: "https://knotsanalytics.com/",
    },
    {
      title: "Knots Analytics",
      description: "Website",
      img: stc,
      url: "https://knotsanalytics.com/",
    },
    {
      title: "Knots Analytics",
      description: "Website",
      img: stc,
      url: "https://knotsanalytics.com/",
    },
  ],
};
const IndexPage = () => {
  useEffect(() => {
    gsap.set(".hero-text-line", { opacity: 1 });
    gsap.from(".hero-text-line", {
      duration: 1.2,
      yPercent: 100,
      ease: "power4",
      stagger: 0.1,
      delay: 0.3,
    });
  }, []);

  return (
    <StoreProvider>
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
        <section className={styles.selectedWorkContainer}>
          <MasonryGrid>
            <StaggeredTitle
              label1="Selected"
              label2="Projects"
              classname={styles.projTitle}
            />
            {spData.map((proj, idx) => (
              <CaseStudy {...proj} key={"proj" + idx} />
            ))}
          </MasonryGrid>
        </section>
        <section className={cn("grid", styles.aboutSection)}>
          <div
            className={cn("col-12 col-sm-7 col-md-6 col-lg-5", styles.aboutCol)}
          >
            <p>{aboutData}</p>
            <Link to="/about">About me</Link>
          </div>
        </section>
        <section className={cn("grid", styles.moreWorksSection)}>
          <div className={"col-12 col-sm-6"}>
            <StaggeredTitle
              label1="More"
              label2="Works"
              classname={styles.projTitle}
            />
          </div>
          <div className={"col-12 col-sm-6"}>
            <p className={styles.description}>{moreWorksData.description}</p>
            {moreWorksData.works.map((work, idx) => (
              <Work {...work} key={"work" + idx} />
            ))}
          </div>
        </section>
      </Layout>
      <Three />
    </StoreProvider>
  );
};

export default IndexPage;
