import "./Skills.css";
import { skillsData } from "../data/skills";

const Skills = () => {
  return (
    <section className="skills-section" id="skills">
      <div className="skills-container">
        <div className="skills-header">
          <h2 className="skills-title">Technical Skills</h2>
          <p className="skills-subtitle">
            Technologies and tools I use to build reliable,
            secure, and scalable applications.
          </p>
        </div>

        <div className="skills-grid">
          {skillsData.map((category) => (
            <article
              className="skills-card"
              key={category.id}
            >
              <div className="skills-card-header">
                <span className="skills-category-icon">
                  {category.icon}
                </span>

                <h3 className="skills-category-title">
                  {category.category}
                </h3>
              </div>

              <div className="skills-list">
                {category.skills.map((skill) => (
                  <span
                    className="skills-item"
                    key={skill.name}
                    title={skill.name}
                  >
                    {skill.name}
                  </span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;