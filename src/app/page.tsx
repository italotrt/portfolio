'use client';

import Image from "next/image";
import { Navbar01 } from '@/components/ui/shadcn-io/navbar-01';
import { 
  Card,
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
  // { href: '#skills', label: 'Skills' },
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

      <section id="about" className="bg-black text-white">
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
                <Card className="bg-gray-800 rounded-lg p-6 border border-gray-700">
                  <CardTitle className="text-xl font-semibold text-blue-400">
                    Personal Interests
                  </CardTitle>

                  <CardContent>
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
                  </CardContent>
                </Card>
                
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

      <section id="experience" className="bg-white text-black">
        <div className="container mx-auto px-4 py-16">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl md:text-6xl font-bold text-center mb-16">
              Experience
            </h2>
              <Card className="bg-gray-50 p-8">
                <CardHeader className="flex flex-col md:flex-row md:items-center md:justify-between mb-2">
                  <div>
                    <CardTitle className="text-2xl font-bold mb-2">
                      Software Engineer Intern
                    </CardTitle>
                    <CardDescription className="flex flex-col md:flex-row md:items-center gap-2 text-gray-600">
                      <span className="font-semibold text-blue-600">WP Engine</span>
                      <span className="hidden md:inline">•</span>
                      <span>Jan 2024 - Aug 2024</span>
                      <span className="hidden md:inline">•</span>
                      <span>Limerick, Ireland</span>
                    </CardDescription>
                  </div>
                  <div className="mt-4 md:mt-0">
                    <span className="inline-block px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm font-medium">
                      8 months
                    </span>
                    <Image
                      src="/wp-engine-logo.png"
                      alt="WP Engine Logo"
                      width={100}
                      height={40}
                      className="inline-block ml-4"
                    />
                  </div>
                </CardHeader>
                
                <CardContent className="space-y-2 text-gray-700">
                  <ul className="space-y-2 list-disc list-inside leading-relaxed">
                    <li>
                      Contributed as a <span className="font-semibold text-gray-900">Full Stack Engineer</span> on the e-commerce team, focusing on frontend development with <span className="font-semibold text-blue-600">React</span> and <span className="font-semibold text-blue-600">TypeScript</span>.
                    </li>

                    <li>
                      Collaborated in a 6-person <span className="font-semibold text-purple-600">Agile team</span>, participating in daily stand-ups, sprint planning, and code reviews.
                    </li>

                    <li>
                      Delivered production-ready features and UI improvements that enhanced <span className="font-semibold text-green-600">performance and accessibility</span> across customer-facing systems.
                    </li>

                    <li>
                      Built reusable components, debugged across services using Go and Ruby on Rails, and leveraged tools like Docker, Heroku, Postman, and Git to streamline development and deployment.
                    </li>
                  </ul>
                </CardContent>
                
                <CardFooter className="mt-2 pt-6 border-t border-gray-200">
                  <div className="flex flex-wrap gap-2">
                    {[
                      { name: 'React', color: 'bg-blue-100 text-blue-800' },
                      { name: 'TypeScript', color: 'bg-indigo-100 text-indigo-800' },
                      { name: 'Go', color: 'bg-teal-100 text-teal-800' },
                      { name: 'Ruby on Rails', color: 'bg-red-100 text-red-800' },
                      { name: 'Docker', color: 'bg-sky-100 text-sky-800' },
                      { name: 'Heroku', color: 'bg-purple-100 text-purple-800' },
                      { name: 'Git', color: 'bg-orange-100 text-orange-800' },
                      { name: 'Agile', color: 'bg-green-100 text-green-800' }
                    ].map((tech) => (
                      <span key={tech.name} className={`px-3 py-1 ${tech.color} rounded-full text-sm`}>
                      {tech.name}
                      </span>
                    ))}
                  </div>
                </CardFooter>
              </Card>
          </div>
        </div>
      </section>

      <section id="projects" className="bg-black text-white">
        <div className="container mx-auto px-4 py-16">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl md:text-6xl font-bold text-center mb-16">
              My Projects
            </h2>
            <div className="flex flex-col gap-8">
              <Card className="bg-gray-800 rounded-xl p-6 border-gray-700">
                <CardHeader className="flex flex-col md:flex-row md:items-center md:justify-between">
                  <div>
                    <CardTitle className="text-xl font-bold text-white">
                      “Skill-Swap” - Admin Panel
                    </CardTitle>
                    <CardDescription className="text-gray-300 md:text-lg">
                      Software Design & Architecture: University Project
                    </CardDescription>
                  </div>

                  <div className="mt-4 md:mt-0 text-white text-sm">
                    <a href="https://github.com/italotrt/CS4227-Software-Design-and-Architecture" className="text-blue-400 hover:underline">Project Code</a> • <a href="https://italotrt.github.io/CS4227-Software-Design-and-Architecture/" className="text-blue-400 hover:underline">Deployed Link</a>
                  </div>
                </CardHeader>

                <CardContent>
                  <ul className="space-y-2 list-disc list-inside leading-relaxed text-white">
                    <li>
                      In this project I have designed and implemented a N-Tier Architecture containing the presentation, business and data layers for Admin Panel of my group’s application, where I ensured maintainability, separation of concerns and scalability.
                    </li>

                    <li>
                      Built reusable components, debugged across services using Go and Ruby on Rails, and leveraged tools like Docker, Heroku, Postman, and Git to streamline development and deployment.
                    </li>
                  </ul>
                </CardContent>

                <CardFooter className="pt-6 border-t border-gray-700">
                  <div className="flex gap-2 flex-wrap">
                    <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm">
                      React
                    </span>
                    <span className="px-3 py-1 bg-green-100 text-green-800 rounded-full text-sm">
                      GitHub Pages
                    </span>
                    <span className="px-3 py-1 bg-orange-100 text-orange-800 rounded-full text-sm">
                      N-Tier Layered Architecture Design
                    </span>
                  </div>
                </CardFooter>
              </Card>
              
              <Card className="bg-gray-800 rounded-xl p-6 border-gray-700">
                <CardHeader className="flex flex-col md:flex-row md:items-center md:justify-between">
                  <div>
                    <CardTitle className="text-xl font-bold text-white">
                      Testing Library Management System
                    </CardTitle>
                    <CardDescription className="text-gray-300 md:text-lg">
                      Software Inspection and Testing Project (University Project)
                    </CardDescription>
                  </div>

                  <div className="mt-4 md:mt-0 text-white text-sm">
                    <a href="https://github.com/italotrt/CS4004-Software-Inspection-and-Testing-Project" className="text-blue-400 hover:underline">Project Code</a>
                  </div>
                </CardHeader>

                <CardContent>
                  <ul className="space-y-2 list-disc list-inside leading-relaxed text-white">
                    <li>
                      I have designed and developed software tests using JUnit, following Test-Driven Development (TDD) practice to ensure new code passed defined test cases before integration.
                    </li>
                    <li>
                      I created coverage and criteria-based test cases to meet the project metrics, improving test coverage across modules.
                    </li>
                    <li>
                      In this project I reported bugs and potential enhancements using Jira, linking them to user stories, which helped to clarify requirements and reduce defects.
                    </li>
                    <li>
                      I worked alongside 4 classmates, dividing work, reviewing code and integrating test cases.
                    </li>
                  </ul>
                </CardContent>

                <CardFooter className="pt-6 border-t border-gray-700">
                  <div className="flex gap-2 flex-wrap">
                    <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm">
                      Java
                    </span>
                    <span className="px-3 py-1 bg-green-100 text-green-800 rounded-full text-sm">
                      JUnit
                    </span>
                    <span className="px-3 py-1 bg-orange-100 text-orange-800 rounded-full text-sm">
                      Test-Driven Development
                    </span>
                    <span className="px-3 py-1 bg-red-100 text-red-800 rounded-full text-sm">
                      Bug Reporting using Jira
                    </span>
                  </div>
                </CardFooter>
              </Card>
              
              <Card className="bg-gray-800 rounded-xl p-6 border-gray-700">
                <CardHeader className="flex flex-col md:flex-row md:items-center md:justify-between">
                  <div>
                    <CardTitle className="text-xl font-bold text-white">
                      Rogue Adventures
                    </CardTitle>
                    <CardDescription className="text-gray-300 md:text-lg">
                      Extracurricular Online Course Project - Techers, Brazil
                    </CardDescription>
                  </div>

                  <div className="mt-4 md:mt-0 text-white text-sm">
                    <a href="https://github.com/italotrt/RogueAdventures" className="text-blue-400 hover:underline">Project Code</a>
                  </div>
                </CardHeader>

                <CardContent>
                  <p className="leading-relaxed text-white">
                    During my extracurricular course of games dev., I have developed a 2D side-scrolling platformer in GameMaker Studio, where the player must collect coins, defeat enemies before reaching the end of the level. The game that inspired me to create this project was Hollow Knight.
                  </p>
                </CardContent>

                <CardFooter className="pt-6 border-t border-gray-700">
                  <div className="flex gap-2 flex-wrap">
                    <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm">
                      GameMaker Studio
                    </span>
                    <span className="px-3 py-1 bg-green-100 text-green-800 rounded-full text-sm">
                      2D Platformer
                    </span>
                    <span className="px-3 py-1 bg-orange-100 text-orange-800 rounded-full text-sm">
                      Level Design
                    </span>
                  </div>
                </CardFooter>
              </Card>
            </div>
          </div>
        </div>
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
        <div className="container mx-auto px-4 py-16 flex items-center justify-center">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-4xl md:text-6xl font-bold mb-8">Let's Connect</h2>
            <p className="text-xl text-black mb-12">
              Ready to work together? <br />
              I'd love to hear from you.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-8 py-3 border-2 border-black text-black rounded-lg hover:bg-black hover:text-white transition-colors">
                LinkedIn
              </button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
