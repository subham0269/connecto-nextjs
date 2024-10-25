import type { FC } from "react"

import mic from '@/public/Images/Home/mic.svg';
import ArtistList from "./ArtistList";
import SubSectionHeading from "../Base/HomeSubSection";

const ArtistContainer:FC = () => {
    
    
    return (
        <div>
            <SubSectionHeading url="/artists" imgURL={mic} heading="Top Artists" />
            <ArtistList />
        </div>
    )
}

export default ArtistContainer;