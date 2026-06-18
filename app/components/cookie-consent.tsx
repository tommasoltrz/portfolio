"use client";

import { Button } from "@/components/ui/button";
import Link from "next/link";
import { setConsent, useNeedsConsent } from "./consent";

export const CookieConsent = () => {
  const needsConsent = useNeedsConsent();

  if (!needsConsent) return null;

  return (
    <div className="fixed bottom-4 right-4 bg-background border rounded-lg p-4 shadow-lg z-50 max-w-[300px]">
      <div className="flex flex-col">
        <h3 className="font-semibold mb-1">Have a cookie: 🍪</h3>
        <p className="text-sm text-muted-foreground mb-3">
          This website uses cookies to analyze site traffic.{" "}
          <Link href="/privacy" className="hover:text-primary/80 text-sm ">
            View privacy policy
          </Link>
        </p>
        <div className="flex gap-2 justify-end">
          <Button
            variant="outline"
            size="sm"
            onClick={() => setConsent("declined")}
          >
            Decline
          </Button>
          <Button size="sm" onClick={() => setConsent("accepted")}>
            Accept
          </Button>
        </div>
      </div>
    </div>
  );
};
