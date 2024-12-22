import Link from "next/link";
import type { FC } from "react"
import ArtistCard from "./ArtistCard";
import { AtomicCard } from "@/app/Interfaces/components/Home";
import { getTopArtists, wait } from "@/app/db/GET";
// import { getTopArtists } from "@/db/GET";

const CircleList:FC = async () => {
    const topArtists = await getTopArtists();
    // await new Promise(res => setTimeout(res, 2000))
    return (
        <div className="flex flex-col md:flex-row space-y-6 space-x-0 md:space-x-10 md:space-y-0 items-start md:justify-center">
            {topArtists?.map((artist: AtomicCard, i: number) => (
                <Link key={i} href="/">
                    <ArtistCard img={artist.img} name={artist.name} />
                </Link>
            ))}
        </div>
    );
};

export default CircleList;