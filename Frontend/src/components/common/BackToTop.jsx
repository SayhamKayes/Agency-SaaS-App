import React, { useState, useEffect } from 'react';
import { ArrowUp } from 'lucide-react';

export const BackToTop = () => {
  const [scrollProgress, setScrollProgress] = useState(0);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const totalScroll = document.documentElement.scrollHeight - window.innerHeight;
      
      if (totalScroll > 0) {
        const currentProgress = (scrollY / totalScroll) * 100;
        setScrollProgress(Math.min(Math.max(currentProgress, 0), 100));
      }
      
      // Becomes visible after scrolling past 200px
      setVisible(scrollY > 200);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  const radius = 22;
  const circumference = 2 * Math.PI * radius;
  const strokeDashoffset = circumference - (scrollProgress / 100) * circumference;

  return (
    <button
      onClick={scrollToTop}
      className={`fixed bottom-6 right-6 z-40 w-12 h-12 rounded-full flex items-center justify-center bg-neutral-950/90 hover:bg-neutral-900 border border-neutral-800 shadow-2xl backdrop-blur-xl transition-all duration-300 hover:scale-110 active:scale-95 group cursor-pointer ${
        visible ? 'opacity-100 translate-y-0 pointer-events-auto' : 'opacity-0 translate-y-4 pointer-events-none'
      }`}
      aria-label="Back to top"
      title={`Scroll back to top (${Math.round(scrollProgress)}%)`}
    >
      {/* SVG Progress Ring */}
      <svg
        className="w-full h-full -rotate-90 pointer-events-none p-0.5"
        viewBox="0 0 52 52"
      >
        <defs>
          <linearGradient id="backToTopGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#F97316" />
            <stop offset="50%" stopColor="#F59E0B" />
            <stop offset="100%" stopColor="#06B6D4" />
          </linearGradient>
        </defs>

        {/* Background track circle */}
        <circle
          cx="26"
          cy="26"
          r={radius}
          fill="none"
          stroke="rgba(255, 255, 255, 0.08)"
          strokeWidth="3"
        />

        {/* Dynamic scroll progress fill circle */}
        <circle
          cx="26"
          cy="26"
          r={radius}
          fill="none"
          stroke="url(#backToTopGrad)"
          strokeWidth="3.5"
          strokeDasharray={circumference}
          strokeDashoffset={strokeDashoffset}
          strokeLinecap="round"
          className="transition-[stroke-dashoffset] duration-150 ease-out"
        />
      </svg>

      {/* Center Arrow Icon */}
      <div className="absolute inset-0 flex items-center justify-center">
        <ArrowUp className="w-5 h-5 text-orange-400 group-hover:text-white transition-all duration-200 group-hover:-translate-y-0.5" />
      </div>
    </button>
  );
};

export default BackToTop;
