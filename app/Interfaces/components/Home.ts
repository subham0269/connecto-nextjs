import { StaticImageData } from "next/image";


export interface Container {
    url: string;
    heading: string;
    list: AtomicCard[];
}

export interface SubSectionHead {
    url: string;
    imgURL: string;
    heading: string;
}

export interface AtomicCard {
    imgURL: StaticImageData;
    name: string;
}