import Image from "next/image";
import './globals.css'
import HeroSection from "./pages/HeroSection";
import Navbar from "./pages/Navbar";
import About from "./pages/About";
import Skills from "./pages/Skills";
import Education from "./pages/Education";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";


export default function Home() {
  return (
    <div className="flex-column min-h-screen text-white">
      <Navbar/>
      <HeroSection /> 
      <About />
      <Skills />
      <Education />
      <Projects />
      <Contact/>
      
    </div>
  );
}
