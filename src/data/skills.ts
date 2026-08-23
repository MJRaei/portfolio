import { SkillCategory } from "@/types";

export const skillCategories: SkillCategory[] = [
  {
    category: "Agent Engineering",
    skills: ["LLMs", "VLMs", "Claude", "OpenAI", "Gemini", "Hugging Face", "Ollama", "Multi-Agent Orchestration", "Tool/Function Calling", "RAG", "FAISS", "Vector Search", "Embeddings", "Eval Harnesses", "LLM-as-Judge", "Human-in-the-Loop Guardrails", "Progressive Disclosure", "Prompt Design", "Prompt Caching", "Context-Window Management", "Cost & Latency Optimization", "Streaming UX", "NLP"],
  },
  {
    category: "ML & Data",
    skills: ["XGBoost", "scikit-learn", "SARIMA", "Time-Series Forecasting", "K-Means", "PCA", "Autoencoders", "Anomaly Detection", "Uncertainty Quantification", "Benchmarking & Error Analysis", "NumPy", "Pandas", "SciPy", "OpenCV", "Plotly", "ETL Pipelines"],
  },
  {
    category: "Languages",
    skills: ["Python", "TypeScript", "JavaScript", "C#", "SQL", "Bash", "HTML", "CSS"],
  },
  {
    category: "Frameworks & Libraries",
    skills: ["Google ADK", "LangGraph", "LangChain", "Pydantic", "Chainlit", "FastAPI", "React", "Next.js", "Node.js", "Express", "REST APIs", "Tailwind CSS"],
  },
  {
    category: "Databases",
    skills: ["PostgreSQL", "MongoDB", "SQLite", "Redis"],
  },
  {
    category: "Tools & Platforms",
    skills: ["Git", "Docker", "AWS", "CI/CD", "pytest", "Vercel", "Linux", "Selenium"],
  },
];
