"use client";

import Script from "next/script";
import { useEffect, useState } from "react";
import { CookieConsent } from "./cookie-consent";

export const GoogleAnalytics = ({
  GA_MEASUREMENT_ID,
}: {
  GA_MEASUREMENT_ID: string;
}) => {
  const [hasConsent, setHasConsent] = useState(false);

  useEffect(() => {
    // Check for existing consent on mount
    const consent = localStorage.getItem("cookieConsent");
    if (consent === "accepted") {
      setHasConsent(true);
    }
  }, []);

  const handleConsent = () => {
    setHasConsent(true);
  };

  return (
    <>
      {hasConsent && (
        <>
          <Script
            strategy="afterInteractive"
            src={`https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`}
          />
          <Script
            id="google-analytics"
            strategy="afterInteractive"
            dangerouslySetInnerHTML={{
              __html: `
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());
                gtag('config', '${GA_MEASUREMENT_ID}');
              `,
            }}
          />
        </>
      )}
      <CookieConsent onAccept={handleConsent} />
    </>
  );
};
