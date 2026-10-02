# SKz LAB — SaaS Foundry & Engineering Venture Studio

Full-stack production platform partitioned into dedicated **Backend** (Django REST Framework) and **Frontend** (React 19 + Tailwind + Vite).

---

## Architecture Overview

```
SKzLAB/
├── Backend/                            # Django REST Framework Microservices Core
│   ├── ai_assistant/                   # Cognitive AI Copilot (Gemini API & Telemetry)
│   ├── api/                            # Central Microservice Router & Health Checks
│   ├── core/                           # Units, Nodes, Testimonials, Omnichannel Messages
│   ├── order/                          # Order State Machine & Checkout Processing
│   ├── products/                       # SaaS Products Catalog CRUD & Telemetry
│   ├── users/                          # User Profiles & Identity Management
│   ├── skzlab/                         # Project Configuration (Settings, ASGI, WSGI, URLs)
│   ├── skzlab_env/                     # Python Virtual Environment
│   ├── .env                            # Backend Credentials, Database, & Keys
│   ├── .env.example                    # Environment Template
│   ├── .gitignore                      # Python/Django Gitignore
│   ├── manage.py                       # Django CLI Utility
│   └── requirements.txt                # Python Dependencies
│
└── Frontend/                           # Modern High-Performance SPA
    ├── public/                         # Public static files
    ├── src/
    │   ├── assets/                     # Brand assets
    │   ├── components/                 # Component Library
    │   │   ├── common/                 # Navbar, Footer, Preloader, Modals, Logo
    │   │   ├── landing/                # Modular Landing Sections (Categorized into Folders)
    │   │   │   ├── Hero/               # Phase 01-05 Interactive Builder Engine
    │   │   │   ├── Architecture/       # Blueprint & 6-Layer Cloud Stack
    │   │   │   ├── LatestLaunches/     # Production Launches & Product Specs
    │   │   │   ├── ProductsShowcase/   # Live Console & SDK Telemetry
    │   │   │   ├── GlobalPresence/     # Interactive World Topology Map
    │   │   │   ├── BusinessUnits/      # Specialized Engineering Divisions
    │   │   │   ├── Testimonials/       # 3D Coverflow Executive Reviews
    │   │   │   └── index.js            # Barrel Export
    │   │   ├── admin/                  # Studio CMS & Omnichannel Admin Portal
    │   │   └── index.js
    │   ├── Context/                    # Reactive AppContext (Local & Cloud Sync)
    │   ├── hooks/                      # Custom Hooks (useSKzLab)
    │   ├── Layouts/                    # Master App Layout (MainLayout)
    │   ├── pages/                      # LandingPage, AdminPage
    │   ├── routers/                    # Route Management (AppRouter)
    │   ├── services/                   # Django REST Framework API Client (api.js)
    │   ├── data/                       # Default Seed & Initial Data (initialData.js)
    │   ├── App.css                     # Glassmorphic Styles & Color Token Gradients
    │   ├── App.jsx                     # Core Application Component
    │   ├── index.css                   # Tailwind Directives & CSS Variables
    │   └── main.jsx                    # React 19 Entrypoint
    ├── .gitignore
    ├── eslint.config.js
    ├── index.html
    ├── package.json
    ├── README.md
    └── vite.config.js
```

---

## Quickstart Guide

### 1. Run the Frontend
```bash
# Option A: From workspace root
npm run dev

# Option B: Inside Frontend folder
cd Frontend
npm run dev
```
Accessible at: `http://localhost:3000`

### 2. Run the Backend
```bash
# Option A: From workspace root
npm run dev:backend

# Option B: Inside Backend folder
cd Backend
skzlab_env\Scripts\activate
python manage.py runserver 8000
```
API Root accessible at: `http://127.0.0.1:8000/api/`
API Health Probe: `http://127.0.0.1:8000/api/health/`

---

## Database Configuration

Backend supports both **SQLite** for rapid local development and **Neon Tech PostgreSQL** for production.

To switch to Neon Tech:
1. Open [Backend/.env](file:///Backend/.env)
2. Set `USE_NEON=True`
3. Paste your Neon PostgreSQL connection string into `NEON_DATABASE_URL`:
   ```env
   USE_NEON=True
   NEON_DATABASE_URL=postgresql://<user>:<password>@<endpoint>.us-east-2.aws.neon.tech/<dbname>?sslmode=require
   ```
4. Run migrations:
   ```bash
   Backend\skzlab_env\Scripts\python.exe Backend\manage.py migrate
   Backend\skzlab_env\Scripts\python.exe Backend\manage.py seed_skzlab
   ```

---

## Environment & Security Credentials (`.env`)

All project secrets, authentication tokens, and service credentials are systematically organized in `.env` files:
- **Master Root Vault**: [`.env`](file:///.env)
- **Frontend Vault**: [`Frontend/.env`](file:///Frontend/.env)
- **Backend Vault**: [`Backend/.env`](file:///Backend/.env)

### Admin Console Gate Credentials:
The Studio Admin Console is protected by an environment-driven authentication barrier:
- **Admin Username**: `admin` (or `VITE_ADMIN_USERNAME` in `.env`)
- **Admin Password**: `admin@skzlab2026` (or `VITE_ADMIN_PASSWORD` in `.env`)
- **Master Security PIN**: `2026` (or `VITE_ADMIN_PIN` in `.env`)

---

## Understanding the `dist/` Folder

### What is the `dist/` folder?
`dist` stands for **Distribution**. When you run:
```bash
npm run build
```
Vite compiles, tree-shakes, minifies, and optimizes all React JSX, CSS, and asset files into ultra-compact, production-ready static HTML, JavaScript, and CSS bundles inside `Frontend/dist/`.

### Why isn't `dist/` needed in local development?
- In local development (`npm run dev`), Vite uses native browser **ES Modules (ESM)** to serve and hot-reload code instantly in memory without building a bundle.
- Therefore, the `dist/` folder is only needed when deploying the application to production hosting platforms (e.g. Vercel, Netlify, Cloudflare Pages, AWS S3, or serving via Nginx/Django static files).
- The root `dist/` has been purged, and production builds are cleanly output to `Frontend/dist/` when you execute `npm run build`.
