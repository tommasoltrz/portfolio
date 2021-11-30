import "./src/styles/global.scss";

export const shouldUpdateScroll = ({
  routerProps: { location },
  getSavedScrollPosition,
}) => {
  window.scrollTo(0, 0);
  return false;
};
