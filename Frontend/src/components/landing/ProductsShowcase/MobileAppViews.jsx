import React from 'react';
import { IPhoneMockup } from './IPhoneMockup';
import { ShowcaseCardImage } from './ShowcaseCardImage';
import {
  ArrowRight,
  ArrowLeft,
  Smartphone,
  ExternalLink
} from 'lucide-react';

export const MobileGridView = ({ apps, onSelectApp, onViewMore }) => {
  return (
    <div className="space-y-4">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-3.5">
        {apps.map((app) => {
          return (
            <div
              key={app.id}
              onClick={() => onSelectApp(app)}
              className="group rounded-2xl bg-neutral-950 border border-neutral-800 hover:border-neutral-700 transition-all duration-300 flex flex-col justify-between hover:-translate-y-1 shadow-xl hover:shadow-2xl cursor-pointer relative overflow-hidden h-[345px]"
            >
              {/* Top Accent Line */}
              <div
                className="absolute top-0 left-0 right-0 h-1 z-20"
                style={{ backgroundColor: app.accentColor || '#00A8C6' }}
              />

              {/* Floating Top Category & Status Badges */}
              <div className="absolute top-3 left-3 right-3 z-20 flex items-center justify-between pointer-events-none">
                <span className="px-2 py-0.5 rounded-full text-[9px] font-mono bg-black/75 backdrop-blur-md text-neutral-300 border border-white/10">
                  {app.category}
                </span>
                <span className="px-2 py-0.5 rounded-full text-[9px] font-mono bg-[#CF500A]/15 backdrop-blur-md text-[#CF500A] border border-[#CF500A]/25 flex items-center gap-1">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#CF500A] animate-pulse" />
                  {app.status}
                </span>
              </div>

              {/* Main Screenshot / Image Area */}
              <div className="flex-1 w-full relative overflow-hidden bg-neutral-950 flex items-center justify-center">
                <ShowcaseCardImage
                  src={app.image}
                  alt={app.name}
                  accentColor={app.accentColor}
                  category={app.category}
                  title={app.name}
                  className="w-full h-full"
                />
              </div>

              {/* Bottom Attached App Name & Action Bar */}
              <div className="p-3.5 bg-neutral-900/95 border-t border-neutral-800/80 flex items-center justify-between gap-3 shrink-0">
                <div className="min-w-0">
                  <h4 className="text-sm font-bold text-white group-hover:text-[#CF500A] transition-colors truncate">
                    {app.name}
                  </h4>
                  <div className="text-[10px] font-mono text-neutral-400 flex items-center gap-2 mt-0.5">
                    <span>Target: Android & iOS</span>
                    <span>·</span>
                    <span className="text-[#CF500A] font-semibold">{app.stats.completed || app.stats.balance || '60 FPS'}</span>
                  </div>
                </div>

                <div className="w-8 h-8 rounded-full bg-neutral-800 border border-neutral-700/60 group-hover:bg-[#CF500A]/20 group-hover:border-[#CF500A]/40 text-neutral-300 group-hover:text-[#CF500A] flex items-center justify-center transition-all group-hover:translate-x-0.5 shrink-0">
                  <ArrowRight className="w-3.5 h-3.5" />
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* View More Mobile Apps Banner */}
      <div className="flex flex-col sm:flex-row items-center justify-between p-3.5 rounded-2xl bg-neutral-950/70 border border-neutral-800/80 gap-3">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 rounded-xl bg-[#CF500A]/10 border border-[#CF500A]/20 text-[#CF500A] flex items-center justify-center">
            <Smartphone className="w-4 h-4" />
          </div>
          <div>
            <div className="text-xs font-semibold text-white">Need a bespoke native mobile application?</div>
            <div className="text-[11px] text-neutral-400">Discover enterprise cross-platform mobile apps in our portfolio.</div>
          </div>
        </div>

        <button
          onClick={onViewMore}
          className="px-4 py-2 rounded-xl text-xs font-semibold text-white bg-[#CF500A] hover:bg-[#b84608] transition-all flex items-center gap-1.5 shadow-lg shadow-[#CF500A]/25 cursor-pointer shrink-0"
        >
          <span>View More Mobile Apps</span>
          <ArrowRight className="w-3.5 h-3.5" />
        </button>
      </div>
    </div>
  );
};

export const MobileDetailPreview = ({
  apps,
  activeApp,
  onSelectApp,
  onBackToGrid
}) => {
  return (
    <div className="space-y-3 font-sans">
      {/* Top Header Row with Back Button and Active App Name */}
      <div className="flex items-center justify-between pb-2.5 border-b border-neutral-800">
        <button
          onClick={onBackToGrid}
          className="inline-flex items-center gap-2 text-xs font-mono text-neutral-400 hover:text-white transition-colors cursor-pointer group"
        >
          <ArrowLeft className="w-3.5 h-3.5 group-hover:-translate-x-1 transition-transform text-[#CF500A]" />
          <span>Back to All Mobile Apps</span>
        </button>

        <div className="flex items-center gap-2 text-xs font-mono text-neutral-400">
          <span className="text-white font-bold">{activeApp.name}</span>
          <span>·</span>
          <span className="text-[#CF500A]">Interactive Phone Runtime</span>
        </div>
      </div>

      {/* Adjusted Height Realistic iPhone Mockup Frame */}
      <div className="flex justify-center items-center py-0.5">
        <IPhoneMockup key={activeApp?.id} activeApp={activeApp} />
      </div>
    </div>
  );
};
