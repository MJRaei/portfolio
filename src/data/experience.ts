import { Experience } from "@/types";

export const experiences: Experience[] = [
  {
    company: "Tech Corp",
    role: "Senior Full-Stack Developer",
    location: "San Francisco, CA",
    startDate: "2023-06",
    endDate: null,
    description: [
      "Lead development of customer-facing web applications serving 100K+ monthly active users",
      "Architected a micro-frontend system that improved team deployment velocity by 40%",
      "Mentored junior developers through code reviews and pair programming sessions",
    ],
    technologies: ["Next.js", "TypeScript", "Node.js", "PostgreSQL", "AWS"],
    companyUrl: "https://example.com",
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
