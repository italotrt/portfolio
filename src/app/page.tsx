'use client';

import Image from "next/image";
import { Navbar01 } from '@/components/ui/shadcn-io/navbar-01';

const portfolioNavLinks = [
  { href: '#home', label: 'Home' },
  { href: '#projects', label: 'Projects' },
  { href: '#skills', label: 'Skills' },
];

const PortfolioLogo = () => (
  <div className="font-bold text-xl bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
    Italo's Portfolio
  </div>
);

export default function Home() {
  return (
    <>
      <Navbar01 
        logo={<PortfolioLogo />}
        logoHref="/"
        navigationLinks={portfolioNavLinks}
        signInText="Resume"
        signInHref="/resume.pdf"
        ctaText="Contact Me"
        ctaHref="#contact"
      />
      
      {/* Hero Section - White Background */}
      <section id="home" className="min-h-screen bg-white text-black">
        <div className="container mx-auto px-4 py-16 flex items-center justify-center min-h-screen">
          <div className="text-center max-w-4xl">
            <h1 className="text-6xl md:text-8xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              Welcome
            </h1>
            <p className="text-xl md:text-2xl text-black mb-8">
              I'm a developer passionate about creating amazing digital experiences
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button 
                onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
                className="px-8 py-3 bg-white text-black rounded-lg hover:bg-gray-200 transition-colors"
              >
                View My Work
              </button>
              <button 
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                className="px-8 py-3 bg-white text-black rounded-lg hover:bg-gray-200 transition-colors"
              >
                Get In Touch
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section - Black Background */}
      <section id="projects" className="min-h-screen bg-black text-white">
        <div className="container mx-auto px-4 py-16">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl md:text-6xl font-bold text-center mb-16">My Projects</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* Project Card 1 */}
              <div className="bg-gray-800 rounded-xl p-6 hover:shadow-lg transition-shadow">
                <div className="h-48 bg-gradient-to-br from-blue-400 to-purple-600 rounded-lg mb-4"></div>
                <h3 className="text-xl font-semibold mb-2 text-white">Project One</h3>
                <p className="text-gray-300 mb-4">Description of your amazing project goes here.</p>
                <div className="flex gap-2 flex-wrap">
                  <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm">React</span>
                  <span className="px-3 py-1 bg-green-100 text-green-800 rounded-full text-sm">Node.js</span>
                </div>
              </div>
              
              {/* Project Card 2 */}
              <div className="bg-gray-800 rounded-xl p-6 hover:shadow-lg transition-shadow">
                <div className="h-48 bg-gradient-to-br from-green-400 to-blue-600 rounded-lg mb-4"></div>
                <h3 className="text-xl font-semibold mb-2 text-white">Project Two</h3>
                <p className="text-gray-300 mb-4">Another amazing project description.</p>
                <div className="flex gap-2 flex-wrap">
                  <span className="px-3 py-1 bg-purple-100 text-purple-800 rounded-full text-sm">Next.js</span>
                  <span className="px-3 py-1 bg-yellow-100 text-yellow-800 rounded-full text-sm">TypeScript</span>
                </div>
              </div>
              
              {/* Project Card 3 */}
              <div className="bg-gray-800 rounded-xl p-6 hover:shadow-lg transition-shadow">
                <div className="h-48 bg-gradient-to-br from-purple-400 to-pink-600 rounded-lg mb-4"></div>
                <h3 className="text-xl font-semibold mb-2 text-white">Project Three</h3>
                <p className="text-gray-300 mb-4">Yet another fantastic project.</p>
                <div className="flex gap-2 flex-wrap">
                  <span className="px-3 py-1 bg-red-100 text-red-800 rounded-full text-sm">Vue.js</span>
                  <span className="px-3 py-1 bg-indigo-100 text-indigo-800 rounded-full text-sm">Python</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section - White Background */}
      <section id="skills" className="min-h-screen bg-white text-black">
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
      </section>

      {/* Contact Section - Black Background */}
      <section id="contact" className="min-h-screen bg-black text-white">
        <div className="container mx-auto px-4 py-16 flex items-center justify-center min-h-screen">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-4xl md:text-6xl font-bold mb-8">Let's Connect</h2>
            <p className="text-xl text-gray-300 mb-12">
              Ready to work together? I'd love to hear from you.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-8 py-3 bg-white text-black rounded-lg hover:bg-gray-200 transition-colors">
                Send Email
              </button>
              <button className="px-8 py-3 border-2 border-white text-white rounded-lg hover:bg-white hover:text-black transition-colors">
                LinkedIn
              </button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
