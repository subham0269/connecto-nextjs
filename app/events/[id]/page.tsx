import { FC } from "react";

interface EventProps {
    params: Promise<{id: string}>
}

const Event:FC<EventProps> = async ({params}) => {
    const id=(await params).id;
    return (
        <main>{id}</main>
    )
}

export default Event;