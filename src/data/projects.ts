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
    date: "2025-08",
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
    summary: "Real-time collaborative task board with drag-and-drop support.",
    description:
      "A Trello-inspired task management application with real-time collaboration, drag-and-drop board management, user authentication, and team workspaces. Built with a focus on responsive design and smooth animations.",
    thumbnailUrl: "https://placehold.co/800x450/1a1a2e/e0e0e0?text=Task+Management+App",
    images: ["https://placehold.co/800x450/1a1a2e/e0e0e0?text=Task+Management+App"],
    tags: ["React", "Node.js", "Socket.IO", "MongoDB", "Tailwind CSS"],
    liveUrl: "https://example.com",
    sourceUrl: "https://github.com/johndoe/taskapp",
    featured: true,
    date: "2025-05",
  },
  {
    slug: "coding-assistant",
    title: "Coding Assistant",
    summary: "A sleek chat UI for interacting with large language models.",
    description:
      "Developed an AI-powered chat interface that supports streaming responses, conversation history, markdown rendering, and code syntax highlighting. Features a clean, minimal design inspired by modern messaging applications.",
    thumbnailUrl: "https://placehold.co/800x450/1a1a2e/e0e0e0?text=AI+Chat+Interface",
    images: ["https://placehold.co/800x450/1a1a2e/e0e0e0?text=AI+Chat+Interface"],
    tags: ["Next.js", "TypeScript", "OpenAI API", "Tailwind CSS"],
    sourceUrl: "https://github.com/johndoe/aichat",
    featured: true,
    date: "2025-02",
  },
  {
    slug: "weather-dashboard",
    title: "Weather Dashboard",
    summary: "A weather app with interactive maps and 7-day forecasts.",
    description:
      "A weather dashboard that displays current conditions, hourly and 7-day forecasts, interactive radar maps, and severe weather alerts. Supports location search and geolocation.",
    thumbnailUrl: "https://placehold.co/800x450/1a1a2e/e0e0e0?text=Weather+Dashboard",
    images: ["https://placehold.co/800x450/1a1a2e/e0e0e0?text=Weather+Dashboard"],
    tags: ["React", "TypeScript", "Weather API", "Chart.js"],
    liveUrl: "https://example.com",
    featured: false,
    date: "2024-11",
  },
];
