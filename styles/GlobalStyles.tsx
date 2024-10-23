import { global } from "@/app/Interfaces/components/Global";
import type { FC } from "react";

const GlobalStyles:FC<global> = ({children}) => {
    return (
        <div className="max-w-[600px] px-10 space-y-12">
            {children}
        </div>
    )
}

export default GlobalStyles;