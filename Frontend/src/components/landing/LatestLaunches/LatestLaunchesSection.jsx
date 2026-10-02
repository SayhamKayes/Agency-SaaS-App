import React, { useState } from 'react';
import { useApp } from '../../../Context/AppContext';
import {
  ExternalLink,
  Sparkles,
  Layers,
  ArrowUpRight,
  CheckCircle2,
  Terminal,
  Activity,
  X,
  Zap,
  Globe
} from 'lucide-react';

export const LatestLaunchesSection = () => {
  const { products, setIsContactModalOpen, setContactChannel } = useApp();
  const [selectedProduct, setSelectedProduct] = useState(null);

  // Filter latest launches
  const latestProducts = products.filter((p) => p.isLatestLaunch);

  return (
    <section id="launches" className="py-24 relative overflow-hidden bg-neutral-950 border-b border-neutral-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-14 gap-6">
          <div>
            <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-[0.2em] text-orange-500 mb-2">
              <span>02</span>
              <span>·</span>
              <span>LATEST PRODUCTION LAUNCHES</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight [text-wrap:balance]">
              Freshly Deployed from the SKz LAB Foundry.
            </h2>
            <p className="mt-2 text-neutral-400 max-w-xl text-base">
              Explore our most recent flagship SaaS releases — engineered, stress-tested, and operating
              at full enterprise throughput.
            </p>
          </div>

          <div className="flex items-center gap-3">
            <span className="text-xs font-mono text-neutral-400">
              {latestProducts.length} ACTIVE LAUNCHES
            </span>
          </div>
        </div>

        {/* Latest Launches Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {latestProducts.map((product) => (
            <div
              key={product.id}
              className="group rounded-2xl bg-neutral-900/80 border border-neutral-800 hover:border-neutral-700 transition-all duration-300 flex flex-col overflow-hidden hover:-translate-y-1 shadow-xl hover:shadow-2xl"
            >
              {/* Product Mockup Header */}
              <div className="relative h-56 bg-neutral-950 p-4 border-b border-neutral-800 flex flex-col justify-between overflow-hidden">
                <div
                  className="absolute inset-0 opacity-15 pointer-events-none"
                  style={{
                    background: `radial-gradient(circle at 30% 30%, ${product.accentColor || '#F05A28'} 0%, transparent 70%)`
                  }}
                />

                {/* Top Mockup Bar */}
                <div className="flex items-center justify-between z-10">
                  <div className="flex items-center gap-1.5">
                    <span className="w-2.5 h-2.5 rounded-full bg-red-500/80 inline-block" />
                    <span className="w-2.5 h-2.5 rounded-full bg-yellow-500/80 inline-block" />
                    <span className="w-2.5 h-2.5 rounded-full bg-green-500/80 inline-block" />
                    <span className="text-[10px] font-mono text-neutral-400 ml-2">
                      {product.name.toLowerCase().replace(/\s+/g, '-')}.skzlab.com
                    </span>
                  </div>

                  <span className="px-2 py-0.5 rounded text-[10px] font-mono font-medium bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 flex items-center gap-1">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                    {product.status}
                  </span>
                </div>

                {/* Visual Mockup Dashboard Simulation */}
                <div className="my-auto z-10 bg-neutral-900/90 rounded-xl p-3 border border-neutral-800 shadow-inner space-y-2">
                  <div className="flex items-center justify-between text-[11px] font-mono">
                    <span className="text-neutral-400">Monthly Run Rate</span>
                    <span className="text-white font-bold tabular-nums">
                      {product.mrr}
                    </span>
                  </div>

                  {/* Micro metric bar */}
                  <div className="w-full bg-neutral-950 rounded-full h-1.5 overflow-hidden">
                    <div
                      className="h-full rounded-full transition-all duration-1000"
                      style={{
                        width: '78%',
                        backgroundColor: product.accentColor || '#F05A28'
                      }}
                    />
                  </div>

                  <div className="flex items-center justify-between text-[10px] font-mono text-neutral-400">
                    <span>Active: {product.activeUsers}</span>
                    <span className="text-emerald-400">Uptime: {product.uptime}</span>
                  </div>
                </div>

                {/* Architecture Tier Badge */}
                <div className="z-10 flex items-center justify-between text-[10px] font-mono text-neutral-400">
                  <span className="flex items-center gap-1">
                    <Terminal className="w-3 h-3 text-orange-400" />
                    {product.architectureTier || 'Cloud Microservice'}
                  </span>
                  <span>Launched {product.launchDate}</span>
                </div>
              </div>

              {/* Card Body */}
              <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                <div>
                  <div className="text-xs font-mono text-orange-400 uppercase tracking-wider mb-1">
                    {product.category}
                  </div>
                  <h3 className="text-xl font-bold text-white group-hover:text-orange-400 transition-colors">
                    {product.name}
                  </h3>
                  <p className="mt-1 text-xs font-medium text-neutral-300">
                    {product.tagline}
                  </p>
                  <p className="mt-2 text-xs text-neutral-400 line-clamp-2 leading-relaxed">
                    {product.description}
                  </p>
                </div>

                {/* Key Features List */}
                <div className="space-y-1.5 pt-2 border-t border-neutral-800/80">
                  {product.features.slice(0, 2).map((feat, idx) => (
                    <div
                      key={idx}
                      className="flex items-center gap-2 text-xs text-neutral-300"
                    >
                      <CheckCircle2
                        className="w-3.5 h-3.5 shrink-0"
                        style={{ color: product.accentColor || '#F05A28' }}
                      />
                      <span className="truncate">{feat}</span>
                    </div>
                  ))}
                </div>

                {/* Tech Stack Pills */}
                <div className="flex flex-wrap gap-1.5 pt-2">
                  {product.techStack.map((tech) => (
                    <span
                      key={tech}
                      className="px-2 py-0.5 rounded text-[10px] font-mono text-neutral-400 bg-neutral-950 border border-neutral-800"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Card Action Buttons */}
                <div className="pt-3 border-t border-neutral-800 flex items-center justify-between">
                  <button
                    onClick={() => setSelectedProduct(product)}
                    className="text-xs font-semibold text-white hover:text-orange-400 transition-colors flex items-center gap-1"
                  >
                    <span>View Architectural Spec</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </button>

                  <button
                    onClick={() => {
                      setContactChannel('whatsapp');
                      setIsContactModalOpen(true);
                    }}
                    className="px-3 py-1.5 rounded-lg text-xs font-medium bg-neutral-800 hover:bg-neutral-700 text-white transition-colors"
                  >
                    Deploy Instance
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Product Architectural Deep-Dive Modal */}
      {selectedProduct && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-neutral-950/80 backdrop-blur-md">
          <div className="bg-neutral-900 border border-neutral-800 rounded-2xl max-w-2xl w-full p-6 space-y-6 shadow-2xl relative max-h-[90vh] overflow-y-auto">
            {/* Modal Header */}
            <div className="flex items-start justify-between">
              <div>
                <div className="flex items-center gap-2 mb-1">
                  <span
                    className="px-2 py-0.5 rounded text-xs font-mono font-medium"
                    style={{
                      backgroundColor: `${selectedProduct.accentColor || '#F05A28'}20`,
                      color: selectedProduct.accentColor || '#F05A28'
                    }}
                  >
                    {selectedProduct.category}
                  </span>
                  <span className="text-xs font-mono text-emerald-400">
                    {selectedProduct.status}
                  </span>
                </div>
                <h3 className="text-2xl font-bold text-white">
                  {selectedProduct.name}
                </h3>
                <p className="text-xs text-neutral-400 font-mono">
                  {selectedProduct.tagline}
                </p>
              </div>

              <button
                onClick={() => setSelectedProduct(null)}
                className="p-1.5 rounded-lg bg-neutral-800 text-neutral-400 hover:text-white transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Metrics Overview */}
            <div className="grid grid-cols-3 gap-3 p-4 rounded-xl bg-neutral-950 border border-neutral-800 text-center font-mono">
              <div>
                <div className="text-xs text-neutral-400">Monthly Run Rate</div>
                <div className="text-lg font-bold text-white mt-1">
                  {selectedProduct.mrr}
                </div>
              </div>
              <div>
                <div className="text-xs text-neutral-400">Active Operators</div>
                <div className="text-lg font-bold text-cyan-400 mt-1">
                  {selectedProduct.activeUsers}
                </div>
              </div>
              <div>
                <div className="text-xs text-neutral-400">Production SLA</div>
                <div className="text-lg font-bold text-emerald-400 mt-1">
                  {selectedProduct.uptime}
                </div>
              </div>
            </div>

            {/* Description */}
            <div>
              <h4 className="text-xs font-mono uppercase tracking-wider text-neutral-400 mb-2">
                Executive Overview
              </h4>
              <p className="text-sm text-neutral-300 leading-relaxed">
                {selectedProduct.description}
              </p>
            </div>

            {/* Complete Features */}
            <div>
              <h4 className="text-xs font-mono uppercase tracking-wider text-neutral-400 mb-2">
                Engineered Capabilities
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                {selectedProduct.features.map((feat, i) => (
                  <div
                    key={i}
                    className="flex items-center gap-2 p-2.5 rounded-lg bg-neutral-950 border border-neutral-800/80 text-xs text-neutral-200"
                  >
                    <CheckCircle2
                      className="w-4 h-4 shrink-0"
                      style={{ color: selectedProduct.accentColor || '#F05A28' }}
                    />
                    <span>{feat}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Full Tech Stack */}
            <div>
              <h4 className="text-xs font-mono uppercase tracking-wider text-neutral-400 mb-2">
                Underlying Technology Stack
              </h4>
              <div className="flex flex-wrap gap-2">
                {selectedProduct.techStack.map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1 rounded-lg text-xs font-mono bg-neutral-950 text-neutral-300 border border-neutral-800"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* Modal Actions */}
            <div className="pt-4 border-t border-neutral-800 flex items-center justify-between">
              <button
                onClick={() => setSelectedProduct(null)}
                className="px-4 py-2 rounded-lg text-xs text-neutral-400 hover:text-white"
              >
                Close
              </button>

              <button
                onClick={() => {
                  setSelectedProduct(null);
                  setContactChannel('whatsapp');
                  setIsContactModalOpen(true);
                }}
                className="px-5 py-2.5 text-xs font-semibold rounded-lg text-white bg-gradient-to-r from-orange-600 to-amber-600 hover:from-orange-500 hover:to-amber-500 transition-colors shadow-lg"
              >
                Schedule Architecture Demo
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
