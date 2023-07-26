import React from "react";
import { AiFillLinkedin, AiFillInstagram, AiFillGithub } from "react-icons/ai";
import Image from "next/image";

const Intro = () => {
  return (
    <div className="container mx-auto">
      
      <div className="py-2 mb-10 text-center">
        <h2 className="py-2 text-5xl font-medium text-teal-600">
          Andika Satrio
        </h2>
        <h3 className="py-2 text-2xl ">FrontEnd Developer.</h3>
        <p className="text-gray-500 ">
          My name is Andika Satrio, I&apos;m a front-end developer based in
          Tangerang, Indonesia, ID.
        </p>
        <p className="text-gray-500 ">
          I am passionate about cutting-edge and beautiful interfaces and
          intuitively implemented UI.
        </p>
      </div>

      <section className="intro">
        <div className="relative mx-auto mt-5 mb-10 overflow-hidden rounded-full w-80 h-80">
          <Image
            src="/foto.jpg"
            className="object-cover"
            fill={true}
            alt="Foto si Dika"
          />
        </div>

        <div className="flex justify-center gap-10 py-5 mb-10 text-5xl text-gray-500">
          <a href="https://www.linkedin.com/in/andika-satrio-477570183/">
            <AiFillLinkedin />
          </a>
          <a href="https://www.instagram.com/andikastp/">
            <AiFillInstagram />
          </a>
          <a href="https://github.com/andika350">
            <AiFillGithub />
          </a>
        </div>
      </section>
    </div>
  );
};

export default Intro;
