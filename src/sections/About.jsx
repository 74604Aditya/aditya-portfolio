
import './About.css';

import {
  FiArrowUpRight,
  FiCode,
  FiServer,
  FiLayers,
  FiDatabase,
  FiShield,
  FiCloud,
  FiGithub,
  FiTerminal,
  FiCpu,
  FiGitBranch,
  FiCheckCircle,
} from 'react-icons/fi';

const technologies = [
  // Primary Programming Languages
  'Java',
  'JavaScript',

  // Backend Development
  'Spring Boot',
  'Spring Framework',
  'Spring MVC',
  'Spring Security',
  'REST APIs',
  'API Development',
  'CRUD Operations',
  'Full-Stack Development',
  'Web Development',
  'Web Technologies',

  // Frontend Development
  'React.js',

  // Database
  'MySQL',

  // Security and Authentication
  'Role-Based Access Control (RBAC)',
  'JSON Web Token (JWT)',

  // Build Tools and Automation
  'Maven',
  'Build Automation',

  // DevOps, Cloud and Deployment
  'Git',
  'GitHub',
  'Docker',
  'Docker Images',
  'Kubernetes',
  'Amazon Web Services (AWS)',
  'Amazon EKS',
  'Terraform',
  'Jenkins',
  'CI/CD',
  'System Deployment',
  'Tomcat',

  // Testing and Code Quality
  'Postman',
  'Postman API',
  'SonarQube',

  // Artificial Intelligence and AI-Assisted Development
  'Artificial Intelligence (AI)',
  'AI Pair Programming / AI-Assisted Programming',
  'Anthropic Claude',
  'ChatGPT for Web Developers',
  'Microsoft Copilot',

  // IDEs and Development Tools
  'Microsoft Visual Studio Code',
  'IntelliJ IDEA',
  'MySQL Workbench'
];

const highlights = [
  {
    icon: <FiCode />,
    number: '01',
    title: 'Full Stack Development',
    description:
      'Creating responsive interfaces and maintainable applications using React.js, Java, and Spring Boot.',
    accent: 'cyan',
  },
  {
    icon: <FiServer />,
    number: '02',
    title: 'Backend Engineering',
    description:
      'Building REST APIs, business logic, authentication, authorization, and reliable service integrations.',
    accent: 'violet',
  },
  {
    icon: <FiDatabase />,
    number: '03',
    title: 'Data & Architecture',
    description:
      'Designing database interactions, connecting application layers, and writing structured, reusable code.',
    accent: 'green',
  },
  {
    icon: <FiCloud />,
    number: '04',
    title: 'Cloud & Deployment',
    description:
      'Exploring containerization, CI/CD pipelines, cloud deployments, and practical development workflows.',
    accent: 'orange',
  },
];

export default function About() {
  return (
    <section
      id="about"
      className="portfolio-section about-section"
      aria-labelledby="about-title"
    >
      <div className="about-background-orb about-orb-one" />
      <div className="about-background-orb about-orb-two" />

      <div className="container about-container">
        {/* Section heading */}
        <header className="about-heading">
          <span className="about-eyebrow">
            <span className="about-eyebrow-dot" />
            BEHIND THE CODE
          </span>

          <h2
            id="about-title"
            className="portfolio-section-title"
          >
            More than just
            <br />
            <span className="gradient-text">writing code.</span>
          </h2>

          <p className="portfolio-section-subtitle">
            A little about my journey, the way I build software,
            and what drives me to keep improving.
          </p>
        </header>

        {/* Developer collage */}
        <div className="about-collage">
          {/* Main introduction card */}
          <article className="about-profile-card">
            <div className="about-profile-top">
              <span className="about-card-label">
                <FiTerminal />
                DEVELOPER PROFILE
              </span>

              <span className="about-profile-symbol">
                <FiCode />
              </span>
            </div>

            <div className="about-profile-content">
              <span className="about-profile-kicker">
                JAVA FULL STACK DEVELOPER
              </span>

              <h3>
                Turning ideas
                <br />
                into <span>real solutions.</span>
              </h3>

              <p>
                I build web applications by connecting thoughtful
                user experiences with secure backend systems.
                My focus is on Java, Spring Boot, React.js, and
                the engineering practices that make applications
                maintainable and reliable.
              </p>

              <a
                href="https://github.com/74604Aditya"
                target="_blank"
                rel="noopener noreferrer"
                className="about-github-link"
                aria-label="Explore my GitHub profile"
              >
                <FiGithub />
                Explore my GitHub
                <FiArrowUpRight className="about-link-arrow" />
              </a>
            </div>

            <div className="about-profile-watermark">
              {'</>'}
            </div>

            <div className="about-profile-decoration about-decoration-one" />
            <div className="about-profile-decoration about-decoration-two" />
          </article>

          {/* Technology collage */}
          <article className="about-tech-card">
            <div className="about-tech-heading">
              <span className="about-mini-icon">
                <FiLayers />
              </span>

              <div>
                <h3>My tech stack</h3>
                <p>Tools I work with</p>
              </div>
            </div>

            <div className="about-tech-cloud">
              {technologies.map((technology, index) => (
                <span
                  key={technology}
                  className={`about-tech-tag about-tech-tag-${(index % 4) + 1}`}
                >
                  <span className="about-tech-tag-dot" />
                  {technology}
                </span>
              ))}
            </div>

            <div className="about-tech-footer">
              <FiGitBranch />
              <span>Building. Learning. Improving.</span>
            </div>
          </article>

          {/* Engineering mindset card */}
          <article className="about-mindset-card">
            <div className="about-mindset-icon">
              <FiCpu />
            </div>

            <span className="about-card-label">
              ENGINEERING MINDSET
            </span>

            <h3>
              Clean code.
              <br />
              Clear thinking.
            </h3>

            <div className="about-mindset-divider" />

            <div className="about-mindset-point">
              <FiCheckCircle />
              <span>Maintainable solutions</span>
            </div>

            <div className="about-mindset-point">
              <FiCheckCircle />
              <span>Continuous learning</span>
            </div>

            <div className="about-mindset-point">
              <FiCheckCircle />
              <span>Problem-solving first</span>
            </div>

            <div className="about-mindset-watermark">
              {'{ }'}
            </div>
          </article>

          {/* Security feature card */}
          <article className="about-security-card">
            <div className="about-security-top">
              <span className="about-security-icon">
                <FiShield />
              </span>

              <span className="about-security-label">
                APPLICATION SECURITY
              </span>
            </div>

            <h3>Built with security in mind.</h3>

            <p>
              Authentication, role-based access control,
              validation, and reliable API design.
            </p>

            <div className="about-security-tags">
              <span>JWT</span>
              <span>Spring Security</span>
              <span>RBAC</span>
            </div>
          </article>

          {/* Bottom capability cards */}
          <div className="about-capability-strip">
            <div className="about-capability-item">
              <span className="about-capability-icon capability-backend">
                <FiServer />
              </span>
              <div>
                <strong>Backend</strong>
                <span>Java & Spring</span>
              </div>
            </div>

            <div className="about-capability-item">
              <span className="about-capability-icon capability-data">
                <FiDatabase />
              </span>
              <div>
                <strong>Databases</strong>
                <span>SQL & NoSQL</span>
              </div>
            </div>

            <div className="about-capability-item">
              <span className="about-capability-icon capability-cloud">
                <FiCloud />
              </span>
              <div>
                <strong>Deployment</strong>
                <span>Docker & AWS</span>
              </div>
            </div>
          </div>
        </div>

        {/* Professional highlights */}
        <div className="about-focus">
          <div className="about-focus-heading">
            <div>
              <span className="about-eyebrow">
                WHAT I BRING TO THE TABLE
              </span>

              <h3>
                How I approach
                <span className="gradient-text"> development</span>
              </h3>
            </div>

            <p>
              Practical engineering, attention to detail, and
              a focus on building software that solves real problems.
            </p>
          </div>

          <div className="about-highlights">
            {highlights.map((item) => (
              <article
                className={`about-highlight-card about-highlight-${item.accent}`}
                key={item.number}
              >
                <div className="about-highlight-top">
                  <span className="about-highlight-icon">
                    {item.icon}
                  </span>

                  <span className="about-highlight-number">
                    / {item.number}
                  </span>
                </div>

                <h4>{item.title}</h4>
                <p>{item.description}</p>

                <div className="about-highlight-line" />
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
