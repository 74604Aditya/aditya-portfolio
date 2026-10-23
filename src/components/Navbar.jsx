
import { useEffect, useState } from 'react';
import { Link as ScrollLink } from 'react-scroll';
import { useLocation, useNavigate } from 'react-router-dom';

import {
  FiCode,
  FiDownload,
  FiGithub,
  FiLinkedin,
  FiMenu,
  FiX,
} from 'react-icons/fi';

import './Navbar.css';

const navLinks = [
  { label: 'Home', to: 'home' },
  { label: 'About', to: 'about' },
  { label: 'Skills', to: 'skills' },
  { label: 'Projects', to: 'projects' },
  { label: 'Experience', to: 'experience' },
  { label: 'Education', to: 'education' },
  { label: 'Contact', to: 'contact' },
];

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const location = useLocation();
  const navigate = useNavigate();

  const closeMenu = () => setMenuOpen(false);

  const toggleMenu = () => {
    setMenuOpen((previous) => !previous);
  };

  // Prevent background scrolling when the mobile menu is open.
  useEffect(() => {
    document.body.classList.toggle('portfolio-menu-open', menuOpen);

    return () => {
      document.body.classList.remove('portfolio-menu-open');
    };
  }, [menuOpen]);

  // Close the menu when the Escape key is pressed.
  useEffect(() => {
    if (!menuOpen) return undefined;

    const handleKeyDown = (event) => {
      if (event.key === 'Escape') {
        closeMenu();
      }
    };

    window.addEventListener('keydown', handleKeyDown);

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [menuOpen]);

  // If a section is selected from a project details page,
  // return to the home page first.
  const handleSectionNavigation = (sectionId) => {
    closeMenu();

    if (location.pathname !== '/') {
      navigate('/', { state: { scrollToSection: sectionId } });
    }
  };

  return (
    <>
      {menuOpen && (
        <button
          type="button"
          className="portfolio-menu-overlay"
          aria-label="Close navigation menu"
          onClick={closeMenu}
        />
      )}

      <nav className="portfolio-navbar">
        <div className="container portfolio-navbar-container">
          {/* Brand */}
          <ScrollLink
            to="home"
            smooth
            duration={450}
            offset={-85}
            className="portfolio-brand"
            onClick={() => handleSectionNavigation('home')}
            aria-label="Aditya Lande home"
          >
            <span className="portfolio-brand-icon">
              <FiCode />
            </span>

            <span className="portfolio-brand-text">
              <span className="portfolio-brand-name">
                Aditya Lande
              </span>

              <span className="portfolio-brand-role">
                <marquee behavior="scroll" direction="right">
                JAVA FULL STACK DEVELOPER
                </marquee>
              </span>
            </span>
          </ScrollLink>

          {/* Mobile menu toggle */}
          <button
            type="button"
            className={`portfolio-menu-toggle ${
              menuOpen ? 'is-open' : ''
            }`}
            onClick={toggleMenu}
            aria-label={
              menuOpen
                ? 'Close navigation menu'
                : 'Open navigation menu'
            }
            aria-expanded={menuOpen}
            aria-controls="portfolioNavigation"
          >
            {menuOpen ? <FiX /> : <FiMenu />}
          </button>

          {/* Navigation menu */}
          <div
            id="portfolioNavigation"
            className={`portfolio-nav-collapse ${
              menuOpen ? 'is-open' : ''
            }`}
          >
            {/* <div className="portfolio-mobile-menu-header">
              <span>Aditya Lande</span>

              <button
                type="button"
                className="portfolio-mobile-close"
                onClick={closeMenu}
                aria-label="Close navigation menu"
              >
                <FiX />
              </button>
            </div> */}

            <ul className="portfolio-nav-links">
              {navLinks.map((item) => (
                <li key={item.to}>
                  <ScrollLink
                    to={item.to}
                    smooth
                    duration={450}
                    offset={-85}
                    spy
                    activeClass="portfolio-nav-active"
                    className="portfolio-nav-link"
                    onClick={() =>
                      handleSectionNavigation(item.to)
                    }
                  >
                    {item.label}
                  </ScrollLink>
                </li>
              ))}
            </ul>

            {/* Social links and Resume */}
            <div className="portfolio-nav-actions">
              <a
                href="https://github.com/74604Aditya"
                target="_blank"
                rel="noopener noreferrer"
                className="portfolio-social-link"
                aria-label="GitHub profile"
                title="GitHub"
              >
                <FiGithub />
              </a>

              <a
                href="https://www.linkedin.com/in/adityablande14/"
                target="_blank"
                rel="noopener noreferrer"
                className="portfolio-social-link"
                aria-label="LinkedIn profile"
                title="LinkedIn"
              >
                <FiLinkedin />
              </a>

              <a
                href="./public/resume/Aditya_Lande_Resume.pdf"
                className="portfolio-resume-btn"
                download
                onClick={closeMenu}
              >
                <FiDownload />
                <span>Resume</span>
              </a>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
