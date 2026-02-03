/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        // Terminal Theme
        'terminal-bg': '#0a0e27',
        'terminal-bg-light': '#0f1425',
        'terminal-text': '#00ff00',
        'terminal-accent': '#00ffff',
        'terminal-warning': '#ffff00',
        'terminal-error': '#ff0000',
        
        // Game-specific colors
        'game-health': '#00ff00',
        'game-health-bg': '#333',
        'game-timer': '#1a1a1a',
      },
      
      fontFamily: {
        mono: ['JetBrains Mono', 'Monaco', 'Courier New', 'monospace'],
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      
      animation: {
        'fade-in': 'fadeIn 0.5s ease-in',
        'slide-in': 'slideIn 0.5s ease-out',
        'pulse-glow': 'pulseGlow 2s ease-in-out infinite',
        'scan': 'scan 8s linear infinite',
      },
      
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0', transform: 'translateY(10px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        slideIn: {
          '0%': { width: '0%' },
          '100%': { width: '100%' },
        },
        pulseGlow: {
          '0%, 100%': { 
            boxShadow: '0 0 5px currentColor',
            opacity: '1' 
          },
          '50%': { 
            boxShadow: '0 0 20px currentColor',
            opacity: '0.8' 
          },
        },
        scan: {
          '0%, 100%': { transform: 'translateY(-100%)' },
          '50%': { transform: 'translateY(100%)' },
        },
      },
      
      boxShadow: {
        'terminal': '0 0 10px rgba(0, 255, 255, 0.5)',
        'terminal-lg': '0 0 20px rgba(0, 255, 255, 0.7)',
      },
      
      backgroundImage: {
        'grid-pattern': 'linear-gradient(rgba(0, 255, 255, 0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(0, 255, 255, 0.1) 1px, transparent 1px)',
      },
      
      backgroundSize: {
        'grid': '50px 50px',
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
}
