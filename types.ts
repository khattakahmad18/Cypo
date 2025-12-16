export interface Project {
  id: string;
  title: string;
  description: string;
  technologies: string[];
  status: 'ONLINE' | 'OFFLINE' | 'DEPRECATED' | 'CLASSIFIED';
  accessLevel: number;
}

export interface Skill {
  name: string;
  level: number; // 0-100
  category: 'FRONTEND' | 'BACKEND' | 'SECURITY' | 'INFRASTRUCTURE';
}

export interface ChatMessage {
  id: string;
  role: 'user' | 'model' | 'system';
  text: string;
  timestamp: Date;
}

export enum ViewMode {
  TERMINAL = 'TERMINAL',
  GUI = 'GUI'
}