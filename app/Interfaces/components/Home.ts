import { StaticImageData } from "next/image";

export interface SubSectionHead {
    url: string;
    imgURL: string;
    heading: string;
}

export interface AtomicCard {
    imgURL: StaticImageData;
    name: string;
}