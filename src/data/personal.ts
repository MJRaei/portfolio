import { PersonalInfo } from "@/types";

export const personalInfo: PersonalInfo = {
  name: "John Doe",
  title: "Full-Stack Developer",
  email: "hello@johndoe.dev",
  location: "San Francisco, CA",
  bio: "I build modern web applications with a focus on performance, accessibility, and clean design.",
  aboutParagraphs: [
    "I'm a full-stack developer with a passion for building elegant solutions to complex problems. With experience across the entire web stack, I enjoy working on projects that challenge me to learn and grow.",
    "When I'm not coding, you can find me exploring new technologies, contributing to open-source projects, or enjoying the outdoors.",
  ],
  avatarUrl: "/images/profile.jpg",
  resumeUrl: "/files/resume.pdf",
  socialLinks: [
    { platform: "GitHub", url: "https://github.com/johndoe", icon: "Github" },
    { platform: "LinkedIn", url: "https://linkedin.com/in/johndoe", icon: "Linkedin" },
    { platform: "Twitter", url: "https://twitter.com/johndoe", icon: "Twitter" },
  ],
};
