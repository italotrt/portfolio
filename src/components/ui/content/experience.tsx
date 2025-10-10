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