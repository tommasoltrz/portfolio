import * as React from "react";
import * as styles from "./index.module.scss";
import img1 from "../assets/images/test-1.jpeg";
import img2 from "../assets/images/test-2.jpeg";
import img3 from "../assets/images/test-3.jpeg";

import Three from "../components/Three/Three";
import cn from "classnames";
import Layout from "../components/Layout/Layout";
import { StoreProvider } from "../components/StoreProvider/StoreProvider";
import { Link } from "gatsby";
import linkedin from "../assets/icons/linkedin.svg";
import gmail from "../assets/icons/gmail.svg";
import github from "../assets/icons/github.svg";
import { gsap } from "gsap";
import { useEffect } from "react";
import FloatingLink from "../components/FloatingLink/FloatingLink";

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

const IndexPage = () => {
  useEffect(() => {
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
          <div className={cn("grid")}>
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
          </div>
        </div>
      </Layout>
      {/* <Three /> */}
    </StoreProvider>
  );
};

export default IndexPage;
