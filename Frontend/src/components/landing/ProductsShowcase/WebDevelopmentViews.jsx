import React from 'react';
import { ShowcaseCardImage } from './ShowcaseCardImage';
import {
  ArrowRight,
  ArrowLeft,
  Globe,
  Award,
  Heart,
  Video,
  ExternalLink,
  Monitor,
  Tablet,
  Smartphone
} from 'lucide-react';

export const WebGridView = ({ projects, onSelectProject, onViewMore }) => {
  return (
    <div className="space-y-4">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-3.5">
        {projects.map((project) => {
          return (
            <div
              key={project.id}
              onClick={() => onSelectProject(project)}
              className="group rounded-2xl bg-neutral-950 border border-neutral-800 hover:border-neutral-700 transition-all duration-300 flex flex-col justify-between hover:-translate-y-1 shadow-xl hover:shadow-2xl cursor-pointer relative overflow-hidden h-[345px]"
            >
              {/* Top Accent Line */}
              <div
                className="absolute top-0 left-0 right-0 h-1 z-20"
                style={{ backgroundColor: project.accentColor || '#10B981' }}
              />

              {/* Floating Top Category & Status Badges */}
              <div className="absolute top-3 left-3 right-3 z-20 flex items-center justify-between pointer-events-none">
                <span className="px-2 py-0.5 rounded-full text-[9px] font-mono bg-black/75 backdrop-blur-md text-neutral-300 border border-white/10">
                  {project.category}
                </span>
                <span className="px-2 py-0.5 rounded-full text-[9px] font-mono bg-emerald-500/15 backdrop-blur-md text-emerald-400 border border-emerald-500/25 flex items-center gap-1">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                  {project.status}
                </span>
              </div>

              {/* Main Screenshot / Image Area */}
              <div className="flex-1 w-full relative overflow-hidden bg-neutral-950 flex items-center justify-center">
                <ShowcaseCardImage
                  src={project.image}
                  alt={project.name}
                  accentColor={project.accentColor}
                  category={project.category}
                  title={project.name}
                  className="w-full h-full"
                />
              </div>

              {/* Bottom Attached Project Name & Action Bar */}
              <div className="p-3.5 bg-neutral-900/95 border-t border-neutral-800/80 flex items-center justify-between gap-3 shrink-0">
                <div className="min-w-0">
                  <h4 className="text-sm font-bold text-white group-hover:text-emerald-400 transition-colors truncate">
                    {project.name}
                  </h4>
                  <div className="text-[10px] font-mono text-neutral-400 flex items-center gap-2 mt-0.5">
                    <span>Client: {project.client.split(' ')[0]}</span>
                    <span>·</span>
                    <span className="text-emerald-400 font-semibold">{project.metrics.latency || project.metrics.fps || '99.9%'}</span>
                  </div>
                </div>

                <div className="w-8 h-8 rounded-full bg-neutral-800 border border-neutral-700/60 group-hover:bg-emerald-500/20 group-hover:border-emerald-500/40 text-neutral-300 group-hover:text-emerald-400 flex items-center justify-center transition-all group-hover:translate-x-0.5 shrink-0">
                  <ArrowRight className="w-3.5 h-3.5" />
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* View More Web Projects Banner */}
      <div className="flex flex-col sm:flex-row items-center justify-between p-3.5 rounded-2xl bg-neutral-950/70 border border-neutral-800/80 gap-3">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 rounded-xl bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 flex items-center justify-center">
            <Globe className="w-4 h-4" />
          </div>
          <div>
            <div className="text-xs font-semibold text-white">Looking for bespoke web development?</div>
            <div className="text-[11px] text-neutral-400">Explore full-stack web architectures in our featured projects.</div>
          </div>
        </div>

        <button
          onClick={onViewMore}
          className="px-4 py-2 rounded-xl text-xs font-semibold text-white bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-500 hover:to-teal-500 transition-all flex items-center gap-1.5 shadow-lg shadow-emerald-950/40 cursor-pointer shrink-0"
        >
          <span>View More Web Projects</span>
          <ArrowRight className="w-3.5 h-3.5" />
        </button>
      </div>
    </div>
  );
};

export const WebDetailPreview = ({
  project,
  onBackToGrid,
  viewportMode,
  onViewportChange
}) => {
  return (
    <div className="space-y-4 font-sans">
      {/* Top Header Row with Back Button, Middle Viewport Icons, and Right Live Site Button */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-3 border-b border-neutral-800 gap-2.5">
        {/* Left: Back Button */}
        <button
          onClick={onBackToGrid}
          className="inline-flex items-center gap-2 text-xs font-mono text-neutral-400 hover:text-white transition-colors cursor-pointer group shrink-0"
        >
          <ArrowLeft className="w-3.5 h-3.5 group-hover:-translate-x-1 transition-transform text-emerald-400" />
          <span>Back to All Web Projects</span>
        </button>

        {/* Center: Viewport Toggle Icons (Monitor, Tablet, Smartphone) */}
        <div className="flex items-center gap-1 bg-neutral-950 p-1 rounded-xl border border-neutral-800 shrink-0">
          <button
            onClick={() => onViewportChange('desktop')}
            title="Desktop View (100%)"
            className={`p-1.5 rounded-lg text-xs transition-all cursor-pointer ${
              viewportMode === 'desktop'
                ? 'bg-neutral-800 text-white font-semibold border border-neutral-700 shadow-sm'
                : 'text-neutral-400 hover:text-white'
            }`}
          >
            <Monitor className="w-3.5 h-3.5" />
          </button>
          <button
            onClick={() => onViewportChange('tablet')}
            title="Tablet View (768px)"
            className={`p-1.5 rounded-lg text-xs transition-all cursor-pointer ${
              viewportMode === 'tablet'
                ? 'bg-neutral-800 text-white font-semibold border border-neutral-700 shadow-sm'
                : 'text-neutral-400 hover:text-white'
            }`}
          >
            <Tablet className="w-3.5 h-3.5" />
          </button>
          <button
            onClick={() => onViewportChange('mobile')}
            title="Mobile View (390px)"
            className={`p-1.5 rounded-lg text-xs transition-all cursor-pointer ${
              viewportMode === 'mobile'
                ? 'bg-neutral-800 text-white font-semibold border border-neutral-700 shadow-sm'
                : 'text-neutral-400 hover:text-white'
            }`}
          >
            <Smartphone className="w-3.5 h-3.5" />
          </button>
        </div>

        {/* Right: Site Title & Live External Link */}
        <div className="flex items-center gap-2 shrink-0">
          <span className="text-xs font-mono text-white font-semibold hidden md:inline truncate max-w-[150px]">
            {project.name}
          </span>
          <a
            href={project.liveUrl || project.url}
            target="_blank"
            rel="noopener noreferrer"
            className="px-2.5 py-1 rounded-lg text-[11px] font-mono bg-neutral-800 hover:bg-neutral-700 text-emerald-400 hover:text-emerald-300 flex items-center gap-1 border border-neutral-700/60 transition-colors shadow-sm"
          >
            <span>Live Site</span>
            <ExternalLink className="w-3 h-3" />
          </a>
        </div>
      </div>

      {/* Responsive Viewport Wrapper */}
      <div
        className={`transition-all duration-300 ease-in-out ${
          viewportMode === 'mobile'
            ? 'max-w-[340px] mx-auto border-2 border-neutral-700/80 rounded-3xl p-3 bg-neutral-950 shadow-2xl'
            : viewportMode === 'tablet'
            ? 'max-w-[580px] mx-auto border border-neutral-700/60 rounded-2xl p-4 bg-neutral-950 shadow-xl'
            : 'w-full'
        }`}
      >
        <WebDetailContent project={project} viewportMode={viewportMode} />
      </div>
    </div>
  );
};

export const WebDetailContent = ({ project, viewportMode }) => {
  return (
    <>
      {/* 1. NEXUS WEALTH PREVIEW */}
      {project.id === 'web-nexus' && (
          <div className="space-y-3">
            <div className="p-4 rounded-2xl bg-gradient-to-br from-neutral-900 via-neutral-950 to-emerald-950/20 border border-emerald-500/20 relative overflow-hidden">
              <div className="flex items-center justify-between">
                <span className="text-[10px] font-mono uppercase tracking-widest text-emerald-400">
                  Institutional Capital Portfolio
                </span>
                <span className="text-[11px] font-mono px-2 py-0.5 rounded-full bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                  {project.metrics.latency} LIVE FEED
                </span>
              </div>

              <div className="mt-2.5">
                <div className="text-[10px] text-neutral-400">Total Net Liquidity (USD)</div>
                <div className="text-2xl font-extrabold text-white mt-0.5 tracking-tight flex items-baseline gap-2">
                  <span>{project.previewData.portfolioVal}</span>
                  <span className="text-xs font-semibold text-emerald-400 font-mono">
                    {project.previewData.change24h}
                  </span>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-2 mt-3 pt-2.5 border-t border-neutral-800 text-xs">
                <div>
                  <span className="text-neutral-400 text-[10px]">Cash Reserve</span>
                  <div className="font-mono font-bold text-white mt-0.5">{project.previewData.cashReserve}</div>
                </div>
                <div>
                  <span className="text-neutral-400 text-[10px]">Active Positions</span>
                  <div className="font-mono font-bold text-cyan-400 mt-0.5">{project.previewData.activePositions} Assets</div>
                </div>
              </div>
            </div>

            {/* Live Asset Ticker */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 text-xs font-mono">
              {[
                { name: 'BTC / USD', price: '$112,400', change: '+3.4%' },
                { name: 'ETH / USD', price: '$4,120', change: '+2.1%' },
                { name: 'NVDA Corp', price: '$184.20', change: '+5.6%' },
                { name: 'Treasury 10Y', price: '4.18%', change: '-0.2%' }
              ].map((item, idx) => (
                <div key={idx} className="p-2 rounded-xl bg-neutral-950 border border-neutral-800">
                  <div className="text-[9px] text-neutral-400">{item.name}</div>
                  <div className="font-bold text-white mt-0.5 text-[11px]">{item.price}</div>
                  <div className="text-[9px] text-emerald-400">{item.change}</div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* 2. KROMA CREATIVE STUDIO PREVIEW */}
        {project.id === 'web-kroma' && (
          <div className="space-y-3">
            <div className="relative rounded-2xl bg-neutral-950 border border-purple-500/20 p-5 overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-r from-purple-500/10 via-pink-500/5 to-transparent pointer-events-none" />

              <div className="relative z-10 max-w-lg space-y-2.5">
                <div className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded-full text-[10px] font-mono bg-purple-500/10 text-purple-400 border border-purple-500/20">
                  <Award className="w-3 h-3" />
                  <span>Awwwards Site of the Day Winner</span>
                </div>

                <h3 className="text-xl font-black text-white tracking-tight uppercase leading-tight font-mono">
                  Fluid Digital Landscapes & WebGL Spaces
                </h3>

                <p className="text-xs text-neutral-300 leading-relaxed">
                  Crafting hyper-expressive 3D spatial web architectures that transform passive visitors into brand evangelists.
                </p>

                <div className="grid grid-cols-3 gap-2 pt-1 text-center text-xs font-mono">
                  <div className="p-2 rounded-xl bg-neutral-900 border border-neutral-800">
                    <div className="text-purple-400 font-bold">60 FPS</div>
                    <div className="text-[9px] text-neutral-400">WebGL Shader</div>
                  </div>
                  <div className="p-2 rounded-xl bg-neutral-900 border border-neutral-800">
                    <div className="text-white font-bold">14</div>
                    <div className="text-[9px] text-neutral-400">Global Awards</div>
                  </div>
                  <div className="p-2 rounded-xl bg-neutral-900 border border-neutral-800">
                    <div className="text-emerald-400 font-bold">1.2M</div>
                    <div className="text-[9px] text-neutral-400">Visits/Yr</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* 3. HEALTHSPHERE TELEMEDICINE PREVIEW */}
        {project.id === 'web-health' && (
          <div className="space-y-3">
            <div className="p-4 rounded-2xl bg-neutral-950 border border-cyan-500/20 space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-xs font-mono text-cyan-400 flex items-center gap-1.5">
                  <Heart className="w-3.5 h-3.5 fill-cyan-400 text-cyan-400" />
                  <span>HealthSphere Care Cloud</span>
                </span>
                <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                  HIPAA ENCRYPTED
                </span>
              </div>

              {/* Consultation Card */}
              <div className="p-3.5 rounded-xl bg-neutral-900/90 border border-neutral-800 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2.5">
                <div className="flex items-center gap-2.5">
                  <div className="w-9 h-9 rounded-full bg-cyan-500/20 border border-cyan-400 text-cyan-300 font-bold flex items-center justify-center text-xs">
                    Dr
                  </div>
                  <div>
                    <div className="text-xs font-bold text-white">Dr. Sarah Jenkins, MD</div>
                    <div className="text-[10px] text-neutral-400">Senior Cardiologist · Telehealth</div>
                  </div>
                </div>

                <div className="flex items-center gap-2">
                  <span className="text-[11px] font-mono text-emerald-400 flex items-center gap-1">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                    <span>In Waiting Room</span>
                  </span>
                  <div className="px-2.5 py-1 rounded-lg bg-cyan-600 hover:bg-cyan-500 text-white font-medium text-xs flex items-center gap-1 cursor-pointer">
                    <Video className="w-3 h-3" />
                    <span>Join</span>
                  </div>
                </div>
              </div>

              {/* Vitals */}
              <div className="grid grid-cols-3 gap-2 text-center text-xs font-mono">
                <div className="p-2 rounded-xl bg-neutral-900/60 border border-neutral-800">
                  <div className="text-[9px] text-neutral-400">Heart Rate</div>
                  <div className="text-xs font-bold text-emerald-400 mt-0.5">68 bpm</div>
                </div>
                <div className="p-2 rounded-xl bg-neutral-900/60 border border-neutral-800">
                  <div className="text-[9px] text-neutral-400">SpO2</div>
                  <div className="text-xs font-bold text-cyan-400 mt-0.5">99%</div>
                </div>
                <div className="p-2 rounded-xl bg-neutral-900/60 border border-neutral-800">
                  <div className="text-[9px] text-neutral-400">Blood Pressure</div>
                  <div className="text-xs font-bold text-white mt-0.5">118/78</div>
                </div>
              </div>
            </div>
          </div>
        )}
    </>
  );
};
