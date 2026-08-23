import { Experience } from "@/types";

export const experiences: Experience[] = [
  {
    company: "Opla Energy",
    role: "Software Developer - Full-Stack",
    location: "Calgary, Alberta, Canada",
    startDate: "2024-12",
    endDate: null,
    description: [
      "Design and maintain REST APIs and cloud services on AWS (EC2, S3, Lambda) for telemetry ingestion, software distribution, and version management, giving direct visibility into how shipped software behaves in the field.",
      "Build and maintain CI/CD pipelines for automated testing, build, and release.",
      "Maintain end-to-end test coverage across numerical, integration, and regression paths (pytest), so refactors stay safe to make quickly and behaviour remains verifiable as the system changes.",
      "Build real-time data processing and interactive analytics interfaces for scientific calculations, used daily by non-technical domain users (Python, QML, Plotly).",
      "Develop automated reporting modules that generate dynamic outputs from live data, removing manual preparation steps and enforcing consistency across reports.",
      "Refactor legacy codebases and profile computational bottlenecks to improve application speed and scalability, holding a modular, testable, cross-platform architecture.",
      "Own features end to end across design, backend, interface, release, and monitoring, with no handoff at the prototype boundary.",
      "Work directly with domain experts to convert underspecified requests into scoped technical designs, making pragmatic calls about what to cut to ship.",
    ],
    technologies: ["Python", "QML", "Plotly", "REST APIs", "AWS (EC2, S3, Lambda)", "CI/CD", "pytest", "Git", "Linux"],
    companyUrl: "https://oplaenergy.com/",
  },
  {
    company: "Process Ecology",
    role: "Air Emissions Advisor - ML Engineer",
    location: "Calgary, Alberta, Canada",
    startDate: "2023-09",
    endDate: "2024-12",
    description: [
      "Built and validated machine learning models for production forecasting and carbon credit estimation, including XGBoost regressors and classifiers, SARIMA for expected-behaviour baselines, K-Means for behavioural segmentation, and PCA for dimensionality reduction on wide feature sets (Python, Scikit-learn).",
      "Developed unsupervised anomaly detection over high-volume operational time-series using autoencoders, surfacing abnormal behaviour without labelled training data and separating genuine signal from routine variation, then tracking detection performance over time.",
      "Ran the full ML lifecycle end to end: feature engineering, training, cross-validation, hyperparameter tuning, structured error analysis, benchmarking against established baselines, and quantifying uncertainty to define when outputs could be acted on.",
      "Led back-end development of an emission quantification platform in C# using object-oriented design, with calculations built to be reproducible and traceable to the evidence behind them under external audit.",
      "Engineered ETL pipelines in Python and SQL across disconnected client systems: discovering and accessing new data sources, then ingesting, cleaning, verifying integrity, and making data model-ready (Pandas, NumPy).",
      "Wrote complex multi-source SQL for analysis, and automated repetitive data workflows with Selenium to improve operational accuracy.",
      "Mentored a small engineering team: running standups, scoping and assigning work, reviewing code, and holding delivery timelines against client commitments.",
      "Prepared model documentation, regulatory reports, and presentations for external review, and presented findings to both technical and executive stakeholders.",
    ],
    technologies: ["Python", "Scikit-learn", "XGBoost", "SARIMA", "Autoencoders", "C#", "SQL", "Pandas", "NumPy", "Selenium", "Git"],
    companyUrl: "https://processecology.com/",
  },
];
