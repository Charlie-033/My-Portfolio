import React from "react";
import { motion } from "framer-motion";
import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaNodeJs,
  FaGithub,
} from "react-icons/fa";
import { SiTailwindcss, SiExpress, SiMongodb } from "react-icons/si";

const skillsTop = [
  {
    name: "React.js",
    icon: <FaReact className="text-cyan-400 text-4xl" />,
    description: "Component-based frontend framework.",
    category: "Frontend",
  },
];

const skillsMiddle = [
  {
    name: "JavaScript",
    icon: <FaJs className="text-yellow-400 text-4xl" />,
    description: "Dynamic, event-driven logic.",
    category: "Frontend",
  },
  {
    name: "Node.js",
    icon: <FaNodeJs className="text-green-500 text-4xl" />,
    description: "JavaScript runtime for backend.",
    category: "Backend",
  },
  {
    name: "MongoDB",
    icon: <SiMongodb className="text-green-600 text-4xl" />,
    description: "NoSQL document-based database.",
    category: "Backend",
  },
];

const skillsBottom = [
  {
    name: "HTML5",
    icon: <FaHtml5 className="text-orange-600 text-4xl" />,
    description: "Semantic structure for the web.",
    category: "Frontend",
  },
  {
    name: "CSS3",
    icon: <FaCss3Alt className="text-blue-500 text-4xl" />,
    description: "Modern styling with responsiveness.",
    category: "Frontend",
  },
  {
    name: "Tailwind CSS",
    icon: <SiTailwindcss className="text-sky-400 text-4xl" />,
    description: "Utility-first CSS framework.",
    category: "Frontend",
  },
  {
    name: "Express.js",
    icon: <SiExpress className="text-gray-700 dark:text-gray-300 text-4xl" />,
    description: "Minimal backend framework.",
    category: "Backend",
  },
  {
    name: "Git & GitHub",
    icon: <FaGithub className="text-gray-800 dark:text-gray-200 text-4xl" />,
    description: "Version control & collaboration.",
    category: "Tools",
  },
];

const SkillRow = ({ skills }) => (
  <div className="flex flex-wrap justify-center gap-6">
    {skills.map((skill, index) => (
      <motion.div
        key={index}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.98 }}
        className="w-64 p-6 rounded-xl bg-white dark:bg-gray-800 shadow-md transition-all hover:shadow-xl"
      >
        <div className="flex flex-col items-center gap-3">
          {skill.icon}
          <h3 className="text-lg font-semibold text-gray-800 dark:text-white">
            {skill.name}
          </h3>
          <p className="text-sm text-center text-gray-600 dark:text-gray-300">
            {skill.description}
          </p>
          <span className="mt-2 text-xs text-blue-600 dark:text-blue-400 font-medium uppercase tracking-wide">
            {skill.category}
          </span>
        </div>
      </motion.div>
    ))}
  </div>
);

const Skills = () => {
  return (
    <section
      id="skills"
      className="bg-[#ECF5FF] dark:bg-gray-900 py-20 px-6 md:px-12 lg:px-24 transition-colors"
    >
      <div className="max-w-7xl mx-auto text-center space-y-12">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800 dark:text-white">
          My Skills
        </h2>

        <div className="space-y-10">
          <SkillRow skills={skillsTop} />
          <SkillRow skills={skillsMiddle} />
          <SkillRow skills={skillsBottom} />
        </div>
      </div>
    </section>
  );
};

export default Skills;
