import React, { useState, useEffect, useRef } from 'react';
import { Monitor, Tablet, Smartphone, ExternalLink, RefreshCw, Sparkles } from 'lucide-react';

/**
 * LiveIframeSimulator
 * 
 * Accurately simulates real device viewports inside an iframe:
 * - Desktop: True 1920px (Full HD) with optional 1440px toggle, scaled seamlessly with CSS transform
 * - Tablet: True 768px (iPad standard) inside a sleek centered tablet frame with camera notch
 * - Mobile: True 390px (iPhone 14/15/16 standard) inside a centered smartphone frame with Dynamic Island
 */
export const LiveIframeSimulator = ({ url, title, viewportMode = 'desktop' }) => {
  const containerRef = useRef(null);
  const [dimensions, setDimensions] = useState({ width: 750, height: 480 });
  const [desktopWidth, setDesktopWidth] = useState(1920); // 1920 default as requested
  const [iframeKey, setIframeKey] = useState(0);

  // Measure container size with ResizeObserver and bounding client rect
  useEffect(() => {
    if (!containerRef.current) return;
    const updateSize = () => {
      if (containerRef.current) {
        const rect = containerRef.current.getBoundingClientRect();
        if (rect.width > 0 && rect.height > 0) {
          setDimensions({ width: rect.width, height: rect.height });
        }
      }
    };

    updateSize();

    const observer = new ResizeObserver((entries) => {
      for (const entry of entries) {
        const { width, height } = entry.contentRect;
        if (width > 0 && height > 0) {
          setDimensions({ width, height });
        }
      }
    });

    observer.observe(containerRef.current);
    window.addEventListener('resize', updateSize);
    return () => {
      observer.disconnect();
      window.removeEventListener('resize', updateSize);
    };
  }, []);

  const handleRefresh = () => {
    setIframeKey((prev) => prev + 1);
  };

  const { width: containerWidth, height: containerHeight } = dimensions;

  // 1. DESKTOP VIEWPORT: 1920px Full HD (or 1440px)
  if (viewportMode === 'desktop') {
    const targetW = desktopWidth; // 1920 default
    const scale = containerWidth > 0 ? containerWidth / targetW : 0.39;
    const targetH = Math.round(containerHeight / scale);

    return (
      <div ref={containerRef} className="w-full h-full relative overflow-hidden bg-neutral-950 flex flex-col">
        {/* Floating Resolution Pill */}
        <div className="absolute bottom-3 right-4 z-20 flex items-center gap-1.5 select-none">
          <div className="px-2.5 py-1 rounded-lg bg-neutral-900/90 border border-neutral-700/80 text-[10px] font-mono text-neutral-300 shadow-xl backdrop-blur-md flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
            <button
              onClick={() => setDesktopWidth(desktopWidth === 1920 ? 1440 : 1920)}
              title="Click to toggle between 1920px (Full HD) and 1440px (Desktop)"
              className="text-white hover:text-emerald-400 font-semibold cursor-pointer transition-colors"
            >
              {desktopWidth} × 1080 (Desktop {desktopWidth === 1920 ? 'Full HD' : 'MacBook'})
            </button>
            <span className="text-neutral-500">·</span>
            <span className="text-emerald-400 font-semibold">{Math.round(scale * 100)}% Scale</span>
          </div>

          <button
            onClick={handleRefresh}
            title="Reload Frame"
            className="p-1.5 rounded-lg bg-neutral-900/90 border border-neutral-700/80 text-neutral-400 hover:text-white transition-colors cursor-pointer"
          >
            <RefreshCw className="w-3 h-3" />
          </button>
        </div>

        {/* Scaled Desktop Iframe Viewport */}
        <div className="w-full h-full relative overflow-hidden">
          <div
            style={{
              width: `${targetW}px`,
              height: `${targetH}px`,
              transform: `scale(${scale})`,
              transformOrigin: 'top left',
              position: 'absolute',
              top: 0,
              left: 0
            }}
          >
            <iframe
              key={iframeKey}
              src={url}
              title={title}
              className="w-full h-full border-0 pointer-events-auto bg-neutral-950"
              sandbox="allow-scripts allow-same-origin allow-forms allow-popups"
            />
          </div>
        </div>
      </div>
    );
  }

  // 2. TABLET VIEWPORT: 768px (iPad Standard)
  if (viewportMode === 'tablet') {
    const targetW = 768;
    const frameW = Math.min(containerWidth - 24, 540);
    const frameH = containerHeight - 16;
    const innerW = frameW - 16;
    const innerH = frameH - 24;
    const scale = innerW / targetW;
    const scaledIframeHeight = Math.round(innerH / scale);

    return (
      <div ref={containerRef} className="w-full h-full relative overflow-hidden bg-neutral-950/70 flex items-center justify-center p-2">
        {/* Tablet Bezel Frame */}
        <div
          style={{ width: `${frameW}px`, height: `${frameH}px` }}
          className="rounded-[30px] border-[4px] border-neutral-700/80 bg-neutral-900 shadow-2xl relative overflow-hidden flex flex-col justify-between p-2 shrink-0"
        >
          {/* Tablet Front Camera */}
          <div className="w-2.5 h-2.5 rounded-full bg-neutral-800 border border-neutral-700 mx-auto z-10 my-0.5" />

          {/* Screen Content */}
          <div className="flex-1 rounded-[20px] overflow-hidden relative bg-neutral-950 border border-neutral-800/80">
            <div
              style={{
                width: `${targetW}px`,
                height: `${scaledIframeHeight}px`,
                transform: `scale(${scale})`,
                transformOrigin: 'top left',
                position: 'absolute',
                top: 0,
                left: 0
              }}
            >
              <iframe
                key={iframeKey}
                src={url}
                title={title}
                className="w-full h-full border-0 pointer-events-auto bg-neutral-950"
                sandbox="allow-scripts allow-same-origin allow-forms allow-popups"
              />
            </div>
          </div>

          {/* Bottom subtle bar */}
          <div className="w-16 h-1 bg-neutral-700 rounded-full mx-auto z-10 my-0.5" />
        </div>

        {/* Floating Resolution Pill */}
        <div className="absolute bottom-3 right-4 z-20 flex items-center gap-1.5 select-none">
          <div className="px-2.5 py-1 rounded-lg bg-neutral-900/90 border border-neutral-700/80 text-[10px] font-mono text-neutral-300 shadow-xl backdrop-blur-md flex items-center gap-1.5">
            <span className="w-1.5 h-1.5 rounded-full bg-cyan-400" />
            <span>768 × 1024 (iPad Tablet Mode)</span>
          </div>
          <button
            onClick={handleRefresh}
            title="Reload Frame"
            className="p-1.5 rounded-lg bg-neutral-900/90 border border-neutral-700/80 text-neutral-400 hover:text-white transition-colors cursor-pointer"
          >
            <RefreshCw className="w-3 h-3" />
          </button>
        </div>
      </div>
    );
  }

  // 3. MOBILE VIEWPORT: 390px (iPhone 14/15/16 Standard)
  const targetW = 390;
  const frameW = Math.min(containerWidth - 20, 275);
  const frameH = containerHeight - 16;
  const innerW = frameW - 16;
  const innerH = frameH - 36;
  const scale = innerW / targetW;
  const scaledIframeHeight = Math.round(innerH / scale);

  return (
    <div ref={containerRef} className="w-full h-full relative overflow-hidden bg-neutral-950/70 flex items-center justify-center p-2">
      {/* Smartphone Bezel Frame */}
      <div
        style={{ width: `${frameW}px`, height: `${frameH}px` }}
        className="rounded-[38px] border-[5px] border-neutral-700/90 bg-neutral-950 shadow-2xl relative overflow-hidden flex flex-col justify-between p-2 shrink-0"
      >
        {/* Dynamic Island Pill */}
        <div className="w-20 h-4 bg-neutral-900 rounded-full mx-auto flex items-center justify-between px-2 border border-neutral-800/80 z-20 mt-0.5">
          <span className="w-1 h-1 rounded-full bg-emerald-400 animate-pulse" />
          <span className="w-1.5 h-1.5 rounded-full bg-neutral-700" />
        </div>

        {/* Screen Content */}
        <div className="flex-1 my-1.5 rounded-[26px] overflow-hidden relative bg-neutral-950 border border-neutral-800/80">
          <div
            style={{
              width: `${targetW}px`,
              height: `${scaledIframeHeight}px`,
              transform: `scale(${scale})`,
              transformOrigin: 'top left',
              position: 'absolute',
              top: 0,
              left: 0
            }}
          >
            <iframe
              key={iframeKey}
              src={url}
              title={title}
              className="w-full h-full border-0 pointer-events-auto bg-neutral-950"
              sandbox="allow-scripts allow-same-origin allow-forms allow-popups"
            />
          </div>
        </div>

        {/* Home Indicator Bar */}
        <div className="w-20 h-1 bg-neutral-600 rounded-full mx-auto z-20 mb-0.5" />
      </div>

      {/* Floating Resolution Pill */}
      <div className="absolute bottom-3 right-4 z-20 flex items-center gap-1.5 select-none">
        <div className="px-2.5 py-1 rounded-lg bg-neutral-900/90 border border-neutral-700/80 text-[10px] font-mono text-neutral-300 shadow-xl backdrop-blur-md flex items-center gap-1.5">
          <span className="w-1.5 h-1.5 rounded-full bg-purple-400" />
          <span>390 × 844 (Mobile Mode)</span>
        </div>
        <button
          onClick={handleRefresh}
          title="Reload Frame"
          className="p-1.5 rounded-lg bg-neutral-900/90 border border-neutral-700/80 text-neutral-400 hover:text-white transition-colors cursor-pointer"
        >
          <RefreshCw className="w-3 h-3" />
        </button>
      </div>
    </div>
  );
};

export default LiveIframeSimulator;
