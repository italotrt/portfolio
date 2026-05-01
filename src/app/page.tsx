'use client';

import { Navbar01 } from '@/components/ui/shadcn-io/navbar-01';
import { AboutMe } from "@/components/ui/content/about";
import { Experience } from "@/components/ui/content/experience";
import { Projects } from "@/components/ui/content/projects";
import { Contact } from "@/components/ui/content/contact";
import { Intro } from "@/components/ui/content/intro";

const portfolioNavLinks = [
  { href: '#home', label: 'Home' },
  { href: '#about', label: 'About' },
  { href: '#experience', label: 'Experience' },
  { href: '#projects', label: 'Projects' },
];

export default function Home() {
  return (
    <>
      <Navbar01
        navigationLinks={portfolioNavLinks}
        ctaText="Contact Me"
        ctaHref="#contact"
      />

      <section id="home" className="min-h-screen bg-white text-black">
        <Intro />
      </section>

      <section id="about" className="bg-black text-white">
        <AboutMe />
      </section>

      <section id="experience">
        <Experience />
      </section>

      <section id="projects" className="bg-black text-white">
        <Projects />
      </section>

      <section id="contact">
        <Contact />
      </section>

      {/* <section id="skills" className="bg-white text-black">
        <div className="container mx-auto px-4 py-16">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl md:text-6xl font-bold mb-16">Skills</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-2xl font-semibold mb-6 text-blue-600">Frontend</h3>
                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <span>React/Next.js</span>
                    <span className="text-gray-600">90%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div className="bg-blue-600 h-2 rounded-full" style={{width: '90%'}}></div>
                  </div>
                </div>
              </div>
              <div>
                <h3 className="text-2xl font-semibold mb-6 text-purple-600">Backend</h3>
                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <span>Node.js</span>
                    <span className="text-gray-600">85%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div className="bg-purple-600 h-2 rounded-full" style={{width: '85%'}}></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section> */}
      </>
  );
}
