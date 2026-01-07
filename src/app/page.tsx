'use client';

import Image from "next/image";
import { Navbar01 } from '@/components/ui/shadcn-io/navbar-01';
import { AboutMe } from "@/components/ui/content/about";
import { Experience } from "@/components/ui/content/experience";
import { Projects } from "@/components/ui/content/projects";
import { Button } from "@/components/ui/button";

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
        <div className="container mx-auto px-4 py-16 flex flex-col md:flex-row items-center justify-center min-h-screen gap-8 md:gap-12">
          <div className="text-center md:text-left max-w-4xl flex-col order-2 md:order-1">
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              Italo da Silva
            </h1>
            <p className="text-lg sm:text-xl md:text-xl text-black mb-8 w-full md:w-3/4 mx-auto md:mx-0">
              Recent Computer Games Development graduate from University of Limerick, passionate about creating immersive digital experiences through innovative web technologies and interactive design.
            </p>
          </div>
          <Image
            src="/profile_pic.png"
            alt="Profile Picture"
            width={400}
            height={400}
            className="rounded-full shadow-lg w-48 h-48 sm:w-64 sm:h-64 md:w-80 md:h-80 lg:w-96 lg:h-96 object-cover order-1 md:order-2"
          />
        </div>
      </section>

      <section id="about" className="bg-black text-white">
        <AboutMe />
      </section>

      <section id="experience" className="bg-white text-black">
        <Experience />
      </section>

      <section id="projects" className="bg-black text-white">
        <Projects />
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

      <section id="contact" className="bg-white text-black">
        <div className="container mx-auto px-4 py-16 flex flex-col flex-wrap items-center justify-center relative h-[100vh]">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-bold mb-8">Let's Connect</h2>
            <p className="text-xl text-black mb-12">
              I'd love to hear from you.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button className="px-8 py-3 border-2 border-black rounded-lg hover:bg-white hover:text-black transition-colors" onClick={() => window.open('https://www.linkedin.com/in/italo-da-silva/', '_blank')}>
                LinkedIn
              </Button>
              <Button className="px-8 py-3 border-2 border-black rounded-lg hover:bg-white hover:text-black transition-colors" onClick={() => window.open('https://github.com/italotrt', '_blank')}>
                Github
              </Button>
            </div>
          </div>
        </div>
      </section>

      <footer className="text-black text-xs mt-8 select-none mb-6 text-center">
        © 2025 Italo da Silva
      </footer>
    </>
  );
}
