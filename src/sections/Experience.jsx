import {
    FiBriefcase,
    FiCode,
    // FiDatabase,
    // FiShield,
    FiExternalLink,
} from "react-icons/fi";
import "./Experience.css";

const experienceItems = [
    {
        id: 1,
        role: "Associate Software Engineer",
        company: "MICROGATE TECHNOLOGY · IBM Client",
        period: "Nov 2025 – Present",
        location: "Pune, India",
        description: 
        "Developed and maintained an Insurance Policy Management System using Java, Spring Boot, React.js, MySQL, and MongoDB, implementing secure REST APIs, policy and claims workflows, and automated CI/CD deployments using Docker, Kubernetes, Jenkins, and AWS EKS.",
        responsibilities: [
            "Developed full-stack application features for an Insurance Policy Management System, delivering customer, policy, claim, and administrative modules for ICICI Lombard.",
            "Designed and implemented RESTful APIs and service-layer business logic to support policy issuance, claims processing, and customer management workflows.",
            "Built CRUD operations and database integration across MySQL and MongoDB, including API validation and centralized exception handling.",
            "Implemented secure authentication using JWT and Spring Security, with Role-Based Access Control (RBAC) to manage permissions across application user types.",
            "Integrated React.js frontend components with Spring Boot REST APIs to deliver responsive, real-time policy and claims workflows.",
            "Containerized the application using Docker and deployed workloads on Kubernetes/Amazon EKS; automated builds and deployments through Jenkins pipelines with Maven.",
            "Enforced code quality with SonarQube checks, validated APIs end-to-end using Postman.",
        ],
        technologies: [
            "JavaScript",
            "Java",
            "React.js",
            "MySQL",
            "REST APIs",
            "Docker",
            "Maven",
            "SonarQube",
            "Postman API",
            "Full-Stack Development",
            "Web Technologies",
            "Web Development",
            "CRUD Operations",
            "Role-Based Access Control (RBAC)",
            "JSON Web Token (JWT)",
            "Spring Framework",
            "Spring MVC",
            "Spring Security",
            "Amazon Web Services (AWS)",
            "Artificial Intelligence (AI)",
            "AI Pair Programming / AI-Assisted Programming",
            "Anthropic Claude",
            "ChatGPT for Web Developers",
            "Microsoft Visual Studio Code",
            "Microsoft Copilot",
            "Jenkins",
            "Amazon EKS"
        ],
        icon: <FiBriefcase />,
        accent: "cyan",
    },
    {
        id: 2,
        role: "Assistant Consultant",
        company: "Priacc Innovations Pvt. Ltd.",
        period: "Jul 2025 – Oct 2025",
        location: "Hyderabad, India",
        description:
            "Contributed to a Healthcare Management System using React.js, MySQL, and MongoDB, implementing secure application workflows with JWT, Spring Security, and RBAC, while supporting CI/CD automation, containerization, and infrastructure deployment using Jenkins, Maven, Docker, Kubernetes, and Terraform.",
        responsibilities: [
            "Built CRUD operations and database integration across MySQL and MongoDB, with API validation and exception handling to improve application reliability.",
            "Implemented JWT authentication and Spring Security, with Role-Based Access Control (RBAC) to enforce controlled access across user roles.",
            "Built and integrated React.js frontend components with backend REST APIs to deliver responsive patient and appointment management workflows.",
            "Automated builds and deployments using Jenkins CI/CD pipelines with Maven, containerized components with Docker, and enforced code quality through SonarQube checks.",
        ],

        technologies: [
            "CI/CD",
            "Maven",
            "Build Automation",
            "System Deployment",
            "Docker",
            "Docker Images",
            "Kubernetes",
            "Terraform",
            "SonarQube",
            "Git",
            "GitHub",
            "MySQL",
            "Postman",
            "API"
        ],
        icon: <FiCode />,
        accent: "violet",
    },
    {
        id: 3,
        role: "Associate Software Engineer",
        company: "Cynosure Software Solutions · Tech Mahindra Client",
        period: "Oct 2023 – Jun 2025",
        location: "Pune,India",
        description:
            "Developed a Digital Banking Platform using Java, Spring Boot, React.js, and MySQL, building REST APIs for customer, account, and transaction management, implementing JWT-based security and RBAC, and supporting application builds, testing, and deployments through Maven, Jenkins, and SonarQube.",
        responsibilities: [
            "Developed backend application modules for a Digital Banking Platform, delivering customer, account, transaction, and administrative functionality for HDFC Bank.",
            "Designed and implemented RESTful APIs across customer, account, transaction, and administrative modules using Java and Spring Boot.",
            "Built CRUD operations for customer and administrative management workflows, with input validation, exception handling, and secure API communication.",
            "Implemented JWT authentication, Spring Security, and Role-Based Access Control (RBAC), defining distinct user roles and restricting access based on authorization level.",
            "Developed React.js frontend screens and integrated them with backend REST APIs to deliver responsive banking workflows.",
            "Integrated MySQL and MongoDB for application data storage and optimized API and database interactions to improve response times.",
            "Automated builds and deployments through Jenkins CI/CD pipelines with Maven, and enforced code quality through SonarQube analysis."
        ],
        technologies: [
            "Java", "JavaScript", "REST APIs", "Spring MVC", "React.js", "Maven", "Role-Based Access Control (RBAC)", "JSON Web Token (JWT)", "MySQL", 
            "Full-Stack Development", "Spring Boot", "Tomcat"
        ],
        icon: <FiBriefcase />,
        accent: "cyan",
    },
];

// const projectHighlights = [
//     {
//         title: "Insurance Policy Management System",
//         client: "ICICI Lombard",
//         period: "Nov 2025 – Present",
//         description:
//             "Policy, customer, claims, and administrative workflows with secured APIs and frontend integration.",
//         technologies: ["Spring Boot", "React", "JWT", "MySQL", "MongoDB"],
//         icon: <FiShield />,
//     },
//     {
//         title: "Healthcare Management System",
//         client: "Zocdoc",
//         period: "Jul 2025 – Oct 2025",
//         description:
//             "Patient, appointment, and administrative workflows supported by backend services and database integration.",
//         technologies: ["Java", "Spring Boot", "React", "REST APIs", "SQL"],
//         icon: <FiDatabase />,
//     },
// ];

const Experience = () => {
    return (
        <section id="experience" className="portfolio-experience-section">
            <div className="container portfolio-experience-container">
                <header className="portfolio-experience-heading">
                    <span className="portfolio-experience-eyebrow">
                        MY JOURNEY
                    </span>

                    <h2>
                        Professional <span>Experience</span>
                    </h2>

                    <p>
                        My experience in Java development, backend engineering,
                        database integration, and building full-stack applications.
                    </p>
                </header>

                <div className="portfolio-experience-timeline">
                    {experienceItems.map((item) => (
                        <article
                            className={`portfolio-experience-item portfolio-experience-${item.accent}`}
                            key={item.id}
                        >
                            <div className="portfolio-experience-marker">
                                {item.icon}
                            </div>

                            <div className="portfolio-experience-card">
                                <div className="portfolio-experience-card-top">
                                    <div className="portfolio-experience-title-group">
                                        <span className="portfolio-experience-type">
                                            {item.type}
                                        </span>

                                        <h3>{item.role}</h3>

                                        <h4>{item.company}</h4>
                                    </div>

                                    <span className="portfolio-experience-period">
                                        {item.period}
                                    </span>
                                </div>

                                <span className="portfolio-experience-location">
                                    {item.location}
                                </span>

                                <p className="portfolio-experience-description">
                                    {item.description}
                                </p>

                                <ul className="portfolio-experience-list">
                                    {item.responsibilities.map((responsibility) => (
                                        <li key={responsibility}>
                                            {responsibility}
                                        </li>
                                    ))}
                                </ul>

                                <div className="portfolio-experience-tech">
                                    {item.technologies.map((technology) => (
                                        <span key={technology}>{technology}</span>
                                    ))}
                                </div>
                            </div>
                        </article>
                    ))}
                </div>

                {/*<div className="portfolio-experience-projects">
                    <div className="portfolio-experience-subheading">
                        <span className="portfolio-experience-subheading-icon">
                            <FiLayers />
                        </span>

                        <div>
                            <span className="portfolio-experience-eyebrow">
                                SELECTED WORK
                            </span>

                            <h3>Project Highlights</h3>
                        </div>
                    </div>
                    
                     <div className="row g-4">
                        {projectHighlights.map((project) => (
                            <div className="col-lg-6" key={project.title}>
                                <article className="portfolio-experience-project-card">
                                    <div className="portfolio-experience-project-icon">
                                        {project.icon}
                                    </div>

                                    <div className="portfolio-experience-project-meta">
                                        <span>{project.period}</span>
                                        <span>{project.client}</span>
                                    </div>

                                    <h4>{project.title}</h4>

                                    <p>{project.description}</p>

                                    <div className="portfolio-experience-tech">
                                        {project.technologies.map((technology) => (
                                            <span key={technology}>{technology}</span>
                                        ))}
                                    </div>
                                </article>
                            </div>
                        ))}
                    </div> 
                </div>*/}

                <div className="portfolio-experience-cta">
                    <div>
                        <h3>Want to know more about my work?</h3>
                        <p>
                            Explore my projects and the technologies I use to build them.
                        </p>
                    </div>

                    <a
                        href="https://github.com/74604Aditya"
                        target="_blank"
                        rel="noreferrer"
                        className="portfolio-experience-github-link"
                    >
                        <span>Explore GitHub</span>
                        <FiExternalLink />
                    </a>
                </div>
            </div>
        </section>
    );
};

export default Experience;
