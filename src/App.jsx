import About from "./Components/About";
import Contact from "./Components/Contact";
import Hero from "./Components/Hero";
import Navbar from "./Components/Navbar";
import Projects from "./Components/Projects/Projects";
import Skills from "./Components/Skills";

import "./index.css";

function App() {
  return (
    <body className="bg-[#ECF5FF]">
      <navbar>
        <Navbar />
      </navbar>
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Contact />
      </main>
    </body>
  );
}

export default App;
