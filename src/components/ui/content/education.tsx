import { 
    Card,
    CardDescription,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";
import Image from "next/image";

export function Education() {
  return (
    <div className="container mx-auto px-4 py-16">
        <div className="max-w-6xl mx-auto text-white">
            <h2 className="text-4xl md:text-5xl text-center font-bold mb-16">
                Education
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <Card className="w-full rounded-lg p-6 border" style={{ backgroundColor: '#292929', borderColor: '#444' }}>
                    <CardHeader className="flex flex-col md:flex-row md:items-center md:justify-between">
                        <div>
                          <CardTitle className="font-bold mb-2">
                            MSc Software Design with Cloud Native Computing
                          </CardTitle>
                          <CardDescription className="flex flex-col gap-1 text-white">
                            <span>Technological University of Shannon (TUS)</span>
                            <span>Athlone, Ireland (Online)</span>
                            <span>In Progress</span>
                          </CardDescription>
                        </div>
                        <div className="mt-4 md:mt-0">
                            <a href="https://tus.ie/" target="_blank" rel="noopener noreferrer">
                                <Image
                                    src="/tus_logo.png"
                                    alt="TUS Logo"
                                    width={500}
                                    height={500}
                                    loading="eager"
                                    className="inline-block ml-4 max-w-[100px] max-h-[100px]"
                                />
                            </a>
                        </div>
                    </CardHeader>
                </Card>
                
                <Card className="w-full rounded-lg p-6 border" style={{ backgroundColor: '#292929', borderColor: '#444' }}>
                    <CardHeader className="flex flex-col md:flex-row md:items-center md:justify-between">
                        <div>
                            <CardTitle className="font-bold mb-2">
                                BSc (Hons) Computer Games Development
                            </CardTitle>
                            <CardDescription className="flex flex-col gap-1 text-white">
                                <span>Second Class Honours (2.2)</span>
                                <span>University of Limerick (UL)</span>
                                <span>Limerick, Ireland</span>
                            </CardDescription>
                        </div>
                        <div className="mt-4 md:mt-0">
                            <a href="https://www.ul.ie/" target="_blank" rel="noopener noreferrer">
                                <Image
                                    src="/ul_logo.png"
                                    alt="University of Limerick Logo"
                                    width={500}
                                    height={500}
                                    loading="eager"
                                    className="inline-block ml-4 max-w-[100px] max-h-[100px]"
                                />
                            </a>
                        </div>
                    </CardHeader>
                </Card>
            </div>
        </div>
    </div>
  );
}