import { Experience } from "@/types";

export const experiences: Experience[] = [
  {
    company: "Opla Energy",
    role: "Software Developer",
    location: "Alberta, Canada",
    startDate: "2024-12",
    endDate: null,
    description: [
      "Develop and maintain full-stack desktop applications using Python and QML for scientific calculations and real-time data processing",
      "Build interactive data visualization dashboards and automation modules that generate dynamic reports, reducing manual effort and improving data consistency",
      "Refactor legacy codebases and implement performance optimizations to improve application speed, scalability, and maintainability",
      "Architect REST APIs and cloud-based services on AWS (EC2, S3, Lambda) for software distribution and version management",
      "Create modular, cross-platform application architectures with a focus on maintainability, performance, and user experience",
      "Write comprehensive test suites with pytest to ensure code reliability and maintain high software quality standards"
    ],
    technologies: ["Python", "QML", "Plotly", "REST APIs", "Git", "AWS (EC2, S3, Lambda)", "pytest", "Linux"],
    companyUrl: "https://oplaenergy.com/",
  },
  {
    company: "StartupXYZ",
    role: "Full-Stack Developer",
    location: "Remote",
    startDate: "2021-03",
    endDate: "2023-05",
    description: [
      "Built and maintained the core product platform from MVP to production",
      "Implemented real-time features using WebSockets, reducing user response time by 60%",
      "Designed and built RESTful APIs handling 1M+ requests per day",
    ],
    technologies: ["React", "Node.js", "MongoDB", "Docker", "Redis"],
    companyUrl: "https://example.com",
  },
  {
    company: "Digital Agency",
    role: "Frontend Developer",
    location: "New York, NY",
    startDate: "2019-09",
    endDate: "2021-02",
    description: [
      "Developed responsive web applications for diverse client projects",
      "Collaborated with designers to implement pixel-perfect UI components",
      "Improved site performance scores by 35% through optimization techniques",
    ],
    technologies: ["React", "JavaScript", "SCSS", "WordPress", "Figma"],
  },
];
