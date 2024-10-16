import type { FC } from "react";
import { NavbarModal } from "../../Interfaces/components/NavProps";
import { createPortal } from "react-dom";

const Modal: FC<NavbarModal> = ({isOpen, onClose, children}) => {

    console.log(isOpen, "From modal component");
    
    if (!isOpen) return null;
    
    return createPortal(
        <div className="fixed inset-0 z-50 bg-primary/5 backdrop-blur-sm flex justify-center items-center overflow-y-auto">
            <div className="bg-white px-4 pb-4 pt-6 relative">
                <button className="absolute right-4 top-4" onClick={onClose}>Close</button>
                {children}
            </div>
        </div>,document.body
    )
}

export default Modal;