import React, { useEffect, useState } from 'react';
import { useApp } from '../../Context/AppContext';
import { SKzLabLogo } from './SKzLabLogo';

export const Preloader = () => {
  const { preloaderActive, finishPreloader } = useApp();
  const [progress, setProgress] = useState(0);
  const [statusIndex, setStatusIndex] = useState(0);
  const [isExiting, setIsExiting] = useState(false);

  const statusMessages = [
    'BOOTING FOUNDRY CORE SYSTEM',
    'SYNTHESIZING SYSTEM BLUEPRINT',
    'ORCHESTRATING DJANGO & REACT SERVICES',
    'CONNECTING GLOBAL CLOUD NODES',
    'INITIALIZING OMNICHANNEL GATEWAY',
    'SKz LAB PLATFORM READY'
  ];

  useEffect(() => {
    // If running in preview mode or inside an iframe, skip preloader immediately
    if (typeof window !== 'undefined' && (window.self !== window.top || window.location.search.includes('preview=true'))) {
      finishPreloader();
      return;
    }

    if (!preloaderActive) {
      setProgress(100);
      return;
    }

    setProgress(0);
    setIsExiting(false);

    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setTimeout(() => {
            setIsExiting(true);
            setTimeout(() => {
              finishPreloader();
            }, 700);
          }, 400);
          return 100;
        }

        // Accelerate smoothly
        const increment = prev < 40 ? 3 : prev < 75 ? 4 : 5;
        const nextVal = Math.min(prev + increment, 100);
        const nextIndex = Math.min(
          Math.floor((nextVal / 100) * statusMessages.length),
          statusMessages.length - 1
        );
        setStatusIndex(nextIndex);
        return nextVal;
      });
    }, 45);

    return () => clearInterval(interval);
  }, [preloaderActive, finishPreloader]);

  if (!preloaderActive && !isExiting) return null;

  return (
    <div
      className={`fixed inset-0 z-50 flex flex-col items-center justify-center bg-neutral-950 transition-opacity duration-700 pointer-events-auto ${
        isExiting ? 'opacity-0 pointer-events-none' : 'opacity-100'
      }`}
    >
      {/* Background blueprint decorative lines */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:32px_32px]" />

      {/* Center glowing element */}
      <div className="relative z-10 flex flex-col items-center space-y-8 max-w-sm w-full px-6">
        {/* Animated Brand Wordmark */}
        <div className="relative transform hover:scale-105 transition-transform duration-500">
          <SKzLabLogo size="hero" showSubtitle={true} animatedStroke={true} />
        </div>

        {/* Technical progress metrics */}
        <div className="w-full space-y-3">
          <div className="flex items-center justify-between text-xs font-mono">
            <span className="text-orange-500 font-bold tracking-wider">
              {statusMessages[statusIndex]}
            </span>
            <span className="text-neutral-400 font-semibold">{progress}%</span>
          </div>

          {/* Precision loading bar */}
          <div className="w-full h-3 bg-neutral-900/90 rounded-full overflow-hidden border border-neutral-800 shadow-inner relative">
            <div
              className="h-full bg-gradient-to-r from-orange-600 via-amber-500 to-cyan-500 rounded-full transition-all duration-100 ease-out shadow-[0_0_16px_rgba(240,90,40,0.6)] relative overflow-hidden"
              style={{ width: `${progress}%` }}
            >
              <div className="absolute inset-0 bg-[linear-gradient(45deg,rgba(255,255,255,0.2)_25%,transparent_25%,transparent_50%,rgba(255,255,255,0.2)_50%,rgba(255,255,255,0.2)_75%,transparent_75%,transparent)] bg-[length:1rem_1rem] animate-pulse" />
            </div>
          </div>

          {/* Micro telemetries */}
          <div className="flex items-center justify-between text-[10px] font-mono text-neutral-400 pt-1">
            <span>SYS.VER 3.8.4</span>
            <span>NODE_LATENCY &lt; 14MS</span>
            <span>MEM: 512MB / OK</span>
          </div>
        </div>

        {/* Fast-forward skip button for user convenience */}
        <button
          onClick={finishPreloader}
          className="text-xs font-mono text-neutral-400 hover:text-neutral-400 transition-colors uppercase tracking-widest pt-2 underline underline-offset-4 cursor-pointer"
        >
          [ Skip Boot Sequence ]
        </button>
      </div>
    </div>
  );
};
