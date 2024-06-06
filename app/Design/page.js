"use client";
import Image from "next/image";
import clickcare from "../../assets/projects/clickcare.webp";
import marketplace from "../../assets/projects/marketplace.png";
import figma from "../../assets/icons/figma.svg";
import Link from "next/link";


const ProjectCard = ({ pic, name, summary, tech, project, icon }) => {
  return (
    <div className="m-8 border-yellow-500 rounded-xl shadow-lg dark:shadow-orange-400 max-w-3xl hover:scale-110 ease-in-out duration-300">
      <div className="md:flex-row md:flex md:items-center md:justify-center pt-5">
        <Image
          src={pic}
          className="md:h-40 md:w-64 h-40 w-64 rounded-lg shadow-xl md:mb-0 mb-4"
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

export default function Design() {
  return (
    <div className="items-center flex flex-col">
      <div className="pt-8">
        <p className="text-4xl text-center md:text-6xl pt-8 bg-gradient-to-br from-yellow-300 to-orange-500 bg-clip-text text-transparent font-semibold">
          My Designs
        </p>
      </div>
      <div className="items-center mx-20 gap-y-2 pb-16 pt-8">
        <ProjectCard
          pic={clickcare}
          name="ClickCare"
          summary="A healthcare app designed to monitor your vitals through Iot wearables and cater to medical needs based on parameters change!"
          tech="Ui prototype, Figma"
          project="https://www.figma.com/file/KV3OHwj90DPWI0s5olLP0f/SOLUTION-LAYOUT-WIREFRAME-(Copy)?type=design&node-id=0%3A1&mode=design&t=AUXXXAoQTjET5p1y-1"
          icon={figma}
        />
        <ProjectCard
          pic={marketplace}
          name="Marketplace App"
          summary="Built as a part of MIC, this app aims to unite potential customers and sellers at a local scale!"
          tech="Ui prototype, Figma"
          project="https://www.figma.com/file/oGyctsYTBXEonBAVji0zBN/Wireframes?type=design&mode=design&t=AUXXXAoQTjET5p1y-0"
          icon={figma}
        />
      </div>
    </div>
  );
}
