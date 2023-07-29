import React from "react";

const Nav = () => {
  return (
    <nav className="flex justify-between p-10 py-10 mb-12 md:px-40">
      <h1 className="text-xl">DevelopedbyDika</h1>
      <ul className="flex items-center">
        <li>
          <a
            id="projects-btn"
            href="#projects"
            className="px-4 py-2 ml-8 text-white rounded-md bg-gradient-to-r from-cyan-500 to-teal-600"
          >
            Projects
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
