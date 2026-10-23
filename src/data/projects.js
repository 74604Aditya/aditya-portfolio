import {
  FaHeartbeat,
  FaUniversity,
  FaShieldAlt,
} from "react-icons/fa";

export const projectsData = [
  {
    id: "insurance-policy-management",
    title: "Insurance Policy Management System",
    domain: "Insurance",
    client: "ICICI Lombard",
    role: "Full Stack Developer",
    duration: "Nov 2025 – Present",
    employmentType: "Full Time",
    icon: FaShieldAlt,
    accent: "cyan",

    shortDescription:
      "A full-stack insurance management application for handling customers, policy issuance, claims processing, and administrative workflows.",

    description:
      "Developed full-stack application features for an Insurance Policy Management System, supporting customer management, policy issuance, claims processing, and administrative operations. Implemented Spring Boot REST APIs, database integration, secure authorization, and React.js interfaces.",

    responsibilities: [
      "Developed customer, policy, claims, and administrative modules.",
      "Designed RESTful APIs and Spring Boot service-layer business logic.",
      "Implemented CRUD operations, input validation, and centralized exception handling.",
      "Integrated MySQL and MongoDB for application data management.",
      "Implemented JWT authentication, Spring Security, and Role-Based Access Control (RBAC).",
      "Integrated React.js components with Spring Boot REST APIs.",
      "Worked with Docker, Kubernetes/Amazon EKS, Jenkins, and Maven for containerization and CI/CD.",
      "Used SonarQube for code quality checks and Postman for API testing.",
    ],

    technologies: [
      "Java",
      "Spring Boot",
      "Spring Security",
      "React.js",
      "MySQL",
      "MongoDB",
      "REST APIs",
      "JWT",
      "RBAC",
      "Docker",
      "Kubernetes",
      "Amazon EKS",
      "Jenkins",
      "Maven",
      "SonarQube",
      "Postman",
      "Git",
      "GitHub",
    ],

    features: [
      "Customer management",
      "Insurance policy management",
      "Policy issuance workflows",
      "Claims processing",
      "Role-based authorization",
      "Administrative dashboard",
      "REST API integration",
      "Input validation and exception handling",
    ],

    architecture:
      "React.js frontend communicating with Spring Boot REST APIs, a service layer, and MySQL/MongoDB databases, with JWT-based authentication and role-based authorization.",

    githubUrl: "",
    liveUrl: "",
  },

  {
    id: "healthcare-management",
    title: "Healthcare Management System",
    domain: "Healthcare",
    client: "Zocdoc",
    role: "Full Stack Developer",
    duration: "Jul 2025 – Oct 2025",
    employmentType: "Full Time",
    icon: FaHeartbeat,
    accent: "green",

    shortDescription:
      "A healthcare application supporting patient management, appointment workflows, and administrative operations.",

    description:
      "Developed full-stack modules for a Healthcare Management System supporting patient, appointment, and administrative workflows. Built Spring Boot REST APIs, integrated databases, implemented secure authentication, and connected React.js interfaces to backend services.",

    responsibilities: [
      "Developed patient, appointment, and administrative modules.",
      "Designed REST APIs and backend business logic using Spring Boot.",
      "Implemented CRUD operations, input validation, and exception handling.",
      "Integrated MySQL and MongoDB for application data storage.",
      "Implemented JWT authentication, Spring Security, and RBAC.",
      "Built React.js interfaces integrated with backend REST APIs.",
      "Worked with Jenkins, Maven, Docker, and SonarQube in the development workflow.",
      "Validated APIs using Postman and managed source code using Git/GitHub.",
    ],

    technologies: [
      "Java",
      "Spring Boot",
      "Spring Security",
      "React.js",
      "MySQL",
      "MongoDB",
      "REST APIs",
      "JWT",
      "RBAC",
      "Docker",
      "Jenkins",
      "Maven",
      "SonarQube",
      "Postman",
      "Git",
      "GitHub",
    ],

    features: [
      "Patient management",
      "Appointment management",
      "Administrative workflows",
      "Secure authentication",
      "Role-based access control",
      "CRUD operations",
      "REST API integration",
      "Validation and exception handling",
    ],

    architecture:
      "React.js frontend integrated with Spring Boot REST APIs and a backend service layer, using MySQL/MongoDB for data storage and Spring Security for authentication and authorization.",

    githubUrl: "",
    liveUrl: "",
  },

  {
    id: "digital-banking-platform",
    title: "Digital Banking Platform",
    domain: "Banking & Finance",
    client: "HDFC Bank",
    role: "Java Full Stack Developer",
    duration: "Oct 2023 – Jun 2025",
    employmentType: "Full Time",
    icon: FaUniversity,
    accent: "violet",

    shortDescription:
      "A digital banking application supporting customer and account management, transaction workflows, and secure administrative operations.",

    description:
      "Developed application modules for a Digital Banking Platform supporting customer, account, transaction, and administrative functionality. Designed Java and Spring Boot REST APIs, implemented security controls, integrated databases, and developed React.js frontend screens.",

    responsibilities: [
      "Developed customer, account, transaction, and administrative modules.",
      "Designed RESTful APIs using Java and Spring Boot.",
      "Implemented CRUD operations, input validation, and exception handling.",
      "Implemented JWT authentication, Spring Security, and Role-Based Access Control.",
      "Developed React.js screens integrated with backend REST APIs.",
      "Integrated MySQL and MongoDB for application data storage.",
      "Worked on API and database interaction improvements.",
      "Used Jenkins CI/CD pipelines, Maven, and SonarQube for build and code quality workflows.",
    ],

    technologies: [
      "Java",
      "Spring Boot",
      "Spring Security",
      "React.js",
      "MySQL",
      "MongoDB",
      "REST APIs",
      "JWT",
      "RBAC",
      "Jenkins",
      "Maven",
      "SonarQube",
      "Git",
      "GitHub",
    ],

    features: [
      "Customer management",
      "Account management",
      "Transaction workflows",
      "Administrative operations",
      "JWT authentication",
      "Role-based authorization",
      "Database integration",
      "REST API integration",
    ],

    architecture:
      "React.js frontend communicating with Java and Spring Boot REST APIs, a service layer, and MySQL/MongoDB data stores, with JWT authentication and role-based authorization.",

    githubUrl: "",
    liveUrl: "",
  },
];
