"use client";
import Image from "next/image";
import friends from "../assets/projects/friends.png";
import portfolio from "../assets/projects/portfolio.png";
import textify from "../assets/projects/textify.png";
import github from "../assets/icons/github.svg";
import Link from "next/link";
function Projects() {
  return (
    <div className="items-center flex flex-col">
      <div>
        <h1 className="text-7xl mb-10">My Projects</h1>
      </div>
      <div className="grid grid-cols-3 gap-20">
        <div className="m-8 border-2 p-8 border-white rounded-xl -md mx-auto shadow-lg dark:shadow-white w-96">
          <div className="mb-2 items-center flex flex-col">
            <Image
              src={portfolio}
              className="h-52 rounded-lg shadow-xl dark:shadow-gray-700"
              alt="friends"
            />
            <p className="px-6 pt-6 pb-2 text-2xl font-semibold bg-gradient-to-br from-yellow-300 to-orange-500 bg-clip-text text-transparent hover:size-3xl">
              Personal Portfolio
            </p>
            <p>My personal portfolio describing me, my skills and my projects !</p>
            <p className="bg-gradient-to-br from-yellow-300 to-orange-500 bg-clip-text text-transparent pt-5 font-semibold">Tech stacks used</p>
            <p className="text-blue-100">NextJs, Tailwind CSS, FormSubmit, Vercel</p>
            <div className="flex flex-row px-5 pt-5">
              <Image
                src={github}
                className="h-10 mr-32 w-10 rounded-lg "
                alt="github"
              />
              <a
                className="bg-gradient-to-br from-yellow-300 to-orange-500 bg-clip-text text-transparent font-semibold hover:text-purple-700 text-lg hover:text-xl"
                href="https://friendssolchng.firebaseapp.com/"
              >
                Click here!
              </a>
            </div>
          </div>
        </div>
        <div className="m-8 border-2 p-8 border-white rounded-xl -md mx-auto shadow-lg dark:shadow-white w-96">
          <div className="mb-2 items-center flex flex-col">
            <Image
              src={friends}
              className="h-52 w-80 rounded-lg shadow-xl dark:shadow-gray-700"
              alt="friends"
            />
            <p className="px-6 pt-6 pb-2 text-2xl font-semibold bg-gradient-to-br from-yellow-300 to-orange-500 bg-clip-text text-transparent hover:size-3xl">
              F.R.I.E.N.D.S
            </p>
            <p>An one stop solution for all your animal needs!</p>
            <p className="bg-gradient-to-br from-yellow-300 to-orange-500 bg-clip-text text-transparent pt-5 font-semibold">Tech stacks used</p>
            <p className="text-blue-100">ReactJs, Bootstrap, FireBase</p>
            <div className="flex flex-row px-5 pt-5">
              <Image
                src={github}
                className="h-10 mr-32 w-10 rounded-lg "
                alt="github"
              />
              <a
                className="bg-gradient-to-br from-yellow-300 to-orange-500 bg-clip-text text-transparent font-semibold hover:text-purple-700 text-lg hover:text-xl"
                href="https://friendssolchng.firebaseapp.com/"
              >
                Click here!
              </a>
            </div>
          </div>
        </div>
        <div className="m-8 border-2 p-8 border-white rounded-xl -md mx-auto shadow-lg dark:shadow-white w-96">
          <div className="mb-2 items-center flex flex-col">
            <Image
              src={textify}
              className="h-52 rounded-lg shadow-xl dark:shadow-gray-700"
              alt="friends"
            />
            <p className="px-6 pt-6 pb-2 text-2xl font-semibold bg-gradient-to-br from-yellow-300 to-orange-500 bg-clip-text text-transparent hover:size-3xl">
              Textify
            </p>
            <p>An website to perform multiple operations on user entered strings in no time!</p>
            <p className="bg-gradient-to-br from-yellow-300 to-orange-500 bg-clip-text text-transparent pt-5 font-semibold">Tech stacks used</p>
            <p className="text-blue-100">ReactJs, Vanilla CSS, Netlify</p>
            <div className="flex flex-row px-5 pt-5">
              <Image
                src={github}
                className="h-10 mr-32 w-10 rounded-lg "
                alt="github"
              />
              <a
                className="bg-gradient-to-br from-yellow-300 to-orange-500 bg-clip-text text-transparent font-semibold hover:text-purple-700 text-lg hover:text-xl"
                href="https://mytextify.netlify.app/"
              >
                Click here!
              </a>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}

export default Projects;
