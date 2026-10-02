import React, { useState } from 'react';
import { useApp } from '../../Context/AppContext';
import { ShieldCheck, Cookie, Check, SlidersHorizontal } from 'lucide-react';

export const CookieBanner = () => {
  const { cookiePrefs, saveCookiePreferences } = useApp();
  const [showDetails, setShowDetails] = useState(false);
  const [analytics, setAnalytics] = useState(true);
  const [preferences, setPreferences] = useState(true);

  if (cookiePrefs) return null;

  const handleAcceptAll = () => {
    saveCookiePreferences(true, true, true);
  };

  const handleAcceptEssential = () => {
    saveCookiePreferences(true, false, false);
  };

  const handleSaveCustom = () => {
    saveCookiePreferences(true, analytics, preferences);
  };

  return (
    <div className="fixed bottom-4 left-4 right-4 sm:left-6 sm:right-auto sm:max-w-md z-40 bg-neutral-900/95 backdrop-blur-md border border-neutral-800 p-5 rounded-2xl shadow-2xl space-y-4">
      <div className="flex items-start gap-3">
        <div className="p-2 rounded-lg bg-orange-500/10 border border-orange-500/20 text-orange-500 shrink-0">
          <Cookie className="w-5 h-5" />
        </div>
        <div className="space-y-1">
          <h4 className="text-sm font-bold text-white flex items-center gap-1.5">
            Privacy & Telemetry Controls
          </h4>
          <p className="text-xs text-neutral-400 leading-relaxed">
            SKz LAB uses local storage and performance cookies to maintain theme preferences, active session states, and telemetry benchmarks.
          </p>
        </div>
      </div>

      {showDetails && (
        <div className="space-y-2 pt-2 border-t border-neutral-800 text-xs">
          <div className="flex items-center justify-between p-2 rounded-lg bg-neutral-950/60">
            <span className="text-neutral-300 font-medium">Essential System State</span>
            <span className="text-neutral-400 font-mono text-[10px]">Always Active</span>
          </div>

          <label className="flex items-center justify-between p-2 rounded-lg bg-neutral-950/60 cursor-pointer">
            <span className="text-neutral-300">Analytics & Latency Telemetry</span>
            <input
              type="checkbox"
              checked={analytics}
              onChange={(e) => setAnalytics(e.target.checked)}
              className="accent-orange-500 rounded"
            />
          </label>

          <label className="flex items-center justify-between p-2 rounded-lg bg-neutral-950/60 cursor-pointer">
            <span className="text-neutral-300">Custom Brand Palette Memory</span>
            <input
              type="checkbox"
              checked={preferences}
              onChange={(e) => setPreferences(e.target.checked)}
              className="accent-orange-500 rounded"
            />
          </label>
        </div>
      )}

      <div className="flex flex-wrap items-center gap-2 pt-1">
        {showDetails ? (
          <button
            onClick={handleSaveCustom}
            className="flex-1 py-1.5 px-3 rounded-lg text-xs font-semibold bg-orange-600 hover:bg-orange-500 text-white transition-colors flex items-center justify-center gap-1"
          >
            <Check className="w-3.5 h-3.5" />
            Save Preferences
          </button>
        ) : (
          <>
            <button
              onClick={handleAcceptAll}
              className="flex-1 py-1.5 px-3 rounded-lg text-xs font-semibold bg-orange-600 hover:bg-orange-500 text-white transition-colors"
            >
              Accept All
            </button>
            <button
              onClick={handleAcceptEssential}
              className="py-1.5 px-3 rounded-lg text-xs font-medium text-neutral-300 bg-neutral-800 hover:bg-neutral-700 transition-colors"
            >
              Essential Only
            </button>
          </>
        )}

        <button
          onClick={() => setShowDetails(!showDetails)}
          className="p-1.5 rounded-lg text-neutral-400 hover:text-white bg-neutral-800 transition-colors"
          title="Configure Preferences"
        >
          <SlidersHorizontal className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
};
