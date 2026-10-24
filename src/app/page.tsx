'use client';

import { Navbar01 } from '@/components/ui/shadcn-io/navbar-01';
import { AboutMe } from "@/components/ui/content/about";
import { Experience } from "@/components/ui/content/experience";
import { Projects } from "@/components/ui/content/projects";
import { Contact } from "@/components/ui/content/contact";
import { Education } from "@/components/ui/content/education";
import { Intro } from "@/components/ui/content/intro";

const portfolioNavLinks = [
  { href: '#home', label: 'Home' },
  { href: '#about', label: 'About' },
  { href: '#experience', label: 'Experience' },
  { href: '#projects', label: 'Projects' },
  { href: '#education', label: 'Education' },
];

export default function Home() {
  return (
    <>
      <Navbar01
        navigationLinks={portfolioNavLinks}
        ctaText="Contact Me"
        ctaHref="#contact"
      />

      <section id="home" className="min-h-screen">
        <Intro />
      </section>

      <section id="about">
        <AboutMe />
      </section>

      <section id="experience">
        <Experience />
      </section>

      <section id="projects">
        <Projects />
      </section>

      <section id="education">
        <Education />
      </section>

      <section id="contact">
        <Contact />
      </section>
    </>
  );
}
