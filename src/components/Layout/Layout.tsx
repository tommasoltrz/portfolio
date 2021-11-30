import * as React from "react";
import * as styles from "./Layout.module.scss";
import { Context } from "../StoreProvider/StoreProvider";
import { useContext, useEffect, useState } from "react";
import Navigation from "../Navigation/Navigation";
import Footer from "../Footer/Footer";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { gsap } from "gsap";

const Layout = ({ children }) => {
  const scrollArea = React.createRef<HTMLDivElement>();
  const { top, wSize } = useContext(Context);

  useEffect(() => {
    initAnimations();
  }, []);

  const initAnimations = () => {
    ScrollTrigger.scrollerProxy(scrollArea.current, {
      fixedMarkers: true,
      scrollTop(value) {
        if (arguments.length) {
          scrollArea.current.scrollTop = value; // setter
        }
        return scrollArea?.current.scrollTop; // getter
      },
      getBoundingClientRect() {
        return {
          top: 0,
          left: 0,
          width: window.innerWidth,
          height: window.innerHeight,
        };
      },
    });

    const fadeInUpTween = document.querySelectorAll(".fade-in-up");
    fadeInUpTween.forEach((item, idx) => {
      gsap.from(item, {
        scrollTrigger: {
          trigger: item,
          start: "top 90%",
          // scroller: scrollArea.current,
          // markers: true,
        },
        y: 40,
        opacity: 0,
        duration: 1,
        ease: "Power2.easeOut",
      });
    });
  };

  useEffect(() => {
    scrollArea.current.style.transform = `translate3d(0,${-top}px, 0)`;
  }, [top]);

  useEffect(() => {
    document.body.style.height = `${
      scrollArea?.current?.getBoundingClientRect().height
    }px`;
  }, [wSize]);

  return (
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
  );
};

export default Layout;
