"use client";

import React from "react";
import Image from "next/image";
import { TypeAnimation } from "react-type-animation";
const HeroSection = () => {

    return (
    <section>
        <div className="grid grid-cols-1 sm:grid-cols-12">
            <div className="col-span-7 place-self-center text-center sm:text-left">
                <h1 className="text-white mb-4 text-4xl sm:text-5xl lg:text-6xl font-extrabold">
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-slate-500 to-gray-700">Hello, I'm {""}</span> 
                   <TypeAnimation
                   sequence={[
                    "PACO",
                    1000,
                    "Web Developer",
                    1000,
                    "UI/UX Designer",
                    1000,
                   ]}
                   wrapper="span"
                   speed={50}
                   repeat={Infinity}
                   />

                   
                </h1>
                <p className="text-[#ADB7BE] text-base sm:text-lg lg:text-xl">
                    ...
                </p>
                <div>
                    <button className="px-6 py-3 w-full sm:w-fit rounded-full mr-4 bg-white text-black bg-gradient-to-br from-slate-500 to-gray-700">Hire Me</button>
                    <button className="px-1 py-1 w-full sm:w-fit rounded-full bg-gradient-to-br from-gray-500 to-slate-400 hover:bg-slate-800 text-white mt-3">
                        <span className="block bg-[#121212] hover:bg-slate-800 rounded-full px-5  py-2"><a href="cv/Felix-Laurente-Resume.pdf" download="cv/Felix-Laurente-Resume.pdf">Download CV</a></span>
                    </button>
                </div>
            </div>
            <div className="col-span-5 place-self-center mt-4 lg:mt-0">
                <div className="rounded-full bg-[#181818] w-[200px] h-[200px] lg:w-[400px] lg:h-[400px] relative">
                    <Image
                    src="/images/hero-image.png"
                    alt="hero image"
                    className="absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
                    width={300}
                    height={300}
                    />
            </div>
          </div>
        </div>
    </section>
    );
};


export default HeroSection;