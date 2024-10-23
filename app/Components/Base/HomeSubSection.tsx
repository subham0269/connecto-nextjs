import { SubSectionHead } from "../../Interfaces/components/Home";
import Image from "next/image";
import Link from "next/link";
import type { FC } from "react"

const SubSectionHeading:FC<SubSectionHead> = ({url, imgURL, heading}) => {
    return (
        <div className="flex justify-between w-full">
            <div className="flex space-x-1 items-center">
                <Image className="size-6" width={10} height={10} src={imgURL} alt={`${heading}-logo`} loading="lazy" />
                <h2>Artists</h2>
            </div>
            <Link className="hover:underline text-semibold" href={url}>See more</Link>
        </div>
    )
}

export default SubSectionHeading;