import { Project, Skill } from './types';

export const INITIAL_BOOT_SEQUENCE = [
  "Initializing Kernel...",
  "Loading Modules...",
  "Mounting File System...",
  "Bypassing Security Protocols...",
  "Access Granted."
];

export const SKILLS: Skill[] = [
  { name: "React / Next.js", level: 95, category: "FRONTEND" },
  { name: "TypeScript", level: 90, category: "FRONTEND" },
  { name: "Node.js", level: 85, category: "BACKEND" },
  { name: "Python / AI", level: 80, category: "BACKEND" },
  { name: "Penetration Testing", level: 70, category: "SECURITY" },
  { name: "Docker / K8s", level: 75, category: "INFRASTRUCTURE" },
];

export const PROJECTS: Project[] = [
  {
    id: "PROJ-001",
    title: "Neural_Net_Visualizer",
    description: "Real-time 3D visualization of neural network weights using WebGL.",
    technologies: ["Three.js", "React", "TensorFlow.js"],
    status: "ONLINE",
    accessLevel: 1
  },
  {
    id: "PROJ-002",
    title: "Crypto_Sentinel",
    description: "Automated trading bot with sentiment analysis based on social media feeds.",
    technologies: ["Python", "Node.js", "Redis"],
    status: "CLASSIFIED",
    accessLevel: 5
  },
  {
    id: "PROJ-003",
    title: "Ghost_Shell",
    description: "Custom Linux kernel module for enhanced packet inspection.",
    technologies: ["C", "Assembly", "Bash"],
    status: "DEPRECATED",
    accessLevel: 3
  },
  {
    id: "PROJ-004",
    title: "Gemini_Uplink",
    description: "Integration of Google Gemini 2.5 Flash for real-time code auditing.",
    technologies: ["TypeScript", "Gemini API", "Vite"],
    status: "ONLINE",
    accessLevel: 2
  }
];