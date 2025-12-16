import React, { useState, useRef, useEffect } from 'react';
import { ChatMessage } from '../types';
import { sendMessageToGhost } from '../services/gemini';
import { Typewriter } from './Typewriter';

export const Terminal: React.FC = () => {
  const [input, setInput] = useState('');
  const [history, setHistory] = useState<ChatMessage[]>([
    { id: 'init', role: 'system', text: 'GHOST_PROTOCOL v2.5 loaded. Connected to Neural Link.', timestamp: new Date() }
  ]);
  const [isProcessing, setIsProcessing] = useState(false);
  const bottomRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    bottomRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [history]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim() || isProcessing) return;

    const userMsg: ChatMessage = {
      id: Date.now().toString(),
      role: 'user',
      text: input,
      timestamp: new Date()
    };

    setHistory(prev => [...prev, userMsg]);
    setInput('');
    setIsProcessing(true);

    // Prepare history for Gemini
    const apiHistory = history
      .filter(m => m.role !== 'system')
      .map(m => ({
        role: m.role,
        parts: [{ text: m.text }]
      }));

    const responseText = await sendMessageToGhost(apiHistory, userMsg.text);

    const modelMsg: ChatMessage = {
      id: (Date.now() + 1).toString(),
      role: 'model',
      text: responseText,
      timestamp: new Date()
    };

    setHistory(prev => [...prev, modelMsg]);
    setIsProcessing(false);
  };

  return (
    <div className="w-full h-full flex flex-col bg-black/90 border border-hacker-green shadow-[0_0_20px_rgba(0,255,65,0.2)] font-mono text-sm md:text-base relative overflow-hidden rounded-md">
      {/* Terminal Header */}
      <div className="flex items-center justify-between px-4 py-2 bg-hacker-dim border-b border-hacker-green/30">
        <div className="flex items-center gap-2">
          <div className="w-3 h-3 rounded-full bg-red-500/50"></div>
          <div className="w-3 h-3 rounded-full bg-yellow-500/50"></div>
          <div className="w-3 h-3 rounded-full bg-green-500/50"></div>
          <span className="text-hacker-green/60 ml-2 text-xs">root@cipher:~/uplink</span>
        </div>
        <div className="text-xs text-hacker-green/40">SECURE CONNECTION</div>
      </div>

      {/* Terminal Body */}
      <div className="flex-1 overflow-y-auto p-4 space-y-4 font-terminal text-lg tracking-wide custom-scrollbar">
        {history.map((msg) => (
          <div key={msg.id} className={`flex flex-col ${msg.role === 'user' ? 'items-end' : 'items-start'}`}>
            <div className={`max-w-[85%] ${msg.role === 'system' ? 'text-yellow-500 italic' : ''}`}>
              <div className="flex items-center gap-2 mb-1 opacity-50 text-xs">
                <span>{msg.role === 'user' ? 'USER' : msg.role === 'model' ? 'GHOST' : 'SYS'}</span>
                <span>[{msg.timestamp.toLocaleTimeString()}]</span>
              </div>
              <div className={`${msg.role === 'user' ? 'text-hacker-cyan' : 'text-hacker-green'}`}>
                 {msg.role === 'model' ? (
                   <Typewriter text={msg.text} speed={10} cursor={false} />
                 ) : (
                   msg.text
                 )}
              </div>
            </div>
          </div>
        ))}
        {isProcessing && (
           <div className="text-hacker-green animate-pulse">
             > Decrypting response...
           </div>
        )}
        <div ref={bottomRef} />
      </div>

      {/* Input Area */}
      <div className="p-3 bg-hacker-dark border-t border-hacker-green/30">
        <form onSubmit={handleSubmit} className="flex items-center gap-2">
          <span className="text-hacker-green animate-pulse">{'>'}</span>
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            className="flex-1 bg-transparent border-none outline-none text-hacker-green placeholder-hacker-green/30 font-terminal text-xl"
            placeholder="Enter command or query system..."
            autoFocus
          />
        </form>
      </div>
    </div>
  );
};