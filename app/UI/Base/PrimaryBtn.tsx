import type { FC } from "react";
import { PrimaryButtonProps } from "@/app/Interfaces/components/ButtonProps";

const Button : FC<PrimaryButtonProps> = ({text, onClick, className}) => {
    return (
        <button onClick={onClick} className={`bg-primary px-4 py-2 text-white text-sm font-medium rounded-md ${className}`}>
            {text}
        </button>
    )
}

export default Button;