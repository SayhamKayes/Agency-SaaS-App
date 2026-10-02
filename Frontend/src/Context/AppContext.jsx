import React, { createContext, useContext, useState, useEffect } from 'react';
import {
  INITIAL_PRODUCTS,
  INITIAL_BUSINESS_UNITS,
  INITIAL_TESTIMONIALS,
  INITIAL_NODES,
  INITIAL_MESSAGES,
  COLOR_PRESETS
} from '../data/initialData';

const AppContext = createContext(undefined);

const STORAGE_KEYS = {
  PRODUCTS: 'skz_products_v1',
  UNITS: 'skz_units_v1',
  TESTIMONIALS: 'skz_testimonials_v1',
  MESSAGES: 'skz_messages_v1',
  THEME: 'skz_theme_v1',
  COOKIES: 'skz_cookies_v1'
};

export const AppProvider = ({ children }) => {
  // Products
  const [products, setProducts] = useState(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEYS.PRODUCTS);
      return saved ? JSON.parse(saved) : INITIAL_PRODUCTS;
    } catch {
      return INITIAL_PRODUCTS;
    }
  });

  // Business Units
  const [businessUnits, setBusinessUnits] = useState(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEYS.UNITS);
      return saved ? JSON.parse(saved) : INITIAL_BUSINESS_UNITS;
    } catch {
      return INITIAL_BUSINESS_UNITS;
    }
  });

  // Testimonials
  const [testimonials, setTestimonials] = useState(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEYS.TESTIMONIALS);
      return saved ? JSON.parse(saved) : INITIAL_TESTIMONIALS;
    } catch {
      return INITIAL_TESTIMONIALS;
    }
  });

  // Global nodes
  const [globalNodes] = useState(INITIAL_NODES);

  // Messages
  const [messages, setMessages] = useState(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEYS.MESSAGES);
      return saved ? JSON.parse(saved) : INITIAL_MESSAGES;
    } catch {
      return INITIAL_MESSAGES;
    }
  });

  // Theme Settings
  const [theme, setTheme] = useState(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEYS.THEME);
      if (saved) return JSON.parse(saved);
    } catch {
      // fallback
    }
    return {
      mode: 'dark',
      presetId: 'preset-skz',
      primaryColor: '#F05A28', // SKz Orange
      secondaryColor: '#00A8C6' // SKz Cyan
    };
  });

  // Cookie preferences
  const [cookiePrefs, setCookiePrefs] = useState(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEYS.COOKIES);
      return saved ? JSON.parse(saved) : null;
    } catch {
      return null;
    }
  });

  // Modals & Panels
  const [isAdminOpen, setIsAdminOpen] = useState(false);
  const [isContactModalOpen, setIsContactModalOpen] = useState(false);
  const [contactChannel, setContactChannel] = useState('email');
  const [isPaletteModalOpen, setIsPaletteModalOpen] = useState(false);
  const [preloaderActive, setPreloaderActive] = useState(() => {
    if (typeof window !== 'undefined' && (window.self !== window.top || window.location.search.includes('preview=true'))) {
      return false;
    }
    return true;
  });

  // Sync to localStorage
  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEYS.PRODUCTS, JSON.stringify(products));
    } catch {}
  }, [products]);

  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEYS.UNITS, JSON.stringify(businessUnits));
    } catch {}
  }, [businessUnits]);

  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEYS.TESTIMONIALS, JSON.stringify(testimonials));
    } catch {}
  }, [testimonials]);

  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEYS.MESSAGES, JSON.stringify(messages));
    } catch {}
  }, [messages]);

  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEYS.THEME, JSON.stringify(theme));
    } catch {}

    // Apply CSS Variables and HTML root class
    const root = document.documentElement;
    if (theme.mode === 'dark') {
      root.classList.add('dark');
      root.classList.remove('light');
    } else {
      root.classList.add('light');
      root.classList.remove('dark');
    }

    root.style.setProperty('--color-primary', theme.primaryColor);
    root.style.setProperty('--color-secondary', theme.secondaryColor);
  }, [theme]);

  // Product CRUD
  const addProduct = (prodData) => {
    const newProd = {
      ...prodData,
      id: `prod-${Date.now()}`
    };
    setProducts((prev) => [newProd, ...prev]);
  };

  const updateProduct = (id, updates) => {
    setProducts((prev) =>
      prev.map((item) => (item.id === id ? { ...item, ...updates } : item))
    );
  };

  const deleteProduct = (id) => {
    setProducts((prev) => prev.filter((item) => item.id !== id));
  };

  // Business Unit updates
  const updateBusinessUnit = (id, updates) => {
    setBusinessUnits((prev) =>
      prev.map((item) => (item.id === id ? { ...item, ...updates } : item))
    );
  };

  // Testimonials CRUD
  const addTestimonial = (item) => {
    const newTest = {
      ...item,
      id: `test-${Date.now()}`
    };
    setTestimonials((prev) => [newTest, ...prev]);
  };

  const updateTestimonial = (id, updates) => {
    setTestimonials((prev) =>
      prev.map((item) => (item.id === id ? { ...item, ...updates } : item))
    );
  };

  const deleteTestimonial = (id) => {
    setTestimonials((prev) => prev.filter((item) => item.id !== id));
  };

  // Messages & Reply
  const addMessage = (msg) => {
    const newMsg = {
      ...msg,
      id: `msg-${Date.now()}`,
      status: 'unread',
      createdAt: new Date().toISOString(),
      replies: []
    };
    setMessages((prev) => [newMsg, ...prev]);
  };

  const replyToMessage = (messageId, replyText, channel) => {
    const reply = {
      id: `rep-${Date.now()}`,
      channel,
      message: replyText,
      timestamp: new Date().toISOString()
    };
    setMessages((prev) =>
      prev.map((m) =>
        m.id === messageId
          ? {
              ...m,
              status: 'replied',
              replies: [...m.replies, reply]
            }
          : m
      )
    );
  };

  const deleteMessage = (messageId) => {
    setMessages((prev) => prev.filter((m) => m.id !== messageId));
  };

  // Theme modifiers
  const setThemeMode = (mode) => {
    setTheme((prev) => ({ ...prev, mode }));
  };

  const setColorPreset = (presetId) => {
    const preset = COLOR_PRESETS.find((p) => p.id === presetId);
    if (!preset) return;
    setTheme((prev) => ({
      ...prev,
      presetId,
      primaryColor: preset.primary,
      secondaryColor: preset.secondary
    }));
  };

  const setCustomColors = (primary, secondary) => {
    setTheme((prev) => ({
      ...prev,
      presetId: 'custom',
      primaryColor: primary,
      secondaryColor: secondary
    }));
  };

  // Cookies
  const saveCookiePreferences = (essential, analytics, preferences) => {
    const prefs = {
      accepted: true,
      essential,
      analytics,
      preferences,
      timestamp: new Date().toISOString()
    };
    setCookiePrefs(prefs);
    try {
      localStorage.setItem(STORAGE_KEYS.COOKIES, JSON.stringify(prefs));
    } catch {}
  };

  const finishPreloader = () => setPreloaderActive(false);
  const replayPreloader = () => setPreloaderActive(true);

  return (
    <AppContext.Provider
      value={{
        products,
        addProduct,
        updateProduct,
        deleteProduct,

        businessUnits,
        updateBusinessUnit,

        testimonials,
        addTestimonial,
        updateTestimonial,
        deleteTestimonial,

        globalNodes,

        messages,
        addMessage,
        replyToMessage,
        deleteMessage,

        theme,
        setThemeMode,
        setColorPreset,
        setCustomColors,

        isAdminOpen,
        setIsAdminOpen,

        isContactModalOpen,
        setIsContactModalOpen,
        contactChannel,
        setContactChannel,

        isPaletteModalOpen,
        setIsPaletteModalOpen,

        cookiePrefs,
        saveCookiePreferences,

        preloaderActive,
        finishPreloader,
        replayPreloader
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useApp = () => {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error('useApp must be used within an AppProvider');
  }
  return context;
};

export default AppContext;
