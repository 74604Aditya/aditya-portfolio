# Aditya Lande | Full Stack Developer Portfolio

<p align="center">
  <img src="https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB" alt="React" />
  <img src="https://img.shields.io/badge/Vite-646CFF?style=for-the-badge&logo=vite&logoColor=white" alt="Vite" />
  <img src="https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black" alt="JavaScript" />
  <img src="https://img.shields.io/badge/Bootstrap-7952B3?style=for-the-badge&logo=bootstrap&logoColor=white" alt="Bootstrap" />
</p>

<p align="center">
  A modern, responsive developer portfolio showcasing my technical skills, projects, professional experience, and education.
</p>

<p align="center">
  <a href="https://github.com/74604Aditya">GitHub</a> •
  <a href="https://www.linkedin.com/in/adityablande14/">LinkedIn</a> •
  <a href="mailto:aditya14.lande@gmail.com">Email Me</a>
</p>

---

## About the Project

This repository contains my personal developer portfolio, built to present my software development journey, technical expertise, and projects in a clean and interactive interface.

I focus on building maintainable web applications, developing RESTful APIs, integrating frontend and backend systems, and creating reliable software solutions.

### Highlights

- Responsive design for desktop, tablet, and mobile devices.
- Dark-themed interface with modern visual styling.
- Dedicated sections for About, Skills, Projects, Experience, Education, and Contact.
- Interactive navigation and project exploration.
- Social links to GitHub and LinkedIn.
- Resume access directly from the portfolio.
- Contact form integration using EmailJS.
- Component-based architecture using React.
- Scoped CSS styles to keep section styling organized.
- Docker and local Kubernetes deployment as a planned learning and deployment step.

## Tech Stack

| Category | Technologies |
|---|---|
| Frontend | React.js, JavaScript, HTML5, CSS3 |
| Build Tool | Vite |
| UI & Styling | Bootstrap, custom CSS, responsive layouts |
| Icons | React Icons |
| Contact Form | EmailJS |
| Version Control | Git, GitHub |
| Containerization | Docker — planned |
| Orchestration | Kubernetes with kind — planned |

## Portfolio Sections

- **Home:** Introduction, professional profile, and social links.
- **About:** Development interests and areas of expertise.
- **Skills:** Languages, frameworks, databases, tools, and technologies.
- **Projects:** Selected software projects and their technical details.
- **Experience:** Professional experience and responsibilities.
- **Education:** Academic qualifications.
- **Contact:** Contact form and professional contact information.

## Getting Started

Follow these steps to run the portfolio locally.

### Prerequisites

Install the following:

- [Node.js](https://nodejs.org/) — use a version compatible with the project's Vite version.
- npm — included with Node.js.
- [Git](https://git-scm.com/)

### 1. Clone the Repository

```bash
git clone https://github.com/74604Aditya/aditya-portfolio.git
```

### 2. Navigate to the Project

```bash
cd aditya-portfolio
```

### 3. Install Dependencies

```bash
npm install
```

### 4. Configure Environment Variables

Create a `.env` file in the project root if you use EmailJS.

```env
VITE_EMAILJS_SERVICE_ID=your_service_id
VITE_EMAILJS_TEMPLATE_ID=your_template_id
VITE_EMAILJS_PUBLIC_KEY=your_public_key
```

Replace the placeholder values with the configuration from your EmailJS account. The variable names must match those used in your application code.

**Security:** Do not commit `.env` or other files containing secrets. The repository's `.gitignore` should exclude local environment files.

### 5. Start the Development Server

```bash
npm run dev
```

Open the local URL displayed in the terminal, usually:

