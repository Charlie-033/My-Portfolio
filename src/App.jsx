import About from "./Components/About";
import Contact from "./Components/Contact";
import Footer from "./Components/Footer";
import Hero from "./Components/Hero";
import Navbar from "./Components/Navbar";
import Projects from "./Components/Projects/Projects";
import Skills from "./Components/Skills";

import "./index.css";

function App() {
  return (
    <div className="bg-[#ECF5FF]">
      <nav>
        <Navbar />
      </nav>
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Contact />
      </main>
      <footer>
        <Footer/>
      </footer>
    </div>
  );
}

export default App;
