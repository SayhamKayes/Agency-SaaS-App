import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { useApp } from '../../../Context/AppContext';
import {
  SERVICES_LIST,
  SAAS_PRODUCTS,
  WEB_PROJECTS,
  MOBILE_APPS
} from './showcaseData';
import {
  SaaSGridView,
  SaaSLandingView,
  SaaSAdminView,
  SaaSUserView
} from './SaaSProductViews';
import { WebGridView, WebDetailPreview, WebDetailContent } from './WebDevelopmentViews';
import { MobileGridView, MobileDetailPreview } from './MobileAppViews';
import { IPhoneMockup } from './IPhoneMockup';
import { LiveIframeSimulator } from './LiveIframeSimulator';
import { SkeletonLoader } from './SkeletonLoader';
import {
  Layers,
  Globe,
  Smartphone,
  Lock,
  RotateCw,
  Monitor,
  Tablet,
  ArrowLeft,
  Copy,
  Check,
  ChevronRight,
  ExternalLink,
  Sparkles,
  ShieldCheck,
  Zap,
  ArrowRight
} from 'lucide-react';

export const ProductsShowcaseSection = () => {
  const { setIsContactModalOpen, setContactChannel } = useApp();

  // Active Main Category: 'saas' | 'web' | 'mobile'
  const [activeCategory, setActiveCategory] = useState('saas');

  // SaaS state: 'grid' | 'preview'
  const [saasMode, setSaasMode] = useState('grid');
  const [selectedSaasProduct, setSelectedSaasProduct] = useState(SAAS_PRODUCTS[0]);
  const [saasSubView, setSaasSubView] = useState('landing'); // 'landing' | 'admin' | 'user'

  // Web dev state: 'grid' | 'preview'
  const [webMode, setWebMode] = useState('grid');
  const [selectedWebProject, setSelectedWebProject] = useState(WEB_PROJECTS[0]);

  // Mobile app state: 'grid' | 'preview'
  const [mobileMode, setMobileMode] = useState('grid');
  const [selectedMobileApp, setSelectedMobileApp] = useState(MOBILE_APPS[0]);

  // Responsive Viewport Toggle: 'desktop' | 'tablet' | 'mobile'
  const [viewportMode, setViewportMode] = useState('desktop');

  // Preview state flags
  const isSaasPreview = activeCategory === 'saas' && saasMode === 'preview';
  const isWebPreview = activeCategory === 'web' && webMode === 'preview';
  const isMobilePreview = activeCategory === 'mobile' && mobileMode === 'preview';
  const isPreview = isSaasPreview || isWebPreview || isMobilePreview;

  // Loading state & Micro-interaction
  const [isLoading, setIsLoading] = useState(false);
  const [copiedUrl, setCopiedUrl] = useState(false);

  // Dynamic Fake URL computation
  const computeActiveUrl = () => {
    if (activeCategory === 'saas') {
      if (saasMode === 'grid') {
        return 'https://products.skzlab.com/catalog';
      }
      if (selectedSaasProduct.liveUrl) {
        return selectedSaasProduct.liveUrl;
      }
      if (saasSubView === 'landing') {
        return selectedSaasProduct.urls.landing;
      }
      if (saasSubView === 'admin') {
        return selectedSaasProduct.urls.admin;
      }
      return selectedSaasProduct.urls.user;
    }

    if (activeCategory === 'web') {
      if (webMode === 'grid') {
        return 'https://web.skzlab.com/featured';
      }
      return selectedWebProject.liveUrl || selectedWebProject.url;
    }

    if (activeCategory === 'mobile') {
      if (mobileMode === 'grid') {
        return 'skz://mobile.apps/storefront';
      }
      return selectedMobileApp.liveUrl || selectedMobileApp.url;
    }

    return 'https://skzlab.com';
  };

  const activeUrl = computeActiveUrl();

  // Trigger smooth skeleton loading micro-interaction
  const triggerLoadingEffect = (duration = 650) => {
    setIsLoading(true);
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, duration);
    return () => clearTimeout(timer);
  };

  // Switch category with smooth loading
  const handleCategoryChange = (catId) => {
    if (activeCategory === catId) return;
    setActiveCategory(catId);
    triggerLoadingEffect(600);
  };

  // SaaS: Click a product in grid -> slide to preview mode
  const handleSelectSaasProduct = (product) => {
    setSelectedSaasProduct(product);
    setSaasSubView('landing');
    setSaasMode('preview');
    triggerLoadingEffect(650);
  };

  // SaaS: Return back to grid
  const handleBackToSaasGrid = () => {
    setSaasMode('grid');
    triggerLoadingEffect(500);
  };

  // SaaS: Change subview (landing | admin | user)
  const handleSaasSubViewChange = (sub) => {
    if (saasSubView === sub) return;
    setSaasSubView(sub);
    triggerLoadingEffect(600);
  };

  // Web: Click a project in grid -> open live preview
  const handleSelectWebProject = (proj) => {
    setSelectedWebProject(proj);
    setWebMode('preview');
    triggerLoadingEffect(650);
  };

  // Web: Return back to grid
  const handleBackToWebGrid = () => {
    setWebMode('grid');
    triggerLoadingEffect(500);
  };

  // Mobile: Click an app in grid -> open mobile phone mockup
  const handleSelectMobileApp = (app) => {
    setSelectedMobileApp(app);
    setMobileMode('preview');
    triggerLoadingEffect(650);
  };

  // Mobile: Return back to grid
  const handleBackToMobileGrid = () => {
    setMobileMode('grid');
    triggerLoadingEffect(500);
  };

  // Reload button in Fake URL bar
  const handleManualReload = () => {
    triggerLoadingEffect(750);
  };

  // Copy current fake URL
  const handleCopyUrl = () => {
    navigator.clipboard.writeText(activeUrl);
    setCopiedUrl(true);
    setTimeout(() => setCopiedUrl(false), 2000);
  };

  // Navigate to full Projects / Featured Work page with specific filter
  const handleNavigateToProjects = (filterCategory) => {
    window.location.hash = `#/projects?filter=${filterCategory}`;
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleOpenContactModal = () => {
    setContactChannel('whatsapp');
    setIsContactModalOpen(true);
  };

  return (
    <section id="products" className="py-24 relative overflow-hidden bg-neutral-950 border-b border-neutral-800/80">
      {/* Background ambient lighting */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[450px] bg-gradient-to-r from-emerald-500/5 via-cyan-500/5 to-orange-500/5 blur-[150px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="mb-12">
          <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-[0.2em] text-emerald-400 mb-2">
            <span>03</span>
            <span>·</span>
            <span>ENTERPRISE SERVICE SUITE</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight [text-wrap:balance]">
            Select Services & Experience Live Production Architectures.
          </h2>
          <p className="mt-3 text-neutral-400 text-base tracking-tight">
            Inspect our flagship SaaS engines, web platforms, and mobile apps inside the interactive production browser.
          </p>
        </div>

        {/* 2-Column Master Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* =========================================================================
              1. Service Navigation
              ========================================================================= */}
          <div className="lg:col-span-4 space-y-4">
            {/* Header: "Select Services" as requested */}
            <div className="flex items-center justify-between text-xs font-mono uppercase tracking-wider text-neutral-400 px-1">
              <span>Select Services</span>
              <span className="text-[10px] text-emerald-400 font-semibold">3 SPECIALIZED LABS</span>
            </div>

            {/* 3 Clean Categories */}
            <div className="space-y-3">
              {SERVICES_LIST.map((service) => {
                const isActive = activeCategory === service.id;
                const IconComponent =
                  service.id === 'saas'
                    ? Layers
                    : service.id === 'web'
                      ? Globe
                      : Smartphone;

                return (
                  <div
                    key={service.id}
                    onClick={() => handleCategoryChange(service.id)}
                    className={`cursor-pointer rounded-2xl p-5 transition-all duration-300 text-left border relative overflow-hidden group ${isActive
                      ? 'bg-neutral-900 border-neutral-700 shadow-xl shadow-black/40'
                      : 'bg-neutral-950/70 hover:bg-neutral-900/60 border-neutral-800/80 hover:border-neutral-700'
                      }`}
                    style={{
                      // Highlight active category with specific green border as requested
                      borderLeftWidth: '5px',
                      borderLeftColor: isActive ? '#10B981' : 'transparent'
                    }}
                  >
                    {/* Active category subtle glow background */}
                    {isActive && (
                      <div className="absolute inset-0 bg-gradient-to-r from-emerald-500/10 via-transparent to-transparent pointer-events-none" />
                    )}

                    <div className="flex items-center justify-between relative z-10">
                      <div className="flex items-center gap-2.5">
                        <div
                          className={`w-9 h-9 rounded-xl flex items-center justify-center transition-colors ${isActive
                            ? 'bg-emerald-500/20 text-emerald-400 border border-emerald-500/30'
                            : 'bg-neutral-900 text-neutral-400 border border-neutral-800 group-hover:text-white'
                            }`}
                        >
                          <IconComponent className="w-4 h-4" />
                        </div>
                        <div>
                          <h4 className="text-base font-bold text-white group-hover:text-emerald-400 transition-colors">
                            {service.name}
                          </h4>
                          <span className="text-[10px] font-mono text-neutral-400">
                            {service.badge}
                          </span>
                        </div>
                      </div>

                      {/* Active indicator dot */}
                      {isActive ? (
                        <span className="flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-[10px] font-mono bg-emerald-500/15 text-emerald-400 border border-emerald-500/30">
                          <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                          <span>ACTIVE</span>
                        </span>
                      ) : (
                        <ChevronRight className="w-4 h-4 text-neutral-600 group-hover:text-neutral-300 transition-transform group-hover:translate-x-0.5" />
                      )}
                    </div>

                    <p className="text-xs text-neutral-400 mt-3 line-clamp-2 leading-relaxed relative z-10">
                      {service.tagline}
                    </p>

                    {/* Footer micro info */}
                    <div className="mt-4 pt-3 border-t border-neutral-800/80 flex items-center justify-between text-[11px] font-mono text-neutral-400 relative z-10">
                      <span className="text-neutral-300">{service.description.split(',')[0]}</span>
                      <span className="text-emerald-400 font-semibold">Ready to Preview</span>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Quick Contact Prompt */}
            <div className="p-4 rounded-2xl bg-gradient-to-br from-neutral-900/60 to-neutral-950 border border-neutral-800 flex items-center justify-between text-xs">
              <div>
                <div className="font-semibold text-white">Need a tailor-made build?</div>
                <div className="text-[11px] text-neutral-400">Schedule directly with lead architects.</div>
              </div>
              <button
                onClick={handleOpenContactModal}
                className="px-3 py-1.5 rounded-lg bg-neutral-800 hover:bg-neutral-700 text-white font-medium text-xs transition-colors flex items-center gap-1 shrink-0 cursor-pointer"
              >
                <span>Inquire</span>
                <ArrowRight className="w-3 h-3" />
              </button>
            </div>
          </div>

          {/* =========================================================================
              2. Right Panel (Fixed Window Height matching Screenshot 1)
              ========================================================================= */}
          <div className="lg:col-span-8 lg:sticky lg:top-24">
            {/* Fixed Outer Height Window Container */}
            <div className="h-[620px] min-h-[620px] max-h-[620px] flex flex-col rounded-2xl bg-neutral-900 border border-neutral-800 shadow-2xl overflow-hidden backdrop-blur-xl transition-all">
              {/* -------------------------------------------------------------
                  MAC OS window panel header
                  ------------------------------------------------------------- */}
              <div className="h-11 shrink-0 flex items-center justify-between px-5 bg-neutral-950 border-b border-neutral-800">
                <div className="flex items-center gap-2">
                  <span className="w-3 h-3 rounded-full bg-red-500/80 shadow-sm inline-block hover:opacity-80 transition-opacity" />
                  <span className="w-3 h-3 rounded-full bg-yellow-500/80 shadow-sm inline-block hover:opacity-80 transition-opacity" />
                  <span className="w-3 h-3 rounded-full bg-green-500/80 shadow-sm inline-block hover:opacity-80 transition-opacity" />
                  <span className="text-xs font-mono text-neutral-400 ml-2 hidden sm:inline">
                    SKz Production Environment
                  </span>
                </div>

                <div className="flex items-center gap-2">
                  <span className="text-[10px] font-mono px-2.5 py-0.5 rounded bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 flex items-center gap-1">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                    <span>SYSTEM HEALTH: 100%</span>
                  </span>
                </div>
              </div>

              {/* -------------------------------------------------------------
                  Slick Navigation bar
                  - Full-width Fake URL/Address Bar (with lock, reload, copy)
                  ------------------------------------------------------------- */}
              <div className="h-12 shrink-0 flex items-center px-4 bg-neutral-950/80 border-b border-neutral-800">
                {/* Full-width Fake Address Bar */}
                <div className="w-full flex items-center gap-2 bg-neutral-900/90 rounded-xl px-3 py-1.5 border border-neutral-800 text-xs font-mono shadow-inner overflow-hidden">
                  <div className="flex items-center gap-1.5 text-neutral-400 shrink-0">
                    <Lock className="w-3.5 h-3.5 text-emerald-400" />
                    <button
                      onClick={handleManualReload}
                      title="Reload simulated instance"
                      className="p-1 rounded hover:bg-neutral-800 text-neutral-400 hover:text-white transition-colors cursor-pointer"
                    >
                      <RotateCw className={`w-3 h-3 ${isLoading ? 'animate-spin text-emerald-400' : ''}`} />
                    </button>
                  </div>

                  {/* Active URL display */}
                  <div className="flex-1 truncate text-neutral-300 select-all font-mono text-[11px]">
                    {activeUrl}
                  </div>

                  {/* Copy URL trigger */}
                  <button
                    onClick={handleCopyUrl}
                    title="Copy URL"
                    className="p-1 rounded hover:bg-neutral-800 text-neutral-400 hover:text-white transition-colors shrink-0 cursor-pointer"
                  >
                    {copiedUrl ? (
                      <Check className="w-3.5 h-3.5 text-emerald-400" />
                    ) : (
                      <Copy className="w-3.5 h-3.5" />
                    )}
                  </button>
                </div>
              </div>

              {/* ==============================================================
                  PERMANENTLY PINNED / FIXED SUB-HEADER IN PREVIEW MODE (Screenshot 2)
                  shrink-0 ensures it NEVER scrolls away when preview content scrolls!
                  ============================================================== */}
              {isPreview && (
                <div className="shrink-0 px-4 py-2.5 bg-neutral-950/95 border-b border-neutral-800 z-20 backdrop-blur-md">
                  {/* A. SaaS Preview Sub-Header */}
                  {isSaasPreview && (
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2.5">
                      {/* Left: Back Button */}
                      <button
                        onClick={handleBackToSaasGrid}
                        className="inline-flex items-center gap-2 text-xs font-mono text-neutral-400 hover:text-white transition-colors cursor-pointer group shrink-0"
                      >
                        <ArrowLeft className="w-3.5 h-3.5 group-hover:-translate-x-1 transition-transform text-emerald-400" />
                        <span>Back to All SaaS Products</span>
                      </button>

                      {/* Middle: Desktop, Tablet, Mobile Viewport Icons (No text, as indicated in Screenshot 2) */}
                      <div className="flex items-center gap-1 bg-neutral-900/90 p-1 rounded-xl border border-neutral-800 shrink-0">
                        <button
                          onClick={() => setViewportMode('desktop')}
                          title="Desktop View"
                          className={`p-1.5 rounded-lg text-xs transition-all cursor-pointer ${
                            viewportMode === 'desktop'
                              ? 'bg-neutral-800 text-white font-semibold border border-neutral-700 shadow-sm'
                              : 'text-neutral-400 hover:text-white'
                          }`}
                        >
                          <Monitor className="w-3.5 h-3.5" />
                        </button>
                        <button
                          onClick={() => setViewportMode('tablet')}
                          title="Tablet View"
                          className={`p-1.5 rounded-lg text-xs transition-all cursor-pointer ${
                            viewportMode === 'tablet'
                              ? 'bg-neutral-800 text-white font-semibold border border-neutral-700 shadow-sm'
                              : 'text-neutral-400 hover:text-white'
                          }`}
                        >
                          <Tablet className="w-3.5 h-3.5" />
                        </button>
                        <button
                          onClick={() => setViewportMode('mobile')}
                          title="Mobile View"
                          className={`p-1.5 rounded-lg text-xs transition-all cursor-pointer ${
                            viewportMode === 'mobile'
                              ? 'bg-neutral-800 text-white font-semibold border border-neutral-700 shadow-sm'
                              : 'text-neutral-400 hover:text-white'
                          }`}
                        >
                          <Smartphone className="w-3.5 h-3.5" />
                        </button>
                      </div>

                      {/* Right: Sub-Menu or Live Site Link */}
                      <div className="flex items-center gap-1.5 p-1 rounded-xl bg-neutral-900/90 border border-neutral-800 text-xs font-mono shrink-0">
                        {selectedSaasProduct.liveUrl ? (
                          <a
                            href={selectedSaasProduct.liveUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="px-3 py-1.5 rounded-lg text-xs font-mono bg-emerald-500/15 hover:bg-emerald-500/25 text-emerald-400 border border-emerald-500/30 flex items-center gap-1.5 transition-colors cursor-pointer"
                          >
                            <span>Live Site</span>
                            <ExternalLink className="w-3 h-3" />
                          </a>
                        ) : (
                          <>
                            <button
                              onClick={() => handleSaasSubViewChange('landing')}
                              className={`px-3 py-1.5 rounded-lg transition-colors cursor-pointer ${
                                saasSubView === 'landing'
                                  ? 'bg-neutral-800 text-white font-semibold shadow-sm'
                                  : 'text-neutral-400 hover:text-white'
                              }`}
                            >
                              Landing Page
                            </button>
                            <button
                              onClick={() => handleSaasSubViewChange('admin')}
                              className={`px-3 py-1.5 rounded-lg transition-colors cursor-pointer ${
                                saasSubView === 'admin'
                                  ? 'bg-neutral-800 text-white font-semibold shadow-sm'
                                  : 'text-neutral-400 hover:text-white'
                              }`}
                            >
                              Admin Dashboard
                            </button>
                            <button
                              onClick={() => handleSaasSubViewChange('user')}
                              className={`px-3 py-1.5 rounded-lg transition-colors cursor-pointer ${
                                saasSubView === 'user'
                                  ? 'bg-neutral-800 text-white font-semibold shadow-sm'
                                  : 'text-neutral-400 hover:text-white'
                              }`}
                            >
                              User Dashboard
                            </button>
                          </>
                        )}
                      </div>
                    </div>
                  )}

                  {/* B. Web Development Preview Sub-Header */}
                  {isWebPreview && (
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2.5">
                      {/* Left: Back Button */}
                      <button
                        onClick={handleBackToWebGrid}
                        className="inline-flex items-center gap-2 text-xs font-mono text-neutral-400 hover:text-white transition-colors cursor-pointer group shrink-0"
                      >
                        <ArrowLeft className="w-3.5 h-3.5 group-hover:-translate-x-1 transition-transform text-emerald-400" />
                        <span>Back to All Web Projects</span>
                      </button>

                      {/* Middle: Viewport Icons */}
                      <div className="flex items-center gap-1 bg-neutral-900/90 p-1 rounded-xl border border-neutral-800 shrink-0">
                        <button
                          onClick={() => setViewportMode('desktop')}
                          title="Desktop View"
                          className={`p-1.5 rounded-lg text-xs transition-all cursor-pointer ${
                            viewportMode === 'desktop'
                              ? 'bg-neutral-800 text-white font-semibold border border-neutral-700 shadow-sm'
                              : 'text-neutral-400 hover:text-white'
                          }`}
                        >
                          <Monitor className="w-3.5 h-3.5" />
                        </button>
                        <button
                          onClick={() => setViewportMode('tablet')}
                          title="Tablet View"
                          className={`p-1.5 rounded-lg text-xs transition-all cursor-pointer ${
                            viewportMode === 'tablet'
                              ? 'bg-neutral-800 text-white font-semibold border border-neutral-700 shadow-sm'
                              : 'text-neutral-400 hover:text-white'
                          }`}
                        >
                          <Tablet className="w-3.5 h-3.5" />
                        </button>
                        <button
                          onClick={() => setViewportMode('mobile')}
                          title="Mobile View"
                          className={`p-1.5 rounded-lg text-xs transition-all cursor-pointer ${
                            viewportMode === 'mobile'
                              ? 'bg-neutral-800 text-white font-semibold border border-neutral-700 shadow-sm'
                              : 'text-neutral-400 hover:text-white'
                          }`}
                        >
                          <Smartphone className="w-3.5 h-3.5" />
                        </button>
                      </div>

                      {/* Right: Site Title & Live Link */}
                      <div className="flex items-center gap-2 shrink-0">
                        <span className="text-xs font-mono text-white font-semibold hidden md:inline truncate max-w-[150px]">
                          {selectedWebProject.name}
                        </span>
                        {(selectedWebProject.liveUrl || selectedWebProject.url) && (
                          <a
                            href={selectedWebProject.liveUrl || selectedWebProject.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="px-2.5 py-1 rounded-lg text-[11px] font-mono bg-neutral-800 hover:bg-neutral-700 text-emerald-400 hover:text-emerald-300 flex items-center gap-1 border border-neutral-700/60 transition-colors shadow-sm"
                          >
                            <span>Live Site</span>
                            <ExternalLink className="w-3 h-3" />
                          </a>
                        )}
                      </div>
                    </div>
                  )}

                  {/* C. Mobile App Preview Sub-Header */}
                  {isMobilePreview && (
                    <div className="flex items-center justify-between">
                      <button
                        onClick={handleBackToMobileGrid}
                        className="inline-flex items-center gap-2 text-xs font-mono text-neutral-400 hover:text-white transition-colors cursor-pointer group"
                      >
                        <ArrowLeft className="w-3.5 h-3.5 group-hover:-translate-x-1 transition-transform text-emerald-400" />
                        <span>Back to All Mobile Apps</span>
                      </button>

                      <div className="flex items-center gap-2 text-xs font-mono text-neutral-400">
                        <span className="text-white font-bold">{selectedMobileApp.name}</span>
                        <span>·</span>
                        <span className="text-emerald-400">Interactive Phone Runtime</span>
                      </div>
                    </div>
                  )}
                </div>
              )}

              {/* -------------------------------------------------------------
                  Content display (No outer scrollbar in preview mode!)
                  ------------------------------------------------------------- */}
              <div
                className={`flex-1 min-h-0 bg-neutral-900/50 ${
                  isPreview
                    ? 'overflow-hidden p-3 sm:p-4 flex flex-col items-center justify-center'
                    : 'overflow-y-auto custom-scrollbar p-4 sm:p-5'
                }`}
              >
                <AnimatePresence mode="wait">
                  {/* MICRO-INTERACTION: SKELETON LOADER STATE */}
                  {isLoading ? (
                    <motion.div
                      key="skeleton-loading"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      transition={{ duration: 0.18 }}
                      className="w-full h-full"
                    >
                      <SkeletonLoader type={activeCategory} />
                    </motion.div>
                  ) : (
                    <motion.div
                      key={`${activeCategory}-${saasMode}-${saasSubView}-${webMode}-${selectedWebProject.id}-${mobileMode}-${selectedMobileApp.id}-${viewportMode}`}
                      initial={{ opacity: 0, y: 8 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -8 }}
                      transition={{ duration: 0.25 }}
                      className="w-full h-full flex flex-col items-center justify-center"
                    >
                      {/* =======================================================
                          A. SAAS PRODUCTS VIEW (3-Box Grid + Preview Mode)
                          ======================================================= */}
                      {activeCategory === 'saas' && (
                        <div className="w-full h-full flex flex-col items-center justify-center">
                          {saasMode === 'grid' && (
                            <SaaSGridView
                              products={SAAS_PRODUCTS}
                              onSelectProduct={handleSelectSaasProduct}
                              onViewMore={() => handleNavigateToProjects('saas')}
                            />
                          )}

                          {saasMode === 'preview' && (
                            <div className="w-full h-full flex flex-col items-center justify-center overflow-hidden">
                              {selectedSaasProduct.liveUrl ? (
                                <LiveIframeSimulator
                                  key={`${selectedSaasProduct.id}-${viewportMode}`}
                                  url={selectedSaasProduct.liveUrl}
                                  title={selectedSaasProduct.name}
                                  viewportMode={viewportMode}
                                />
                              ) : (
                                <div
                                  className={`transition-all duration-300 h-full w-full flex flex-col items-center justify-start ${
                                    viewportMode === 'mobile'
                                      ? 'max-w-[360px] mx-auto rounded-[32px] border-4 border-neutral-700/90 p-2.5 bg-neutral-950 shadow-2xl overflow-y-auto custom-scrollbar'
                                      : viewportMode === 'tablet'
                                        ? 'max-w-[640px] mx-auto rounded-2xl border-2 border-neutral-700/80 p-3.5 bg-neutral-950 shadow-xl overflow-y-auto custom-scrollbar'
                                        : 'w-full rounded-xl border border-neutral-800/80 p-4 bg-neutral-950/70 overflow-y-auto custom-scrollbar'
                                  }`}
                                >
                                  <div className="w-full">
                                    {saasSubView === 'landing' && (
                                      <SaaSLandingView
                                        product={selectedSaasProduct}
                                        onOpenContact={handleOpenContactModal}
                                      />
                                    )}
                                    {saasSubView === 'admin' && (
                                      <SaaSAdminView product={selectedSaasProduct} />
                                    )}
                                    {saasSubView === 'user' && (
                                      <SaaSUserView product={selectedSaasProduct} />
                                    )}
                                  </div>
                                </div>
                              )}
                            </div>
                          )}
                        </div>
                      )}

                      {/* =======================================================
                          B. WEB DEVELOPMENT VIEW (3-Box Grid + Live Preview Mode)
                          ======================================================= */}
                      {activeCategory === 'web' && (
                        <div className="w-full h-full flex flex-col items-center justify-center">
                          {webMode === 'grid' && (
                            <WebGridView
                              projects={WEB_PROJECTS}
                              onSelectProject={handleSelectWebProject}
                              onViewMore={() => handleNavigateToProjects('web')}
                            />
                          )}

                          {webMode === 'preview' && (
                            <div className="w-full h-full flex flex-col items-center justify-center overflow-hidden">
                              {selectedWebProject.liveUrl ? (
                                <LiveIframeSimulator
                                  key={`${selectedWebProject.id}-${viewportMode}`}
                                  url={selectedWebProject.liveUrl}
                                  title={selectedWebProject.name}
                                  viewportMode={viewportMode}
                                />
                              ) : (
                                <div
                                  className={`transition-all duration-300 h-full w-full flex flex-col items-center justify-start ${
                                    viewportMode === 'mobile'
                                      ? 'max-w-[360px] mx-auto rounded-[32px] border-4 border-neutral-700/90 p-2.5 bg-neutral-950 shadow-2xl overflow-y-auto custom-scrollbar'
                                      : viewportMode === 'tablet'
                                        ? 'max-w-[640px] mx-auto rounded-2xl border-2 border-neutral-700/80 p-3.5 bg-neutral-950 shadow-xl overflow-y-auto custom-scrollbar'
                                        : 'w-full rounded-xl border border-neutral-800/80 p-4 bg-neutral-950/70 overflow-y-auto custom-scrollbar'
                                  }`}
                                >
                                  <div className="w-full">
                                    <WebDetailContent
                                      project={selectedWebProject}
                                      viewportMode={viewportMode}
                                    />
                                  </div>
                                </div>
                              )}
                            </div>
                          )}
                        </div>
                      )}

                      {/* =======================================================
                          C. MOBILE APP DEVELOPMENT VIEW (3-Box Grid + Centered iPhone Mode)
                          ======================================================= */}
                      {activeCategory === 'mobile' && (
                        <div className="w-full h-full flex flex-col items-center justify-center">
                          {mobileMode === 'grid' && (
                            <MobileGridView
                              apps={MOBILE_APPS}
                              onSelectApp={handleSelectMobileApp}
                              onViewMore={() => handleNavigateToProjects('mobile')}
                            />
                          )}

                          {mobileMode === 'preview' && (
                            <div className="w-full h-full flex items-center justify-center overflow-hidden py-1">
                              <IPhoneMockup key={selectedMobileApp.id} activeApp={selectedMobileApp} />
                            </div>
                          )}
                        </div>
                      )}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductsShowcaseSection;
