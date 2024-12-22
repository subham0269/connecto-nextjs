import { StaticImageData } from "next/image";


export interface Container {
    url: string;
    heading: string;
}

export interface SubSectionHead {
    url: string;
    imgURL: string;
    heading: string;
}

export interface AtomicCard {
    img: StaticImageData;
    name: string;
}