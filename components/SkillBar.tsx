import React from 'react';
import { Skill } from '../types';

interface SkillBarProps {
  skill: Skill;
}

export const SkillBar: React.FC<SkillBarProps> = ({ skill }) => {
  return (
    <div className="mb-4">
      <div className="flex justify-between text-sm font-mono mb-1 text-hacker-green">
        <span>{skill.name}</span>
        <span>[{skill.level}%]</span>
      </div>
      <div className="h-2 w-full bg-hacker-dark border border-hacker-green/30 relative">
        <div 
          className="absolute top-0 left-0 h-full bg-hacker-green/80 shadow-[0_0_10px_#00ff41]" 
          style={{ width: `${skill.level}%` }}
        ></div>
        {/* Grid lines over bar */}
        <div className="absolute inset-0 w-full h-full bg-[linear-gradient(90deg,transparent_2px,#000_2px)] bg-[size:10px_100%] opacity-30"></div>
      </div>
    </div>
  );
};