import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Cookie Policy",
  description: "Cookie policy and usage information",
};

export default function CookiesPage() {
  return (
    <div className="container max-w-3xl py-8">
      <h1 className="text-3xl font-bold mb-6">Cookie Policy</h1>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">What are Cookies?</h2>
        <p className="text-muted-foreground mb-4">
          Cookies are small text files that are stored on your device when you
          visit our website. They help us provide you with a better experience
          by remembering your preferences and analyzing how you use our site.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">How We Use Cookies</h2>
        <p className="text-muted-foreground mb-4">
          We use cookies for the following purposes:
        </p>
        <ul className="list-disc list-inside text-muted-foreground space-y-2 ml-4">
          <li>To analyze website traffic using Google Analytics</li>
          <li>To remember your cookie consent preferences</li>
          <li>To remember your theme preferences (light/dark mode)</li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Types of Cookies We Use</h2>
        <div className="space-y-4">
          <div>
            <h3 className="text-lg font-semibold mb-2">Essential Cookies</h3>
            <p className="text-muted-foreground">
              These cookies are necessary for the website to function properly.
              They include cookies that remember your theme preferences.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-2">Analytics Cookies</h3>
            <p className="text-muted-foreground">
              We use Google Analytics to understand how visitors interact with
              our website. These cookies help us analyze and improve our
              website&apos;s performance and content.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-2">Preference Cookies</h3>
            <p className="text-muted-foreground">
              These cookies remember your choices and preferences to provide you
              with a more personalized experience.
            </p>
          </div>
        </div>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Managing Cookies</h2>
        <p className="text-muted-foreground mb-4">
          You can control and/or delete cookies as you wish. You can delete all
          cookies that are already on your device and you can set most browsers
          to prevent them from being placed.
        </p>
        <p className="text-muted-foreground">
          If you do this, however, you may have to manually adjust some
          preferences every time you visit our website and some features may not
          work as intended.
        </p>
      </section>
    </div>
  );
}
