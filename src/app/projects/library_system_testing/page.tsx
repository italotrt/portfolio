'use client';

import { Button } from '@/components/ui/button';
import { Card, CardContent, CardFooter, CardTitle } from '@/components/ui/card';
import { Contact } from '@/components/ui/content/contact';
import { Navbar01 } from '@/components/ui/shadcn-io/navbar-01';
import HandymanIcon from '@mui/icons-material/Handyman';

const portfolioNavLinks = [
  { href: '/', label: 'Home' },
  { href: '/#about', label: 'About' },
  { href: '/#experience', label: 'Experience' },
  { href: '/#projects', label: 'Projects' },
];

export default function projectLibrarySystemTesting() {
  return (
    <>
      <Navbar01
        navigationLinks={portfolioNavLinks}
        ctaText="Contact Me"
        ctaHref="#contact"
      />

      <div className="container mx-auto mt-16">
        <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold text-center mb-2">
              Library System Testing
            </h2>

            <p className="text-center text-lg text-gray-300 mb-16">
              QA Engineer/Tester • 2024 
            </p>
        </div>
      </div>

      <div className='text-center space-y-4 mb-16 text-purple-400'>
        <p className='text-center text-lg font-bold'>Work in Progress</p>
        <HandymanIcon className='mx-auto' />
        <p> This page is currently under development.</p>
      </div >

      <div className="container mx-auto max-w-6xl items-center mb-16">
        <Card className="bg-gray-800 rounded-lg p-6 border border-gray-700 text-white">
          <CardTitle className="text-xl font-semibold text-purple-400">
            Details
          </CardTitle>

          <CardContent>
          <ul className="space-y-2">
              <li className="flex items-center gap-2">
              <span className="w-2 h-2 bg-purple-400 rounded-full"></span>
              Practiced Test-Driven Development (TDD): Engineered high-reliability software using JUnit, ensuring 100% of new features met strict acceptance criteria prior to integration.
              </li>
              <li className="flex items-center gap-2">
              <span className="w-2 h-2 bg-purple-400 rounded-full"></span>
              Leveraged Jira to track bugs and enhancements, mapping them directly to user stories to refine requirements and reduce post-release defects.
              </li>
              <li className="flex items-center gap-2">
              <span className="w-2 h-2 bg-purple-400 rounded-full"></span>
              Collaborated with a team of four in a GitHub environment, performing peer code reviews and managing branch merges to ensure seamless integration.
              </li>
          </ul>
          </CardContent>

          <CardFooter className="mt-2 pt-6 border-t border-gray-700">
            <div className="flex flex-wrap gap-2">
            {[
                { name: 'Java'},
                { name: 'JUnit'},
                { name: 'Test-Driven Development'},
                { name: 'Bug Reporting using Jira'},
            ].map((tech) => (
                <span key={tech.name} className={`px-3 py-1 bg-blue-100 text-blue-600 rounded-full text-sm font-medium`}>
                {tech.name}
                </span>
            ))}
            </div>
          </CardFooter>
        </Card>
      </div>

      <div className="flex flex-col items-stretch justify-center gap-4 mb-16 md:flex-row md:items-center md:gap-8 mx-auto">
        <Button className="text-white bg-{#111} border border-gray-700 px-8 py-3 rounded-lg hover:bg-white hover:text-black hover:cursor-pointer transition-colors w-full md:w-auto" onClick={() => window.open('https://github.com/italotrt/CS4004-Software-Inspection-and-Testing-Project', '_blank')}>
          GitHub Repository
        </Button>
      </div>


      <section id="contact">
        <Contact />
      </section>
    </>
  )
};