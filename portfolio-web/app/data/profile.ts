import { ProfileData } from "@/types";

export const profileData: ProfileData = {
  name: "Christian Peps Caasi",
  title: "Mobile & Web Developer",
  email: "christianpepscaasi@gmail.com",
  phone: "(+63) 945-846-3382",
  location: "Anda, Pangasinan",
  summary:
    "Mobile and Web Developer with foundational experience in Java, Flutter, and Android development, alongside exposure to full-cycle system development in academic and live environments. Experienced in mobile application development, system prototyping, and real-world deployment of academic systems. Participated in multiple production and internship-level projects involving blockchain systems, QA processes, and code review workflows. Strong adaptability across roles including development, QA, and team leadership in fast-paced and evolving project environments.",
  skills: {
    technical: [
      "Java",
      "Dart",
      "JavaScript",
      "TypeScript",
      "React",
      "Next.js",
      "Flutter",
      "Solidity",
      "Python",
      "Firebase",
      "SQL",
    ],
    soft: [
      "Problem-solving",
      "Adaptability",
      "Team collaboration",
      "Communication",
      "Leadership",
    ],
  },
  social: {
    github: "https://github.com/christianpepscaasi-gh",
  },
};

export const workExperience = [
  {
    title: "Software Development Intern",
    company: "Makerspace OJT",
    duration: "Feb 2026 - Present",
    highlights: [
      "Assisted in conducting system requirement surveys and initial client-side evaluation for the PandanChain system",
      "Contributed to the development and implementation of the PandanChain system during its active development phase",
      "Assigned as developer for the Sillag blockchain-based system project, contributing to system development and feature implementation",
      "Promoted to Team Lead for the Sillag system after internal team restructuring, handling coordination and task distribution",
      "Served as Pull Request Reviewer and QA contributor for PromptGraph, a live web crawler and LLM-based tracking system",
      "Performed ticket-based development tasks while simultaneously reviewing production-level code for quality and security issues",
    ],
  },
  {
    title: "Summer Job (Post office Clerk)",
    company: "Municipal Hall of Anda",
    duration: "Jul 2022 - Sep 2022",
    highlights: [
      "Assisted in clerical and administrative tasks related to postal operations",
      "Handled document sorting, basic data entry, and public assistance duties",
      "Gained exposure to government office workflows and formal administrative processes",
    ],
  },
];

export const education = [
  {
    degree: "Bachelor of Science in Information Technology",
    school: "Pangasinan State University - Lingayen Campus",
    duration: "Sep 2022 - Present",
    details:
      "Advanced studies in computer science with a focus on mobile development",
  },
];
