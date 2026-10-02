import React, { useState } from 'react';
import { useApp } from '../../../Context/AppContext';
import {
  ChevronLeft,
  ChevronRight,
  Quote,
  Star,
  CheckCircle,
  Building,
  TrendingUp
} from 'lucide-react';

export const TestimonialsCoverflow = () => {
  const { testimonials } = useApp();
  const [activeIndex, setActiveIndex] = useState(0);

  const total = testimonials.length;

  const handlePrev = () => {
    setActiveIndex((prev) => (prev - 1 + total) % total);
  };

  const handleNext = () => {
    setActiveIndex((prev) => (prev + 1) % total);
  };

  return (
    <section id="testimonials" className="py-24 relative overflow-hidden bg-neutral-950/70 border-b border-neutral-800/80">
      {/* Background ambient lighting */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[350px] bg-gradient-to-r from-orange-500/10 via-amber-500/5 to-cyan-500/10 blur-[130px] pointer-events-none rounded-full" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-[0.2em] text-orange-500 mb-2">
            <span>06</span>
            <span>·</span>
            <span>VENTURE & CLIENT VERIFICATION</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight [text-wrap:balance]">
            Trusted by Frontier Founders & Enterprise Leaders.
          </h2>
          <p className="mt-3 text-neutral-400 max-w-xl text-base">
            Documented outcomes from technology executives scaling products engineered inside
            the SKz LAB studio.
          </p>
        </div>

        {/* 3D Coverflow Container */}
        <div className="relative w-full max-w-5xl mx-auto py-8 [perspective:1400px]">
          <div className="relative min-h-[420px] flex items-center justify-center">
            {testimonials.map((test, index) => {
              // Calculate offset relative to activeIndex with modular arithmetic
              let offset = index - activeIndex;
              if (offset < -Math.floor(total / 2)) offset += total;
              if (offset > Math.floor(total / 2)) offset -= total;

              const isCenter = offset === 0;
              const isVisible = Math.abs(offset) <= 2;

              if (!isVisible) return null;

              // 3D Transform calculations
              const translateX = offset * 280;
              const translateZ = isCenter ? 60 : -120;
              const rotateY = offset * -28;
              const scale = isCenter ? 1.05 : 0.88;
              const opacity = isCenter ? 1 : Math.abs(offset) === 1 ? 0.6 : 0.25;
              const zIndex = 20 - Math.abs(offset) * 5;

              return (
                <div
                  key={test.id}
                  onClick={() => setActiveIndex(index)}
                  className={`absolute w-full max-w-md rounded-2xl p-7 transition-all duration-500 ease-out cursor-pointer select-none border shadow-2xl ${
                    isCenter
                      ? 'bg-neutral-900 border-neutral-700 shadow-orange-950/20'
                      : 'bg-neutral-950/90 border-neutral-800 backdrop-blur-md'
                  }`}
                  style={{
                    transform: `translateX(${translateX}px) translateZ(${translateZ}px) rotateY(${rotateY}deg) scale(${scale})`,
                    opacity,
                    zIndex
                  }}
                >
                  {/* Top Quote Icon & Metric Badge */}
                  <div className="flex items-center justify-between mb-5">
                    <div className="w-10 h-10 rounded-xl bg-orange-500/10 border border-orange-500/20 flex items-center justify-center text-orange-400">
                      <Quote className="w-5 h-5" />
                    </div>

                    <div className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 font-mono text-xs font-semibold">
                      <TrendingUp className="w-3.5 h-3.5" />
                      <span>{test.metric}</span>
                    </div>
                  </div>

                  {/* Testimonial Quote */}
                  <p className="text-sm sm:text-base text-neutral-200 leading-relaxed font-normal min-h-[96px]">
                    "{test.quote}"
                  </p>

                  {/* Product Used Tag */}
                  <div className="mt-4 pt-3 border-t border-neutral-800 text-[11px] font-mono text-neutral-400 flex items-center justify-between">
                    <span>ENGINEERED ON:</span>
                    <span className="text-cyan-400 font-semibold truncate max-w-[200px]">
                      {test.productUsed}
                    </span>
                  </div>

                  {/* Author Lockup */}
                  <div className="mt-5 flex items-center gap-3">
                    <div className="w-11 h-11 rounded-full bg-gradient-to-tr from-orange-600 to-amber-500 text-white font-bold flex items-center justify-center font-mono text-sm shadow-md">
                      {test.avatarText}
                    </div>

                    <div>
                      <h4 className="text-sm font-bold text-white flex items-center gap-1.5">
                        <span>{test.author}</span>
                        <CheckCircle className="w-3.5 h-3.5 text-emerald-400" />
                      </h4>
                      <p className="text-xs text-neutral-400">
                        {test.role} · <span className="text-neutral-300">{test.company}</span>
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Navigation Controls */}
          <div className="flex items-center justify-center gap-4 mt-8">
            <button
              onClick={handlePrev}
              className="p-3 rounded-xl bg-neutral-900 hover:bg-neutral-800 border border-neutral-800 text-white transition-colors shadow-lg cursor-pointer"
              aria-label="Previous Testimonial"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>

            {/* Dots */}
            <div className="flex items-center gap-2">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setActiveIndex(i)}
                  className={`h-2 rounded-full transition-all duration-300 cursor-pointer ${
                    i === activeIndex
                      ? 'w-8 bg-orange-500'
                      : 'w-2 bg-neutral-800 hover:bg-neutral-700'
                  }`}
                  aria-label={`Go to slide ${i + 1}`}
                />
              ))}
            </div>

            <button
              onClick={handleNext}
              className="p-3 rounded-xl bg-neutral-900 hover:bg-neutral-800 border border-neutral-800 text-white transition-colors shadow-lg cursor-pointer"
              aria-label="Next Testimonial"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
