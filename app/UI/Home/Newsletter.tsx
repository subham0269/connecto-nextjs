import Image from "next/image";
import { FC } from "react";
import NewsImg from '@/public/Images/Home/newsletter.svg';

const NewsLetterJoin:FC = () => {
    return (
        <div className="bg-[#D7B4E4] flex justify-around items-center">
            <div className="space-y-12">
                <div className="space-y-5">
                <p className="font-bold text-4xl text-white">Discover Events, <span className="text-black">Make</span> Friends!</p>
                <p className="text-white font-medium text-base">Join trending events, meet new friends,<br />and create unforgettable memories!</p>
                </div>
                <div className="flex items-center space-x-4 pr-7">
                <input className="w-full px-4 py-2 rounded-md bg-white focus:outline-none focus:ring-2 focus:ring-[#7f538a] text-sm" placeholder="Email" />
                <button className="bg-white text-black rounded-full hover:shadow-sm px-5 text-sm py-2">Subscribe</button>
                </div>
            </div>
            <Image src={NewsImg} loading="lazy" alt="newsletter-img" />
        </div>
    )
}

export default NewsLetterJoin;