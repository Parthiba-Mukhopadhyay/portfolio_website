"use client";
import Image from "next/image";
import friends from "../../assets/projects/friends.png";
import portfolio from "../../assets/projects/portfolio.png";
import textify from "../../assets/projects/textify.png";
import gamezone from "../../assets/projects/gamezone.jpg";
import hmt from "../../assets/projects/hmt.png";
import memories from "../../assets/projects/memories.jpeg";
import github from "../../assets/icons/github.svg";


const ProjectCard = ({ pic, name, summary, tech, project, icon, website }) => {
  return (
    <div className="m-8 border-yellow-500 rounded-xl shadow-lg dark:shadow-orange-400 max-w-3xl hover:scale-110 ease-in-out duration-300">
      <div className="md:flex-row md:flex md:items-center md:justify-center">
        <Image
          src={pic}
          className="md:h-40 md:w-64 h-40 w-64 rounded-lg shadow-xl md:mb-0 mb-4"
          alt={name}
        />
        <div className="flex flex-col p-8">
          <p className="pt-6 pb-2 text-2xl font-semibold bg-gradient-to-br from-yellow-300 to-orange-500 bg-clip-text text-transparent hover:size-3xl">
            {name}
          </p>
          <p>{summary}</p>
          <p className="bg-gradient-to-br from-yellow-300 to-orange-500 bg-clip-text text-transparent pt-5 font-semibold">
            Tech stacks used
          </p>
          <p className="text-blue-100">{tech}</p>
          <div className="flex flex-col md:flex-row gap-8 px-5 pt-5">
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

export default function Development() {
  return (
    <div className="items-center flex flex-col">
      <div className="pt-8">
        <p className="text-6xl pt-8 bg-gradient-to-br from-yellow-300 to-orange-500 bg-clip-text text-transparent font-semibold">
          My Websites
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 mx-10 gap-y-4 pt-10 pb-4">
        <ProjectCard
          pic={memories}
          name="Memories"
          summary="A Social Media website with user authentication and authorization, where users can post, check out comments, edit profile as well as add new friends! "
          tech="MongoDB, ExpressJs, ReactJs, NodeJs, Redux Toolkit"
          project="https://github.com/Parthiba-Mukhopadhyay/Memories"
          website="https://github.com/Parthiba-Mukhopadhyay/Memories"
          icon={github}
        />
        <ProjectCard
          pic={friends}
          name="F.R.I.E.N.D.S"
          summary="An one stop solution for all your animal needs where you can rescue animals, adopt them, find trainers, maintain a community as well as check for compatibily of the animal! "
          tech="ReactJs, Bootstrap, FireBase"
          project="https://github.com/Parthiba-Mukhopadhyay/F.R.I.E.N.D.S"
          website="https://friendssolchng.firebaseapp.com/"
          icon={github}
        />
        <ProjectCard
          pic={textify}
          name="Textify"
          summary="An website to perform multiple operations on user entered strings in no time!"
          tech="ReactJs, Vanilla CSS, Netlify"
          project="https://github.com/Parthiba-Mukhopadhyay/Textify"
          website="https://mytextify.netlify.app/"
          icon={github}
        />
        <ProjectCard
          pic={gamezone}
          name="Gamezone"
          summary="A website containing multiple enjoyable mini games each developed from scratch!"
          tech="HTML, CSS, JavaScript"
          project="https://github.com/Parthiba-Mukhopadhyay/dice_game"
          website="https://mydicegame23.netlify.app/"
          icon={github}
        />
      </div>
      <div className="pb-8">
        <ProjectCard
          pic={hmt}
          name="HMT_Architects"
          summary="Had the opportunity to build the website for the company! Cant share the code due to NDA but do give it a look!"
          tech="NextJs, Tailwind CSS"
          website="https://hmtarchitects.com/"
          icon={github}
        />
      </div>
    </div>
  );
}
