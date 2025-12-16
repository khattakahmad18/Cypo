import React, { useState, useEffect } from 'react';

interface TypewriterProps {
  text: string;
  speed?: number;
  delay?: number;
  className?: string;
  onComplete?: () => void;
  cursor?: boolean;
}

export const Typewriter: React.FC<TypewriterProps> = ({ 
  text, 
  speed = 50, 
  delay = 0, 
  className = "",
  onComplete,
  cursor = true
}) => {
  const [displayedText, setDisplayedText] = useState('');
  const [started, setStarted] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setStarted(true);
    }, delay);
    return () => clearTimeout(timeout);
  }, [delay]);

  useEffect(() => {
    if (!started) return;

    let currentIndex = 0;
    const interval = setInterval(() => {
      if (currentIndex < text.length) {
        setDisplayedText(prev => prev + text.charAt(currentIndex));
        currentIndex++;
      } else {
        clearInterval(interval);
        if (onComplete) onComplete();
      }
    }, speed);

    return () => clearInterval(interval);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [text, speed, started]);

  return (
    <span className={`${className} font-mono`}>
      {displayedText}
      {cursor && <span className="animate-blink inline-block w-2 h-5 bg-hacker-green ml-1 align-middle"></span>}
    </span>
  );
};