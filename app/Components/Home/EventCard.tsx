import { AtomicCard } from "@/app/Interfaces/components/Home";
import Image from "next/image";
import { FC } from "react";

const EventCard:FC<AtomicCard> = ({imgURL, name}) => {
    return (
        <div className="overflow-hidden rounded-sm">
            <Image width={100} height={100} className="size-36 object-center object-cover hover:scale-105 transition duration-200 ease-in-out" src={imgURL} alt={`${name}-poster-img`} loading="lazy" />
        </div>
    )
}

export default EventCard;