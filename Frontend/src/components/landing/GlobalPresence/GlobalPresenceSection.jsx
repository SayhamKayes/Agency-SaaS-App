import React, { useState } from 'react';
import { useApp } from '../../../Context/AppContext';
import {
  Globe2,
  Server,
  Zap,
  MapPin,
  Activity,
  ShieldCheck,
  Radio,
  Building2
} from 'lucide-react';

export const GlobalPresenceSection = () => {
  const { globalNodes } = useApp();
  const [selectedNode, setSelectedNode] = useState(globalNodes[0]); // Default: Dhaka HQ

  return (
    <section id="presence" className="py-24 relative overflow-hidden bg-neutral-950/80 border-b border-neutral-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="mb-14">
          <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-[0.2em] text-orange-500 mb-2">
            <span>04</span>
            <span>·</span>
            <span>GLOBAL PRESENCE & CLOUD NODES</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight [text-wrap:balance]">
            Our Presence: From Dhaka Foundry to Global Edge Networks.
          </h2>
          <p className="mt-3 text-neutral-400 max-w-2xl text-base leading-relaxed">
            SKz LAB anchors its primary engineering foundry in Dhaka, Bangladesh, interconnected with
            low-latency cloud edge clusters across the world’s major digital corridors.
          </p>
        </div>

        {/* Global Map and Nodes Card */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          {/* LEFT: Interactive Stylized Global Map SVG */}
          <div className="lg:col-span-8 rounded-2xl bg-neutral-900 border border-neutral-800 p-6 shadow-2xl relative overflow-hidden">
            {/* Map Frame Header */}
            <div className="flex items-center justify-between text-xs font-mono text-neutral-400 mb-4 pb-3 border-b border-neutral-800">
              <span className="flex items-center gap-2">
                <Radio className="w-3.5 h-3.5 text-emerald-400 animate-pulse" />
                <span>WORLDWIDE FOUNDRY TOPOLOGY · LIVE CLUSTER</span>
              </span>
              <span className="text-neutral-400">6 ACTIVE REGIONS</span>
            </div>

            {/* SVG Stylized Map */}
            <div className="relative w-full h-[320px] sm:h-[380px] bg-neutral-950 rounded-xl border border-neutral-800/80 flex items-center justify-center overflow-hidden">
              {/* Subtle Grid Lines */}
              <div className="absolute inset-0 bg-[linear-gradient(to_right,#222_1px,transparent_1px),linear-gradient(to_bottom,#222_1px,transparent_1px)] bg-[size:2rem_2rem] opacity-30" />

              {/* Simplified World Continents Vector Graphic */}
              <svg
                viewBox="0 0 1000 500"
                className="w-full h-full object-contain opacity-25"
                fill="#525252"
              >
                {/* North America */}
                <path d="M150,120 Q220,100 280,140 Q250,220 200,260 Q160,200 150,120 Z" />
                {/* South America */}
                <path d="M260,280 Q320,300 300,420 Q250,450 240,350 Z" />
                {/* Europe */}
                <path d="M470,110 Q540,100 560,170 Q490,200 460,160 Z" />
                {/* Africa */}
                <path d="M480,210 Q560,220 540,360 Q470,360 460,270 Z" />
                {/* Asia */}
                <path d="M600,100 Q780,110 820,240 Q710,290 600,230 Z" />
                {/* Australia */}
                <path d="M780,330 Q860,330 840,420 Q760,420 780,330 Z" />
              </svg>

              {/* Interactive Node Markers */}
              {globalNodes.map((node) => {
                const isSelected = selectedNode?.id === node.id;
                return (
                  <button
                    key={node.id}
                    onClick={() => setSelectedNode(node)}
                    className="absolute transform -translate-x-1/2 -translate-y-1/2 group cursor-pointer focus:outline-none z-20"
                    style={{
                      left: `${node.coordinates.x}%`,
                      top: `${node.coordinates.y}%`
                    }}
                    title={`${node.city} (${node.country})`}
                  >
                    {/* Pulsing ring */}
                    <span
                      className={`absolute -inset-2 rounded-full animate-ping opacity-60 ${
                        node.type === 'HQ & Foundry' ? 'bg-orange-500' : 'bg-cyan-500'
                      }`}
                    />

                    {/* Node Core Dot */}
                    <span
                      className={`relative flex items-center justify-center rounded-full transition-all duration-300 ${
                        isSelected
                          ? 'w-6 h-6 ring-4 ring-orange-500/40'
                          : 'w-4 h-4 hover:scale-125'
                      } ${
                        node.type === 'HQ & Foundry'
                          ? 'bg-orange-500 text-white'
                          : 'bg-cyan-500 text-neutral-950'
                      }`}
                    >
                      {isSelected ? (
                        <MapPin className="w-3.5 h-3.5" />
                      ) : (
                        <span className="w-1.5 h-1.5 rounded-full bg-white" />
                      )}
                    </span>

                    {/* Node Label Tooltip */}
                    <span
                      className={`absolute top-full left-1/2 -translate-x-1/2 mt-1 px-2 py-0.5 rounded text-[10px] font-mono whitespace-nowrap transition-all ${
                        isSelected
                          ? 'bg-neutral-900 text-white border border-neutral-700 shadow-lg'
                          : 'bg-neutral-950/80 text-neutral-400 opacity-0 group-hover:opacity-100'
                      }`}
                    >
                      {node.city}
                    </span>
                  </button>
                );
              })}
            </div>

            {/* Bottom Node Grid Pills */}
            <div className="mt-4 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-2">
              {globalNodes.map((node) => {
                const isSelected = selectedNode?.id === node.id;
                return (
                  <button
                    key={node.id}
                    onClick={() => setSelectedNode(node)}
                    className={`py-2 px-2.5 rounded-lg text-left transition-all border text-xs font-mono truncate cursor-pointer ${
                      isSelected
                        ? 'bg-neutral-800 border-orange-500/80 text-white'
                        : 'bg-neutral-950/50 hover:bg-neutral-800/40 border-neutral-800 text-neutral-400'
                    }`}
                  >
                    <div className="font-semibold truncate">{node.city}</div>
                    <div className="text-[10px] text-neutral-400 truncate">
                      {node.latency}ms ping
                    </div>
                  </button>
                );
              })}
            </div>
          </div>

          {/* RIGHT: Selected Node Deep-Dive Inspector Card */}
          <div className="lg:col-span-4">
            <div className="rounded-2xl bg-neutral-900 border border-neutral-800 p-6 shadow-2xl space-y-5">
              <div className="flex items-center justify-between pb-3 border-b border-neutral-800">
                <div className="flex items-center gap-2">
                  <Building2 className="w-4 h-4 text-orange-500" />
                  <span className="text-xs font-mono uppercase tracking-wider text-neutral-400">
                    Location Inspector
                  </span>
                </div>
                <span className="px-2 py-0.5 rounded text-[10px] font-mono font-medium bg-neutral-800 text-emerald-400">
                  {selectedNode?.type}
                </span>
              </div>

              <div>
                <h3 className="text-2xl font-bold text-white flex items-center gap-2">
                  {selectedNode?.city}
                </h3>
                <div className="text-xs font-mono text-neutral-400 mt-0.5">
                  {selectedNode?.country} · {selectedNode?.region}
                </div>
              </div>

              <p className="text-xs text-neutral-300 leading-relaxed">
                {selectedNode?.details}
              </p>

              {/* Node Telemetry Specs */}
              <div className="space-y-2 pt-2 border-t border-neutral-800 font-mono text-xs">
                <div className="p-3 rounded-xl bg-neutral-950 border border-neutral-800 flex items-center justify-between">
                  <span className="text-neutral-400">Network Latency</span>
                  <span className="text-emerald-400 font-bold tabular-nums">
                    {selectedNode?.latency}ms (Ultra-Low)
                  </span>
                </div>

                <div className="p-3 rounded-xl bg-neutral-950 border border-neutral-800 flex items-center justify-between">
                  <span className="text-neutral-400">Active SaaS Microservices</span>
                  <span className="text-white font-bold tabular-nums">
                    {selectedNode?.activeServices} Pods
                  </span>
                </div>

                <div className="p-3 rounded-xl bg-neutral-950 border border-neutral-800 flex items-center justify-between">
                  <span className="text-neutral-400">Regional Gateway Tier</span>
                  <span className="text-cyan-400 font-semibold">Tier-4 Datacenter</span>
                </div>
              </div>

              <div className="p-3 rounded-xl bg-orange-500/10 border border-orange-500/20 text-xs text-orange-300">
                {selectedNode?.city === 'Dhaka HQ' ? (
                  <span>
                    ⭐ <strong>Dhaka Master Foundry:</strong> Housing our core product designers, Django backend engineers, and venture operators.
                  </span>
                ) : (
                  <span>
                    🌐 <strong>Edge Ingress:</strong> Synchronized with our primary Dhaka foundry over encrypted Fiber backbones.
                  </span>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
