import {
  FiArrowUpRight,
  FiCode,
  FiGithub,
  FiLinkedin,
  FiMail,
  FiHeart,
} from 'react-icons/fi';

import { Link } from 'react-scroll';
import './Footer.css';

function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="portfolio-footer">
      <div className="container">
        {/* Footer Main Content */}
        <div className="portfolio-footer-main">
          <div className="portfolio-footer-brand">
            <Link
              to="home"
              smooth
              duration={500}
              offset={-85}
              className="portfolio-footer-logo"
              aria-label="Back to home"
            >
              <span className="portfolio-footer-logo-icon">
                <FiCode />
              </span>

              <span className="portfolio-footer-logo-text">
                Aditya <span>Lande</span>
              </span>
            </Link>

            <p className="portfolio-footer-description">
              Java Full Stack Developer passionate about building
              reliable, secure, and user-friendly web applications.
            </p>

            <div className="portfolio-footer-socials">
              <a
                href="https://github.com/74604Aditya"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Visit GitHub profile"
                title="GitHub"
                className="portfolio-footer-social-link"
              >
                <FiGithub />
              </a>

              <a
                href="https://www.linkedin.com/in/adityablande14/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Visit LinkedIn profile"
                title="LinkedIn"
                className="portfolio-footer-social-link"
              >
                <FiLinkedin />
              </a>

              <a
                href="/contact"
                aria-label="Send email"
                title="Email"
                className="portfolio-footer-social-link"
              >
                <FiMail />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="portfolio-footer-column">
            <h3 className="portfolio-footer-heading">Quick Links</h3>

            <ul className="portfolio-footer-links">
              <li>
                <Link to="home" smooth duration={500} offset={-85}>
                  Home
                </Link>
              </li>
              <li>
                <Link to="about" smooth duration={500} offset={-85}>
                  About Me
                </Link>
              </li>
              <li>
                <Link to="skills" smooth duration={500} offset={-85}>
                  Skills
                </Link>
              </li>
              <li>
                <Link to="projects" smooth duration={500} offset={-85}>
                  Projects
                </Link>
              </li>
              <li>
                <Link to="experience" smooth duration={500} offset={-85}>
                  Experience
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div className="portfolio-footer-column portfolio-footer-contact">
            <h3 className="portfolio-footer-heading">Let's Connect</h3>

            <p>
              Have an opportunity or project in mind? Let's connect
              and discuss how I can contribute.
            </p>

            <a
              href="/contact"
              className="portfolio-footer-contact-link"
            >
              Get in touch
              <FiArrowUpRight />
            </a>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="portfolio-footer-bottom">
          <p className="portfolio-footer-copyright">
            <marquee behavior="scroll" direction="right" scrollamount="5" className="portfolio-footer-marquee">
            © {currentYear} Aditya Lande. All rights reserved.
            </marquee>
          </p>

          <p className="portfolio-footer-made">
            <marquee behavior="scroll" direction="right" scrollamount="5" className="portfolio-footer-marquee">
            Made with <FiHeart className="portfolio-footer-heart" /> and
            React
            </marquee>
          </p>
          

          <Link
            to="home"
            smooth
            duration={500}
            offset={-85}
            className="portfolio-footer-back-top"
            aria-label="Back to top"
            title="Back to top"
          >
            <FiArrowUpRight />
          </Link>
        </div>
      </div>
    </footer>
  );
}

export default Footer;