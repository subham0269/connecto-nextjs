'use client';

import { useCallback, useEffect, useState, type FC } from "react";
import Link from "next/link";
import logo from '@/public/Images/logo.svg'
import searchIcon from '@/public/Images/search-icon.svg'
import downArrow from '@/public/Images/down-arrow.svg';
import Image from "next/image";
import Button from "./Base/PrimaryBtn";
import Modal from "./Modal/Modal";
import UserAuth from "./auth/UserAuth";
import { usePathname } from "next/navigation";

const Navbar : FC = () => {
    const [isVisible, setVisible] = useState(true);
    const [lastScrollY, setScrollY] = useState(0);
    const [modalOpen, setModalOpen] = useState(false);
    const currentPath = usePathname();

    const handleModal = () => setModalOpen(true);
    const closeModal = () => setModalOpen(false);

    const handleScroll = useCallback (() => {
        const currentScrollY = window.scrollY;
        if (currentScrollY > lastScrollY) {
            setVisible(false);
        } else {
            setVisible(true);
        }
        setScrollY(currentScrollY);
    }, [lastScrollY]);

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, [handleScroll]);

    // Disable scrolling on modal open

    useEffect(() => {
        if (modalOpen) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "auto";
        }
    }, [modalOpen]);

    if(currentPath === '/dashboard') return null; //Returning null if the dashboard route is active
    
    return (
        <nav className={`bg-white sticky top-0 z-40 w-full mb-8 transition-all delay-100 duration-100 ease-in-out ${!isVisible ? 'drop-shadow-md' : 'drop-shadow-none'}`}>
            <div className="mx-auto max-w-[1333px] py-4 px-10 md:px-20 flex justify-between items-center sm:space-x-5 md:space-x-16">
            <Link href='/'><Image src={logo} alt="logo" /></Link>
            <div className="relative grow">
                <Image className="absolute top-2 left-2 size-5" src={searchIcon} loading="lazy" alt="search-icon" aria-hidden/>
                <input id="search" name="search" className="w-full pl-9 py-2 rounded-md bg-[#D9D9D95C] focus:outline-none focus:ring-2 focus:ring-[#908BF7] text-sm" placeholder="Search for Events" />

            </div>
                <div className="flex justify-between items-center sm:space-x-6">
                    <button className=" flex space-x-2 justify-center items-center"><span className="text-sm">Kolkata</span><Image src={downArrow} alt="arrow-down" /></button>

                    <Button text="Sign in" onClick={handleModal} />
                </div>
            </div>
            <div className={`absolute z-40 w-full overflow-hidden bg-[#D9D9D9B6] backdrop-blur-md grid transition-all duration-200 ease-in-out ${isVisible ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'}`}>
                <div className="overflow-hidden text-[14px] flex justify-around text-[#000000C7] mx-auto space-x-10">
                    <Link className="hover:underline py-1" href='/events'>Events near me</Link>
                    <Link href={''} className="hover:underline py-1">Trending Events</Link>
                    <Link href={''} className="hover:underline py-1">Become an Organizer</Link>
                </div>
            </div>

            {/* Modal component */}
            <Modal isOpen={modalOpen} onClose={closeModal}>
                <UserAuth />
            </Modal>
        </nav>
    )
}

export default Navbar