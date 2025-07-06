// tailwind.config.js
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['"Mona Sans"', 'sans-serif'],
        'modern-negra': ['"Modern Negra"', 'sans-serif'], // ✅ actual font name
        serif: ['"DM Serif Text"', 'serif'],
      },
      colors: {
        yellow: '#e7d393',
        white100: '#efefef',
      },
    },
  },
  plugins: [],
};
