"use client";
import React from "react";
import Image from "next/image";
import Typed from "react-typed";
import mypic from "../assets/mypic.jpg";
import Link from "next/link";
const Hero = () => {
  return (
    <div className="bg-black">
      <div className="lg:m-22 md:pl-14 m-8 flex flex-row pb-16">
        <div className="flex lg:basis-2/3 md:basis-2/3 ">
          <div>
            <p className="lg:text-2xl text-xl text-center font-bold pl-8 pb-6 pt-20">
              Hello, I am Parthiba Mukhopadhyay
            </p>
            <p className="lg:text-5xl text-4xl text-center font-bold pl-8 pb-6 ">
              Wondering Who am I?
            </p>
            <p className="lg:text-3xl text-2xl text-center font-bold pl-8 pb-6 ">
              Welcome to my story!
            </p>
            <div className="flex">
            <p className="lg:text-3xl text-2xl  font-bold pl-8 ">
              I am 
            </p>
            <Typed
              className="text-white lg:text-3xl text-2xl font-bold pl-2 "
              strings={[" a Programmer", " a Web developer", " a ML Enthusiast", " so much more..."]}
              typeSpeed={180}
              backSpeed={180}
              loop
            />
            </div>
            <p className="p-8 mr-4">
              HMT Architects, is a visionary design firm with extensive
              experience in Architecture, Interior, and Infrastructure. Our team
              has proven our excellence as one of Chennai's top architectural
              firms. Our success stems from a process-driven approach and
              unwavering commitment to fulfilling our clients' desires.
            </p>
            <Link href="/projects">
              <button className="bg-[#0e3548] ml-8 p-3 text-white rounded-md font-semibold hover:text-yellow-400">
                Explore
              </button>
            </Link>
          </div>
        </div>
        <div className="hidden md:flex  md:pt-20 lg:items-center pr-20 lg:pt-0">
          <Image src={mypic} width={400} height={400} alt="hmt" />
        </div>
      </div>
    </div>
  );
};

export default Hero;
