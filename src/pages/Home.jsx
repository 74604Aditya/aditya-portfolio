import Hero from '../components/Hero';
import "./Home.css";

import About from '../sections/About';
import Skills from '../sections/Skills';
import Projects from '../sections/Projects';
import Experience from '../sections/Experience';
import Education from '../sections/Education';
import Contact from '../sections/Contact';

export default function Home() {
  return (
    <div className="portfolio-home">
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Experience />
      <Education />
      <Contact />
    </div>
  );
}