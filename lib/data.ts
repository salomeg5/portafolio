import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact, FaNodeJs, FaGitAlt, FaHtml5, FaCss3Alt, FaGithub, FaGitlab } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import { MdGroups } from "react-icons/md";
import { 
  SiJavascript, 
  SiNextdotjs, 
  SiTailwindcss, 
  SiRedux, 
  SiPostgresql,
  SiFramer
} from "react-icons/si";
import corpcommentImg from "@/public/corpcomment.png";
import rmtdevImg from "@/public/rmtdev.png";
import wordanalyticsImg from "@/public/wordanalytics.png";

export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Certificates",
    hash: "#certificates",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Experience",
    hash: "#experience",
  },
] as const;

export const projectsData = [
  {
    title: "Innovating the Future",
    description:
      "We are thrilled to announce that we are in the early stages of several innovative projects poised to transform our industry.",
    tags: ["React", "Next.js", "MongoDB", "Tailwind", "Prisma"],
    imageUrl: corpcommentImg,
  },
  {
    title: "Innovating the Future",
    description:
      "We are thrilled to announce that we are in the early stages of several innovative projects poised to transform our industry.",
    tags: ["React", "TypeScript", "Next.js", "Tailwind", "Redux"],
    imageUrl: rmtdevImg,
  },
  {
    title: "Innovating the Future",
    description:
      "We are thrilled to announce that we are in the early stages of several innovative projects poised to transform our industry.",
    tags: ["React", "Next.js", "SQL", "Tailwind", "Framer"],
    imageUrl: wordanalyticsImg,
  },
] as const;

export const skillsData = [
  {
    name: "HTML",
    icon: React.createElement(FaHtml5),
  },
  {
    name: "CSS",
    icon: React.createElement(FaCss3Alt),
  },
  {
    name: "JavaScript",
    icon: React.createElement(SiJavascript),
  },
  {
    name: "React",
    icon: React.createElement(FaReact),
  },
  {
    name: "Next.js",
    icon: React.createElement(SiNextdotjs),
  },
  {
    name: "Node.js",
    icon: React.createElement(FaNodeJs),
  },
  {
    name: "Git",
    icon: React.createElement(FaGitAlt),
  },
  {
    name: "GitHub",
    icon: React.createElement(FaGithub),
  },
  {
    name: "GitLab",
    icon: React.createElement(FaGitlab),
  },
  {
    name: "Tailwind",
    icon: React.createElement(SiTailwindcss),
  },
  {
    name: "Redux",
    icon: React.createElement(SiRedux),
  },
  {
    name: "PostgreSQL",
    icon: React.createElement(SiPostgresql),
  },
  {
    name: "Framer Motion",
    icon: React.createElement(SiFramer),
  },
  {
    name: "Scrum",
    icon: React.createElement(MdGroups),
  },
] as const;

export const certificatesData = [
  {
    name: "Cloud Computing",
    institution: "Google",
    url: "/certificates/Cloud Computing.jpg",
    type: "image" as const,
  },
  {
    name: "JavaScript",
    institution: "Platzi",
    url: "/certificates/JavaScript.jpg",
    type: "image" as const,
  },
  {
    name: "SEO Optimization",
    institution: "Santander",
    url: "/certificates/seo.png",
    type: "image" as const,
  },
  {
    name: "Fundamentos de Diseño UI/UX",
    institution: "Platzi",
    url: "/certificates/Fundamentos de diseño UIUX.pdf",
    type: "pdf" as const,
    rotate: true,
  },
  {
    name: "Introducción a la Web",
    institution: "Platzi",
    url: "/certificates/Introduccion a la web.pdf",
    type: "pdf" as const,
    rotate: true,
  },
  {
    name: "Programación Nivel Básico",
    institution: "TIC",
    url: "/certificates/Porgramacion  nivel basico.pdf",
    type: "pdf" as const,
    rotate: true,
  },
  {
    name: "Prework",
    institution: "Platzi",
    url: "/certificates/Prework.pdf",
    type: "pdf" as const,
    rotate: true,
  },
] as const;