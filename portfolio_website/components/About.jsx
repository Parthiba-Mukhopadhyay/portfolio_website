"use client";
import React from "react";
import Image from "next/image";
import Typed from "react-typed";
import myavatar1 from "../assets/myavatar1.png";
import instagram from "../assets/icons/instagram.svg";
import linkedin from "../assets/icons/linkedin.svg";
import X from "../assets/icons/x.svg";
import github from "../assets/icons/github.svg";
import facebook from "../assets/icons/facebook.svg";
import medium from "../assets/icons/medium.svg";
import leetcode from "../assets/icons/leetcode.svg";
import hackerrank from "../assets/icons/hackerrank.svg";
import stackoverflow from "../assets/icons/stackoverflow.svg";
import Link from "next/link";
const About = () => {
  return (
    <div className="bg-black">
      <div className="lg:m-22 md:pl-14 m-8 flex flex-row ">
        <div className="flex lg:basis-2/3 md:basis-2/3 ">
          <div>
            <p className="text-7xl p-4">About Me</p>
            <div className="flex">
              <p className="lg:text-3xl text-2xl text-white font-bold pl-8 pt-3 ">
                I am
              </p>
              <Typed
                className=" lg:text-3xl text-2xl font-bold pl-2 pt-3 bg-gradient-to-br from-yellow-300 to-orange-500 bg-clip-text text-transparent"
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
            <p className="px-8 pb-4 text-white mr-4">
              I'm a pre-final year B.Tech student majoring in Computer Science
              Engineering at VIT Chennai. I excel in UI design and full-stack
              development. My expertise lies in AI and ML, with a track record
              of crafting effective ML models for various projects.
            </p>
            <p className="px-8 pb-4 font-semibold text-lg bg-gradient-to-br from-yellow-300 to-orange-500 bg-clip-text text-transparent mr-4"> Let's connect and achieve great results together!</p>
            <div>
              <div className="pl-7 pb-3">
                <ul className="flex gap-4">
                  <li>
                    <Image
                      src={instagram}
                      className="h-10 w-10 hover:animate-bounce rounded-lg shadow-xl dark:shadow-gray-800"
                      alt="instagram"
                    />
                  </li>
                  <li>
                    <Image
                      src={linkedin}
                      className="h-10 w-10 hover:animate-bounce rounded-lg shadow-xl dark:shadow-gray-800"
                      alt="linkedin"
                    />
                  </li>
                  <li>
                    <Image
                      src={X}
                      className="h-10 w-10 hover:animate-bounce rounded-lg shadow-xl dark:shadow-gray-800"
                      alt="X"
                    />
                  </li>
                  <li>
                    <Image
                      src={github}
                      className="h-10 w-10 hover:animate-bounce rounded-lg shadow-xl dark:shadow-gray-800"
                      alt="github"
                    />
                  </li>
                  <li>
                    <Image
                      src={facebook}
                      className="h-10 w-10 hover:animate-bounce rounded-lg shadow-xl dark:shadow-gray-800"
                      alt="facebook"
                    />
                  </li>
                  <li>
                    <Image
                      src={medium}
                      className="h-10 w-10 hover:animate-bounce rounded-lg shadow-xl dark:shadow-gray-800"
                      alt="medium"
                    />
                  </li>
                  <li>
                    <Image
                      src={stackoverflow}
                      className="h-10 w-10 hover:animate-bounce rounded-lg shadow-xl dark:shadow-gray-800"
                      alt="stackoverflow"
                    />
                  </li>
                  <li>
                    <Image
                      src={leetcode}
                      className="h-10 w-10 hover:animate-bounce rounded-lg shadow-xl dark:shadow-gray-800"
                      alt="leetcode"
                    />
                  </li>
                  <li>
                    <Image
                      src={hackerrank}
                      className="h-10 w-10 hover:animate-bounce rounded-lg shadow-xl dark:shadow-gray-800"
                      alt="hackerrank"
                    />
                  </li>
                </ul>
              </div>
            </div>
            <div className="p-4">
              <div>
                <p className="text-3xl font-semibold">EXPERIENCE</p>
              </div>
              <div className="p-3">
                <p className="text-xl bg-gradient-to-br from-yellow-300 to-orange-500 bg-clip-text text-transparent font-semibold">
                  Aug'23 - Oct'23
                </p>
                <p>HMT Architects</p>
                <p>Web Developer Intern</p>
              </div>
              <div className="p-3">
                <p className="text-xl bg-gradient-to-br from-yellow-300 to-orange-500 bg-clip-text text-transparent font-semibold">
                  Sep'23 - Present
                </p>
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
