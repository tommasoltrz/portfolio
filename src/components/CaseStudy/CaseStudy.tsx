import * as React from "react";
import * as styles from "./CaseStudy.module.scss";
import cn from "classnames";

import { gsap } from "gsap";
import { useEffect, useRef } from "react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Link } from "gatsby";
import arrow from "../../assets/icons/arrow.svg";

type Props = {
  imgUrl: string;
  url: string;
  title: string;
  tags: string[];
};

const CaseStudy: React.FC<Props> = ({ imgUrl, url, title, tags }) => {
  const ref = React.createRef<HTMLDivElement>();
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    // gsap.set(ref.current, {
    //   height: "100%",
    // });
    // gsap.to(ref.current, {
    //   scrollTrigger: {
    //     trigger: ref.current,
    //     start: "top 90%",
    //     markers: true,
    //   },
    //   duration: 1.2,
    //   height: 0,
    //   ease: "power4",
    //   stagger: 0.2,
    // });
  }, []);

  return (
    <Link to={url} className={styles.projWrap}>
      <article>
        <div className={styles.imgContainer}>
          <img
            src={imgUrl}
            alt={title}
            className={cn(styles.pgImage, "js-img")}
          />
          <div className={styles.imgForeground} ref={ref}></div>
        </div>

        <div className={cn(styles.bottom, "fade-in-up")}>
          <h4>{title}</h4>
          <div className={styles.arrowContainer}>
            <img src={arrow} alt="Arrow" />
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
    </Link>
  );
};

export default CaseStudy;
