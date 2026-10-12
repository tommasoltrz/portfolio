import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Cookies and Browser Storage",
  description: "Cookie-free analytics and how this portfolio remembers your theme",
};

export default function CookiesPage() {
  return (
    <div className="container max-w-3xl py-8">
      <h1 className="text-3xl font-bold mb-6">Cookies and Browser Storage</h1>
      <p className="text-muted-foreground mb-8">
        This portfolio does not set analytics or advertising cookies.
      </p>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Website Analytics</h2>
        <p className="text-muted-foreground">
          Umami counts page visits and clicks on my contact links without saving
          analytics cookies or visitor identifiers in your browser. Read the{" "}
          <Link href="/privacy" className="text-foreground underline">
            privacy policy
          </Link>{" "}
          for information about the visit data stored on the server.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Theme Preference</h2>
        <p className="text-muted-foreground">
          Your light or dark theme choice is saved in local browser storage so it
          can be restored on your next visit. It is not sent with analytics. You
          can reset this preference by clearing this website&apos;s stored data
          in your browser settings.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Data From Earlier Visits</h2>
        <p className="text-muted-foreground">
          If you visited before this update, Google Analytics cookies or an old
          consent preference may still be present in your browser. The website
          no longer uses them. You can remove them by clearing this website&apos;s
          cookies and stored data in your browser settings.
        </p>
      </section>
      <p className="text-sm text-muted-foreground/80">
        Last updated: October 12, 2026
      </p>
    </div>
  );
}
