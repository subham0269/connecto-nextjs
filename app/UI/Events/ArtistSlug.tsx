import Link from "next/link";
import Image from "next/image";
import xICON from '@/public/Images/Events/x.svg';
import snapICON from '@/public/Images/Events/Snapchat.svg';
import instaICON from '@/public/Images/Events/Instagram.svg';


const Artist = () => {
    return (
    <>
        <div className="flex items-center justify-start space-x-4">
            <img src="./images/artists/taylor.png" className="size-24" loading="lazy" alt="artist-img" />
            <span className="text-[#000000BF] text-xl font-semibold">Taylor Swift</span>
        </div>
        <ul className="space-y-3">
            <li>
                <Link href="/" className="flex items-center justify-start space-x-2 group">
                    <Image quality={100} src={instaICON} loading="lazy" alt="Instagram-logo" />
                    <span className="group-hover:underline">@taylorswift</span>
                </Link>
            </li>
            <li>
                <Link href={"/"} target="_blank" className="flex items-center justify-start space-x-2 group">
                    <Image src={xICON} loading="lazy" alt="x-logo" />
                    <span className="group-hover:underline">taylorrr</span>
                </Link>
            </li>
            <li>
                <Link href={"/"} target="_blank" className="flex items-center justify-start space-x-2 group">
                    <Image src={snapICON} loading="lazy" alt="snapchat-logo" />
                    <span className="group-hover:underline">taylorsnaps</span>
                </Link>
            </li>
        </ul>
    </>
    )
}
export default Artist;