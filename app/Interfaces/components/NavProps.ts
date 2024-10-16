import React from "react";

export interface NavbarModal {
    isOpen: boolean;
    onClose: () => void;
    children: React.ReactNode;   
}