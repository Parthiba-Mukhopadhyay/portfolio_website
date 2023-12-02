"use client";
import React from "react";
import Image from "next/image";
import mypic from "../assets/mypic.jpg";
import "./styles.css";

const Hero = () => {
  return (
    <div className="bg-black">
      <div className="bg-gradient-to-br from-emerald-300 to-cyan-400 to-sky-700 m-20 rounded-3xl flex justify-center items-center" style={{ width: '90%', height: '60%' }}>
        <div className="lg:m-22 md:pl-14 m-8 flex flex-row">
          <div className="flex lg:basis-2/3 md:basis-2/3">
            <div className="py-20 mr-8 text-animation">
              <p className="px-10 lg:text-4xl bg-gradient-to-r from-violet-900 to-sky-800 bg-clip-text text-transparent text-3xl text-center font-bold pb-10 pt-10">
                Hello, I am Parthiba Mukhopadhyay
              </p>
              <p className="px-4 lg:text-7xl drop-shadow-lg text-black text-6xl text-center font-bold pl-3 pb-10 ">
                Wondering Who I am?
              </p>
              <p className="px-20 lg:text-5xl bg-gradient-to-r from-pink-600 to-violet-900 bg-clip-text text-transparent text-black text-4xl text-center font-bold pb-6 ">
                Welcome to my story!
              </p>
            </div>
          </div>
          <div className="hidden md:flex lg:basis-1/3 md:basis-1/3 md:pt-20 lg:items-center pr-20 lg:p-10 image-animation ">
            <Image
              src={mypic}
              className="h-96 w-64 rounded-lg shadow-xl dark:shadow-gray-800"
              alt="parthiba"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
