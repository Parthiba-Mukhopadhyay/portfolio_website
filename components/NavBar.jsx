// components/NavBar.jsx
import Image from "next/image";
import Link from "next/link";
import logo from "../assets/Logo.png";

function NavBar() {
  return (
    <div className="navbar">
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

      <div className="flex shadow-sm shadow-white justify-evenly px-14  w-full items-center sticky top-0 z-40">
        <div>
          <Link href="/">
            <Image src={logo} className="h-28 w-28 cursor-pointer" alt="Parthiba logo" />
          </Link>
        </div>
        <div className="flex flex-row text-white  gap-10 text-xl">
          <Link href="/">
            <button className="hover:text-orange-300 hover:text-2xl">Home</button>
          </Link>
          <Link href="/About">
            <button className="hover:text-orange-300 hover:text-2xl">About Me</button>
          </Link>
          <Link href="/seeproject">
            <button className="hover:text-orange-300 hover:text-2xl">My Projects</button>
          </Link>
          <Link href="/contact">
            <button className="hover:text-orange-300 hover:text-2xl">Contact Me</button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default NavBar;
