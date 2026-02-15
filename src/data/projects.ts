import { Project } from "@/types";

export const projects: Project[] = [
  {
    slug: "nanorange-v2",
    title: "NanoRange V2",
    summary:
      "An agentic AI framework for automated microscopy image analysis, built using Google ADK and powered by Gemini.",
    description:
      "NanoRange is an agentic framework that automates the entire microscopy image analysis workflow. The user provides an image along with instructions, and a multi-agent system powered by Gemini plans, executes, critiques, and optimizes a full processing pipeline, from denoising and segmentation to morphological analysis. So researchers can focus on discovery, not configuration.",
    thumbnailUrl: "/images/projects/nanorange-v2/workflow.png",
    heroUrl: "/images/projects/nanorange-v2/nanorange.gif",
    images: [
      "/images/projects/nanorange-v2/nanorange.gif",
      "/images/projects/nanorange-v2/demo_chat.gif",
      "/images/projects/nanorange-v2/demo_canvas.gif",
      "/images/projects/nanorange-v2/workflow.png",
    ],
    tags: ["Python", "Google ADK", "Next.js", "Gemini", "TypeScript", "FastAPI", "SQLite", "Tailwind CSS"],
    liveUrl: "https://www.youtube.com/watch?v=9ur8fZo4_lg",
    sourceUrl: "https://github.com/MJRaei/NanoRange-v2",
    featured: true,
    date: "2026-01",
    sections: [
      {
        title: "Inspiration",
        content:
          "Microscopy image analysis is a critical step in scientific research, from biology and materials science to nanotechnology. But anyone who has worked with microscopy images knows the pain: there are dozens of techniques and ML models for enhancing and segmenting images, each with parameters that need careful tuning. Getting good results often requires chaining multiple tools together, denoising, contrast enhancement, segmentation, morphological analysis, and tweaking each step until the output looks right.\n\nThe microscopy image analysis software market is projected to expand from USD 2.41 billion in 2024 to USD 5.89 billion by 2031, driven largely by the integration of AI and deep learning into imaging workflows. Yet most researchers still spend more time configuring tools than doing their actual analysis.\n\nThe idea behind NanoRange was simple: what if an AI agent could do all of this for you? What if you could just hand it an image, describe what you need, and let it figure out the rest, which tools to use, what parameters to set, and how to chain them together?",
      },
      {
        title: "How It Works",
        content:
          "NanoRange automates the entire microscopy image analysis workflow through a three-phase pipeline:",
        bullets: [
          "Planning Phase: A planner agent reviews the image, selects the appropriate tools, builds a processing pipeline, verifies it, and proposes it to the user for feedback.",
          "Iterative Execution Loop: Once the user confirms the pipeline, an executor agent runs each tool, a critic agent reviews the output, and a parameter optimizer tunes the settings, rerunning as needed (up to T=3 rounds) until the desired result is achieved.",
          "Delivery: The system delivers the final processed images along with a detailed report.",
        ],
        image: {
          src: "/images/projects/nanorange-v2/workflow.png",
          alt: "NanoRange multi-agent workflow diagram",
          caption: "The multi-agent architecture: Planner → Executor → Critic → Optimizer",
        },
      },
      {
        title: "Chat Interface",
        content:
          "Users interact with NanoRange through a conversational chat interface. They can upload microscopy images, describe their analysis goals in natural language, and receive step-by-step feedback as the agents process the pipeline. The chat interface also allows users to approve or modify the proposed pipeline before execution begins.",
        image: {
          src: "/images/projects/nanorange-v2/demo_chat.gif",
          alt: "NanoRange chat interface demo",
          caption: "The chat interface for interacting with the agent pipeline",
        },
      },
      {
        title: "Interactive Canvas",
        content:
          "Beyond the chat, NanoRange features an interactive canvas where users can visualize and compare processing results side by side. The canvas displays intermediate outputs from each pipeline step, making it easy to understand how the image transforms through the workflow and to identify where parameter adjustments might be needed.",
        image: {
          src: "/images/projects/nanorange-v2/demo_canvas.gif",
          alt: "NanoRange interactive canvas demo",
          caption: "The interactive canvas for visualizing pipeline results",
        },
      },
      {
        title: "Architecture",
        content:
          "NanoRange is built using Google ADK (Agent Development Kit) and powered by Gemini 3.0. The architecture consists of:",
        bullets: [
          "Multi-agent system: Separate agents for planning, execution, critique, and parameter optimization, each with specialized roles and instructions.",
          "Tool integration: A comprehensive set of image processing tools including VLMs (Gemini 3 Pro Image Preview), preprocessing tools, segmentation models (Cellpose, watershed), morphological operations, measurement tools, and more.",
          "VLMs as tools: Gemini 3 Pro Image Preview is registered as one of the available tools, enabling the agent to leverage vision-language model capabilities to enhance, edit, and reason about images directly.",
          "Extensible toolbox: Adding a new tool is as simple as writing a function and describing it to the agent, no changes to the core architecture needed.",
        ],
      },
      {
        title: "Challenges",
        content: "Building NanoRange involved solving several non-trivial problems:",
        bullets: [
          "Parameter sensitivity: Many microscopy tools are highly sensitive to parameter choices. Getting the critic agent to reliably evaluate output quality and guide the optimizer toward better parameters required significant prompt engineering.",
          "Pipeline verification: Ensuring the planner agent builds valid pipelines where the output of one tool is compatible with the input of the next was a challenge, especially with diverse tool interfaces.",
          "Balancing autonomy and control: The system needed to be autonomous enough to be useful, but still give researchers control over the pipeline before execution.",
          "Tool diversity: Each ML model and image processing technique has its own API, input format, and output format. Wrapping them all into a consistent interface required careful abstraction.",
        ],
      },
      {
        title: "Key Learnings",
        content:
          "This project reinforced several insights about building agentic AI systems:",
        bullets: [
          "The multi-agent architecture pattern (planner → executor → critic → optimizer) is remarkably effective for complex, multi-step tasks where quality matters.",
          "Describing tools and their parameters in natural language to an LLM is a powerful way to build flexible, extensible systems. The agent can reason about tools it has never explicitly been programmed to use.",
          "Gemini 3.0's multimodal capabilities make it uniquely suited for this kind of task, as it can both reason about images and generate/edit them.",
        ],
      },
      {
        title: "What's Next",
        content: "NanoRange has several exciting directions for future development:",
        bullets: [
          "Batch processing: Scaling the framework to process hundreds of images in parallel, turning hours of manual work into minutes.",
          "Dataset generation: Running pipelines at scale to generate domain-specific annotated datasets for training new ML models.",
          "Community tools: Opening up the toolbox so the microscopy community can contribute their own tools and share pipelines.",
        ],
      },
    ],
  },
  {
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
  },
  {
    slug: "nanorange-v1",
    title: "NanoRange V1",
    summary:
      "A web-based microscopy image analysis tool with automated segmentation, denoising, and particle measurement capabilities.",
    description:
      "The original NanoRange application that provides researchers with a streamlined interface for microscopy image analysis. It features automated image preprocessing, multiple segmentation algorithms, particle size measurement, and statistical analysis. Users upload microscopy images and select from a suite of processing tools to extract quantitative data, with results exported as detailed reports. This project laid the groundwork for the agentic V2 iteration.",
    thumbnailUrl: "https://placehold.co/800x450/1a1a2e/e0e0e0?text=NanoRange+V1",
    images: ["https://placehold.co/800x450/1a1a2e/e0e0e0?text=NanoRange+V1"],
    tags: ["Python", "OpenCV", "scikit-image", "Flask", "React", "Tailwind CSS"],
    sourceUrl: "https://github.com/MJRaei/NanoRange",
    featured: true,
    date: "2025-02",
  },
  {
    slug: "portfolio",
    title: "Portfolio Website",
    summary:
      "A modern, responsive developer portfolio built with Next.js, TypeScript, and Tailwind CSS featuring smooth animations and dark theme.",
    description:
      "A personal portfolio website designed to showcase projects, experience, and skills. Built with Next.js App Router, TypeScript, and Tailwind CSS, featuring a sleek dark theme, Framer Motion animations, responsive design, and dynamic project pages with detailed case studies.",
    thumbnailUrl: "https://placehold.co/800x450/1a1a2e/e0e0e0?text=Portfolio",
    images: ["https://placehold.co/800x450/1a1a2e/e0e0e0?text=Portfolio"],
    tags: ["Next.js", "TypeScript", "Tailwind CSS", "Framer Motion"],
    sourceUrl: "https://github.com/MJRaei/portfolio",
    featured: false,
    date: "2025-06",
  },
];
