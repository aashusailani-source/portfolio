import React, { useEffect, useState } from 'react';
import {
  FaReact,
  FaNodeJs,
  FaJs,
  FaHtml5,
  FaCss3Alt,
  FaGitAlt,
  FaTwitter,
  FaGithub,
  FaLinkedin,
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
        className={`z-10 text-white tracking-wider flex flex-col font-light items-center max-w-3xl px-6 py-8 sm:py-12 lg:pt-24 mx-auto transition-all duration-700 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}
      >
        <header className="mb-6 flex flex-col justify-between items-center text-center w-full">
          {/* name + social links */}
          <div className='flex flex-wrap w-full justify-between items-center'>

            <h1 className="text-2xl sm:text-3xl md:text-5xl lg:text-6xl mb-4 font-bold text-light-gray">
              Aashu Sailani
            </h1>
            {/* Social links */}
            <div className='flex gap-5 mb-4'>

              {/* Github */}
              <div
                onClick={() => window.open('https://github.com/aashusailani-source', '_blank')}
                className="cursor-pointer">
                <span className="cursor-pointer
                [&>svg]:h-4 [&>svg]:w-4 [&>svg]:fill-[rgb(100,100,100)]
                sm:[&>svg]:h-5 sm:[&>svg]:w-5 sm:[&>svg]:fill-[rgb(100,100,100)]
                md:[&>svg]:h-6 md:[&>svg]:w-6 md:[&>svg]:fill-[rgb(100,100,100)]
                lg:[&>svg]:h-8 lg:[&>svg]:w-8 lg:[&>svg]:fill-[rgb(100,100,100)]
                hover:[&>svg]:fill-[rgb(255,235,235)] [&>svg]:transition [&>svg]:duration-200 [&>svg]:ease-in-out">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 496 512">
                    <path
                      d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3 .3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5 .3-6.2 2.3zm44.2-1.7c-2.9 .7-4.9 2.6-4.6 4.9 .3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3 .7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3 .3 2.9 2.3 3.9 1.6 1 3.6 .7 4.3-.7 .7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3 .7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3 .7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z" />
                  </svg>
                </span>
              </div>

              {/* linkedin */}
              <div 
                onClick={() => window.open('https://www.linkedin.com/in/aashu-sailani-5325b633b/', '_blank')}
                className="cursor-pointer" >
                <span className="cursor-pointer 
                [&>svg]:h-4 [&>svg]:w-4 [&>svg]:fill-[rgb(100,100,100)]
                sm:[&>svg]:h-5 sm:[&>svg]:w-5 sm:[&>svg]:fill-[rgb(100,100,100)]
                md:[&>svg]:h-6 md:[&>svg]:w-6 md:[&>svg]:fill-[rgb(100,100,100)]
                lg:[&>svg]:h-8 lg:[&>svg]:w-8 lg:[&>svg]:fill-[rgb(100,100,100)] 
                hover:[&>svg]:fill-[rgb(255,255,235)] [&>svg]:transition [&>svg]:duration-200 [&>svg]:ease-in-out">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                    <path
                      d="M100.3 448H7.4V148.9h92.9zM53.8 108.1C24.1 108.1 0 83.5 0 53.8a53.8 53.8 0 0 1 107.6 0c0 29.7-24.1 54.3-53.8 54.3zM447.9 448h-92.7V302.4c0-34.7-.7-79.2-48.3-79.2-48.3 0-55.7 37.7-55.7 76.7V448h-92.8V148.9h89.1v40.8h1.3c12.4-23.5 42.7-48.3 87.9-48.3 94 0 111.3 61.9 111.3 142.3V448z" />
                  </svg>
                </span>
              </div>

              {/* X */}
              <div
                onClick={() => window.open('https://x.com/Rahul10287848', '_blank')}
                className="cursor-pointer" >
                <span className="cursor-pointer
                [&>svg]:h-4 [&>svg]:w-4 [&>svg]:fill-[rgb(100,100,100)]
                sm:[&>svg]:h-5 sm:[&>svg]:w-5 sm:[&>svg]:fill-[rgb(100,100,100)]
                md:[&>svg]:h-6 md:[&>svg]:w-6 md:[&>svg]:fill-[rgb(100,100,100)]
                lg:[&>svg]:h-8 lg:[&>svg]:w-8 lg:[&>svg]:fill-[rgb(100,100,100)] 
                hover:[&>svg]:fill-[rgb(255,255,235)] [&>svg]:transition [&>svg]:duration-200 [&>svg]:ease-in-out">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 512 512"
                  >
                    <path
                      d="M389.2 48h70.6L305.6 224.2 487 464H345L233.7 318.6 106.5 464H35.8L200.7 275.5 26.8 48H172.4L272.9 180.9 389.2 48zM364.4 421.8h39.1L151.1 88h-42L364.4 421.8z"
                    />
                  </svg>
                </span>
              </div>

            </div>

          </div>

          <div className='w-full flex gap-y-3 flex-wrap md:flex-row justify-between items-center mb-8'>
            <div className="flex items-center justify-center gap-3 md:gap-5 md:p-4
            lg:p-4 sm:p-3 p-3 h-[0.5px] sm:h-2 md:h-8 lg:h-8 rounded-lg bg-green-400 bg-opacity-15">
              <GiSuitcase className="text-xl md:text-2xl animate-blink text-green-200" />
              <p className="text-xs md:text-sm lg:text-lg italic text-green-400 opacity-75 font-bold lg:font-normal">
                Actively looking for new roles
              </p>
            </div>
            
            {/* Download Resume button */}
            {/* <div className='md:mt-0 bg-slate-700 rounded-xl hover:border-blue-950 hover:bg-black opacity-70 text-slate-100 transition-all duration-300' onClick={() => window.open('../../public/aashusailani_resume.pdf', '_blank')}>
              <button className='text-sm px-3 py-1 h-full rounded-xl hover:bg-opacity-0 w-full cursor-pointe md:text-base'>
                Download Resume
              </button>
            </div> */}

            <div className='md:mt-0 bg-slate-900 border-red-900 hover:scale-105 border-2 rounded-xl hover:border-blue-950 hover:bg-black opacity-70 text-slate-100 transition-all duration-300' onClick={() => window.open('/aashusailani_resume.pdf', '_blank')}>
              <button className='text-sm px-3 py-1 h-full rounded-xl hover:bg-opacity-0 w-full cursor-pointe md:text-base'>
                View Resume
              </button>
            </div>

          </div>

          <div className='flex flex-col mb-5 w-full'>
          <div className="flex flex-row justify-between text-sm items-start w-full mt-4">
            <p className="text-base md:text-lg lg:text-lg text-gray-400">
              Profession
            </p>
            <p className="text-base md:text-lg lg:text-lg italic text-gray-400">
              Software Engineer
            </p>
          </div>

          <div className="flex flex-row justify-between items-center w-full mt-4">
            <p className="text-base md:text-lg lg:text-lg text-gray-400">
              Education
            </p>
            <div className="flex flex-col items-end">
              <p className="text-base md:text-lg lg:text-lg italic text-gray-400">
                Bachelor Of Technology
              </p>
              <p className="text-base md:text-lg lg:text-lg max-w-40 md:max-w-full lg:max-w-full italic text-end text-gray-400">
                Computer Science and Engineering
              </p>
            </div>

          </div>
          </div>


          <p className="text-base md:text-lg lg:text-lg text-justify text-light-gray mt-4">
            I’m a Full Stack Developer with expertise in both frontend and
            backend technologies. I specialize in building dynamic,
            user-friendly, and efficient web applications, ensuring seamless
            performance across all layers of development.
          </p>
          <p className="text-base md:text-lg lg:text-lg text-justify text-light-gray mt-4">
            While my current focus is on full-stack development, I am eager to
            explore new areas like Web3, DevOps, and Cloud Computing in the
            future to broaden my knowledge and skills.
          </p>
        </header>
        <section className="w-full flex flex-col mb-8">
          <h2 className="text-4xl flex font-bold mb-4 text-light-gray">
            <span className='hover:underline transition-all duration-300'>Tech Stack</span>
          </h2>
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
          <h2 className="text-4xl font-bold mb-4 text-light-gray">
            <span className='hover:underline transition-all duration-300'>Projects</span>
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6 justify-center">
            {projects.map((project) => (
              <div
                key={project.id}
                className="project-item p-5 rounded-lg shadow-lg w-full text-start backdrop-blur-lg bg-opacity-50 border border-white/20"
              >
                {/* <img
                  src={project.image}
                  alt={`${project.title} Screenshot`}
                  className="rounded-md mb-4 w-full h-40 object-fill hover:scale-105 hover:shadow-lg transform transition-all duration-500 cursor-pointer"
                /> */}

                <div className="relative w-full p-0 h-48 overflow-hidden rounded-md mb-4">
                          {/* Video preview on hover */}
                  <video
                    src={project.video} // Reference to the video file in the public folder
                    poster={project.image} // Fallback image as a thumbnail
                    className="w-full h-full object-contain cursor-pointer"
                    onMouseEnter={(e) => {
                      e.target.play();
                      e.target.playbackRate = 2;
                    }} // Play video on hover
                    onMouseLeave={(e) => {
                      e.target.pause(); // Pause video on mouse leave
                      e.target.currentTime = 0;
                      e.target.load(); // Reset video to the start
                    }}
                    muted // Mute video for preview
                    loop={false} // Optional: Loop the video during hover
                          />
                 </div>

                <p className="text-2xl text-light-gray font-semibold mb-2">
                  {project.title}
                </p>
                <p className="text-light-gray text-base md:text-lg lg:text-lg mb-4 text-start tracking-wider">
                  {project.description}
                </p>
                <div className="flex justify-start items-center gap-4">
                  <a
                    href={project.liveLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="border-2 border-gray-800 rounded-lg px-3 py-2 bg-gray-900 text-gray-200  hover:scale-105 cursor-pointer hover:bg-gray-800 hover:text-gray-200 transform transition-all"
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
                    className="border-2 border-gray-800 rounded-lg px-3 py-2 bg-gray-900 text-gray-200  hover:scale-105 cursor-pointer hover:bg-gray-800 hover:text-gray-200 transform transition-all">
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
