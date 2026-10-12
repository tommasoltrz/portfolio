import type { Metadata } from "next";
import { Inter, Roboto_Mono } from "next/font/google";
import Script from "next/script";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const robotoMono = Roboto_Mono({
  subsets: ["latin"],
  variable: "--font-roboto-mono",
});
import { ThemeProvider } from "./components/theme-provider";
import { TooltipProvider } from "@/components/ui/tooltip";
import { Header } from "./components/header";
import { Footer } from "./components/footer";
import { FloatingControls } from "./components/floating-controls";

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
      <body
        className={`${inter.variable} ${robotoMono.variable} font-sans antialiased`}
      >
        {process.env.NODE_ENV === "production" && (
          <Script
            id="umami-analytics"
            src="https://umami-xi-blond.vercel.app/script.js"
            strategy="afterInteractive"
            data-website-id="47f59a81-c771-4dab-8a06-8b29d8132563"
            data-domains="tommasolaterza.com,www.tommasolaterza.com"
            data-exclude-search="true"
            data-exclude-hash="true"
            data-do-not-track="true"
          />
        )}
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <TooltipProvider>
            <div className="relative grid grid-rows-[auto_1fr_auto] items-center min-h-screen p-4 pt-20 pb-10 gap-16 sm:p-20 sm:pt-32 sm:pb-10 max-w-[930px] mx-auto">
              <FloatingControls />
              <Header />
              <main className="mb-8">{children}</main>
              <Footer />
            </div>
          </TooltipProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
