const React = require("react");

export const onRenderBody = ({
  setPreBodyComponents,
  setBodyAttributes,
  setHeadComponents,
  setPostBodyComponents,
}) => {
  setHeadComponents([
    <link as="script" rel="preload" href="/scripts/preloader.js" />,
    <noscript>
      <link rel="stylesheet" href="/styles/noscript.css" />
    </noscript>,
  ]);
  setPreBodyComponents([
    <div id="preloader">
      {/* Optional: */}
      <div className="preloader_animation"></div>
    </div>,
  ]);
  setBodyAttributes({
    className: "preloader_active",
  });
  setPostBodyComponents([<script src="/scripts/preloader.js" />]);
};
