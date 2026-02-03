# Portfolio Website

A modern, interactive portfolio website built with Astro, React, TailwindCSS, and HTMX. Features a terminal-style interface, embedded fighting game, and secure recruiter area.

## Table of content

- [Portfolio Website](#portfolio-website)
  - [🚀 Tech Stack](#tech-stack)
  - [📁 Project Structure](#project-structure)
  - [🛠️ Setup](#setup)
    - [Prerequisites](#prerequisites)
    - [Installation](#installation)
- [Clone the repository](#clone-the-repository)
- [Install dependencies](#install-dependencies)
- [Start development server](#start-development-server)
    - [Build for Production](#build-for-production)
  - [🎮 Fighting Game Assets](#fighting-game-assets)
  - [🔐 Recruiter Area](#recruiter-area)
    - [Customization](#customization)
  - [🎨 Customization](#customization-1)
    - [Personal Information](#personal-information)
    - [Plugins](#plugins)
    - [Color Theme](#color-theme)
  - [📝 To-Do: WASM Migration](#to-do-wasm-migration)
  - [🚀 Deployment](#deployment)
    - [Vercel](#vercel)
- [Install Vercel CLI](#install-vercel-cli)
- [Deploy](#deploy)
    - [Cloudflare Pages](#cloudflare-pages)
- [Build](#build)
- [Upload dist/ folder to Cloudflare Pages dashboard](#upload-dist-folder-to-cloudflare-pages-dashboard)
    - [Netlify](#netlify)
- [Install Netlify CLI](#install-netlify-cli)
- [Deploy](#deploy-1)
  - [📄 License](#license)
  - [🤝 Contributing](#contributing)
  - [📧 Contact](#contact)

---

## 🚀 Tech Stack

- **Framework**: Astro 4
- **UI Library**: React 18
- **Styling**: TailwindCSS 3
- **Interactivity**: HTMX 2
- **Animations**: GSAP
- **State Management**: Nanostores
- **Deployment**: Vercel/Cloudflare Pages

## 📁 Project Structure

```
portfolio-website/
├── src/
│   ├── components/
│   │   ├── Terminal.tsx              # Interactive terminal component
│   │   ├── PluginShowcase.tsx        # Neovim plugins showcase
│   │   └── game/
│   │       ├── classes.ts            # Game logic (JS → will migrate to C++/WASM)
│   │       └── FightingGame.tsx      # Game React wrapper
│   ├── layouts/
│   │   └── BaseLayout.astro          # Main layout with navigation
│   ├── pages/
│   │   ├── index.astro               # Homepage
│   │   ├── recruiter.astro           # Secret recruiter area (HTMX)
│   │   └── api/                      # API endpoints for HTMX
│   │       ├── certifications.ts
│   │       ├── case-studies.ts
│   │       └── schedule-call.ts
│   └── styles/
│       └── global.css                # Global styles & terminal theme
├── public/
│   └── game-assets/                  # Game sprites and assets
├── astro.config.mjs
├── tailwind.config.mjs
└── package.json
```

## 🛠️ Setup

### Prerequisites

- Node.js 18+
- npm/yarn/pnpm

### Installation

```bash
# Clone the repository
git clone https://github.com/yourusername/portfolio-website.git
cd portfolio-website

# Install dependencies
npm install

# Start development server
npm run dev
```

The site will be available at `http://localhost:4321`

### Build for Production

```bash
npm run build
npm run preview  # Preview the production build
```

## 🎮 Fighting Game Assets

The fighting game requires sprite assets. Download or create sprites and place them in:

```
public/game-assets/img/
├── background.png
├── shop.png
├── samuraiMack/
│   ├── Idle.png
│   ├── Run.png
│   ├── Jump.png
│   ├── Fall.png
│   ├── Attack1.png
│   ├── Take Hit.png
│   └── Death.png
└── kenji/
    ├── Idle.png
    ├── Run.png
    ├── Jump.png
    ├── Fall.png
    ├── Attack1.png
    ├── Take Hit.png
    └── Death.png
```

**Asset Sources:**
- [itch.io - Free Game Assets](https://itch.io/game-assets/free)
- [OpenGameArt.org](https://opengameart.org/)
- Original assets from your uploaded files

## 🔐 Recruiter Area

Access the recruiter area via:
- `/recruiter?token=recruiter-2025` (for recruiters you send the link to)
- `/recruiter?unlock=game-victory` (unlocked by beating the game)

### Customization

Edit the token in `src/pages/recruiter.astro`:

```astro
const isAuthorized = token === 'your-custom-token' || unlock === 'game-victory';
```

## 🎨 Customization

### Personal Information

Update your details in:
- `src/components/Terminal.tsx` - Terminal commands and bio
- `src/pages/index.astro` - Contact info, links
- `src/layouts/BaseLayout.astro` - Social links in footer

### Plugins

Edit plugin data in `src/components/PluginShowcase.tsx`:

```typescript
const PLUGINS: Plugin[] = [
  {
    name: 'your-plugin.nvim',
    description: 'Your plugin description',
    // ... more fields
  },
];
```

### Color Theme

Customize colors in `tailwind.config.mjs`:

```javascript
colors: {
  terminal: {
    bg: '#0a0e27',        // Dark background
    text: '#00ff00',      // Matrix green
    accent: '#00ffff',    // Cyan accent
  },
}
```

## 📝 To-Do: WASM Migration

The fighting game is currently in JavaScript. Migration plan:

1. **Phase 1**: Convert to TypeScript (✅ Done)
2. **Phase 2**: Create C++ equivalent
3. **Phase 3**: Compile to WebAssembly
4. **Phase 4**: Integrate WASM module

See `/docs/wasm-migration-plan.md` for details (create this file for your migration notes).

## 🚀 Deployment

### Vercel

```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel
```

### Cloudflare Pages

```bash
# Build
npm run build

# Upload dist/ folder to Cloudflare Pages dashboard
```

### Netlify

```bash
# Install Netlify CLI
npm i -g netlify-cli

# Deploy
netlify deploy --prod
```

## 📄 License

MIT License - Feel free to use this as a template for your own portfolio!

## 🤝 Contributing

This is a personal portfolio, but if you find bugs or have suggestions, feel free to open an issue!

## 📧 Contact

- Email: your@email.com
- GitHub: [@yourusername](https://github.com/yourusername)
- LinkedIn: [Your Name](https://linkedin.com/in/yourprofile)

---

Built with ❤️ using Astro, React, and TailwindCSS
