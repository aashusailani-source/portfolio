import React from 'react';
import { FaReact, FaNodeJs, FaJs, FaHtml5, FaCss3Alt} from 'react-icons/fa';
import { GiSuitcase } from 'react-icons/gi'
import { SiTailwindcss } from 'react-icons/si';
import { SiMongodb, SiMysql, SiPostgresql, SiTypescript } from 'react-icons/si';

function Portfolio() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-900 select-none">
      {/* Main container with responsive width */}
      <div className="z-10 text-white flex flex-col items-center max-w-2xl px-6 py-8 sm:py-12 lg:pt-24 mx-auto">
        
        {/* Header with updated name and description */}
        <header className="mb-6 flex flex-col justify-center items-center text-center w-full">
          <h1 className="text-4xl md:text-5xl lg:text-6xl mb-5 font-bold text-light-gray">Aashu Sailani</h1>

          {/* Icon inside a small circle with opacity */}
          <div className="flex items-center justify-center gap-5 p-4 h-8 rounded-full bg-green-500 bg-opacity-25 mb-2">
            <GiSuitcase className="text-2xl animate-blink text-green-200" />
            <p className="text-base md:text-lg lg:text-xl italic text-green-400 opacity-75">Actively looking for new roles</p>
          </div>

          {/* Actively looking for new roles */}

          {/* Role */}
          <div className="flex flex-row justify-between items-start w-full mt-4">
            <p className="text-base md:text-lg lg:text-xl text-gray-400">Profession</p>
            <p className="text-base md:text-lg lg:text-xl italic text-gray-400">Software Engineer</p>
          </div>

          {/* Education Section */}
          <div className="flex flex-row justify-between items-center w-full mt-4">
            <p className="text-base md:text-lg lg:text-xl text-gray-400">Education</p>
            <div className='flex flex-col items-end'>
              <p className="text-base md:text-lg lg:text-xl italic text-gray-400">Bachelor Of Technology</p>
              <p className="text-base md:text-lg lg:text-xl max-w-40 md:max-w-full lg:max-w-full italic text-end text-gray-400">Computer Science and Engineering</p>
            </div>
          </div>

          <p className="text-lg text-justify text-light-gray mt-4">
            I am a passionate Full Stack Developer skilled in creating robust and dynamic web applications. With expertise in frontend and backend technologies, I specialize in delivering user-friendly and efficient solutions that cater to diverse needs. 
          </p>
          <p className="text-lg text-justify text-light-gray mt-4">
            While I am currently focused on full-stack development, I am enthusiastic about exploring new domains such as Web3 and DevOps in the future to further expand my skill set.
          </p>
        </header>

        {/* Tech Stack Section */}
        <section className="w-full flex flex-col mb-8">
          <h2 className="text-3xl mb-4 text-light-gray">Tech Stack</h2>
          <div className="flex flex-wrap gap-6 justify-start">
            <div className="flex items-center h-10 bg-zinc-900/50 px-4 rounded-md border border-zinc-800 transform transition-all duration-300 cursor-pointer hover:scale-105 hover:shadow-lg">
              <FaReact className="text-2xl mr-2" />
              <p className="text-light-gray">React</p>
            </div>

            <div className="flex items-center h-10 bg-zinc-900/50 px-4 rounded-md border border-zinc-800 transform transition-all duration-300 cursor-pointer hover:scale-105 hover:shadow-lg">
              <FaNodeJs className="text-2xl mr-2" />
              <p className="text-light-gray">Node.js</p>
            </div>

            <div className="flex items-center h-10 bg-zinc-900/50 px-4 rounded-md border border-zinc-800 transform transition-all duration-300 cursor-pointer hover:scale-105 hover:shadow-lg">
              <FaJs className="text-2xl mr-2" />
              <p className="text-light-gray">JavaScript</p>
            </div>

            <div className="flex items-center h-10 bg-zinc-900/50 px-4 rounded-md border border-zinc-800 transform transition-all duration-300 cursor-pointer hover:scale-105 hover:shadow-lg">
              <FaHtml5 className="text-2xl mr-2" />
              <p className="text-light-gray">HTML</p>
            </div>

            <div className="flex items-center h-10 bg-zinc-900/50 px-4 rounded-md border border-zinc-800 transform transition-all duration-300 cursor-pointer hover:scale-105 hover:shadow-lg">
              <FaCss3Alt className="text-2xl mr-2" />
              <p className="text-light-gray">CSS</p>
            </div>

            <div className="flex items-center h-10 bg-zinc-900/50 px-4 rounded-md border border-zinc-800 transform transition-all duration-300 cursor-pointer hover:scale-105 hover:shadow-lg">
              <SiTailwindcss className="text-2xl mr-2" />
              <p className="text-light-gray">Tailwind CSS</p>
            </div>

            {/* New tech stack items */}
            <div className="flex items-center h-10 bg-zinc-900/50 px-4 rounded-md border border-zinc-800 transform transition-all duration-300 cursor-pointer hover:scale-105 hover:shadow-lg">
              <SiMongodb className="text-2xl mr-2" />
              <p className="text-light-gray">MongoDB</p>
            </div>

            <div className="flex items-center h-10 bg-zinc-900/50 px-4 rounded-md border border-zinc-800 transform transition-all duration-300 cursor-pointer hover:scale-105 hover:shadow-lg">
              <SiMysql className="text-2xl mr-2" />
              <p className="text-light-gray">MySQL</p>
            </div>

            <div className="flex items-center h-10 bg-zinc-900/50 px-4 rounded-md border border-zinc-800 transform transition-all duration-300 cursor-pointer hover:scale-105 hover:shadow-lg">
              <SiPostgresql className="text-2xl mr-2" />
              <p className="text-light-gray">PostgreSQL</p>
            </div>

            <div className="flex items-center h-10 bg-zinc-900/50 px-4 rounded-md border border-zinc-800 transform transition-all duration-300 cursor-pointer hover:scale-105 hover:shadow-lg">
              <SiTypescript className="text-2xl mr-2" />
              <p className="text-light-gray">TypeScript</p>
            </div>
          </div>
        </section>

        {/* Projects Section */}
        <section className="w-full mb-8">
          <h2 className="text-3xl mb-4 text-light-gray">Projects</h2>

          <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6 justify-center">
            {/* Project 1 */}
            <div className="project-item p-6 rounded-lg shadow-lg w-full text-center backdrop-blur-lg bg-black/60 bg-opacity-40 border border-white/20">
              <p className="text-lg text-light-gray">Project 1</p>
              <p className="text-light-gray">A description of Project 1 goes here. This project uses various technologies.</p>
            </div>

            {/* Project 2 */}
            <div className="project-item p-6 rounded-lg shadow-lg w-full text-center backdrop-blur-lg bg-black/60 bg-opacity-40 border border-white/20">
              <p className="text-lg text-light-gray">Project 2</p>
              <p className="text-light-gray">A description of Project 2 goes here. This project uses different technologies.</p>
            </div>

            {/* Project 3 */}
            <div className="project-item p-6 rounded-lg shadow-lg w-full text-center backdrop-blur-lg bg-black/60 bg-opacity-40 border border-white/20">
              <p className="text-lg text-light-gray">Project 3</p>
              <p className="text-light-gray">A description of Project 3 goes here. This project utilizes cutting-edge technologies.</p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

export default Portfolio;
