import { 
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";

export function Projects() {
  return (
    <div className="container mx-auto px-4 py-16">
        <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">
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
                    <a href="https://github.com/italotrt/CS4227-Software-Design-and-Architecture"  target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:underline">Project Code</a> • <a href="https://italotrt.github.io/CS4227-Software-Design-and-Architecture/"  target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:underline">Deployed Link</a>
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
                    <a href="https://github.com/italotrt/CS4004-Software-Inspection-and-Testing-Project"  target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:underline">Project Code</a>
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
                    <a href="https://github.com/italotrt/RogueAdventures"  target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:underline">Project Code</a>
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
              <p className="text-gray-400 text-center">
                More projects on my <a href="https://github.com/italotrt" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:underline">GitHub</a>.
              </p>
            </div>
          </div>
        </div>
  );
}