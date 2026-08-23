import { PersonalInfo } from "@/types";

export const personalInfo: PersonalInfo = {
  name: "Mohammad Javad Raei",
  title: "Scientific Software Developer",
  email: "raei.mohammadjavad@gmail.com",
  location: "Alberta, Canada",
  bio: "I build agentic AI systems that reason, retrieve, and act reliably enough to trust in production.",
  aboutParagraphs: [
    "I'm an AI engineer focused on agent design: how tools get exposed to a model, how state persists across a run, and how you know whether a system actually worked. I build multi-agent systems, retrieval-grounded architectures, and the eval harnesses that measure reliability rather than just demo well.",
    "Professionally, I develop engineering software in the oil and gas industry. Outside of work, I build agentic AI tools for scientific research, work that has earned me four prizes across two hackathons.",
    "When I'm not coding or experimenting, you'll find me behind the camera. I'm passionate about photography and video editing."
  ],
  avatarUrl: "/images/personal/my-picture.jpg",
  resumeUrl: "/files/resume.pdf",
  socialLinks: [
    { platform: "GitHub", url: "https://github.com/MJRaei", icon: "Github" },
    { platform: "LinkedIn", url: "https://linkedin.com/in/mohammadjavadraei", icon: "Linkedin" },
    { platform: "Google Scholar", url: "https://scholar.google.com/citations?user=bVH67U4AAAAJ&hl=en", icon: "GraduationCap" },
  ],
};
