/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'rf-primary': 'var(--rf-primary)',
        'rf-secondary': 'var(--rf-secondary)',
        'rf-accent': 'var(--rf-accent)',
        'rf-text': 'var(--rf-text)',
        'rf-link': 'var(--rf-link)',
      },
    },
  },
  plugins: [],
}

