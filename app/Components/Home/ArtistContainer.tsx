import type { FC } from "react"
import SubSectionHeading from "../base/HomeSubSection";
import mic from '@/public/Images/Home/mic.svg';
import ArtistList from "./ArtistList";

const ArtistContainer:FC = () => {
    
    
    return (
        <div>
            <SubSectionHeading url="/artists" imgURL={mic} heading="Artists" />
            <ArtistList />
        </div>
    )
}

export default ArtistContainer;