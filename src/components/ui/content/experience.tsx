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
    <div className="container mx-auto px-4 py-16">
        <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">
                Experience
            </h2>
            <Card className="bg-gray-50 p-8">
            <CardHeader className="flex flex-col md:flex-row md:items-center md:justify-between mb-2">
                <div>
                <CardTitle className="text-2xl font-bold mb-2">
                    Software Engineer Intern
                </CardTitle>
                <CardDescription className="flex flex-col md:flex-row md:items-center gap-2 text-gray-600">
                    <span className="font-semibold text-indigo-600">WP Engine</span>
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
            
            <CardContent className="space-y-2 text-gray-700">
                <ul className="space-y-2 list-disc list-inside leading-relaxed">
                    <li>
                        Engineered high-performance UI features and accessibility enhancements as a <span className="font-semibold text-indigo-600">Full-Stack Intern</span>, utilizing <span className="font-semibold text-blue-600">React</span> and <span className="font-semibold text-cyan-600">TypeScript</span> to elevate the user experience for customer-facing e-commerce systems.
                    </li>

                    <li>
                        Facilitated cross-functional collaboration between Product Managers and UI/UX Designers to ensure technical deliverables directly supported strategic business objectives.
                    </li>

                    <li>
                        Developed and optimized full-stack features using <span className="font-semibold text-orange-600">Golang</span> and <span className="font-semibold text-rose-600">Ruby on Rails</span>, maintaining high code quality through rigorous peer reviews and the creation of reusable components.
                    </li>

                    <li>
                        Streamlined DevOps workflows by leveraging <span className="font-semibold text-sky-600">Docker</span>, <span className="font-semibold text-violet-600">Heroku</span>, and <span className="font-semibold text-amber-600">Postman</span>, ensuring efficient deployment and testing across distributed services.
                    </li>

                    <li>
                        Fast paced delivery in an <span className="font-semibold text-emerald-600">Agile/Scrum</span> environment, actively contributing to sprint planning, daily stand-ups, and retrospectives to improve team performance.
                    </li>
                </ul>
            </CardContent>
            
            <CardFooter className="mt-2 pt-6 border-t border-gray-200">
                <div className="flex flex-wrap gap-2">
                {[
                    { name: 'React', color: 'bg-blue-100 text-blue-800' },
                    { name: 'TypeScript', color: 'bg-green-100 text-green-800' },
                    { name: 'Go', color: 'bg-orange-100 text-orange-800' },
                    { name: 'Ruby on Rails', color: 'bg-red-100 text-red-800' },
                    { name: 'Docker', color: 'bg-sky-100 text-sky-800' },
                    { name: 'Heroku', color: 'bg-purple-100 text-purple-800' },
                    { name: 'Git', color: 'bg-indigo-100 text-indigo-800' },
                    { name: 'Agile', color: 'bg-teal-100 text-teal-800' }
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
    );
}