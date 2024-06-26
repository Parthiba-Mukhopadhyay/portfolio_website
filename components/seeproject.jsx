"use client";
import Image from "next/image";
import design_logo from "../assets/design_logo.png";
import development_logo from "../assets/development_logo.png";
import AIML_logo from "../assets/AIML_logo.png";
import IoT_logo from "../assets/IoT_logo.png";

import Link from "next/link";

const Seeproject = () => {
  return (
    <div className="items-center flex flex-col pb-20" id="seeproject">
      <div>
        <p className="text-4xl md:text-7xl p-4">My projects</p>
      </div>
      <div>
        <p className="text-lg md:text-2xl pb-8 pt-4 bg-gradient-to-br from-yellow-300 to-orange-500 bg-clip-text text-transparent font-semibold">
          Check my projects out!
        </p>
      </div>

      <div className="flex flex-col gap-10 md:flex-row md:gap-20 items-center justify-center">
        <Link href="/Design">
          <div className="flex flex-col cursor-pointer hover:scale-110 ease-in-out duration-300 items-center rounded-xl border-2 border-yellow-500 shadow-md dark:shadow-orange-400 h-40 md:h-60 w-44 md:w-56">
            <p className="text-2xl md:text-4xl p-2 md:p-4 bg-gradient-to-br from-yellow-300 to-orange-500 bg-clip-text text-transparent font-semibold">
              Design
            </p>
            <Image src={design_logo} className="h-28 md:h-44 w-28 md:w-44 rounded-lg" alt="/" />
          </div>
        </Link>
        <Link href="/Development">
          <div className="flex flex-col cursor-pointer hover:scale-110 ease-in-out duration-300 items-center rounded-xl border-2 border-yellow-500 shadow-md dark:shadow-orange-400 h-40 md:h-60 w-44 md:w-56">
            <p className="text-xl md:text-3xl p-2 md:p-4 bg-gradient-to-br from-yellow-300 to-orange-500 bg-clip-text text-transparent font-semibold">
              Development
            </p>
            <Image src={development_logo} className="h-28 md:h-44 w-28 md:w-44 rounded-lg" alt="/" />
          </div>
        </Link>
        <Link href="/Aiml">
          <div className="flex flex-col cursor-pointer hover:scale-110 ease-in-out duration-300 items-center rounded-xl border-2 border-yellow-500 shadow-md dark:shadow-orange-400 h-40 md:h-60 w-44 md:w-56">
            <p className="text-2xl md:text-4xl p-2 md:p-4 bg-gradient-to-br from-yellow-300 to-orange-500 bg-clip-text text-transparent font-semibold">
              AI/ML
            </p>
            <Image src={AIML_logo} className="h-28 md:h-44 w-28 md:w-44 rounded-lg" alt="/" />
          </div>
        </Link>
        <Link href="/IoT">
          <div className="flex flex-col cursor-pointer hover:scale-110 ease-in-out duration-300 items-center rounded-xl border-2 border-yellow-500 shadow-md dark:shadow-orange-400 h-40 md:h-60 w-44 md:w-56">
            <p className="text-2xl md:text-4xl p-2 md:p-4 bg-gradient-to-br from-yellow-300 to-orange-500 bg-clip-text text-transparent font-semibold">
              IoT
            </p>
            <Image src={IoT_logo} className="h-28 md:h-44 w-28 md:w-44 rounded-lg" alt="/" />
          </div>
        </Link>
      </div>
    </div>
  );
};

export default Seeproject;
