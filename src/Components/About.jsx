import React from "react";

const About = () => {
  return (
    <section
      id="about"
      className="w-full dark:bg-gray-900 transition-colors"
    >
      {/* <div className="bg-gray-50 dark:bg-gray-900 transition-colors"> */}
        <div className="max-w-4xl mx-auto text-center space-y-8 py-20 px-6 md:px-12 lg:px-24 bg-gray-50 dark:bg-gray-900 transition-colors rounded-2xl shadow">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800 dark:text-white font-raleway">
          About Me
        </h2>

        <p className="text-gray-700 dark:text-gray-300 text-lg leading-relaxed">
          My journey into programming began with a deep fascination for
          technology and computer systems since childhood. Over the years, this
          curiosity turned into a clear passion, pushing me to pursue mastery in
          the world of software development. I started with the basics — HTML
          and CSS — and gradually built a strong connection with JavaScript and
          React. This opened the door to mastering modern frontend frameworks
          and libraries, where I focused on crafting responsive, intuitive, and
          scalable interfaces. My learning later expanded into backend
          development using Node.js, Express.js, and MongoDB — giving me a solid
          foundation in building full-stack applications. Currently, I’m
          sharpening my frontend expertise while integrating essential backend
          technologies to become a complete web developer.
        </p>

        <p className="text-gray-700 dark:text-gray-300 text-lg leading-relaxed">
          I genuinely enjoy exploring new technologies and programming
          languages, diving deep into complex logic, debugging challenging
          issues, and solving problems with precision and curiosity. I love
          working with production-level code, collaborating in teams, and
          continuously learning from experienced developers. For me, coding
          isn’t just a skill — it’s a passion and a never-ending journey of
          exploration and growth.
        </p>

        <p className="text-gray-700 dark:text-gray-300 text-lg leading-relaxed">
          Outside of coding, I find joy in reconnecting with nature through
          short trips and spending quality time with close friends. I'm deeply
          passionate about video games — especially action and popular games.
          I'm also an avid movie enthusiast, always drawn to films that
          challenge the mind or tell meaningful, real-life stories. Beyond
          screens, I have a deep appreciation for reading — particularly
          historical accounts and compelling novels that spark thought. Music is
          another constant in my life; I love listening to timeless classics and
          legendary tracks. And when it's time to unwind, you’ll often find me
          playing a casual game of cricket or enjoying a live football match.
        </p>

        <p className="text-gray-800 dark:text-gray-200 text-lg font-medium">
          In short — I’m not just building code; I’m building myself. Every bug,
          every project, and every lesson is shaping me into the developer I
          aspire to become.
        </p>
      </div>
      {/* </div> */}
    </section>
  );
};

export default About;
