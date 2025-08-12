import React from "react";
import { motion } from "framer-motion";
import { FaCheckCircle, FaExternalLinkAlt, FaGithub, FaInfoCircle } from "react-icons/fa";

const ProjectCard = ({ project }) => {
  return (
    <motion.div
      whileHover={{ scale: 1.002 }}
      className="w-full flex flex-col lg:flex-row gap-6 bg-white dark:bg-gray-800 rounded-xl shadow-md p-6 hover:shadow-xl transition-all"
    >
      {/* Image */}
      <div className="lg:w-1/2">
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-64 object-cover rounded-lg"
        />
      </div>

      {/* Right Content */}
      <div className="lg:w-1/2 flex flex-col justify-between space-y-4">
        {/* Title & Description */}
        <div>
          <h3 className="text-2xl font-bold text-gray-800 dark:text-white">{project.title}</h3>
          <p className="text-gray-600 dark:text-gray-300">{project.description}</p>
        </div>

        {/* Features */}
        <ul className="space-y-1 text-sm text-gray-700 dark:text-gray-300">
          {project.features.map((feature, index) => (
            <li key={index} className="flex items-center gap-2">
              <FaCheckCircle className="text-green-500" />
              {feature}
            </li>
          ))}
        </ul>

        {/* Tech Stack Badges */}
        <div className="flex flex-wrap gap-2">
          {project.techStack.map((tech, index) => (
            <span
              key={index}
              className="bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200 text-xs font-semibold px-3 py-1 rounded-full shadow-sm"
            >
              {tech}
            </span>
          ))}
        </div>

        {/* Buttons */}
        <div className="flex gap-4 pt-2">
          <a
            href={project.live}
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-2 bg-green-500 hover:bg-green-600 text-white text-sm px-3 md:px-4 py-2 rounded transition"
          >
            <FaExternalLinkAlt />
            Live
          </a>
          <a
            href={project.github}
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-2 bg-gray-700 hover:bg-gray-800 text-white text-sm px-3 md:px-4 py-2 rounded transition"
          >
            <FaGithub />
            GitHub
          </a>
          <a
            href={`/projects/${project.slug}`}
            className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white text-sm px-3 md:px-4 py-2 rounded transition"
          >
            <FaInfoCircle />
            Details
          </a>
        </div>
      </div>
    </motion.div>
  );
};

export default ProjectCard;
