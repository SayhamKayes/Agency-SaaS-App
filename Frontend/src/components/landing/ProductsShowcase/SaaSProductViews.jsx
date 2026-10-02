import React, { useState } from 'react';
import { ShowcaseCardImage } from './ShowcaseCardImage';
import {
  ArrowRight,
  ArrowLeft,
  CheckCircle2,
  TrendingUp,
  Activity,
  Cpu,
  Layers,
  Database,
  ExternalLink,
  ShieldCheck,
  ShoppingBag,
  Zap,
  Server,
  Clock,
  Sparkles,
  Users,
  CreditCard,
  Check
} from 'lucide-react';

export const SaaSGridView = ({ products, onSelectProduct, onViewMore }) => {
  return (
    <div className="space-y-4">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-3.5">
        {products.map((product) => {
          return (
            <div
              key={product.id}
              onClick={() => onSelectProduct(product)}
              className="group rounded-2xl bg-neutral-950 border border-neutral-800 hover:border-neutral-700 transition-all duration-300 flex flex-col justify-between hover:-translate-y-1 shadow-xl hover:shadow-2xl cursor-pointer relative overflow-hidden h-[345px]"
            >
              {/* Subtle top color accent line */}
              <div
                className="absolute top-0 left-0 right-0 h-1 z-20"
                style={{ backgroundColor: product.accentColor || '#F05A28' }}
              />

              {/* Floating Top Category & Status Badges */}
              <div className="absolute top-3 left-3 right-3 z-20 flex items-center justify-between pointer-events-none">
                <span className="px-2 py-0.5 rounded-full text-[9px] font-mono bg-black/75 backdrop-blur-md text-neutral-300 border border-white/10">
                  {product.category}
                </span>
                <span className="px-2 py-0.5 rounded-full text-[9px] font-mono bg-emerald-500/15 backdrop-blur-md text-emerald-400 border border-emerald-500/25 flex items-center gap-1">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                  {product.status}
                </span>
              </div>

              {/* Main Screenshot / Image Area */}
              <div className="flex-1 w-full relative overflow-hidden bg-neutral-950 flex items-center justify-center">
                <ShowcaseCardImage
                  src={product.image}
                  alt={product.name}
                  accentColor={product.accentColor}
                  category={product.category}
                  title={product.name}
                  className="w-full h-full"
                />
              </div>

              {/* Bottom Attached Product Name & Action Bar */}
              <div className="p-3.5 bg-neutral-900/95 border-t border-neutral-800/80 flex items-center justify-between gap-3 shrink-0">
                <div className="min-w-0">
                  <h4 className="text-sm font-bold text-white group-hover:text-emerald-400 transition-colors truncate">
                    {product.name}
                  </h4>
                  <div className="text-[10px] font-mono text-neutral-400 flex items-center gap-2 mt-0.5">
                    <span>SaaS Engine</span>
                    <span>·</span>
                    <span className="text-emerald-400 font-semibold">{product.uptime} Uptime</span>
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

      {/* View More Products Button */}
      <div className="flex flex-col sm:flex-row items-center justify-between p-3.5 rounded-2xl bg-neutral-950/70 border border-neutral-800/80 gap-3">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 rounded-xl bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 flex items-center justify-center">
            <Layers className="w-4 h-4" />
          </div>
          <div>
            <div className="text-xs font-semibold text-white">Looking for custom microservices?</div>
            <div className="text-[11px] text-neutral-400">Discover 4+ additional incubated SaaS architectures in our catalog.</div>
          </div>
        </div>

        <button
          onClick={onViewMore}
          className="px-4 py-2 rounded-xl text-xs font-semibold text-white bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-500 hover:to-teal-500 transition-all flex items-center gap-1.5 shadow-lg shadow-emerald-950/40 cursor-pointer shrink-0"
        >
          <span>View More Products</span>
          <ArrowRight className="w-3.5 h-3.5" />
        </button>
      </div>
    </div>
  );
};

export const SaaSLandingView = ({ product, onOpenContact }) => {
  const [cartCount, setCartCount] = useState(0);

  return (
    <div className="space-y-6">
      {/* Storefront / Product Hero Banner */}
      <div className="relative rounded-2xl bg-gradient-to-br from-neutral-900 via-neutral-950 to-neutral-900 border border-neutral-800 p-6 overflow-hidden">
        <div
          className="absolute -right-20 -top-20 w-64 h-64 rounded-full opacity-20 pointer-events-none blur-3xl"
          style={{ backgroundColor: product.accentColor || '#F05A28' }}
        />

        <div className="relative z-10 max-w-xl space-y-3">
          <div className="inline-flex items-center gap-2 px-2.5 py-0.5 rounded-full text-[10px] font-mono bg-white/5 border border-white/10 text-white">
            <Sparkles className="w-3 h-3 text-amber-400" />
            <span>Autonomous Storefront Engine v2.6</span>
          </div>

          <h3 className="text-2xl font-extrabold text-white tracking-tight">
            {product.name}
          </h3>

          <p className="text-xs text-neutral-300 leading-relaxed">
            {product.description}
          </p>

          <div className="flex flex-wrap gap-2 pt-2">
            <button
              onClick={onOpenContact}
              className="px-4 py-2 rounded-xl text-xs font-semibold text-white transition-all flex items-center gap-1.5 cursor-pointer shadow-md"
              style={{ backgroundColor: product.accentColor || '#F05A28' }}
            >
              <span>Deploy Live Instance</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
            <div className="px-3 py-2 rounded-xl text-xs font-mono text-neutral-300 bg-neutral-900 border border-neutral-800 flex items-center gap-2">
              <ShoppingBag className="w-3.5 h-3.5 text-emerald-400" />
              <span>Simulated Cart: {cartCount} items</span>
            </div>
          </div>
        </div>
      </div>

      {/* Interactive Products Showcase Shelf */}
      <div className="space-y-3">
        <div className="flex items-center justify-between text-xs font-mono text-neutral-400">
          <span>Live Catalog & Instant Checkout Demo</span>
          <span className="text-emerald-400 text-[10px]">SUB-100MS LATENCY</span>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
          {[
            { name: 'UltraMesh Core Gateway', sku: 'SKZ-MOD-01', price: '$189.00', tag: 'Microservice' },
            { name: 'CloudPulse Telemetry Pod', sku: 'SKZ-POD-09', price: '$249.00', tag: 'Edge Node' },
            { name: 'Neural Intent Copilot API', sku: 'SKZ-AI-44', price: '$390.00', tag: 'Enterprise' }
          ].map((item, idx) => (
            <div
              key={idx}
              className="p-3.5 rounded-xl bg-neutral-950 border border-neutral-800 flex flex-col justify-between gap-3"
            >
              <div>
                <span className="text-[9px] font-mono px-2 py-0.5 rounded bg-neutral-900 text-neutral-400">
                  {item.tag}
                </span>
                <div className="text-xs font-bold text-white mt-1.5">{item.name}</div>
                <div className="text-[10px] font-mono text-neutral-400">{item.sku}</div>
              </div>

              <div className="flex items-center justify-between pt-2 border-t border-neutral-900">
                <span className="text-xs font-mono font-bold text-emerald-400">{item.price}</span>
                <button
                  onClick={() => setCartCount((prev) => prev + 1)}
                  className="px-2.5 py-1 rounded-lg text-[10px] font-medium bg-neutral-900 hover:bg-emerald-500/20 text-neutral-200 hover:text-emerald-300 border border-neutral-800 transition-colors cursor-pointer"
                >
                  + Add to Cart
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export const SaaSAdminView = ({ product }) => {
  return (
    <div className="space-y-5 font-sans">
      {/* Real-time stats widgets */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 font-mono">
        <div className="p-3.5 rounded-xl bg-neutral-950 border border-neutral-800">
          <div className="text-[10px] text-neutral-400">Monthly Run Rate</div>
          <div className="text-lg font-bold text-white mt-1 tabular-nums">
            {product.mrr}
          </div>
        </div>
        <div className="p-3.5 rounded-xl bg-neutral-950 border border-neutral-800">
          <div className="text-[10px] text-neutral-400">Active Operators</div>
          <div className="text-lg font-bold text-cyan-400 mt-1 tabular-nums">
            {product.activeUsers}
          </div>
        </div>
        <div className="p-3.5 rounded-xl bg-neutral-950 border border-neutral-800">
          <div className="text-[10px] text-neutral-400">Production SLA</div>
          <div className="text-lg font-bold text-emerald-400 mt-1 tabular-nums">
            {product.uptime}
          </div>
        </div>
        <div className="p-3.5 rounded-xl bg-neutral-950 border border-neutral-800">
          <div className="text-[10px] text-neutral-400">Throughput</div>
          <div className="text-lg font-bold text-orange-400 mt-1 tabular-nums">
            4.2k req/s
          </div>
        </div>
      </div>

      {/* Live Stream Simulation Box */}
      <div className="rounded-xl bg-neutral-950 border border-neutral-800 p-4 space-y-2">
        <div className="flex items-center justify-between text-[11px] font-mono text-neutral-400 mb-2">
          <span className="flex items-center gap-2">
            <Activity className="w-3.5 h-3.5 text-emerald-400 animate-pulse" />
            <span>Asynchronous Event Dispatch Stream (Django & Celery)</span>
          </span>
          <span className="text-neutral-400">LIVE WEBSOCKET</span>
        </div>

        <div className="space-y-1.5 font-mono text-[11px]">
          <div className="p-2 rounded bg-neutral-900/80 border border-neutral-800 flex items-center justify-between">
            <span className="text-neutral-300">
              [EVENT_091] · Transaction batch #TX-98442 cleared via Redis lock
            </span>
            <span className="text-emerald-400">0.08ms</span>
          </div>
          <div className="p-2 rounded bg-neutral-900/80 border border-neutral-800 flex items-center justify-between">
            <span className="text-neutral-300">
              [DISPATCH_GEO] · Nearest courier node assigned to parcel #PCL-770
            </span>
            <span className="text-cyan-400">14ms</span>
          </div>
          <div className="p-2 rounded bg-neutral-900/80 border border-neutral-800 flex items-center justify-between">
            <span className="text-neutral-300">
              [AI_GUARD] · Gemini cognitive prompt validated with 0 policy flags
            </span>
            <span className="text-purple-400">112ms</span>
          </div>
        </div>
      </div>

      {/* Tech Foundations & Security Row */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
        <div className="p-4 rounded-xl bg-neutral-950 border border-neutral-800 space-y-1">
          <div className="flex items-center gap-2 text-xs font-mono text-emerald-400 font-semibold">
            <ShieldCheck className="w-4 h-4" />
            <span>Tenant Isolation Guard</span>
          </div>
          <p className="text-xs text-neutral-400 leading-relaxed">
            Row-level PostgreSQL security with encrypted tenant keys ensures zero cross-tenant data leakage.
          </p>
        </div>

        <div className="p-4 rounded-xl bg-neutral-950 border border-neutral-800 space-y-1">
          <div className="flex items-center gap-2 text-xs font-mono text-cyan-400 font-semibold">
            <Database className="w-4 h-4" />
            <span>Automated Disaster Snapshots</span>
          </div>
          <p className="text-xs text-neutral-400 leading-relaxed">
            Continuous point-in-time database WAL streaming with 5-minute recovery point objective (RPO).
          </p>
        </div>
      </div>
    </div>
  );
};

export const SaaSUserView = ({ product }) => {
  return (
    <div className="space-y-4 font-sans">
      {/* Customer Account Header */}
      <div className="p-4 rounded-2xl bg-neutral-950 border border-neutral-800 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-full bg-neutral-800 border border-neutral-700 text-white font-bold flex items-center justify-center text-sm">
            JD
          </div>
          <div>
            <div className="text-sm font-bold text-white">Johnathan Doe</div>
            <div className="text-xs text-neutral-400">Enterprise Subscriber · ID: #ENT-9011</div>
          </div>
        </div>

        <span className="px-3 py-1 rounded-full text-[11px] font-mono bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 flex items-center gap-1.5">
          <CheckCircle2 className="w-3.5 h-3.5" />
          <span>Active Enterprise License</span>
        </span>
      </div>

      {/* Active Order / Task Tracker Timeline */}
      <div className="p-5 rounded-2xl bg-neutral-950 border border-neutral-800 space-y-4">
        <div className="flex items-center justify-between text-xs">
          <span className="font-bold text-white flex items-center gap-2">
            <Zap className="w-4 h-4 text-amber-400" />
            <span>Order #SKZ-89410 (Headless Cluster Provision)</span>
          </span>
          <span className="text-emerald-400 font-mono text-[11px]">DISPATCHED</span>
        </div>

        <div className="grid grid-cols-4 gap-2 text-center text-[10px] font-mono pt-1">
          <div className="space-y-1">
            <div className="h-1 bg-emerald-500 rounded-full" />
            <span className="text-emerald-400 font-semibold">1. Verified</span>
          </div>
          <div className="space-y-1">
            <div className="h-1 bg-emerald-500 rounded-full" />
            <span className="text-emerald-400 font-semibold">2. Built</span>
          </div>
          <div className="space-y-1">
            <div className="h-1 bg-emerald-500 rounded-full animate-pulse" />
            <span className="text-emerald-400 font-semibold">3. Routing</span>
          </div>
          <div className="space-y-1">
            <div className="h-1 bg-neutral-800 rounded-full" />
            <span className="text-neutral-500">4. Live Hub</span>
          </div>
        </div>

        <div className="p-3 rounded-xl bg-neutral-900 border border-neutral-800 flex items-center justify-between text-xs">
          <div className="flex items-center gap-2">
            <Clock className="w-4 h-4 text-cyan-400" />
            <span className="text-neutral-300">Estimated Delivery to Cluster: <strong className="text-white">12 Minutes</strong></span>
          </div>
          <span className="text-neutral-400 font-mono text-[10px]">Node: banani-edge-01</span>
        </div>
      </div>

      {/* Invoices List */}
      <div className="p-4 rounded-2xl bg-neutral-950 border border-neutral-800 space-y-2">
        <div className="text-xs font-semibold text-white mb-2">Recent Invoices & Receipts</div>
        {[
          { date: 'Oct 01, 2026', inv: 'INV-2026-091', total: '$1,450.00', status: 'Paid' },
          { date: 'Sep 01, 2026', inv: 'INV-2026-084', total: '$1,450.00', status: 'Paid' }
        ].map((inv, idx) => (
          <div key={idx} className="p-2.5 rounded-xl bg-neutral-900/60 border border-neutral-800 flex items-center justify-between text-xs">
            <div>
              <span className="font-mono text-white">{inv.inv}</span>
              <span className="text-neutral-400 ml-3 text-[11px]">{inv.date}</span>
            </div>
            <div className="flex items-center gap-3">
              <span className="font-mono font-bold text-white">{inv.total}</span>
              <span className="text-emerald-400 text-[10px] font-mono px-2 py-0.5 rounded bg-emerald-500/10">
                {inv.status}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
