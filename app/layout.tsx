import type { Metadata } from "next";
import "./globals.css";
import { ThemeProvider } from "./components/theme-provider";
import { GoogleAnalytics } from "./components/google-analytics";
import { Header } from "./components/header";
import { Footer } from "./components/footer";

export const metadata: Metadata = {
  title: "Tommaso Laterza",
  description:
    "Tommaso Laterza's personal website - Software Engineer and Web Developer specializing in modern web technologies, and scalable applications",
  keywords: [
    "Tommaso Laterza",
    "Software Engineer",
    "Engineering Manager",
    "Lead Web Developer",
    "Full Stack Developer",
    "React Developer",
    "TypeScript",
    "Team Management",
    "Product Management",
    "Software Development",
    "Interaction Designer",
    "Product Designer",
    "UI/UX Designer",
    "Frontend Developer",
  ],
  authors: [{ name: "Tommaso Laterza" }],
  creator: "Tommaso Laterza",
  publisher: "Tommaso Laterza",
  robots: "index, follow",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://tommasolaterza.com",
    title: "Tommaso Laterza - Software Engineer",
    description:
      "Tommaso Laterza's personal website - Software Engineer and Web Developer specializing in modern web technologies, cloud solutions, and scalable applications",
    siteName: "Tommaso Laterza",
  },
  twitter: {
    card: "summary_large_image",
    title: "Tommaso Laterza - Software Engineer",
    description:
      "Tommaso Laterza's personal website - Software Engineer and Web Developer specializing in modern web technologies",
    creator: "@tommasolaterza",
  },
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/favicon.png", type: "image/png", sizes: "32x32" },
    ],
    apple: [{ url: "/apple-touch-icon.png", sizes: "180x180" }],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="antialiased">
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID && (
            <GoogleAnalytics
              GA_MEASUREMENT_ID={process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID}
            />
          )}
          <div className="grid grid-rows-[20px_1fr_20px] items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 max-w-[900px] mx-auto">
            <Header />
            <main className="mb-8">{children}</main>
            <Footer />
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
