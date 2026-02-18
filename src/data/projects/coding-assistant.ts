import { Project } from "@/types";

export const codingAssistant: Project = {
  slug: "coding-assistant",
  title: "Coding Assistant",
  summary:
    "A flexible Retrieval-Augmented Generation system for code analysis, featuring intelligent chunking, multi-provider embeddings, and semantic search.",
  description:
    "A flexible Retrieval-Augmented Generation (RAG) system designed for code analysis and understanding. It provides intelligent code chunking with multiple strategies, a modular embedding system supporting OpenAI, Hugging Face, and Ollama providers, and advanced semantic search capabilities. The system handles Python, JavaScript, QML, and other languages, with a factory-based architecture that makes it easy to extend with new embedding providers.",
  thumbnailUrl: "/images/projects/coding-assistant/workflow.png",
  images: ["/images/projects/coding-assistant/workflow.png"],
  tags: ["Python", "RAG", "FAISS", "OpenAI", "Hugging Face", "Ollama", "NLP"],
  sourceUrl: "https://github.com/MJRaei/Coding-Assistant",
  featured: false,
  date: "2025-07",
  sections: [
    {
      title: "Overview",
      content:
        "A flexible Retrieval-Augmented Generation (RAG) system designed for code analysis and understanding. It provides intelligent code chunking, flexible embedding generation, and semantic search capabilities across multiple programming languages including Python, JavaScript, and QML.",
    },
    {
      title: "Workflow",
      content:
        "The system operates through two core pipelines. The Indexing Pipeline scans a codebase, chunks the source files using a configurable strategy, generates embeddings via the selected provider, and builds a FAISS vector index persisted to disk. The Retrieval Pipeline takes a natural-language query, embeds it with the same provider, performs semantic similarity search against the index, and returns ranked code snippets with metadata to an answering layer for Q&A, navigation, and code understanding.",
    },
    {
      title: "Chunking Strategies",
      content:
        "The system supports multiple chunking strategies optimized for different code analysis needs:",
      bullets: [
        "Structure-Preserving: Maintains semantic units like functions and classes intact.",
        "Size-Based: Simple size-based chunking for uniform processing.",
        "Adaptive Structure: Intelligent splitting that adapts to code structure, combining the best of both approaches.",
      ],
    },
    {
      title: "Embedding Providers",
      content:
        "The embedding system supports multiple providers through a modular, factory-based architecture. Each provider is implemented as a class inheriting from a shared base, registered in a central factory for easy instantiation.",
      bullets: [
        "OpenAI: Cloud-based embeddings with rate limiting, retry logic, and batch processing. Supports text-embedding-3-small, text-embedding-3-large, and ada-002.",
        "Hugging Face: Local embeddings using sentence-transformers with no API key required. Supports models like all-MiniLM-L6-v2 and all-mpnet-base-v2.",
        "Ollama: Local embeddings through a self-hosted Ollama server, supporting models like nomic-embed-text and snowflake-arctic-embed.",
      ],
    },
    {
      title: "Architecture",
      content:
        "The system follows a modular architecture with clearly separated concerns, making it easy to extend with new providers and chunking strategies:",
      bullets: [
        "BaseEmbeddingProvider: Abstract base class defining the interface for all embedding providers.",
        "Provider Implementations: Concrete classes for OpenAI, Hugging Face, and Ollama, each with provider-specific configuration.",
        "EmbeddingProviderFactory: Factory pattern for creating providers by name with configuration.",
        "EmbeddingProcessor: High-level API that uses the provider system, with convenience methods and backward compatibility.",
        "IndexBuilder: Orchestrates the full pipeline from code directory to searchable FAISS index.",
        "CodeSearch: Semantic search interface for querying the built index.",
      ],
    },
    {
      title: "Tech Stack",
      content:
        "The system is built with a focused Python stack for embedding generation, indexing, and retrieval:",
      bullets: [
        "Core: Python, NumPy, FAISS (faiss-cpu), python-dotenv.",
        "OpenAI provider: openai SDK for cloud-based embedding generation.",
        "Hugging Face provider: sentence-transformers, torch, transformers for local embeddings.",
        "Ollama provider: ollama SDK for self-hosted local embeddings.",
        "Search: FAISS vector indexing for fast semantic similarity search.",
      ],
    },
  ],
};
