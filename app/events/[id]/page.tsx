import { FC } from "react";
import HeroCard from "@/app/UI/Events/HeroCard";
import Artist from "@/app/UI/Events/ArtistSlug";

interface EventProps {
    params: Promise<{id: string}>
}

const Data = {
    eventTitle: 'THE ERAS TOUR',
    section: 'Music Documentary',
    genre: 'Pop',
    duration: '3hrs',
    date: 'sun 30 June 2024 at 4:00 pm',
    location: 'Kolkata',
    startingPrice: '$30'
}

const Event:FC<EventProps> = async ({params}) => {
    const id=(await params).id;
    return (
        <main>
            <div className="max-w-screen-lg lg:mx-auto sm:space-y-5 mt-14">
                <HeroCard {...Data} />
                <div className="grid grid-cols-1 sm:grid-cols-6 sm:space-y-0 bg-white shadow-xl rounded-lg">
                    <div className="col-span-2 pt-5 px-3 sm:px-5">
                        <div className="flex justify-between h-max">
                            <div className="space-y-5">
                                <div className="text-[#000000CC] text-2xl font-bold">Artists</div>
                                <Artist />
                            </div> 
                            <div className="w-[1.5px] bg-slate-600 rounded mt-6"/>
                        </div>
                    </div>
                    <div className="col-span-4 space-y-6 p-4 sm:p-5">
                        {/* <ArtistInfo/> */}
                    </div>
                </div>
            </div>
        </main>
    )
}

export default Event;