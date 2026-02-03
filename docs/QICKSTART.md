# Quick Start Guide

## Table of content

- [Quick Start Guide](#quick-start-guide)
  - [🚀 Get Started in 5 Minutes](#get-started-in-5-minutes)
    - [1. Install Dependencies](#1-install-dependencies)
    - [2. Copy Environment Variables](#2-copy-environment-variables)
    - [3. Start Development Server](#3-start-development-server)
  - [📝 First Steps](#first-steps)
    - [Update Personal Information](#update-personal-information)
    - [Add Game Assets](#add-game-assets)
    - [Customize Colors](#customize-colors)
  - [🎯 Next Steps](#next-steps)
  - [🔧 Useful Commands](#useful-commands)
  - [💡 Tips](#tips)
  - [🐛 Troubleshooting](#troubleshooting)
    - [Port Already in Use](#port-already-in-use)
- [Change port](#change-port)
    - [TypeScript Errors](#typescript-errors)
- [Check errors](#check-errors)
- [Auto-fix](#auto-fix)
    - [Missing Game Assets](#missing-game-assets)
  - [📚 Documentation](#documentation)
  - [❓ Need Help?](#need-help)

---

## 🚀 Get Started in 5 Minutes

### 1. Install Dependencies

```bash
npm install
```

### 2. Copy Environment Variables

```bash
cp .env.example .env
```

### 3. Start Development Server

```bash
npm run dev
```

Visit: `http://localhost:4321`

## 📝 First Steps

### Update Personal Information

1. **Terminal Bio** (`src/components/Terminal.tsx`)
   ```typescript
   whoami: `Full-Stack Developer & Neovim Enthusiast
   Location: Your City, Your Country
   Focus: Your Focus Areas`,
   ```

2. **Contact Info** (`src/layouts/BaseLayout.astro`)
   ```astro
   <a href="https://github.com/YOUR_USERNAME">GitHub</a>
   <a href="mailto:YOUR_EMAIL">Email</a>
   ```

3. **Plugins** (`src/components/PluginShowcase.tsx`)
   ```typescript
   const PLUGINS: Plugin[] = [
     {
       name: 'your-plugin.nvim',
       description: 'Your description',
       // ... add your plugins
     }
   ];
   ```

### Add Game Assets

Download sprite assets and place in `public/game-assets/img/`:

**Required folders:**
- `background.png` - Game background
- `shop.png` - Shop sprite
- `samuraiMack/` - Player character sprites
- `kenji/` - Enemy character sprites

**Free Asset Sources:**
- [itch.io](https://itch.io/game-assets/free)
- [OpenGameArt](https://opengameart.org/)

### Customize Colors

Edit `tailwind.config.mjs`:

```javascript
terminal: {
  bg: '#YOUR_BG_COLOR',
  text: '#YOUR_TEXT_COLOR',
  accent: '#YOUR_ACCENT_COLOR',
}
```

## 🎯 Next Steps

- [ ] Update all personal information
- [ ] Add your plugins/projects
- [ ] Upload game assets
- [ ] Customize color theme
- [ ] Add your certifications (in recruiter area)
- [ ] Test on mobile devices
- [ ] Deploy to Vercel/Cloudflare

## 🔧 Useful Commands

```bash
npm run dev          # Start dev server
npm run build        # Build for production
npm run preview      # Preview production build
npm run astro check  # Check for TypeScript errors
```

## 💡 Tips

1. **Terminal Commands**: Add custom commands in `Terminal.tsx`
2. **Color Theme**: Use the design system variables consistently
3. **Performance**: Lazy load heavy components with `client:load`
4. **SEO**: Update meta tags in `BaseLayout.astro`

## 🐛 Troubleshooting

### Port Already in Use
```bash
# Change port
npm run dev -- --port 3000
```

### TypeScript Errors
```bash
# Check errors
npm run astro check

# Auto-fix
npm run astro check --fix
```

### Missing Game Assets
The game will show empty canvas if assets are missing. Add placeholder images or download free assets.

## 📚 Documentation

- [Astro Docs](https://docs.astro.build/)
- [React Docs](https://react.dev/)
- [TailwindCSS Docs](https://tailwindcss.com/)
- [HTMX Docs](https://htmx.org/)

## ❓ Need Help?

Check the full README.md for detailed documentation.
