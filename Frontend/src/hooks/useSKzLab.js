import { useApp } from '../Context/AppContext';
import { api } from '../services/api';
import { useState, useEffect, useCallback } from 'react';

export const useSKzLab = () => {
  const app = useApp();
  const [backendOnline, setBackendOnline] = useState(false);
  const [isCheckingBackend, setIsCheckingBackend] = useState(false);

  const checkBackendHealth = useCallback(async () => {
    setIsCheckingBackend(true);
    try {
      const res = await api.getHealth();
      setBackendOnline(res?.status === 'ok' || res?.status === 'healthy');
    } catch {
      setBackendOnline(false);
    } finally {
      setIsCheckingBackend(false);
    }
  }, []);

  useEffect(() => {
    checkBackendHealth();
  }, [checkBackendHealth]);

  return {
    ...app,
    backendOnline,
    isCheckingBackend,
    checkBackendHealth
  };
};

export default useSKzLab;
