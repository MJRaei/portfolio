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
    company: "Process Ecology",
    role: "Air Emissions Advisor",
    location: "Alberta, Canada",
    startDate: "2023-09",
    endDate: "2024-12",
    description: [
      "Developed and deployed machine learning models for production forecasting and carbon credit estimation using clustering (Autoencoders, K-Means) and regression techniques (SARIMA, XGBoost).",
      "Contributed to back-end development of emission quantification software using C# with object-oriented design principles to optimize performance and scalability.",
      "Built and automated data pipelines for data migration and cleaning between software versions using Python, NumPy, and Pandas.",
      "Led a team of software developers, managing daily standups, task assignments, and delivery timelines.",
      "Automated repetitive workflows using Selenium and Python, improving operational efficiency and data accuracy.",
    ],
    technologies: ["C#", "Python", "NumPy", "Pandas", "Scikit-learn", "XGBoost", "Selenium", "SQL", "Git"],
    companyUrl: "https://processecology.com/",
  },
  {
    company: "University of Calgary",
    role: "Research Assistant",
    location: "Alberta, Canada",
    startDate: "2021-09",
    endDate: "2023-09",
    description: [
      "Designed and synthesized novel graphene/metal oxide aerogels for carbon capture and electrochemical energy storage, resulting in a US patent filing and two journal paper submissions.",
      "Applied statistical and machine learning techniques (PCA, Gradient Descent) to optimize synthesis parameters, improving energy efficiency and material performance.",
      "Preprocessed and analyzed experimental datasets, handling outliers, missing data, and experimental errors to ensure reliable and reproducible results.",
      "Characterized materials using a wide range of techniques including XRD, SEM, TEM, XPS, Raman, and electrochemical testing (EIS, cyclic voltammetry).",
      "Fabricated all-solid-state supercapacitors for flexible electronics, bridging materials synthesis with device-level performance evaluation.",
      "Authored standard operating procedures and technical reports for electrode preparation and characterization workflows.",
    ],
    technologies: ["Python", "PCA", "XRD", "SEM", "TEM", "XPS", "Raman", "Electrochemical Analysis"],
  },
];
