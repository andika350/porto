import Image from "next/image";
import React from "react";

const Skills = () => {
  return (
    <section className="skills">
      <h1 className="py-2 mt-5 mb-5 text-5xl font-medium text-center text-teal-600">
        Skills
      </h1>
      <div className="skills-card">
        <div className="card">
          <Image
            src="/html.png"
            width={100}
            height={100}
            alt="html5 logo"
            title="HTML5"
          />
        </div>
        <div className="card">
          <Image
            src="/css.png"
            width={100}
            height={100}
            alt="css3 logo"
            title="CSS3"
          />
        </div>
        <div className="card">
          <Image
            src="/js.png"
            width={100}
            height={100}
            alt="javascript logo"
            title="Javascript"
          />
        </div>
        <div className="card">
          <Image
            src="/react.png"
            width={100}
            height={100}
            alt="reactjs logo"
            title="ReactJS"
          />
        </div>
        <div className="card">
          <Image
            src="/mongdob.png"
            width={100}
            height={100}
            alt="mongodb logo"
            title="Mongodb"
          />
        </div>
        <div className="card">
          <Image
            src="/express.png"
            width={100}
            height={100}
            alt="expressjs logo"
            title="ExpressJs"
          />
        </div>
        <div className="card">
          <Image
            src="/node.png"
            width={100}
            height={100}
            alt="nodejs logo"
            title="NodeJs"
          />
        </div>
        <div className="card">
          <Image
            src="/tailwind.png"
            width={100}
            height={100}
            alt="tailwind logo"
            title="Tailwind css"
          />
        </div>
      </div>
    </section>
  );
};

export default Skills;
