'use client'

import useEmblaCarousel from "embla-carousel-react";
import GameCarouselItem from "./GameCarouselItem";
import CarouselMinecraft from "@/app/public/carousel-minecraft.png"
import CarouselFivem from "@/app/public/carousel-fivem.png"
import CarouselGmod from "@/app/public/carousel-gmod.png"
import Autoplay from "embla-carousel-autoplay";

export default function GameCarousel() {
    const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true }, [Autoplay({playOnInit: true, delay: 5000})])

    return (
        <div className="px-4 xl:px-80 text-white">
            <div className="embla" ref={emblaRef}>
                <div className="embla__container">
                    <GameCarouselItem 
                        title="Minecraft" 
                        subtitle="Craft, Build, and Conquer -- Unleash Your imagination with Our Minecraft Server Hosting!" 
                        availability={true} 
                        price="15.00" 
                        link="/" 
                        image={CarouselMinecraft}
                    />
                    <GameCarouselItem 
                        title="FiveM" 
                        subtitle="Rev Up Your Roleplay—Experience Smooth and Customizable FiveM Server Hosting!" 
                        availability={true} 
                        price="25.00" 
                        link="/" 
                        image={CarouselFivem}
                    />
                    <GameCarouselItem 
                        title="Garry's Mod" 
                        subtitle="Sandbox Your Way—Host, Build, and Innovate with Our Garry's Mod Server Hosting!" 
                        availability={true} 
                        price="15.00" 
                        link="/" 
                        image={CarouselGmod}
                    />
                </div>
            </div>
        </div>
    )
}