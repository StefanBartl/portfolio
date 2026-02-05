import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import tailwind from '@astrojs/tailwind';
import vercel from '@astrojs/vercel/serverless';

// https://astro.build/config
export default defineConfig({
  // Site configuration - WICHTIG für canonicalURL
  site: 'http://localhost:4321', // Ersetze mit deiner Domain (z.B. https://yourportfolio.vercel.app)

  // Output mode
  output: 'static', // hybrid erlaubt SSR und SSG gemischt

  // Adapter für Deployment
  adapter: vercel({
    webAnalytics: {
      enabled: true
    }
  }),
  // Integrationen
  integrations: [
    react(),
    tailwind({
      // Tailwind config wird aus tailwind.config.mjs geladen
      applyBaseStyles: false, // wir nutzen eigene global.css
    })
  ],
  // Vite-spezifische Konfiguration
  vite: {
    optimizeDeps: {
      exclude: ['astro:content']
    },
    build: {
      // Chunk-Splitting für bessere Performance
      rollupOptions: {
        output: {
          manualChunks: {
            'react-vendor': ['react', 'react-dom'],
            'game': ['./src/components/game/FightingGame.tsx', './src/components/game/classes.ts']
          }
        }
      }
    }
  },
  // Server-Konfiguration für Development
  server: {
    port: 4321,
    host: true
  },
  // Image optimization
  image: {
    domains: ['your-domain.com'],
    remotePatterns: [{
      protocol: 'https',
      hostname: '**.githubusercontent.com'
    }]
  },
  // Markdown configuration
  markdown: {
    shikiConfig: {
      theme: 'github-dark',
      wrap: true
    }
  }
});
