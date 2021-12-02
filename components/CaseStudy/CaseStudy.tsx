import * as React from "react";
import styles from "./CaseStudy.module.scss";
import cn from "classnames";
import Link from "next/link";

import { gsap } from "gsap";
import { useEffect, useRef } from "react";
import ScrollTrigger from "gsap/dist/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

type Props = {
  imgUrl: string;
  url: string;
  title: string;
  tags: string[];
};

const CaseStudy: React.FC<Props> = ({ imgUrl, url, title, tags }) => {
  const ref = React.createRef<HTMLDivElement>();
  useEffect(() => {
    gsap.set(ref.current, {
      height: "100%",
    });
    gsap.to(ref.current, {
      scrollTrigger: {
        trigger: ref.current,
        start: "top 90%",
      },
      duration: 1.4,
      height: 0,
      ease: "power4",
    });
  }, []);

  // TODO move this to its own Image component
  const onImgLoaded = () => {
    const scrollMain = document.getElementById("scrollArea");
    document.body.style.height = `${
      scrollMain?.getBoundingClientRect().height
    }px`;
  };

  return (
    <Link href={url}>
      <a className={styles.projWrap}>
        <article>
          <div className={styles.imgContainer}>
            <img
              src={imgUrl}
              alt={title}
              className={cn(styles.pgImage, "js-img")}
              onLoad={() => onImgLoaded()}
            />
            {/* <StaticImage
            src={source}
            alt={title}
            className={cn(styles.pgImage, "js-img")}
          /> */}
            <div className={styles.imgForeground} ref={ref}></div>
          </div>

          <div className={cn(styles.bottom, "fade-in-up")}>
            <h4>{title}</h4>
            <div className={styles.arrowContainer}>
              <img src={"../../assets/icons/arrow.svg"} alt="Arrow" />
              <div className={styles.arrowBg}></div>
            </div>
          </div>
          <div className={styles.tagContainer}>
            {tags.map((tag, ix) => (
              <p className={"small fade-in-up"} key={"tag" + ix}>
                {tag}
              </p>
            ))}
          </div>
        </article>
      </a>
    </Link>
  );
};

export default CaseStudy;
