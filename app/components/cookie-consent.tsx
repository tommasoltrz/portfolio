"use client";

import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export const CookieConsent = ({ onAccept }: { onAccept: () => void }) => {
  const [showBanner, setShowBanner] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem("cookieConsent");
    if (!consent) {
      setShowBanner(true);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem("cookieConsent", "accepted");
    setShowBanner(false);
    onAccept();
  };

  const handleDecline = () => {
    localStorage.setItem("cookieConsent", "declined");
    setShowBanner(false);
  };

  if (!showBanner) return null;

  return (
    <div className="fixed bottom-4 right-4 bg-background border rounded-lg p-4 shadow-lg z-50 max-w-[300px]">
      <div className="flex flex-col">
        <h3 className="font-semibold mb-1">Have a cookie: 🍪</h3>
        <p className="text-sm text-muted-foreground mb-3">
          This website uses cookies to analyze site traffic.{" "}
          <Link href="/privacy" className="hover:text-primary/80 text-sm ">
            Learn more
          </Link>
        </p>
        <div className="flex gap-2 justify-end">
          <Button variant="outline" size="sm" onClick={handleDecline}>
            Decline
          </Button>
          <Button size="sm" onClick={handleAccept}>
            Accept
          </Button>
        </div>
      </div>
    </div>
  );
};
