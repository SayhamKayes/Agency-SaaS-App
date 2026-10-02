import React, { useState } from 'react';
import { useApp } from '../../../Context/AppContext';
import {
  Code2,
  Cpu,
  Server,
  Rocket,
  ArrowRight,
  CheckCircle2,
  Users,
  Award
} from 'lucide-react';

export const BusinessUnitsSection = () => {
  const { businessUnits, setIsContactModalOpen, setContactChannel } = useApp();
  const [hoveredUnitId, setHoveredUnitId] = useState(businessUnits[0]?.id || 'unit-saas-foundry');

  const getIcon = (iconName) => {
    switch (iconName) {
      case 'Code2':
        return Code2;
      case 'Cpu':
        return Cpu;
      case 'Server':
        return Server;
      default:
        return Rocket;
    }
  };

  return (
    <section id="units" className="py-24 relative overflow-hidden bg-neutral-950 border-b border-neutral-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-14 gap-6">
          <div>
            <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-[0.2em] text-orange-500 mb-2">
              <span>05</span>
              <span>·</span>
              <span>ORGANIZATIONAL DIVISIONS</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight [text-wrap:balance]">
              Our Business Units: Specialized Engineering Divisions.
            </h2>
            <p className="mt-2 text-neutral-400 max-w-xl text-base">
              Hover over each business unit to inspect dedicated capabilities, specialized talent pools,
              and flagship SaaS systems.
            </p>
          </div>

          <span className="text-xs font-mono text-neutral-400">
            DISCIPLINED DIVISION ARCHITECTURE
          </span>
        </div>

        {/* Business Units Interactive Accordion / Hover Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {businessUnits.map((unit) => {
            const isHovered = hoveredUnitId === unit.id;
            const IconComponent = getIcon(unit.iconName);

            return (
              <div
                key={unit.id}
                onMouseEnter={() => setHoveredUnitId(unit.id)}
                className={`group rounded-2xl p-6 transition-all duration-300 border flex flex-col justify-between cursor-pointer relative overflow-hidden ${
                  isHovered
                    ? 'bg-neutral-900 border-neutral-600 shadow-2xl scale-[1.02]'
                    : 'bg-neutral-950/70 hover:bg-neutral-900/50 border-neutral-800/80'
                }`}
                style={{
                  borderTopWidth: '4px',
                  borderTopColor: isHovered ? 'var(--color-primary, #F05A28)' : 'transparent'
                }}
              >
                {/* Background Accent Glow on Active Hover */}
                {isHovered && (
                  <div className="absolute top-0 right-0 w-32 h-32 bg-orange-500/10 blur-2xl rounded-full pointer-events-none" />
                )}

                <div className="space-y-4 relative z-10">
                  {/* Top Icon & Subtitle */}
                  <div className="flex items-center justify-between">
                    <div
                      className={`w-12 h-12 rounded-xl flex items-center justify-center transition-colors ${
                        isHovered
                          ? 'bg-orange-500 text-white'
                          : 'bg-neutral-900 text-neutral-400 group-hover:text-white'
                      }`}
                    >
                      <IconComponent className="w-6 h-6" />
                    </div>

                    <span className="text-[10px] font-mono uppercase tracking-wider text-neutral-400">
                      {unit.subtitle}
                    </span>
                  </div>

                  {/* Title & Tagline */}
                  <div>
                    <h3 className="text-xl font-bold text-white group-hover:text-orange-400 transition-colors">
                      {unit.title}
                    </h3>
                    <p className="text-xs text-neutral-400 mt-1.5 line-clamp-2 leading-relaxed">
                      {unit.tagline}
                    </p>
                  </div>

                  {/* Description */}
                  <p className="text-xs text-neutral-300 leading-relaxed pt-2 border-t border-neutral-800/80">
                    {unit.description}
                  </p>

                  {/* Dynamic Capabilities Reveal on Hover */}
                  <div className="space-y-1.5 pt-2">
                    <div className="text-[11px] font-mono text-neutral-400 font-semibold uppercase tracking-wider">
                      Core Disciplines:
                    </div>
                    {unit.capabilities.map((cap, i) => (
                      <div
                        key={i}
                        className="flex items-center gap-2 text-xs text-neutral-300"
                      >
                        <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400 shrink-0" />
                        <span className="truncate">{cap}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Bottom Metadata & Flagship */}
                <div className="pt-6 mt-6 border-t border-neutral-800 space-y-3 relative z-10">
                  <div className="flex items-center justify-between text-xs font-mono text-neutral-400">
                    <span className="flex items-center gap-1.5">
                      <Users className="w-3.5 h-3.5 text-orange-400" />
                      <span>{unit.teamSize}</span>
                    </span>
                  </div>

                  <div className="p-2.5 rounded-lg bg-neutral-950 border border-neutral-800/80 text-[11px] font-mono">
                    <div className="text-neutral-400">Flagship Asset:</div>
                    <div className="text-white font-semibold truncate mt-0.5">
                      {unit.flagship}
                    </div>
                  </div>

                  <button
                    onClick={() => {
                      setContactChannel('whatsapp');
                      setIsContactModalOpen(true);
                    }}
                    className={`w-full py-2 px-3 rounded-lg text-xs font-medium transition-all flex items-center justify-center gap-1.5 cursor-pointer ${
                      isHovered
                        ? 'bg-neutral-800 hover:bg-neutral-700 text-white'
                        : 'bg-neutral-950 text-neutral-400 hover:text-white'
                    }`}
                  >
                    <span>Engage Division</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
