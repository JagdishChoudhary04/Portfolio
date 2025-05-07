"use client"
import Navbar from "@/components/Navbar";
import Profile from "@/components/Profile"
import Experience from "@/components/experience"
import Hero from "@/components/Hero";
import About from "@/components/About";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";
import Footer from "@/components/Footer";
import CertificationSection from "@/components/certifications";
export default function Home() {
  return (
    <main className="bg-white dark:bg-black text-black dark:text-white">
      <Navbar />
      <section id="profile">
        <Profile />
      </section>
      <section id="hero" className="pt-24">
        <Hero />
      </section>
      <section id="about">
        <About />
      </section>
      <section id="experience">
        <Experience />
      </section>
      <section id="skills">
        <Skills />
      </section>
      <section id="projects">
        <Projects />
      </section>
      <section id="certifications">
        <CertificationSection />
      </section>
      <Footer />
    </main>
  );
}
