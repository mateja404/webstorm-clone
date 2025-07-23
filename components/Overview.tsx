import React from 'react';
import Image from "next/image";
import overview from "@/public/overview-video-poster.webp";
import {Play} from "lucide-react";

const Overview = () => {
    return (
        <div className="max-w-7xl mx-auto mt-5 xl:-mt-20 flex items-center justify-center relative">
            <Image src={overview} alt={"overview"} className="rounded-4xl"/>
            <div className="pt-3 pb-3 pl-5 pr-5 gap-x-3 md:text-xl cursor-pointer flex-row items-center flex justify-center rounded-full bg-white absolute top-1/2 left-1/2 -translate-1/2"><Play /> Watch video</div>
        </div>
    );
};

export default Overview;