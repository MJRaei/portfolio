import { Project } from "@/types";

export const projects: Project[] = [
  {
    slug: "nanorange-v2",
    title: "NanoRange V2",
    summary: "An agentic AI framework for automated microscopy image analysis, built using Google ADK and powered by Gemini. ",
    description:
      "Built a complete e-commerce platform featuring product browsing, search and filtering, shopping cart, Stripe payment integration, and an admin dashboard for managing inventory. The application uses server-side rendering for optimal SEO and performance.",
    thumbnailUrl: "https://placehold.co/800x450/1a1a2e/e0e0e0?text=E-Commerce+Platform",
    images: ["https://placehold.co/800x450/1a1a2e/e0e0e0?text=E-Commerce+Platform"],
    tags: ["Python", "Google ADK", "Gemini", "Next.js", "TypeScript", "FastAPI", "SQLite", "Tailwind CSS"],
    liveUrl: "https://www.youtube.com/watch?v=9ur8fZo4_lg",
    sourceUrl: "https://github.com/MJRaei/NanoRange-v2",
    featured: true,
    date: "2025-08",
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
