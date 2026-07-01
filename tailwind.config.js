/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        display: ['DM Sans', 'sans-serif'],
        body: ['DM Sans', 'sans-serif'],
        cabin: ['Cabin', 'sans-serif'],
      },
      colors: {
        koc: {
          orange: '#F37021',
          navy: '#0A1628',
          dark: '#0D1117',
          gray: '#64748B',
          light: '#F1F5F9',
          gold: '#d4af37',
        },
        brand: {
          50:  '#f0f5ff',
          100: '#e0ecff',
          200: '#c0d8ff',
          300: '#91beff',
          400: '#5a9bff',
          500: '#2b78ff',
          600: '#1a5fe0',
          700: '#1449b8',
          800: '#153994',
          900: '#162f78',
          950: '#101e4d',
        },
        accent: {
          400: '#fb923c',
          500: '#f97316',
          600: '#ea6c0a',
        },
        surface: {
          0:   '#ffffff',
          50:  '#f8f8f8',
          100: '#f0f0f0',
          200: '#e0e0e0',
        },
        tech: {
          cyan: '#184a97',
          blue: '#0284C7',
          purple: '#9333EA',
          dark: '#0A1628',
          card: '#FFFFFF',
          border: '#E2E8F0',
          text: '#1E293B',
          textlight: '#64748B',
        },
      },
      boxShadow: {
        'soft': '0 2px 20px -4px rgba(0,0,0,0.08)',
        'card': '0 4px 24px -8px rgba(0,0,0,0.12)',
        'lift': '0 12px 48px -12px rgba(0,0,0,0.16)',
        'glow-cyan': '0 0 40px -10px rgba(6, 182, 212, 0.4)',
        'glow-orange': '0 0 40px -10px rgba(249, 115, 22, 0.25)',
        'glow-purple': '0 0 40px -10px rgba(147, 51, 234, 0.25)',
        'glow-green': '0 0 0 1px #0CF25D, 0 0 20px rgba(12,242,93,0.2), 0 0 40px rgba(12,242,93,0.08)',
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'grid-pattern': 'linear-gradient(to right, rgba(203, 213, 225, 0.4) 1px, transparent 1px), linear-gradient(to bottom, rgba(203, 213, 225, 0.4) 1px, transparent 1px)',
      },
      backgroundSize: {
        'grid': '40px 40px',
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'glow': 'glow 2s ease-in-out infinite alternate',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        glow: {
          '0%': { boxShadow: '0 0 20px -5px rgba(30, 58, 138, 0.15)' },
          '100%': { boxShadow: '0 0 40px -10px rgba(30, 58, 138, 0.3)' },
        },
      },
    },
  },
  plugins: [],
};