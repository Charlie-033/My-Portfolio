import React from "react";
import { FaLinkedin, FaGithub, FaFacebook, FaDownload } from "react-icons/fa";

const Hero = () => {
  return (
    <section
      id="home"
      className="w-full pt-24 flex items-center justify-center bg-[#ECF5FF] dark:bg-gray-900 transition-colors"
    >
      <div className="flex flex-col-reverse md:flex-row justify-between  gap-10 max-w-7xl px-6 md:px-12 lg:px-16 mx-auto w-full ">
        {/* Left Content */}
        <div className="flex-1 text-center md:text-left space-y-4 md:order-2 md:pt-24">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-800 dark:text-white font-raleway">
            Eleus Ahmed
          </h1>
          <h2 className="text-xl md:text-2xl font-semibold text-blue-600 dark:text-blue-400 font-raleway">
            Web Developer
          </h2>
          <p className="text-gray-600 dark:text-gray-300 max-w-lg mx-auto md:mx-0">
            Hi, I'm Eleus from Bangladesh. I specialize in building fast,
            responsive, and modern web applications using technologies like
            React, Tailwind CSS, Node.js, Express.js, MongoDB, and various
            frontend libraries in the React ecosystem.
          </p>

          {/* Social Icons */}
          <div className="flex justify-center md:justify-start gap-4 mt-4">
            <a
              href="https://www.linkedin.com/in/eleus-ahmed/"
              target="_blank"
              className="p-3 rounded-full bg-blue-500 text-white hover:scale-110 hover:bg-blue-600 transition-all"
            >
              <FaLinkedin />
            </a>
            <a
              href="https://github.com/Charlie-033/"
              target="_blank"
              className="p-3 rounded-full bg-gray-800 text-white hover:scale-110 hover:bg-black transition-all"
            >
              <FaGithub />
            </a>
            <a
              href="https://web.facebook.com/eleus.ahmed.2025/"
              target="_blank"
              className="p-3 rounded-full bg-blue-600 text-white hover:scale-110 hover:bg-blue-700 transition-all"
            >
              <FaFacebook />
            </a>
          </div>

          {/* Resume Button */}
          <div className="mt-6">
            <a
              href="/public/ELEUS AHMED Full Stack Resume .pdf"
              download="Eleus_Ahmed_Resume.pdf"
              className="inline-flex items-center gap-2 bg-blue-600 text-white 
              px-4 py-2 text-sm md:text-base rounded hover:bg-blue-700 transition-all"
            >
              <FaDownload />
              <span className="hidden sm:inline">Download Resume</span>
              <span className="inline sm:hidden">CV</span>
            </a>
          </div>
        </div>

        {/* Right Side Image/Circle */}
        <div className="flex justify-center md:order-1 lg:pl-32 lg:pb-24 md:pt-8 lg:pt-0">
          <img
            src="https://i.ibb.co/RGtq6dKJ/IMG-3192.jpg"
            alt=""
            className="w-48 h-48 md:w-84 md:h-84 lg:w-96 lg:h-96 object-cover rounded-full bg-blue-200 dark:bg-blue-900 hover:scale-105 shadow-lg transition-all duration-400"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
