import { global } from "@/app/Interfaces/components/Global";
import type { FC } from "react";

const GlobalStyles:FC<global> = ({children}) => {
    return (
        <div className="max-w-[1260px] p-12 mx-auto">
            {children}
        </div>
    )
}

export default GlobalStyles;