import {
  FiBookOpen,
  FiAward,
  FiCalendar,
  FiMapPin,
} from "react-icons/fi";
import "./Education.css";

const educationItems = [
  {
    id: 1,
    type: "Bachelor's Degree",
    degree: "B.E. Computer Science Engineering",
    institution:
      "Smt. Kashibai Navale College of Engineering",
    affiliation: "Savitribai Phule Pune University (SPPU)",
    period: "2023",
    result: "72.20%",
    details:
      "Built a foundation in computer science, software engineering, programming, databases, and application development.",
    icon: <FiBookOpen />,
    accent: "cyan",
  },
  {
    id: 2,
    type: "Postgraduate Diploma",
    degree: "Post Graduate Diploma in Advanced Computing (PG-DAC)",
    institution: "Centre for Development of Advanced Computing (C-DAC), Mumbai",
    affiliation: "Advanced computing and software development",
    period: "Sep 2023 – Feb 2024",
    result: "68.25%",
    details:
      "Focused on practical software development skills and advanced computing concepts relevant to Java full-stack development.",
    icon: <FiAward />,
    accent: "violet",
  },
  {
    id: 3,
    type: "Higher Secondary Education",
    degree: "Higher Secondary Certificate (HSC)",
    institution: "Maharashtra State Board",
    affiliation: "Higher Secondary Education",
    period: "2018",
    result: "80.00%",
    details:
      "Completed higher secondary education before pursuing engineering.",
    icon: <FiBookOpen />,
    accent: "cyan",
  },
  {
    id: 4,
    type: "Secondary Education",
    degree: "Secondary School Certificate (SSC)",
    institution: "Maharashtra State Board",
    affiliation: "Secondary Education",
    period: "2016",
    result: "92.40%",
    details:
      "Completed secondary education with a strong academic result.",
    icon: <FiBookOpen />,
    accent: "violet",
  },
];

const Education = () => {
  return (
    <section id="education" className="portfolio-education-section">
      <div className="container portfolio-education-container">
        <header className="portfolio-education-heading">
          <span className="portfolio-education-eyebrow">
            ACADEMIC BACKGROUND
          </span>

          <h2>
            Education & <span>Qualifications</span>
          </h2>

          <p>
            My academic journey and professional learning have
            helped me build a foundation in software development
            and application engineering.
          </p>
        </header>

        <div className="portfolio-education-grid">
          {educationItems.map((item) => (
            <article
              key={item.id}
              className={`portfolio-education-card portfolio-education-${item.accent}`}
            >
              <div className="portfolio-education-card-top">
                <span className="portfolio-education-icon">
                  {item.icon}
                </span>

                <span className="portfolio-education-period">
                  <FiCalendar />
                  {item.period}
                </span>
              </div>

              <span className="portfolio-education-type">
                {item.type}
              </span>

              <h3>{item.degree}</h3>

              <h4>{item.institution}</h4>

              <p className="portfolio-education-affiliation">
                <FiMapPin />
                <span>{item.affiliation}</span>
              </p>

              <p className="portfolio-education-description">
                {item.details}
              </p>

              {item.result && (
                <div className="portfolio-education-result">
                  <FiAward />
                  <span>Academic Result</span>
                  <strong>{item.result}</strong>
                </div>
              )}
            </article>
          ))}
        </div>

        <div className="portfolio-education-note">
          <span className="portfolio-education-note-icon">
            <FiAward />
          </span>

          <div>
            <h3>Learning beyond the classroom</h3>

            <p>
              I continue to strengthen my skills in Java, Spring Boot,
              React, system design, cloud technologies, and emerging
              AI-assisted development tools through practical projects
              and continuous learning.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
