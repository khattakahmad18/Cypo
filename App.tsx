import React, { useState, useEffect } from 'react';
import { INITIAL_BOOT_SEQUENCE, PROJECTS, SKILLS } from './constants';
import { Terminal } from './components/Terminal';
import { ProjectCard } from './components/ProjectCard';
import { SkillBar } from './components/SkillBar';
import { Typewriter } from './components/Typewriter';

function App() {
  const [booted, setBooted] = useState(false);
  const [bootStep, setBootStep] = useState(0);
  const [activeTab, setActiveTab] = useState<'SYSTEM' | 'ARCHIVES' | 'UPLINK'>('SYSTEM');

  // Boot Sequence Logic
  useEffect(() => {
    if (bootStep < INITIAL_BOOT_SEQUENCE.length) {
      const timer = setTimeout(() => {
        setBootStep(prev => prev + 1);
      }, 800);
      return () => clearTimeout(timer);
    } else {
      setTimeout(() => setBooted(true), 1000);
    }
  }, [bootStep]);

  if (!booted) {
    return (
      <div className="min-h-screen bg-black text-hacker-green font-mono flex flex-col justify-center items-center p-8 crt">
        <div className="w-full max-w-md">
          {INITIAL_BOOT_SEQUENCE.slice(0, bootStep).map((msg, i) => (
            <div key={i} className="mb-2">
              <span className="text-gray-500 mr-2">[{new Date().toLocaleTimeString()}]</span>
              {msg}
            </div>
          ))}
          <div className="animate-pulse mt-4">_</div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-black text-gray-300 font-mono relative overflow-hidden crt selection:bg-hacker-green selection:text-black">
      {/* Background Matrix-ish subtle effect */}
      <div className="absolute inset-0 z-0 opacity-10 pointer-events-none bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-hacker-green/20 to-transparent"></div>

      <div className="relative z-10 max-w-7xl mx-auto p-4 md:p-8 flex flex-col h-screen">
        {/* Header */}
        <header className="border-b-2 border-hacker-green mb-8 pb-4 flex flex-col md:flex-row justify-between items-end">
          <div>
            <h1 className="text-4xl md:text-6xl font-bold text-hacker-green glitch-text" style={{textShadow: '2px 2px 0px #003b00'}}>
              CIPHER_FOLIO
            </h1>
            <p className="text-hacker-cyan mt-2 tracking-widest text-sm md:text-base">
              > DEVELOPER // LEVEL_5_ACCESS
            </p>
          </div>
          <div className="flex gap-4 mt-4 md:mt-0">
            {['SYSTEM', 'ARCHIVES', 'UPLINK'].map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab as any)}
                className={`px-4 py-2 border text-sm transition-all duration-200 ${
                  activeTab === tab 
                    ? 'bg-hacker-green text-black border-hacker-green font-bold shadow-[0_0_15px_#00ff41]' 
                    : 'bg-transparent text-hacker-green border-hacker-green/50 hover:bg-hacker-green/10'
                }`}
              >
                {tab}
              </button>
            ))}
          </div>
        </header>

        {/* Main Content */}
        <main className="flex-1 overflow-y-auto custom-scrollbar pb-10">
          
          {/* SYSTEM TAB (About & Skills) */}
          {activeTab === 'SYSTEM' && (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 animate-[fadeIn_0.5s_ease-in]">
              <div className="border border-hacker-green/30 bg-black/40 p-6 relative">
                <h2 className="text-2xl text-hacker-green mb-6 border-b border-hacker-green/20 pb-2">
                  > USER_PROFILE
                </h2>
                <div className="space-y-4 text-sm md:text-base">
                  <div className="flex gap-4">
                     <span className="text-gray-500 w-24">NAME:</span>
                     <span className="text-white">MUHAMMAD_AHMED</span>
                  </div>
                  <div className="flex gap-4">
                     <span className="text-gray-500 w-24">ROLE:</span>
                     <span className="text-white">DEVELOPER</span>
                  </div>
                  <div className="flex gap-4">
                     <span className="text-gray-500 w-24">LOCATION:</span>
                     <span className="text-white">NODE_127.0.0.1</span>
                  </div>
                  <div className="mt-8">
                    <p className="leading-7">
                      <Typewriter 
                        text="Operative specializes in building robust digital fortresses and high-performance web applications. Mission objective is to deliver clean, scalable code while maintaining optimal system integrity." 
                        speed={20}
                        delay={500}
                      />
                    </p>
                  </div>
                </div>
              </div>

              <div className="border border-hacker-green/30 bg-black/40 p-6">
                 <h2 className="text-2xl text-hacker-green mb-6 border-b border-hacker-green/20 pb-2">
                  > LOADED_MODULES
                </h2>
                <div className="space-y-2">
                  {SKILLS.map(skill => (
                    <SkillBar key={skill.name} skill={skill} />
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* ARCHIVES TAB (Projects) */}
          {activeTab === 'ARCHIVES' && (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6 animate-[fadeIn_0.5s_ease-in]">
              {PROJECTS.map(project => (
                <ProjectCard key={project.id} project={project} />
              ))}
            </div>
          )}

          {/* UPLINK TAB (Chat) */}
          {activeTab === 'UPLINK' && (
            <div className="h-[600px] md:h-full animate-[fadeIn_0.5s_ease-in] flex flex-col">
              <div className="mb-4 p-4 border border-yellow-500/30 bg-yellow-900/10 text-yellow-500 text-xs md:text-sm font-mono">
                WARNING: You are now communicating with the GHOST Protocol AI. All interactions are logged.
              </div>
              <div className="flex-1">
                <Terminal />
              </div>
            </div>
          )}
        </main>

        {/* Footer */}
        <footer className="mt-4 pt-4 border-t border-hacker-green/20 text-xs flex justify-between text-gray-600">
           <span>SYS_STATUS: STABLE</span>
           <span>ENCRYPTION: AES-256</span>
           <span className="animate-pulse">ONLINE</span>
        </footer>
      </div>
    </div>
  );
}

export default App;