import React, { useState } from 'react';
import { useApp } from '../../Context/AppContext';
import { SKzLabLogo } from './SKzLabLogo';
import {
  Shield,
  ArrowRight,
  RotateCcw,
  Sparkles,
  CheckCircle2,
  Mail,
  Send,
  Github,
  Twitter,
  Linkedin,
  Globe
} from 'lucide-react';

export const Footer = () => {
  const {
    replayPreloader,
    setIsAdminOpen,
    setIsContactModalOpen,
    setContactChannel,
    setIsPaletteModalOpen
  } = useApp();

  const [emailInput, setEmailInput] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (!emailInput.trim()) return;
    setSubscribed(true);
    setTimeout(() => {
      setEmailInput('');
      setSubscribed(false);
    }, 3000);
  };

  return (
    <footer className="bg-neutral-950 text-neutral-400 border-t border-neutral-800/80 pt-16 pb-12 relative overflow-hidden">
      {/* Background ambient gradient */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[250px] bg-gradient-to-t from-orange-500/5 via-cyan-500/5 to-transparent blur-3xl pointer-events-none rounded-full" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-14">
        {/* Top Grid: Brand + Columns + Newsletter */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">
          {/* Brand info */}
          <div className="lg:col-span-2 space-y-4">
            <SKzLabLogo size="lg" showSubtitle={true} />
            <p className="text-sm text-neutral-400 max-w-sm leading-relaxed mt-2">
              Next-generation SaaS product foundry and high-velocity engineering venture studio. We architect, incubate, and scale mission-critical digital systems for global scale.
            </p>
            <div className="flex items-center gap-3 pt-2">
              <a
                href="https://github.com"
                target="_blank"
                rel="noreferrer"
                className="p-2 rounded-lg bg-neutral-900 border border-neutral-800 text-neutral-400 hover:text-white hover:border-neutral-700 transition-colors"
                aria-label="GitHub"
              >
                <Github className="w-4 h-4" />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noreferrer"
                className="p-2 rounded-lg bg-neutral-900 border border-neutral-800 text-neutral-400 hover:text-white hover:border-neutral-700 transition-colors"
                aria-label="Twitter / X"
              >
                <Twitter className="w-4 h-4" />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noreferrer"
                className="p-2 rounded-lg bg-neutral-900 border border-neutral-800 text-neutral-400 hover:text-white hover:border-neutral-700 transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Column 1: Ecosystem */}
          <div className="space-y-3">
            <h4 className="text-xs font-mono uppercase tracking-[0.2em] text-neutral-200 font-semibold">
              Ecosystem
            </h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#launches" className="hover:text-orange-400 transition-colors">
                  Flagship Launches
                </a>
              </li>
              <li>
                <a href="#architecture" className="hover:text-orange-400 transition-colors">
                  System Architecture
                </a>
              </li>
              <li>
                <a href="#products" className="hover:text-orange-400 transition-colors">
                  Product Catalog
                </a>
              </li>
              <li>
                <a href="#units" className="hover:text-orange-400 transition-colors">
                  Business Divisions
                </a>
              </li>
              <li>
                <a href="#presence" className="hover:text-orange-400 transition-colors">
                  Global Edge Nodes
                </a>
              </li>
            </ul>
          </div>

          {/* Column 2: Studio Access */}
          <div className="space-y-3">
            <h4 className="text-xs font-mono uppercase tracking-[0.2em] text-neutral-200 font-semibold">
              Foundry Access
            </h4>
            <ul className="space-y-2 text-sm">
              <li>
                <button
                  onClick={() => setIsAdminOpen(true)}
                  className="flex items-center gap-1.5 hover:text-orange-400 transition-colors text-left"
                >
                  <Shield className="w-3.5 h-3.5 text-orange-500" />
                  <span>Admin Console</span>
                </button>
              </li>
              <li>
                <button
                  onClick={() => setIsPaletteModalOpen(true)}
                  className="hover:text-cyan-400 transition-colors text-left"
                >
                  Brand Palette Editor
                </button>
              </li>
              <li>
                <button
                  onClick={() => replayPreloader()}
                  className="flex items-center gap-1.5 hover:text-white transition-colors text-left"
                >
                  <RotateCcw className="w-3 h-3 text-neutral-500" />
                  <span>Replay Preloader</span>
                </button>
              </li>
              <li>
                <button
                  onClick={() => {
                    setContactChannel('whatsapp');
                    setIsContactModalOpen(true);
                  }}
                  className="hover:text-emerald-400 transition-colors text-left"
                >
                  WhatsApp Fast-Track
                </button>
              </li>
            </ul>
          </div>

          {/* Column 3: Dispatch & Newsletter */}
          <div className="space-y-3">
            <h4 className="text-xs font-mono uppercase tracking-[0.2em] text-neutral-200 font-semibold">
              Architectural Dispatch
            </h4>
            <p className="text-xs text-neutral-400 leading-relaxed">
              Bi-weekly engineering memos on distributed microservices, AI pipelines, and SaaS venture telemetry.
            </p>
            <form onSubmit={handleSubscribe} className="space-y-2">
              <div className="relative">
                <input
                  type="email"
                  placeholder="architect@domain.com"
                  value={emailInput}
                  onChange={(e) => setEmailInput(e.target.value)}
                  className="w-full bg-neutral-900 border border-neutral-800 rounded-lg px-3 py-2 text-xs text-white placeholder-neutral-500 focus:outline-none focus:border-orange-500 transition-colors"
                />
                <button
                  type="submit"
                  className="absolute right-1 top-1 bottom-1 px-2.5 bg-orange-600 hover:bg-orange-500 text-white rounded text-xs flex items-center justify-center transition-colors"
                  aria-label="Subscribe"
                >
                  <Send className="w-3 h-3" />
                </button>
              </div>
              {subscribed && (
                <div className="flex items-center gap-1.5 text-[11px] text-emerald-400">
                  <CheckCircle2 className="w-3 h-3" />
                  <span>Subscribed to SKz LAB Dispatches.</span>
                </div>
              )}
            </form>
          </div>
        </div>

        {/* Bottom Bar: Copyright, Telemetry Status & Legal */}
        <div className="pt-8 border-t border-neutral-900 flex flex-col sm:flex-row items-center justify-between text-xs text-neutral-400 gap-4">
          <div className="flex items-center gap-2">
            <span className="inline-block w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
            <span className="font-mono text-neutral-400">
              Foundry Edge: Operational · All 6 Nodes Healthy
            </span>
          </div>

          <div className="text-center sm:text-right">
            <span>© {new Date().getFullYear()} SKz LAB Inc. Engineered with architectural precision.</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
