"use client";
import Image from "next/image";
import logo from "../assets/Logo.png";
import Link from "next/link";
function NavBar(props) {
  return (
    <div className="navbar pb-12">
      <link
        rel="stylesheet"
        href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined"
      />
      <link
        rel="stylesheet"
        href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.2/css/all.min.css"
        integrity="sha512-z3gLpd7yknf1YoNbCzqRKc4qyor8gaKU1qmn+CShxbuBusANI9QpRohGBreCFkKxLhei6S9CQXFEbbKuqLg0DA=="
        crossOrigin="anonymous"
        referrerPolicy="no-referrer"
      />
      <link
        rel="stylesheet"
        href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined"
      />

      <div className="grid grid-cols-2 justify-evenly px-14 py-2 w-full h-5 items-center sticky top-0 z-40">
        <div>
          <Link href="/">
            <Image src={logo} className="h-28 w-28" alt="Parthiba logo" />
          </Link>
        </div>
        <div className="grid text-white grid-cols-4 gap-4 text-2xl">
            <Link href="/"><button className="hover:text-orange-300 hover:text-3xl">Home</button></Link>
            <Link href="/About.jsx"><button className="hover:text-orange-300 hover:text-3xl">About Me</button></Link>
            <Link href="/seeproject.jsx"><button className="hover:text-orange-300 hover:text-3xl">My Projects</button></Link>
            <button className="hover:text-orange-300 hover:text-3xl">Contact Me</button>
        </div>
      </div>
    </div>
  );
}

export default NavBar;
