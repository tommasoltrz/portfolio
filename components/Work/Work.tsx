import * as React from "react";
import styles from "./Work.module.scss";
import cn from "classnames";

import { gsap } from "gsap";
import { useEffect, useRef } from "react";

type Props = {
  title: string;
  description: string;
  img: string;
  url: string;
};

const Work: React.FC<Props> = ({ description, title, img, url }) => {
  const ref = React.createRef<HTMLDivElement>();
  useEffect(() => {
    // gsap.registerPlugin(ScrollTrigger);
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
    <a
      href={url}
      className={cn(styles.work, "fade-in-up")}
      target="_blank"
      rel="noreferrer"
    >
      <article>
        <div className={styles.titleContainer}>
          <h4>{title}</h4>
          <div className={styles.arrowContainer}>
            <img src={"/assets/icons/arrow.svg"} alt="Arrow" />
            <div className={styles.arrowBg}></div>
          </div>
        </div>
        <p className={"small "}>{description}</p>
      </article>
    </a>
  );
};

export default Work;
