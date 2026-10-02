# SKz LAB — Frontend Architecture

Next-generation high-velocity SaaS product foundry & venture studio user interface.

## Directory Structure

```
Frontend/
├── public/                 # Static public assets
├── src/
│   ├── assets/             # Brand logos and images
│   ├── components/
│   │   ├── common/         # Navbar, Footer, Preloader, Modals, Logo
│   │   ├── landing/        # Modular sections categorized by subfolders
│   │   │   ├── Hero/
│   │   │   ├── Architecture/
│   │   │   ├── LatestLaunches/
│   │   │   ├── ProductsShowcase/
│   │   │   ├── GlobalPresence/
│   │   │   ├── BusinessUnits/
│   │   │   └── Testimonials/
│   │   ├── admin/          # Studio CMS & Omnichannel Admin Console
│   │   └── index.js
│   ├── Context/            # Reactive AppContext store with localStorage sync
│   ├── hooks/              # Custom React hooks (useSKzLab)
│   ├── Layouts/            # Master application layouts (MainLayout)
│   ├── pages/              # LandingPage, AdminPage
│   ├── routers/            # Client routing coordinator (AppRouter)
│   ├── services/           # Django REST Framework API client (api.js)
│   ├── data/               # Default initial data and models (initialData.js)
│   ├── App.css             # Glassmorphism & custom utility styles
│   ├── App.jsx             # Top-level application component
│   ├── index.css           # Tailwind CSS & theme tokens
│   └── main.jsx            # Application entrypoint
├── .gitignore
├── eslint.config.js
├── index.html
├── package.json
├── README.md
└── vite.config.js
```

## Running the Frontend

```bash
# From Frontend directory
npm run dev

# Build for production
npm run build
```
