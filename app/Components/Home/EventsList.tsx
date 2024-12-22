import { AtomicCard } from "@/app/Interfaces/components/Home";
import { eventsTestList } from "@/app/tests";
import type { FC } from "react"
import EventCard from "./EventCard";
import Link from "next/link";

const SquareList:FC = () => {
    return (
        <div className="flex flex-col md:flex-row space-y-6 space-x-0 md:space-x-10 md:space-y-0 items-start md:justify-center">
            {eventsTestList.map((d:AtomicCard, i:number) => 
                <Link key={i} href={'/events'}>
                    <EventCard key={i} img={d.img} name={d.name} />
                </Link>
            )}
        </div>
    )
}

export default SquareList;