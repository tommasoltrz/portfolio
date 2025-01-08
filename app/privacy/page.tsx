import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "Privacy policy and data protection information",
};

export default function PrivacyPage() {
  return (
    <div className="container max-w-3xl py-8">
      <h1 className="text-3xl font-bold mb-6">Privacy Policy</h1>

      <p className="text-muted-foreground mb-8">
        This Privacy Policy, in accordance with the Regulation (EU) 2016/679
        (GDPR), outlines how I collect and process data on my portfolio website.
      </p>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Data Collection</h2>
        <p className="text-muted-foreground mb-4">
          I use Google Analytics to collect anonymous usage data about how
          visitors interact with my website. This helps me understand which
          content is most useful and how I can improve the site. The data
          collected includes:
        </p>
        <ul className="list-disc list-inside text-muted-foreground space-y-2 ml-4 mb-4">
          <li>Pages visited</li>
          <li>Time spent on the site</li>
          <li>Country of origin</li>
          <li>Browser type and device</li>
          <li>Referral source</li>
        </ul>
        <p className="text-muted-foreground mb-4">
          Additionally, the website stores your theme preference (light/dark
          mode) locally on your device to provide a consistent viewing
          experience.
        </p>
        <p className="text-muted-foreground">
          No personal information is collected unless you choose to contact me
          directly.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Cookie Usage</h2>
        <p className="text-muted-foreground">
          This website uses cookies only for analytics purposes. You can choose
          whether to accept these cookies through the consent banner that
          appears when you first visit the site. You can change your preferences
          at any time by clearing your browser cookies.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Your Rights</h2>
        <p className="text-muted-foreground mb-4">
          Under GDPR, you have several rights regarding your data:
        </p>
        <ul className="list-disc list-inside text-muted-foreground space-y-2 ml-4">
          <li>Right to access any data collected about you</li>
          <li>Right to request deletion of your data</li>
          <li>Right to withdraw consent for data collection</li>
          <li>Right to lodge a complaint with a supervisory authority</li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Contact</h2>
        <p className="text-muted-foreground">
          If you have any questions about this privacy policy or would like to
          exercise any of your rights regarding your data, you can contact me
          at:{" "}
          <span className="text-foreground">tommasoltrz [at] gmail.com</span>
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">
          Data Storage and Security
        </h2>
        <p className="text-muted-foreground">
          The analytics data is processed by Google Analytics in accordance with
          their privacy policy. No personal data is stored on my website's
          servers.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Updates to This Policy</h2>
        <p className="text-muted-foreground mb-4">
          This privacy policy may be updated occasionally. The latest version
          will always be available on this page.
        </p>
        <p className="text-sm text-muted-foreground/80">
          Last updated: January 2025
        </p>
      </section>
    </div>
  );
}
