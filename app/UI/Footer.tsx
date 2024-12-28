'use client'

import type { FC } from "react";
import { FooterProps, FooterSocialsProps, FooterSubListProps } from "../Interfaces/components/Footer";
import Link from "next/link";
import Image from "next/image";
import facebook from '@/public/Images/Footer/facebook.svg';
import instagram from '@/public/Images/Footer/instagram.svg';
import linkedin from '@/public/Images/Footer/linkedin.svg';
import discord from '@/public/Images/Footer/discord.svg';
import x from '@/public/Images/Footer/x.svg';
import logoWhite from '@/public/Images/Footer/logo-white.svg';
import { usePathname } from "next/navigation";

const NavigationList : FooterSubListProps[] = [
   {
      url: '',
      title: 'Home'
   },
   {
      url: 'events',
      title: 'Browse Events'
   },
   {
      url: 'concerts',
      title: 'Trending events in your city'
   },
   {
      url: 'sports',
      title: 'Group'
   },
   {
      url: 'aboutus',
      title: 'Contact Us'
   },
   {
      url: 'aboutus',
      title: 'FAQ'
   }
]

const TrendingEventsList : FooterSubListProps[] = [
   {
      url: 'music',
      title: 'Help Center'
   },
   {
      url: 'screening',
      title: 'User Guide'
   },
   {
      url: 'cinema',
      title: 'Terms of Service'
   },
   {
      url: 'sports',
      title: 'Privacy Policy'
   }
]

const socialsList : FooterSocialsProps[] = [
   {
      url: '',
      title: 'facebook',
      img: facebook
   },
   {
      url: '',
      title: 'instagram',
      img: instagram
   },
   {
      url: '',
      title: 'linkedin',
      img: linkedin
   },
   {
      url: '',
      title: 'x',
      img: x
   },
   {
      url: '',
      title: 'discord',
      img: discord
   }
]



const FooterCol : FC<FooterProps> = ({list, className, heading}) => {
   return (
      <div className={`space-y-5 ${className}`}>
            <h2 className="text-xl font-bold">{heading}</h2>
            <div className="flex flex-col justify-start space-y-2">
               {list.map((val : FooterSubListProps, i) => <Link key={i} href={`/${val.url}`} className="text-sm hover:underline">{val.title}</Link>)}
            </div>
      </div>
   )
};

const Newsletter = () => {
   return (
      <div className="sm:w-3/12 space-y-6">
         <p className="font-bold text-xl">Newsletter Signup</p>
         <p className="text-sm">Stay updated with the latest events and special offers. Enter your email below to subscribe.</p>
         <div className="flex items-center space-x-2 sm:space-x-4">
               <input className="w-full px-4 py-2 rounded-md bg-white text-gray-800 focus:outline-none focus:ring-2 focus:ring-[#7f538a] text-sm placeholder:text-slate-600" placeholder="Email" required />
               <button className="bg-white text-black rounded-full px-5 text-sm text-semibold py-2 transition-all duration-200 hover:bg-[#5A52FF] hover:text-white hover:shadow-md hover:shadow-[#5A52FF]">Subscribe</button>
         </div>
      </div>
   )
}

const Socials = ({list}: {list:FooterSocialsProps[]}) => {
   return (
      <ul className="flex justify-center items-center space-x-6">
            {list.map((a:FooterSocialsProps,i) => 
               <li key={i}>
                  <a href={a.url} target="_blank">
                     <Image src={a.img} loading ='lazy' alt={`${a.title}-icon`} />
                  </a>
               </li>)
            }
      </ul>
   )
}

const Footer : FC = () => {
   const isHomeRoute = usePathname() === '/'? true : false;   

   return (
      <div className="bg-black py-7 px-2 sm:px-20 max-w-full pt-20 mt-12 space-y-9 text-white">
         <div className="max-w-[1370px] mx-auto space-y-9">
            <div className="flex flex-col sm:flex-row justify-between space-y-5 sm:space-y-0">
               <div className="grow flex sm:flex-row flex-col justify-around space-y-5 sm:space-y-0 space-x-4">
                  <div className={`space-y-5 w-1/5`}>
                     <h2 className="text-xl font-bold">About Us</h2>
                     <div className="flex flex-col justify-start space-y-2">
                        <p>Connecto connects you with like-minded individuals for events, ensuring you never alone. Discover, book, and enjoy!</p>
                     </div>
                  </div>

                  <FooterCol heading={'Quick Links'} list={NavigationList} />

                  <FooterCol heading={'User Resources'} list={TrendingEventsList} />

                  <div className={`space-y-5 w-1/5`}>
                     <h2 className="text-xl font-bold">Contact</h2>
                     <div className="flex flex-col justify-start space-y-2">
                        <p>Email: <a href="mailto:support@connecto.com">support@connecto.com</a> <br/>Phone: +91-1234567890<br/><br/>Address:Connecto Pvt. Ltd.123 Connecto Street,Sector 45,Gurgaon, Haryana,India, 122003</p>
                     </div>
                  </div>
                  
                  {!isHomeRoute &&
                     <Newsletter />
                  }
               </div>
            </div>
            <Image className="mx-auto w-80" width={10} height={10} src={logoWhite} alt="logo" loading="lazy"/>
            <Socials list={socialsList} />
            <div className="max-w-72 mx-auto bg-[#FFFFFF63] rounded h-[0.5px]" />
         </div>
         <p className="text-[#FFFFFFC4] text-sm text-center select-none">@2024 Connecto. All rights reserved.</p>
      </div>
   )
}

export default Footer;