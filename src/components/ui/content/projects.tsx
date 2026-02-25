import { 
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";
import projectsData from "@/data/projectsData.json";

export function Projects() {
  const accentColors = [
    { border: "border-t-blue-500",   shadow: "hover:shadow-blue-900/30",   text: "text-blue-400"   },
    { border: "border-t-purple-500", shadow: "hover:shadow-purple-900/30", text: "text-purple-400" },
    { border: "border-t-emerald-500",shadow: "hover:shadow-emerald-900/30",text: "text-emerald-400"},
    { border: "border-t-orange-500", shadow: "hover:shadow-orange-900/30", text: "text-orange-400" },
    { border: "border-t-pink-500",   shadow: "hover:shadow-pink-900/30",   text: "text-pink-400"   },
    { border: "border-t-cyan-500",   shadow: "hover:shadow-cyan-900/30",   text: "text-cyan-400"   },
  ];

  const displayProjectLinks = (links: { href: string; label: string }[]) => {
    return (
      <>
        <a href={links[0].href} target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:underline">{links[0].label}</a>
        {links[1] && (
          <>
            {" • "}
            <a href={links[1].href} target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:underline">{links[1].label}</a>
          </>
        )}
      </>
    );
  }

  return (
    <div className="container mx-auto px-4 py-16">
      <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">
            My Projects
          </h2>
          <div className="flex flex-col gap-8">
            {projectsData.map((project, index) => {
              const color = accentColors[index % accentColors.length];
              return (
                <Card key={index} className={`bg-gray-800 rounded-xl p-6 border-gray-700 border-t-2 ${color.border}`}>
                  <CardHeader className="flex flex-col md:flex-row md:items-center md:justify-between">
                    <div>
                      <CardTitle className="font-bold text-white">
                        {project.title}
                      </CardTitle>
                      <CardDescription className="text-gray-300">
                        {project.subtitle}
                      </CardDescription>
                    </div>

                    <div className="mt-4 md:mt-0 text-white text-sm gap-1 flex flex-wrap justify-center">
                      {displayProjectLinks(project.links)}
                    </div>
                  </CardHeader>

                  <CardContent>
                    <ul className="space-y-2 list-disc list-inside leading-relaxed text-white">
                      {project.bodyType === "list" && project.bullets.map((bullet, idx) => (
                        <li key={idx}>{bullet}</li>
                      ))}
                    </ul>
                  </CardContent>

                  <CardFooter className="pt-6 border-t border-gray-700">
                    <div className="flex gap-2 flex-wrap">
                      {project.tags.map((tag, idx) => (
                        <span key={idx} className={`${tag.colorClass} px-3 py-1 rounded-full text-sm`}>
                          {tag.label}
                        </span>
                      ))}
                    </div>
                  </CardFooter>
                </Card>
              );
            })}
            <p className="text-gray-400 text-center">
              More projects on my <a href="https://github.com/italotrt" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:underline">GitHub</a>.
            </p>
          </div>
      </div>
    </div>
  );
}