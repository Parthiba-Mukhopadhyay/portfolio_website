"use client";
import React from "react";
import Image from "next/image";
import bootstrap from "../assets/icons/bootstrap.svg";
import c from "../assets/icons/c.svg";
import cpp from "../assets/icons/c++.svg";
import css from "../assets/icons/css.svg";
import expressjs from "../assets/icons/express.svg";
import figma from "../assets/icons/figma.svg";
import git from "../assets/icons/git.svg";
import html from "../assets/icons/html.svg";
import java from "../assets/icons/java.svg";
import javascript from "../assets/icons/javascript.svg";
import linux from "../assets/icons/linux.svg";
import mongodb from "../assets/icons/mongodb.svg";
import mysql from "../assets/icons/mysql.svg";
import nextjs from "../assets/icons/nextjs.svg";
import nodejs from "../assets/icons/nodejs.svg";
import reactjs from "../assets/icons/reactjs.svg";
import tailwind from "../assets/icons/tailwind.svg";

const Skills = () => {
  return (
    <div className="bg-black flex justify-center items-center h-50">
      <div className="lg:m-22 md:pl-14 m-8 pb-16">
        <div className="text-center">
          <p className="text-7xl p-4">Skills</p>
          <p className="text-2xl p-4">
            Check out some technologies I worked with!
          </p>
        </div>
        <div>
          <div className="pl-7 pb-3">
            <ul className="flex gap-4">
              <li>
                <Image
                  src={html}
                  className="h-10 w-10 hover:animate-bounce rounded-lg shadow-xl dark:shadow-gray-800"
                  alt="html"
                />
              </li>
              <li>
                <Image
                  src={css}
                  className="h-10 w-10 hover:animate-bounce rounded-lg shadow-xl dark:shadow-gray-800"
                  alt="css"
                />
              </li>
              <li>
                <Image
                  src={javascript}
                  className="h-10 w-10 hover:animate-bounce rounded-lg shadow-xl dark:shadow-gray-800"
                  alt="javascript"
                />
              </li>
              <li>
                <Image
                  src={bootstrap}
                  className="h-10 w-10 hover:animate-bounce rounded-lg shadow-xl dark:shadow-gray-800"
                  alt="bootstrap"
                />
              </li>
              <li>
                <Image
                  src={tailwind}
                  className="h-10 w-10 hover:animate-bounce rounded-lg shadow-xl dark:shadow-gray-800"
                  alt="tailwind"
                />
              </li>
              <li>
                <Image
                  src={nodejs}
                  className="h-10 w-10 hover:animate-bounce rounded-lg shadow-xl dark:shadow-gray-800"
                  alt="nodejs"
                />
              </li>
              <li>
                <Image
                  src={expressjs}
                  className="h-10 w-10 hover:animate-bounce rounded-lg shadow-xl dark:shadow-gray-800"
                  alt="expressjs"
                />
              </li>
              <li>
                <Image
                  src={mysql}
                  className="h-10 w-10 hover:animate-bounce rounded-lg shadow-xl dark:shadow-gray-800"
                  alt="mysql"
                />
              </li>
              <li>
                <Image
                  src={mongodb}
                  className="h-10 w-10 hover:animate-bounce rounded-lg shadow-xl dark:shadow-gray-800"
                  alt="mongodb"
                />
              </li>
              <li>
                <Image
                  src={reactjs}
                  className="h-10 w-10 hover:animate-bounce rounded-lg shadow-xl dark:shadow-gray-800"
                  alt="reactjs"
                />
              </li>
              <li>
                <Image
                  src={nextjs}
                  className="h-10 w-10 hover:animate-bounce rounded-lg shadow-xl dark:shadow-gray-800"
                  alt="nextjs"
                />
              </li>
              <li>
                <Image
                  src={mongodb}
                  className="h-10 w-10 hover:animate-bounce rounded-lg shadow-xl dark:shadow-gray-800"
                  alt="mongodb"
                />
              </li>
            </ul>
          </div>
        </div>
       
      </div>
    </div>
  );
};

export default Skills;
