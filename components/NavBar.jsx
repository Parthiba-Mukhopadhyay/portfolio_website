// components/NavBar.jsx
import Link from "next/link";
import Image from "next/image";
import logo from "../assets/Logo.png";

function NavBar() {
  return (
    <div className="navbar-container py-4 md:py-6">
      <nav className="bg-black shadow-md w-full px-4 md:px-auto">
        <div className="md:h-16 h-28 mx-auto md:px-4 container flex items-center justify-between flex-wrap md:flex-nowrap">
          {/* Logo (Hidden on small screens) */}
          <div className="text-indigo-500 md:order-1 hidden md:block">
            <Link href="/">
              <Image
                src={logo}
                className="h-16 w-16 md:h-20 md:w-20"
                alt="Parthiba logo"
              />
            </Link>
          </div>
          <div className="text-gray-500 order-3 w-full md:w-auto md:order-2">
            <ul className="flex font-semibold justify-between text-lg">
              <li className="md:px-2 md:py-2 px-3 py-2 bg-gradient-to-br from-yellow-300 to-orange-500 bg-clip-text text-transparent font-bold">
                <Link href="/">
                  Home
                </Link>
              </li>
              <li className="md:px-2 md:py-2 px-3 py-2 hover:text-yellow-700">
                <Link href="/About">
                  About Me
                </Link>
              </li>
              <li className="md:px-2 md:py-2 px-3 py-2 hover:text-yellow-700">
                <Link href="/prevexperience">
                  Experiences
                </Link>
              </li>
              <li className="md:px-2 md:py-2 px-3 py-2 hover:text-yellow-700">
                <Link href="/Skills">
                  Skills
                </Link>
              </li>
              <li className="md:px-2 md:py-2 px-3 py-2 hover:text-yellow-700">
                <Link href="/seeproject">
                  My Projects
                </Link>
              </li>
            </ul>
          </div>
          <div className="order-2 md:order-3">
            {/* Contact button (Hidden on small screens) */}
            <button className="hidden md:inline-block px-3 py-2 bg-gradient-to-br from-yellow-300 to-orange-500 text-gray-50 rounded-xl items-center gap-2 text-sm md:text-base">
              <span>Contact me</span>
            </button>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default NavBar;
