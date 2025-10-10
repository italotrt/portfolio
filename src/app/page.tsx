'use client';

import Image from "next/image";
import { Navbar01 } from '@/components/ui/shadcn-io/navbar-01';
import { 
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

const portfolioNavLinks = [
  { href: '#home', label: 'Home' },
  { href: '#about', label: 'About' },
  { href: '#experience', label: 'Experience' },
  { href: '#projects', label: 'Projects' },
  { href: '#skills', label: 'Skills' },
];

export default function Home() {
  return (
    <>
      <Navbar01
        navigationLinks={portfolioNavLinks}
        signInText="Resume"
        signInHref="/resume.pdf"
        ctaText="Contact Me"
        ctaHref="#contact"
      />
      
      <section id="home" className="min-h-screen bg-white text-black">
        <div className="container mx-auto px-4 py-16 flex items-center justify-center min-h-screen">
          <div className="text-left max-w-4xl flex-col">
            <h1 className="text-6xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              Italo da Silva
            </h1>
            <p className="text-xl md:text1xl text-black mb-8 w-3/4">
              {/** How can i improve this section? */}
              Recent Computer Games Development graduate from University of Limerick, passionate about creating immersive digital experiences through innovative web technologies and interactive design.
            </p>
          </div>
          <Image
            src="/profile_pic.png"
            alt="Profile Picture"
            width={400}
            height={400}
            className="rounded-full shadow-lg"
          />
        </div>
      </section>

      <section id="about" className="min-h-screen bg-black text-white">
        <div className="container mx-auto px-4 py-16">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl md:text-6xl font-bold text-center mb-16">
              About Me
            </h2>
            <div className="grid md:grid-cols-2 gap-32 items-center">
              <div className="space-y-6">
                <p className="text-lg text-gray-300 leading-relaxed">
                  I am a fresh <span className="text-blue-400 font-semibold">Second Class Honours</span> graduate from Computer Games Development at the University of Limerick, with internship experience.
                </p>
                <p className="text-lg text-gray-300 leading-relaxed">
                  I would describe myself as an individual who is <span className="text-purple-400 font-semibold">self-motivated, hardworking and dedicated</span>. A team player capable of working independently when necessary.
                </p>
                <p className="text-lg text-gray-300 leading-relaxed">
                  I am currently seeking a software engineering role where I can continue to grow my skills, contribute to industry level projects and collaborate with experienced teams.
                </p>
              </div>
              
              <div className="space-y-6">
                <div className="bg-gray-800 rounded-lg p-6 border border-gray-700">
                  <h3 className="text-xl font-semibold mb-4 text-blue-400">
                    Personal Interests
                  </h3>
                  
                  <ul className="space-y-2 text-gray-300">
                    <li className="flex items-center gap-2">
                      <span className="w-2 h-2 bg-blue-400 rounded-full"></span>
                      Coding & Technology
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="w-2 h-2 bg-purple-400 rounded-full"></span>
                      Gym & Fitness
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="w-2 h-2 bg-green-400 rounded-full"></span>
                      Listen to Music
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="w-2 h-2 bg-yellow-400 rounded-full"></span>
                      Travel & Exploring New Places
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="w-2 h-2 bg-red-400 rounded-full"></span>
                      Video Games
                    </li>
                  </ul>
                </div>
                
                <div className="text-center">
                  <p className="text-xl font-semibold text-white">
                    I'm excited to bring my <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">interest, energy, and drive</span> to a full-time job as a software engineer.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="experience" className="min-h-screen bg-white text-black">
        <div className="container mx-auto px-4 py-16">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl md:text-6xl font-bold text-center mb-16">
              Experience
            </h2>
            <p className="text-lg text-gray-700 mb-8">
              I have completed an internship at WP Engine, where I worked as a Full-Stack Developer.
            </p>
          </div>
        </div>
      </section>

      <section id="projects" className="min-h-screen bg-black text-white">
        <div className="container mx-auto px-4 py-16">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl md:text-6xl font-bold text-center mb-16">
              My Projects
            </h2>
            <div className="flex flex-col gap-8">
              <Card className="bg-gray-800 rounded-xl p-6 border border-gray-700">
                <div className="h-48 bg-gradient-to-br from-blue-400 to-purple-600 rounded-lg mb-4"></div>
                <CardTitle className="text-xl font-semibold text-white">
                  Project One
                </CardTitle>
                <CardDescription className="text-gray-300 md:text-lg">
                  Description of your amazing project goes here.
                </CardDescription>
                <div className="flex gap-2 flex-wrap">
                  <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm">
                    React
                  </span>
                  <span className="px-3 py-1 bg-green-100 text-green-800 rounded-full text-sm">
                    Node.js
                  </span>
                </div>
              </Card>
              
              <Card className="bg-gray-800 rounded-xl p-6 border-gray-700">
                <div className="h-48 bg-gradient-to-br from-green-400 to-blue-600 rounded-lg mb-4"></div>
                <h3 className="text-xl font-semibold mb-2 text-white">Project Two</h3>
                <p className="text-gray-300 mb-4">Another amazing project description.</p>
                <div className="flex gap-2 flex-wrap">
                  <span className="px-3 py-1 bg-purple-100 text-purple-800 rounded-full text-sm">Next.js</span>
                  <span className="px-3 py-1 bg-yellow-100 text-yellow-800 rounded-full text-sm">TypeScript</span>
                </div>
              </Card>
              
              <Card className="bg-gray-800 rounded-xl p-6 border-gray-700">
                <div className="h-48 bg-gradient-to-br from-purple-400 to-pink-600 rounded-lg mb-4"></div>
                <h3 className="text-xl font-semibold mb-2 text-white">Project Three</h3>
                <p className="text-gray-300 mb-4">Yet another fantastic project.</p>
                <div className="flex gap-2 flex-wrap">
                  <span className="px-3 py-1 bg-red-100 text-red-800 rounded-full text-sm">Vue.js</span>
                  <span className="px-3 py-1 bg-indigo-100 text-indigo-800 rounded-full text-sm">Python</span>
                </div>
              </Card>
            </div>

          </div>
        </div>
      </section>

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

      <section id="contact" className="min-h-screen bg-black text-white">
        <div className="container mx-auto px-4 py-16 flex items-center justify-center min-h-screen">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-4xl md:text-6xl font-bold mb-8">Let's Connect</h2>
            <p className="text-xl text-gray-300 mb-12">
              Ready to work together? I'd love to hear from you.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
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
