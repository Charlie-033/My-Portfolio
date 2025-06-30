import React, { useState } from "react";
import { Link as ScrollLink } from "react-scroll";
import { FaDownload, FaMoon, FaSun, FaBars, FaTimes } from "react-icons/fa";
import { useTheme } from "../Context/ThemeProvider";

const Navbar = () => {
  const navItems = ["about", "projects", "skills", "contact"];
  const { isDark, setIsDark } = useTheme();
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="w-full sticky top-0 z-50 bg-[#FDF7F0] dark:bg-gray-900 shadow-md transition-all">
      <div className="max-w-7xl mx-auto flex justify-between items-center px-4 py-3 md:py-4">
        {/* Logo */}
        <div className="text-2xl font-bold text-blue-600 dark:text-blue-400 font-raleway flex items-center gap-4">
          <img src="https://i.ibb.co/Myv62SpZ/professional-portfolio.png" width={25}/>Eleus.Dev
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-6">
          {navItems.map((item) => (
            <ScrollLink
              key={item}
              to={item}
              smooth={true}
              duration={500}
              offset={-60}
              className="capitalize text-gray-700 dark:text-gray-200 hover:text-blue-500 cursor-pointer transition-colors"
            >
              {item}
            </ScrollLink>
          ))}
        </div>

        {/* Right side - dark mode toggle and resume */}
        <div className="flex items-center gap-4">
          {/* Theme toggle */}
          <button
            onClick={() => setIsDark(!isDark)}
            className="p-2 rounded-full bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-100 transition"
            aria-label="Toggle Theme"
          >
            {isDark ? <FaSun /> : <FaMoon />}
          </button>

          {/* Resume button (hidden on small screens) */}
          <a
            href="/resume.pdf"
            download
            className="flex items-center gap-2 bg-blue-600 text-white 
             px-2 py-1 text-sm rounded hover:bg-blue-700 transition-all 
             md:px-4 md:py-2 md:text-base"
          >
            <FaDownload className="text-sm md:text-base" />
            <span className="hidden sm:inline md:inline">Resume</span>
            <span className="inline sm:hidden">CV</span>
          </a>

          {/* Mobile menu button */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden text-gray-800 dark:text-gray-100 text-xl"
          >
            {menuOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      {menuOpen && (
        <div className="md:hidden px-4 pb-4 space-y-3 bg-white dark:bg-gray-900 transition-all">
          {navItems.map((item) => (
            <ScrollLink
              key={item}
              to={item}
              smooth={true}
              duration={500}
              offset={-60}
              onClick={() => setMenuOpen(false)}
              className="block capitalize text-gray-700 dark:text-gray-200 hover:text-blue-500 cursor-pointer transition-colors"
            >
              {item}
            </ScrollLink>
          ))}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
