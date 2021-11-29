import { Link } from "gatsby";
import * as React from "react";
import * as styles from "./Navigation.module.scss";
import cn from "classnames";
import gmail from "../../assets/icons/gmail.svg";
import linkedin from "../../assets/icons/linkedin.svg";
import { gsap } from "gsap";
import { useEffect } from "react";

const Navigation = () => {
  useEffect(() => {
    gsap.set(".nav-el", { opacity: 1 });

    gsap.from(".nav-el", {
      duration: 1.2,
      yPercent: -500,
      ease: "power4",
      stagger: -0.03,
    });
  }, []);
  return (
    <nav className={styles.nav}>
      <Link to="/" className={cn("nav-el")}>
        Home
      </Link>
      <Link
        to="/about"
        className={cn(styles.aboutLink, styles.navLink, "nav-el")}
      >
        About
      </Link>
      <Link to="/about" className={cn(styles.navLink, "nav-el")}>
        Works
      </Link>
      <div className={styles.ddContainer}>
        <p className={cn(styles.ddTitle, "small", "nav-el")}>Connect</p>
        <ul className={styles.dropdown}>
          <a href="mailto:tommasoltrz@gmail.com">
            <img src={gmail} alt="Gmail" />
            <span>Gmail</span>
          </a>
          <a
            href="https://www.linkedin.com/in/tommaso-laterza"
            target="_blank"
            rel="noreferrer"
          >
            <img src={linkedin} alt="Linkedin" />
            <span>Linkedin</span>
          </a>
        </ul>
      </div>
    </nav>
  );
};

export default Navigation;
