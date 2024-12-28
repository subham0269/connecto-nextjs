import Link from "next/link";
import { FC } from "react";


const Suggestions:FC = () => {
    return (
        <>
            {/* <div className="text-[#000000CC] text-xl font-bold">You may also like</div> */}
            <div className="flex space-x-4 justify-around items-center">
                <Link href={'/'}>
                    <img className="col-span-1" src="./images/event-poster-1.png" alt="event-poster" />
                </Link>
                <Link href={'/'}>
                    <img className="col-span-1" src="./images/event-poster-2.png" alt="event-poster" />
                </Link>
                <Link href={'/'}>
                    <img className="col-span-1" src="./images/event-poster-3.png" alt="event-poster" />
                </Link>
            </div>
        </>
    )
}

export default Suggestions;