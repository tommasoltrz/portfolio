import Link from "next/link";
import * as React from "react";
import styles from "./Navigation.module.scss";
import cn from "classnames";
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
      <Link href="/">
        <a className={cn("nav-el")}>Home</a>
      </Link>

      <Link href="/about">
        <a className={cn(styles.aboutLink, styles.navLink, "nav-el")}>About</a>
      </Link>

      <Link href="/about">
        <a className={cn(styles.navLink, "nav-el")}>Works</a>
      </Link>

      <div className={styles.ddContainer}>
        <p className={cn(styles.ddTitle, "small", "nav-el")}>Connect</p>
        <ul className={styles.dropdown}>
          <a href="mailto:tommasoltrz@gmail.com">
            <img src={"/assets/icons/gmail.svg"} alt="Gmail" />
            <span>Gmail</span>
          </a>
          <a
            href="https://www.linkedin.com/in/tommaso-laterza"
            target="_blank"
            rel="noreferrer"
          >
            <img src={"/assets/icons/linkedin.svg"} alt="Linkedin" />
            <span>Linkedin</span>
          </a>
        </ul>
      </div>
    </nav>
  );
};

export default Navigation;
