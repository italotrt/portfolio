'use client';

import { Navbar01 } from '@/components/ui/shadcn-io/navbar-01';
import { Contact } from "@/components/ui/content/contact";
import HandymanIcon from '@mui/icons-material/Handyman';
import { Card, CardContent, CardFooter, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

const portfolioNavLinks = [
  { href: '/', label: 'Home' },
  { href: '/#about', label: 'About' },
  { href: '/#experience', label: 'Experience' },
  { href: '/#projects', label: 'Projects' },
];

export default function projectRogueAdventures() {
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
              Rogue Adventures
            </h2>

            <p className="text-center text-lg text-gray-300 mb-16">
              Game Developer • 2022
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
          Project Details
          </CardTitle>

          <CardContent>
          <ul className="space-y-2">
              <li className="flex items-center gap-2">
                <span className="w-2 h-2 bg-purple-400 rounded-full"></span>
                Developed a 2D platformer game inspired by the atmospheric world-building and tight controls of Hollow Knight.
              </li>
              <li className="flex items-center gap-2">
                <span className="w-2 h-2 bg-purple-400 rounded-full"></span>
                Iterated on level design to balance challenge and reward, integrating enemy encounters and collectible placement to guide the player's journey.
              </li>
              <li className="flex items-center gap-2">
                <span className="w-2 h-2 bg-purple-400 rounded-full"></span>
                Scripted custom animations and sound triggers to enhance player feedback, ensuring a responsive and engaging user experience from start to finish.
              </li>
          </ul>
          </CardContent>

          <CardFooter className="mt-2 pt-6 border-t border-gray-700">
            <div className="flex flex-wrap gap-2">
            {[
                { name: 'GameMaker Studio'},
                { name: '2D Platformer'},
                { name: 'Level Design'},
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
        <Button className="text-white bg-{#111} border border-gray-700 px-8 py-3 rounded-lg hover:bg-white hover:text-black hover:cursor-pointer transition-colors w-full md:w-auto" onClick={() => window.open('https://github.com/italotrt/RogueAdventures', '_blank')}>
          GitHub Repository
        </Button>
      </div>

      <section id="contact">
        <Contact />
      </section>
    </>
  )
};