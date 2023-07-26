import React from 'react'
import { BsFillMoonStarsFill } from "react-icons/bs";

const Nav = () => {
  return (
    <nav className="flex justify-between p-10 py-10 mb-12 md:px-40">
      <h1 className="text-xl">DevelopedbyDika</h1>
      <ul className="flex items-center">
        <li>
          <BsFillMoonStarsFill className="text-xl cursor-pointer" />
        </li>
        <li>
          <a
            href="#"
            className="px-4 py-2 ml-8 text-white rounded-md bg-gradient-to-r from-cyan-500 to-teal-600"
          >
            Projects
          </a>
        </li>
      </ul>
    </nav>
  );
}

export default Nav