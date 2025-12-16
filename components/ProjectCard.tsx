import React from 'react';
import { Project } from '../types';

interface ProjectCardProps {
  project: Project;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
  return (
    <div className="group relative border border-hacker-green/30 bg-black/50 p-6 hover:bg-hacker-green/5 transition-all duration-300 overflow-hidden">
      {/* Corner decorations */}
      <div className="absolute top-0 left-0 w-2 h-2 border-t-2 border-l-2 border-hacker-green"></div>
      <div className="absolute top-0 right-0 w-2 h-2 border-t-2 border-r-2 border-hacker-green"></div>
      <div className="absolute bottom-0 left-0 w-2 h-2 border-b-2 border-l-2 border-hacker-green"></div>
      <div className="absolute bottom-0 right-0 w-2 h-2 border-b-2 border-r-2 border-hacker-green"></div>

      <div className="flex justify-between items-start mb-4">
        <h3 className="text-xl font-bold text-hacker-green group-hover:text-hacker-cyan transition-colors">
          {project.title}
        </h3>
        <span className={`text-xs px-2 py-1 border ${
          project.status === 'ONLINE' ? 'border-green-500 text-green-500' :
          project.status === 'CLASSIFIED' ? 'border-red-500 text-red-500' :
          'border-gray-500 text-gray-500'
        }`}>
          {project.status}
        </span>
      </div>

      <p className="text-gray-400 text-sm mb-4 font-mono leading-relaxed">
        {project.description}
      </p>

      <div className="mb-4">
        <div className="text-xs text-hacker-green/50 mb-2">TECHNOLOGIES DETECTED:</div>
        <div className="flex flex-wrap gap-2">
          {project.technologies.map((tech) => (
            <span key={tech} className="text-xs bg-hacker-green/10 text-hacker-green px-2 py-1 rounded-none border border-hacker-green/20">
              {tech}
            </span>
          ))}
        </div>
      </div>

      <div className="mt-4 pt-4 border-t border-hacker-green/10 flex justify-between items-center text-xs font-mono text-hacker-green/60">
        <span>ID: {project.id}</span>
        <span>Lvl: {project.accessLevel}</span>
      </div>
      
      {/* Glitch Overlay on Hover */}
      <div className="absolute inset-0 bg-hacker-green/5 translate-x-[-100%] group-hover:translate-x-0 transition-transform duration-500 pointer-events-none mix-blend-overlay"></div>
    </div>
  );
};