import * as React from "react";
import * as styles from "./RoundLink.module.scss";
import cn from "classnames";
import { Link } from "gatsby";

type Props = {
  label: string;
  url: string;
  internal?: boolean;
  classname?: string;
};

const RoundLink: React.FC<Props> = ({
  label,
  url,
  internal = false,
  classname,
}) => {
  return (
    <>
      {internal ? (
        <Link className={cn(styles.roundLink, classname)} to={url}>
          {label}
        </Link>
      ) : (
        <a
          className={cn(styles.roundLink, classname)}
          target="_blank"
          rel="noreferrer"
          href={url}
        >
          {label}
        </a>
      )}
    </>
  );
};

export default RoundLink;
