import { StaticImageData } from "next/image"
import Image from "next/image";

interface FeatureData {
    image: StaticImageData;
    title: string;
    description: string;
}

export default function FeatureCard({image, title, description}: FeatureData) {
    return(
        <div className="p-8 basis-1/3">
            <div className="flex bg-indigo-800 rounded-2xl text-white p-4 flex-wrap content-center drop-shadow-2xl aspect-square min-w-[345px]">
                <div className="flex flex-col flex-wrap items-center">
                    <Image 
                        src={image}
                        alt="Feature Image"
                        width="100"
                        height="100"
                    />
                    <h1 className="text-center text-xl font-bold">{title}</h1>
                    <div className="px-10">
                        <h1 className="text-balance text-justify text-white text-opacity-75">{description}</h1>
                    </div>
                </div>
            </div>
        </div>
    )
}