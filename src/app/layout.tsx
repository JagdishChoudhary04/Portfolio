// app/layout.tsx
import "./globals.css";
import type { Metadata } from "next";
import { ReactNode } from "react";
import ClientThemeProvider from "@/components/ClientThemeProvider";
import Script from "next/script";

export const metadata: Metadata = {
  metadataBase: new URL("https://jagdishchoudhary.site"),
  title: {
    default: "Jagdish Choudhary | Portfolio",
    template: "%s | Jagdish Choudhary",
  },
  description:
    "Portfolio of Jagdish Choudhary – software engineer passionate about full-stack development, electronics, embedded systems, and IoT.",
  keywords: [
    "Jagdish Choudhary",
    "software engineer",
    "full-stack developer",
    "Next.js developer",
    "React",
    "TypeScript",
    "Python",
    "C++",
    "electronics projects",
    "IoT projects",
    "portfolio",
  ],
  authors: [{ name: "Jagdish Choudhary" }],
  openGraph: {
    title: "Jagdish Choudhary | Portfolio",
    description: "Explore my software projects, electronics builds, and experience.",
    url: "https://jagdishchoudhary.site",
    siteName: "Jagdish's Portfolio",
    images: [
      {
        // 👉 put your new header/social image in /public and update this path
        url: "https://jagdishchoudhary.site/og-image-new.jpg",
        width: 1200,
        height: 630,
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Jagdish Choudhary | Portfolio",
    description:
      "Check out my projects and experience as a full-stack and electronics developer.",
    images: ["https://jagdishchoudhary.site/og-image-new.jpg"],
  },
  alternates: {
    canonical: "https://jagdishchoudhary.site",
  },
  robots: {
    index: true,
    follow: true,
  },
  icons: {
    // 👉 this controls the small round icon in the browser header/tab
    icon: "/header.png", // create app/icon.png or public/icon.png
  },
  other: {
    "google-adsense-account": "ca-pub-4565170326177969",
  },
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        {/* Google AdSense */}
        <Script
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-4565170326177969"
          crossOrigin="anonymous"
          strategy="afterInteractive"
        />
      </head>
      <body>
        <ClientThemeProvider>{children}</ClientThemeProvider>
      </body>
    </html>
  );
}