
import {
  FiActivity,
  FiArrowDown,
  FiArrowRight,
  FiCheckCircle,
  FiCode,
  FiCoffee,
  FiCpu,
  FiDatabase,
  FiDownload,
  FiExternalLink,
  FiGithub,
  FiLayers,
  FiLinkedin,
  FiServer,
  FiTerminal,
} from "react-icons/fi";
import { Link } from "react-scroll";
import "./Hero.css";

const technologies = [
  "Java",
  "Spring Boot",
  "React.js",
  "MySQL",
  "REST APIs",
  "JavaScript",
];

export default function Hero() {
  return (
    <section id="home" className="portfolio-hero">
      <div className="portfolio-hero-grid" aria-hidden="true" />
      <div className="portfolio-hero-glow portfolio-hero-glow-one" />
      <div className="portfolio-hero-glow portfolio-hero-glow-two" />

      <div className="portfolio-hero-container">
        {/* LEFT: INTRODUCTION */}
        <div className="portfolio-hero-content">
          <div className="portfolio-hero-availability">
            <span className="portfolio-hero-status-dot" />
            <span>JAVA FULL STACK DEVELOPER</span>
            <span className="portfolio-hero-availability-divider">/</span>
            <span className="portfolio-hero-available-text">
              Open to opportunities
            </span>
          </div>

          <p className="portfolio-hero-eyebrow">
            <span className="portfolio-hero-eyebrow-line" />
            HELLO, I'M
          </p>

          <h1 className="portfolio-hero-name">
            Aditya
            <br />
            <span>Lande.</span>
          </h1>

          <h2 className="portfolio-hero-heading">
            I build modern
            <br />
            <span>web applications.</span>
          </h2>

          <p className="portfolio-hero-description">
            I'm a Java Full Stack Developer focused on building reliable
            backend systems, intuitive user interfaces, and scalable web
            applications using modern technologies.
          </p>

          <div className="portfolio-hero-tech-list">
            {technologies.map((technology) => (
              <span className="portfolio-hero-tech-chip" key={technology}>
                <span className="portfolio-hero-chip-dot" />
                {technology}
              </span>
            ))}
          </div>

          <div className="portfolio-hero-actions">
            <Link
              to="projects"
              smooth={true}
              duration={600}
              offset={-75}
              className="portfolio-hero-primary-btn"
            >
              Explore My Work
              <FiArrowRight />
            </Link>

            <a
              href="./public/resume/Aditya_Lande_Resume.pdf"
              className="portfolio-hero-secondary-btn"
              download
            >
              <FiDownload />
              Download Resume
            </a>
          </div>



          <div className="portfolio-hero-socials">
            <a
              href="https://github.com/74604Aditya"
              target="_blank"
              rel="noreferrer"
              aria-label="Visit GitHub profile"
              className="portfolio-hero-social-link"
            >
              <FiGithub />
              <FiExternalLink className="portfolio-hero-social-external" />
            </a>

            <span className="portfolio-hero-social-separator" />

            <a
              href="https://www.linkedin.com/in/adityablande14/"
              target="_blank"
              rel="noreferrer"
              aria-label="Visit LinkedIn profile"
              className="portfolio-hero-social-link"
            >
              <FiLinkedin />
              <FiExternalLink className="portfolio-hero-social-external" />
            </a>

            <span className="portfolio-hero-social-separator" />

            <Link
              to="contact"
              smooth={true}
              duration={600}
              offset={-75}
              className="portfolio-hero-social-link portfolio-hero-contact-link"
            >
              Let's Talk
              <FiArrowRight />
            </Link>
          </div>
        </div>

        {/* RIGHT: DEVELOPER COMMAND CENTER */}
        <div className="portfolio-hero-visual">
          <div className="portfolio-hero-visual-label portfolio-hero-label-top">
            <span className="portfolio-hero-label-indicator" />
            DEVELOPER WORKSPACE
          </div>

          <div className="portfolio-hero-command-center">
            {/* WINDOW HEADER */}
            <div className="portfolio-hero-window-header">
              <div className="portfolio-hero-window-controls">
                <span className="portfolio-hero-window-dot portfolio-hero-dot-red" />
                <span className="portfolio-hero-window-dot portfolio-hero-dot-yellow" />
                <span className="portfolio-hero-window-dot portfolio-hero-dot-green" />
              </div>

              <div className="portfolio-hero-window-title">
                <FiTerminal />
                <span>developer.java</span>
              </div>

              <div className="portfolio-hero-window-menu">
                <span />
                <span />
                <span />
              </div>
            </div>

            {/* CODE EDITOR */}
            <div className="portfolio-hero-code-editor">
              <div className="portfolio-hero-editor-sidebar">
                <FiFilesFallback />
                <FiSearchFallback />
                <FiGitFallback />
              </div>

              <div className="portfolio-hero-code-content">
                <div className="portfolio-hero-code-line">
                  <span className="portfolio-hero-line-number">01</span>
                  <span className="portfolio-hero-code-comment">
                    // Building reliable software
                  </span>
                </div>

                <div className="portfolio-hero-code-line">
                  <span className="portfolio-hero-line-number">02</span>
                  <span>
                    <span className="portfolio-hero-code-purple">public</span>{" "}
                    <span className="portfolio-hero-code-blue">class</span>{" "}
                    <span className="portfolio-hero-code-yellow">Developer</span>{" "}
                    {"{"}
                  </span>
                </div>

                <div className="portfolio-hero-code-line portfolio-hero-code-indent">
                  <span className="portfolio-hero-line-number">03</span>
                  <span>
                    <span className="portfolio-hero-code-purple">private</span>{" "}
                    <span className="portfolio-hero-code-blue">String</span>{" "}
                    name ={" "}
                    <span className="portfolio-hero-code-green">
                      "Aditya Lande"
                    </span>
                    ;
                  </span>
                </div>

                <div className="portfolio-hero-code-line portfolio-hero-code-indent">
                  <span className="portfolio-hero-line-number">04</span>
                  <span>
                    <span className="portfolio-hero-code-purple">private</span>{" "}
                    <span className="portfolio-hero-code-blue">String</span>{" "}
                    role ={" "}
                    <span className="portfolio-hero-code-green">
                      "Full Stack"
                    </span>
                    ;
                  </span>
                </div>

                <div className="portfolio-hero-code-line">
                  <span className="portfolio-hero-line-number">05</span>
                  <span>{"}"}</span>
                </div>

                <div className="portfolio-hero-code-line portfolio-hero-code-spacer">
                  <span className="portfolio-hero-line-number">06</span>
                  <span />
                </div>

                <div className="portfolio-hero-code-line">
                  <span className="portfolio-hero-line-number">07</span>
                  <span className="portfolio-hero-code-comment">
                    // Turning ideas into applications
                  </span>
                </div>

                <div className="portfolio-hero-code-line">
                  <span className="portfolio-hero-line-number">08</span>
                  <span>
                    <span className="portfolio-hero-code-blue">build</span>
                    <span className="portfolio-hero-code-purple">.</span>
                    <span className="portfolio-hero-code-yellow">create</span>
                    <span className="portfolio-hero-code-purple">()</span>
                    ;
                  </span>
                </div>
              </div>
            </div>

            {/* TERMINAL */}
            <div className="portfolio-hero-terminal">
              <div className="portfolio-hero-terminal-header">
                <div>
                  <FiTerminal />
                  <span>TERMINAL</span>
                </div>
                <span className="portfolio-hero-terminal-live">
                  <span />
                  LIVE
                </span>
              </div>

              <div className="portfolio-hero-terminal-body">
                <p>
                  <span className="portfolio-hero-terminal-prompt">➜</span>
                  <span className="portfolio-hero-terminal-path">~/aditya</span>
                  <span className="portfolio-hero-terminal-command">
                    ./build-profile.sh
                  </span>
                </p>
                <p className="portfolio-hero-terminal-success">
                  <FiCheckCircle />
                  Profile initialized successfully
                </p>
                <p className="portfolio-hero-terminal-result">
                  <span>STATUS:</span> Ready to build something great
                  <span className="portfolio-hero-terminal-cursor" />
                </p>
              </div>
            </div>

            {/* STATUS FOOTER */}
            <div className="portfolio-hero-workspace-footer">
              <span>
                <FiCode />
                Java ecosystem
              </span>
              <span>
                <FiActivity />
                Problem solver
              </span>
              <span className="portfolio-hero-workspace-ready">
                <FiCheckCircle />
                Ready
              </span>
            </div>
          </div>

          {/* FLOATING TECHNOLOGY CARDS */}
          <div className="portfolio-hero-float-card portfolio-hero-java-card">
            <div className="portfolio-hero-float-icon portfolio-hero-java-icon">
              <FiCoffee />
            </div>
            <div>
              <strong>Java + Spring</strong>
              <span>Backend development</span>
            </div>
            <span className="portfolio-hero-float-check">
              <FiCheckCircle />
            </span>
          </div>

          <div className="portfolio-hero-float-card portfolio-hero-react-card">
            <div className="portfolio-hero-float-icon portfolio-hero-react-icon">
              <FiLayers />
            </div>
            <div>
              <strong>React.js</strong>
              <span>Frontend development</span>
            </div>
            <span className="portfolio-hero-float-check">
              <FiCheckCircle />
            </span>
          </div>

          {/* DECORATIVE TECH INDICATORS */}
          <div className="portfolio-hero-orbit portfolio-hero-orbit-one">
            <FiCpu />
          </div>

          <div className="portfolio-hero-orbit portfolio-hero-orbit-two">
            <FiDatabase />
          </div>

          <div className="portfolio-hero-visual-label portfolio-hero-label-bottom">
            <FiServer />
            <span>DESIGNED TO BUILD</span>
          </div>
        </div>
      </div>

      {/* BOTTOM SCROLL HINT */}
      <Link
        to="about"
        smooth={true}
        duration={600}
        offset={-75}
        className="portfolio-hero-scroll-hint"
        aria-label="Scroll to About section"
      >
        <span>SCROLL TO DISCOVER</span>
        <span className="portfolio-hero-scroll-line">
          <FiArrowDown />
        </span>
      </Link>

    </section>
  );
}

/* Small decorative sidebar symbols, kept local to this component. */
function FiFilesFallback() {
  return <FiCode />;
}

function FiSearchFallback() {
  return <FiActivity />;
}

function FiGitFallback() {
  return <FiLayers />;
}
