import "./globals.css";
import { ReactNode } from "react";
import ClientThemeProvider from "@/components/ClientThemeProvider"; // move ThemeProvider into its own client component
import Script from "next/script";

export const metadata = {
  title: "Jagdish Choudhary | Portfolio",
  description: "Welcome to my personal portfolio. I’m a software engineer passionate about full-stack development and electronics projects.",
  keywords: ["Jagdish Choudhary", "portfolio", "developer", "software engineer", "Next.js"],
  authors: [{ name: "Jagdish Choudhary" }],
  openGraph: {
    title: "Jagdish Choudhary | Portfolio",
    description: "Explore my projects, skills, and experience.",
    url: "https://jagdishchoudhary.site",
    siteName: "Jagdish's Portfolio",
    images: [
      {
        url: "https://jagdishchoudhary.site/og-image.jpg",
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
    description: "Check out my projects and experience as a full-stack developer.",
    images: ["https://jagdishchoudhary.site/og-image.jpg"],
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
        <ClientThemeProvider>
          {children}
        </ClientThemeProvider>
      </body>
    </html>
  );
}
