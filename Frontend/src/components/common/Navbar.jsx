import React, { useState, useEffect } from 'react';
import { useApp } from '../../Context/AppContext';
import { SKzLabLogo } from './SKzLabLogo';
import { Palette, Shield, MessageSquare, Menu, X, Sun, Moon } from 'lucide-react';

export const Navbar = () => {
  const {
    theme,
    setThemeMode,
    setIsAdminOpen,
    setIsContactModalOpen,
    setContactChannel,
    setIsPaletteModalOpen
  } = useApp();

  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Launches', href: '#launches' },
    { label: 'Architecture', href: '#architecture' },
    { label: 'Products', href: '#products' },
    { label: 'Business Units', href: '#units' },
    { label: 'Global Nodes', href: '#presence' },
    { label: 'Testimonials', href: '#testimonials' }
  ];

  const isInsideIframe = typeof window !== 'undefined' && window.self !== window.top;

  const handleNavClick = (e, href) => {
    if (typeof window !== 'undefined' && window.location.hash.startsWith('#/projects')) {
      e.preventDefault();
      window.location.hash = href;
      setTimeout(() => {
        const target = document.querySelector(href);
        if (target) target.scrollIntoView({ behavior: 'smooth' });
      }, 50);
      return;
    }
    if (isInsideIframe) {
      e.preventDefault();
      const target = document.querySelector(href);
      if (target) {
        target.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  const handleOpenContact = () => {
    if (isInsideIframe) return;
    setContactChannel('email');
    setIsContactModalOpen(true);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        scrolled
          ? 'bg-neutral-950/85 backdrop-blur-md border-b border-neutral-800/80 py-3 shadow-lg shadow-black/20'
          : 'bg-transparent border-b border-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Zone 1: Single element Brand Wordmark */}
        <a 
          href="#/" 
          onClick={(e) => {
            if (typeof window !== 'undefined' && window.location.hash.startsWith('#/projects')) {
              e.preventDefault();
              window.location.hash = '#/';
              window.scrollTo({ top: 0, behavior: 'smooth' });
            } else if (isInsideIframe) {
              e.preventDefault();
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }
          }}
          className="flex items-center gap-2 group transition-opacity hover:opacity-95"
        >
          <SKzLabLogo size="md" showSubtitle={false} />
        </a>

        {/* Zone 2: 4-6 Clean text navigation links */}
        <nav className="hidden lg:flex items-center gap-7 text-sm font-medium text-neutral-300">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={(e) => handleNavClick(e, link.href)}
              className="relative py-1 text-neutral-300 hover:text-white transition-colors duration-200 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[2px] after:bg-orange-500 hover:after:w-full after:transition-all after:duration-300 whitespace-nowrap"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Zone 3: Actions (Theme/Palette, Admin, Primary CTA) */}
        <div className="flex items-center gap-2 sm:gap-3">
          {/* Theme Mode Quick Toggle */}
          <button
            onClick={() => {
              if (isInsideIframe) return;
              setThemeMode(theme.mode === 'dark' ? 'light' : 'dark');
            }}
            className="p-2 rounded-lg text-neutral-400 hover:text-white hover:bg-neutral-900 border border-neutral-800 transition-colors"
            title={`Switch to ${theme.mode === 'dark' ? 'Light' : 'Dark'} Mode`}
            aria-label="Toggle Theme Mode"
          >
            {theme.mode === 'dark' ? (
              <Sun className="w-4 h-4 text-amber-400" />
            ) : (
              <Moon className="w-4 h-4 text-cyan-400" />
            )}
          </button>

          {/* Color Palette Modal Trigger */}
          <button
            onClick={() => {
              if (isInsideIframe) return;
              setIsPaletteModalOpen(true);
            }}
            className="p-2 rounded-lg text-neutral-400 hover:text-white hover:bg-neutral-900 border border-neutral-800 transition-colors"
            title="Customize Brand Palette"
            aria-label="Customize Palette"
          >
            <Palette className="w-4 h-4 text-cyan-400" />
          </button>

          {/* Admin Portal Gateway */}
          <button
            onClick={() => {
              if (isInsideIframe) return;
              setIsAdminOpen(true);
            }}
            className="flex items-center gap-1.5 px-2.5 py-1.5 text-xs font-mono font-medium rounded-lg text-neutral-300 hover:text-white bg-neutral-900/80 hover:bg-neutral-800 border border-neutral-800 transition-colors whitespace-nowrap"
            title="Open Admin Portal (CMS & Omnichannel Inbox)"
          >
            <Shield className="w-3.5 h-3.5 text-orange-500" />
            <span className="hidden sm:inline">Admin</span>
          </button>

          {/* Primary Action CTA */}
          <button
            onClick={handleOpenContact}
            className="px-4 py-2 text-xs font-semibold text-white bg-gradient-to-r from-orange-600 to-amber-600 hover:from-orange-500 hover:to-amber-500 rounded-lg shadow-sm shadow-orange-950 transition-all duration-200 whitespace-nowrap flex items-center gap-1.5"
          >
            <MessageSquare className="w-3.5 h-3.5" />
            <span>Contact Studio</span>
          </button>

          {/* Mobile hamburger */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 lg:hidden text-neutral-400 hover:text-white rounded-lg border border-neutral-800 bg-neutral-900"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-neutral-950/95 backdrop-blur-xl border-b border-neutral-800 px-6 py-5 space-y-4">
          <div className="flex flex-col space-y-3">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="text-base font-medium text-neutral-300 hover:text-orange-400 py-1 border-b border-neutral-900"
              >
                {link.label}
              </a>
            ))}
          </div>

          <div className="pt-2 flex flex-col gap-2">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                setIsAdminOpen(true);
              }}
              className="w-full py-2.5 px-4 text-xs font-mono font-medium rounded-lg text-neutral-200 bg-neutral-900 border border-neutral-800 flex items-center justify-center gap-2"
            >
              <Shield className="w-4 h-4 text-orange-500" />
              Open Studio Admin Portal
            </button>
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                handleOpenContact();
              }}
              className="w-full py-2.5 px-4 text-xs font-semibold rounded-lg text-white bg-gradient-to-r from-orange-600 to-amber-600 flex items-center justify-center gap-2"
            >
              <MessageSquare className="w-4 h-4" />
              Initiate Project Request
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
