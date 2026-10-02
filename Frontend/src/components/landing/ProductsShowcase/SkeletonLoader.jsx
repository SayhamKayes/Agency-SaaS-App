import React from 'react';

export const SkeletonLoader = ({ type = 'saas' }) => {
  return (
    <div className="w-full min-h-[440px] p-6 space-y-6 animate-pulse select-none relative overflow-hidden bg-neutral-950/60 rounded-xl">
      {/* Top simulated browser progress bar */}
      <div className="absolute top-0 left-0 right-0 h-0.5 bg-neutral-800 overflow-hidden">
        <div className="h-full bg-gradient-to-r from-[#CF500A] via-amber-400 to-[#CF500A] w-full animate-[progress_1s_ease-in-out_infinite]" />
      </div>

      {/* Header bar wireframe */}
      <div className="flex items-center justify-between pb-4 border-b border-neutral-800/80">
        <div className="space-y-2">
          <div className="h-5 w-48 bg-neutral-800/80 rounded-md" />
          <div className="h-3 w-72 bg-neutral-900 rounded-md" />
        </div>
        <div className="flex gap-2">
          <div className="h-7 w-20 bg-neutral-800/70 rounded-lg" />
          <div className="h-7 w-24 bg-neutral-800/50 rounded-lg" />
        </div>
      </div>

      {/* Metrics Row */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
        {[1, 2, 3, 4].map((i) => (
          <div key={i} className="p-3.5 rounded-xl bg-neutral-900/60 border border-neutral-800/80 space-y-2">
            <div className="h-2.5 w-16 bg-neutral-800 rounded" />
            <div className="h-5 w-24 bg-neutral-700/60 rounded" />
          </div>
        ))}
      </div>

      {/* Main Content Area */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-2">
        <div className="md:col-span-2 space-y-3">
          <div className="h-32 rounded-xl bg-neutral-900/50 border border-neutral-800/80 p-4 space-y-3">
            <div className="h-3 w-1/3 bg-neutral-800 rounded" />
            <div className="h-2.5 w-full bg-neutral-900 rounded" />
            <div className="h-2.5 w-4/5 bg-neutral-900 rounded" />
            <div className="h-8 w-28 bg-neutral-800/70 rounded-lg mt-2" />
          </div>
          <div className="h-24 rounded-xl bg-neutral-900/40 border border-neutral-800/60 p-4 space-y-2">
            <div className="h-3 w-2/5 bg-neutral-800 rounded" />
            <div className="h-2.5 w-3/4 bg-neutral-900 rounded" />
          </div>
        </div>

        <div className="space-y-3">
          <div className="h-60 rounded-xl bg-neutral-900/50 border border-neutral-800/80 p-4 space-y-3">
            <div className="h-3 w-1/2 bg-neutral-800 rounded" />
            <div className="h-8 w-full bg-neutral-800/40 rounded-lg" />
            <div className="h-8 w-full bg-neutral-800/40 rounded-lg" />
            <div className="h-8 w-full bg-neutral-800/40 rounded-lg" />
          </div>
        </div>
      </div>

      {/* Pulsing glow indicator */}
      <div className="flex items-center justify-center pt-2">
        <span className="flex items-center gap-2 text-[11px] font-mono text-neutral-400">
          <span className="w-2 h-2 rounded-full bg-[#CF500A] animate-ping inline-block" />
          <span>Synchronizing production node environment...</span>
        </span>
      </div>
    </div>
  );
};
