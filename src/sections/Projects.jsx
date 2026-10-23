
import { useEffect, useState } from "react";
import {
  FaArrowRight,
  FaBriefcase,
  FaCalendarAlt,
  FaCheckCircle,
  FaCode,
  FaExternalLinkAlt,
  FaGithub,
  FaLayerGroup,
  FaTimes,
  FaTools,
} from "react-icons/fa";

import { createPortal } from "react-dom";

import { projectsData } from "../data/projects.js";
import "./Projects.css";

/* =========================================
   PROJECT ICON
   Supports icon component references and
   JSX elements with a safe fallback.
========================================= */
function ProjectIcon({ icon: Icon }) {
  if (!Icon) {
    return <FaCode aria-hidden="true" />;
  }

  if (typeof Icon === "function") {
    return <Icon aria-hidden="true" />;
  }

  return Icon;
}

/* =========================================
   PROJECTS SECTION
========================================= */
export default function Projects() {
  const [selectedProject, setSelectedProject] = useState(null);

  /* Lock background scrolling and handle Escape */
  useEffect(() => {
    if (!selectedProject) return undefined;

    const previousOverflow = document.body.style.overflow;

    const handleEscape = (event) => {
      if (event.key === "Escape") {
        setSelectedProject(null);
      }
    };

    document.body.style.overflow = "hidden";
    document.addEventListener("keydown", handleEscape);

    return () => {
      document.body.style.overflow = previousOverflow;
      document.removeEventListener("keydown", handleEscape);
    };
  }, [selectedProject]);

  const closeModal = () => {
    setSelectedProject(null);
  };

  const getAccentClass = (accent) => {
    const allowedAccents = ["cyan", "green", "violet", "orange"];

    return allowedAccents.includes(accent) ? accent : "cyan";
  };

  return (
    <section id="projects" className="projects-section">
      <div className="projects-container">
        {/* Section Heading */}
        <div className="projects-heading">
          <span className="projects-eyebrow">MY WORK</span>

          <h2 className="projects-title">
            Featured <span>Projects</span>
          </h2>

          <p className="projects-subtitle">
            A selection of projects showcasing my experience building
            responsive applications, REST APIs, and secure full-stack systems.
          </p>
        </div>

        {/* Project Cards */}
        <div className="projects-grid">
          {projectsData.map((project) => (
            <article
              className={`projects-card projects-card--${getAccentClass(
                project.accent
              )}`}
              key={project.id}
            >
              <div className="projects-card-top">
                <div className="projects-card-icon" aria-hidden="true">
                  <ProjectIcon icon={project.icon} />
                </div>

                <span className="projects-domain">
                  {project.domain}
                </span>
              </div>

              <div className="projects-card-content">
                <h3 className="projects-card-title">
                  {project.title}
                </h3>

                {project.client && (
                  <p className="projects-client">
                    {project.client}
                  </p>
                )}

                <p className="projects-card-description">
                  {project.shortDescription || project.description}
                </p>

                <div className="projects-card-tech">
                  {(project.technologies || [])
                    .slice(0, 4)
                    .map((technology) => (
                      <span
                        className="projects-tech-tag"
                        key={technology}
                      >
                        {technology}
                      </span>
                    ))}

                  {(project.technologies || []).length > 4 && (
                    <span className="projects-tech-more">
                      +{project.technologies.length - 4}
                    </span>
                  )}
                </div>
              </div>

              <div className="projects-card-footer">
                <button
                  type="button"
                  className="projects-details-link projects-explore-button"
                  onClick={() => setSelectedProject(project)}
                  aria-label={`Explore details for ${project.title}`}
                >
                  Explore Project
                  <FaArrowRight aria-hidden="true" />
                </button>

                <div className="projects-external-links">
                  {project.githubUrl && (
                    <a
                      className="projects-icon-link"
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`GitHub repository for ${project.title}`}
                      title="View GitHub"
                    >
                      <FaGithub aria-hidden="true" />
                    </a>
                  )}

                  {project.liveUrl && (
                    <a
                      className="projects-icon-link"
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`Live demo for ${project.title}`}
                      title="View live project"
                    >
                      <FaExternalLinkAlt aria-hidden="true" />
                    </a>
                  )}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>

      {/* Project Details Modal
          createPortal renders the dialog under document.body
          so it can overlay the viewport instead of being
          clipped by the Projects section.
      */}
      {selectedProject &&
        createPortal(
          <div
            className="projects-modal-backdrop"
            onMouseDown={(event) => {
              if (event.target === event.currentTarget) {
                closeModal();
              }
            }}
          >
            <section
              className={`projects-modal projects-modal--${getAccentClass(
                selectedProject.accent
              )}`}
              role="dialog"
              aria-modal="true"
              aria-labelledby="projects-modal-title"
            >
              {/* Modal Header */}
              <header className="projects-modal-header">
                <div className="projects-modal-heading">
                  <div className="projects-modal-icon" aria-hidden="true">
                    <ProjectIcon icon={selectedProject.icon} />
                  </div>

                  <div className="projects-modal-heading-text">
                    <span className="projects-modal-domain">
                      {selectedProject.domain}
                    </span>

                    <h2 id="projects-modal-title">
                      {selectedProject.title}
                    </h2>

                    {selectedProject.client && (
                      <p>{selectedProject.client}</p>
                    )}
                  </div>
                </div>

                <button
                  type="button"
                  className="projects-modal-close"
                  onClick={closeModal}
                  aria-label="Close project details"
                >
                  <FaTimes aria-hidden="true" />
                </button>
              </header>

              {/* Modal Content */}
              <div className="projects-modal-body">
                {/* Project Overview */}
                <section className="projects-modal-section">
                  <h3>
                    <FaLayerGroup aria-hidden="true" />
                    Project Overview
                  </h3>

                  <p className="projects-modal-description">
                    {selectedProject.description ||
                      selectedProject.shortDescription}
                  </p>
                </section>

                {/* Project Metadata */}
                <div className="projects-modal-meta">
                  {selectedProject.role && (
                    <div className="projects-modal-meta-item">
                      <FaBriefcase aria-hidden="true" />

                      <div>
                        <span>Role</span>
                        <strong>{selectedProject.role}</strong>
                      </div>
                    </div>
                  )}

                  {selectedProject.duration && (
                    <div className="projects-modal-meta-item">
                      <FaCalendarAlt aria-hidden="true" />

                      <div>
                        <span>Duration</span>
                        <strong>{selectedProject.duration}</strong>
                      </div>
                    </div>
                  )}

                  {selectedProject.employmentType && (
                    <div className="projects-modal-meta-item">
                      <FaCode aria-hidden="true" />

                      <div>
                        <span>Engagement</span>
                        <strong>{selectedProject.employmentType}</strong>
                      </div>
                    </div>
                  )}
                </div>

                {/* Responsibilities */}
                {selectedProject.responsibilities?.length > 0 && (
                  <section className="projects-modal-section">
                    <h3>
                      <FaBriefcase aria-hidden="true" />
                      Responsibilities
                    </h3>

                    <ul className="projects-modal-list">
                      {selectedProject.responsibilities.map(
                        (responsibility, index) => (
                          <li key={`${index}-${responsibility}`}>
                            <FaCheckCircle aria-hidden="true" />
                            <span>{responsibility}</span>
                          </li>
                        )
                      )}
                    </ul>
                  </section>
                )}

                {/* Key Features */}
                {selectedProject.features?.length > 0 && (
                  <section className="projects-modal-section">
                    <h3>
                      <FaCheckCircle aria-hidden="true" />
                      Key Features
                    </h3>

                    <ul className="projects-modal-list">
                      {selectedProject.features.map((feature, index) => (
                        <li key={`${index}-${feature}`}>
                          <FaCheckCircle aria-hidden="true" />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </section>
                )}

                {/* Architecture */}
                {selectedProject.architecture && (
                  <section className="projects-modal-section">
                    <h3>
                      <FaLayerGroup aria-hidden="true" />
                      Architecture
                    </h3>

                    <p className="projects-modal-description">
                      {selectedProject.architecture}
                    </p>
                  </section>
                )}

                {/* Technology Stack */}
                {selectedProject.technologies?.length > 0 && (
                  <section className="projects-modal-section">
                    <h3>
                      <FaTools aria-hidden="true" />
                      Technology Stack
                    </h3>

                    <div className="projects-modal-tech-list">
                      {selectedProject.technologies.map((technology) => (
                        <span
                          className="projects-tech-tag"
                          key={technology}
                        >
                          {technology}
                        </span>
                      ))}
                    </div>
                  </section>
                )}
              </div>

              {/* Modal Footer */}
              {(selectedProject.githubUrl || selectedProject.liveUrl) && (
                <footer className="projects-modal-footer">
                  {selectedProject.githubUrl && (
                    <a
                      className="projects-modal-action projects-modal-action--secondary"
                      href={selectedProject.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <FaGithub aria-hidden="true" />
                      GitHub Repository
                      <FaExternalLinkAlt aria-hidden="true" />
                    </a>
                  )}

                  {selectedProject.liveUrl && (
                    <a
                      className="projects-modal-action projects-modal-action--primary"
                      href={selectedProject.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      View Live Project
                      <FaExternalLinkAlt aria-hidden="true" />
                    </a>
                  )}
                </footer>
              )}
            </section>
          </div>,
          document.body
        )}
    </section>
  );
}
