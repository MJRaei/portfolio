import { Project } from "@/types";

export const scipatch: Project = {
  slug: "scipatch",
  title: "SciPatch",
  summary:
    "Turns scattered research code into verified tools that any AI agent can find, run, and remember, served through one MCP server.",
  description:
    "SciPatch is a single hub where research code becomes a verified tool. A coding agent wraps a repository and its paper into a tool package with a pinned source, an isolated environment, typed functions with units, usage notes for agents, and golden tests that reproduce known results. Only tools that pass their tests are installed. One MCP server then serves every tool to any AI app (Claude, Codex, Gemini CLI, Cursor, or LangGraph), and every answer comes back with units, validity limits, a citation, and a recorded run that can be reproduced. The catalog has 50 verified tools today: established codes such as Quantum ESPRESSO, LAMMPS, OpenMM, and RDKit, alongside 10 past hackathon projects that previously only had a notebook or a Gradio UI.",
  thumbnailUrl: "/images/projects/scipatch/workflow.png",
  heroUrl: "/images/projects/scipatch/hero.png",
  images: [
    "/images/projects/scipatch/hero.png",
    "/images/projects/scipatch/workflow.png",
  ],
  tags: [
    "Python",
    "MCP",
    "AI Agents",
    "Agent Skills",
    "Claude Code",
    "Conda",
    "SQLite",
    "Pydantic",
    "ML Potentials",
    "DFT",
  ],
  liveUrl: "https://www.youtube.com/watch?v=lRIYEReAMbY",
  sourceUrl: "https://github.com/MJRaei/SciPatch",
  featured: true,
  date: "2026-10",
  awards: [
    { label: "MDRI Horizon Award at the OSI Hackathon 2026", url: "https://scientificintelligence.org/campaigns/osi-hackathon-2026/results" },
    { label: "Judge's Star at the OSI Hackathon 2026", url: "https://scientificintelligence.org/campaigns/osi-hackathon-2026/results" },
  ],
  sections: [
    {
      title: "Achievement",
      content:
        "SciPatch won an MDRI Horizon Award (Materials Discovery Research Institute) at the OSI Hackathon 2026, one of 10 Horizon awards given among 183 entries from more than 200 teams. It was also selected for a Judge's Star, an award each judge could give to only one project.",
    },
    {
      title: "Overview",
      content:
        "SciPatch gives your AI assistant a verified toolbox for materials science and chemistry. Ask a question in Claude, Codex, Gemini CLI, or Cursor, and it runs the right tool on your computer and answers with units, limits, and a citation. There are no input files to write, no scripts, and no codes to install by hand.",
    },
    {
      title: "Inspiration",
      content:
        "Most research code is never run again after its paper is published. Every repository needs its own setup, has its own interface, and knows nothing about the others, so a growing collection of codes becomes harder to use, not easier. Many of the most interesting projects, especially from hackathons, only ship a web UI or a notebook, which an AI agent cannot call at all.\n\nThe idea behind SciPatch was to give research code a place to live after publication: wrap it once, prove it still reproduces known results, and make it available to every AI app through a single connection.",
    },
    {
      title: "How It Works",
      content: "SciPatch turns a repository into a tool in three steps:",
      bullets: [
        "Build once: scipatch onboard hands a repository and its paper to a coding agent (Claude Code, Codex, or Gemini CLI), guided by a dedicated onboarding skill. The agent reads the code and the paper, proposes which capabilities to expose, makes the environment build, and writes the functions, golden tests, and usage notes.",
        "Verify: scipatch check rebuilds the package from scratch and runs its golden tests. If the tool does not reproduce known results, the agent fixes it and retries. Only tools that pass are installed.",
        "Use everywhere: scipatch add registers the tool with the SciPatch MCP server, where every connected AI app can see it. The agent plans, calls a tool, reads the result, and answers.",
      ],
      image: {
        src: "/images/projects/scipatch/workflow.png",
        alt: "SciPatch workflow: research code becomes a verified tool package, served through one MCP server to any AI app, from a catalog of 50 tools",
        caption: "Build once, verify, and use everywhere through one MCP server",
      },
    },
    {
      title: "Inside a Tool Package",
      content:
        "A tool package is a small folder that describes how to use one piece of research code. It does not contain the code itself. It pins it to an exact commit so the tool can be rebuilt identically anywhere:",
      bullets: [
        "scipatch.yaml: the manifest, with the pinned source, environment, functions, validity limits, maturity level, and golden tests.",
        "api.py: typed Python functions with units and docstrings. SciPatch generates the command line, the MCP interface, the dashboard forms, and the agent skill from this one file, so they never drift apart.",
        "SKILL.md: usage notes that tell AI agents when and how to use the tool.",
        "patches/: fixes to the original code, re-applied on every rebuild instead of being lost in a local checkout.",
        "tests/: input files for golden tests, which call functions with known inputs and check the outputs, ideally against a number from the paper. They run on every build, so \"installed\" means \"reproduces known results\", not just \"imports without errors\".",
      ],
    },
    {
      title: "Architecture",
      content: "SciPatch is built around four parts that keep many unrelated codes reliable side by side:",
      bullets: [
        "One MCP gateway: a single server with a fixed set of operations (find, describe, install, run, and search history). With this search-then-describe-then-run pattern, ten tools and three hundred tools cost the model the same context.",
        "Isolated environments: every tool gets its own uv or conda environment, with per-platform lock files for Linux, macOS, and Windows (Linux-only tools run through WSL). SciPatch never imports tool code; it calls each tool through a small shim in the tool's own interpreter, so tools that need conflicting NumPy or PyTorch versions, or even Python 3.8, run side by side.",
        "Trust levels: every tool is labelled established, published, or experimental, backed by evidence in its manifest. Search ranks established tools first, and experimental tools carry a caution to cross-check their numbers.",
        "Run history: every run is recorded in SQLite with the tool version, source commit, exact arguments, results, and output files. This gives provenance for every number, instant caching of identical calls, and recall of past work.",
      ],
    },
    {
      title: "Tool Catalog",
      content:
        "SciPatch ships with 50 verified tools across eight fields, each checked against experiment, reference databases such as NIST, published benchmarks, or upstream test suites:",
      bullets: [
        "Quantum chemistry: PySCF, Psi4, Quantum ESPRESSO, GPAW, xTB, and CREST.",
        "Molecular simulation: LAMMPS, OpenMM, universal ML potentials (Orb, MACE, CHGNet, MatGL), phonopy, phono3py, MDAnalysis, and OVITO.",
        "Materials: pymatgen, Materials Project, robocrystallographer, PyXtal, surfaces, ion diffusion, Zeo++, and RASPA3.",
        "Thermodynamics, spectroscopy, and energy: Cantera, CoolProp, pycalphad, Reaktoro, xraylarch, pyOpenMS, PyBaMM, impedance.py, pvlib, and more.",
        "Chemistry and drugs: RDKit, Open Babel, AiZynthFinder, AutoDock Vina, and PROPKA.",
        "Hackathon projects: 10 past hackathon projects, such as AtomBridge, CLUE, MixSense, and UMA-Dock, now run as verified tools next to established codes.",
      ],
    },
    {
      title: "Demo: A New Sodium-Ion Battery Material",
      content:
        "To show SciPatch end to end, one agent was asked an open-ended question: find a new layered material for sodium-ion batteries that no paper in its knowledge base reports. Using nine SciPatch tools, it ruled out known hosts, screened 17 candidates with four independent ML potentials, checked the leader with DFT, and worked out its voltage, capacity, synthesis route, and performance in a full cell. It identified ZrS₂, then found a 2025 paper that had already made the predicted sodium phase, independently confirming the result. Every number in the answer traces back to a recorded SciPatch run.",
    },
    {
      title: "Design Principles",
      content: "A few principles guided every decision in SciPatch:",
      bullets: [
        "Plain files over hidden state: tools are folders, state is JSON, and history is SQLite, so everything can be inspected, backed up, or shared.",
        "Reproducible by default: pinned commits, recorded patches, golden tests, and per-run provenance.",
        "Honest results: validity limits travel with every tool, and agents are instructed to report them.",
        "Safe with your files: servers listen only on your computer, API keys never pass through the chat, and SciPatch edits only its own entries in your AI apps' configuration files, backing them up first.",
      ],
    },
    {
      title: "What's Next",
      content:
        "The goal is to make SciPatch the place research code lives after publication:",
      bullets: [
        "An open hub: a community catalog where anyone can contribute a verified tool.",
        "More backends: Docker and HPC (Slurm) environments for large simulations.",
      ],
    },
  ],
};
