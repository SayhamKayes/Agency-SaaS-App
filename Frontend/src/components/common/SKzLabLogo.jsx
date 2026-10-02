import React from 'react';
import logoImg from '../../assets/SKzLAB-logo.png';

export const SKzLabLogo = ({
  className = '',
  size = 'md',
  showSubtitle = false,
  animatedStroke = false
}) => {
  const sizeMap = {
    sm: 'h-6 sm:h-7',
    md: 'h-8 sm:h-9',
    lg: 'h-10 sm:h-12',
    xl: 'h-13 sm:h-15',
    hero: 'h-14 sm:h-20'
  };

  const heightClass = sizeMap[size] || sizeMap.md;

  return (
    <div className={`inline-flex flex-col items-start select-none ${className}`}>
      <img
        src={logoImg}
        alt="SKz LAB"
        className={`w-auto ${heightClass} object-contain transition-all duration-300 ${
          animatedStroke ? 'animate-pulse drop-shadow-[0_0_16px_rgba(240,90,40,0.55)]' : 'drop-shadow-sm'
        }`}
      />

      {showSubtitle && (
        <div className="mt-1 flex items-center gap-1.5 text-[10px] tracking-[0.25em] uppercase font-semibold text-neutral-400 pl-0.5 font-mono">
          <span>SaaS Foundry</span>
          <span className="text-orange-500">·</span>
          <span>Venture Studio</span>
        </div>
      )}
    </div>
  );
};

export default SKzLabLogo;
