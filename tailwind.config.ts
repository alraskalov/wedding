import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        wedding: {
          darkTeal: '#2D5A4E',
          sage: '#87A96B',
          lightSage: '#B8C9A8',
          cream: '#FAF9F6',
          white: '#FFFFFF',
          pink: '#F8E8E8',
          rose: '#E8B4B8',
          blush: '#F5D7DA',
          mint: '#B8E6D3',
          lightGreen: '#C8E6C9',
          lavender: '#E1BEE7',
          paleYellow: '#FFF9C4',
        },
      },
      fontFamily: {
        serif: ['var(--font-playfair)', 'serif'],
        sans: ['var(--font-inter)', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
export default config

