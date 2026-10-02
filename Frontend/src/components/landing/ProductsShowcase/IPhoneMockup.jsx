import React, { useState } from 'react';
import {
  Wifi,
  Battery,
  MapPin,
  Navigation,
  CreditCard,
  Heart,
  Flame,
  CheckCircle2,
  Clock,
  ArrowUpRight,
  ShieldCheck,
  Zap,
  TrendingUp,
  Activity,
  PhoneCall,
  Sparkles
} from 'lucide-react';

export const IPhoneMockup = ({ activeApp }) => {
  const screens = activeApp?.screens || [];
  const defaultTab = screens[0]?.id || 'trip';

  // Synchronously ensure activeScreenTab always belongs to activeApp's screens
  const [selectedTab, setSelectedTab] = useState(defaultTab);
  const activeScreenTab = screens.some((s) => s.id === selectedTab) ? selectedTab : defaultTab;

  // Reset tab when activeApp changes
  React.useEffect(() => {
    if (screens.length > 0) {
      setSelectedTab(screens[0].id);
    }
  }, [activeApp?.id]);

  const hasValidLiveUrl = Boolean(
    activeApp?.liveUrl &&
    typeof activeApp.liveUrl === 'string' &&
    (activeApp.liveUrl.startsWith('http://') || activeApp.liveUrl.startsWith('https://'))
  );

  return (
    <div className="flex flex-col items-center justify-center select-none py-1">
      {/* Outer Phone Shell with Titanium Bezel - Adjusted Height to ~385px */}
      <div className="relative w-[245px] sm:w-[260px] h-[435px] bg-neutral-950 rounded-[40px] p-2.5 border-[4px] border-neutral-700/90 shadow-[0_0_0_2px_rgba(255,255,255,0.06),0_20px_50px_-10px_rgba(0,0,0,0.95)] transition-transform duration-300">
        {/* Subtle Outer Hardware Buttons */}
        <div className="absolute -left-[6px] top-18 w-[3px] h-6 bg-neutral-700 rounded-l-sm" />
        <div className="absolute -left-[6px] top-28 w-[3px] h-8 bg-neutral-700 rounded-l-sm" />
        <div className="absolute -left-[6px] top-38 w-[3px] h-8 bg-neutral-700 rounded-l-sm" />
        <div className="absolute -right-[6px] top-24 w-[3px] h-10 bg-neutral-700 rounded-r-sm" />

        {/* Screen Display Container */}
        <div className="w-full h-full bg-black rounded-[32px] overflow-hidden flex flex-col relative border border-neutral-900 shadow-inner">
          {/* Top Status Bar & Dynamic Island */}
          <div className="pt-2 px-4 pb-1 flex items-center justify-between text-[9px] font-medium text-white/90 z-30 shrink-0">
            {/* Clock */}
            <span className="font-semibold tracking-tight">9:41</span>

            {/* Compact Dynamic Island */}
            <div className="h-4.5 w-18 bg-black rounded-full border border-neutral-800 flex items-center justify-between px-2 shadow-sm">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
              <div className="flex items-center gap-0.5">
                <span className="w-0.5 h-1.5 bg-neutral-500 rounded-full animate-bounce" />
                <span className="w-0.5 h-2 bg-emerald-400 rounded-full" />
                <span className="w-0.5 h-1 bg-neutral-500 rounded-full" />
              </div>
              <div className="w-1.5 h-1.5 rounded-full bg-neutral-700" />
            </div>

            {/* Status Icons */}
            <div className="flex items-center gap-1 text-white/80">
              <span className="text-[8px] font-mono">5G</span>
              <Wifi className="w-2.5 h-2.5" />
              <Battery className="w-3 h-3 fill-white" />
            </div>
          </div>

          {/* Sub-Screen Selector Tabs inside iPhone */}
          <div className="px-2 pt-0.5 pb-1.5 flex items-center justify-center gap-1 z-20 shrink-0">
            {screens.map((screen) => (
              <button
                key={screen.id}
                onClick={() => setSelectedTab(screen.id)}
                className={`px-2 py-0.5 rounded-full text-[9px] font-medium transition-all cursor-pointer ${activeScreenTab === screen.id
                  ? 'bg-white text-black font-semibold shadow-sm'
                  : 'bg-neutral-900/80 text-neutral-400 hover:text-white'
                  }`}
              >
                {screen.label}
              </button>
            ))}
          </div>

          {/* App Screen Content Body (Scrollable & Interactive with hidden mobile scrollbar) */}
          <div className="flex-1 overflow-y-auto px-3 py-1 text-white space-y-2 font-sans scrollbar-none [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden">
            {hasValidLiveUrl ? (
              <iframe
                src={activeApp.liveUrl}
                title={activeApp.name}
                className="w-full h-full border-0 pointer-events-auto bg-black rounded-xl"
                sandbox="allow-scripts allow-same-origin allow-forms allow-popups"
                loading="lazy"
              />
            ) : (
              <>
                {/* APP 1: CourierPulse Go */}
                {(activeApp?.id === 'app-courier-go' || (!activeApp?.id?.includes('skz-pay') && !activeApp?.id?.includes('fitflow'))) && (
                  <>
                    {activeScreenTab === 'trip' && (
                      <div className="space-y-2">
                        {/* Simulated Radar Route Map Card */}
                        <div className="h-32 rounded-xl bg-gradient-to-br from-neutral-900 to-neutral-950 border border-neutral-800 relative overflow-hidden p-2 flex flex-col justify-between">
                          <div className="absolute inset-0 opacity-20 bg-[radial-gradient(#00A8C6_1px,transparent_1px)] [background-size:10px_10px]" />

                          {/* Animated Route Line */}
                          <div className="relative z-10 flex items-center justify-between text-[9px] font-mono">
                            <span className="px-1.5 py-0.5 rounded-full bg-cyan-500/20 text-cyan-300 border border-cyan-500/30 flex items-center gap-1">
                              <Navigation className="w-2.5 h-2.5 animate-spin" />
                              <span>EN ROUTE · 1.4 km</span>
                            </span>
                            <span className="text-neutral-400">ETA 4M</span>
                          </div>

                          {/* Map Pins Simulation */}
                          <div className="relative z-10 flex items-center justify-between px-2">
                            <div className="flex flex-col items-center">
                              <div className="w-5 h-5 rounded-full bg-cyan-500/20 border border-cyan-400 flex items-center justify-center">
                                <MapPin className="w-2.5 h-2.5 text-cyan-400" />
                              </div>
                              <span className="text-[8px] text-neutral-400">Hub</span>
                            </div>
                            <div className="flex-1 border-t-2 border-dashed border-cyan-500/50 mx-2 relative">
                              <div className="absolute -top-1 left-1/2 -translate-x-1/2 w-2 h-2 rounded-full bg-cyan-400 animate-ping" />
                            </div>
                            <div className="flex flex-col items-center">
                              <div className="w-5 h-5 rounded-full bg-emerald-500/20 border border-emerald-400 flex items-center justify-center">
                                <CheckCircle2 className="w-2.5 h-2.5 text-emerald-400" />
                              </div>
                              <span className="text-[8px] text-neutral-400">Target</span>
                            </div>
                          </div>

                          {/* Destination Card inside map */}
                          <div className="relative z-10 bg-black/80 backdrop-blur-md rounded-lg p-1.5 border border-white/10 flex items-center justify-between">
                            <div>
                              <div className="text-[9px] font-bold text-white">Order #CP-9812</div>
                              <div className="text-[8px] text-neutral-400">Banani 11, Suite 7A</div>
                            </div>
                            <div className="w-5 h-5 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center">
                              <PhoneCall className="w-2.5 h-2.5" />
                            </div>
                          </div>
                        </div>

                        {/* Rider Action Card */}
                        <div className="p-2 rounded-xl bg-neutral-900/90 border border-neutral-800 flex items-center justify-between">
                          <span className="text-[10px] text-neutral-400">Payout</span>
                          <span className="text-xs font-bold text-emerald-400">+$12.50</span>
                        </div>

                        <div className="w-full py-1.5 rounded-lg bg-gradient-to-r from-cyan-600 to-emerald-600 text-white font-semibold text-[10px] text-center flex items-center justify-center gap-1.5 cursor-pointer shadow-md">
                          <span>Swipe to Deliver</span>
                          <ArrowUpRight className="w-3 h-3" />
                        </div>
                      </div>
                    )}

                    {activeScreenTab === 'earnings' && (
                      <div className="space-y-2">
                        <div className="p-2.5 rounded-xl bg-gradient-to-br from-neutral-900 to-neutral-950 border border-neutral-800 text-center">
                          <div className="text-[8px] text-neutral-400 uppercase font-mono">Today's Payout</div>
                          <div className="text-xl font-extrabold text-white mt-0.5">$142.50</div>
                          <div className="mt-1 inline-flex items-center gap-1 px-1.5 py-0.5 rounded-full bg-emerald-500/10 text-emerald-400 text-[8px] font-mono">
                            <TrendingUp className="w-2.5 h-2.5" />
                            <span>+$38.00 vs Yesterday</span>
                          </div>
                        </div>

                        <div className="space-y-1">
                          {[
                            { time: '1:45 PM', id: '#CP-9810', amount: '$14.20' },
                            { time: '12:30 PM', id: '#CP-9804', amount: '$18.50' }
                          ].map((item, idx) => (
                            <div key={idx} className="p-1.5 rounded-lg bg-neutral-900/80 border border-neutral-800 flex items-center justify-between text-[10px]">
                              <div>
                                <div className="font-semibold text-white">{item.id}</div>
                                <div className="text-[8px] text-neutral-400">{item.time} · Delivered</div>
                              </div>
                              <span className="font-mono text-emerald-400 font-bold">{item.amount}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    )}

                    {activeScreenTab === 'profile' && (
                      <div className="space-y-2">
                        <div className="p-2.5 rounded-xl bg-neutral-900 border border-neutral-800 flex items-center gap-2">
                          <div className="w-9 h-9 rounded-full bg-cyan-500/20 border border-cyan-400 text-cyan-300 font-bold flex items-center justify-center text-xs">
                            RK
                          </div>
                          <div>
                            <div className="text-xs font-bold text-white">Rafiul Karim</div>
                            <div className="text-[9px] text-emerald-400 flex items-center gap-1 font-mono">
                              <CheckCircle2 className="w-2.5 h-2.5" />
                              <span>Elite Fleet Rider</span>
                            </div>
                            <div className="text-[9px] text-neutral-400">Rating: 4.98 ★ (412 trips)</div>
                          </div>
                        </div>

                        <div className="grid grid-cols-2 gap-1.5 text-center text-[10px]">
                          <div className="p-2 rounded-lg bg-neutral-900 border border-neutral-800">
                            <div className="text-neutral-400 text-[8px]">On-Time SLA</div>
                            <div className="font-bold text-white mt-0.5">99.4%</div>
                          </div>
                          <div className="p-2 rounded-lg bg-neutral-900 border border-neutral-800">
                            <div className="text-neutral-400 text-[8px]">Total Dist.</div>
                            <div className="font-bold text-cyan-400 mt-0.5">1,240 km</div>
                          </div>
                        </div>
                      </div>
                    )}
                  </>
                )}

                {/* APP 2: SKz Pay Mobile Wallet */}
                {activeApp?.id === 'app-skz-pay' && (
                  <>
                    {activeScreenTab === 'wallet' && (
                      <div className="space-y-2">
                        {/* Metallic Card */}
                        <div className="h-28 rounded-xl p-2.5 bg-gradient-to-tr from-neutral-900 via-neutral-800 to-orange-950/80 border border-white/10 shadow-lg relative overflow-hidden flex flex-col justify-between">
                          <div className="flex items-center justify-between">
                            <span className="text-[9px] font-mono uppercase tracking-wider text-orange-400 font-semibold">
                              SKz Titanium
                            </span>
                            <Zap className="w-3 h-3 text-orange-400 fill-orange-400" />
                          </div>

                          <div className="my-auto">
                            <div className="text-[8px] text-neutral-400 uppercase font-mono">Balance</div>
                            <div className="text-lg font-extrabold text-white mt-0.5">$8,450.20</div>
                          </div>

                          <div className="flex items-center justify-between text-[9px] font-mono text-neutral-300">
                            <span>•••• 4492</span>
                            <span>09/29</span>
                          </div>
                        </div>

                        {/* Quick Action Buttons */}
                        <div className="grid grid-cols-3 gap-1.5 text-center">
                          <div className="p-1.5 rounded-lg bg-neutral-900 border border-neutral-800 hover:border-orange-500/50 cursor-pointer">
                            <CreditCard className="w-3.5 h-3.5 mx-auto text-orange-400 mb-0.5" />
                            <span className="text-[8px] text-neutral-300">Tap to Pay</span>
                          </div>
                          <div className="p-1.5 rounded-lg bg-neutral-900 border border-neutral-800 hover:border-orange-500/50 cursor-pointer">
                            <ArrowUpRight className="w-3.5 h-3.5 mx-auto text-cyan-400 mb-0.5" />
                            <span className="text-[8px] text-neutral-300">Send</span>
                          </div>
                          <div className="p-1.5 rounded-lg bg-neutral-900 border border-neutral-800 hover:border-orange-500/50 cursor-pointer">
                            <ShieldCheck className="w-3.5 h-3.5 mx-auto text-emerald-400 mb-0.5" />
                            <span className="text-[8px] text-neutral-300">Freeze</span>
                          </div>
                        </div>
                      </div>
                    )}

                    {activeScreenTab === 'activity' && (
                      <div className="space-y-1">
                        <div className="text-[9px] font-medium text-neutral-400 px-1">Recent Activity</div>
                        {[
                          { title: 'Apple Store NYC', amount: '-$149.00' },
                          { title: 'Stripe Merchant', amount: '+$1,200.00', positive: true },
                          { title: 'Uber Technologies', amount: '-$18.50' }
                        ].map((tx, idx) => (
                          <div key={idx} className="p-1.5 rounded-lg bg-neutral-900/80 border border-neutral-800 flex items-center justify-between text-[10px]">
                            <span className="font-semibold text-white">{tx.title}</span>
                            <span className={`font-mono font-bold ${tx.positive ? 'text-emerald-400' : 'text-neutral-200'}`}>
                              {tx.amount}
                            </span>
                          </div>
                        ))}
                      </div>
                    )}

                    {activeScreenTab === 'security' && (
                      <div className="space-y-1.5">
                        <div className="p-2 rounded-xl bg-neutral-900 border border-neutral-800 space-y-1">
                          <div className="flex items-center justify-between text-[10px]">
                            <span className="font-medium text-white">Face ID Authentication</span>
                            <span className="text-emerald-400 text-[8px] font-mono">ACTIVE</span>
                          </div>
                          <p className="text-[8px] text-neutral-400">Zero-knowledge biometric enclave locks every transaction.</p>
                        </div>

                        <div className="p-2 rounded-xl bg-neutral-900 border border-neutral-800 space-y-1">
                          <div className="flex items-center justify-between text-[10px]">
                            <span className="font-medium text-white">Disposable CVV</span>
                            <span className="text-orange-400 text-[8px] font-mono">RESETS 4M</span>
                          </div>
                          <p className="text-[8px] text-neutral-400">Regenerates automatically after each single tap payment.</p>
                        </div>
                      </div>
                    )}
                  </>
                )}

                {/* APP 3: FitFlow AI Coach */}
                {activeApp?.id === 'app-fitflow' && (
                  <>
                    {activeScreenTab === 'workout' && (
                      <div className="space-y-2">
                        <div className="p-2.5 rounded-xl bg-gradient-to-br from-neutral-900 to-emerald-950/40 border border-emerald-500/20 flex items-center justify-between">
                          <div>
                            <div className="text-[8px] font-mono uppercase text-emerald-400 flex items-center gap-1">
                              <Activity className="w-2.5 h-2.5 animate-pulse text-red-500" />
                              <span>HEART RATE</span>
                            </div>
                            <div className="text-lg font-extrabold text-white mt-0.5 flex items-baseline gap-1">
                              <span>138</span>
                              <span className="text-[9px] text-neutral-400">BPM</span>
                            </div>
                            <div className="text-[8px] text-neutral-400">Zone 3 Aerobic</div>
                          </div>

                          <div className="w-12 h-12 rounded-full border-2 border-emerald-500/30 border-t-emerald-400 flex items-center justify-center p-0.5">
                            <Flame className="w-3.5 h-3.5 text-orange-400" />
                          </div>
                        </div>

                        <div className="p-2 rounded-xl bg-neutral-900 border border-neutral-800 space-y-1 text-[10px]">
                          <div className="flex items-center justify-between">
                            <span className="font-bold text-white">Barbell Deadlift (3/4)</span>
                            <span className="text-[8px] font-mono text-cyan-400">8 @ 120KG</span>
                          </div>
                          <div className="w-full bg-neutral-800 rounded-full h-1 overflow-hidden">
                            <div className="bg-emerald-400 h-full w-3/4 rounded-full" />
                          </div>
                          <div className="flex items-center justify-between text-[8px] text-neutral-400">
                            <span>Rest: 00:42</span>
                            <span className="text-emerald-400">Form: 98%</span>
                          </div>
                        </div>
                      </div>
                    )}

                    {activeScreenTab === 'plan' && (
                      <div className="space-y-1.5">
                        <div className="p-2 rounded-lg bg-neutral-900 border border-neutral-800 flex items-start gap-1.5">
                          <Sparkles className="w-3 h-3 text-emerald-400 shrink-0 mt-0.5" />
                          <div className="text-[10px]">
                            <div className="font-semibold text-white">Hypertrophy Day 4</div>
                            <p className="text-[8px] text-neutral-400">Optimized from 92% sleep recovery score.</p>
                          </div>
                        </div>

                        {['Romanian Deadlifts', 'Incline Dumbbell Press', 'Weighted Pull-ups'].map((ex, i) => (
                          <div key={i} className="p-1.5 rounded-lg bg-neutral-900/70 border border-neutral-800 flex items-center justify-between text-[9px]">
                            <span className="text-white">{ex}</span>
                            <span className="text-[8px] font-mono text-emerald-400">READY</span>
                          </div>
                        ))}
                      </div>
                    )}

                    {activeScreenTab === 'metrics' && (
                      <div className="grid grid-cols-2 gap-1.5 text-center text-[10px]">
                        <div className="p-2 rounded-lg bg-neutral-900 border border-neutral-800">
                          <div className="text-[8px] text-neutral-400">Active Burn</div>
                          <div className="font-bold text-orange-400 mt-0.5">540 kcal</div>
                        </div>
                        <div className="p-2 rounded-lg bg-neutral-900 border border-neutral-800">
                          <div className="text-[8px] text-neutral-400">VO2 Max</div>
                          <div className="font-bold text-cyan-400 mt-0.5">51.4</div>
                        </div>
                        <div className="p-2 rounded-lg bg-neutral-900 border border-neutral-800">
                          <div className="text-[8px] text-neutral-400">Recovery</div>
                          <div className="font-bold text-emerald-400 mt-0.5">94%</div>
                        </div>
                        <div className="p-2 rounded-lg bg-neutral-900 border border-neutral-800">
                          <div className="text-[8px] text-neutral-400">Streak</div>
                          <div className="font-bold text-white mt-0.5">18 Days</div>
                        </div>
                      </div>
                    )}
                  </>
                )}

                {/* Safety Fallback: if somehow no screen matches, display a clean fallback rather than blank space */}
                {!['app-courier-go', 'app-skz-pay', 'app-fitflow'].includes(activeApp?.id) && (
                  <div className="h-full flex flex-col items-center justify-center text-center p-4 space-y-2">
                    <div className="w-10 h-10 rounded-2xl bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 flex items-center justify-center mx-auto">
                      <Sparkles className="w-5 h-5" />
                    </div>
                    <div className="text-xs font-bold text-white">{activeApp?.name || 'Mobile Application'}</div>
                    <div className="text-[9px] text-neutral-400 font-mono">Native Mobile Runtime Ready</div>
                  </div>
                )}
              </>
            )}
          </div>

          {/* Bottom iPhone Home Indicator */}
          <div className="py-1 flex items-center justify-center shrink-0 z-30">
            <div className="w-20 h-0.5 bg-white/70 rounded-full" />
          </div>
        </div>
      </div>
    </div>
  );
};
