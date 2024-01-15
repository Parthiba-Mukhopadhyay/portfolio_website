"use client";
import Image from "next/image";
import andhadhun from "../../assets/projects/andhadhun.png";
import mediaplayer from "../../assets/projects/mediaplayer.png";
import nlp from "../../assets/projects/nlp.png";
import github from "../../assets/icons/github.svg";
import Link from "next/link";


const ProjectCard = ({ pic, name, summary, tech, project, icon, website }) => {
  return (
    <div className="m-4 md:m-8 border-yellow-500 rounded-xl overflow-hidden shadow-lg dark:shadow-orange-400 max-w-3xl hover:scale-110 ease-in-out duration-300">
      <div className="md:flex-row md:flex md:items-center md:justify-center">
        <Image
          src={pic}
          className="md:h-48 md:w-64 h-60 w-full object-cover rounded-t-xl md:rounded-l-xl shadow-xl md:mb-0 mb-4 p-4"
          alt={name}
        />
        <div className="flex flex-col p-4 md:p-8">
          <p className="pt-4 pb-2 text-xl md:text-2xl font-semibold bg-gradient-to-br from-yellow-300 to-orange-500 bg-clip-text text-transparent hover:size-3xl">
            {name}
          </p>
          <p className="pb-4">{summary}</p>
          <p className="bg-gradient-to-br from-yellow-300 to-orange-500 bg-clip-text text-transparent pt-2 font-semibold">
            Tech stacks used
          </p>
          <p className="text-blue-100">{tech}</p>
          <div className="flex flex-col md:flex-row gap-4 md:gap-8 px-3 md:px-5 pt-3">
            <Image
              src={icon}
              className=" h-4 w-4 rounded-lg md:mb-0 mb-2"
              alt="github"
            />
            <a
              className="bg-gradient-to-br from-yellow-300 to-orange-500 bg-clip-text text-transparent font-semibold hover:text-purple-700 md:mr-2"
              href={project}
            >
              View project!
            </a>
            <a
              className="bg-gradient-to-br from-yellow-300 to-orange-500 bg-clip-text text-transparent font-semibold hover:text-purple-700"
              href={website}
            >
              View Website!
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
        <p className="text-6xl pt-8 bg-gradient-to-br from-yellow-300 to-orange-500 bg-clip-text text-transparent font-semibold">
          My AI/ML Projects
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 mx-10 gap-y-4 pt-8 pb-2">
        <ProjectCard
          pic={andhadhun}
          name="Andhadhun"
          summary="A Computer Vision model to detect obstacles and incoming cars, convert the prediction to audio and help the blind people walk their way through!"
          tech="yoloV5, pyautogui, python"
          project="https://github.com/Parthiba-Mukhopadhyay/VinHack-23/tree/Parthiba-update"
          icon={github}
        />
        <ProjectCard
          pic={mediaplayer}
          name="Media Player"
          summary="A computer vision model to detect hand gestures of the user and perform necessary media player functions!"
          tech="openCV, mediapipe, pyautogui"
          project="https://github.com/Parthiba-Mukhopadhyay/hand_gesture_media_player"
          icon={github}
        />
      </div>
      <div className="pb-8">
        <ProjectCard
          pic={nlp}
          name="Spam Detection and Sentiment Analysis"
          summary="Detection of spam messages and twitter tweets sentiment analysis using natural language processing"
          tech="NLP, Python, Colab"
          project="https://github.com/Parthiba-Mukhopadhyay/ML_NLP"
          icon={github}
        />
      </div>
    </div>
  );
}
