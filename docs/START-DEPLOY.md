# Portfolio Website - Projekt-Übersicht

## Table of content

- [Portfolio Website - Projekt-Übersicht](#portfolio-website-projekt-bersicht)
  - [🎨 Design & UI](#design-ui)
    - [💻 Interaktive Terminal-Komponente](#interaktive-terminal-komponente)
  - [🎮 Fighting Game](#fighting-game)
  - [🔌 Neovim Plugin Showcase](#neovim-plugin-showcase)
  - [🔐 Recruiter Secret Area](#recruiter-secret-area)
  - [🛠️ Tech Stack Integration](#tech-stack-integration)
  - [📁 Projekt-Struktur](#projekt-struktur)
  - [Nächste Schritte](#nchste-schritte)
    - [1. Sofort starten (5 Minuten)](#1-sofort-starten-5-minuten)
    - [2. Personalisierung (30 Minuten)](#2-personalisierung-30-minuten)
    - [3. Game Assets hinzufügen (variabel)](#3-game-assets-hinzufgen-variabel)
    - [4. Deployment (15 Minuten)](#4-deployment-15-minuten)
  - [Wichtige Dateien zum Anpassen](#wichtige-dateien-zum-anpassen)
    - [Terminal Commands & Bio](#terminal-commands-bio)
    - [Plugins](#plugins)
    - [Certifications (Recruiter Area)](#certifications-recruiter-area)
    - [Colors](#colors)
  - [Features im Detail](#features-im-detail)
    - [Terminal Component](#terminal-component)
    - [Fighting Game](#fighting-game-1)
    - [Plugin Showcase](#plugin-showcase)
    - [Recruiter Area](#recruiter-area)
  - [Pro-Tipps](#pro-tipps)
    - [Performance](#performance)
    - [SEO](#seo)
    - [Accessibility](#accessibility)
    - [Testing](#testing)
  - [Troubleshooting](#troubleshooting)
    - [Port belegt?](#port-belegt)
    - [TypeScript Fehler?](#typescript-fehler)
    - [Game Assets fehlen?](#game-assets-fehlen)
  - [🎨 Design-Philosophie](#design-philosophie)
  - [Ready to Deploy!](#ready-to-deploy)
    - [Quick Deploy](#quick-deploy)
- [Vercel (empfohlen)](#vercel-empfohlen)
- [Oder Cloudflare](#oder-cloudflare)
- [Upload dist/ zu Cloudflare Pages](#upload-dist-zu-cloudflare-pages)

---

## 🎨 Design & UI
- ✅ Modernes Terminal-Design mit Matrix-Theme
- ✅ Responsive Layout für alle Geräte
- ✅ TailwindCSS mit custom Theme
- ✅ Animationen und Übergänge (GSAP ready)
- ✅ Clean, minimalistisches Interface


### 💻 Interaktive Terminal-Komponente
- ✅ Echtes Terminal-Feeling mit Cursor
- ✅ Command History (Pfeiltasten hoch/runter)
- ✅ Tab-Autocomplete
- ✅ Custom Commands:
  - `whoami` - Persönliche Info
  - `skills` - Skill-Visualisierung
  - `projects` - Projekt-Liste
  - `neofetch` - System-Info im Neofetch-Stil
  - `cat bio.txt` - Biografie
  - `ls` - Verzeichnis-Listing
  - `help` - Hilfe
  - `clear` - Terminal leeren

## 🎮 Fighting Game
- ✅ Vollständig spielbarer 2-Player Fighter
- ✅ Health-Bars & Timer-System
- ✅ Kollisions-Erkennung
- ✅ Animation-System (Idle, Run, Jump, Attack, etc.)
- ✅ Keyboard-Controls für beide Spieler
- ✅ Game-Over & Restart-Funktionalität
- ✅ TypeScript-basiert (bereit für C++/WASM Migration)

## 🔌 Neovim Plugin Showcase
- ✅ Split-Pane Layout (wie Neovim)
- ✅ Plugin-Liste mit Details
- ✅ Filter nach Tags
- ✅ Installation-Instructions
- ✅ GitHub/Docs Links
- ✅ Vim-Style Navigation Hints

## 🔐 Recruiter Secret Area
- ✅ Token-basierter Zugang
- ✅ HTMX-powered für moderne UX
- ✅ Certifications Showcase
- ✅ Case Studies Display
- ✅ Download-Bereich (CV, Portfolio)
- ✅ Schedule Call Funktion
- ✅ API Endpoints für dynamisches Laden

## 🛠️ Tech Stack Integration
- ✅ Astro 4 als Framework
- ✅ React 18 für interaktive Components
- ✅ TailwindCSS für Styling
- ✅ HTMX für Backend-Driven UX
- ✅ TypeScript überall
- ✅ Nanostores für State Management

## 📁 Projekt-Struktur

```
portfolio-website/
├── src/
│   ├── components/
│   │   ├── Terminal.tsx              ✅ Interaktives Terminal
│   │   ├── PluginShowcase.tsx        ✅ Plugin-Galerie
│   │   └── game/
│   │       ├── classes.ts            ✅ Game Logic (TypeScript)
│   │       └── FightingGame.tsx      ✅ Game Wrapper
│   ├── layouts/
│   │   └── BaseLayout.astro          ✅ Main Layout
│   ├── pages/
│   │   ├── index.astro               ✅ Homepage
│   │   ├── recruiter.astro           ✅ Secret Area
│   │   └── api/
│   │       ├── certifications.ts     ✅ HTMX Endpoint
│   │       ├── case-studies.ts       ✅ HTMX Endpoint
│   │       └── schedule-call.ts      ✅ HTMX Endpoint
│   └── styles/
│       └── global.css                ✅ Global Styles + Theme
├── docs/
│   ├── QUICK_START.md                ✅ Quick Start Guide
│   ├── DEPLOYMENT.md                 ✅ Deployment Guide
│   └── wasm-migration-plan.md        ✅ WASM Migration Plan
├── public/
│   ├── favicon.svg                   ✅ Custom Favicon
│   └── game-assets/                  📝 Platzhalter (Assets hinzufügen)
├── astro.config.mjs                  ✅ Astro Config
├── tailwind.config.mjs               ✅ Tailwind Config + Theme
├── tsconfig.json                     ✅ TypeScript Config
├── package.json                      ✅ Dependencies
├── .env.example                      ✅ Env Template
├── .gitignore                        ✅ Git Ignore
└── README.md                         ✅ Vollständige Dokumentation
```

---

## Nächste Schritte

### 1. Sofort starten (5 Minuten)
```bash
cd portfolio-website
npm install
npm run dev
```

### 2. Personalisierung (30 Minuten)
- [ ] Terminal-Bio aktualisieren (`src/components/Terminal.tsx`)
- [ ] Plugins hinzufügen (`src/components/PluginShowcase.tsx`)
- [ ] Kontakt-Info aktualisieren (`src/layouts/BaseLayout.astro`)
- [ ] Farben anpassen (`tailwind.config.mjs`)

### 3. Game Assets hinzufügen (variabel)
- [ ] Fighting Game Sprites herunterladen
- [ ] In `public/game-assets/img/` ablegen
- [ ] Siehe README für Asset-Quellen

### 4. Deployment (15 Minuten)
```bash
vercel        # Oder Cloudflare/Netlify
```

---

## Wichtige Dateien zum Anpassen

### Terminal Commands & Bio
**Datei**: `src/components/Terminal.tsx`
```typescript
const COMMANDS = {
  whoami: `DEINE INFO HIER`,
  'cat bio.txt': `DEINE BIO HIER`,
  // ...
}
```

### Plugins
**Datei**: `src/components/PluginShowcase.tsx`
```typescript
const PLUGINS: Plugin[] = [
  {
    name: 'dein-plugin.nvim',
    description: 'Deine Beschreibung',
    // ...
  }
];
```

### Certifications (Recruiter Area)
**Datei**: `src/pages/api/certifications.ts`
```typescript
const certifications = [
  {
    title: 'Dein Zertifikat',
    issuer: 'Aussteller',
    // ...
  }
];
```

### Colors
**Datei**: `tailwind.config.mjs`
```javascript
terminal: {
  bg: '#0a0e27',      // Deine Farbe
  text: '#00ff00',    // Deine Farbe
  accent: '#00ffff',  // Deine Farbe
}
```

---

## Features im Detail

### Terminal Component
- **Realistische Simulation**: Echtes Terminal-Gefühl
- **Command History**: Pfeiltasten für History
- **Tab-Completion**: Tab für Autocomplete
- **Erweiterbar**: Einfach neue Commands hinzufügen

### Fighting Game
- **2-Player Local**: Spiel direkt im Browser
- **Volle Kontrolle**: WASD + Space / Arrows + Down
- **Animations**: Flüssige Sprite-Animationen
- **TypeScript**: Type-safe, bereit für WASM

### Plugin Showcase
- **Split-Pane**: Wie in Neovim
- **Live Filter**: Suche nach Tags
- **Detail-Ansicht**: Volle Plugin-Info
- **Installation Code**: Copy-Paste ready

### Recruiter Area
- **HTMX-Powered**: Moderne UX ohne viel JS
- **Progressive Loading**: Content lädt on-demand
- **Secure Access**: Token-basiert
- **Professional**: Case Studies & Certs

---

## Pro-Tipps

### Performance
- Lazy load Components mit `client:load`
- Images optimieren mit Astro Image
- Bundle size monitoren

### SEO
- Meta-Tags in `BaseLayout.astro`
- Sitemap via Astro Integration
- Structured Data für besseres Ranking

### Accessibility
- Keyboard Navigation implementiert
- Semantic HTML verwendet
- ARIA Labels wo nötig

### Testing
- Teste auf verschiedenen Browsern
- Mobile First Development
- Performance mit Lighthouse

---

## Troubleshooting

### Port belegt?
```bash
npm run dev -- --port 3000
```

### TypeScript Fehler?
```bash
npm run astro check
```

### Game Assets fehlen?
- Siehe `docs/QUICK_START.md` für Asset-Quellen
- Oder verwende Platzhalter-Images

---

## 🎨 Design-Philosophie

- **Terminal-First**: Alles dreht sich um das Terminal-Theme
- **Clean & Minimal**: Keine Ablenkungen
- **Interaktiv**: Zum Spielen und Erkunden einladend
- **Professional**: Trotz Spielereien professionell

---

## Ready to Deploy!

Das Projekt ist **production-ready**. Du kannst es sofort deployen und später Schritt für Schritt anpassen.

### Quick Deploy
```bash
# Vercel (empfohlen)
npm i -g vercel
vercel

# Oder Cloudflare
npm run build
# Upload dist/ zu Cloudflare Pages
```

---

