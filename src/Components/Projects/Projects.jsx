import React from "react";
import ProjectCard from "./ProjectCard";

const projectList = [
  {
    title: "JobHunt - Winter Job Portal",
    description:
      "Job Hunt is a modern, responsive web application that simplifies job searching by aggregating listings from various companies in one place.",
    image: "https://i.ibb.co/JwMpKj90/Screenshot-2025-06-30-113240.png",
    features: [
  "🔐 One-Click Apply with eligibility check",
  "🧾 Centralized Listings from multiple companies",
  "📱 Responsive & Intuitive UI for all devices",
],
    techStack: ["React", "Tailwind CSS", "Firebase"],
    live: "https://assignment-9-auth-1557b.web.app/",
    github: "https://github.com/Charlie-033/Job-Hunt",
    slug: "jobtrack",
  },
  {
    title: "Plant Care Tracker",
    description: "The Plant Care Tracker is a full-stack, mobile-responsive web app for plant lovers.A Plant Lab themed UI with dark/light mode. Users can manage plant data, log care tasks, and receive reminders.",
    image: "https://i.ibb.co/Zp3qSyWd/Screenshot-2025-06-30-121934.png",
    features: [
  "✅ Full Plant CRUD System with clean UI and modals",
  "📅 Care Tracking with logs, health & reminders",
  "🌗 Dark/Light Mode + responsive plant-themed UI",
],
    techStack: ["React", "Tailwind CSS", "Firebase", "Express.js", "Mongodb"],
    live: "https://plant-care-tracker-5b57e.web.app/",
    github: "https://github.com/Charlie-033/Plant-Care-Tracker",
    slug: "plant-care-tracker",
  },
  {
    title: "Hotel Booking Platform",
    description:
      "Hotelux is a full-stack hotel booking platform featuring a modern UI/UX, secure authentication (Email/Google), real-time booking, and a comprehensive review system.",
    image: "https://i.ibb.co/kVHF79YF/Screenshot-2025-06-30-121456.png",
    features: [
  "🏨 Filter rooms by price with server-side logic",
  "📅 Booking & cancellation with date-based rules",
  "📝 Authenticated users can leave rated reviews",
],
    techStack: ["React", "Node.js", "Express.js", "MongoDB"],
    live: "https://hotel-booking-platform-48b83.web.app/",
    github: "https://github.com/Charlie-033/HoteLux",
    slug: "hotel-booking",
  },
];

const Projects = () => {
  return (
    <section
      id="projects"
      className="pt-24 px-6 md:px-12 lg:px-24 bg-[#ECF5FF] dark:bg-gray-900 transition-colors"
    >
      <h2 className="text-4xl md:text-4xl font-bold text-center mb-12 text-gray-800 dark:text-white font-raleway">
        My Projects
      </h2>
      <p className="text-center max-w-4xl mx-auto text-gray-600 dark:text-gray-300 mb-12">
        Here are some of the real-world projects I've built to sharpen my
        development skills and solve practical problems. I focus on creating
        responsive, user-friendly, and scalable applications using modern
        technologies like React, Node.js, MongoDB, and Tailwind CSS. Each
        project reflects my passion for clean code, intuitive UX, and continual
        growth as a developer.
      </p>
      <div className="space-y-10 max-w-6xl mx-auto">
        {projectList.map((project, index) => (
          <ProjectCard key={index} project={project} />
        ))}
      </div>
    </section>
  );
};

export default Projects;
