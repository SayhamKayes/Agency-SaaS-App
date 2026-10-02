export const INITIAL_PRODUCTS = [
  {
    id: 'prod-skzlab',
    name: 'SKz LAB Commerce Engine',
    tagline: 'Autonomous Headless Multi-Tenant E-Commerce SaaS',
    description: 'Engineered on high-performance Django REST microservices with real-time order processing, intelligent cart orchestration, and sub-100ms multi-vendor checkout pipelines.',
    category: 'E-Commerce',
    status: 'Live',
    mrr: '$48,200',
    activeUsers: '142,000+',
    uptime: '99.99%',
    features: [
      'Multi-tenant vendor storefront isolation',
      'Dynamic inventory locking & flash-sale protection',
      'Automated invoice generation & tax compliance',
      'Instant Webhook dispatchers for courier logistics'
    ],
    techStack: ['Python', 'Django REST', 'React 19', 'PostgreSQL', 'Redis', 'Docker'],
    isFeatured: true,
    isLatestLaunch: true,
    launchDate: '2026-08-15',
    demoUrl: 'https://demo.skzlab.com',
    accentColor: '#F05A28',
    architectureTier: 'Tier-1 Distributed Core'
  },
  {
    id: 'prod-courierpulse',
    name: 'CourierPulse Logistics AI',
    tagline: 'Next-Gen Intelligent Parcel Tracking & Dispatch SaaS',
    description: 'Dynamic route optimization, rider geofencing, and automated courier sync. Integrates seamlessly with SKz LAB and third-party parcel carriers across South Asia and global nodes.',
    category: 'Logistics',
    status: 'Live',
    mrr: '$36,800',
    activeUsers: '89,400+',
    uptime: '99.98%',
    features: [
      'Algorithmic real-time dispatch assignment',
      'Carrier SLA prediction with machine learning',
      'Automated customer SMS/WhatsApp delivery alerts',
      'Return-to-origin (RTO) anomaly detection'
    ],
    techStack: ['FastAPI', 'Go Routines', 'GeoDjango', 'Kafka', 'React Native'],
    isFeatured: true,
    isLatestLaunch: true,
    launchDate: '2026-09-01',
    demoUrl: 'https://courierpulse.demo.skzlab.com',
    accentColor: '#00A8C6',
    architectureTier: 'Real-Time Telemetry Layer'
  },
  {
    id: 'prod-neuralassistant',
    name: 'OmniAssistant Studio',
    tagline: 'Contextual Multi-Modal AI Copilot for Enterprise Teams',
    description: 'Deep customer support and sales automation engine. Powered by Gemini LLMs with customized RAG vector pipelines trained on internal company knowledge bases.',
    category: 'AI & Automation',
    status: 'Enterprise Pilot',
    mrr: '$29,400',
    activeUsers: '45,000+',
    uptime: '99.95%',
    features: [
      'Omnichannel ticket resolution across 5 platforms',
      'Zero-shot intent classification and routing',
      'Live hallucination guardrails & SOC2 audit logs',
      'Automated action execution via function calling'
    ],
    techStack: ['Gemini 2.5 Pro', 'Python', 'Qdrant Vector DB', 'TypeScript', 'WebSockets'],
    isFeatured: true,
    isLatestLaunch: true,
    launchDate: '2026-09-18',
    demoUrl: 'https://omniassistant.demo.skzlab.com',
    accentColor: '#F59E0B',
    architectureTier: 'Cognitive Inference Cluster'
  },
  {
    id: 'prod-cloudsentinel',
    name: 'CloudPulse Sentinel',
    tagline: 'Zero-Downtime Microservice Gateway & SRE Controller',
    description: 'High-throughput API rate-limiting, distributed session management, and automated failover monitoring for cloud applications handling millions of concurrent requests.',
    category: 'Cloud Infra',
    status: 'Live',
    mrr: '$52,100',
    activeUsers: '310,000+',
    uptime: '100%',
    features: [
      'Distributed token-bucket rate limiter',
      'Edge anomaly detection with zero latency overhead',
      'Unified APM telemetry for Kubernetes clusters',
      'Instant canary deployments with rollbacks'
    ],
    techStack: ['Rust', 'Envoy Gateway', 'Prometheus', 'Grafana', 'eBPF'],
    isFeatured: false,
    isLatestLaunch: false,
    launchDate: '2026-04-10',
    demoUrl: 'https://cloudpulse.demo.skzlab.com',
    accentColor: '#10B981',
    architectureTier: 'High-Throughput Gateway'
  }
];

export const INITIAL_BUSINESS_UNITS = [
  {
    id: 'unit-saas-foundry',
    title: 'Enterprise SaaS Foundry',
    subtitle: 'Core Application Engineering',
    tagline: 'From napkin sketch to billion-request cloud infrastructure.',
    description: 'Our flagship engineering division that designs, codes, and ships industrial-strength SaaS platforms. We operate with rigid architectural blueprints, continuous verification, and extreme modularity.',
    capabilities: [
      'Distributed Headless Systems',
      'Multi-Tenant Tenant Isolation',
      'High-Throughput Billing Engines',
      'Fault-Tolerant Microservices'
    ],
    teamSize: '34 Full-Stack Engineers',
    flagship: 'SKz LAB Commerce Platform',
    iconName: 'Code2'
  },
  {
    id: 'unit-ai-lab',
    title: 'Cognitive & AI Systems Lab',
    subtitle: 'Autonomous Intelligence & RAG',
    tagline: 'Bridging frontier models into dependable business automation.',
    description: 'Developing domain-adapted generative agents, real-time multimodal reasoning engines, and private vector storage frameworks that execute business workflows without human friction.',
    capabilities: [
      'Agentic Function Orchestration',
      'Vector Embedding & RAG Pipelines',
      'Real-Time Multimodal Voice & Vision',
      'Strict Output Guardrails & Safety'
    ],
    teamSize: '18 AI Researchers & MLOps',
    flagship: 'OmniAssistant Enterprise Studio',
    iconName: 'Cpu'
  },
  {
    id: 'unit-cloud-sre',
    title: 'Cloud Infrastructure & SRE',
    subtitle: 'Global Resilience & Security',
    tagline: '99.99% reliability engineered into every byte.',
    description: 'Multi-region Kubernetes deployment topologies, active-active failover architecture, zero-trust perimeter security, and sub-10ms global edge caching networks.',
    capabilities: [
      'Kubernetes Multi-Cluster GitOps',
      'Zero-Trust Network Architecture',
      'Distributed High-Speed Caching',
      'Automated Disaster Recovery'
    ],
    teamSize: '14 DevOps & Security Architects',
    flagship: 'CloudPulse Global Edge',
    iconName: 'Server'
  },
  {
    id: 'unit-venture-studio',
    title: 'Venture Studio & Incubation',
    subtitle: 'Product Validation & Scaling',
    tagline: 'Turning high-impact hypotheses into market-dominant software.',
    description: 'We co-found and bootstrap software companies from the ground up, providing proprietary technical infrastructure, product management discipline, and go-to-market acceleration.',
    capabilities: [
      'Rapid MVP Prototyping in 4 Weeks',
      'Unit Economics Optimization',
      'Enterprise GTM Strategy',
      'Seed-to-Series A Technical Due Diligence'
    ],
    teamSize: '12 Product Strategists & Operators',
    flagship: 'CourierPulse Logistics Co-Venture',
    iconName: 'Rocket'
  }
];

export const INITIAL_TESTIMONIALS = [
  {
    id: 'test-1',
    author: 'Tareq Rahman',
    role: 'Chief Technology Officer',
    company: 'Apex Retail Enterprises',
    quote: 'SKz LAB rebuilt our core digital commerce infrastructure with SKz LAB Commerce Engine. Our checkout latency dropped from 2.4s to 120ms, and we seamlessly handled $1.8M in Black Friday transactions without a single dropped packet.',
    avatarText: 'TR',
    metric: '92% Faster Checkout',
    productUsed: 'SKz LAB Commerce Engine'
  },
  {
    id: 'test-2',
    author: 'Elena Rostova',
    role: 'VP of Product Engineering',
    company: 'Nordic Fleet Logistics',
    quote: 'The architectural rigor of SKz LAB is unmatched. CourierPulse AI transformed our last-mile fleet routing across 14 European distribution hubs, saving us 310 operational hours weekly.',
    avatarText: 'ER',
    metric: '310 Hrs/Week Saved',
    productUsed: 'CourierPulse Logistics AI'
  },
  {
    id: 'test-3',
    author: 'Marcus Vance',
    role: 'Founder & CEO',
    company: 'HyperScale Healthtech',
    quote: 'Most agencies build software like toy models; SKz LAB constructs software like skyscraper blueprints. Their team delivered our multi-tenant SaaS 6 weeks ahead of schedule with zero architectural debt.',
    avatarText: 'MV',
    metric: '6 Weeks Ahead of Schedule',
    productUsed: 'Enterprise SaaS Foundry'
  },
  {
    id: 'test-4',
    author: 'Farhana Kabir',
    role: 'Head of Customer Experience',
    company: 'Dhaka Fintech Alliance',
    quote: 'OmniAssistant has automated 78% of our tier-1 support across WhatsApp and Web simultaneously. The response accuracy and latency feel instantaneous. SKz LAB is the gold standard.',
    avatarText: 'FK',
    metric: '78% Support Automated',
    productUsed: 'OmniAssistant Studio'
  }
];

export const INITIAL_NODES = [
  {
    id: 'node-dhaka',
    city: 'Dhaka HQ',
    country: 'Bangladesh',
    region: 'South Asia Core',
    type: 'HQ & Foundry',
    latency: 18,
    activeServices: 24,
    coordinates: { x: 72, y: 46 },
    details: 'Primary Engineering Hub, Architectural Foundry & SKz LAB Core Lab.'
  },
  {
    id: 'node-sf',
    city: 'San Francisco',
    country: 'United States',
    region: 'North America West',
    type: 'AI Research',
    latency: 42,
    activeServices: 18,
    coordinates: { x: 19, y: 36 },
    details: 'Frontier AI Research & Venture Incubation Liaison.'
  },
  {
    id: 'node-london',
    city: 'London',
    country: 'United Kingdom',
    region: 'Europe Central',
    type: 'Cloud Hub',
    latency: 24,
    activeServices: 20,
    coordinates: { x: 49, y: 28 },
    details: 'Multi-Region Kubernetes Edge Cluster & Enterprise Client Gateway.'
  },
  {
    id: 'node-singapore',
    city: 'Singapore',
    country: 'Singapore',
    region: 'Asia Pacific Edge',
    type: 'Edge Gateway',
    latency: 12,
    activeServices: 16,
    coordinates: { x: 78, y: 58 },
    details: 'Ultra-low latency edge router & South East Asia API bridge.'
  },
  {
    id: 'node-tokyo',
    city: 'Tokyo',
    country: 'Japan',
    region: 'East Asia',
    type: 'Cloud Hub',
    latency: 28,
    activeServices: 14,
    coordinates: { x: 86, y: 38 },
    details: 'Active-active Redis replication & logistics cache node.'
  },
  {
    id: 'node-frankfurt',
    city: 'Frankfurt',
    country: 'Germany',
    region: 'Europe West',
    type: 'Cloud Hub',
    latency: 22,
    activeServices: 19,
    coordinates: { x: 53, y: 31 },
    details: 'GDPR-compliant data storage cluster & Sentinel telemetry hub.'
  }
];

export const COLOR_PRESETS = [
  {
    id: 'preset-skz',
    name: 'SKz Signature',
    primary: '#F05A28', // Signature Electric Orange
    secondary: '#00A8C6', // Signature Cyber Cyan
    description: 'Official SKz LAB studio identity with bold cybernetic high-contrast accents.'
  },
  {
    id: 'preset-obsidian',
    name: 'Emerald Matrix',
    primary: '#10B981', // Clean Emerald
    secondary: '#14B8A6', // Cyber Teal
    description: 'High-tech developer console aesthetic tailored for terminal and cloud platforms.'
  },
  {
    id: 'preset-venture',
    name: 'Royal Electric',
    primary: '#8B5CF6', // Electric Violet
    secondary: '#3B82F6', // Cobalt Blue
    description: 'Sophisticated venture studio palette inspired by deep tech incubators.'
  },
  {
    id: 'preset-luxury',
    name: 'Imperial Amber',
    primary: '#F59E0B', // Warm Amber
    secondary: '#D97706', // Deep Gold
    description: 'Architectural luxury finish with metallic warmth and subtle depth.'
  }
];

export const INITIAL_MESSAGES = [
  {
    id: 'msg-1',
    name: 'Ashraf Chowdhury',
    email: 'ashraf@techpulse.bd',
    phone: '+880 1711 000111',
    company: 'TechPulse Logistics',
    channel: 'whatsapp',
    subject: 'Enterprise Integration for CourierPulse AI',
    message: 'We are expanding our nationwide delivery network to 40+ districts. We would love to discuss custom API integration with our Django ERP backend and explore pricing tiers.',
    status: 'unread',
    createdAt: '2026-09-25T14:30:00Z',
    replies: []
  },
  {
    id: 'msg-2',
    name: 'Sarah Jenkins',
    email: 's.jenkins@vanguard.io',
    phone: '+1 (415) 890-2341',
    company: 'Vanguard Ventures',
    channel: 'email',
    subject: 'Inquiry regarding SKzLAB Commerce SaaS co-venture',
    message: 'Hello SKz LAB team. We reviewed your headless commerce architecture and are interested in co-incubating a specialized US B2B marketplace variant.',
    status: 'replied',
    createdAt: '2026-09-24T09:15:00Z',
    replies: [
      {
        id: 'rep-1',
        channel: 'email',
        message: 'Hi Sarah, thank you for reaching out! We would be delighted to host an architectural deep-dive call with our foundry leads.',
        timestamp: '2026-09-24T11:20:00Z'
      }
    ]
  },
  {
    id: 'msg-3',
    name: 'Rakibul Islam',
    email: 'rakibul@craftstudio.com',
    company: 'Craft Studio',
    channel: 'messenger',
    subject: 'Building a custom SaaS platform',
    message: 'Can your team help us design and architect a specialized inventory SaaS from scratch? What is your typical incubation timeline?',
    status: 'unread',
    createdAt: '2026-09-26T08:45:00Z',
    replies: []
  }
];
