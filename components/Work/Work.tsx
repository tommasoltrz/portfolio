import * as React from "react";
import styles from "./Work.module.scss";
import cn from "classnames";

import { gsap } from "gsap";
import { useEffect, useRef } from "react";

type Props = {
  title: string;
  image: string;
  url?: string;
  slug?: string;
  description?: string;
  tags?: string[];
};

const Work: React.FC<Props> = ({
  description,
  title,
  image,
  url,
  slug,
  tags,
}) => {
  const ref = React.createRef<HTMLDivElement>();

  return (
    <a
      href={url || slug}
      className={cn(styles.work, "fade-in-up", "work-proj")}
      target={url ? "_blank" : "_self"}
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
        {description && <p className={"small "}>{description}</p>}
        {tags && (
          <div className={styles.tagContainer}>
            {tags.map((tag, ix) => (
              <p className={"small "} key={"tag" + ix}>
                {tag}
              </p>
            ))}
          </div>
        )}
      </article>
    </a>
  );
};

export default Work;
