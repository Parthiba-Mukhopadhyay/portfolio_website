"use client";
import React, { useState } from "react";
import Image from "next/image";
import alpha from "../assets/logos/alpha-logo.png";
import hmt from "../assets/logos/hmt-logo.jpg";
import gdsc from "../assets/logos/gdsc-logo.png";
import mic from "../assets/logos/mic-logo.jpg";
import pehchaan from "../assets/logos/pehchaan-logo.png";

const ExperienceCard = ({ pic, name, time, role, onCardClick }) => {
  return (
    <div className="p-4 w-full md:w-80">
      <div
        className="flex flex-row cursor-pointer hover:scale-110 ease-in-out duration-300 items-center rounded-xl border-2 border-yellow-500 shadow-md dark:shadow-orange-400 md:h-32"
        onClick={onCardClick}
      >
        <Image src={pic} className="pl-2 rounded-md" width={80} height={80} />
        <div className="pl-4">
          <p className="text-lg bg-gradient-to-br from-yellow-300 to-orange-500 bg-clip-text text-transparent font-semibold">
            {name}
          </p>
          <p className="text-sm">{role}</p>
          <p className="text-sm">{time}</p>
        </div>
      </div>
    </div>
  );
};

const Modal = ({ closeModal, pic, name, time, role, desc, tech }) => {
  return (
    <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-gray-800 bg-opacity-50">
      <div className="bg-gradient-to-br from-yellow-300 to-orange-500 p-8 rounded-md flex items-center justify-center">
        <div className="flex flex-col items-center">
          <Image src={pic} className="rounded-md pb-3" width={200} height={200} />
          <div className="pl-4 text-center">
            <p className="text-3xl text-black font-extrabold">{name}</p>
            <p className="text-2xl text-violet-900 font-semibold">{role}</p>
            <p className="text-xl text-white">{time}</p>
            <p className="text-lg text-black" style={{ whiteSpace: "pre-line" }}>
              {desc}
            </p>
            <p className="pt-3 text-2xl font-semibold text-black">Technology used:</p>
            <p className="text-lg text-violet-900">{tech}</p>
          </div>
          <button
            className="mt-4 px-4 py-2 bg-blue-500 text-white rounded-md cursor-pointer"
            onClick={closeModal}
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
};


const Prevexperience = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedExperience, setSelectedExperience] = useState(null);

  const openModal = (experience) => {
    setSelectedExperience(experience);
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
    setSelectedExperience(null);
  };

  const experiences = [
    { pic: hmt, name: "HMT Architects", time: "Aug'23 - Oct'23", role: "Web Developer and SEO Intern", desc:"Designed and developed the website for the company,\n Improved the SEO resulting in increase the user traffic by 30% and user performance by 40%,\n", tech:"NextJs, Tailwind CSS, Vercel, Google Search Console" },
    { pic: alpha, name: "Alpha Code Labs", time: "Oct'23 - Present", role: "Full Stack Developer Intern", desc:"Working on a finance microservice to be invoked in a management software,\nSettling down cash advances, travel and non travel expenses,\n Generation of pay slips via the architecture", tech:"MongoDB, ExpressJs, ReactJs, NodeJs, Redux" },
    { pic: pehchaan, name: "Pehchaan", time: "Dec'23 - Present", role: "Project Manager", desc:"Responsible for Strategic planning and proper organization of workflow\n Leading team for effective execution of projects", tech:"Google services for effective management" },
    { pic: gdsc, name: "GDSC", time: "Oct'22 - Present", role: "CP Representative", desc:"Have been managing over 200 members, conducting events and ensuring smooth execution.\n Outreaching for sponsorship and speakers for large-scale events.\n Been a speaker at Google I/O Extended and host at FOSS United Chennai meetup", tech:"Google services for effective management" },
    { pic: mic, name: "MIC", time: "Aug'23 - Present", role: "UI/UX Designer", desc:"Designing the admin panel and club website\n Designed a UI/UX prototype for a marketplace app to promote local vendors", tech:"Figma" },
  ];

  return (
    <div className="flex flex-col px-10 pb-8">
      <div className="text-center">
        <p className="text-7xl p-4">Experiences</p>
        <p className="text-2xl p-4 bg-gradient-to-br from-yellow-300 to-orange-500 bg-clip-text text-transparent font-semibold">
          My previous experiences!
        </p>
      </div>
      <div className="flex flex-row pb-8">
        {experiences.map((experience, index) => (
          <ExperienceCard
            key={index}
            {...experience}
            onCardClick={() => openModal(experience)}
          />
        ))}
      </div>
      {modalOpen && (
        <Modal
          {...selectedExperience}
          closeModal={closeModal}
        />
      )}
    </div>
  );
};

export default Prevexperience;
