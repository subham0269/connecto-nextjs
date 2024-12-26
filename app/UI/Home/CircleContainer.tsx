import { Suspense, type FC } from "react"
import mic from '@/public/Images/Home/mic.svg';
import ArtistList from "./CircleList";
import SubSectionHeading from "../Base/HomeSubSection";
import { Container } from "@/app/Interfaces/components/Home";

const Fb = () => {
    return (
        <div>Loading list</div>
    )
};

const CircleContainer:FC<Container> = async ({heading, url}) => {

    return (
        <div className="space-y-4">
            <SubSectionHeading url={url} imgURL={mic} heading={heading} />
            <Suspense fallback={<Fb />}>
                <ArtistList />
            </Suspense>
        </div>
    )
}

export default CircleContainer;