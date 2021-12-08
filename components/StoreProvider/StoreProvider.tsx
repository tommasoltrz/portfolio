import React, { createContext, FC, useEffect, useRef } from "react";
import { useState } from "react";

const initialState = {
  mouse: { x: 0, y: 0 },
  wSize: {
    w: 1200,
    h: 0,
  },
  top: 0,
};

export const Context = createContext(initialState);

export const StoreProvider: FC<any> = ({ children }) => {
  const [mouse, setMouse] = useState(initialState.mouse);
  const [wSize, setWSize] = useState(initialState.wSize);
  const [top, setTop] = useState(initialState.top);
  const [topThree, setTopThree] = useState(0);
  const requestRef = useRef<number | null>(null);

  let current = 0;
  let target = 0;
  let ease = 0.1;

  const MathUtils = {
    lerp: (a: number, b: number, n: number) => (1 - n) * a + n * b,
  };

  useEffect(() => {
    if (typeof window !== `undefined`) {
      setWSize({
        w: window.innerWidth,
        h: window.innerHeight,
      });
    }
    addEventListeners();
    return () => removeEventListeners();
  }, []);

  useEffect(() => {
    requestRef.current = requestAnimationFrame(updateScroll);
    return () => cancelAnimationFrame(requestRef.current || 0);
  }, []);

  const updateScroll = () => {
    target = window.scrollY;
    current = MathUtils.lerp(current, target, ease);
    setTop(current);
    setTopThree(0);
    requestRef.current = requestAnimationFrame(updateScroll);
  };

  const addEventListeners = () => {
    document.addEventListener("mousemove", onMouseMove);
    window.addEventListener("resize", onWResize);
  };

  const removeEventListeners = () => {
    document.removeEventListener("mousemove", onMouseMove);
    window.removeEventListener("resize", onWResize);
  };

  const onMouseMove = (e: any) => {
    requestAnimationFrame(() => {
      setMouse({
        x: e.clientX,
        y: e.clientY,
      });
    });
  };

  const onWResize = (e: any) => {
    requestAnimationFrame(() => {
      if (typeof window !== `undefined`) {
        setWSize({
          w: window.innerWidth,
          h: window.innerHeight,
        });
      }
    });
  };

  const providerValue = React.useMemo(
    () => ({
      mouse,
      wSize,
      top,
    }),
    [mouse, wSize, top]
  );

  return <Context.Provider value={providerValue}>{children}</Context.Provider>;
};
