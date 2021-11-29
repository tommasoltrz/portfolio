import * as React from "react";
import * as styles from "./FloatingLink.module.scss";
import cn from "classnames";

import { gsap } from "gsap";
import { useEffect, useRef } from "react";

type Props = {
  name: string;
  imgUrl: string;
  bgColor: string;
  url: string;
  idx: number;
};

const FloatingLink: React.FC<Props> = ({ name, imgUrl, bgColor, url, idx }) => {
  const ref = React.createRef<HTMLSpanElement>();

  useEffect(() => {
    gsap.from(ref.current, {
      duration: 0.1,
      height: 0,
      width: 0,
      ease: "bounce",
      delay: 1 + 0.3 * idx,
      onComplete: () => {
        gsap.to(ref.current, {
          height: 80,
          width: 80,
          duration: 0.1,
          ease: "bounce",
        });
        gsap.to(ref.current.children, {
          opacity: 1,
          duration: 0.2,
          delay: 0.2,
        });
      },
    });
  }, []);

  const hovering = (value: boolean) => {
    gsap.to(ref.current, {
      height: value ? 110 : 80,
      width: value ? 110 : 80,
      duration: 0.05,
      ease: "bounce",
    });
  };
  return (
    <a
      href={url}
      target="_blank"
      rel="noreferrer"
      className={cn(styles.heroLink, styles[`heroLink${idx + 1}`])}
      onMouseEnter={() => hovering(true)}
      onMouseLeave={() => hovering(false)}
    >
      <span
        className="hero-link-el"
        style={{ backgroundColor: bgColor }}
        ref={ref}
      >
        <img src={imgUrl} alt={name} className="hero-img-el" />
      </span>
    </a>
  );
};

export default FloatingLink;
