"use client";
import React from "react";
import Image from "next/image";
import alpha from "../assets/logos/alpha-logo.png";
import hmt from "../assets/logos/hmt-logo.jpg";
import oasis from "../assets/logos/oasis-logo.png";
import gdsc from "../assets/logos/gdsc-logo.svg";
import mic from "../assets/logos/mic-logo.jpg";

const ExperienceCard = ({ pic, name, time, Role}) => {
    return (
      <div>
        <div className="flex flex-row border-2 p-4 border-yellow-500 rounded-xl shadow-md dark:shadow-orange-400 w-80">
        <Image src={pic}></Image>
        <div>
            <p className="text-white">{name}</p>
            <p>{Role}</p>
            <p>{time}</p>
        </div>
        </div>
      </div>
    );
  };

const Experience = () => {
  return (
    <div>
        <div>
            <p>Experience</p>
        </div>
        <ExperienceCard pic={hmt} name="HMT Architects" time="Aug'23 - Oct'23" Role="Web Developer and SEO Intern"/>
    </div>
  );
};

export default Experience;
