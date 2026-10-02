import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { FEATURED_PROJECTS } from '../components/landing/ProductsShowcase/showcaseData';
import {
  Eye,
  ArrowUpRight,
  Github,
  ArrowLeft,
  Smartphone,
  ExternalLink,
  X,
  Layers,
  Globe,
  Sparkles,
  Activity,
  CheckCircle2
} from 'lucide-react';

// Single Consistent Visual Component for every Card in ProjectsPage
const ProjectCardVisual = ({ project }) => {
  const [imgError, setImgError] = useState(false);
  const isMobile = project.category === 'Mobile';

  return (
    <div className="relative h-64 sm:h-72 lg:h-80 bg-gradient-to-b from-neutral-950 via-neutral-900/70 to-neutral-950 p-5 sm:p-6 flex items-center justify-center overflow-hidden border-b border-neutral-800/80">
      {/* Ambient Radial Glow */}
      <div
        className="absolute inset-0 opacity-25 group-hover:opacity-40 transition-opacity pointer-events-none"
        style={{
          background: `radial-gradient(circle at 50% 50%, ${project.accentColor || '#10B981'}25 0%, transparent 70%)`
        }}
      />

      {isMobile ? (
        /* Mobile Device Mockup */
        <div className="relative w-[155px] h-[225px] sm:w-[170px] sm:h-[240px] rounded-[32px] bg-neutral-950 border-[3px] border-neutral-700/80 shadow-2xl p-2.5 flex flex-col justify-between group-hover:scale-105 transition-transform duration-300">
          {/* Dynamic Island */}
          <div className="w-12 h-2.5 bg-neutral-900 rounded-full mx-auto flex items-center justify-between px-1.5 border border-neutral-800 z-10">
            <span className="w-1 h-1 rounded-full bg-emerald-400 animate-pulse" />
            <span className="w-1 h-1 rounded-full bg-neutral-700" />
          </div>

          {/* Screen Content */}
          <div className="flex-1 my-1.5 rounded-[22px] overflow-hidden relative bg-neutral-900 border border-neutral-800/70 flex flex-col justify-between p-2.5">
            {project.image && !imgError ? (
              <img
                src={project.image}
                alt={project.title}
                onError={() => setImgError(true)}
                className="w-full h-full object-cover object-top rounded-[18px]"
              />
            ) : (
              <>
                <div className="flex items-center justify-between text-[7px] font-mono text-neutral-400 border-b border-neutral-800/60 pb-1">
                  <span>9:41</span>
                  <span className="text-emerald-400 font-semibold">5G · 100%</span>
                </div>

                <div className="my-auto py-1 text-center space-y-1.5">
                  <div
                    className="w-9 h-9 rounded-xl mx-auto flex items-center justify-center border shadow-lg group-hover:rotate-6 transition-transform"
                    style={{
                      backgroundColor: `${project.accentColor}18`,
                      borderColor: `${project.accentColor}40`,
                      color: project.accentColor
                    }}
                  >
                    <Smartphone className="w-4 h-4" />
                  </div>
                  <div className="text-[10px] font-bold text-white truncate max-w-[120px] mx-auto">
                    {project.title}
                  </div>
                  <div className="text-[7px] font-mono text-neutral-400 uppercase tracking-wider">
                    {project.categoryTag}
                  </div>
                </div>

                <div className="space-y-1">
                  <div className="h-1 w-full bg-neutral-800 rounded-full overflow-hidden">
                    <div
                      className="h-full rounded-full"
                      style={{ width: '80%', backgroundColor: project.accentColor }}
                    />
                  </div>
                  <div className="flex justify-between text-[7px] font-mono text-neutral-400">
                    <span>Runtime</span>
                    <span style={{ color: project.accentColor }}>Active</span>
                  </div>
                </div>
              </>
            )}
          </div>

          {/* Home Indicator */}
          <div className="w-12 h-1 bg-neutral-600 rounded-full mx-auto" />
        </div>
      ) : (
        /* SaaS & Web Browser Window Mockup */
        <div className="relative w-full max-w-[420px] rounded-2xl bg-neutral-950/95 border border-neutral-700/70 shadow-2xl overflow-hidden group-hover:scale-[1.03] transition-transform duration-300 flex flex-col">
          {/* Browser Title Bar */}
          <div className="px-3 py-2 bg-neutral-900/90 border-b border-neutral-800 flex items-center justify-between gap-2 select-none">
            <div className="flex items-center gap-1.5">
              <span className="w-2.5 h-2.5 rounded-full bg-red-500/80" />
              <span className="w-2.5 h-2.5 rounded-full bg-yellow-500/80" />
              <span className="w-2.5 h-2.5 rounded-full bg-green-500/80" />
            </div>
            <div className="flex-1 max-w-[200px] mx-auto px-2 py-0.5 rounded-md bg-neutral-950/80 border border-neutral-800/80 text-[9px] font-mono text-neutral-400 text-center truncate">
              {project.liveUrl
                ? project.liveUrl.replace(/^https?:\/\//, '').replace(/\/$/, '')
                : `${project.title.toLowerCase().replace(/\s+/g, '-')}.skzlab.com`}
            </div>
            <span
              className="text-[8px] font-mono uppercase tracking-wider px-1.5 py-0.5 rounded font-semibold"
              style={{
                backgroundColor: `${project.accentColor}18`,
                color: project.accentColor
              }}
            >
              Live
            </span>
          </div>

          {/* Window Body / Image Preview */}
          <div className="relative h-40 sm:h-48 overflow-hidden bg-neutral-950 flex items-center justify-center">
            {project.image && !imgError ? (
              <img
                src={project.image}
                alt={project.title}
                onError={() => setImgError(true)}
                className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
              />
            ) : (
              <div className="w-full h-full p-4 flex flex-col justify-between bg-gradient-to-br from-neutral-950 via-neutral-900 to-neutral-950">
                <div className="space-y-1">
                  <div className="text-xs font-bold text-white">{project.title}</div>
                  <div className="text-[10px] text-neutral-400 line-clamp-2">{project.tagline}</div>
                </div>
                <div className="grid grid-cols-3 gap-1.5 text-[8px] font-mono">
                  {Object.entries(project.stats || {}).slice(0, 3).map(([k, v]) => (
                    <div key={k} className="p-1.5 rounded-lg bg-neutral-900/90 border border-neutral-800 text-center">
                      <div className="text-neutral-400 uppercase truncate">{k}</div>
                      <div className="text-emerald-400 font-bold truncate mt-0.5">{v}</div>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export const ProjectsPage = () => {
  // Parse initial filter from hash if present (e.g. #/projects?filter=saas)
  const getInitialFilter = () => {
    if (typeof window !== 'undefined') {
      const hash = window.location.hash || '';
      if (hash.includes('filter=')) {
        const param = hash.split('filter=')[1]?.split('&')[0]?.toLowerCase();
        if (param === 'saas') return 'SaaS';
        if (param === 'web') return 'Web';
        if (param === 'mobile') return 'Mobile';
      }
    }
    return 'All';
  };

  const [activeFilter, setActiveFilter] = useState(getInitialFilter);
  const [selectedPreviewProject, setSelectedPreviewProject] = useState(null);

  // Sync filter when hash changes
  useEffect(() => {
    const handleHash = () => {
      setActiveFilter(getInitialFilter());
    };
    window.addEventListener('hashchange', handleHash);
    return () => window.removeEventListener('hashchange', handleHash);
  }, []);

  // Filter Categories: strictly All, SaaS, Web, Mobile as requested
  const filterTabs = ['All', 'SaaS', 'Web', 'Mobile'];

  // Handle clicking filter tab
  const handleFilterClick = (tab) => {
    setActiveFilter(tab);
    if (tab === 'All') {
      window.location.hash = '#/projects';
    } else {
      window.location.hash = `#/projects?filter=${tab.toLowerCase()}`;
    }
  };

  // Filter projects based on selection
  const filteredProjects = FEATURED_PROJECTS.filter((p) => {
    if (activeFilter === 'All') return true;
    return p.category === activeFilter;
  });

  const handleBackToHome = () => {
    window.location.hash = '#products';
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-neutral-950 text-white pt-28 pb-24 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute top-20 left-1/2 -translate-x-1/2 w-[1000px] h-[400px] bg-gradient-to-r from-emerald-500/10 via-cyan-500/10 to-orange-500/5 blur-[160px] pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Back navigation button */}
        <div className="mb-6">
          <button
            onClick={handleBackToHome}
            className="inline-flex items-center gap-2 text-xs font-mono text-neutral-400 hover:text-white transition-colors cursor-pointer group"
          >
            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform text-emerald-400" />
            <span>Back to Foundry & Services</span>
          </button>
        </div>

        {/* Header: PROJECTS tag, Featured Work, and Filter Pills */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6 pb-6 border-b border-neutral-900">
          <div>
            <div className="text-xs font-mono uppercase tracking-[0.25em] text-cyan-400 mb-2 font-semibold">
              PROJECTS
            </div>
            <h1 className="text-4xl sm:text-5xl font-black tracking-tight text-white">
              Featured <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-emerald-400">Work</span>
            </h1>
          </div>

          {/* Filter Pills: All, SaaS, Web, Mobile */}
          <div className="flex items-center flex-wrap gap-2">
            {filterTabs.map((tab) => {
              const isActive = activeFilter === tab;
              return (
                <button
                  key={tab}
                  onClick={() => handleFilterClick(tab)}
                  className={`px-4 py-1.5 rounded-full text-xs font-medium transition-all duration-200 cursor-pointer ${
                    isActive
                      ? 'bg-emerald-400 text-black font-semibold shadow-lg shadow-emerald-500/20'
                      : 'bg-neutral-900/80 text-neutral-400 hover:text-white hover:bg-neutral-800 border border-neutral-800'
                  }`}
                >
                  {tab}
                </button>
              );
            })}
          </div>
        </div>

        {/* 2-Column Responsive Grid matching user's reference screenshot */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.28 }}
                className="group rounded-3xl bg-neutral-900/50 border border-neutral-800/80 hover:border-neutral-700 transition-all duration-300 flex flex-col overflow-hidden shadow-2xl hover:shadow-[0_20px_50px_rgba(0,0,0,0.8)]"
              >
                {/* Visual Showcase Box: Same style for every card */}
                <ProjectCardVisual project={project} />

                {/* Card Content Footer: Same consistent structure for every card */}
                <div className="p-6 sm:p-7 flex flex-col justify-between flex-1 space-y-4">
                  <div>
                    {/* Header Row: Title & Action Icons */}
                    <div className="flex items-start justify-between gap-3">
                      <div>
                        <span
                          className="text-[10px] font-mono uppercase tracking-widest font-semibold block mb-1"
                          style={{ color: project.accentColor || '#10B981' }}
                        >
                          {project.categoryTag || project.category}
                        </span>
                        <h3 className="text-xl sm:text-2xl font-bold text-white group-hover:text-emerald-400 transition-colors">
                          {project.title}
                        </h3>
                      </div>

                      {/* Action Icons: Eye, ExternalLink, GitHub */}
                      <div className="flex items-center gap-2 shrink-0 pt-1">
                        {/* Eye Button: View Detailed Specs Modal */}
                        <button
                          onClick={() => setSelectedPreviewProject(project)}
                          title="View Project Details & Architecture"
                          className="w-8 h-8 rounded-full bg-neutral-800/80 hover:bg-neutral-700 text-neutral-300 hover:text-white flex items-center justify-center transition-colors cursor-pointer border border-neutral-700/60"
                        >
                          <Eye className="w-4 h-4" />
                        </button>

                        {/* External Link Button: Open Live Instance */}
                        {project.liveUrl &&
                        (project.liveUrl.startsWith('http://') || project.liveUrl.startsWith('https://')) ? (
                          <a
                            href={project.liveUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            title="Open Live Project Instance"
                            className="w-8 h-8 rounded-full bg-neutral-800/80 hover:bg-neutral-700 text-neutral-300 hover:text-white flex items-center justify-center transition-colors cursor-pointer border border-neutral-700/60"
                          >
                            <ArrowUpRight className="w-4 h-4" />
                          </a>
                        ) : (
                          <button
                            onClick={() => setSelectedPreviewProject(project)}
                            title="Interactive App Experience"
                            className="w-8 h-8 rounded-full bg-neutral-800/80 hover:bg-neutral-700 text-neutral-300 hover:text-white flex items-center justify-center transition-colors cursor-pointer border border-neutral-700/60"
                          >
                            <ArrowUpRight className="w-4 h-4" />
                          </button>
                        )}

                        {/* GitHub Button */}
                        <a
                          href={project.githubUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          title="GitHub Repository"
                          className="w-8 h-8 rounded-full bg-neutral-800/80 hover:bg-neutral-700 text-neutral-300 hover:text-white flex items-center justify-center transition-colors cursor-pointer border border-neutral-700/60"
                        >
                          <Github className="w-4 h-4" />
                        </a>
                      </div>
                    </div>

                    {/* Detailed Description */}
                    <p className="mt-3 text-xs sm:text-sm text-neutral-400 leading-relaxed line-clamp-3">
                      {project.description}
                    </p>
                  </div>

                  {/* Key Stats Row */}
                  <div className="grid grid-cols-3 gap-2 pt-2 border-t border-neutral-800/60">
                    {Object.entries(project.stats || {}).slice(0, 3).map(([k, v]) => (
                      <div key={k} className="p-2 rounded-xl bg-neutral-950/80 border border-neutral-800/80 text-center">
                        <div className="text-[9px] text-neutral-400 font-mono uppercase truncate">{k}</div>
                        <div className="text-xs sm:text-sm font-bold text-white mt-0.5 truncate" style={{ color: project.accentColor || '#10B981' }}>
                          {v}
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Tech Stack Badges */}
                  <div className="pt-1 flex flex-wrap gap-1.5">
                    {project.techStack.map((tech) => (
                      <span
                        key={tech}
                        className="px-2.5 py-1 rounded-full text-[10px] font-mono bg-neutral-950 text-neutral-300 border border-neutral-800"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </div>

      {/* Interactive Detail Modal when Eye Icon is Clicked */}
      <AnimatePresence>
        {selectedPreviewProject && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className="w-full max-w-2xl bg-neutral-900 border border-neutral-800 rounded-3xl p-6 sm:p-8 space-y-6 shadow-2xl relative max-h-[90vh] overflow-y-auto"
            >
              <button
                onClick={() => setSelectedPreviewProject(null)}
                className="absolute top-5 right-5 p-2 rounded-full bg-neutral-800 hover:bg-neutral-700 text-neutral-400 hover:text-white cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="space-y-1">
                <span
                  className="text-[10px] font-mono uppercase tracking-widest font-semibold"
                  style={{ color: selectedPreviewProject.accentColor || '#10B981' }}
                >
                  {selectedPreviewProject.categoryTag || selectedPreviewProject.category}
                </span>
                <h3 className="text-2xl sm:text-3xl font-bold text-white">{selectedPreviewProject.title}</h3>
                <p className="text-xs sm:text-sm text-neutral-400">{selectedPreviewProject.tagline}</p>
              </div>

              {/* Modal Visual Banner */}
              {selectedPreviewProject.image ? (
                <div className="w-full h-48 sm:h-64 rounded-2xl overflow-hidden border border-neutral-800 bg-neutral-950 relative">
                  <img
                    src={selectedPreviewProject.image}
                    alt={selectedPreviewProject.title}
                    className="w-full h-full object-cover object-top"
                  />
                </div>
              ) : null}

              <p className="text-xs sm:text-sm text-neutral-300 leading-relaxed">
                {selectedPreviewProject.description}
              </p>

              {/* Stats Row */}
              <div className="grid grid-cols-3 gap-3">
                {Object.entries(selectedPreviewProject.stats || {}).map(([k, v]) => (
                  <div key={k} className="p-3 rounded-2xl bg-neutral-950 border border-neutral-800 text-center">
                    <div className="text-[10px] text-neutral-400 uppercase font-mono">{k}</div>
                    <div
                      className="text-base font-bold mt-1"
                      style={{ color: selectedPreviewProject.accentColor || '#10B981' }}
                    >
                      {v}
                    </div>
                  </div>
                ))}
              </div>

              {/* Technologies & Architecture */}
              <div>
                <div className="text-xs font-semibold text-white mb-2">Technologies & Architecture</div>
                <div className="flex flex-wrap gap-1.5">
                  {selectedPreviewProject.techStack.map((tech) => (
                    <span
                      key={tech}
                      className="px-2.5 py-1 rounded-lg text-[10px] font-mono bg-neutral-950 text-neutral-300 border border-neutral-800"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex items-center justify-end gap-3 pt-3 border-t border-neutral-800">
                <a
                  href={selectedPreviewProject.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2 rounded-xl text-xs font-mono text-neutral-300 bg-neutral-800 hover:bg-neutral-700 flex items-center gap-1.5 transition-colors"
                >
                  <Github className="w-4 h-4" />
                  <span>GitHub Repository</span>
                </a>

                {selectedPreviewProject.liveUrl &&
                (selectedPreviewProject.liveUrl.startsWith('http://') ||
                  selectedPreviewProject.liveUrl.startsWith('https://')) ? (
                  <a
                    href={selectedPreviewProject.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-4 py-2 rounded-xl text-xs font-semibold text-white bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-500 hover:to-teal-500 flex items-center gap-1.5 transition-all shadow-md shadow-emerald-950/40"
                  >
                    <span>Open Live Instance</span>
                    <ArrowUpRight className="w-4 h-4" />
                  </a>
                ) : (
                  <button
                    onClick={() => {
                      setSelectedPreviewProject(null);
                      handleBackToHome();
                    }}
                    className="px-4 py-2 rounded-xl text-xs font-semibold text-white bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-500 hover:to-teal-500 flex items-center gap-1.5 transition-all shadow-md shadow-emerald-950/40 cursor-pointer"
                  >
                    <span>Experience in Interactive Phone</span>
                    <ArrowUpRight className="w-4 h-4" />
                  </button>
                )}
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default ProjectsPage;
