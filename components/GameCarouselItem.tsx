import Image from "next/image";
import { StaticImageData } from "next/image";
import Button from "./Button";
import AvailabilityNotifier from "./AvailabilityNotifier";

interface CarouselItem {
    title: string;
    subtitle: string;
    availability: boolean;
    price: string;
    link: string;
    image: StaticImageData;
}

export default function GameCarouselItem({title, subtitle, availability, price, link, image}: CarouselItem) {
    return(
        <div className="flex flex-row flex-[0_0_100%]">
            <div className="flex flex-wrap content-center basis-1/2">
                <div className="flex flex-col pl-8">
                    <AvailabilityNotifier availability={availability}/>
                    <h1 className="text-4xl font-bold py-4">{title}</h1>
                    <h1 className="text-balance text-white text-opacity-75 pb-2">{subtitle}</h1>
                    <h1>Starting at</h1>
                    <h1 className="text-white text-opacity-75 text-sm pb-4">$<span className="text-4xl text-white text-opacity-100">{price}</span>/month</h1>
                    <Button 
                        text="Check out now!"
                        disabled={false}
                        border={false}
                        link="/"
                    />
                </div>
            </div>

            <div className="basis-1/2 flex justify-end">
                <Image
                    src={image}
                    alt="Game Image"
                    width="500"
                    height="500"
                />
            </div>
        </div>
    )
}