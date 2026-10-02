import React, { useState, useEffect, useRef } from 'react';
import { useApp } from '../../../Context/AppContext';
import { ScrollToNext } from '../../common';
import {
  RotateCcw,
  Sparkles,
  Terminal,
  Server,
  Database,
  ArrowRight,
  RefreshCw,
  Activity,
  CheckCircle2,
  Lock,
  Globe,
  LayoutDashboard,
} from 'lucide-react';

// =========================================================================
// 🌐 SAAS ENGINE WORKBENCH CONFIGURATION
// 👉 01 Frontend · 02 Admin Panel · 03 Backend · 04 Database
// =========================================================================
export const SAAS_CONFIG = {
  id: 'ecommerce',
  name: 'Multi-Tenant Commerce Cloud',
  tagline: 'Enterprise Multi-Tenant SaaS Engine',
  color: '#F97316',
  slides: {
    frontend: {
      id: 'frontend',
      tabName: '01 Frontend',
      title: 'SKz LAB Commerce Storefront',
      stack: 'React 19 · Vite 8 · Tailwind CSS 4',
      badge: 'VITE DEV',
      badgeColor: '#10B981',
      url: 'https://sayham.vercel.app/',
      commands: [
        { text: '$ cd Ecommerce-Engine && npm install', type: 'cmd' },
        { text: 'up to date, audited 184 packages in 1.2s', type: 'output' },
        { text: '$ npm run dev', type: 'cmd' },
        { text: '> skzlab-commerce@1.0.0 dev', type: 'accent' },
        { text: '> vite --port=3000 --host=0.0.0.0', type: 'accent' },
        { text: '✓ Vite v8.3.2 ready in 170ms', type: 'success' },
        { text: '➜ Local:   http://localhost:3000/', type: 'success' },
        { text: '➜ Network: http://localhost:3000/', type: 'muted' },
        { text: '⚡ Spawning Live Commerce Storefront & Checkout...', type: 'system' }
      ]
    },
    admin: {
      id: 'admin',
      tabName: '02 Admin Panel',
      title: 'SKz LAB Admin & Operations Matrix',
      stack: 'Next.js 15 · Lucide · Tailwind CSS',
      badge: 'ADMIN PANEL',
      badgeColor: '#3B82F6',
      url: '',
      imageUrl: '',
      commands: [
        { text: '$ cd Admin-Portal && npm run dev', type: 'cmd' },
        { text: '> skzlab-admin@2.1.0 dev', type: 'accent' },
        { text: '> vite --port=5173 --host=0.0.0.0', type: 'accent' },
        { text: '✓ Admin Matrix ready in 140ms', type: 'success' },
        { text: '➜ Local:   http://localhost:3000/admin', type: 'success' },
        { text: '⚡ Mounting Enterprise Dashboard, RBAC & Telemetry...', type: 'system' }
      ]
    },
    backend: {
      id: 'backend',
      tabName: '03 Backend',
      title: 'Django REST E-Commerce API',
      stack: 'Python 3.12 · Django REST 6.1 · Celery',
      badge: 'DJANGO CORE',
      badgeColor: '#F05A28',
      url: 'http://127.0.0.1:8000/api/',
      commands: [
        { text: '$ cd Backend_Commerce && .\\env\\Scripts\\activate', type: 'cmd' },
        { text: '(env) $ python manage.py migrate', type: 'cmd' },
        { text: 'Operations to perform: Apply all migrations [OK]', type: 'output' },
        { text: '(env) $ python manage.py runserver 8000', type: 'cmd' },
        { text: 'System check identified no issues (0 silenced).', type: 'output' },
        { text: 'Starting WSGI server at http://127.0.0.1:8000/', type: 'success' },
        { text: '⚡ Connecting to REST API Gateway & Order Workers...', type: 'system' }
      ],
      endpoints: [
        { id: 'root', label: '/api/' },
        { id: 'products', label: '/api/products/' },
        { id: 'orders', label: '/api/orders/' },
        { id: 'health', label: '/api/health/' }
      ],
      mockResponses: {
        root: {
          project: 'SKzLAB Multi-Tenant E-Commerce Core API',
          version: '3.8.0',
          status: 'online',
          architecture: 'Django REST + Neon/PostgreSQL Distributed Microservices',
          endpoints: {
            products: '/api/products/',
            orders: '/api/orders/',
            health: '/api/health/'
          }
        },
        products: {
          count: 3,
          results: [
            { id: 1, name: 'SKz LAB Commerce Engine', status: 'Live', tps: 45000 },
            { id: 2, name: 'CourierPulse Logistics AI', status: 'Live', sla: '99.98%' },
            { id: 3, name: 'OmniAssistant Studio', status: 'Pilot', ai: 'Gemini 2.5' }
          ]
        },
        orders: {
          active_queue: 'Celery Redis Broker',
          state_machine: 'Atomic Isolation',
          processed_today: 18420,
          dropped_packets: 0,
          avg_checkout_latency: '120ms'
        },
        health: {
          system: 'HEALTHY',
          database: 'CONNECTED',
          redis_cache: 'HIT_RATE_98.4%',
          asgi_workers: 8,
          uptime: '99.99%'
        }
      }
    },
    database: {
      id: 'database',
      tabName: '04 Database',
      title: 'PostgreSQL & Neon Cloud Architecture',
      stack: 'PostgreSQL 16 · PgBouncer · Neon Edge',
      badge: 'POSTGRES CLUSTER',
      badgeColor: '#00A8C6',
      url: 'postgres://neon.tech/skzlab_commerce_prod',
      commands: [
        { text: '$ psql -h ep-skzlab-neon.tech -U admin -d commerce_prod', type: 'cmd' },
        { text: 'Connecting to Distributed PostgreSQL Cluster...', type: 'output' },
        { text: 'SSL connection (protocol: TLSv1.3, cipher: AES-256-GCM)', type: 'accent' },
        { text: '$ SELECT table_name FROM information_schema.tables;', type: 'cmd' },
        { text: '├── tenants (UUID, slug, routing_tier)\n├── products (id, title, pricing, stock)\n├── orders (id, tenant_id, total, status)\n└── telemetry (node, latency_ms, status)', type: 'output' },
        { text: '✓ 20/20 Connection pools synchronized', type: 'success' },
        { text: '⚡ Rendering Relational Schema Architecture...', type: 'system' }
      ],
      tables: [
        { id: 'products', label: 'TABLE: products' },
        { id: 'tenants', label: 'TABLE: tenants' },
        { id: 'nodes', label: 'TABLE: global_nodes' }
      ],
      tableData: {
        products: {
          columns: ['id (PK)', 'slug', 'mrr', 'status'],
          rows: [
            ['prod_01', 'skzlab-commerce', '$48,200', 'Live'],
            ['prod_02', 'courierpulse-ai', '$36,800', 'Live'],
            ['prod_03', 'omniassistant', '$29,400', 'Pilot']
          ]
        },
        tenants: {
          columns: ['uuid (PK)', 'domain', 'tier', 'schema_isolation'],
          rows: [
            ['e8a1-40f2', 'apex-retail.com', 'Enterprise', 'Dedicated'],
            ['7b39-11c8', 'nordic-fleet.io', 'Growth', 'Dedicated']
          ]
        },
        nodes: {
          columns: ['city', 'region', 'p99_latency', 'status'],
          rows: [
            ['Dhaka HQ', 'South Asia Core', '18ms', 'Primary'],
            ['San Francisco', 'North America West', '42ms', 'Synced'],
            ['London', 'Europe Central', '24ms', 'Synced']
          ]
        }
      }
    }
  }
};

// Backward-compatible exports
export const SAAS_PRODUCTS = { ecommerce: SAAS_CONFIG };
export const SLIDE_CONFIG = SAAS_CONFIG.slides;

export const HeroSection = () => {
  const { setIsContactModalOpen, setContactChannel } = useApp();

  const activeProduct = SAAS_CONFIG;

  // Slider State (frontend | admin | backend | database)
  const slideKeys = ['frontend', 'admin', 'backend', 'database'];
  const [activeSlideIndex, setActiveSlideIndex] = useState(0);
  const activeSlideKey = slideKeys[activeSlideIndex];
  const activeSlide = activeProduct.slides[activeSlideKey];

  // Automated Sequential State: 'terminal' (runs 2-3s) -> 'live' (stays 4-10s) -> next slide
  const [phase, setPhase] = useState('terminal');
  const [terminalLineCount, setTerminalLineCount] = useState(1);
  const [isHovered, setIsHovered] = useState(false);

  // Scaled 1920x1080 preview measurement
  const previewContainerRef = useRef(null);
  const workbenchRef = useRef(null);
  const [containerWidth, setContainerWidth] = useState(0);

  // Measure preview container width for desktop 1920x1080 dynamic scale
  useEffect(() => {
    if (!previewContainerRef.current) return;
    const el = previewContainerRef.current;

    const updateWidth = () => {
      if (el && el.clientWidth > 0) {
        setContainerWidth(el.clientWidth);
      }
    };

    updateWidth();

    const resizeObserver = new ResizeObserver((entries) => {
      for (const entry of entries) {
        if (entry.contentRect.width > 0) {
          setContainerWidth(entry.contentRect.width);
        }
      }
    });

    resizeObserver.observe(el);
    return () => resizeObserver.disconnect();
  }, [phase, activeSlideKey]);

  // 1. Prevent iframe anchor clicks from scrolling the parent window (ancestor scroll lock)
  // 2. Keep workbench paused while user is focused/interacting inside the embedded iframe
  useEffect(() => {
    let lockedParentScrollY = window.scrollY;
    let isInteracting = false;

    const getContainer = () => previewContainerRef.current;

    const handleMouseEnter = () => {
      isInteracting = true;
      lockedParentScrollY = window.scrollY;
      setIsHovered(true);
    };

    const handleMouseLeave = (e) => {
      if (!e.relatedTarget || e.relatedTarget.tagName === 'IFRAME') {
        return;
      }
      isInteracting = false;
    };

    const handleWindowScroll = () => {
      const isIframeActive = document.activeElement && document.activeElement.tagName === 'IFRAME';
      if (isInteracting || isIframeActive) {
        if (Math.abs(window.scrollY - lockedParentScrollY) > 1) {
          window.scrollTo({
            top: lockedParentScrollY,
            left: 0,
            behavior: 'instant'
          });
        }
      } else {
        lockedParentScrollY = window.scrollY;
      }
    };

    const handleWindowWheel = (e) => {
      const container = getContainer();
      if (container && !container.contains(e.target)) {
        isInteracting = false;
        if (document.activeElement?.tagName === 'IFRAME') {
          window.focus();
        }
        lockedParentScrollY = window.scrollY;
      }
    };

    const handleWindowMouseMove = (e) => {
      if (workbenchRef.current && !workbenchRef.current.contains(e.target)) {
        if (document.activeElement?.tagName !== 'IFRAME') {
          setIsHovered(false);
          isInteracting = false;
          lockedParentScrollY = window.scrollY;
        }
      }
    };

    const handleBlur = () => {
      if (document.activeElement && document.activeElement.tagName === 'IFRAME') {
        setIsHovered(true);
        isInteracting = true;
        lockedParentScrollY = window.scrollY;
      }
    };

    const container = getContainer();
    if (container) {
      container.addEventListener('mouseenter', handleMouseEnter);
      container.addEventListener('mouseleave', handleMouseLeave);
    }
    window.addEventListener('scroll', handleWindowScroll, { passive: false });
    window.addEventListener('wheel', handleWindowWheel, { passive: true });
    window.addEventListener('mousemove', handleWindowMouseMove);
    window.addEventListener('blur', handleBlur);

    return () => {
      if (container) {
        container.removeEventListener('mouseenter', handleMouseEnter);
        container.removeEventListener('mouseleave', handleMouseLeave);
      }
      window.removeEventListener('scroll', handleWindowScroll);
      window.removeEventListener('wheel', handleWindowWheel);
      window.removeEventListener('mousemove', handleWindowMouseMove);
      window.removeEventListener('blur', handleBlur);
    };
  }, [phase, activeSlideKey]);

  // Recursion guard: check if already running inside an iframe
  const isInsideIframe = typeof window !== 'undefined' && window.self !== window.top;

  // Scale factor: scale down full 1920x1080 desktop canvas to fit container width
  const previewScale = containerWidth > 0 ? containerWidth / 1920 : 0.28;

  // Frontend preview URL
  const frontendPreviewUrl =
    activeSlide.url && activeSlide.url !== 'http://localhost:3000'
      ? activeSlide.url
      : '/?preview=true';

  // Backend Live Endpoint Tab
  const [backendEndpoint, setBackendEndpoint] = useState('root');

  // Database Tab
  const [databaseQuery, setDatabaseQuery] = useState('products');

  // Dynamic database table data for currently selected query
  const currentTableData =
    activeSlide.tableData?.[databaseQuery] ||
    (activeSlide.tables?.[0] ? activeSlide.tableData?.[activeSlide.tables[0].id] : null);

  // Dynamic backend JSON response
  const currentBackendResponse =
    activeSlide.mockResponses?.[backendEndpoint] ||
    activeSlide.mockResponses?.root ||
    (activeSlide.mockResponses ? Object.values(activeSlide.mockResponses)[0] : null) ||
    { status: 'online', endpoint: backendEndpoint };

  // Automated Sequential State Machine with Hover-to-Pause
  useEffect(() => {
    if (isHovered) return;

    if (phase === 'terminal') {
      const totalLines = activeSlide.commands.length;
      if (terminalLineCount < totalLines) {
        const timer = setTimeout(() => {
          setTerminalLineCount((prev) => prev + 1);
        }, 320);
        return () => clearTimeout(timer);
      } else {
        const timer = setTimeout(() => {
          setPhase('live');
        }, 500);
        return () => clearTimeout(timer);
      }
    } else if (phase === 'live') {
      // 10s for interactive frontend & admin panel, 4s for backend & db
      const duration = (activeSlideKey === 'frontend' || activeSlideKey === 'admin') ? 10000 : 4000;
      const timer = setTimeout(() => {
        setActiveSlideIndex((prev) => (prev + 1) % slideKeys.length);
        setPhase('terminal');
        setTerminalLineCount(1);
      }, duration);
      return () => clearTimeout(timer);
    }
  }, [isHovered, phase, terminalLineCount, activeSlideIndex, activeSlide.commands.length, slideKeys.length, activeSlideKey]);

  // Click on a slide tab directly
  const handleSelectSlide = (idx) => {
    setActiveSlideIndex(idx);
    setPhase('terminal');
    setTerminalLineCount(1);
  };

  // Replay sequence from beginning of current slide
  const handleReplay = () => {
    setPhase('terminal');
    setTerminalLineCount(1);
  };

  return (
    <section className="relative min-h-screen pt-28 pb-16 flex flex-col justify-center overflow-hidden border-b border-neutral-800/80">
      {/* Background Decorative Ambient Gradients */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[450px] bg-gradient-to-tr from-orange-500/10 via-amber-500/5 to-cyan-500/10 blur-[140px] pointer-events-none rounded-full" />
      <div className="absolute inset-0 bg-[radial-gradient(#ffffff08_1px,transparent_1px)] [background-size:24px_24px] pointer-events-none" />

      <div className="max-w-7xl xl:max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        {/* Two-Column 50/50 Layout on Desktop */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 xl:gap-12 items-center">
          {/* LEFT COLUMN: 50% Width - Headline, Copy, Badges, CTAs, Telemetry */}
          <div className="flex flex-col justify-center space-y-6">
            {/* Top Badges & Studio Identification */}
            <div className="flex flex-wrap items-center gap-2.5">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-neutral-900 border border-neutral-800 text-xs font-mono text-neutral-300 shadow-sm">
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                <span className="text-orange-400 font-bold">SKz LAB</span>
                <span className="text-neutral-600">/</span>
                <span>FOUNDRY ENGINE ONLINE</span>
              </div>

              <div className="hidden sm:inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-neutral-900/60 border border-neutral-800/80 text-[11px] font-mono text-neutral-400">
                <Activity className="w-3 h-3 text-cyan-400" />
                <span>5 Active Ventures · 99.99% Core Uptime</span>
              </div>
            </div>

            {/* Main Headline */}
            <div className="space-y-4">
              <h1 className="text-4xl sm:text-5xl lg:text-5xl xl:text-6xl font-extrabold tracking-tight text-white leading-[1.1] [text-wrap:balance]">
                From Napkin Blueprint to{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 via-amber-400 to-cyan-400">
                  High-Velocity SaaS.
                </span>
              </h1>

              <p className="text-base sm:text-lg text-neutral-300 font-normal leading-relaxed max-w-xl">
                SKzLAB is a premier SaaS product foundry and engineering venture studio. We architect, incubate, and scale mission critical digital systems from multi-tenant cloud backends to high-conversion modern frontends.
              </p>
            </div>

            {/* CTAs */}
            <div className="pt-2 flex flex-col sm:flex-row sm:items-center gap-3.5">
              <button
                onClick={() => {
                  if (isInsideIframe) return;
                  setContactChannel('email');
                  setIsContactModalOpen(true);
                }}
                className="px-6 py-3.5 rounded-xl font-semibold text-sm text-white bg-gradient-to-r from-orange-600 to-amber-600 hover:from-orange-500 hover:to-amber-500 shadow-xl shadow-orange-950/40 flex items-center justify-center gap-2.5 transition-all duration-200 transform hover:-translate-y-0.5 cursor-pointer"
              >
                <span>Commission a SaaS Platform</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <a
                href="#launches"
                onClick={(e) => {
                  if (isInsideIframe) {
                    e.preventDefault();
                    document.querySelector('#launches')?.scrollIntoView({ behavior: 'smooth' });
                  }
                }}
                className="px-6 py-3.5 rounded-xl font-semibold text-sm text-neutral-200 bg-neutral-900/90 hover:bg-neutral-800 border border-neutral-800 hover:border-neutral-700 transition-all duration-200 flex items-center justify-center gap-2"
              >
                <span>Explore Flagship Products</span>
              </a>
            </div>

            {/* Quick Metrics */}
            <div className="flex items-center gap-6 pt-1 text-xs font-mono text-neutral-400">
              <div>
                <span className="text-white font-bold text-sm block">120ms</span>
                <span>Checkout Latency</span>
              </div>
              <div className="h-6 w-px bg-neutral-800" />
              <div>
                <span className="text-white font-bold text-sm block">6 Nodes</span>
                <span>Global Edge Mesh</span>
              </div>
            </div>
          </div>

          {/* RIGHT COLUMN: 50% Width - Single Fixed-Size Workbench Window */}
          <div className="w-full">
            <div
              ref={workbenchRef}
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={(e) => {
                if (!e.relatedTarget || e.relatedTarget.tagName === 'IFRAME') return;
                if (document.activeElement?.tagName === 'IFRAME') return;
                setIsHovered(false);
              }}
              className="bg-neutral-900/90 border border-neutral-800 rounded-2xl shadow-2xl overflow-hidden backdrop-blur-xl flex flex-col h-[550px] sm:h-[560px] xl:h-[570px] max-h-[570px] transition-all duration-200"
            >
              {/* macOS / Terminal Fixed Header */}
              <div className="px-4 py-3 bg-neutral-950/95 border-b border-neutral-800 flex flex-wrap items-center justify-between gap-2.5 shrink-0">
                {/* Window Dots & Identifier */}
                <div className="flex items-center gap-2.5 min-w-0">
                  <div className="flex items-center gap-1.5 shrink-0">
                    <span className="w-2.5 h-2.5 rounded-full bg-red-500/80 inline-block shadow-sm" />
                    <span className="w-2.5 h-2.5 rounded-full bg-yellow-500/80 inline-block shadow-sm" />
                    <span className="w-2.5 h-2.5 rounded-full bg-green-500/80 inline-block shadow-sm" />
                  </div>
                  <div className="h-3.5 w-px bg-neutral-800 shrink-0" />
                  <span className="text-xs font-mono font-medium text-neutral-300 flex items-center gap-1.5 truncate">
                    <Terminal className="w-3.5 h-3.5 text-orange-500 shrink-0" />
                    <span className="truncate">SaaS Engine · {activeProduct.name}</span>
                  </span>
                </div>

                {/* Header Status & Replay Control */}
                <div className="flex items-center gap-2 shrink-0">
                  {isHovered ? (
                    <span className="px-2 py-0.5 rounded bg-amber-500/10 text-amber-400 border border-amber-500/20 text-[10px] font-mono flex items-center gap-1">
                      <span>❚❚</span>
                      <span>Paused on Hover</span>
                    </span>
                  ) : (
                    <span className="px-2 py-0.5 rounded bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 text-[10px] font-mono flex items-center gap-1">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                      <span>{phase === 'terminal' ? 'Executing' : 'Live Preview'}</span>
                    </span>
                  )}

                  {/* Replay Button */}
                  <button
                    onClick={handleReplay}
                    className="px-2 py-1 rounded bg-neutral-900 hover:bg-neutral-800 border border-neutral-800 text-[11px] font-mono text-neutral-300 hover:text-white flex items-center gap-1 transition-colors cursor-pointer"
                    title="Replay sequence from beginning"
                  >
                    <RotateCcw className={`w-3 h-3 text-orange-400 ${phase === 'terminal' ? 'animate-spin' : ''}`} />
                    <span className="hidden sm:inline">Replay</span>
                  </button>
                </div>
              </div>

              {/* 4 Tabs Bar (Frontend, Admin Panel, Backend, Database) */}
              <div className="px-4 py-2 bg-neutral-950/60 border-b border-neutral-800/80 flex items-center justify-between gap-2 overflow-x-auto shrink-0">
                <div className="flex items-center gap-1.5">
                  {slideKeys.map((key, idx) => {
                    const slide = activeProduct.slides[key];
                    const isActive = activeSlideIndex === idx;
                    return (
                      <button
                        key={key}
                        onClick={() => handleSelectSlide(idx)}
                        className={`px-3 py-1.5 rounded-lg text-xs font-mono font-medium transition-all duration-200 flex items-center gap-1.5 cursor-pointer whitespace-nowrap ${isActive
                          ? 'bg-neutral-900 border border-orange-500/80 text-white shadow-sm shadow-orange-500/10'
                          : 'bg-neutral-950/40 border border-neutral-800/60 text-neutral-400 hover:text-neutral-200 hover:bg-neutral-900/50'
                          }`}
                      >
                        {key === 'frontend' && <Globe className="w-3 h-3 text-emerald-400" />}
                        {key === 'admin' && <LayoutDashboard className="w-3 h-3 text-blue-400" />}
                        {key === 'backend' && <Server className="w-3 h-3 text-orange-400" />}
                        {key === 'database' && <Database className="w-3 h-3 text-cyan-400" />}
                        <span>{slide.tabName}</span>
                      </button>
                    );
                  })}
                </div>

                {/* Active Stack Badge */}
                <div className="hidden sm:flex items-center gap-1.5 text-[10px] font-mono text-neutral-400 shrink-0">
                  <span
                    className="w-1.5 h-1.5 rounded-full"
                    style={{ backgroundColor: activeSlide.badgeColor }}
                  />
                  <span>{activeSlide.badge}</span>
                </div>
              </div>

              {/* Dynamic Body: Static Fixed Height Container for Terminal and Live modes */}
              <div className="flex-1 min-h-0 flex flex-col justify-between bg-neutral-950/40 relative overflow-hidden">
                {phase === 'terminal' ? (
                  /* =========================================================
                     MODE A: TERMINAL CMD VIEW (Exact matching height)
                     ========================================================= */
                  <div className="p-4 sm:p-5 font-mono text-xs space-y-2 overflow-y-auto flex-1 min-h-0 select-text">
                    <div className="text-[11px] text-neutral-400 pb-2 border-b border-neutral-900 flex items-center justify-between sticky top-0 bg-neutral-950/90 backdrop-blur-sm z-10">
                      <span>SKz LAB Engine Shell · Session #842</span>
                      <span className="text-emerald-400 font-semibold">● EXECUTING</span>
                    </div>

                    <div className="space-y-1.5 pt-2">
                      {activeSlide.commands.slice(0, terminalLineCount).map((cmd, i) => (
                        <div key={i} className="leading-relaxed">
                          {cmd.type === 'cmd' && (
                            <div className="text-white font-semibold flex items-center gap-1.5">
                              <span className="text-emerald-400">$</span>
                              <span>{cmd.text.replace('$ ', '')}</span>
                            </div>
                          )}
                          {cmd.type === 'output' && (
                            <pre className="text-neutral-400 text-[11px] pl-3 whitespace-pre-wrap">
                              {cmd.text}
                            </pre>
                          )}
                          {cmd.type === 'accent' && (
                            <div className="text-cyan-400 text-[11px] pl-3">
                              {cmd.text}
                            </div>
                          )}
                          {cmd.type === 'success' && (
                            <div className="text-emerald-400 font-medium text-[11px] pl-3 flex items-center gap-1.5">
                              <span>{cmd.text}</span>
                            </div>
                          )}
                          {cmd.type === 'system' && (
                            <div className="text-orange-400 font-semibold text-[11px] pl-3 pt-1 animate-pulse">
                              {cmd.text}
                            </div>
                          )}
                        </div>
                      ))}

                      {/* Blinking Cursor */}
                      {terminalLineCount < activeSlide.commands.length && (
                        <div className="text-emerald-400 animate-pulse text-sm font-bold pl-3">
                          █
                        </div>
                      )}
                    </div>
                  </div>
                ) : (
                  /* =========================================================
                     MODE B: LIVE APPLICATION / ADMIN / API / DB VIEW
                     ========================================================= */
                  <div className="flex-1 min-h-0 flex flex-col overflow-hidden">
                    {/* Simulated Browser Address Bar */}
                    <div className="px-3.5 py-1.5 bg-neutral-950/80 border-b border-neutral-800 flex items-center justify-between gap-3 text-xs font-mono shrink-0">
                      <div className="flex items-center gap-2 flex-1 min-w-0 bg-neutral-900/90 border border-neutral-800 px-2.5 py-1 rounded-lg">
                        <Lock className="w-3 h-3 text-emerald-400 shrink-0" />
                        <span className="text-neutral-300 truncate text-[11px]">
                          {activeSlide.url ||
                            (activeSlideKey === 'database'
                              ? 'postgres://neon.tech/' + activeProduct.id + '_prod'
                              : activeSlide.imageUrl
                                ? activeSlide.imageUrl
                                : 'http://localhost:3000/' + activeSlide.id)}
                        </span>
                      </div>

                      <div className="flex items-center gap-1.5 shrink-0">
                        <button
                          onClick={handleReplay}
                          className="p-1 rounded bg-neutral-900 hover:bg-neutral-800 text-neutral-400 hover:text-white border border-neutral-800 transition-colors cursor-pointer"
                          title="Replay terminal"
                        >
                          <RefreshCw className="w-3 h-3" />
                        </button>
                      </div>
                    </div>

                    {/* Viewport Content for Slide 01: FRONTEND (1920x1080 Desktop Viewport Scaled) */}
                    {activeSlideKey === 'frontend' && (
                      <div className="flex-1 min-h-0 p-3 flex flex-col justify-between bg-neutral-950/30 overflow-hidden">
                        <div
                          ref={previewContainerRef}
                          className="w-full flex-1 min-h-0 relative overflow-hidden bg-neutral-950 rounded-xl border border-neutral-800/80 shadow-2xl flex items-center justify-center"
                          style={{ overscrollBehavior: 'contain' }}
                        >
                          <div
                            style={{
                              width: '1920px',
                              height: '1080px',
                              transform: `scale(${previewScale})`,
                              transformOrigin: 'top left',
                              position: 'absolute',
                              top: 0,
                              left: 0,
                            }}
                          >
                            {isInsideIframe ? (
                              <div className="w-full h-full bg-neutral-950 flex flex-col items-center justify-center text-neutral-400 font-mono select-none">
                                <div className="text-3xl font-bold text-white mb-2">{activeSlide.title}</div>
                                <div className="text-sm text-emerald-400">Desktop Viewport</div>
                              </div>
                            ) : (
                              <iframe
                                src={frontendPreviewUrl}
                                title="Desktop Live Preview"
                                className="w-[1920px] h-[1080px] border-0 pointer-events-auto bg-neutral-950"
                                sandbox="allow-scripts allow-same-origin allow-forms"
                                loading="lazy"
                                style={{ overscrollBehavior: 'contain' }}
                              />
                            )}
                          </div>
                        </div>

                        {/* Telemetry Status Bar below the scaled viewport */}
                        <div className="pt-2 px-0.5 flex items-center justify-between text-[10px] font-mono text-neutral-400 shrink-0">
                          <span className="text-emerald-400 font-semibold">200 OK · Live Ready</span>
                          <span className="text-neutral-500">Desktop Viewport</span>
                        </div>
                      </div>
                    )}

                    {/* Viewport Content for Slide 02: ADMIN PANEL (Supports URL, Image, or Built-in Dashboard) */}
                    {activeSlideKey === 'admin' && (
                      <div className="flex-1 min-h-0 p-3 flex flex-col justify-between bg-neutral-950/30 overflow-hidden">
                        <div className="w-full flex-1 min-h-0 relative overflow-hidden bg-neutral-950 rounded-xl border border-neutral-800/80 shadow-2xl flex items-center justify-center">
                          {activeSlide.url ? (
                            /* Case 1: Custom Live URL embedded as Scaled Desktop Viewport */
                            <div
                              style={{
                                width: '1920px',
                                height: '1080px',
                                transform: `scale(${previewScale})`,
                                transformOrigin: 'top left',
                                position: 'absolute',
                                top: 0,
                                left: 0,
                              }}
                            >
                              <iframe
                                src={activeSlide.url}
                                title="Admin Dashboard Live Preview"
                                className="w-[1920px] h-[1080px] border-0 pointer-events-auto bg-neutral-950"
                                sandbox="allow-scripts allow-same-origin allow-forms"
                                loading="lazy"
                              />
                            </div>
                          ) : activeSlide.imageUrl ? (
                            /* Case 2: Custom Screenshot Image */
                            <div className="w-full h-full flex items-center justify-center bg-neutral-950 overflow-hidden">
                              <img
                                src={activeSlide.imageUrl}
                                alt={activeSlide.title}
                                className="w-full h-full object-cover object-top"
                              />
                            </div>
                          ) : (
                            /* Case 3: Built-in High-Tech Dark Mode SaaS Admin Dashboard Layout */
                            <div className="w-full h-full bg-neutral-950/95 p-3 sm:p-4 flex flex-col justify-between overflow-y-auto font-mono text-xs select-none">
                              {/* Top Stats Row */}
                              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 mb-2.5 shrink-0">
                                <div className="p-2 sm:p-2.5 rounded-lg bg-neutral-900/90 border border-neutral-800/90">
                                  <div className="text-[10px] text-neutral-400">Total MRR</div>
                                  <div className="text-sm sm:text-base font-bold text-white mt-0.5">$128,450</div>
                                  <div className="text-[9px] text-emerald-400 mt-0.5 font-semibold">↑ +18.4% this mo</div>
                                </div>
                                <div className="p-2 sm:p-2.5 rounded-lg bg-neutral-900/90 border border-neutral-800/90">
                                  <div className="text-[10px] text-neutral-400">Active Tenants</div>
                                  <div className="text-sm sm:text-base font-bold text-cyan-400 mt-0.5">42 Verified</div>
                                  <div className="text-[9px] text-emerald-400 mt-0.5">● 100% online</div>
                                </div>
                                <div className="p-2 sm:p-2.5 rounded-lg bg-neutral-900/90 border border-neutral-800/90">
                                  <div className="text-[10px] text-neutral-400">API Gateway</div>
                                  <div className="text-sm sm:text-base font-bold text-orange-400 mt-0.5">2.4M req/d</div>
                                  <div className="text-[9px] text-neutral-400 mt-0.5">18ms p99 latency</div>
                                </div>
                                <div className="p-2 sm:p-2.5 rounded-lg bg-neutral-900/90 border border-neutral-800/90">
                                  <div className="text-[10px] text-neutral-400">Core Uptime</div>
                                  <div className="text-sm sm:text-base font-bold text-emerald-400 mt-0.5">99.99%</div>
                                  <div className="text-[9px] text-emerald-400 mt-0.5">Zero incidents</div>
                                </div>
                              </div>

                              {/* Middle: Traffic Analytics & RBAC Security */}
                              <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 flex-1 min-h-0 mb-2">
                                <div className="sm:col-span-2 p-2.5 rounded-lg bg-neutral-900/70 border border-neutral-800/80 flex flex-col justify-between">
                                  <div className="flex items-center justify-between text-[11px] mb-1">
                                    <span className="text-neutral-300 font-semibold flex items-center gap-1.5">
                                      <Activity className="w-3 h-3 text-blue-400" />
                                      <span>Real-time Traffic & Throughput</span>
                                    </span>
                                    <span className="text-[10px] text-neutral-500 font-mono">Last 7 Days</span>
                                  </div>
                                  <div className="flex items-end gap-1.5 h-16 pt-1 px-1">
                                    {[45, 68, 52, 85, 74, 98, 115].map((val, idx) => (
                                      <div key={idx} className="flex-1 flex flex-col items-center gap-1">
                                        <div
                                          className="w-full rounded-t bg-gradient-to-t from-blue-600/40 via-blue-500 to-cyan-400 transition-all hover:brightness-125"
                                          style={{ height: `${(val / 120) * 100}%` }}
                                        />
                                        <span className="text-[8px] text-neutral-500 font-mono">
                                          {['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'][idx]}
                                        </span>
                                      </div>
                                    ))}
                                  </div>
                                </div>

                                <div className="p-2.5 rounded-lg bg-neutral-900/70 border border-neutral-800/80 flex flex-col justify-between">
                                  <div className="text-[11px] text-neutral-300 font-semibold mb-1">Security & Policy</div>
                                  <div className="space-y-1.5 text-[10px]">
                                    <div className="flex items-center justify-between p-1 rounded bg-neutral-950/70 border border-neutral-800/50">
                                      <span className="text-neutral-400">Enterprise SSO</span>
                                      <span className="text-emerald-400 font-bold">ENFORCED</span>
                                    </div>
                                    <div className="flex items-center justify-between p-1 rounded bg-neutral-950/70 border border-neutral-800/50">
                                      <span className="text-neutral-400">Audit Stream</span>
                                      <span className="text-cyan-400 font-bold">SYNCHRONIZED</span>
                                    </div>
                                    <div className="flex items-center justify-between p-1 rounded bg-neutral-950/70 border border-neutral-800/50">
                                      <span className="text-neutral-400">Zero-Trust TLS</span>
                                      <span className="text-blue-400 font-bold">TLS 1.3 / mTLS</span>
                                    </div>
                                  </div>
                                </div>
                              </div>

                              {/* Bottom: Recent Tenants Mini-Table */}
                              <div className="p-2 rounded-lg bg-neutral-900/50 border border-neutral-800/60 text-[10px] shrink-0">
                                <div className="flex items-center justify-between text-neutral-400 border-b border-neutral-800/60 pb-1 mb-1 font-mono">
                                  <span>Organization</span>
                                  <span>Region</span>
                                  <span>Tier</span>
                                  <span>Status</span>
                                </div>
                                <div className="space-y-1 text-neutral-300 font-mono">
                                  <div className="flex items-center justify-between">
                                    <span className="text-white font-medium">Apex Retail Group</span>
                                    <span className="text-neutral-400">us-east-1</span>
                                    <span className="text-blue-400">Enterprise</span>
                                    <span className="text-emerald-400 font-medium">● Online</span>
                                  </div>
                                  <div className="flex items-center justify-between">
                                    <span className="text-white font-medium">Nordic Fleet Cloud</span>
                                    <span className="text-neutral-400">eu-central-1</span>
                                    <span className="text-blue-400">Growth</span>
                                    <span className="text-emerald-400 font-medium">● Online</span>
                                  </div>
                                </div>
                              </div>
                            </div>
                          )}
                        </div>

                        {/* Telemetry Status Bar below admin */}
                        <div className="pt-2 px-0.5 flex items-center justify-between text-[10px] font-mono text-neutral-400 shrink-0">
                          <span className="text-blue-400 font-semibold">200 OK · Admin Matrix Ready</span>
                          <span className="text-neutral-500">RBAC & Telemetry Node #01</span>
                        </div>
                      </div>
                    )}

                    {/* Viewport Content for Slide 03: BACKEND */}
                    {activeSlideKey === 'backend' && (
                      <div className="flex-1 min-h-0 p-3 sm:p-4 flex flex-col justify-between bg-neutral-950/30 font-mono text-xs overflow-hidden">
                        <div className="space-y-2 flex-1 min-h-0 flex flex-col">
                          {/* Endpoint Switcher Tabs */}
                          <div className="flex items-center gap-1.5 border-b border-neutral-800/80 pb-2 overflow-x-auto shrink-0">
                            {(activeSlide.endpoints || [
                              { id: 'root', label: '/api/' }
                            ]).map((ep) => (
                              <button
                                key={ep.id}
                                onClick={() => setBackendEndpoint(ep.id)}
                                className={`px-2 py-1 rounded text-[11px] transition-colors cursor-pointer whitespace-nowrap ${backendEndpoint === ep.id
                                  ? 'bg-neutral-800 text-orange-400 font-bold'
                                  : 'text-neutral-400 hover:text-neutral-200'
                                  }`}
                              >
                                {ep.label}
                              </button>
                            ))}
                          </div>

                          {/* Dynamic JSON API Response */}
                          <div className="p-3 rounded-xl bg-neutral-950 border border-neutral-800/80 text-[11px] overflow-auto shadow-inner flex-1 min-h-0">
                            <pre className="text-neutral-300 leading-relaxed font-mono">
                              {JSON.stringify(currentBackendResponse, null, 2)}
                            </pre>
                          </div>
                        </div>

                        <div className="pt-2 flex items-center justify-between text-[10px] text-neutral-400 border-t border-neutral-900 shrink-0">
                          <span>HTTP 200 OK · application/json</span>
                          <span className="text-emerald-400 font-semibold">● Django WSGI active</span>
                        </div>
                      </div>
                    )}

                    {/* Viewport Content for Slide 04: DATABASE */}
                    {activeSlideKey === 'database' && (
                      <div className="flex-1 min-h-0 p-3 sm:p-4 flex flex-col justify-between bg-neutral-950/30 font-mono text-xs overflow-hidden">
                        <div className="space-y-2 flex-1 min-h-0 flex flex-col">
                          {/* Query Tabs */}
                          <div className="flex items-center gap-1.5 border-b border-neutral-800/80 pb-2 overflow-x-auto shrink-0">
                            {(activeSlide.tables || []).map((tab) => (
                              <button
                                key={tab.id}
                                onClick={() => setDatabaseQuery(tab.id)}
                                className={`px-2 py-1 rounded text-[11px] transition-colors cursor-pointer whitespace-nowrap ${databaseQuery === tab.id
                                  ? 'bg-neutral-800 text-cyan-400 font-bold'
                                  : 'text-neutral-400 hover:text-neutral-200'
                                  }`}
                              >
                                {tab.label}
                              </button>
                            ))}
                          </div>

                          {/* Interactive Schema & Table Preview */}
                          <div className="p-3 rounded-xl bg-neutral-950 border border-neutral-800/80 text-[11px] overflow-auto shadow-inner flex-1 min-h-0">
                            {currentTableData ? (
                              <table className="w-full text-left font-mono">
                                <thead>
                                  <tr className="text-neutral-400 border-b border-neutral-800">
                                    {currentTableData.columns.map((col, idx) => (
                                      <th key={idx} className="pb-1 text-[11px] font-medium">{col}</th>
                                    ))}
                                  </tr>
                                </thead>
                                <tbody className="text-neutral-300 divide-y divide-neutral-900">
                                  {currentTableData.rows.map((row, rIdx) => (
                                    <tr key={rIdx}>
                                      {row.map((cell, cIdx) => (
                                        <td
                                          key={cIdx}
                                          className={`py-1 text-[11px] ${cIdx === 0
                                            ? 'text-cyan-400 font-semibold'
                                            : cIdx === row.length - 1 && (cell === 'Live' || cell === 'Stable' || cell === 'Finished' || cell === 'Available' || cell === 'Primary')
                                              ? 'text-emerald-400'
                                              : 'text-neutral-300'
                                            }`}
                                        >
                                          {cell}
                                        </td>
                                      ))}
                                    </tr>
                                  ))}
                                </tbody>
                              </table>
                            ) : (
                              <div className="text-neutral-500 py-4 text-center">No table data available</div>
                            )}
                          </div>
                        </div>

                        <div className="pt-2 flex items-center justify-between text-[10px] text-neutral-400 border-t border-neutral-900 shrink-0">
                          <span>PostgreSQL 16.4 on Neon Cloud</span>
                          <span className="text-cyan-400 font-semibold">● Connection Pools Synchronized</span>
                        </div>
                      </div>
                    )}
                  </div>
                )}
              </div>

              {/* Bottom Footer Telemetry */}
              <div className="px-4 py-2 bg-neutral-950/90 border-t border-neutral-800 flex items-center justify-between text-[11px] font-mono text-neutral-400 shrink-0">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                  <span className="hidden sm:inline">Hover cursor to pause</span>
                  <span className="sm:hidden">Hover to pause</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Floating Scroll-Down Indicator (Absolute positioned so it causes zero layout shift) */}
      <ScrollToNext targetId="architecture" />
    </section>
  );
};

export default HeroSection;
