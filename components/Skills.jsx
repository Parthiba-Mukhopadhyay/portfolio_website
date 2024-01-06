"use client";
import React from "react";
import Image from "next/image";
import bootstrap from "../assets/icons/bootstrap.svg";
import c from "../assets/icons/c.svg";
import python from "../assets/icons/python.svg";
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
import netlify from "../assets/icons/netlify.svg";
import vercel from "../assets/icons/vercel.svg";
import r from "../assets/icons/r.svg";
import firebase from "../assets/icons/firebase.svg";
import vscode from "../assets/icons/vscode.svg";
import matlab from "../assets/icons/matlab.svg";
import opencv from "../assets/icons/opencv.svg";
import tensorflow from "../assets/icons/tensorflow.svg";
import scikitlearn from "../assets/icons/scikitlearn.svg";

const Skills = () => {
  return (
    <div className="bg-black flex justify-center items-center h-50" id="Skills">
      <div className="lg:m-22 md:pl-14 m-8 pb-8">
        <div className="text-center">
        <p className="text-4xl md:text-7xl p-4">Skills</p>
          <p className="text-lg md:text-2xl p-4 bg-gradient-to-br from-yellow-300 to-orange-500 bg-clip-text text-transparent font-semibold">
            Some technologies I worked with!
          </p>
        </div>
        <div>
          <div className="pl-2 md:pl-7 pb-3 flex flex-col">
            <ul className="flex flex-wrap justify-center gap-10 md:p-8">
              <li>
                <Image
                  src={html}
                  className="h-16 w-16 md:h-20 md:w-20 rounded-lg shadow-xl dark:shadow-gray-800"
                  alt="html"
                />
              </li>
              <li>
                <Image
                  src={css}
                  className="h-16 w-16 md:h-20 md:w-20 rounded-lg shadow-xl dark:shadow-gray-800"
                  alt="css"
                />
              </li>
              <li>
                <Image
                  src={javascript}
                  className="h-16 w-16 md:h-20 md:w-20 rounded-lg shadow-xl dark:shadow-gray-800"
                  alt="javascript"
                />
              </li>
              <li>
                <Image
                  src={bootstrap}
                  className="h-16 w-16 md:h-20 md:w-20 rounded-lg shadow-xl dark:shadow-gray-800"
                  alt="bootstrap"
                />
              </li>
              <li>
                <Image
                  src={tailwind}
                  className="h-16 w-16 md:h-20 md:w-20 rounded-lg shadow-xl dark:shadow-gray-800"
                  alt="tailwind"
                />
              </li>
              <li>
                <Image
                  src={nodejs}
                  className="h-16 w-16 md:h-20 md:w-20 rounded-lg shadow-xl dark:shadow-gray-800"
                  alt="nodejs"
                />
              </li>
              <li>
                <Image
                  src={expressjs}
                  className="h-16 w-16 md:h-20 md:w-20 rounded-lg shadow-xl dark:shadow-gray-800"
                  alt="expressjs"
                />
              </li>
              <li>
                <Image
                  src={mysql}
                  className="h-16 w-16 md:h-20 md:w-20 rounded-lg shadow-xl dark:shadow-gray-800"
                  alt="mysql"
                />
              </li>
              <li>
                <Image
                  src={mongodb}
                  className="h-16 w-16 md:h-20 md:w-20 rounded-lg shadow-xl dark:shadow-gray-800"
                  alt="mongodb"
                />
              </li>
              <li>
                <Image
                  src={reactjs}
                  className="h-16 w-16 md:h-20 md:w-20 rounded-lg shadow-xl dark:shadow-gray-800"
                  alt="reactjs"
                />
              </li>
              <li>
                <Image
                  src={nextjs}
                  className="h-16 w-16 md:h-20 md:w-20 rounded-lg shadow-xl dark:shadow-gray-800"
                  alt="nextjs"
                />
              </li>
              <li>
                <Image
                  src={netlify}
                  className="h-16 w-16 md:h-20 md:w-20 rounded-lg shadow-xl dark:shadow-gray-800"
                  alt="netlify"
                />
              </li>
              <li>
                <Image
                  src={vercel}
                  className="h-16 w-16 md:h-20 md:w-20 rounded-lg shadow-xl dark:shadow-gray-800"
                  alt="vercel"
                />
              </li>
              <li>
                <Image
                  src={firebase}
                  className="h-16 w-16 md:h-20 md:w-20 rounded-lg shadow-xl dark:shadow-gray-800"
                  alt="firebase"
                />
              </li>
              <li>
                <Image
                  src={figma}
                  className="h-16 w-16 md:h-20 md:w-20 rounded-lg shadow-xl dark:shadow-gray-800"
                  alt="figma"
                />
              </li>
              <li>
                <Image
                  src={git}
                  className="h-16 w-16 md:h-20 md:w-20 rounded-lg shadow-xl dark:shadow-gray-800"
                  alt="git"
                />
              </li>
              <li>
                <Image
                  src={linux}
                  className="h-16 w-16 md:h-20 md:w-20 rounded-lg shadow-xl dark:shadow-gray-800"
                  alt="linux"
                />
              </li>
              <li>
                <Image
                  src={matlab}
                  className="h-16 w-16 md:h-20 md:w-20 rounded-lg shadow-xl dark:shadow-gray-800"
                  alt="matlab"
                />
              </li>
              <li>
                <Image
                  src={vscode}
                  className="h-16 w-16 md:h-20 md:w-20 rounded-lg shadow-xl dark:shadow-gray-800"
                  alt="vscode"
                />
              </li>
              <li>
                <Image
                  src={c}
                  className="h-16 w-16 md:h-20 md:w-20 rounded-lg shadow-xl dark:shadow-gray-800"
                  alt="c"
                />
              </li>              
              <li>
                <Image
                  src={cpp}
                  className="h-16 w-16 md:h-20 md:w-20 rounded-lg shadow-xl dark:shadow-gray-800"
                  alt="cpp"
                />
              </li>
              <li>
                <Image
                  src={java}
                  className="h-16 w-16 md:h-20 md:w-20 rounded-lg shadow-xl dark:shadow-gray-800"
                  alt="java"
                />
              </li>
              <li>
                <Image
                  src={python}
                  className="h-16 w-16 md:h-20 md:w-20 rounded-lg shadow-xl dark:shadow-gray-800"
                  alt="python"
                />
              </li>
              <li>
                <Image
                  src={r}
                  className="h-16 w-16 md:h-20 md:w-20 rounded-lg shadow-xl dark:shadow-gray-800"
                  alt="r"
                />
              </li>
              <li>
                <Image
                  src={opencv}
                  className="h-16 w-16 md:h-20 md:w-20 rounded-lg shadow-xl dark:shadow-gray-800"
                  alt="opencv"
                />
              </li>
              <li>
                <Image
                  src={scikitlearn}
                  className="h-16 w-16 md:h-20 md:w-20 rounded-lg shadow-xl dark:shadow-gray-800"
                  alt="scikitlearn"
                />
              </li>
              <li>
                <Image
                  src={tensorflow}
                  className="h-16 w-16 md:h-20 md:w-20 rounded-lg shadow-xl dark:shadow-gray-800"
                  alt="Tensorflow"
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
