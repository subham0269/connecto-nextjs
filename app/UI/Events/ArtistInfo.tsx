'use client'
import { useState } from "react";
import downArr from "@/public/Images/down-arrow.svg";
import Image from "next/image";

const ArtistInfo = () => {
    const [isTCVisible, setTCVisible] = useState(false);
    return (
    <>
        <div className="space-y-3">
            <div className="text-[#000000CC] text-2xl font-bold">About</div>
            <p className="leading-6">Experience Taylor Swift&apos;s Eras Tour, a breathtaking journey through her musical evolution. Enjoy unforgettable live performances, captivating visuals, and the chance to connect with fellow fans. Join us for an evening of iconic hits and magical moments.</p>
        </div>
        <div>
            <button onClick={() => setTCVisible(!isTCVisible)} className="text-[#000000CC] text-xl font-bold flex justify-center items-center space-x-3 transition-all duration-200 ease-in-out">
                <span>Terms & Conditions</span>
                <Image className={` transition duration-200 ease-in-out ${isTCVisible ? 'rotate-180' : 'rotate-0'}`} src={downArr} alt="arrow-down" />
            </button>
            <div className={`overflow-hidden grid transition duration-200 ease-in ${isTCVisible ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'}`}>
                <div className="overflow-hidden">Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid repellendus at officia molestias dolorum quae eum ducimus labore inventore hic placeat a, voluptate qui eaque explicabo commodi? Dolores, eveniet modi! Lorem, ipsum dolor sit amet consectetur adipisicing elit. Tenetur nulla similique rerum voluptate voluptas fuga sunt dolorum aut necessitatibus? Consequuntur atque quam dolor aut quibusdam modi, accusantium numquam. Vel, cupiditate? Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi modi optio ullam quibusdam quisquam quas. Suscipit est provident nemo rem. Assumenda, soluta deleniti inventore libero provident recusandae doloribus. Animi, perspiciatis? Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita in vero porro reprehenderit molestiae error explicabo hic iusto omnis nihil sit, rerum quas quisquam natus sunt quaerat consequatur. Debitis, eaque. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Fugit hic ratione obcaecati tempora laboriosam excepturi dolores quasi numquam nesciunt velit, molestias atque reiciendis voluptatem inventore est corporis facilis. Facere, illo.</div>
            </div>
        </div>
        </>
    )
}
export default ArtistInfo;