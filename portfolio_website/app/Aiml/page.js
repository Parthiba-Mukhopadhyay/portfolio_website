"use client";
import Image from "next/image";
import andhadhun from "../../assets/projects/andhadhun.png";
import mediaplayer from "../../assets/projects/mediaplayer.png";
import nlp from "../../assets/projects/nlp.png";
import github from "../../assets/icons/github.svg";
import Link from "next/link";

const ProjectCard = ({ pic, name, summary, tech, project, icon }) => {
  return (
    <div className="m-8 border-2 border-yellow-500 rounded-xl shadow-lg dark:shadow-orange-400 max-w-3xl hover:scale-110 ease-in-out duration-300">
      <div className="mb-2 items-center flex flex-row">
        <Image
          src={pic}
          className="h-40 w-64 pl-8 rounded-lg shadow-xl"
          alt={name}
        />
        <div className="flex flex-col p-8">
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
    </div>
  );
};

export default function Aiml() {
  return (
    <div className="items-center flex flex-col">
      <div className="pt-8">
        <p className="text-7xl pt-8 bg-gradient-to-br from-yellow-300 to-orange-500 bg-clip-text text-transparent font-semibold">
          My AI/ML Projects
        </p>
      </div>
      <div className="grid grid-cols-2 mx-10 gap-y-4 pt-8 pb-2">
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
      </div>
      <div className="pb-8">
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
}
