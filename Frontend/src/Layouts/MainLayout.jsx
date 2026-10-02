import React from 'react';
import {
  Preloader,
  Navbar,
  Footer,
  BackToTop,
  CookieBanner,
  ContactOmnichannelModal,
  ThemeColorPaletteModal,
  AdminPanel
} from '../components';

export const MainLayout = ({ children }) => {
  return (
    <div className="min-h-screen bg-neutral-950 text-neutral-100 font-sans selection:bg-orange-500/30 selection:text-orange-200">
      {/* Cinematic Architectural Preloader */}
      <Preloader />

      {/* Top Navigation */}
      <Navbar />

      {/* Main Page Flow */}
      <main id="main-content">
        {children}
      </main>

      {/* Premium SaaS Foundry Footer */}
      <Footer />

      {/* Floating Utility Controls */}
      <BackToTop />
      <CookieBanner />

      {/* Interactive Modals & Management Panels */}
      <ContactOmnichannelModal />
      <ThemeColorPaletteModal />
      <AdminPanel />
    </div>
  );
};

export default MainLayout;
