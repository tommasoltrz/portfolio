import "./src/styles/global.scss";
import "./src/styles/preloader.scss";
export const shouldUpdateScroll = () => {
  console.log("window.scrollY");
  console.log(window.scrollY);
  //   window.scrollTo(0, 0);
  return false;
};

export const onRouteUpdate = () => {
  if (typeof window !== `undefined`) {
    console.log("bhebhebh");

    window.scrollTo(0, 0);
  }
};
