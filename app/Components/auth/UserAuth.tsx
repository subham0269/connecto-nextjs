'use client';

import { ChangeEvent, useState, type FC } from "react";
import Image from "next/image";
import Link from "next/link";
import google from '@/public/Images/google.svg';
import sms from '@/public/Images/sms.svg';
import flag from '@/public/Images/flag.svg';

const UserAuth : FC = () => {
    const [emailLogin, setEmailLogin] = useState(false);
    const [email, setEmail] = useState('');
    const [tel, setTel] = useState('');

    const onInputChange = (e:ChangeEvent<HTMLInputElement>) => {
        if (e.target.value == 'tel') {
            setTel(e.target.value);
        } else {
            setEmail(e.target.value);
        }
    }

    const handleSubmit = (e:ChangeEvent<HTMLFormElement>) => {
        e.preventDefault();
        console.log(email, tel);
        
    }

    return (
        <div className="">
            <p className="text-center text-2xl selection-none font-medium">Get Started</p>
            <div className="mt-8 space-y-7">
                <div className="space-y-5">
                    <Link href='/' className="border-[2px] border-[#7F7F7F] hover:border-primary transition duration-200 ease-in-out flex items-center p-2 rounded-md">
                        <Image src={google} width={18} height={18} className="" alt="google-logo" aria-hidden />
                        <div className="grow text-center text-sm md:text-md">Continue with Google</div>
                    </Link>
                    { !emailLogin ? (
                    <div onClick={() => setEmailLogin(!emailLogin)} className="border-[2px] border-[#7F7F7F] hover:border-[#5A52FF] transition duration-200 ease-in-out flex items-center p-2 rounded-md hover:cursor-pointer">
                        <Image src={sms} width={20} height={20} className="" alt="mail-logo" aria-hidden />
                        <div className="grow text-center text-sm md:text-md">Continue with Email</div>
                    </div>
                    ) : (
                    <div onClick={() => setEmailLogin(!emailLogin)} className="border-[2px] border-[#000000BF] hover:border-[#5A52FF] transition duration-200 ease-in-out flex items-center p-2 rounded-md hover:cursor-pointer">
                        <Image src={sms} width={20} height={20} className="" alt="mail-logo" aria-hidden />
                        <div className="grow text-center text-sm md:text-md">Continue with Mobile</div>
                    </div>
                    )}
                    
                </div>
                <div className="pointer-events-none text-[#000000A6] text-lg text-center ">Or</div>
                {emailLogin ?
                    <div className="flex justify-center items-center space-x-2">
                        <Image src={sms} loading="lazy" alt="email-logo" />
                        <form className="w-full" onSubmit={handleSubmit}>
                        <input value={email} onChange={onInputChange} type="email" className="w-full focus:outline-none border-b-2 border-[#0000007A] focus:border-[#5A52FF]" placeholder="Continue with email" />
                        </form>
                    </div>
                    :
                    <div className="flex justify-center items-center space-x-2">
                        <Image src={flag} loading="lazy" alt="India-flag" />
                        <span className="pointer-events-none text-[#000000BF]">+91</span>
                        <input value={tel} onChange={onInputChange} type="tel" className="grow focus:outline-none border-b-2 border-[#0000007A] focus:border-[#5A52FF]" placeholder="Continue with Phone number" />
                    </div>
                }
                <p className="text-[#000000A3] text-sm text-center pt-6">I agree to <span className="text-black underline"><Link href='/terms'>terms & conditions</Link></span> and <span className="text-black underline"><Link href='policy'>Privacy Policy</Link></span></p>
            </div>
        </div>
    )
}

export default UserAuth;