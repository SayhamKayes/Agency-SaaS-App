import React, { useState } from 'react';
import {
  Layers,
  Database,
  Cpu,
  Server,
  Globe,
  ShieldCheck,
  CheckCircle,
  Network,
  Terminal,
  Zap,
  Boxes
} from 'lucide-react';

export const ArchitectureSection = () => {
  const [selectedNode, setSelectedNode] = useState('core');

  const architectureNodes = [
    {
      id: 'gateway',
      title: 'Edge Ingress & Envoy Gateway',
      category: 'Perimeter Layer',
      icon: Globe,
      color: '#00A8C6',
      tech: 'Envoy / Cloudflare / HTTP/3',
      metrics: '< 8ms TLS Handshake · 2.5M Req/sec',
      description: 'Terminates global SSL traffic, enforces token-bucket rate limits, and routes requests to geographically optimal microservices.',
      responsibilities: ['DDoS mitigation & IP reputation scoring', 'Edge caching for static & query assets', 'JWT authentication verification']
    },
    {
      id: 'frontend',
      title: 'Modern SPA & Micro-Frontends',
      category: 'Presentation Layer',
      icon: Boxes,
      color: '#F59E0B',
      tech: 'React 19 / Vite / Tailwind / Context',
      metrics: 'Zero Layout Shift · 100/100 Lighthouse',
      description: 'Modular frontend architecture with separate layouts, services, context hooks, and sub-second client-side transitions.',
      responsibilities: ['Concurrent rendering & fluid transitions', 'Optimistic mutation & offline state sync', 'Real-time WebSocket event listeners']
    },
    {
      id: 'core',
      title: 'SKz LAB Core Microservice',
      category: 'Business Domain Layer',
      icon: Terminal,
      color: '#F05A28',
      tech: 'Python / Django REST / Asynchronous ASGI',
      metrics: 'Atomic Isolation · 45,000 TPS Capacity',
      description: 'The foundational enterprise engine handling orders, multi-tenant vendor catalogs, inventory locks, and secure accounting.',
      responsibilities: ['Order fulfillment state machine & concurrency', 'Multi-tenant database schema isolation', 'Dynamic courier dispatch webhook orchestration']
    },
    {
      id: 'courier',
      title: 'Courier Intelligence & Fleet Telemetry',
      category: 'Logistics Subsystem',
      icon: Zap,
      color: '#10B981',
      tech: 'GeoDjango / Kafka Streams / PostGIS',
      metrics: 'Sub-50ms SLA Calculation · GPS Tracking',
      description: 'High-speed event-driven logistics engine matching packages to parcel riders with predictive arrival estimates.',
      responsibilities: ['Dynamic geospatial geofencing & parcel assignment', 'Automated merchant courier SLA audits', 'Carrier tracking webhook syndication']
    },
    {
      id: 'ai',
      title: 'Cognitive AI Assistant Engine',
      category: 'Intelligence Cluster',
      icon: Cpu,
      color: '#8B5CF6',
      tech: 'Gemini Models / Qdrant / Python Workers',
      metrics: 'Stream Token Latency: 120ms · 99.4% Factual Guard',
      description: 'Fine-tuned conversational AI agent that automates customer tickets, analyzes order anomalies, and generates predictive insights.',
      responsibilities: ['Autonomous ticket resolution via function calls', 'Vector search over internal knowledge graphs', 'Real-time intent extraction across WhatsApp & Web']
    },
    {
      id: 'db',
      title: 'PostgreSQL & Distributed Redis',
      category: 'Data Persistence Layer',
      icon: Database,
      color: '#0284C7',
      tech: 'Neon PostgreSQL 16 / Redis Cluster / Celery',
      metrics: 'Active-Active Failover · RPO: 0 / RTO: < 5s',
      description: 'Distributed persistence layer featuring ACID transaction compliance, distributed lock managers, and asynchronous background worker queues.',
      responsibilities: ['Write-ahead logging & point-in-time recovery', 'Sub-millisecond session & inventory cache', 'Asynchronous invoice & email worker pool']
    }
  ];

  const activeNode = architectureNodes.find((n) => n.id === selectedNode) || architectureNodes[2];

  return (
    <section id="architecture" className="py-24 relative overflow-hidden bg-neutral-950/70 border-b border-neutral-800/80">
      {/* Decorative Blueprint Background Grid */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#262626_1px,transparent_1px),linear-gradient(to_bottom,#262626_1px,transparent_1px)] bg-[size:4rem_4rem] opacity-20 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="mb-14">
          <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-[0.2em] text-orange-500 mb-2">
            <span>01</span>
            <span>·</span>
            <span>SYSTEM ARCHITECTURE & PHILOSOPHY</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight [text-wrap:balance]">
            Constructing SaaS Like Master Architectural Landmarks.
          </h2>
          <p className="mt-3 text-neutral-400 max-w-2xl text-base leading-relaxed">
            Just as architectural masterworks require deep subterranean bedrock before rising into the sky,
            SKz LAB engineers SaaS platforms with uncompromising structural integrity.
          </p>
        </div>

        {/* Two-Column Layout: Left Architecture Blueprint, Right Philosophy & Content */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          {/* LEFT: Interactive Blueprint & System Stack */}
          <div className="lg:col-span-7">
            <div className="rounded-2xl bg-neutral-900/90 border border-neutral-800 p-6 shadow-2xl relative overflow-hidden">
              {/* Blueprint Watermark Stamp */}
              <div className="absolute top-4 right-4 flex items-center gap-1.5 px-2.5 py-1 rounded bg-neutral-950 border border-neutral-800 text-[10px] font-mono text-neutral-400">
                <ShieldCheck className="w-3.5 h-3.5 text-orange-500" />
                <span>SPEC // SKZ-ARCH-2026</span>
              </div>

              <div className="text-xs font-mono uppercase tracking-wider text-neutral-400 mb-4 flex items-center gap-2">
                <Network className="w-4 h-4 text-cyan-400" />
                <span>Interactive Cloud Blueprint · Select Node to Inspect</span>
              </div>

              {/* Stack Nodes Diagram */}
              <div className="space-y-3">
                {architectureNodes.map((node) => {
                  const isSelected = selectedNode === node.id;
                  const Icon = node.icon;

                  return (
                    <div
                      key={node.id}
                      onClick={() => setSelectedNode(node.id)}
                      className={`cursor-pointer rounded-xl p-4 transition-all duration-200 border relative ${
                        isSelected
                          ? 'bg-neutral-800/90 border-neutral-600 shadow-lg'
                          : 'bg-neutral-950/60 hover:bg-neutral-800/50 border-neutral-800/80 hover:border-neutral-700'
                      }`}
                      style={{
                        borderLeftWidth: '4px',
                        borderLeftColor: node.color
                      }}
                    >
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-3">
                          <div
                            className="w-9 h-9 rounded-lg flex items-center justify-center shrink-0 border"
                            style={{
                              backgroundColor: `${node.color}15`,
                              borderColor: `${node.color}35`
                            }}
                          >
                            <Icon className="w-4 h-4" style={{ color: node.color }} />
                          </div>

                          <div>
                            <div className="flex items-center gap-2">
                              <h4 className="text-sm font-semibold text-white">
                                {node.title}
                              </h4>
                              <span className="text-[10px] font-mono text-neutral-400">
                                [{node.category}]
                              </span>
                            </div>
                            <div className="text-xs font-mono text-neutral-400">
                              {node.tech}
                            </div>
                          </div>
                        </div>

                        <div className="text-right hidden sm:block">
                          <span className="text-[11px] font-mono font-medium text-emerald-400">
                            {node.metrics}
                          </span>
                        </div>
                      </div>

                      {/* Expanded View for Selected Node */}
                      {isSelected && (
                        <div className="mt-4 pt-3 border-t border-neutral-700/60 space-y-2">
                          <p className="text-xs text-neutral-300 leading-relaxed">
                            {node.description}
                          </p>
                          <div className="grid grid-cols-1 sm:grid-cols-2 gap-1.5 pt-1">
                            {node.responsibilities.map((resp, i) => (
                              <div
                                key={i}
                                className="flex items-center gap-1.5 text-[11px] text-neutral-400 font-mono"
                              >
                                <span className="w-1 h-1 rounded-full bg-cyan-400" />
                                <span>{resp}</span>
                              </div>
                            ))}
                          </div>
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>

              {/* Bottom Blueprint Spec Footer */}
              <div className="mt-6 pt-4 border-t border-neutral-800 flex flex-wrap items-center justify-between text-xs font-mono text-neutral-500 gap-2">
                <span>FOUNDRY BLUEPRINT: VERIFIED PRODUCTION GRADE</span>
                <span className="text-orange-400">FAULT TOLERANCE: 99.99%</span>
              </div>
            </div>
          </div>

          {/* RIGHT: Content & SaaS Foundry Engineering Philosophy */}
          <div className="lg:col-span-5 space-y-6">
            <div className="space-y-4">
              <h3 className="text-2xl font-bold text-white tracking-tight">
                Architectural Principles of the SKz SaaS Foundry
              </h3>
              <p className="text-sm text-neutral-300 leading-relaxed">
                Most web agencies piece together fragile plugins and shallow templates that collapse
                under the weight of real business scale. At SKz LAB, we engineer software following
                the same rigorous standards used to construct high-rise towers.
              </p>
            </div>

            {/* Principle 1 */}
            <div className="rounded-xl bg-neutral-900/60 border border-neutral-800/80 p-5 space-y-2 hover:border-neutral-700 transition-colors">
              <div className="flex items-center gap-2 text-xs font-mono text-orange-400 font-semibold uppercase">
                <span>Pillar 01</span>
                <span>·</span>
                <span>Zero Architectural Debt</span>
              </div>
              <h4 className="text-base font-semibold text-white">
                Deterministic Foundations Built for 100x Spikes
              </h4>
              <p className="text-xs text-neutral-400 leading-relaxed">
                We establish database schemas, tenancy isolation boundaries, and caching layers with
                mathematical headroom, ensuring your product handles millions of concurrent users
                without refactoring.
              </p>
            </div>

            {/* Principle 2 */}
            <div className="rounded-xl bg-neutral-900/60 border border-neutral-800/80 p-5 space-y-2 hover:border-neutral-700 transition-colors">
              <div className="flex items-center gap-2 text-xs font-mono text-cyan-400 font-semibold uppercase">
                <span>Pillar 02</span>
                <span>·</span>
                <span>Modular Microservices Isolation</span>
              </div>
              <h4 className="text-base font-semibold text-white">
                Fault Containment Between Orders & Logistics
              </h4>
              <p className="text-xs text-neutral-400 leading-relaxed">
                As demonstrated in our SKz LAB and Courier architectures, subsystems operate with
                dedicated queues and asynchronous fallbacks. If an external delivery courier API experiences
                latency, the e-commerce checkout engine remains blisteringly fast.
              </p>
            </div>

            {/* Principle 3 */}
            <div className="rounded-xl bg-neutral-900/60 border border-neutral-800/80 p-5 space-y-2 hover:border-neutral-700 transition-colors">
              <div className="flex items-center gap-2 text-xs font-mono text-emerald-400 font-semibold uppercase">
                <span>Pillar 03</span>
                <span>·</span>
                <span>Autonomous AI Orchestration</span>
              </div>
              <h4 className="text-base font-semibold text-white">
                Cognitive Agents Embedded Directly into Core APIs
              </h4>
              <p className="text-xs text-neutral-400 leading-relaxed">
                We embed intelligence natively into data pipelines — automating dispatch routes,
                customer ticket resolution, and fraud prevention through fine-tuned multimodal models.
              </p>
            </div>

            {/* Direct Trust Quote */}
            <div className="p-4 rounded-xl border border-neutral-800 bg-neutral-950/70 text-xs text-neutral-400 italic">
              "We don't merely write code. We erect digital institutions that operate with uninterrupted
              clarity, durability, and commercial dominance."
              <span className="block mt-2 font-mono not-italic text-neutral-300 font-medium">
                — SKz LAB Engineering Directorate
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
