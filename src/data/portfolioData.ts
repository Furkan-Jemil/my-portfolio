import { FaReact, FaNodeJs, FaHtml5, FaCss3Alt, FaGitAlt, FaGithub } from "react-icons/fa";
import { SiJavascript, SiTypescript, SiExpress, SiMongodb, SiTailwindcss, SiVite, SiFigma } from "react-icons/si";
import { VscCode } from "react-icons/vsc";
import { IconType } from "react-icons";

export interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  tags: string[];
  github: string;
  live: string;
  featured: boolean;
}

export interface Skill {
  name: string;
  icon: IconType;
  level: number;
  category: "frontend" | "backend" | "tools";
}

export interface SocialLink {
  name: string;
  url: string;
  icon: IconType;
}

export const personalInfo = {
  name: "Furkan Jemil",
  title: "Full Stack Developer",
  tagline: "Building digital experiences with React & Node.js",
  email: "contact@furkanjemil.dev",
  github: "https://github.com/Furkan-Jemil",
  linkedin: "https://linkedin.com/in/furkan-jemil",
  location: "Available Worldwide",
  resumeUrl: "#",
};

export const projects: Project[] = [
  {
    id: 1,
    title: "E-Commerce Platform",
    description: "A full-stack online store with shopping cart, user authentication, payment integration with Stripe, and an admin dashboard for managing products and orders.",
    image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&q=80",
    tags: ["React", "Node.js", "MongoDB", "Stripe"],
    github: "https://github.com/Furkan-Jemil/ecommerce-platform",
    live: "https://ecommerce-platform-demo.vercel.app",
    featured: true,
  },
  {
    id: 2,
    title: "Task Management",
    description: "A collaborative project management tool with real-time updates, drag-and-drop functionality, team workspaces, and progress tracking dashboards.",
    image: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=800&q=80",
    tags: ["React", "TypeScript", "Express", "PostgreSQL"],
    github: "https://github.com/Furkan-Jemil/task-management",
    live: "https://task-management-demo.vercel.app",
    featured: true,
  },
  {
    id: 3,
    title: "Weather Dashboard",
    description: "A beautiful weather application with 7-day forecasts, interactive maps, location search, and customizable widgets for tracking multiple cities.",
    image: "https://images.unsplash.com/photo-1592210454359-9043f067919b?w=800&q=80",
    tags: ["React", "API", "CSS", "Charts"],
    github: "https://github.com/Furkan-Jemil/weather-dashboard",
    live: "https://weather-dashboard-demo.vercel.app",
    featured: true,
  },
  {
    id: 4,
    title: "Social Media Dashboard",
    description: "An analytics dashboard for social media managers with real-time metrics, scheduled posts, engagement tracking, and automated reporting features.",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80",
    tags: ["React", "Node.js", "MongoDB", "Charts"],
    github: "https://github.com/Furkan-Jemil/social-media-dashboard",
    live: "https://social-dashboard-demo.vercel.app",
    featured: true,
  },
  {
    id: 5,
    title: "Apple Website Clone",
    description: "A fully functional Apple website clone with smooth navigation, product showcases, responsive design, and pixel-perfect UI recreating the Apple experience.",
    image: "https://images.unsplash.com/photo-1491933382434-500287f9b54b?w=800&q=80",
    tags: ["React", "CSS", "JavaScript", "Responsive"],
    github: "https://github.com/Furkan-Jemil/apple-website-clone",
    live: "https://apple-clone-demo.vercel.app",
    featured: true,
  },
];

export const skills: Skill[] = [
  // Frontend
  { name: "HTML5", icon: FaHtml5, level: 95, category: "frontend" },
  { name: "CSS3", icon: FaCss3Alt, level: 90, category: "frontend" },
  { name: "JavaScript", icon: SiJavascript, level: 92, category: "frontend" },
  { name: "TypeScript", icon: SiTypescript, level: 85, category: "frontend" },
  { name: "React", icon: FaReact, level: 90, category: "frontend" },
  { name: "Tailwind CSS", icon: SiTailwindcss, level: 88, category: "frontend" },
  
  // Backend
  { name: "Node.js", icon: FaNodeJs, level: 85, category: "backend" },
  { name: "Express.js", icon: SiExpress, level: 82, category: "backend" },
  { name: "MongoDB", icon: SiMongodb, level: 80, category: "backend" },
  
  // Tools
  { name: "Git", icon: FaGitAlt, level: 88, category: "tools" },
  { name: "GitHub", icon: FaGithub, level: 90, category: "tools" },
  { name: "VS Code", icon: VscCode, level: 92, category: "tools" },
  { name: "Vite", icon: SiVite, level: 85, category: "tools" },
  { name: "Figma", icon: SiFigma, level: 75, category: "tools" },
];

export const aboutContent = {
  intro: "I'm a passionate Full Stack Developer with a love for creating elegant, efficient, and user-friendly web applications. Currently pursuing my studies while actively contributing to the tech community.",
  story: "My journey in programming started with curiosity about how websites work, which quickly evolved into a deep passion for building digital solutions. As an active student leader at DDUMSJ, I've developed not just technical skills but also leadership, teamwork, and project management abilities.",
  currentFocus: [
    "Deepening my expertise in React ecosystem and modern frontend architectures",
    "Exploring cloud technologies and DevOps practices",
    "Contributing to open-source projects",
    "Mentoring fellow students in web development",
  ],
  values: [
    { title: "Clean Code", description: "Writing maintainable, readable, and efficient code" },
    { title: "Continuous Learning", description: "Always staying updated with the latest technologies" },
    { title: "User-Centric", description: "Building solutions that truly solve user problems" },
    { title: "Collaboration", description: "Believing in the power of teamwork and knowledge sharing" },
  ],
};

export const socialLinks: SocialLink[] = [
  { name: "GitHub", url: "https://github.com/Furkan-Jemil", icon: FaGithub },
];

export const navLinks = [
  { name: "Home", href: "#home" },
  { name: "Projects", href: "#projects" },
  { name: "Skills", href: "#skills" },
  { name: "About", href: "#about" },
  { name: "Contact", href: "#contact" },
];
