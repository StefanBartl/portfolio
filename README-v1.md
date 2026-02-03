# 🎮 Developer Portfolio

Ein modernes Portfolio mit Terminal-Theme, interaktivem Fighting Game und Neovim Plugin Showcase.

## Table of content

- [🎮 Developer Portfolio](#developer-portfolio)
  - [🚀 Tech Stack](#tech-stack)
  - [📋 Warum pnpm?](#warum-pnpm)
    - [Vorteile von pnpm:](#vorteile-von-pnpm)
    - [Geschwindigkeitsvergleich:](#geschwindigkeitsvergleich)
  - [🛠️ Setup](#setup)
    - [1. Installation von pnpm (falls noch nicht vorhanden)](#1-installation-von-pnpm-falls-noch-nicht-vorhanden)
- [Via npm (einmalig)](#via-npm-einmalig)
- [Via Homebrew (macOS)](#via-homebrew-macos)
- [Via Scoop (Windows)](#via-scoop-windows)
- [Oder curl (Linux/macOS)](#oder-curl-linuxmacos)
    - [2. Dependencies installieren](#2-dependencies-installieren)
- [Mit pnpm (EMPFOHLEN)](#mit-pnpm-empfohlen)
- [Alternativ mit npm (LANGSAMER)](#alternativ-mit-npm-langsamer)
- [Oder mit yarn](#oder-mit-yarn)
    - [3. Umgebungsvariablen einrichten](#3-umgebungsvariablen-einrichten)
- [.env.example zu .env kopieren](#envexample-zu-env-kopieren)
- [Dann .env bearbeiten und deine Daten eintragen:](#dann-env-bearbeiten-und-deine-daten-eintragen)
- [- PUBLIC_SITE_URL (während Development: http://localhost:4321)](#public_site_url-whrend-development-httplocalhost4321)
- [- PUBLIC_EMAIL](#public_email)
- [- PUBLIC_GITHUB_USERNAME](#public_github_username)
    - [4. Development Server starten](#4-development-server-starten)
- [Mit pnpm](#mit-pnpm)
- [Mit npm](#mit-npm)
- [Mit yarn](#mit-yarn)
  - [📦 Verfügbare Commands](#verfgbare-commands)
- [Development](#development)
- [Build & Preview](#build-preview)
- [Type Checking](#type-checking)
- [Astro CLI](#astro-cli)
  - [🏗️ Projektstruktur](#projektstruktur)
  - [🎨 Features](#features)
    - [1. Terminal Interface](#1-terminal-interface)
    - [2. Fighting Game](#2-fighting-game)
    - [3. Plugin Showcase](#3-plugin-showcase)
    - [4. Recruiter Area](#4-recruiter-area)
  - [🔧 Konfiguration](#konfiguration)
    - [astro.config.mjs](#astroconfigmjs)
    - [Umgebungsvariablen](#umgebungsvariablen)
  - [🚀 Deployment](#deployment)
    - [Vercel (Empfohlen)](#vercel-empfohlen)
    - [Andere Plattformen](#andere-plattformen)
  - [📝 Anpassung](#anpassung)
    - [Inhalte ändern](#inhalte-ndern)
    - [Design anpassen](#design-anpassen)
  - [🐛 Troubleshooting](#troubleshooting)
    - [URL-Fehler beim Starten](#url-fehler-beim-starten)
    - [Fighting Game lädt nicht](#fighting-game-ldt-nicht)
    - [Styles werden nicht geladen](#styles-werden-nicht-geladen)
- [Cache löschen und neu starten](#cache-lschen-und-neu-starten)
  - [📸 Screenshots](#screenshots)
  - [🤝 Contributing](#contributing)
  - [📄 Lizenz](#lizenz)
  - [👤 Kontakt](#kontakt)

---

## 🚀 Tech Stack

- **Framework:** Astro 5.x
- **UI Library:** React 18
- **Styling:** TailwindCSS
- **Interaktivität:** HTMX
- **Deployment:** Vercel
- **Package Manager:** pnpm (empfohlen)

## 📋 Warum pnpm?

**Empfehlung: Verwende `pnpm` statt `npm` oder `yarn`**

### Vorteile von pnpm:

1. **Schnellere Installation** (~2x schneller als npm)
2. **Geringerer Speicherverbrauch** (symbolische Links statt Duplikate)
3. **Strikte Dependency Resolution** (verhindert phantom dependencies)
4. **Bessere Monorepo-Unterstützung**
5. **Native Workspaces**

### Geschwindigkeitsvergleich:

```
pnpm install:  ~15s  ⚡ FASTEST
yarn install:  ~25s  ⚙️
npm install:   ~35s  🐌 SLOWEST
```

## 🛠️ Setup

### 1. Installation von pnpm (falls noch nicht vorhanden)

```bash
# Via npm (einmalig)
npm install -g pnpm

# Via Homebrew (macOS)
brew install pnpm

# Via Scoop (Windows)
scoop install pnpm

# Oder curl (Linux/macOS)
curl -fsSL https://get.pnpm.io/install.sh | sh -
```

### 2. Dependencies installieren

```bash
# Mit pnpm (EMPFOHLEN)
pnpm install

# Alternativ mit npm (LANGSAMER)
npm install

# Oder mit yarn
yarn install
```

### 3. Umgebungsvariablen einrichten

```bash
# .env.example zu .env kopieren
cp .env.example .env

# Dann .env bearbeiten und deine Daten eintragen:
# - PUBLIC_SITE_URL (während Development: http://localhost:4321)
# - PUBLIC_EMAIL
# - PUBLIC_GITHUB_USERNAME
```

**Minimale .env für lokale Entwicklung:**
```env
PUBLIC_SITE_URL=http://localhost:4321
PUBLIC_EMAIL=deine@email.com
PUBLIC_GITHUB_USERNAME=deinusername
```

### 4. Development Server starten

```bash
# Mit pnpm
pnpm dev

# Mit npm
npm run dev

# Mit yarn
yarn dev
```

Die Website ist dann erreichbar unter: `http://localhost:4321`

## 📦 Verfügbare Commands

```bash
# Development
pnpm dev              # Start dev server

# Build & Preview
pnpm build            # Build für Production
pnpm preview          # Preview des Production Builds

# Type Checking
pnpm astro check      # TypeScript type checking

# Astro CLI
pnpm astro --help     # Astro CLI Hilfe
```

## 🏗️ Projektstruktur

```
portfolio-website/
├── src/
│   ├── components/       # React & Astro Components
│   │   ├── Terminal.tsx          # Interaktives Terminal
│   │   ├── PluginShowcase.tsx    # Plugin-Liste
│   │   └── game/                 # Fighting Game
│   │       ├── FightingGame.tsx
│   │       └── classes.ts
│   ├── layouts/          # Layout-Templates
│   │   └── BaseLayout.astro
│   ├── pages/            # Astro Pages (File-based Routing)
│   │   ├── index.astro           # Homepage
│   │   ├── recruiter.astro       # Geschützte Seite
│   │   └── api/                  # API-Endpoints
│   │       ├── certifications.ts
│   │       ├── case-studies.ts
│   │       └── schedule-call.ts
│   └── styles/           # Globale Styles
│       └── global.css
├── public/               # Statische Assets
│   ├── favicon.svg
│   └── game-assets/      # Game sprites & images
├── astro.config.mjs      # Astro Konfiguration
├── tailwind.config.mjs   # Tailwind Konfiguration
├── tsconfig.json         # TypeScript Config
├── .env.example          # Beispiel-Umgebungsvariablen
└── package.json
```

## 🎨 Features

### 1. Terminal Interface
- Interaktives Command-Line-Interface
- Verfügbare Commands: `help`, `whoami`, `skills`, `projects`, `contact`
- Command History (↑/↓ Pfeiltasten)
- Tab-Autocomplete

### 2. Fighting Game
- Browser-basiertes 2D Fighting Game
- 2-Spieler lokal
- Sprite-basierte Animationen
- Hitbox-Detection

### 3. Plugin Showcase
- Neovim Plugin Portfolio
- Vim-style Navigation
- Filter nach Tags
- GitHub-Integration

### 4. Recruiter Area
- Geschützter Bereich (URL-Token oder Game Victory)
- HTMX-powered für schnelles Laden
- Zertifikate & Case Studies
- Kontaktformular

## 🔧 Konfiguration

### astro.config.mjs

**WICHTIG:** Setze deine Domain in `site`:

```js
export default defineConfig({
  site: 'https://your-domain.com',  // <-- HIER ÄNDERN
  // ...
});
```

Dies ist erforderlich für:
- Canonical URLs
- Open Graph Tags
- Sitemap Generation
- RSS Feeds (falls aktiviert)

### Umgebungsvariablen

Siehe `.env.example` für alle verfügbaren Variablen.

**Minimale Konfiguration:**
- `PUBLIC_SITE_URL` - Deine Website-URL
- `PUBLIC_EMAIL` - Kontakt-Email
- `PUBLIC_GITHUB_USERNAME` - GitHub Username

**Optionale Features:**
- `GITHUB_TOKEN` - Für automatische Star-Counts
- `SENDGRID_API_KEY` - Email-Benachrichtigungen
- `DATABASE_URL` - Kontaktanfragen speichern

## 🚀 Deployment

### Vercel (Empfohlen)

1. Push dein Repository zu GitHub
2. Gehe zu [vercel.com](https://vercel.com)
3. Importiere dein Repository
4. Setze Environment Variables in Vercel Dashboard
5. Deploy!

**Wichtige Vercel Settings:**
- Framework Preset: Astro
- Build Command: `pnpm build` (oder `npm run build`)
- Output Directory: `dist`

### Andere Plattformen

- **Netlify:** Unterstützt Astro nativ
- **Cloudflare Pages:** Funktioniert out-of-the-box
- **Railway/Render:** Serverless-Adapter nutzen

## 📝 Anpassung

### Inhalte ändern

1. **Persönliche Infos:** Siehe `src/components/Terminal.tsx`
2. **Plugins:** Bearbeite `src/components/PluginShowcase.tsx`
3. **Tech Stack:** In `src/pages/index.astro`
4. **Contact Links:** In `BaseLayout.astro` und `.env`

### Design anpassen

- **Farben:** `tailwind.config.mjs` → `theme.extend.colors`
- **Fonts:** `BaseLayout.astro` → Google Fonts Link
- **Animationen:** `tailwind.config.mjs` → `keyframes`

## 🐛 Troubleshooting

### URL-Fehler beim Starten

**Problem:** `TypeError: Invalid URL`

**Lösung:**
* Stelle sicher, dass `site` in `astro.config.mjs` gesetzt ist
* Prüfe ob `.env` existiert und `PUBLIC_SITE_URL` enthält

### Fighting Game lädt nicht

**Problem:** Sprites werden nicht angezeigt

**Lösung:**
1. Prüfe ob `/public/game-assets/img/` existiert
2. Lade die Game-Assets herunter (siehe Game Assets Sektion)

### Styles werden nicht geladen

**Problem:** Tailwind-Klassen funktionieren nicht

**Lösung:**
```bash
# Cache löschen und neu starten
rm -rf .astro node_modules/.astro
pnpm install
pnpm dev
```

## 📸 Screenshots

_TODO: Screenshots einfügen_

## 🤝 Contributing

Dieses Projekt ist ein persönliches Portfolio-Template. Feel free to fork und anzupassen!

## 📄 Lizenz

MIT License - siehe LICENSE Datei

## 👤 Kontakt

- **Email:** your@email.com
- **GitHub:** [@yourusername](https://github.com/yourusername)
- **LinkedIn:** [yourprofile](https://linkedin.com/in/yourprofile)

---

**Built with 💚 and ☕**

_Powered by Astro, React, TailwindCSS, and way too much caffeine._
