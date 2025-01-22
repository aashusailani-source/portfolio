import React, { useEffect, useState } from 'react';
import {
  FaReact,
  FaNodeJs,
  FaJs,
  FaHtml5,
  FaCss3Alt,
  FaGitAlt,
} from 'react-icons/fa';
import { GiSuitcase } from 'react-icons/gi';
import {
  SiTailwindcss,
  SiExpress,
  SiPostman,
  SiMongodb,
  SiMysql,
  SiPostgresql,
  SiTypescript,
} from 'react-icons/si';
import projects from './Projects';

function Portfolio() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true); // Set visibility to true after a delay
    }, 500); // Delay of 0.5 seconds

    return () => clearTimeout(timer); // Cleanup the timer
  }, []);

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-900 select-none">
      <div
        className={`z-10 text-white flex flex-col items-center max-w-2xl px-6 py-8 sm:py-12 lg:pt-24 mx-auto transition-all duration-700 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}
      >
        <header className="mb-6 flex flex-col justify-center items-center text-center w-full">
          <h1 className="text-4xl md:text-5xl lg:text-6xl mb-5 font-bold text-light-gray">
            Aashu Sailani
          </h1>
          <div className="flex items-center justify-center gap-5 p-4 h-8 rounded-full bg-green-500 bg-opacity-25 mb-2">
            <GiSuitcase className="text-2xl animate-blink text-green-200" />
            <p className="text-base md:text-lg lg:text-xl italic text-green-400 opacity-75">
              Actively looking for new roles
            </p>
          </div>
          <div className="flex flex-row justify-between items-start w-full mt-4">
            <p className="text-base md:text-lg lg:text-xl text-gray-400">
              Profession
            </p>
            <p className="text-base md:text-lg lg:text-xl italic text-gray-400">
              Software Engineer
            </p>
          </div>
          <div className="flex flex-row justify-between items-center w-full mt-4">
            <p className="text-base md:text-lg lg:text-xl text-gray-400">
              Education
            </p>
            <div className="flex flex-col items-end">
              <p className="text-base md:text-lg lg:text-xl italic text-gray-400">
                Bachelor Of Technology
              </p>
              <p className="text-base md:text-lg lg:text-xl max-w-40 md:max-w-full lg:max-w-full italic text-end text-gray-400">
                Computer Science and Engineering
              </p>
            </div>
          </div>
          <p className="text-lg text-justify text-light-gray mt-4 tracking-tight">
            I’m a Full Stack Developer with expertise in both frontend and
            backend technologies. I specialize in building dynamic,
            user-friendly, and efficient web applications, ensuring seamless
            performance across all layers of development.
          </p>
          <p className="text-lg text-justify text-light-gray mt-4 tracking-tight">
            While my current focus is on full-stack development, I am eager to
            explore new areas like Web3, DevOps, and Cloud Computing in the
            future to broaden my knowledge and skills.
          </p>
        </header>
        <section className="w-full flex flex-col mb-8">
          <h2 className="text-3xl mb-4 text-light-gray">Tech Stack</h2>
          <div className="flex flex-wrap gap-3 justify-start">
            {[
              { Icon: FaReact, label: 'React' },
              { Icon: FaNodeJs, label: 'Node.js' },
              { Icon: FaJs, label: 'JavaScript' },
              { Icon: SiExpress, label: 'Express.js' },
              { Icon: FaHtml5, label: 'HTML' },
              { Icon: FaCss3Alt, label: 'CSS' },
              { Icon: SiTailwindcss, label: 'Tailwind CSS' },
              { Icon: SiMongodb, label: 'MongoDB' },
              { Icon: SiMysql, label: 'MySQL' },
              { Icon: SiPostgresql, label: 'PostgreSQL' },
              { Icon: SiTypescript, label: 'TypeScript' },
              { Icon: FaGitAlt, label: 'Git' },
              { Icon: SiPostman, label: 'Postman' },
            ].map(({ Icon, label }) => (
              <div
                key={label}
                className="flex items-center h-10 bg-zinc-900/50 px-4 rounded-md border border-zinc-800 transform transition-all duration-300 cursor-pointer hover:scale-105 hover:shadow-lg"
              >
                <Icon className="text-2xl mr-2" />
                <p className="text-light-gray">{label}</p>
              </div>
            ))}
          </div>
        </section>
        <section className="w-full mb-8">
          <h2 className="text-3xl mb-4 text-light-gray">Projects</h2>
          <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6 justify-center">
            {projects.map((project) => (
              <div
                key={project.id}
                className="project-item p-6 rounded-lg shadow-lg w-full text-center backdrop-blur-lg bg-opacity-50 border border-white/20"
              >
                <img
                  src={project.image}
                  alt={`${project.title} Screenshot`}
                  className="rounded-md mb-4 w-full h-40 object-fill hover:scale-105 hover:shadow-lg transform transition-all duration-500 cursor-pointer"
                />
                <p className="text-xl text-light-gray font-semibold mb-2">
                  {project.title}
                </p>
                <p className="text-light-gray mb-4 text-center tracking-tighter">
                  {project.description}
                </p>
                <div className="flex justify-center gap-4">
                  <a
                    href={project.liveLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-4 py-2 rounded-lg bg-green-600 text-gray-300 hover:scale-105 hover:bg-green-800 transition-all duration-300"
                  >
                    <span className="text transform transition-all duration-500">
                      Live Demo
                    </span>
                    <span className="hover-text transform transition-all duration-500">
                      Click Here!
                    </span>
                  </a>
                  <a
                    href={project.githubLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="border-2 border-gray-800 rounded-lg px-3 py-2 bg-gray-900 text-gray-200 cursor-pointer hover:bg-gray-800 hover:text-gray-200 transform transition-all"
                  >
                    <span className="text transform transition-all duration-500">
                      Source Code
                    </span>
                    <span className="hover-text transform transition-all duration-500">
                      Click Here!
                    </span>
                  </a>
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}

export default Portfolio;
