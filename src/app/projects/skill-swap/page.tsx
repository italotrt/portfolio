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

export default function projectSkillSwap() {
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
              Skill-Swap: Admin Panel
          </h2>

          <p className="text-center text-lg text-gray-300 mb-16">
              Software Design & Architecture • 2025 
          </p>

          <Image
            src="/skill_swap_main.png"
            alt="Profile Picture"
            width={1918}
            height={793}
            loading="eager"
            className="w-full max-w-[1000px] h-auto shadow-xl mb-16 mx-auto"
          />

          <div className="flex flex-col items-stretch justify-center gap-4 mb-16 md:flex-row md:items-center md:gap-8 mx-auto">
            <Button className={buttonStyle} onClick={() => window.open('https://github.com/italotrt/CS4227-Software-Design-and-Architecture', '_blank')}>
              GitHub Repository
            </Button>
            <Button className={buttonStyle} onClick={() => window.open('https://italotrt.github.io/CS4227-Software-Design-and-Architecture/', '_blank')}>
              Live Demo
            </Button>
          </div>

          <div className="grid md:grid-cols-2 gap-32 mb-16 items-center">
            <div className="space-y-6 text-lg">
                <p>
                  This project is a web platform that allow users to exchange skills with each other, making expertise accessible without financial transactions. For instance, a guitar player could trade lessons with a computer science teacher.
                </p>
                <p>
                  <a className="text-purple-400 font-semibold">My Role:</a> In this project I was responsible for developing the <a className="text-purple-400 font-semibold">Admin Panel</a> of the application for the admins, using a <a className="text-purple-400 font-semibold">Layered N-Tier Architecture</a>. I built functionalities to manage user roles and statuses, and enabling edits or removals. I developed the front-end and a simple back-end for these features.
                </p>
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
                    Redux for state management and routing logic
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-2 h-2 bg-purple-400 rounded-full"></span>
                    SonarQube pipeline for code quality and security checks
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-2 h-2 bg-purple-400 rounded-full"></span>
                    Firestore database for storing data
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>

          <div className="space-y-6 text-center mb-16">
            <h3 className="text-2xl md:text-3xl font-bold mb-8">
              Method
            </h3>
            <ol className="flex flex-col items-stretch gap-3 text-left md:flex-row md:items-stretch md:gap-0">
              {['Requirements', 'Design', 'Prototype', 'Evaluation', 'Documentation'].map((step, index) => (
                <li key={step} className="flex flex-1 items-center md:items-stretch">
                  <div className="flex w-full items-center gap-3 rounded-lg border border-gray-700 bg-gray-800 px-4 py-3 md:flex-col md:justify-center md:gap-2 md:px-3 md:py-4">
                    <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-purple-400 font-bold text-gray-900">
                      {index + 1}
                    </span>
                    <span className="font-medium">{step}</span>
                  </div>
                  {index < 4 && (
                    <span className="hidden items-center px-2 text-xl text-purple-400 md:flex" aria-hidden="true">
                      &gt;
                    </span>
                  )}
                </li>
              ))}
            </ol>
          </div>

          <h3 className="text-center text-2xl md:text-3xl font-bold mb-8">
            Requirements
          </h3>

          <div className="grid md:grid-cols-2 gap-32 items-center">
            <div className="space-y-6 text-lg">
                <p>
                  The requirements phase was where we captured the functional and non-functional needs from the stakeholders of the application, which those include regular users and administrators.
                </p>
                <p>
                  These requirements emphasized modularity, real-time updates, and secure access control for administrators.
                </p>
            </div>
            
            <Card className="bg-gray-800 rounded-lg p-6 border border-gray-700 text-white">
              <CardTitle className="text-xl font-semibold text-purple-400">
                 The key features/functionalities include:
              </CardTitle>

              <CardContent>
                <ul className="space-y-2">
                  <li className="flex items-center gap-2">
                    <span className="w-2 h-2 bg-purple-400 rounded-full"></span>
                    View list of all users
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-2 h-2 bg-purple-400 rounded-full"></span>
                    Edit user profiles
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-2 h-2 bg-purple-400 rounded-full"></span>
                    Ban or delete users
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-2 h-2 bg-purple-400 rounded-full"></span>
                    Access user information and filter by status or role
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>

      <h3 className="text-center text-2xl md:text-3xl font-bold mb-8">
        Design
      </h3>
      
      <div className="text-lg text-center items-center space-y-8 mb-16 max-w-3xl mx-auto">
        <p>
          In my module of the application, the admin panel, I chose the <a className="text-purple-400 font-semibold">Layered N-Tier Architecture</a> to design a three-layer architecture containing the following tools:
        </p>

        <ul className="list-disc list-inside space-y-2 text-left max-w-2xl mx-auto">
          <li className="flex items-center gap-2">
            <span className="w-2 h-2 bg-purple-400 rounded-full"></span>
            <a className="text-purple-400 font-semibold">Presentation Layer:</a> React + TypeScript UI components.
          </li>
          <li className="flex items-center gap-2">
            <span className="w-2 h-2 bg-purple-400 rounded-full"></span>
            <a className="text-purple-400 font-semibold">Business Logic Layer:</a> Redux for state management and routing logic.
          </li>
          <li className="flex items-center gap-2">
            <span className="w-2 h-2 bg-purple-400 rounded-full"></span>
            <a className="text-purple-400 font-semibold">Data Layer:</a> Firestore database storing all user data.
          </li>
        </ul>

        <p>
          The diagram below shows how React components, state management (Redux), and Firestore are layered, ensuring a clean separation of concerns and scalability.
        </p>
      </div>

      <Image
        src="/skill_swap_diagram.png"
        alt="Profile Picture"
        width={1065}
        height={1033}
        loading="eager"
        className="w-full max-w-[700px] max-h-[700px] rounded-lg shadow-xl mx-auto mb-16"
      />

      <h3 className="text-center text-2xl md:text-3xl font-bold mb-8">
        Prototype
      </h3>

      <div className="text-lg text-center items-center space-y-8 mb-16 max-w-3xl mx-auto">
        <p>
          The front-end prototype is fully functional, hosted on GitHub Pages, and it showcases the following:
        </p>

        <ul className="list-disc list-inside space-y-2 text-left max-w-2xl mx-auto">
          <li className="flex items-center gap-2">
            <span className="w-2 h-2 bg-purple-400 rounded-full"></span>
            <a className="text-purple-400 font-semibold">User Table View:</a> Displays all registered users with an action pop-up modal.
          </li>
          <li className="flex items-center gap-2">
            <span className="w-2 h-2 bg-purple-400 rounded-full"></span>
            <a className="text-purple-400 font-semibold">Edit User Page:</a> Allows admins to update roles and status.
          </li>
        </ul>

        <p>
          Technologies like Material UI and Redux were used for the state management and UI consistency. The backend prototype includes a simple implementation to Firestore database that is hooked to the redux.
        </p>
      </div>
      
      <h3 className="text-center text-2xl md:text-3xl font-bold mb-8">
        Evaluation
      </h3>

      <div className="text-lg text-center items-center space-y-8 mb-16 max-w-3xl mx-auto">
        <p>
          Assessed using the <a className="text-purple-400 font-semibold">Architecture Tradeoff Analysis Method (ATAM)</a> focusing on the following attributes:
        </p>

        <ul className="list-disc list-inside space-y-2 text-left max-w-2xl mx-auto">
          <li className="flex items-center gap-2">
            <span className="w-2 h-2 bg-purple-400 rounded-full"></span>
            <a className="text-purple-400 font-semibold">Performance:</a> Separation of concerns reduces bottlenecks.
          </li>
          <li className="flex items-center gap-2">
            <span className="w-2 h-2 bg-purple-400 rounded-full"></span>
            <a className="text-purple-400 font-semibold">Maintainability:</a> Each layer is modular and loosely coupled.
          </li>
          <li className="flex items-center gap-2">
            <span className="w-2 h-2 bg-purple-400 rounded-full"></span>
            <a className="text-purple-400 font-semibold">Security:</a> Layered design enables role-based access control, data validation and secure authentication.
          </li>
          <li className="flex items-center gap-2">
            <span className="w-2 h-2 bg-purple-400 rounded-full"></span>
            <a className="text-purple-400 font-semibold">Scalability:</a> Architecture supports horizontal scaling, front-end and backend can scale independently.
          </li>
        </ul>

        <p>
          Tools used: PageSpeed Insights and SonarQube.
        </p>
      </div>
      
      <h3 className="text-center text-2xl md:text-3xl font-bold mb-8">
        Report
      </h3>

      <p className="text-lg text-center items-center space-y-8 mb-16 max-w-3xl mx-auto">
        Skill-Swap is a collaborative effort that explores multiple architectural styles across different modules. My Admin Panel uses a Layered N-Tier approach for better maintainability and secure real-time updates. The project demonstrates effective architectural planning to build a scalable and modular application ready for deployment in real-world scenarios.
      </p>

      <section id="contact">
        <Contact />
      </section>
    </>
  )
};