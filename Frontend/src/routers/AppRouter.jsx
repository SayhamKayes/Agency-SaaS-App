import React, { useState, useEffect } from 'react';
import { LandingPage } from '../pages/LandingPage';
import { AdminPage } from '../pages/AdminPage';
import { ProjectsPage } from '../pages/ProjectsPage';

export const AppRouter = () => {
  const isInsideIframe = typeof window !== 'undefined' && window.self !== window.top;
  const [route, setRoute] = useState(() => (isInsideIframe ? '#/' : (window.location.hash || '#/')));

  useEffect(() => {
    if (isInsideIframe) return;
    const handleHashChange = () => {
      setRoute(window.location.hash || '#/');
    };
    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, [isInsideIframe]);

  if (!isInsideIframe && route.startsWith('#/admin')) {
    return <AdminPage />;
  }

  if (!isInsideIframe && (route.startsWith('#/projects') || route.startsWith('#/work'))) {
    return <ProjectsPage />;
  }

  return <LandingPage />;
};

export default AppRouter;
