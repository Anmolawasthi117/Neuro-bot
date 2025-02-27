/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        vt323: ['VT323', 'monospace'],
        orbitron: ['Orbitron', 'sans-serif'],
        roboto: ['Roboto', 'sans-serif'],
        caveat: ['Caveat', 'cursive'],
        poppins: ['Poppins', 'sans-serif'],
      },
      colors: {
        'rf-primary': 'var(--rf-primary)',
        'rf-secondary': 'var(--rf-secondary)',
        'rf-accent': 'var(--rf-accent)',
        'rf-text': 'var(--rf-text)',
        'rf-link': 'var(--rf-link)',
      },
      animation: {
        flicker: 'flicker 2s infinite',
        marquee: 'marquee 15s linear infinite',
        drift: 'drift 5s linear infinite',
        blink: 'blink 1s step-end infinite',
        type: 'type 2s steps(20, end) infinite',
      },
      keyframes: {
        flicker: {
          '0%, 19%, 21%, 23%, 25%, 54%, 56%, 100%': {
            opacity: '1',
            textShadow: '0 0 10px #fff',
          },
          '20%, 24%, 55%': {
            opacity: '0.5',
            textShadow: 'none',
          },
        },
        marquee: {
          '0%': { transform: 'translateX(100%)' },
          '100%': { transform: 'translateX(-100%)' },
        },
        drift: {
          '0%': { transform: 'translateY(100vh)' },
          '100%': { transform: 'translateY(-10vh)' },
        },
        blink: {
          '50%': { opacity: '0' },
        },
        type: {
          '0%': { width: '0' },
          '100%': { width: '100%' },
        },
      },
    },
  },
  plugins: [],
};
