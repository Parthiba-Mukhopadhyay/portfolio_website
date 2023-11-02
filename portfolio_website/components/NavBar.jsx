"use client";
import Image from "next/image";
import logo from "../assets/Logo.png";
import Link from "next/link";
function NavBar(props) {
  return (
    <div className="navbar pb-20 bg-black">
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

      <div className="grid grid-cols-2 justify-evenly px-14 py-2 w-screen h-32 items-center fixed top-0 bg-black z-40">
        <div>
          <Link href="/">
            <Image src={logo} className="h-28 w-28" alt="Parthiba logo" />
          </Link>
        </div>
        <div className="grid grid-cols-4 gap-4 text-xl">
            <button className="hover:text-orange-300 hover:text-2xl">Home</button>
            <button className="hover:text-orange-300 hover:text-2xl">About Me</button>
            <button className="hover:text-orange-300 hover:text-2xl">My Projects</button>
            <button className="hover:text-orange-300 hover:text-2xl">Contact Me</button>
        </div>
      </div>
    </div>
  );
}

export default NavBar;
