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

export function Education() {
  return (
    <div className="container mx-auto px-4 py-16">
        <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">
                Education
            </h2>
            <div className="text-center mt-12">
                TUS - Technological University of Shannon <br />
                MSc in Software Desing with Cloud Native Computing <br />
                In Progress <br />
                2026 - Present
            </div>
            <div className="text-center mt-12">
                UL - University of Limerick <br />
                BSc (Hons) Computer Games Development <br />
                Second Class Honours (2.2) <br />
                2021 - 2025
            </div>
        </div>
    </div>
  );
}