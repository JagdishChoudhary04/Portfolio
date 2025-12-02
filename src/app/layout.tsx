// app/layout.tsx
import "./globals.css";
import type { Metadata } from "next";
import { ReactNode } from "react";
import ClientThemeProvider from "@/components/ClientThemeProvider";
import Script from "next/script";

export const metadata: Metadata = {
  metadataBase: new URL("https://jagdishchoudhary.site"),
  applicationName: "Jagdish Choudhary Portfolio",
  title: {
    default: "Jagdish Choudhary | Portfolio",
    template: "%s | Jagdish Choudhary",
  },
  description:
    "I’m Jagdish Choudhary, a software engineer passionate about full-stack development, electronics, embedded systems, and IoT. Explore my projects, experience, and skills.",
  keywords: [
    "Jagdish Choudhary",
    "Jagdish portfolio",
    "Jagdish Choudhary portfolio",
    "software engineer",
    "full-stack developer",
    "Next.js developer",
    "React developer",
    "TypeScript",
    "C++",
    "electronics projects",
    "IoT projects",
  ],
  authors: [{ name: "Jagdish Choudhary", url: "https://jagdishchoudhary.site" }],
  creator: "Jagdish Choudhary",
  publisher: "Jagdish Choudhary",
  category: "Technology",
  openGraph: {
    title: "Jagdish Choudhary | Portfolio",
    description: "Explore my software projects, electronics builds, and experience.",
    url: "https://jagdishchoudhary.site",
    siteName: "Jagdish's Portfolio",
    images: [
      {
        url: "https://jagdishchoudhary.site/og-image-new.jpg",
        width: 1200,
        height: 630,
        alt: "Jagdish Choudhary Portfolio Preview",
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
    icon: "/header.png",
  },
  other: {
    "google-adsense-account": "ca-pub-4565170326177969",
    // Add your Google Search Console verification here once you generate it:
    // "google-site-verification": "YOUR_VERIFICATION_CODE",
  },
};

export default function RootLayout({ children }: { children: ReactNode }) {
  // JSON-LD Person Schema for Google
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Jagdish Choudhary",
    url: "https://jagdishchoudhary.site",
    sameAs: [
      "https://www.linkedin.com/in/jagdish-choudhary-***", // put real link
      "https://github.com/***",                               // your GitHub
      "https://leetcode.com/Jagdish_Choudhary/",
    ],
    jobTitle: "Software Engineer",
    description:
      "Software engineer and electronics enthusiast working on full-stack web apps, drones, IoT, and embedded systems.",
  };

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

        {/* Google Search Console verification (replace content with your code) */}
        {/* <meta name="google-site-verification" content="YOUR_VERIFICATION_CODE" /> */}

        {/* JSON-LD structured data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body>
        <ClientThemeProvider>{children}</ClientThemeProvider>
      </body>
    </html>
  );
}