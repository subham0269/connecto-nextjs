import type { FC } from "react"
import SubSectionHeading from "../base/HomeSubSection";
import mic from '@/public/Images/Home/mic.svg';

const ArtistContainer:FC = () => {
    return (
        <div>
            <SubSectionHeading url="/artists" imgURL={mic} heading="Artists" />
        </div>
    )
}

export default ArtistContainer;