import * as React from "react";
import * as styles from "./Layout.module.scss";
import { Context } from "../StoreProvider/StoreProvider";
import { useContext, useEffect } from "react";
import Navigation from "../Navigation/Navigation";
import Footer from "../Footer/Footer";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { gsap } from "gsap";

const Layout = ({ children }) => {
  const scrollArea = React.createRef<HTMLDivElement>();
  const { top, wSize } = useContext(Context);

  useEffect(() => {
    // TODO find a way to remove timeout
    setTimeout(() => {
      document.body.style.height = `${
        scrollArea?.current?.getBoundingClientRect().height
      }px`;
    }, 100);
    gsap.registerPlugin(ScrollTrigger);

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
  }, []);

  useEffect(() => {
    scrollArea.current.style.transform = `translate3d(0,${-top}px, 0)`;
  }, [top]);

  useEffect(() => {
    document.body.style.height = `${
      scrollArea?.current?.getBoundingClientRect().height
    }px`;
  }, [wSize]);

  return (
    <main ref={scrollArea} data-scroll className={styles.scrollArea}>
      <Navigation />
      {children}
      <Footer />
    </main>
  );
};

export default Layout;
