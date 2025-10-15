import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/app/**/*.{ts,tsx}',
    './src/components/**/*.{ts,tsx}',
  ],
  theme: {
    container: { center: true, padding: '1.5rem' },
    extend: {
      colors: {
        emerald: {
          500: '#10B981',
          600: '#059669',
        },
        brand: {
          green: '#1FAA7B',
          orange: '#F38B1A',
        },
      },
      borderRadius: {
        xl2: '22px',
      },
      boxShadow: {
        soft: '0 6px 24px rgba(0,0,0,.08)',
      },
    },
  },
  plugins: [],
}

export default config
