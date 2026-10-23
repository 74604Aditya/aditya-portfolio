
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Navbar from './components/Navbar';
import Footer from './components/Footer';

import Home from './pages/Home';
import Skills from './sections/Skills';
import Projects from './sections/Projects';
import Experience from "./sections/Experience";
import Education from "./sections/Education";
import Contact from "./sections/Contact";

import './App.css';

function App() {
  return (
    <BrowserRouter>
      <div className="portfolio-app">
        <Navbar />

        <main className="portfolio-main">
          <Routes>
            {/* All portfolio sections are rendered on the home page */}
            <Route path="/" element={<Home />} />

            <Route
              path="/skills"
              element={<Skills />}
            />
            <Route
              path="/projects"
              element={<Projects />}
            />
            <Route
              path="/experience"
              element={<Experience />}
            />
            <Route
              path="/education"
              element={<Education />}
            />
            <Route
              path="/contact"
              element={<Contact />}
            />
          </Routes>
        </main>

        <Footer />

      </div>
    </BrowserRouter >
  );
}

export default App;
