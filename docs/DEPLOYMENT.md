# Deployment Guide

## Table of content

- [Deployment Guide](#deployment-guide)
  - [🌐 Deployment Options](#deployment-options)
  - [1. Vercel (Recommended)](#1-vercel-recommended)
    - [Why Vercel?](#why-vercel)
    - [Steps](#steps)
    - [Environment Variables](#environment-variables)
    - [Custom Domain](#custom-domain)
  - [2. Cloudflare Pages](#2-cloudflare-pages)
    - [Why Cloudflare?](#why-cloudflare)
    - [Steps](#steps-1)
    - [Configuration](#configuration)
  - [3. Netlify](#3-netlify)
    - [Why Netlify?](#why-netlify)
    - [Steps](#steps-2)
    - [netlify.toml Configuration](#netlifytoml-configuration)
  - [4. GitHub Pages (Static Only)](#4-github-pages-static-only)
    - [Limitations](#limitations)
    - [Steps](#steps-3)
  - [Pre-Deployment Checklist](#pre-deployment-checklist)
  - [Performance Optimization](#performance-optimization)
    - [Before Deploying](#before-deploying)
- [Use Astro's Image component](#use-astros-image-component)
- [Check dist/ folder size](#check-dist-folder-size)
    - [After Deploying](#after-deploying)
  - [Custom Domain Setup](#custom-domain-setup)
    - [General Steps](#general-steps)
  - [Monitoring & Analytics](#monitoring-analytics)
    - [Recommended Tools](#recommended-tools)
  - [Troubleshooting](#troubleshooting)
    - [Build Fails](#build-fails)
- [Clear cache and reinstall](#clear-cache-and-reinstall)
    - [404 on Routes](#404-on-routes)
    - [Environment Variables Not Working](#environment-variables-not-working)
  - [Post-Deployment](#post-deployment)
  - [Need Help?](#need-help)

---

## 🌐 Deployment Options

This portfolio can be deployed to multiple platforms. Here are the recommended options:

---

## 1. Vercel (Recommended)

### Why Vercel?
- ✅ Zero configuration
- ✅ Automatic HTTPS
- ✅ Edge functions support
- ✅ Excellent performance
- ✅ Free tier available

### Steps

1. **Install Vercel CLI**
   ```bash
   npm i -g vercel
   ```

2. **Login**
   ```bash
   vercel login
   ```

3. **Deploy**
   ```bash
   vercel
   ```

4. **Production Deploy**
   ```bash
   vercel --prod
   ```

### Environment Variables

Add in Vercel Dashboard → Settings → Environment Variables:
```
PUBLIC_SITE_URL=https://yoursite.vercel.app
RECRUITER_TOKEN=your-secret-token
```

### Custom Domain

1. Go to Vercel Dashboard → Domains
2. Add your domain
3. Update DNS records as instructed

---

## 2. Cloudflare Pages

### Why Cloudflare?
- ✅ Global CDN
- ✅ Unlimited bandwidth
- ✅ Free tier
- ✅ Edge workers support
- ✅ Fast deployment

### Steps

1. **Build the Project**
   ```bash
   npm run build
   ```

2. **Deploy via Dashboard**
   - Go to [Cloudflare Pages](https://pages.cloudflare.com/)
   - Connect your Git repository
   - Set build command: `npm run build`
   - Set output directory: `dist`

3. **Or use Wrangler CLI**
   ```bash
   npm i -g wrangler
   wrangler pages deploy dist
   ```

### Configuration

Create `wrangler.toml`:
```toml
name = "portfolio"
compatibility_date = "2025-02-02"

[site]
bucket = "./dist"

[[env.production]]
route = "yoursite.com/*"
```

---

## 3. Netlify

### Why Netlify?
- ✅ Easy form handling
- ✅ Branch previews
- ✅ Functions support
- ✅ Free tier

### Steps

1. **Install Netlify CLI**
   ```bash
   npm i -g netlify-cli
   ```

2. **Login**
   ```bash
   netlify login
   ```

3. **Initialize**
   ```bash
   netlify init
   ```

4. **Deploy**
   ```bash
   netlify deploy --prod
   ```

### netlify.toml Configuration

```toml
[build]
  command = "npm run build"
  publish = "dist"

[[redirects]]
  from = "/*"
  to = "/index.html"
  status = 200
```

---

## 4. GitHub Pages (Static Only)

### Limitations
- ⚠️ No server-side rendering
- ⚠️ No API routes (HTMX endpoints won't work)

### Steps

1. **Update astro.config.mjs**
   ```javascript
   export default defineConfig({
     site: 'https://yourusername.github.io',
     base: '/your-repo-name',
     output: 'static',
   });
   ```

2. **Build**
   ```bash
   npm run build
   ```

3. **Deploy via GitHub Actions**

   Create `.github/workflows/deploy.yml`:
   ```yaml
   name: Deploy to GitHub Pages

   on:
     push:
       branches: [main]

   jobs:
     deploy:
       runs-on: ubuntu-latest
       steps:
         - uses: actions/checkout@v3
         - uses: actions/setup-node@v3
           with:
             node-version: 18
         - run: npm ci
         - run: npm run build
         - uses: peaceiris/actions-gh-pages@v3
           with:
             github_token: ${{ secrets.GITHUB_TOKEN }}
             publish_dir: ./dist
   ```

---

## Pre-Deployment Checklist

- [ ] Update all personal information
- [ ] Test on multiple browsers
- [ ] Test on mobile devices
- [ ] Optimize images
- [ ] Set up analytics (optional)
- [ ] Configure environment variables
- [ ] Test recruiter area access
- [ ] Update meta tags and SEO
- [ ] Add custom domain (optional)
- [ ] Set up monitoring (optional)

---

## Performance Optimization

### Before Deploying

1. **Optimize Images**
   ```bash
   # Use Astro's Image component
   import { Image } from 'astro:assets';
   ```

2. **Check Bundle Size**
   ```bash
   npm run build
   # Check dist/ folder size
   ```

3. **Lighthouse Test**
   - Run in Chrome DevTools
   - Aim for 90+ scores

### After Deploying

1. **Enable Compression**
   - Vercel/Cloudflare: Automatic
   - Netlify: Automatic

2. **Set Cache Headers**
   - Static assets: 1 year
   - HTML: No cache

3. **Monitor Core Web Vitals**
   - Use Google Search Console
   - Or Vercel Analytics

---

## Custom Domain Setup

### General Steps

1. **Buy Domain** (Namecheap, Cloudflare, etc.)

2. **Add to Platform**
   - Vercel: Settings → Domains
   - Cloudflare: Automatic
   - Netlify: Domain Settings

3. **Update DNS**
   ```
   Type: CNAME
   Name: www
   Value: <platform-url>

   Type: A
   Name: @
   Value: <platform-ip>
   ```

4. **Wait for Propagation** (up to 48 hours)

---

## Monitoring & Analytics

### Recommended Tools

1. **Plausible Analytics** (Privacy-friendly)
   ```astro
   <script defer data-domain="yoursite.com"
     src="https://plausible.io/js/script.js">
   </script>
   ```

2. **Vercel Analytics** (Free on Vercel)
   ```bash
   npm install @vercel/analytics
   ```

3. **Google Search Console** (SEO)
   - Add site
   - Verify ownership
   - Monitor performance

---

## Troubleshooting

### Build Fails

```bash
# Clear cache and reinstall
rm -rf node_modules package-lock.json
npm install
npm run build
```

### 404 on Routes

Ensure your platform handles SPA routing:
- Vercel: Automatic
- Netlify: Add redirects
- Cloudflare: Use _redirects file

### Environment Variables Not Working

- Check variable names (PUBLIC_ prefix for client-side)
- Restart dev server after adding variables
- Re-deploy after changing variables

---

## Post-Deployment

1. **Test Everything**
   - All pages load
   - Terminal commands work
   - Game loads and plays
   - Recruiter area is accessible
   - Forms submit correctly

2. **Set Up Redirects**
   - www → non-www (or vice versa)
   - HTTP → HTTPS

3. **Submit to Search Engines**
   - Google Search Console
   - Bing Webmaster Tools

4. **Share Your Portfolio!** 🎉

---

## Need Help?

- Vercel: [docs.vercel.com](https://vercel.com/docs)
- Cloudflare: [developers.cloudflare.com/pages](https://developers.cloudflare.com/pages)
- Netlify: [docs.netlify.com](https://docs.netlify.com)
- Astro: [docs.astro.build/guides/deploy](https://docs.astro.build/en/guides/deploy/)
