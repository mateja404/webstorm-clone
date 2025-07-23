"use client";

import React, { useState } from 'react';
import Image from "next/image";
import jetbrainslogo from "@/public/jetbrainslogo.svg";
import Link from "next/link";
import { Search, ShoppingCart, UserRound, Menu, ChevronDown } from "lucide-react";

const Header = () => {
    const [isOpen, setIsOpen] = useState(false);
    return (
        <header className="w-full flex relative z-10 h-auto xl:h-[150px] bg-[#18181c]">
            <div className="absolute w-full h-1/2 hidden xl:block">
                <div className="w-full h-full border-1 border-t-0 border-l-0 border-r-0 border-b-gray-500/30 flex flex-row items-center justify-between pt-[7px] pb-[5p7] pl-30 pr-30">
                    <Image src={jetbrainslogo} alt={"jetbrainslogo"} width={170}/>
                    <ul className="flex flex-row gap-x-6 text-md  text-zinc-400 items-center">
                        <li><Link href={"/"} className="hover:text-white">AI</Link></li>
                        <li><Link href={"/"} className="hover:text-white transition-all duration-200">Developers Tools</Link></li>
                        <li><Link href={"/"} className="hover:text-white transition-all duration-200">Team Tools</Link></li>
                        <li><Link href={"/"} className="hover:text-white transition-all duration-200">Education</Link></li>
                        <li><Link href={"/"} className="hover:text-white transition-all duration-200">Solutions</Link></li>
                        <li><Link href={"/"} className="hover:text-white transition-all duration-200">Support</Link></li>
                        <li><Link href={"/"} className="hover:text-white transition-all duration-200">Store</Link></li>
                        <li className="pt-[3px] pb-[3px] pl-[7px] pr-[7px] rounded-full hover:bg-zinc-700 group cursor-pointer"><Search className="w-[17px] group-hover:text-white"/></li>
                        <li className="pt-[3px] pb-[3px] pl-[7px] pr-[7px] rounded-full hover:bg-zinc-700 group cursor-pointer"><UserRound className="w-[17px] group-hover:text-white"/></li>
                        <li className="pt-[3px] pb-[3px] pl-[7px] pr-[7px] rounded-full hover:bg-zinc-700 group cursor-pointer"><ShoppingCart className="w-[17px] group-hover:text-white"/></li>
                    </ul>
                </div>
                <div className="w-full h-full flex flex-row items-center justify-between pt-[7px] pb-[5p7] pl-30 pr-30">
                    <ul className="flex flex-row gap-x-3 items-center">
                        <li className="text-white text-xl font-bold"><Link href={"/"}>WebStorm</Link></li>
                        <p className="pt-1 pb-1 pl-2 pr-2 bg-[#313133] rounded-sm text-[13px] cursor-pointer text-gray-400">JetBrains IDEs</p>
                    </ul>
                    <ul className="flex flex-row gap-x-3 items-center">
                        <li><Link href={"/"} className="text-gray-300">Coming in 2025.2</Link></li>
                        <li><Link href={"/"} className="text-gray-300">What's New</Link></li>
                        <li><Link href={"/"} className="text-gray-300">Features</Link></li>
                        <li><Link href={"/"} className="text-gray-300">Learn</Link></li>
                        <li><Link href={"/"} className="text-white pt-[10px] pb-[10px] pl-[20px] pr-[20px] border-1 border-zinc-500 rounded-full hover:bg-zinc-800 transition-all duration-200">Pricing</Link></li>
                        <li><Link href={"/"} className="text-white pt-[10px] pb-[10px] pl-[20px] pr-[20px] bg-blue-600 rounded-full hover:bg-blue-700 transition-all duration-200">Download</Link></li>
                    </ul>
                </div>
            </div>
            <div className="w-full h-auto flex flex-col xl:hidden">
                <div className="w-full h-auto pt-3 pb-3 pl-5 pr-5 max-h-[50px] flex flex-row justify-between border-1 border-b-gray-500/30 border-t-0 border-l-0 border-r-0">
                    <Image src={jetbrainslogo} alt={"jetbrainslogo"} width={110}/>
                    <h1 className="text-gray-300/80 mx-auto font-bold">WebStorm</h1>
                    <div className="flex flex-row gap-x-5 text-zinc-400">
                        <Search className="w-[17px]"/>
                        <Menu className="w-[17px]"/>
                    </div>
                </div>
                <div className="w-full h-auto bg-[#18181c] p-5 max-h-1/3 flex flex-row justify-between">
                    <ul className="flex flex-row gap-x-3  justify-between w-full">
                        <h1 className="text-gray-400 flex gap-x-3">Overview <ChevronDown /></h1>
                        <li><Link href={"/"} className="text-white pt-[10px] pb-[10px] pl-[20px] pr-[20px] bg-blue-600 rounded-full hover:bg-blue-700 transition-all duration-200">Pricing</Link></li>
                    </ul>
                </div>
            </div>
        </header>
    );
};

export default Header;