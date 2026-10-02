import React from 'react';
import { ChevronDown } from 'lucide-react';

export const ScrollToNext = ({
  targetId = 'architecture',
  label = 'Scroll to explore',
  className = ''
}) => {
  const handleScroll = () => {
    if (!targetId) return;
    const cleanId = targetId.startsWith('#') ? targetId.slice(1) : targetId;
    const element = document.getElementById(cleanId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div
      className={`absolute bottom-4 sm:bottom-6 left-1/2 -translate-x-1/2 flex justify-center items-center z-20 pointer-events-auto ${className}`}
    >
      <button
        onClick={handleScroll}
        type="button"
        aria-label={label || 'Scroll to next section'}
        className="group flex flex-col items-center gap-1.5 text-neutral-500 hover:text-orange-400 transition-all duration-300 cursor-pointer focus:outline-none select-none"
      >
        {label && (
          <span className="text-[10px] font-mono tracking-widest uppercase opacity-60 group-hover:opacity-100 transition-opacity">
            {label}
          </span>
        )}
        <div className="w-7 h-7 rounded-full bg-neutral-900/80 border border-neutral-800 group-hover:border-orange-500/60 group-hover:bg-orange-500/10 flex items-center justify-center transition-all duration-300 shadow-lg group-hover:shadow-orange-500/20">
          <ChevronDown className="w-3.5 h-3.5 transition-transform duration-300 group-hover:translate-y-0.5 animate-bounce" />
        </div>
      </button>
    </div>
  );
};

export default ScrollToNext;
