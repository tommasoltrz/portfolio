import { useRef, useEffect, useContext } from "react";

import { gsap } from "gsap/dist/gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";
import { Context } from "../StoreProvider/StoreProvider";

gsap.registerPlugin(ScrollTrigger);

export const ScrollTriggerProxy = () => {
  const { top } = useContext(Context);

  useEffect(() => {
    const element = document.getElementById("scrollArea");
    ScrollTrigger.update();
    ScrollTrigger.scrollerProxy(element, {
      scrollTop(value) {
        return arguments.length ? document.body.scrollTo(0, value || 0) : top;
      },
      getBoundingClientRect() {
        return {
          top: 0,
          left: 0,
          width: window.innerWidth,
          height: window.innerHeight,
        };
      },
      pinType: element?.style.transform ? "transform" : "fixed",
    });

    return () => {
      ScrollTrigger.refresh();
    };
  }, [top]);

  return null;
};
