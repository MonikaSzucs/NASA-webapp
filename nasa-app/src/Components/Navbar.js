import React from "react";
import {Link} from "react-router-dom";
import logo from "../Assets/Images/Logo.png"

export default function Navbar() {
  return (
    <>
      <nav className="border-gray-200 px-2 sm:px-4 py-2.5 dark:bg-gray-800 bg-transparent">
        <div class="container flex flex-wrap justify-between items-center mx-auto w-4/5">
          <a href="#" class="flex items-center">
            <img src={logo} class="mr-3 h-6 w-16 sm:h-10" alt="NASA Logo" />
            <span class="self-center text-xl font-semibold whitespace-nowrap dark:text-white">NASA App</span>
          </a>
          <div className="md:flex justify-end hidden ">
            <div className="not-italic hover:italic pl-5">
              <Link to="../">_Home</Link>
            </div>
            <div className="not-italic hover:italic pl-5">
              <Link to="../Events">_Events</Link>
            </div>
            <div className="not-italic hover:italic pl-5">
              <Link to="../About">_About</Link>
            </div>
          </div>
          <div className="md:flex justify-end md:invisible">
            Smaller menu
          </div>
        </div>
      </nav>
    </>
  );
}
// Navbar