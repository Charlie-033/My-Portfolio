import React from "react";
import { FaGithub, FaLinkedin, FaFacebook, FaGlobe } from "react-icons/fa";

const Footer = () => {
  return (
    <section className="bg-[#ECF5FF] dark:bg-gray-900 text-gray-700 dark:text-gray-300 border-t border-gray-300 dark:border-gray-700 transition-all">
      <div className="max-w-7xl mx-auto px-6 py-8 flex flex-col md:flex-row justify-between gap-8">
        
        {/* Left - Info */}
        <div>
          <h3 className="text-2xl font-bold text-gray-800 dark:text-white font-raleway mb-2">
            Eleus Ahmed
          </h3>
          <p className="text-sm max-w-xs">
            MERN Stack Developer | 
          </p>
        </div>

        {/* Center - Navigation */}
        <div className="flex flex-col gap-2">
          <h4 className="font-semibold mb-1">Quick Links</h4>
          <a href="#about" className="hover:underline">About</a>
          <a href="#projects" className="hover:underline">Projects</a>
          <a href="#skills" className="hover:underline">Skills</a>
          <a href="#contact" className="hover:underline">Contact</a>
        </div>

        {/* Right - Social */}
        <div className="flex flex-col items-start">
          <h4 className="font-semibold mb-1">Connect</h4>
          <div className="flex space-x-4 text-xl">
            <a href="https://github.com/Charlie-033" target="_blank" rel="noopener noreferrer">
              <FaGithub className="hover:text-black dark:hover:text-white" />
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
              <FaLinkedin className="hover:text-blue-600" />
            </a>
            <a href="https://web.facebook.com/eleus.ahmed.2025/" target="_blank" rel="noopener noreferrer">
              <FaFacebook className="hover:text-blue-500" />
            </a>
            <a href="https://yourwebsite.com" target="_blank" rel="noopener noreferrer">
              <FaGlobe className="hover:text-green-500" />
            </a>
          </div>
        </div>
      </div>

      {/* Bottom */}
      <div className="text-center text-xs text-gray-500 dark:text-gray-400 py-4 border-t border-gray-300 dark:border-gray-700 transition-all">
        © {new Date().getFullYear()} Eleus Ahmed. All rights reserved.
      </div>
    </section>
  );
};

export default Footer;
