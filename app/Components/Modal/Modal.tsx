import type { FC } from "react";
import { NavbarModal } from "../../Interfaces/components/NavProps";
import { createPortal } from "react-dom";

const Modal: FC<NavbarModal> = ({isOpen, onClose, children}) => {

    console.log(isOpen, "From modal component");
    
    if (!isOpen) return null;
    
    return createPortal(
        <div className="fixed inset-0 z-50 bg-primary/5 backdrop-blur-sm flex justify-center items-center overflow-y-auto w-full">
            <div className="bg-white px-4 pb-4 pt-6 relative max-w-[450px] w-[92%] md:w-full rounded-md">
                <button className="absolute right-3 top-3 text-3xl size-10" onClick={onClose}>&times;</button>
                {children}
            </div>
        </div>,document.body
    )
}

export default Modal;