"use client";

import { useSyncExternalStore } from "react";

const CONSENT_KEY = "cookieConsent";
// Same-tab writes don't fire the native "storage" event, so we dispatch our own.
const CONSENT_EVENT = "cookie-consent-change";

function subscribe(callback: () => void) {
  window.addEventListener("storage", callback);
  window.addEventListener(CONSENT_EVENT, callback);
  return () => {
    window.removeEventListener("storage", callback);
    window.removeEventListener(CONSENT_EVENT, callback);
  };
}

export function setConsent(value: "accepted" | "declined") {
  localStorage.setItem(CONSENT_KEY, value);
  window.dispatchEvent(new Event(CONSENT_EVENT));
}

// True once the browser confirms the user accepted. Server snapshot is `false`
// so the markup hydrates cleanly before localStorage is ever read.
export function useHasConsent() {
  return useSyncExternalStore(
    subscribe,
    () => localStorage.getItem(CONSENT_KEY) === "accepted",
    () => false,
  );
}

// True once the browser confirms the user has not made a choice yet. Server
// snapshot is `false` so the banner never renders during SSR/hydration.
export function useNeedsConsent() {
  return useSyncExternalStore(
    subscribe,
    () => localStorage.getItem(CONSENT_KEY) === null,
    () => false,
  );
}
