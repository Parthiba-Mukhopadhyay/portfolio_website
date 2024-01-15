"use client";
import Image from "next/image";
import clickcare from "../../assets/projects/clickcare.webp";
import marketplace from "../../assets/projects/marketplace.png";
import figma from "../../assets/icons/figma.svg";
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

export default function Design() {
  return (
    <div className="items-center flex flex-col">
      <div className="pt-8">
        <p className="text-6xl pt-8 bg-gradient-to-br from-yellow-300 to-orange-500 bg-clip-text text-transparent font-semibold">
          My Designs
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 mx-10 gap-y-4 pb-16 pt-8">
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
