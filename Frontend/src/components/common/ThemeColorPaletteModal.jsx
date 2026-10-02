import React from 'react';
import { useApp } from '../../Context/AppContext';
import { COLOR_PRESETS } from '../../data/initialData';
import { X, Sun, Moon, Palette, RotateCcw, Check } from 'lucide-react';

export const ThemeColorPaletteModal = () => {
  const {
    isPaletteModalOpen,
    setIsPaletteModalOpen,
    theme,
    setThemeMode,
    setColorPreset,
    setCustomColors
  } = useApp();

  if (!isPaletteModalOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-neutral-950/80 backdrop-blur-md">
      <div className="bg-neutral-900 border border-neutral-800 rounded-2xl max-w-lg w-full p-6 space-y-6 shadow-2xl relative max-h-[90vh] overflow-y-auto">
        {/* Header */}
        <div className="flex items-start justify-between pb-3 border-b border-neutral-800">
          <div>
            <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-[0.2em] text-orange-500 mb-1">
              <span>COLOR GRADING ENGINE</span>
              <span>·</span>
              <span>STUDIO IDENTITY</span>
            </div>
            <h3 className="text-xl font-bold text-white">
              Theme & Custom Color Grading
            </h3>
            <p className="text-xs text-neutral-400 mt-0.5">
              Personalize the visual identity of SKz LAB across the viewport.
            </p>
          </div>

          <button
            onClick={() => setIsPaletteModalOpen(false)}
            className="p-1.5 rounded-lg bg-neutral-800 text-neutral-400 hover:text-white transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* 1. Dark Mode vs Light Mode */}
        <div className="space-y-3">
          <label className="text-xs font-mono uppercase tracking-wider text-neutral-400 block">
            01. Viewport Luminance (Light / Dark)
          </label>
          <div className="grid grid-cols-2 gap-3">
            <button
              type="button"
              onClick={() => setThemeMode('dark')}
              className={`p-3 rounded-xl border flex items-center justify-center gap-2 text-xs font-medium transition-all ${
                theme.mode === 'dark'
                  ? 'bg-neutral-800 border-orange-500 text-white shadow-lg shadow-orange-500/10'
                  : 'bg-neutral-950/50 border-neutral-800 text-neutral-400 hover:text-white'
              }`}
            >
              <Moon className="w-4 h-4 text-cyan-400" />
              <span>Dark Studio (Obsidian)</span>
            </button>

            <button
              type="button"
              onClick={() => setThemeMode('light')}
              className={`p-3 rounded-xl border flex items-center justify-center gap-2 text-xs font-medium transition-all ${
                theme.mode === 'light'
                  ? 'bg-neutral-800 border-orange-500 text-white shadow-lg shadow-orange-500/10'
                  : 'bg-neutral-950/50 border-neutral-800 text-neutral-400 hover:text-white'
              }`}
            >
              <Sun className="w-4 h-4 text-amber-400" />
              <span>Light Studio (Clean)</span>
            </button>
          </div>
        </div>

        {/* 2. Curated Brand Presets */}
        <div className="space-y-3">
          <label className="text-xs font-mono uppercase tracking-wider text-neutral-400 block">
            02. Curated Brand Presets
          </label>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {COLOR_PRESETS.map((preset) => {
              const isSelected = theme.presetId === preset.id;
              return (
                <button
                  key={preset.id}
                  type="button"
                  onClick={() => setColorPreset(preset.id)}
                  className={`p-3 rounded-xl border text-left transition-all ${
                    isSelected
                      ? 'bg-neutral-800 border-orange-500 shadow-lg shadow-orange-500/10'
                      : 'bg-neutral-950/40 border-neutral-800 hover:border-neutral-700'
                  }`}
                >
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-xs font-bold text-white flex items-center gap-1.5">
                      {preset.name}
                      {isSelected && <Check className="w-3.5 h-3.5 text-orange-400" />}
                    </span>
                    <div className="flex items-center gap-1">
                      <span
                        className="w-3.5 h-3.5 rounded-full border border-black/40"
                        style={{ backgroundColor: preset.primary }}
                      />
                      <span
                        className="w-3.5 h-3.5 rounded-full border border-black/40"
                        style={{ backgroundColor: preset.secondary }}
                      />
                    </div>
                  </div>
                  <p className="text-[11px] text-neutral-400 line-clamp-2 leading-relaxed">
                    {preset.description}
                  </p>
                </button>
              );
            })}
          </div>
        </div>

        {/* 3. Custom Hex Code Grader */}
        <div className="space-y-3 pt-2 border-t border-neutral-800">
          <label className="text-xs font-mono uppercase tracking-wider text-neutral-400 block">
            03. Custom Hex Color Tuning
          </label>
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-1">
              <span className="text-[11px] text-neutral-400">Primary Core Accent</span>
              <div className="flex items-center gap-2 bg-neutral-950 border border-neutral-800 rounded-lg p-2">
                <input
                  type="color"
                  value={theme.primaryColor}
                  onChange={(e) => setCustomColors(e.target.value, theme.secondaryColor)}
                  className="w-7 h-7 rounded border-0 cursor-pointer bg-transparent"
                />
                <span className="text-xs font-mono text-neutral-200 uppercase">
                  {theme.primaryColor}
                </span>
              </div>
            </div>

            <div className="space-y-1">
              <span className="text-[11px] text-neutral-400">Secondary Cyber Accent</span>
              <div className="flex items-center gap-2 bg-neutral-950 border border-neutral-800 rounded-lg p-2">
                <input
                  type="color"
                  value={theme.secondaryColor}
                  onChange={(e) => setCustomColors(theme.primaryColor, e.target.value)}
                  className="w-7 h-7 rounded border-0 cursor-pointer bg-transparent"
                />
                <span className="text-xs font-mono text-neutral-200 uppercase">
                  {theme.secondaryColor}
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Footer & Reset */}
        <div className="pt-2 flex items-center justify-between border-t border-neutral-800">
          <button
            type="button"
            onClick={() => setColorPreset('preset-skz')}
            className="flex items-center gap-1.5 text-xs text-neutral-400 hover:text-white transition-colors"
          >
            <RotateCcw className="w-3.5 h-3.5" />
            <span>Reset to SKz Signature</span>
          </button>

          <button
            type="button"
            onClick={() => setIsPaletteModalOpen(false)}
            className="px-4 py-2 text-xs font-semibold text-white bg-orange-600 hover:bg-orange-500 rounded-lg transition-colors"
          >
            Apply & Close
          </button>
        </div>
      </div>
    </div>
  );
};
