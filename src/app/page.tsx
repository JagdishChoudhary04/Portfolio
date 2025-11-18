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

export default function Home() {
  return (
    <main className="bg-white dark:bg-black text-black dark:text-white">
      <Head>
        <script
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-4565170326177969"
          crossOrigin="anonymous"
        ></script>
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
