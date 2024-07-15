import { Element } from 'react-scroll';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Contact from './components/Contact';
import './App.css';
import Navbar from './components/Navbar';
import Education from './components/Education';

const App = () => {
  return (
    <div className='appContainer flex flex-col'>

      <main className="pt-16">
      <Element name="navbar">
          <Navbar />
        </Element>
        <Element name="about">
          <About />
        </Element>
        <Element name="skills">
          <Skills />
        </Element>
        <Element name="education">
          <Education />
        </Element>
        <Element name="projects">
          <Projects />
        </Element>
        <Element name="experience">
          <Experience />
        </Element>
        <Element name="contact">
          <Contact />
        </Element>
      </main>
    </div>
  );
};

export default App;



