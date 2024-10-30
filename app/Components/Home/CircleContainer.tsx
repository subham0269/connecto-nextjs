import type { FC } from "react"

import mic from '@/public/Images/Home/mic.svg';
import ArtistList from "./CircleList";
import SubSectionHeading from "../Base/HomeSubSection";
import { Container } from "@/app/Interfaces/components/Home";

const CircleContainer:FC<Container> = ({heading, url, list}) => {
    
    
    return (
        <div className="space-y-4">
            <SubSectionHeading url={url} imgURL={mic} heading={heading} />
            <ArtistList />
        </div>
    )
}

export default CircleContainer;