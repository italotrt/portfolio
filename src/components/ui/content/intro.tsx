import Image from "next/image";

export function Intro() {
    return (
        <div className="container mx-auto px-4 py-16 flex flex-col md:flex-row items-center justify-center min-h-screen gap-8 md:gap-12">
            <div className="text-center md:text-left max-w-4xl flex-col order-2 md:order-1">
                <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
                    Italo da Silva
                </h1>
                <p className="text-lg sm:text-xl md:text-xl mb-8 w-full md:w-3/4 mx-auto md:mx-0">
                    Recent Computer Games Development graduate from University of Limerick, passionate about creating immersive digital experiences through innovative web technologies and interactive design.
                </p>
            </div>
            <Image
                src="/profile_pic.png"
                alt="Profile Picture"
                width={400}
                height={400}
                className="rounded-full shadow-lg w-48 h-48 sm:w-64 sm:h-64 md:w-80 md:h-80 lg:w-96 lg:h-96 object-cover order-1 md:order-2"
            />
        </div>
    )
}