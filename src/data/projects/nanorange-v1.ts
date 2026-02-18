import { Project } from "@/types";

export const nanorangeV1: Project = {
  slug: "nanorange-v1",
  title: "NanoRange V1",
  summary:
    "AI-powered nanoparticle analysis platform that uses multiple specialized agents to detect, measure, and visualize nanoparticles from microscopy images.",
  description:
    "NanoRange is an AI-powered platform that automates the analysis of microscopy images to detect and measure nanoparticles. Using multiple specialized AI agents built with Google ADK and powered by Gemini, it processes images through a sophisticated pipeline: a Parameter Optimizer analyzes image characteristics, a Contrast Enhancer performs AI-powered denoising, adaptive thresholding segments particles, and a Boundary Colorizer differentiates particle boundaries. The system then fits circles and ellipses to extract geometric measurements, generating annotated images, interactive HTML plots, and size distribution histograms. It features a conversational chat interface for natural language interaction and human-in-the-loop review to refine results.",
  thumbnailUrl: "/images/projects/nanorange-v1/workflow.png",
  heroUrl: "/images/projects/nanorange-v1/workflow.png",
  images: ["/images/projects/nanorange-v1/workflow.png"],
  tags: [
    "Python",
    "Google ADK",
    "Gemini",
    "VLMs",
    "FastAPI",
    "Next.js",
    "React",
    "TypeScript",
    "OpenCV",
    "NumPy",
    "scikit-learn",
    "scikit-image",
    "Plotly",
  ],
  liveUrl: "https://www.youtube.com/watch?v=aQSPLL43o8U",
  sourceUrl: "https://github.com/MJRaei/NanoRange",
  featured: true,
  date: "2025-11",
  awards: [
    { label: "Theia Scientific Award at the 2025 Microscopy Hackathon", url: "https://kaliningroup.github.io/mic_hackathon_2/awards/" },
    { label: "DENS Mystery Award at the 2025 Microscopy Hackathon", url: "https://kaliningroup.github.io/mic_hackathon_2/awards/" },
  ],
  sections: [
    {
      title: "Achievement",
      content:
        "NanoRange V1 won two awards at the 2025 Microscopy Hackathon: the Theia Scientific Award and the DENS Mystery Award.",
    },
    {
      title: "Overview",
      content:
        "NanoRange is an AI-powered platform that automates the analysis of microscopy images to detect and measure nanoparticles. Researchers upload a Cryo-TEM image, interact through a natural language chat interface, and receive detailed visualizations and measurements, all powered by a multi-agent pipeline built with Google ADK and Gemini.",
    },
    {
      title: "How It Works",
      content:
        "NanoRange processes microscopy images through an eight-step pipeline, combining AI agents with classical image processing techniques:",
      bullets: [
        "Microscopy Image Upload: Users upload their image (JPG, PNG, TIFF) through the web interface.",
        "Parameter Optimizer: An AI agent analyzes image characteristics and suggests optimal hyperparameters for the pipeline.",
        "Contrast Enhancer: An AI-powered agent performs denoising and contrast enhancement on the image.",
        "Image Thresholding: Otsu's adaptive thresholding produces a binary segmentation of the enhanced image.",
        "Boundary Colorizer: An AI agent assigns unique colors to differentiate individual particle boundaries.",
        "Shape Fitting: Circles and ellipses are fitted to detected particles, extracting geometric measurements.",
        "Report Generation: The system generates annotated images, CSV data, size distribution histograms, and interactive Plotly plots.",
        "Human Review: Users review results and optionally adjust parameters through the conversational interface.",
      ],
    },
    {
      title: "AI Agents",
      content:
        "The core of NanoRange is its multi-agent system, where each agent is a specialized AI module with a distinct role in the pipeline:",
      bullets: [
        "Parameter Optimizer: Examines the input image and recommends processing parameters tailored to its characteristics, removing the need for manual tuning.",
        "Contrast Enhancer: Applies AI-driven denoising and contrast enhancement to improve particle visibility before segmentation.",
        "Boundary Colorizer: Assigns unique colors to segmented particle boundaries, making it easy to distinguish overlapping or adjacent particles.",
      ],
    },
    {
      title: "Conversational Interface",
      content:
        "Users interact with NanoRange through a natural language chat interface. They can upload microscopy images, ask the AI to analyze them, review the generated visualizations and measurements, and refine parameters through conversation. This human-in-the-loop approach ensures researchers stay in control of the analysis while benefiting from automation.",
    },
    {
      title: "Output & Visualization",
      content:
        "NanoRange generates a comprehensive set of outputs for each analysis run:",
      bullets: [
        "Annotated images: Original images overlaid with detected shapes (circles and ellipses).",
        "Size distribution histograms: Statistical plots showing the distribution of particle sizes.",
        "Interactive HTML plots: Plotly-based interactive visualizations for detailed exploration.",
        "CSV exports: Tabular data containing all geometric measurements for further analysis.",
      ],
    },
    {
      title: "Tech Stack",
      content:
        "NanoRange is built on a stack spanning AI agent orchestration, image processing, and a modern web frontend:",
      bullets: [
        "AI Framework: Google ADK (Agent Development Kit) for multi-agent orchestration.",
        "LLM Models: Gemini for agent reasoning and image understanding.",
        "Image Processing: OpenCV, PIL, NumPy, scikit-learn, and scikit-image for preprocessing and segmentation.",
        "Visualization: Plotly and Matplotlib for interactive and static plots.",
        "Backend: FastAPI and Python for the API server.",
        "Frontend: Next.js, React, and TypeScript for the web interface.",
      ],
    },
  ],
};
