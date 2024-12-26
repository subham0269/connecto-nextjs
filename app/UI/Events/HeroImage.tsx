import Image, { StaticImageData } from "next/image";
import { FC } from 'react';
interface ImageProp {
    poster:StaticImageData;
}

const HeadingImage:FC<ImageProp> = ({ poster }) => {
    return (
    <div className="relative w-full h-full sm:h-[450px] overflow-hidden">
        <Image width={100} height={100} quality={100} className="h-full w-auto relative mx-auto drop-shadow-md" src={poster} loading="lazy" alt="Foreground Poster"/>
    </div>
    )
}
export default HeadingImage;