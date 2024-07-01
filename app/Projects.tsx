import Link from "next/link";
import React from "react";

const Projects = () => {
  return (
    <div id="projects" className=" w-full h:svh py-72 :py-16 scroll-smooth">
      <div className="max-w-[1440px] m-auto p-4">
        <p className="uppercase text-2xl font-semibold text-[#709dff] tracking-widest">
          Projects
        </p>
        <div className="grid md:grid-cols-2 gap-6 px-6 ">
          <div className=" relative flex justify-center items-center rounded-xl shadow-xl shadow-gray-400 p-4 hover:scale-105 ease-in duration-300 group hover:bg-gradient-to-r from-[#5651ef] to-[#709dff]">
            <img
              className=" group-hover:opacity-10"
              src="/assets/portfolio.png"
            ></img>
            <div className="hidden fixed text-center group-hover:block">
              <h1 className="text-white text-nowrap text-lg sm:text-4xl">Portfolio Website</h1>
              <p className="text-white py-4">
                Next.js, JavaScript, HTML & Tailwind CSS
              </p>
              <Link href="./">
                <p className="rounded-xl shadow-xl shadow-gray-400 px-2 md:p-4 sm:p-2 bg-white text-xl font-semibold hover:scale-x-105 ease-in duration-300">
                  More Info
        <p className="text-4xl py-4 font-bold">What I've built</p>
                </p>
              </Link>
            </div>
          </div>
          <div className=" relative flex justify-center items-center rounded-xl shadow-xl shadow-gray-400 p-4 hover:scale-105 ease-in duration-300 group hover:bg-gradient-to-r from-[#5651ef] to-[#709dff]">
            <img
              className=" group-hover:opacity-10"
              src="/assets/rockpaper.jpg"
            ></img>
            <div className="hidden fixed text-center group-hover:block">
              <h1 className="text-white ">Rock Paper Scissor Game</h1>
              <p className="text-white py-4"> HTML, CSS & JavaScript</p>
              <Link href="./">
                <p className="rounded-xl shadow-xl shadow-gray-400 px-2 md:p-4 bg-white text-xl font-semibold hover:scale-x-105 ease-in duration-300">
                  More Info
                </p>
              </Link>
            </div>
          </div>
          <div className=" relative flex justify-center items-center rounded-xl shadow-xl shadow-gray-400 p-4 hover:scale-105 ease-in duration-300 group hover:bg-gradient-to-r from-[#5651ef] to-[#709dff]">
            <img
              className=" group-hover:opacity-10"
              src="/assets/portfolio.png"
            ></img>
            <div className="hidden fixed text-center group-hover:block">
              <h1 className="text-white ">More to Come</h1>
              <p className="text-white py-4">Currently in the pipeline</p>
              <Link href="./">
                <p className="rounded-xl shadow-xl shadow-gray-400 px-2 md:p-4 bg-white text-xl font-semibold hover:scale-x-105 ease-in duration-300">
                  More Info
                </p>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
