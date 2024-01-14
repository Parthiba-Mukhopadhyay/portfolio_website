// components/Hero.js

import React from "react";
import Image from "next/image";
import mypic1 from "../assets/mypic1.jpg";
import Link from "next/link";
import "./styles.css";

const Hero = () => {
  return (
    <div className="relative text-white py-2 overflow-hidden opacity-0 animate__animated animate__fadeIn ml-20" id="Hero">
      <div className="container mx-auto relative z-10 flex flex-col items-center mt-8">
        <div className="flex items-center mb-8">
          <div className="w-2 h-2 bg-gradient-to-br from-yellow-300 to-orange-500 rounded-full mr-4 animate-bounce"></div>
          <div className="rounded-full overflow-hidden shadow-sm shadow-white">
            <div className="w-48 h-48 ring-4 ring-gray-700 shadow-lg overflow-hidden">
              <Image src={mypic1} alt="Profile Picture" className="object-cover object-center w-full h-full rounded-full" />
            </div>
          </div>
          <div className="w-2 h-2 bg-gradient-to-br from-yellow-300 to-orange-500 rounded-full ml-4 animate-bounce"></div>
        </div>
        <h1 className="text-4xl font-extrabold mb-6 text-center leading-tight">
          Hey there! I'm{" "}
          <span className="bg-gradient-to-br from-yellow-300 to-orange-500 bg-clip-text text-transparent font-semibold">
            Parthiba Mukhopadhyay
          </span>
          ,<br /> your digital wizard crafting wonders in the dark.
        </h1>
        <p className="text-lg mb-8 text-center">
          Obsessed with pixels, lines of code, and turning dreams into immersive
          digital experiences. By day, I code. By night, I dream in RGB.
        </p>
        <p className="text-gray-400 max-w-md text-center mb-5">
          Let's bring new ideas to life!🌌✨
        </p>
        <Link href="#contact">
          <button className="bg-gradient-to-br from-yellow-300 to-orange-500 hover:scale-110 ease-in-out duration-300 text-white py-2 px-4 rounded-full mt-6 hover:bg-pink-600 transition shadow-md">
            Lets Connect!
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Hero;
