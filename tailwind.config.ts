import type { Config } from 'tailwindcss';
export default {
  content: ['./app/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        group1: '#22c55e',
        group2: '#3b82f6',
        group3: '#facc15',
        group4: '#f97316',
        group5: '#fb923c',
        group6: '#ef4444'
      },
      borderRadius: {
        xl: '1rem'
      }
    }
  },
  plugins: []
} satisfies Config;