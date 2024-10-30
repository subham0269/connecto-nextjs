import Link from "next/link";
import type { FC } from "react"
import ArtistCard from "./ArtistCard";
import { AtomicCard } from "@/app/Interfaces/components/Home";
import { artistTestList } from "@/app/tests";

const CircleList:FC = () => {
    
    return (
        <div className="flex flex-col md:flex-row space-y-6 space-x-0 md:space-x-10 md:space-y-0 items-start md:justify-center">
        {artistTestList.map((l:AtomicCard, i:number) => {
            return (
                <Link key={i} href="/">
                    <ArtistCard imgURL={l.imgURL} name={l.name} />
                </Link>
            )
        })}
        </div>
    )
}

export default CircleList;