export const SERVICES_LIST = [
  {
    id: 'saas',
    name: 'SaaS Products',
    badge: '3 Products Live',
    tagline: 'High-throughput enterprise multi-tenant cloud platforms',
    icon: 'Layers',
    accentColor: '#CF500A',
    description: 'Engineered for extreme modularity, automated billing pipelines, and zero-downtime microservices.'
  },
  {
    id: 'web',
    name: 'Web Development',
    badge: 'Production Grade',
    tagline: 'Ultra-fast headless web architectures',
    icon: 'Globe',
    accentColor: '#CF500A',
    description: 'Bespoke web applications, high-converting digital flagships, and dynamic WebGL experiences.'
  },
  {
    id: 'mobile',
    name: 'Mobile App Development',
    badge: 'Android',
    tagline: 'Native performance cross-platform mobile apps',
    icon: 'Smartphone',
    accentColor: '#CF500A',
    description: 'Sub-60fps fluid touch animations, background geolocation, offline sync, and biometric security.'
  }
];

export const SAAS_PRODUCTS = [
  {
    id: 'prod-skzlab',
    name: 'SKzLootLab',
    shortName: 'Gaming Store',
    category: 'E-Commerce',
    tagline: 'Autonomous Headless Multi-Tenant E-Commerce SaaS',
    description: 'Engineered on high-performance Django REST microservices with real-time order processing, intelligent cart orchestration, and sub-100ms multi-vendor checkout pipelines.',
    status: 'Live',
    mrr: '$48,200',
    activeUsers: '142,000+',
    uptime: '99.99%',
    accentColor: '#CF500A',
    image: '/assets/showcase/saas-gaming.jpg',
    liveUrl: 'https://skzlootlab.vercel.app/',
    urls: {
      landing: 'https://commerce.skzlab.com',
      admin: 'https://app.skzlab.com/admin/analytics',
      user: 'https://app.skzlab.com/user/orders'
    },
    features: [
      'Multi-tenant vendor storefront isolation',
      'Dynamic inventory locking & flash-sale protection',
      'Automated invoice generation & tax compliance',
      'Instant Webhook dispatchers for courier logistics'
    ],
    techStack: ['Python', 'Django REST', 'React 19', 'PostgreSQL', 'Redis', 'Docker']
  },
  {
    id: 'AmarDokan',
    name: 'AmarDokan',
    shortName: 'AmarDokan',
    category: 'Ecommerce SaaS',
    tagline: 'Multi-Vendor Cloud E-Commerce Platform for Modern Retail',
    description: 'All-in-one scalable e-commerce SaaS empowering retailers to launch digital storefronts, orchestrate multi-vendor catalogs, track inventory, and process localized digital payments.',
    status: 'Live',
    mrr: '$36,800',
    activeUsers: '89,400+',
    uptime: '99.98%',
    accentColor: '#CF500A',
    image: '/assets/showcase/saas-courierpulse.png',
    liveUrl: 'https://amrdokan.vercel.app/',
    urls: {
      landing: 'https://amrdokan.vercel.app/',
      admin: 'https://amrdokan.vercel.app/admin',
      user: 'https://amrdokan.vercel.app/dashboard'
    },
    features: [
      'Multi-vendor storefront & merchant dashboard',
      'Real-time inventory sync & automated dispatch',
      'Localized payment gateway integration',
      'Customer SMS order updates & analytics'
    ],
    techStack: ['FastAPI', 'Go Routines', 'GeoDjango', 'Kafka', 'React Native']
  },
  {
    id: 'SignCrafter',
    name: 'Signature Crafter',
    shortName: 'Signature Crafter',
    category: 'AI Tool',
    tagline: 'AI-Powered Signature Creator & Vector Typography Engine',
    description: 'Intelligent AI-powered digital signature generator and vector typography engine with customizable stroke dynamics, smooth bezier curves, and SVG/PNG high-res exports.',
    status: 'Live',
    mrr: '$29,400',
    activeUsers: '45,000+',
    uptime: '99.95%',
    accentColor: '#CF500A',
    image: '/assets/showcase/saas-signcrafter.jpg',
    liveUrl: 'https://signaturecrafter.vercel.app/',
    urls: {
      landing: 'https://signaturecrafter.vercel.app/',
      admin: 'https://signaturecrafter.vercel.app/studio',
      user: 'https://signaturecrafter.vercel.app/generate'
    },
    features: [
      'AI signature style generator & personalization',
      'Dynamic stroke smoothing & bezier physics',
      'One-click high-res SVG & PNG transparent export',
      'Preset typography collections & canvas tools'
    ],
    techStack: ['Gemini 2.5 Pro', 'Python', 'React 19', 'Canvas API', 'TypeScript']
  }
];

export const WEB_PROJECTS = [
  {
    id: 'Fusion Retreat',
    name: 'Fusion Retreat',
    shortName: 'Fusion Retreat',
    client: 'Fusion Retreat',
    category: 'Retreat Center Website',
    status: 'Live',
    url: 'http://fusion-retreat.com/',
    liveUrl: 'http://fusion-retreat.com/',
    image: '/assets/showcase/web-fusion.webp',
    accentColor: '#CF500A',
    tagline: 'Luxury Wellness & Serene Retreat Sanctuary Experience',
    description: 'Bespoke hospitality and wellness retreat digital platform with dynamic accommodation booking, immersive retreat itineraries, wellness programs, and fluid responsive design.',
    techStack: ['Next.js 15', 'TypeScript', 'Tailwind CSS', 'Chart.js'],
    metrics: { speed: '99/100', latency: '4ms', uptime: '99.99%' },
    previewData: {
      sanctuaryGuests: '12,500+ Hosted',
      rating: '4.98 / 5',
      wellnessSuites: '24 Luxury Villas'
    }
  },
  {
    id: 'GoodTimeWatch',
    name: 'GoodTimeWatch',
    shortName: 'GoodTimeWatch',
    client: 'GoodTimeWatch',
    category: 'E-Commerce',
    status: 'Live',
    url: 'https://goodtimewatch.vercel.app/',
    liveUrl: 'https://goodtimewatch.vercel.app/',
    image: '/assets/showcase/web-goodtimewatch.jpg',
    accentColor: '#CF500A',
    tagline: 'High-End Horology & Luxury Timepiece Digital Storefront',
    description: 'Ultra-responsive luxury watch digital showroom with high-definition product galleries, micro-interactions, dynamic cart drawer, and seamless checkout pipelines.',
    techStack: ['React 19', 'Three.js', 'Framer Motion', 'Tailwind CSS'],
    metrics: { fps: '60 FPS', awards: 'Awwwards SOTD', assetCompression: '88%' },
    previewData: {
      collectors: '45,000+ Members',
      certifiedAuthentic: '100%',
      brands: 'Rolex · Omega · Patek'
    }
  },
  {
    id: 'Portfolio',
    name: 'Sayham Kayes Portfolio',
    shortName: 'Portfolio',
    client: 'Sayham Kayes',
    category: 'Personal Portfolio',
    status: 'Live',
    url: 'https://sayhamkayes.vercel.app/',
    liveUrl: 'https://sayhamkayes.vercel.app/',
    image: '/assets/showcase/web-portfolio.jpg',
    accentColor: '#CF500A',
    tagline: 'Cybernetic High-Tech Digital Portfolio & Engineering Showcase',
    description: 'Modern developer portfolio featuring cybernetic HUD design, terminal interface, interactive glassmorphism components, and live production architecture previews.',
    techStack: ['React 19', 'Tailwind CSS', 'Lucide React', 'Framer Motion'],
    metrics: { rating: '5.0 ★', speed: '100/100', uptime: '99.99%' },
    previewData: {
      productionApps: '18 Deployed',
      performanceScore: '100/100',
      uptime: '99.99%'
    }
  }
];

export const MOBILE_APPS = [
  {
    id: 'app-courier-go',
    name: 'CourierPulse Go',
    shortName: 'CourierPulse Go',
    category: 'Fleet & Courier Navigation',
    status: 'Production',
    url: 'skz://courierpulse.go/active-dispatch',
    liveUrl: '', // Optional: paste live URL here to embed inside phone screen
    image: '/assets/showcase/mobile-courier-go.png',
    accentColor: '#CF500A',
    tagline: 'Real-time turn-by-turn routing with instant earnings for logistics riders',
    techStack: ['React Native', 'TypeScript', 'MapBox', 'Go'],
    screens: [
      { id: 'trip', label: 'Active Trip' },
      { id: 'earnings', label: 'Daily Earnings' },
      { id: 'profile', label: 'Rider Profile' }
    ],
    stats: { completed: '14 Orders', rating: '4.98 ★', onlineHours: '5h 42m' }
  },
  {
    id: 'app-skz-pay',
    name: 'SKz Pay Mobile Wallet',
    shortName: 'SKz Pay',
    category: 'Fintech & Contactless Pay',
    status: 'Beta',
    url: 'skz://wallet.pay/nfc-card',
    liveUrl: '', // Optional: paste live URL here to embed inside phone screen
    image: '/assets/showcase/mobile-skz-pay.png',
    accentColor: '#CF500A',
    tagline: 'Biometric contactless payments, crypto-fiat bridge, and instant splits',
    techStack: ['Flutter', 'Rust Core', 'Secure Enclave', 'NFC'],
    screens: [
      { id: 'wallet', label: 'Virtual Card' },
      { id: 'activity', label: 'Transactions' },
      { id: 'security', label: 'Biometrics' }
    ],
    stats: { balance: '$8,450.20', cards: '2 Active', spendToday: '$182.50' }
  },
  {
    id: 'app-fitflow',
    name: 'FitFlow AI Coach',
    shortName: 'FitFlow AI',
    category: 'Health & Workout Telemetry',
    status: 'Live',
    url: 'skz://fitflow.ai/daily-routine',
    liveUrl: '', // Optional: paste live URL here to embed inside phone screen
    image: '/assets/showcase/mobile-fitflow.png',
    accentColor: '#CF500A',
    tagline: 'Personalized generative AI workout trainer with wearable sensor telemetry',
    techStack: ['Swift', 'Kotlin', 'CoreML', 'HealthKit'],
    screens: [
      { id: 'workout', label: 'Live Workout' },
      { id: 'plan', label: 'AI Routine' },
      { id: 'metrics', label: 'Health Vitals' }
    ],
    stats: { heartRate: '138 BPM', calories: '540 kcal', streak: '18 Days' }
  }
];

export const FEATURED_PROJECTS = [
  ...SAAS_PRODUCTS.map((p) => ({
    id: p.id,
    title: p.name || p.title,
    category: 'SaaS',
    categoryTag: p.category ? p.category.toUpperCase() : 'SAAS PLATFORM',
    tagline: p.tagline,
    description: p.description,
    techStack: p.techStack || [],
    accentColor: p.accentColor || '#CF500A',
    image: p.image || '',
    liveUrl: p.liveUrl || p.url || (p.urls && p.urls.landing) || '',
    githubUrl: p.githubUrl || `https://github.com/sayham/${p.id.toLowerCase().replace(/[^a-z0-9]/g, '-')}`,
    stats: p.stats || { mrr: p.mrr || '$30k+', uptime: p.uptime || '99.9%', users: p.activeUsers || '50k+' }
  })),
  ...WEB_PROJECTS.map((p) => ({
    id: p.id,
    title: p.name || p.title,
    category: 'Web',
    categoryTag: p.category ? p.category.toUpperCase() : 'WEB APPLICATION',
    tagline: p.tagline,
    description: p.description,
    techStack: p.techStack || [],
    accentColor: p.accentColor || '#CF500A',
    image: p.image || '',
    liveUrl: p.liveUrl || p.url || '',
    githubUrl: p.githubUrl || `https://github.com/sayham/${p.id.toLowerCase().replace(/[^a-z0-9]/g, '-')}`,
    stats: p.stats || p.metrics || { speed: '99/100', uptime: '99.99%', rating: '5.0 ★' }
  })),
  ...MOBILE_APPS.map((p) => ({
    id: p.id,
    title: p.name || p.title,
    category: 'Mobile',
    categoryTag: p.category ? p.category.toUpperCase() : 'MOBILE APPLICATION',
    tagline: p.tagline,
    description: p.description,
    techStack: p.techStack || [],
    accentColor: p.accentColor || '#CF500A',
    image: p.image || '',
    liveUrl: p.liveUrl || p.url || '',
    githubUrl: p.githubUrl || `https://github.com/sayham/${p.id.toLowerCase().replace(/[^a-z0-9]/g, '-')}`,
    stats: p.stats || { rating: '4.98 ★', completed: '14 Orders', online: '5h 42m' }
  }))
];

