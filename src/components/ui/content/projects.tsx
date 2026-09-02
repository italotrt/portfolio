import { 
    Card,
    CardDescription,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";
import CardActionArea from '@mui/material/CardActionArea';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { Button } from "@/components/ui/button";
import projectsData from "@/data/projectsData.json";

export function Projects() {
  return (
    <div className="container mx-auto px-4 py-16">
      <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">
            My Projects
          </h2>
          <div className="flex flex-wrap gap-8 ">
            {projectsData.map((project, index) => {
              return (
                <CardActionArea key={index} href={`${project.href}`}>
                  <Card key={index} className="bg-gray-800 rounded-xl p-6 border-gray-700 border-t-2">
                    <CardHeader className="flex flex-col md:flex-row md:items-center md:justify-between">
                        <div>
                          <CardTitle className="font-bold mb-2">
                            {project.title}
                          </CardTitle>
                          <CardDescription>
                            {project.subtitle}
                          </CardDescription>
                        </div>
                        <p className="mt-4 md:mt-0">
                          View More
                        </p>
                    </CardHeader>
                  </Card>
                </CardActionArea>
              );
            })}
          </div>
          <div className="text-center mt-12">
            <Button className="text-xl text-white bg-[#111] px-8 py-6 rounded-lg hover:bg-white hover:text-black hover:cursor-pointer transition-colors" onClick={() => window.open('https://github.com/italotrt', '_blank')}>
              <ArrowForwardIcon />  
              More projects on my Github
              <ArrowBackIcon />
            </Button>
          </div>
      </div>
    </div>
  );
}