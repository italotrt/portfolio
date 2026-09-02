'use client';

import { Navbar01 } from '@/components/ui/shadcn-io/navbar-01';
import { Contact } from "@/components/ui/content/contact";
import { 
  Card,
  CardContent,
  CardTitle,
} from "@/components/ui/card";
import Image from "next/image";
import { Button } from "@/components/ui/button";

const portfolioNavLinks = [
  { href: '/', label: 'Home' },
  { href: '/#about', label: 'About' },
  { href: '/#experience', label: 'Experience' },
  { href: '/#projects', label: 'Projects' },
];

const buttonStyle="text-white bg-{#111} border border-gray-700 px-8 py-3 rounded-lg hover:bg-white hover:text-black hover:cursor-pointer transition-colors w-full md:w-auto";

export default function projectHacker() {
  return (
    <>
      <Navbar01
        navigationLinks={portfolioNavLinks}
        ctaText="Contact Me"
        ctaHref="#contact"
      />

      <div className="container mx-auto px-4 py-16">
        <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold text-center mb-2">
                Hacker News Reimagined
            </h2>

            <p className="text-center text-lg text-gray-300 mb-16">
                Front-end Role • 2026 
            </p>

            <Image
              src="/hacker_news_main.png"
              alt="Profile Picture"
              width={1902}
              height={942}
              loading="eager"
              className="w-full max-w-[700px] h-auto rounded-2xl shadow-xl mb-16 mx-auto"
            />

            <div className="flex flex-col items-stretch justify-center gap-4 mb-16 md:flex-row md:items-center md:gap-8 mx-auto">
              <Button className={buttonStyle} onClick={() => window.open('https://news.ycombinator.com/', '_blank')}>
                Hacker News Original Website
              </Button>
              <Button className={buttonStyle} onClick={() => window.open('https://github.com/italotrt/news-activities-for-hackers', '_blank')}>
                GitHub Repository
              </Button>
              <Button className={buttonStyle} onClick={() => window.open('https://italotrt.github.io/news-activities-for-hackers/', '_blank')}>
                Live Demo
              </Button>
            </div>

            <div className="grid md:grid-cols-2 gap-32 mb-16 items-center">
              <div className="space-y-6 text-lg">
                  <p>
                    This is a redesigned implementation of <a className="text-purple-400 font-semibold">Hacker News</a> as a modern web application.
                  </p>
                  <p>
                    The current stage of this web application offers:
                  </p>
                  <ul className="space-y-2">
                        <li className="flex items-center gap-2">
                        <span className="w-2 h-2 bg-purple-400 rounded-full"></span>
                        Redesign of the front page
                        </li>
                        <li className="flex items-center gap-2">
                        <span className="w-2 h-2 bg-purple-400 rounded-full"></span>
                        The user is able to choose between new and top posts
                        </li>
                        <li className="flex items-center gap-2">
                        <span className="w-2 h-2 bg-purple-400 rounded-full"></span>
                        The posts are shown as a list
                        </li>
                        <li className="flex items-center gap-2">
                        <span className="w-2 h-2 bg-purple-400 rounded-full"></span>
                        Pagination after hitting a certain amount of posts in the page
                        </li>
                    </ul>
              </div>
              
              <Card className="bg-gray-800 rounded-lg p-6 border border-gray-700 text-white">
                  <CardTitle className="text-xl font-semibold text-purple-400">
                  TechStack & Tools
                  </CardTitle>

                  <CardContent>
                  <ul className="space-y-2">
                      <li className="flex items-center gap-2">
                      <span className="w-2 h-2 bg-purple-400 rounded-full"></span>
                      React + Typescript + Vite framework
                      </li>
                      <li className="flex items-center gap-2">
                      <span className="w-2 h-2 bg-purple-400 rounded-full"></span>
                      MUI materials for the components
                      </li>
                      <li className="flex items-center gap-2">
                      <span className="w-2 h-2 bg-purple-400 rounded-full"></span>
                      TanStack Query to handle the API calls
                      </li>
                      <li className="flex items-center gap-2">
                      <span className="w-2 h-2 bg-purple-400 rounded-full"></span>
                      SonarQube pipeline for code quality and security checks
                      </li>
                  </ul>
                  </CardContent>
              </Card>
            </div>

            <div className="grid md:grid-cols-2 gap-12 mb-16 items-center flex flex-col md:flex-row">
              <h3 className="text-2xl font-semibold">
                Data Source
              </h3>
              <p>
                  <a href="https://news.ycombinator.com/api" target="_blank" rel="noopener noreferrer" className="text-purple-400 underline font-semibold">
                    Hacker News API:
                  </a> The project uses the API available from the original website.
              </p>
              <h3 className="text-2xl font-semibold">
                Components
              </h3>
              <p>
                <a href="https://mui.com/" target="_blank" rel="noopener noreferrer" className="text-purple-400 underline font-semibold">
                  MUI Materials:
                </a> The components and icons used in the page are from MUI Materials library that served as a base.
              </p>
              <h3 className="text-2xl font-semibold">
                Workflow Automation
              </h3>
              <p>
                  <a className="text-purple-400 font-semibold">GitHub Actions + Pages:</a> In order to deploy the application and make it publicly available, the repo uses an automation script everytime new changes are made to the main brench and host it on GitHub Pages.
              </p>
            </div>
        </div>
      </div>

      <section id="contact">
        <Contact />
      </section>
    </>
  )
};