"use client";
import Image from "next/image";
import friends from "../assets/projects/friends.png";
import portfolio from "../assets/projects/portfolio.png";
import textify from "../assets/projects/textify.png";
import clickcare from "../assets/projects/clickcare.png";
import gamezone from "../assets/projects/gamezone.jpg";
import marketplace from "../assets/projects/marketplace.png";
import andhadhun from "../assets/projects/andhadhun.png";
import mediaplayer from "../assets/projects/mediaplayer.png";
import nlp from "../assets/projects/nlp.png";
import github from "../assets/icons/github.svg";
import figma from "../assets/icons/figma.svg";

import Link from "next/link";

const ProjectCard = ({ pic, name, summary, tech, project, icon }) => {
  return (
    <div className="m-8 border-2 p-8 border-yellow-500 rounded-xl -md mx-auto shadow-lg dark:shadow-orange-400 w-96">
      <div className="mb-2 items-center flex flex-col">
        <Image
          src={pic}
          className="h-52 rounded-lg shadow-xl dark:shadow-gray-700"
          alt={name} // Use the project name as alt text
        />
        <p className="px-6 pt-6 pb-2 text-2xl font-semibold bg-gradient-to-br from-yellow-300 to-orange-500 bg-clip-text text-transparent hover:size-3xl">
          {name}
        </p>
        <p>{summary}</p>
        <p className="bg-gradient-to-br from-yellow-300 to-orange-500 bg-clip-text text-transparent pt-5 font-semibold">
          Tech stacks used
        </p>
        <p className="text-blue-100">{tech}</p>
        <div className="flex flex-row px-5 pt-5">
          <Image
            src={icon}
            className="h-10 mr-28 w-10 rounded-lg"
            alt="github"
          />
          <a
            className="bg-gradient-to-br from-yellow-300 to-orange-500 bg-clip-text text-transparent font-semibold hover:text-purple-700 text-lg "
            href={project}
          >
            View project!
          </a>
        </div>
      </div>
    </div>
  );
};

const Projects = () => {
  return (
    <div className="items-center flex flex-col">
      <div>
        <p className="text-7xl p-4">My projects</p>
      </div>
      <div>
        <p className="text-4xl pt-8 bg-gradient-to-br from-yellow-300 to-orange-500 bg-clip-text text-transparent font-semibold">
          Design and Development
        </p>
      </div>
      <div className="grid grid-cols-3 gap-x-20 gap-y-4">
        <ProjectCard
          pic={portfolio}
          name="Personal Portfolio"
          summary="My personal portfolio describing me, my skills and my projects!"
          tech="NextJs, Tailwind CSS, FormSubmit, Vercel"
          project="https://friendssolchng.firebaseapp.com/"
          icon={github}
        />
        <ProjectCard
          pic={friends}
          name="F.R.I.E.N.D.S"
          summary="An one stop solution for all your animal needs!"
          tech="ReactJs, Bootstrap, FireBase"
          project="https://friendssolchng.firebaseapp.com/"
          icon={github}
        />
        <ProjectCard
          pic={textify}
          name="Textify"
          summary="An website to perform multiple operations on user entered strings
          in no time!"
          tech="ReactJs, Vanilla CSS, Netlify"
          project="https://mytextify.netlify.app/"
          icon={github}
        />
        <ProjectCard
          pic={clickcare}
          name="ClickCare"
          summary="A healthcare app designed to monitor your vitals through Iot
          wearables and cater to medical needs based on parameters change!"
          tech="Ui prototype, Figma"
          project="https://friendssolchng.firebaseapp.com/"
          icon={figma}
        />
        <ProjectCard
          pic={marketplace}
          name="Marketplace App"
          summary="Built as a part of MIC, this app aims to unite potential customers
          and sellers at a local scale!"
          tech="Ui prototype, Figma"
          project="https://friendssolchng.firebaseapp.com/"
          icon={figma}
        />
        <ProjectCard
          pic={gamezone}
          name="Gamezone"
          summary="A website containing multiple enjoyable mini games each developed from scratch!"
          tech="HTML, CSS, JavaScript"
          project="https://friendssolchng.firebaseapp.com/"
          icon={github}
        />
      </div>
      <div className="text-center">
        <p className="text-4xl pt-8 bg-gradient-to-br from-yellow-300 to-orange-500 bg-clip-text text-transparent font-semibold">
          AI/ML and Computer Vision
        </p>
      </div>
      <div className="grid grid-cols-3 gap-20 pb-20">
        <ProjectCard
          pic={andhadhun}
          name="Andhadhun"
          summary="A Computer Vision model to detect obstacles and incoming cars, convert the prediction to audio and help the blind people walk their way through!"
          tech="yoloV5, pyautogui, python"
          project="https://friendssolchng.firebaseapp.com/"
          icon={github}
        />
        <ProjectCard
          pic={mediaplayer}
          name="Media Player"
          summary="A computer vision model to detect hand gestures of the user and perform necessary media player functions!"
          tech="openCV, mediapipe, pyautogui"
          project="https://friendssolchng.firebaseapp.com/"
          icon={github}
        />
        <ProjectCard
          pic={nlp}
          name="Spam Detection and Sentiment Analysis"
          summary="Detection of spam messages and twitter tweets sentiment analysis using natural language processing"
          tech="NLP, Python, Colab"
          project="https://friendssolchng.firebaseapp.com/"
          icon={github}
        />
      </div>
    </div>
  );
};

export default Projects;
