# 🚀 Quick Start Guide

Diese Anleitung hilft dir, das Portfolio in unter 5 Minuten zum Laufen zu bringen.

## Table of content

- [🚀 Quick Start Guide](#quick-start-guide)
  - [📦 Schritt 1: pnpm installieren](#schritt-1-pnpm-installieren)
  - [🔧 Schritt 2: Dependencies installieren](#schritt-2-dependencies-installieren)
- [Im Projektverzeichnis](#im-projektverzeichnis)
  - [⚙️ Schritt 3: Umgebungsvariablen einrichten](#schritt-3-umgebungsvariablen-einrichten)
- [1. .env.example kopieren](#1-envexample-kopieren)
- [2. .env bearbeiten (minimale Konfiguration):](#2-env-bearbeiten-minimale-konfiguration)
  - [🎯 Schritt 4: astro.config.mjs anpassen](#schritt-4-astroconfigmjs-anpassen)
  - [🏃 Schritt 5: Development Server starten](#schritt-5-development-server-starten)
  - [✨ Was funktioniert jetzt?](#was-funktioniert-jetzt)
  - [🎮 Game Assets einrichten (Optional)](#game-assets-einrichten-optional)
    - [Option 1: Download vorgefertigte Assets](#option-1-download-vorgefertigte-assets)
- [TODO: Link zu Asset-Pack einfügen](#todo-link-zu-asset-pack-einfgen)
    - [Option 2: Eigene Assets verwenden](#option-2-eigene-assets-verwenden)
  - [🎨 Nächste Schritte](#nchste-schritte)
    - [1. Inhalte anpassen](#1-inhalte-anpassen)
    - [2. Farben & Theme anpassen](#2-farben-theme-anpassen)
    - [3. Für Production deployen](#3-fr-production-deployen)
  - [🐛 Häufige Probleme](#hufige-probleme)
    - ["Invalid URL" Error](#invalid-url-error)
    - [Tailwind-Styles laden nicht](#tailwind-styles-laden-nicht)
- [Cache löschen](#cache-lschen)
    - [Port 4321 bereits in Verwendung](#port-4321-bereits-in-verwendung)
- [Anderen Port nutzen](#anderen-port-nutzen)
    - [pnpm Command not found](#pnpm-command-not-found)
- [pnpm global installieren](#pnpm-global-installieren)
- [Oder temporär npm nutzen](#oder-temporr-npm-nutzen)
  - [📚 Weitere Ressourcen](#weitere-ressourcen)
  - [💡 Tipps](#tipps)
  - [✅ Checkliste vor Production Deploy](#checkliste-vor-production-deploy)

---

## 📦 Schritt 1: pnpm installieren

Falls noch nicht vorhanden:

```bash
npm install -g pnpm
```

**Oder:** [Offizielle Installationsanleitung](https://pnpm.io/installation)

## 🔧 Schritt 2: Dependencies installieren

```bash
# Im Projektverzeichnis
pnpm install
```

⏱️ Dauert ~15-20 Sekunden (vs. ~35s mit npm)

## ⚙️ Schritt 3: Umgebungsvariablen einrichten

```bash
# 1. .env.example kopieren
cp .env.example .env

# 2. .env bearbeiten (minimale Konfiguration):
```

**In `.env` eintragen:**
```env
PUBLIC_SITE_URL=http://localhost:4321
PUBLIC_EMAIL=deine@email.com
PUBLIC_GITHUB_USERNAME=deinusername
```

## 🎯 Schritt 4: astro.config.mjs anpassen

Öffne `astro.config.mjs` und ändere:

```js
export default defineConfig({
  site: 'http://localhost:4321',  // Später durch deine Production-Domain ersetzen
  // ...
});
```

## 🏃 Schritt 5: Development Server starten

```bash
pnpm dev
```

✅ **Fertig!** Öffne Browser: `http://localhost:4321`

---

## ✨ Was funktioniert jetzt?

- ✅ Terminal Interface (`help` für Commands)
- ✅ Plugin Showcase
- ✅ Fighting Game (benötigt Game Assets - siehe unten)
- ✅ Navigation & Footer
- ✅ Responsive Design

## 🎮 Game Assets einrichten (Optional)

Das Fighting Game benötigt Sprite-Assets:

### Option 1: Download vorgefertigte Assets
```bash
# TODO: Link zu Asset-Pack einfügen
wget https://example.com/game-assets.zip
unzip game-assets.zip -d public/
```

### Option 2: Eigene Assets verwenden

Erstelle folgende Verzeichnisstruktur:

```
public/game-assets/
└── img/
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

## 🎨 Nächste Schritte

### 1. Inhalte anpassen

**Terminal Commands:**
- Datei: `src/components/Terminal.tsx`
- Bearbeite: `COMMANDS` Objekt

**Plugin Showcase:**
- Datei: `src/components/PluginShowcase.tsx`
- Bearbeite: `PLUGINS` Array

**Tech Stack:**
- Datei: `src/pages/index.astro`
- Suche nach: "TECHNOLOGY STACK"

**Kontaktdaten:**
- `.env` → Email, GitHub, LinkedIn
- `src/layouts/BaseLayout.astro` → Footer Links

### 2. Farben & Theme anpassen

**Tailwind Config:**
```js
// tailwind.config.mjs
theme: {
  extend: {
    colors: {
      'terminal-bg': '#0a0e27',      // Hintergrund
      'terminal-text': '#00ff00',    // Text
      'terminal-accent': '#00ffff',  // Akzent
    }
  }
}
```

### 3. Für Production deployen

**Vercel (Empfohlen):**

1. Push zu GitHub:
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git remote add origin https://github.com/yourusername/portfolio.git
   git push -u origin main
   ```

2. Vercel Setup:
   - Gehe zu [vercel.com](https://vercel.com)
   - Import GitHub Repository
   - Framework: Astro
   - Build Command: `pnpm build`
   - Environment Variables eintragen (aus `.env`)

3. Deploy!

**Wichtig:** In `astro.config.mjs` die `site` URL auf deine Production-Domain ändern!

```js
export default defineConfig({
  site: 'https://dein-portfolio.vercel.app',
  // ...
});
```

## 🐛 Häufige Probleme

### "Invalid URL" Error

**Ursache:** `site` nicht in `astro.config.mjs` gesetzt

**Lösung:**
```js
export default defineConfig({
  site: 'http://localhost:4321', // <-- MUSS gesetzt sein
  // ...
});
```

### Tailwind-Styles laden nicht

```bash
# Cache löschen
pnpm clean
pnpm install
pnpm dev
```

### Port 4321 bereits in Verwendung

```bash
# Anderen Port nutzen
pnpm dev --port 3000
```

### pnpm Command not found

```bash
# pnpm global installieren
npm install -g pnpm

# Oder temporär npm nutzen
npm install
npm run dev
```

## 📚 Weitere Ressourcen

- **Astro Docs:** https://docs.astro.build
- **pnpm Docs:** https://pnpm.io
- **TailwindCSS:** https://tailwindcss.com
- **React Docs:** https://react.dev

## 💡 Tipps

1. **Auto-Reload:** Development Server lädt automatisch bei Änderungen
2. **TypeScript:** Nutze `pnpm astro check` für Type-Checking
3. **Build Test:** Vor Deployment `pnpm build` lokal testen
4. **Performance:** Chrome DevTools → Lighthouse für Optimierungen

---

## ✅ Checkliste vor Production Deploy

- [ ] `.env` Werte angepasst (Email, GitHub, etc.)
- [ ] `astro.config.mjs` → `site` auf Production-Domain gesetzt
- [ ] Alle "yourusername" Platzhalter ersetzt
- [ ] `pnpm build` läuft ohne Fehler
- [ ] Game Assets vorhanden (falls Game genutzt wird)
- [ ] Open Graph Image erstellt (`/public/og-image.png`)
- [ ] Favicon angepasst (`/public/favicon.svg`)

---

**Bei Fragen:** Erstelle ein Issue auf GitHub oder kontaktiere mich direkt.

Happy Coding! 🚀
