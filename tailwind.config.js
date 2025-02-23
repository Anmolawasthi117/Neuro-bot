/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primaryBg: '#1A1A1A',
        secondaryBg: '#2D2D2D',
        accent: '#FF6F61',
        textColor: '#E0E0E0',
        linkColor: '#00FFFF',
      },
    },
  },
  plugins: [],
}

