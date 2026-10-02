from django.core.management.base import BaseCommand
from products.models import Product
from core.models import BusinessUnit, Testimonial, GlobalNode, ContactMessage

class Command(BaseCommand):
    help = 'Seeds SKzLAB database with initial SaaS products, units, nodes, and testimonials.'

    def handle(self, *args, **options):
        self.stdout.write("Seeding SKzLAB database...")

        # 1. Products
        products_data = [
            {
                "slug": "prod-skzlab",
                "name": "SKzLab Commerce Engine",
                "tagline": "Autonomous Headless Multi-Tenant E-Commerce SaaS",
                "description": "Engineered on high-performance Django REST microservices with real-time order processing, intelligent cart orchestration, and sub-100ms multi-vendor checkout pipelines.",
                "category": "E-Commerce",
                "status": "Live",
                "mrr": "$48,200",
                "active_users": "142,000+",
                "uptime": "99.99%",
                "features": [
                    "Multi-tenant vendor storefront isolation",
                    "Dynamic inventory locking & flash-sale protection",
                    "Automated invoice generation & tax compliance",
                    "Instant Webhook dispatchers for courier logistics"
                ],
                "tech_stack": ["Python", "Django REST", "React 19", "PostgreSQL", "Redis", "Docker"],
                "is_featured": True,
                "is_latest_launch": True,
                "launch_date": "2026-08-15",
                "demo_url": "https://demo.skzlab.com",
                "accent_color": "#F05A28",
                "architecture_tier": "Tier-1 Distributed Core"
            },
            {
                "slug": "prod-courierpulse",
                "name": "CourierPulse Logistics AI",
                "tagline": "Next-Gen Intelligent Parcel Tracking & Dispatch SaaS",
                "description": "Dynamic route optimization, rider geofencing, and automated courier sync. Integrates seamlessly with SKzLAB and third-party parcel carriers across South Asia and global nodes.",
                "category": "Logistics",
                "status": "Live",
                "mrr": "$36,800",
                "active_users": "89,400+",
                "uptime": "99.98%",
                "features": [
                    "Algorithmic real-time dispatch assignment",
                    "Carrier SLA prediction with machine learning",
                    "Automated customer SMS/WhatsApp delivery alerts",
                    "Return-to-origin (RTO) anomaly detection"
                ],
                "tech_stack": ["FastAPI", "Go Routines", "GeoDjango", "Kafka", "React Native"],
                "is_featured": True,
                "is_latest_launch": True,
                "launch_date": "2026-09-01",
                "demo_url": "https://courierpulse.demo.skzlab.com",
                "accent_color": "#00A8C6",
                "architecture_tier": "Real-Time Telemetry Layer"
            },
            {
                "slug": "prod-neuralassistant",
                "name": "OmniAssistant Studio",
                "tagline": "Contextual Multi-Modal AI Copilot for Enterprise Teams",
                "description": "Deep customer support and sales automation engine. Powered by Gemini LLMs with customized RAG vector pipelines trained on internal company knowledge bases.",
                "category": "AI & Automation",
                "status": "Enterprise Pilot",
                "mrr": "$29,400",
                "active_users": "45,000+",
                "uptime": "99.95%",
                "features": [
                    "Omnichannel ticket resolution across 5 platforms",
                    "Zero-shot intent classification and routing",
                    "Live hallucination guardrails & SOC2 audit logs",
                    "Automated action execution via function calling"
                ],
                "tech_stack": ["Gemini 2.5 Pro", "Python", "Qdrant Vector DB", "TypeScript", "WebSockets"],
                "is_featured": True,
                "is_latest_launch": True,
                "launch_date": "2026-09-18",
                "demo_url": "https://omniassistant.demo.skzlab.com",
                "accent_color": "#F59E0B",
                "architecture_tier": "Cognitive Inference Cluster"
            },
            {
                "slug": "prod-cloudsentinel",
                "name": "CloudPulse Sentinel",
                "tagline": "Zero-Downtime Microservice Gateway & SRE Controller",
                "description": "High-throughput API rate-limiting, distributed session management, and automated failover monitoring for cloud applications handling millions of concurrent requests.",
                "category": "Cloud Infra",
                "status": "Live",
                "mrr": "$52,100",
                "active_users": "310,000+",
                "uptime": "100%",
                "features": [
                    "Distributed token-bucket rate limiter",
                    "Edge anomaly detection with zero latency overhead",
                    "Unified APM telemetry for Kubernetes clusters",
                    "Instant canary deployments with rollbacks"
                ],
                "tech_stack": ["Rust", "Envoy Gateway", "Prometheus", "Grafana", "eBPF"],
                "is_featured": False,
                "is_latest_launch": False,
                "launch_date": "2026-04-10",
                "demo_url": "https://cloudpulse.demo.skzlab.com",
                "accent_color": "#10B981",
                "architecture_tier": "High-Throughput Gateway"
            }
        ]

        for p_data in products_data:
            Product.objects.update_or_create(slug=p_data["slug"], defaults=p_data)
        self.stdout.write(self.style.SUCCESS(f"[OK] Seeded {len(products_data)} products"))

        # 2. Business Units
        units_data = [
            {
                "slug": "unit-saas-foundry",
                "title": "Enterprise SaaS Foundry",
                "subtitle": "Core Application Engineering",
                "tagline": "From napkin sketch to billion-request cloud infrastructure.",
                "description": "Our flagship engineering division that designs, codes, and ships industrial-strength SaaS platforms.",
                "capabilities": ["Distributed Headless Systems", "Multi-Tenant Tenant Isolation", "High-Throughput Billing Engines", "Fault-Tolerant Microservices"],
                "team_size": "34 Full-Stack Engineers",
                "flagship": "SKzLab Commerce Platform",
                "icon_name": "Code2"
            },
            {
                "slug": "unit-ai-lab",
                "title": "Cognitive & AI Systems Lab",
                "subtitle": "Autonomous Intelligence & RAG",
                "tagline": "Bridging frontier models into dependable business automation.",
                "description": "Developing domain-adapted generative agents, real-time multimodal reasoning engines, and private vector storage frameworks.",
                "capabilities": ["Agentic Function Orchestration", "Vector Embedding & RAG Pipelines", "Real-Time Multimodal Voice & Vision", "Strict Output Guardrails & Safety"],
                "team_size": "18 AI Researchers & MLOps",
                "flagship": "OmniAssistant Enterprise Studio",
                "icon_name": "Cpu"
            },
            {
                "slug": "unit-cloud-sre",
                "title": "Cloud Infrastructure & SRE",
                "subtitle": "Global Resilience & Security",
                "tagline": "99.99% reliability engineered into every byte.",
                "description": "Multi-region Kubernetes deployment topologies, active-active failover architecture, and zero-trust perimeter security.",
                "capabilities": ["Kubernetes Multi-Cluster GitOps", "Zero-Trust Network Architecture", "Distributed High-Speed Caching", "Automated Disaster Recovery"],
                "team_size": "14 DevOps & Security Architects",
                "flagship": "CloudPulse Global Edge",
                "icon_name": "Server"
            },
            {
                "slug": "unit-venture-studio",
                "title": "Venture Studio & Incubation",
                "subtitle": "Product Validation & Scaling",
                "tagline": "Turning high-impact hypotheses into market-dominant software.",
                "description": "We co-found and bootstrap software companies from the ground up, providing proprietary technical infrastructure.",
                "capabilities": ["Rapid MVP Prototyping in 4 Weeks", "Unit Economics Optimization", "Enterprise GTM Strategy", "Seed-to-Series A Technical Due Diligence"],
                "team_size": "12 Product Strategists & Operators",
                "flagship": "CourierPulse Logistics Co-Venture",
                "icon_name": "Rocket"
            }
        ]

        for u_data in units_data:
            BusinessUnit.objects.update_or_create(slug=u_data["slug"], defaults=u_data)
        self.stdout.write(self.style.SUCCESS(f"[OK] Seeded {len(units_data)} business units"))

        # 3. Global Nodes
        nodes_data = [
            {"city": "Dhaka HQ", "country": "Bangladesh", "region": "South Asia Core", "node_type": "HQ & Foundry", "latency": 18, "active_services": 24, "coordinates": {"x": 72, "y": 46}, "details": "Primary Engineering Hub, Architectural Foundry & SKzLab Core Lab."},
            {"city": "San Francisco", "country": "United States", "region": "North America West", "node_type": "AI Research", "latency": 42, "active_services": 18, "coordinates": {"x": 19, "y": 36}, "details": "Frontier AI Research & Venture Incubation Liaison."},
            {"city": "London", "country": "United Kingdom", "region": "Europe Central", "node_type": "Cloud Hub", "latency": 24, "active_services": 20, "coordinates": {"x": 49, "y": 28}, "details": "Multi-Region Kubernetes Edge Cluster & Enterprise Client Gateway."},
            {"city": "Singapore", "country": "Singapore", "region": "Asia Pacific Edge", "node_type": "Edge Gateway", "latency": 12, "active_services": 16, "coordinates": {"x": 78, "y": 58}, "details": "Ultra-low latency edge router & South East Asia API bridge."},
            {"city": "Tokyo", "country": "Japan", "region": "East Asia", "node_type": "Cloud Hub", "latency": 28, "active_services": 14, "coordinates": {"x": 86, "y": 38}, "details": "Active-active Redis replication & logistics cache node."},
            {"city": "Frankfurt", "country": "Germany", "region": "Europe West", "node_type": "Cloud Hub", "latency": 22, "active_services": 19, "coordinates": {"x": 53, "y": 31}, "details": "GDPR-compliant data storage cluster & Sentinel telemetry hub."}
        ]

        for n_data in nodes_data:
            GlobalNode.objects.update_or_create(city=n_data["city"], defaults=n_data)
        self.stdout.write(self.style.SUCCESS(f"[OK] Seeded {len(nodes_data)} global nodes"))

        self.stdout.write(self.style.SUCCESS("All SKzLAB entities seeded successfully!"))
