import { 
  Card,
  CardContent,
  CardTitle,
} from "@/components/ui/card";

export function AboutMe() {
  return (
    <div className="container mx-auto px-4 py-16">
        <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">
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
    ); 
}