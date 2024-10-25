import type { FC } from "react";
import SubSectionHeading from "../Base/HomeSubSection";
import EventsList from "./EventsList";
import forward from '@/public/Images/Home/forward.svg';

const EventsContainer:FC = () => {
    return (
        <div>
            <SubSectionHeading url="/artists" imgURL={forward} heading="Top Artists" />
            <EventsList />
        </div>
    )
}

export default EventsContainer;