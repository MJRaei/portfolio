import { Project } from "@/types";

export const crystallenz: Project = {
  slug: "crystallenz",
  title: "CrystaLenz",
  summary:
    "An AI-assisted workflow for X-ray diffraction (XRD) analysis, combining an agentic backend with a modern web UI for end-to-end diffraction pipelines and literature mining.",
  description:
    "CrystaLens is an AI-assisted workflow for X-ray diffraction (XRD) analysis that combines an agentic backend (Starlette + Google ADK) with a modern Next.js web UI. It runs an end-to-end XRD pipeline, loading and preprocessing data, detecting peaks, computing Scherrer/Williamson-Hall size and strain, cross-checking against Materials Project references, and generating plots and reports. It also mines research papers via Google Programmable Search, downloads PDFs, and extracts text for literature triage. A RAG pipeline builds a FAISS vector database from extracted paper texts using OpenAI embeddings, then semantically retrieves the most relevant chunks to augment agent responses with cited, evidence-based context. Results stream to the web UI in real time as the pipeline progresses.",
  thumbnailUrl: "/images/projects/crystalenz/workflow.png",
  images: ["/images/projects/crystalenz/workflow.png"],
  tags: ["Python", "Google ADK", "RAG", "pymatgen", "mp-api", "SciPy", "Node.js", "React", "Tailwind CSS", "Plotly"],
  liveUrl: "https://www.youtube.com/watch?v=uNsnd1BLsTs&t=6s",
  sourceUrl: "https://github.com/MJRaei/CrystaLenz",
  featured: true,
  date: "2025-09",
  sections: [
    {
      title: "Overview",
      content:
        "CrystaLens is an AI-assisted workflow for X-ray diffraction (XRD) analysis. It combines an agentic backend (Starlette + Google ADK) with a modern Next.js web UI. The system can run an end-to-end XRD pipeline, mine research papers, and perform Retrieval-Augmented Generation (RAG) to augment agent responses with cited, evidence-based context, all while streaming results to the web UI as the pipeline progresses.",
    },
    {
      title: "Architecture",
      content:
        "The system is composed of a Starlette backend that adapts the agent runtime to HTTP + WebSocket endpoints, streaming agent events to the UI and serving generated artifacts. Agents are defined with Google ADK, where a top-level root agent orchestrates parallel research and XRD pipelines, followed by a final analysis stage.",
      bullets: [
        "Root agent orchestrates the full workflow via a sequential pipeline agent.",
        "Parallel research analysis agent runs the research specialist and XRD specialist concurrently.",
        "Final analyzer agent synthesizes results from both pipelines into a unified report.",
        "The web UI (Next.js) posts a prompt, then receives streaming events and renders plots and links in real time.",
      ],
    },
    {
      title: "XRD Pipeline",
      content:
        "The XRD pipeline is a multi-agent system that handles the full diffraction analysis workflow. It starts with data loading, then runs a hyperparameter optimization loop before executing the core analysis stages:",
      bullets: [
        "Data loading and preprocessing: Loads raw XRD CSV data and applies preprocessing steps.",
        "Peak detection: Identifies diffraction peaks in the preprocessed data.",
        "Scherrer and Williamson-Hall analysis: Computes crystallite size and microstrain from peak broadening.",
        "Materials Project reference checking: Cross-checks detected peaks against known reference patterns using the mp-api.",
        "Reporting: Generates interactive Plotly plots.",
      ],
    },
    {
      title: "Research Mining",
      content:
        "The research mining pipeline automates literature triage by searching for relevant papers, downloading them, and extracting their text content for downstream RAG processing.",
      bullets: [
        "Paper search: Queries Google Programmable Search (CSE) to find relevant research papers.",
        "PDF download: Automatically downloads discovered PDFs to a local directory.",
        "Text extraction: Uses PyMuPDF (fitz) to extract text from downloaded PDFs, saving results for vector store ingestion.",
      ],
    },
    {
      title: "RAG Pipeline",
      content:
        "The RAG (Retrieval-Augmented Generation) pipeline enables the agent to ground its responses in actual research literature. It builds a searchable vector database from extracted paper texts and retrieves the most relevant passages at query time.",
      bullets: [
        "Vector store creation: Chunks extracted texts (1200 characters, 200 overlap), embeds them with OpenAI text-embedding-3-large, L2-normalizes the vectors, and stores them in a FAISS IndexFlatIP index.",
        "Semantic retrieval: Embeds the user query with the same model, searches the FAISS index for top-k similar chunks, and returns ranked results with source metadata and similarity scores.",
        "Context augmentation: Retrieved chunks are injected into the agent's context, enabling cited and evidence-based responses.",
      ],
    },
    {
      title: "Tech Stack",
      content:
        "CrystaLens is built on a diverse stack spanning backend agent orchestration, scientific computing, and a modern frontend:",
      bullets: [
        "Backend: Python, Starlette, Uvicorn, Pydantic, Google ADK, google-genai.",
        "XRD analysis: NumPy, SciPy, lmfit, pymatgen, mp-api.",
        "Visualization: Plotly + Kaleido for interactive and static plot export.",
        "RAG: FAISS (faiss-cpu), OpenAI Embeddings (text-embedding-3-large), NumPy.",
        "Research mining: requests, PyMuPDF (fitz) for PDF text extraction.",
        "Frontend: Next.js, React, SWR, Tailwind CSS.",
      ],
    },
  ],
};
