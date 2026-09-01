import { Button } from "@/components/ui/button";

export function Contact() {
    return (
        <div className="container mx-auto px-4 py-16 flex flex-col flex-wrap items-center justify-center relative h-[100vh]">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-bold mb-8">Let's Connect</h2>
            <p className="text-xl mb-12">
              I'd love to hear from you.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button className="bg-{#111} px-8 py-3 rounded-lg hover:bg-white hover:text-black hover:cursor-pointer transition-colors" onClick={() => window.open('https://www.linkedin.com/in/italo-da-silva/', '_blank')}>
                LinkedIn
              </Button>
              <Button className="bg-{#111} px-8 py-3 rounded-lg hover:bg-white hover:text-black hover:cursor-pointer transition-colors" onClick={() => window.open('https://github.com/italotrt', '_blank')}>
                Github
              </Button>
            </div>
          </div>
        </div>
    )
}