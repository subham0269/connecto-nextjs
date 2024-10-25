import { AtomicCard } from "@/app/Interfaces/components/Home";
import Image from "next/image";
import type { FC } from "react";

const ArtistCard:FC<AtomicCard> = ({imgURL, name}) => {
    return (
        <div className="w-fit space-y-3 group">
         <Image width={100} height={100} className="size-36 rounded-full object-center object-cover" src={imgURL} alt={`${name}-poster-img`} loading="lazy" />
         {name && <p className="group-hover:underline text-center text-[#000000BD] font-medium text-base">{name}</p>}
      </div>
    )
}

export  default ArtistCard;