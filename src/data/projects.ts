import { Project } from "@/types";

export const projects: Project[] = [
  {
    slug: "ecommerce-platform",
    title: "E-Commerce Platform",
    summary: "A full-featured online store with cart, checkout, and payment processing.",
    description:
      "Built a complete e-commerce platform featuring product browsing, search and filtering, shopping cart, Stripe payment integration, and an admin dashboard for managing inventory. The application uses server-side rendering for optimal SEO and performance.",
    thumbnailUrl: "/images/projects/ecommerce.jpg",
    images: ["/images/projects/ecommerce.jpg"],
    tags: ["Next.js", "TypeScript", "Stripe", "PostgreSQL", "Tailwind CSS"],
    liveUrl: "https://example.com",
    sourceUrl: "https://github.com/johndoe/ecommerce",
    featured: true,
    date: "2025-08",
  },
  {
    slug: "task-management-app",
    title: "Task Management App",
    summary: "Real-time collaborative task board with drag-and-drop support.",
    description:
      "A Trello-inspired task management application with real-time collaboration, drag-and-drop board management, user authentication, and team workspaces. Built with a focus on responsive design and smooth animations.",
    thumbnailUrl: "/images/projects/taskapp.jpg",
    images: ["/images/projects/taskapp.jpg"],
    tags: ["React", "Node.js", "Socket.IO", "MongoDB", "Tailwind CSS"],
    liveUrl: "https://example.com",
    sourceUrl: "https://github.com/johndoe/taskapp",
    featured: true,
    date: "2025-05",
  },
  {
    slug: "ai-chat-interface",
    title: "AI Chat Interface",
    summary: "A sleek chat UI for interacting with large language models.",
    description:
      "Developed an AI-powered chat interface that supports streaming responses, conversation history, markdown rendering, and code syntax highlighting. Features a clean, minimal design inspired by modern messaging applications.",
    thumbnailUrl: "/images/projects/aichat.jpg",
    images: ["/images/projects/aichat.jpg"],
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
    thumbnailUrl: "/images/projects/weather.jpg",
    images: ["/images/projects/weather.jpg"],
    tags: ["React", "TypeScript", "Weather API", "Chart.js"],
    liveUrl: "https://example.com",
    featured: false,
    date: "2024-11",
  },
];
