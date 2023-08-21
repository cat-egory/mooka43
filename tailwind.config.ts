import colors from 'tailwindcss/colors'
import { Config } from 'tailwindcss'

export default {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './ui/**/*.{js,ts,jsx,tsx,mdx}'
  ],
  future: {
    hoverOnlyWhenSupported: true
  },
  darkMode: 'class',
  theme: {},
  plugins: [require('@tailwindcss/typography'), require('@tailwindcss/forms')]
} satisfies Config
