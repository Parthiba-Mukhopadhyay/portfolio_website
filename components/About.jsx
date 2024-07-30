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
    <div className="pt-4" id="About">
      <div className="lg:m-22 md:pl-14 m-8 flex flex-col lg:flex lg:flex-row md:flex md:flex-row ">
        <div className="flex lg:basis-2/3 md:basis-2/3 ">
          <div>
            <p className="text-7xl p-4">About Me</p>
            <div className="flex items-center pb-6">
              <p className="lg:text-3xl text-2xl text-white font-bold pl-8 pt-3">
                I am
              </p>
              <Typed
                className="lg:text-3xl text-2xl font-bold pl-2 pt-3 bg-gradient-to-br from-yellow-300 to-orange-500 bg-clip-text text-transparent"
                strings={[
                  "a Programmer",
                  "a Designer",
                  "a Web developer",
                  "an ML Enthusiast",
                  "so much more...",
                ]}
                typeSpeed={100}
                backSpeed={50}
                loop
                smartBackspace
              />
            </div>
            <p className="px-8 pb-8 text-white text-lg mr-4">
            I'm a final year B.Tech student in Computer Science Engineering at VIT Chennai, blending creativity with code to shape the future. I specialize in UI design and full-stack development, with a passion for AI and ML. With a proven knack for crafting effective ML models, I bring innovative solutions to life. Eager to connect and collaborate on groundbreaking projects, I'm always ready for the next challenge!

            </p>
            <p className="px-8 pb-4 font-semibold text-lg bg-gradient-to-br from-yellow-300 to-orange-500 bg-clip-text text-transparent mr-4">
              {" "}
              Let's connect and achieve great results together!
            </p>
            <div>
              <div className="pl-7 pb-8">
                <ul className="flex gap-4">
                  <li>
                    <Link href="https://www.instagram.com/_.parthiba._/">
                      <Image
                        src={instagram}
                        className="h-10 w-10 hover:animate-bounce rounded-lg shadow-xl dark:shadow-gray-800"
                        alt="instagram"
                      />
                    </Link>
                  </li>
                  <li>
                    <Link href="https://www.linkedin.com/in/parthiba-mukhopadhyay-19651b217/">
                      <Image
                        src={linkedin}
                        className="h-10 w-10 hover:animate-bounce rounded-lg shadow-xl dark:shadow-gray-800"
                        alt="linkedin"
                      />
                    </Link>
                  </li>
                  <li>
                    <Link href="https://twitter.com/PARTHIBAMUKHOP1">
                      <Image
                        src={X}
                        className="h-10 w-10 hover:animate-bounce rounded-lg shadow-xl dark:shadow-gray-800"
                        alt="X"
                      />
                    </Link>
                  </li>
                  <li>
                    <Link href="https://github.com/Parthiba-Mukhopadhyay">
                      <Image
                        src={github}
                        className="h-10 w-10 hover:animate-bounce rounded-lg shadow-xl dark:shadow-gray-800"
                        alt="github"
                      />
                    </Link>
                  </li>
                  <li>
                    <Link href="https://medium.com/@parthiba.mukhopadhyay2021">
                      <Image
                        src={medium}
                        className="h-10 w-10 hover:animate-bounce rounded-lg shadow-xl dark:shadow-gray-800"
                        alt="medium"
                      />
                    </Link>
                  </li>
                  <li>
                    <Link href="https://stackoverflow.com/users/21474290/parthiba-mukhopadhyay">
                      <Image
                        src={stackoverflow}
                        className="h-10 w-10 hover:animate-bounce rounded-lg shadow-xl dark:shadow-gray-800"
                        alt="stackoverflow"
                      />
                    </Link>
                  </li>
                  <li>
                    <Link href="https://leetcode.com/PARADOX_2002/">
                      <Image
                        src={leetcode}
                        className="h-10 w-10 hover:animate-bounce rounded-lg shadow-xl dark:shadow-gray-800"
                        alt="leetcode"
                      />
                    </Link>
                  </li>
                  <li>
                    <Link href="https://www.hackerrank.com/profile/meparthiba">
                      <Image
                        src={hackerrank}
                        className="h-10 w-10 hover:animate-bounce rounded-lg shadow-xl dark:shadow-gray-800"
                        alt="hackerrank"
                      />
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
            <div className="px-6 pb-6 cursor-pointer">
  <button className="border-2 p-4 border-yellow-500 rounded-xl shadow-md dark:shadow-orange-400 w-56 bg-gradient-to-br from-yellow-300 to-orange-500 hover:from-orange-500 hover:to-yellow-300 transition-colors duration-300">
    <a
      href="https://drive.google.com/file/d/1ypOxgDC0afNsEFqeyY2hBvBraKvyuAiu/view?usp=sharing"
      download
      className="text-md text-black font-semibold"
    >
      Check out my resume!!
    </a>
  </button>
</div>

          </div>
        </div>
        <Image
          src={myavatar1}
          className="h-5/6 w-52 flex pt-3 items-center mx-auto"
          alt="parthiba"
        />
      </div>
    </div>
  );
};

export default About;
