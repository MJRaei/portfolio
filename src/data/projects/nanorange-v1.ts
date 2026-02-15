import { Project } from "@/types";

export const nanorangeV1: Project = {
  slug: "nanorange-v1",
  title: "NanoRange V1",
  summary:
    "A web-based microscopy image analysis tool with automated segmentation, denoising, and particle measurement capabilities.",
  description:
    "The original NanoRange application that provides researchers with a streamlined interface for microscopy image analysis. It features automated image preprocessing, multiple segmentation algorithms, particle size measurement, and statistical analysis. Users upload microscopy images and select from a suite of processing tools to extract quantitative data, with results exported as detailed reports. This project laid the groundwork for the agentic V2 iteration.",
  thumbnailUrl: "/images/projects/nanorange-v1/workflow.png",
  heroUrl: "/images/projects/nanorange-v1/workflow.png",
  images: ["/images/projects/nanorange-v1/workflow.png"],
  tags: ["Python", "OpenCV", "scikit-image", "Flask", "React", "Tailwind CSS"],
  liveUrl: "https://www.youtube.com/watch?v=aQSPLL43o8U",
  sourceUrl: "https://github.com/MJRaei/NanORange",
  featured: true,
  date: "2025-11",
};
