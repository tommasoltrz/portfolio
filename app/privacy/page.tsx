import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  alternates: {
    canonical: "/privacy",
  },
  title: "Privacy Policy",
  description: "How this portfolio handles visit and contact link analytics and browser storage",
};

export default function PrivacyPage() {
  return (
    <div className="container max-w-3xl py-8">
      <h1 className="text-3xl font-bold mb-6">Privacy Policy</h1>

      <p className="text-muted-foreground mb-8">
        This page explains how I, Tommaso Laterza, handle information when you
        visit this portfolio.
      </p>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Website Analytics</h2>
        <p className="text-muted-foreground mb-4">
          I use a self-hosted installation of Umami to understand which pages
          people visit and improve this portfolio. It records page visits and
          basic visit information, including referral source, browser, operating
          system, device type, language and approximate location.
        </p>
        <p className="text-muted-foreground mb-4">
          I also record clicks on my Email, LinkedIn and GitHub contact links to
          understand interest in contacting me or viewing my profiles. These
          events identify the link clicked and do not include message content.
        </p>
        <p className="text-muted-foreground mb-4">
          Umami does not use analytics cookies. It processes IP addresses and
          browser information to derive location and generate hashed visit
          identifiers. Raw IP addresses are not stored in the analytics database.
          URL query strings and fragments are excluded from tracking. I do not
          use session recordings or advertising profiles.
        </p>
        <p className="text-muted-foreground mb-4">
          The analytics service runs on Vercel, and its data is stored in my Neon
          PostgreSQL database in Frankfurt. The dashboard requires authentication.
          In this self-hosted setup, analytics records remain until I delete them.
        </p>
        <p className="text-muted-foreground">
          The tracker respects Do Not Track in browsers that support it. You can
          also prevent tracking by blocking the analytics script in your browser.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Browser Storage</h2>
        <p className="text-muted-foreground">
          Your light or dark theme preference is saved locally in your browser.
          This website does not set analytics or advertising cookies. See the{" "}
          <Link href="/cookies" className="text-foreground underline">
            cookies and browser storage page
          </Link>{" "}
          for details.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Hosting and External Content</h2>
        <p className="text-muted-foreground">
          Vercel may process technical request information, including IP
          addresses, to deliver and secure the website and analytics service.
          Spotify album artwork loads from Spotify&apos;s image servers, which
          receive normal request information. If you follow an external link,
          the destination website&apos;s privacy policy applies.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Contact and Your Rights</h2>
        <p className="text-muted-foreground mb-4">
          If you contact me directly, I use the information you provide to respond
          to your message. For questions about this policy or requests concerning
          your personal data, contact{" "}
          <span className="text-foreground">tommasoltrz [at] gmail.com</span>.
        </p>
        <p className="text-muted-foreground">
          Where applicable, you may request access, correction or deletion of
          your personal data, ask to restrict processing, or object to processing.
          You may also lodge a complaint with your data protection authority.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Updates to This Policy</h2>
        <p className="text-muted-foreground mb-4">
          This privacy policy may be updated occasionally. The latest version
          will always be available on this page.
        </p>
        <p className="text-sm text-muted-foreground/80">
          Last updated: October 12, 2026
        </p>
      </section>
    </div>
  );
}
