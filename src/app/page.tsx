"use client";
import Head from "next/head";
import Navbar from "@/components/Navbar";
import Experience from "@/components/experience";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";
import Footer from "@/components/Footer";
import CertificationSection from "@/components/certifications";
import CodingAchievements from "@/components/CodingAchievements";
import AnimatedSection from "@/components/AnimatedSection";

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
        url: "https://jagdishchoudhary.site",
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
    images: ["https://jagdishchoudhary.site"],
  },
};

export default function Home() {
  return (
    <main className="bg-white dark:bg-black text-black dark:text-white">
      <Head>
        <title>Jagdish Choudhary | Portfolio</title>
        <meta
          name="description"
          content="Portfolio of Jagdish Choudhary - Developer, Engineer, Innovator"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Navbar />
      <AnimatedSection delay={0.1}>
        <section id="hero" className="pt-24">
          <Hero />
        </section>
      </AnimatedSection>

      <AnimatedSection delay={0.2}>
        <section id="about">
          <About />
        </section>
      </AnimatedSection>

      <AnimatedSection delay={0.3}>
        <section id="experience">
          <Experience />
        </section>
      </AnimatedSection>

      <AnimatedSection delay={0.4}>
        <section id="codingprogress">
          <CodingAchievements />
        </section>
      </AnimatedSection>

      <AnimatedSection delay={0.5}>
        <section id="skills">
          <Skills />
        </section>
      </AnimatedSection>

      <AnimatedSection delay={0.6}>
        <section id="projects">
          <Projects />
        </section>
      </AnimatedSection>

      <AnimatedSection delay={0.7}>
        <section id="certifications">
          <CertificationSection />
        </section>
      </AnimatedSection>

      <Footer />
    </main>
  );
}
