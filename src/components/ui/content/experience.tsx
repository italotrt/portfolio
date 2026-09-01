import Image from "next/image";
import { 
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";

export function Experience() {
  return (
    <div className="container mx-auto px-4 py-16 flex flex-col flex-wrap items-center justify-center relative h-[100vh]">
        <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">
                Experience
            </h2>
            <Card className="bg-gray-800 rounded-lg p-8 border border-gray-700 text-white">
                <CardHeader className="flex flex-col md:flex-row md:items-center md:justify-between mb-2">
                    <div>
                        <CardTitle className="text-2xl font-bold mb-2">
                            Software Engineer Intern
                        </CardTitle>
                        <CardDescription className="flex flex-col md:flex-row md:items-center gap-2 text-white">
                            <span className="text-blue-400 font-semibold">WP Engine</span>
                            <span className="hidden md:inline">•</span>
                            <span>Jan 2024 - Aug 2024</span>
                            <span className="hidden md:inline">•</span>
                            <span>Limerick, Ireland</span>
                        </CardDescription>
                    </div>
                    <div className="mt-4 md:mt-0">
                        <span className="inline-block px-3 py-1 bg-blue-100 text-blue-600 rounded-full text-sm font-medium">
                            8 months
                        </span>

                        <a href="https://www.wpengine.com/" target="_blank" rel="noopener noreferrer">
                            <Image
                                src="/wp-engine-logo.png"
                                alt="WP Engine Logo"
                                width={100}
                                height={40}
                                className="inline-block ml-4"
                            />
                        </a>
                    </div>
                </CardHeader>
                
                <CardContent className="space-y-2">
                    <ul className="space-y-2 list-disc list-inside leading-relaxed">
                        <li>
                            Engineered high-performance UI features and accessibility enhancements as a <span className="font-semibold text-purple-400">Full-Stack Intern</span>, utilizing <span className="font-semibold text-purple-400">React</span> and <span className="font-semibold text-purple-400">TypeScript</span> to elevate the user experience for customer-facing e-commerce systems.
                        </li>

                        <li>
                            Facilitated cross-functional collaboration between Product Managers and UI/UX Designers to ensure technical deliverables directly supported strategic business objectives.
                        </li>

                        <li>
                            Developed and optimized full-stack features using <span className="font-semibold text-purple-400">Golang</span> and <span className="font-semibold text-purple-400">Ruby on Rails</span>, maintaining high code quality through rigorous peer reviews and the creation of reusable components.
                        </li>

                        <li>
                            Streamlined DevOps workflows by leveraging <span className="font-semibold text-purple-400">Docker</span>, <span className="font-semibold text-purple-400">Heroku</span>, and <span className="font-semibold text-purple-400">Postman</span>, ensuring efficient deployment and testing across distributed services.
                        </li>

                        <li>
                            Fast paced delivery in an <span className="font-semibold text-purple-400">Agile/Scrum</span> environment, actively contributing to sprint planning, daily stand-ups, and retrospectives to improve team performance.
                        </li>
                    </ul>
                </CardContent>
                
                <CardFooter className="mt-2 pt-6 border-t border-gray-700">
                    <div className="flex flex-wrap gap-2">
                    {[
                        { name: 'React'},
                        { name: 'TypeScript'},
                        { name: 'Go'},
                        { name: 'Ruby on Rails'},
                        { name: 'Docker'},
                        { name: 'Heroku'},
                        { name: 'Git'},
                        { name: 'Agile'}
                    ].map((tech) => (
                        <span key={tech.name} className={`px-3 py-1 bg-blue-100 text-blue-600 rounded-full text-sm font-medium`}>
                        {tech.name}
                        </span>
                    ))}
                    </div>
                </CardFooter>
            </Card>
        </div>
    </div>
    );
}