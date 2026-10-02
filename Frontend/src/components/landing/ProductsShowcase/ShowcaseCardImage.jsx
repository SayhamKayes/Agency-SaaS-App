import React, { useState } from 'react';
import { Layers, Globe, Smartphone, Sparkles, Activity, Shield, ArrowUpRight } from 'lucide-react';

export const ShowcaseCardImage = ({
  src,
  alt,
  accentColor = '#10B981',
  category = '',
  title = '',
  className = ''
}) => {
  const [imageError, setImageError] = useState(false);

  return (
    <div className={`relative w-full h-full overflow-hidden bg-neutral-950 flex items-center justify-center ${className}`}>
      {/* If real image exists and hasn't errored */}
      {src && !imageError ? (
        <img
          src={src}
          alt={alt || title}
          onError={() => setImageError(true)}
          className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
        />
      ) : (
        /* Fallback / Sleek Software Mockup Canvas until user uploads the image */
        <div className="relative w-full h-full flex flex-col justify-between p-3 select-none overflow-hidden">
          {/* Subtle Ambient Glow */}
          <div
            className="absolute inset-0 opacity-25 group-hover:opacity-40 transition-opacity pointer-events-none"
            style={{
              background: `radial-gradient(circle at 60% 40%, ${accentColor} 0%, transparent 70%)`
            }}
          />

          {/* Mini Window Controls */}
          <div className="relative z-10 flex items-center justify-between border-b border-white/5 pb-2">
            <div className="flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-red-500/80" />
              <span className="w-2 h-2 rounded-full bg-yellow-500/80" />
              <span className="w-2 h-2 rounded-full bg-green-500/80" />
              <span className="text-[9px] font-mono text-neutral-400 ml-1 truncate max-w-[130px]">
                {title.toLowerCase().replace(/\s+/g, '-')}.app
              </span>
            </div>
            <span
              className="text-[8px] font-mono uppercase tracking-wider px-1.5 py-0.5 rounded font-semibold"
              style={{
                backgroundColor: `${accentColor}18`,
                color: accentColor
              }}
            >
              Live
            </span>
          </div>

          {/* Central Mock Interface Visual */}
          <div className="relative z-10 my-auto py-2 flex flex-col items-center justify-center text-center space-y-2">
            <div
              className="w-12 h-12 rounded-2xl flex items-center justify-center border shadow-xl group-hover:scale-110 transition-transform duration-300"
              style={{
                backgroundColor: `${accentColor}15`,
                borderColor: `${accentColor}40`,
                color: accentColor
              }}
            >
              {category.toLowerCase().includes('commerce') || category.toLowerCase().includes('saas') ? (
                <Layers className="w-6 h-6" />
              ) : category.toLowerCase().includes('web') || category.toLowerCase().includes('fintech') || category.toLowerCase().includes('design') ? (
                <Globe className="w-6 h-6" />
              ) : (
                <Smartphone className="w-6 h-6" />
              )}
            </div>

            <div className="space-y-0.5 max-w-[200px]">
              <div className="text-xs font-bold text-white tracking-tight truncate">{title}</div>
              <div className="text-[10px] text-neutral-400 font-mono flex items-center justify-center gap-1">
                <span>Production Build</span>
                <span>·</span>
                <span className="text-emerald-400">99.9%</span>
              </div>
            </div>
          </div>

          {/* Bottom Wireframe Bars */}
          <div className="relative z-10 pt-2 border-t border-white/5 flex items-center justify-between text-[9px] font-mono text-neutral-500">
            <div className="flex gap-1">
              <div className="w-8 h-1.5 rounded-full bg-neutral-800" />
              <div className="w-12 h-1.5 rounded-full bg-neutral-800" />
            </div>
            <span className="text-neutral-400">Click to Preview</span>
          </div>
        </div>
      )}
    </div>
  );
};
