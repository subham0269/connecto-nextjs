import type { FC } from "react";
import SubSectionHeading from "../Base/HomeSubSection";
import profile from '@/public/Images/Home/profile-circle.svg';
import CircleList from "./CircleList";

const OrgContainer:FC = () => {
    return (
        <div className="space-y-4">
            <SubSectionHeading url='/organizers' imgURL={profile} heading="Top Organizers" />
            <CircleList  />
        </div>
    )
}
export default OrgContainer;