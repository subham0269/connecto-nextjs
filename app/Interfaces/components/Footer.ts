export interface FooterProps {
    heading: string;
    list: FooterSubListProps[];
    className?: string;
}

export interface FooterSubListProps {
    url: string;
    title: string;
}

export interface FooterSocialsProps {
    url: string;
    title: string;
    img: string;
}