import React from 'react';
import Image from 'next/image';
import wslogo from "@/public/wslogo.svg";
import overview from "@/public/overview-video-poster.webp";
import Link from "next/link";
import Overview from "@/components/Overview";

const Hero = () => {
    return (
        <>
            <section className="w-full h-full flex flex-col-reverse hero-bg md:flex-row max-sm:gap-y-10">
                <div className="w-full xl:w-2/3 h-full flex flex-col gap-y-5 max-sm:-translate-x-23">
                    <div className="flex flex-col gap-y-3">
                        <h1 className="text-white text-5xl font-bold z-10 flex items-center flex-row gap-x-3">WebStorm</h1>
                        <span className="pt-1 pb-1 pl-2 pr-2 max-w-[210px] bg-[#fafe51] font-normal rounded-sm text-black text-sm">Free for non-commercial use</span>
                    </div>
                    <h2 className="max-sm:text-3xl text-7xl text-white font-bold">The JavaScript <br/> and TypeScript IDE</h2>
                    <p className="max-sm:text-xl font-normal text-white text-4xl">Make development more productive and enjoyable.</p>
                    <Link href={"/"} className="text-white w-[153px] h-[53px] text-lg flex items-center justify-center text-center max-w-auto bg-blue-600 rounded-full hover:bg-blue-700 transition-all duration-200">Download</Link>
                </div>
                <div className="w-full md:w-1/3 h-1/3 flex justify-center max-sm:-translate-x-45 items-start">
                    <Image src={wslogo} alt={"webstorm logo"} className="w-[100px] h-[100px]"/>
                </div>
            </section>
            <Overview/>
        </>
    );
};

export default Hero;