"use client";
import React from "react";
import Image from "next/image";
import Typed from "react-typed";
import myavatar1 from "../assets/myavatar1.png";
import Link from "next/link";
const About = () => {
  return (
    <div className="bg-black">
      <div className="lg:m-22 md:pl-14 m-8 flex flex-row pb-16">
        <div className="flex lg:basis-2/3 md:basis-2/3 ">
          <div>
            <p className="text-7xl p-4">About Me</p>
            <div className="flex">
              <p className="lg:text-3xl text-2xl text-white font-bold pl-8 pt-3 ">
                I am
              </p>
              <Typed
                className="text-white lg:text-3xl text-2xl font-bold pl-2 pt-3"
                strings={[
                  " a Programmer",
                  "a Designer",
                  " a Web developer",
                  " a ML Enthusiast",
                  " so much more...",
                ]}
                typeSpeed={180}
                backSpeed={180}
                loop
              />
            </div>
            <p className="p-8 text-white mr-4">
              I'm a pre-final year B.Tech student
              majoring in Computer Science Engineering at VIT Chennai. I excel
              in UI design and full-stack development. My expertise lies in AI
              and ML, with a track record of crafting effective ML models for
              various projects. 
              <br></br><br></br> Let's connect and achieve great results
              together!
            </p>
            <div>
                <div className="pl-7 pb-3">
                    <ul className="flex gap-3">
                        <li>Instagram</li>
                        <li>LinkedIn</li>
                        <li>Twitter</li>
                        <li>GitHub</li>
                        <li>Facebook</li>
                        <li>Medium</li>

                    </ul>
                </div>
            </div>
            <div className="p-4">
                <div>
                    <p className="text-3xl font-semibold">EXPERIENCE</p>
                </div>
                <div className="p-3">
                    <p className="text-xl bg-gradient-to-br from-yellow-300 to-orange-500 bg-clip-text text-transparent">Aug'23 - Oct'23</p>
                    <p>HMT Architects</p>
                    <p>Web Developer Intern</p>
                </div>
                <div className="p-3">
                    <p >Sep'23 - Present</p>
                    <p>Alpha Code Labs</p>
                    <p>Full stack Developer Intern</p>
                </div>
            </div>
          </div>
        </div>
        <Image
          src={myavatar1}
          className="h-5/6 w-52 flex pt-3 items-center"
          alt="parthiba"
        />
      </div>
    </div>
  );
};

export default About;
