import * as React from "react";
import styles from "./Layout.module.scss";
import { Context } from "../StoreProvider/StoreProvider";
import { useContext, useEffect, useState } from "react";
import Navigation from "../Navigation/Navigation";
import Footer from "../Footer/Footer";
import { gsap } from "gsap/dist/gsap";
import Cursor from "../Cursor/Cursor";
type Props = {};

const Layout: React.FC<Props> = ({ children }) => {
  const scrollArea = React.createRef<HTMLDivElement>();
  const { top, wSize } = useContext(Context);

  useEffect(() => {
    initAnimations();
  }, []);

  const initAnimations = () => {
    const fadeInUpTween = document.querySelectorAll(".fade-in-up");
    fadeInUpTween.forEach((item, idx) => {
      gsap.from(item, {
        scrollTrigger: {
          trigger: item,
          start: "top 90%",
        },
        y: 40,
        opacity: 0,
        duration: 1,
        ease: "Power2.easeOut",
      });
    });
  };

  useEffect(() => {
    if (scrollArea && scrollArea.current) {
      scrollArea.current.style.transform = `translate3d(0,${-top}px, 0)`;
    }
  }, [top]);

  useEffect(() => {
    document.body.style.height = `${
      scrollArea?.current?.getBoundingClientRect().height
    }px`;
  }, [wSize]);

  return (
    <>
      <main
        ref={scrollArea}
        data-scroll
        className={styles.scrollArea}
        id="scrollArea"
      >
        <Navigation />

        {children}
        <Footer />
      </main>
    </>
  );
};

export default Layout;
