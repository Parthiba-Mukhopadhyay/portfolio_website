"use client";
import React from "react";
import Image from "next/image";
import alpha from "../assets/logos/alpha-logo.png";
import hmt from "../assets/logos/hmt-logo.jpg";
import gdsc from "../assets/logos/gdsc-logo.png";
import mic from "../assets/logos/mic-logo.jpg";
import pehchaan from "../assets/logos/pehchaan-logo.png";

const ExperienceCard = ({ pic, name, time, Role }) => {
  return (
    <div className=" p-4 w-full md:w-80">
      <div className="flex flex-row cursor-pointer hover:scale-110 ease-in-out duration-300 items-center rounded-xl border-2 border-yellow-500 shadow-md dark:shadow-orange-400 md:h-32">
        <Image src={pic} className="pl-2 rounded-md" width={80} height={80} />
        <div className="pl-4">
          <p className="text-lg bg-gradient-to-br from-yellow-300 to-orange-500 bg-clip-text text-transparent font-semibold">{name}</p>
          <p className="text-sm">{Role}</p>
          <p className="text-sm">{time}</p>
        </div>
      </div>
    </div>
  );
};

const Prevexperience = () => {
  return (
    <div className="flex flex-col px-10 pb-8 ">
      <div className="text-center">
        <p className="text-7xl p-4">Experiences</p>
        <p className="text-2xl p-4 bg-gradient-to-br from-yellow-300 to-orange-500 bg-clip-text text-transparent font-semibold">
          My previous experiences!
        </p>
      </div>
      <div className="flex flex-row pb-8">
        <ExperienceCard
          pic={hmt}
          name="HMT Architects"
          time="Aug'23 - Oct'23"
          Role="Web Developer and SEO Intern"
        />
        <ExperienceCard
          pic={alpha}
          name="Alpha Code Labs"
          time="Oct'23 - Present"
          Role="Full Stack Developer Intern"
        />
        <ExperienceCard
          pic={pehchaan}
          name="Pehchaan"
          time="Dec'23 - Present"
          Role="Project Manager"

        />
        <ExperienceCard
          pic={gdsc}
          name="GDSC"
          time="Oct'22 - Present"
          Role="CP Representative"
        />
        <ExperienceCard
          pic={mic}
          name="MIC"
          time="Aug'23 - Present"
          Role="UI/UX Designer"
        />
      </div>
    </div>
  );
};

export default Prevexperience;
