import type { Config } from 'tailwindcss'

export default {
  content: ['./app/**/*.{ts,tsx}', './components/**/*.{ts,tsx}'],
  theme: {
    container: { center: true, padding: '1.5rem' },
    extend: {
      colors: {
        brand: { green: '#1FAA7B', orange: '#F38B1A' }
      },
      borderRadius: { '2xl': '22px' },
      boxShadow: { soft: '0 6px 24px rgba(0,0,0,.08)' }
    }
  },
  plugins: []
} satisfies Config
