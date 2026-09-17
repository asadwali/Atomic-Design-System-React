// tailwind.config.js
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{js,jsx,ts,tsx,html}',
    './public/index.html',
  ],
  theme: {
    extend: {
      colors: {
        primary: 'rgb(var(--color-primary) / <alpha-value>)',
        secondary: 'rgb(var(--color-secondary) / <alpha-value>)',
        background: 'var(--color-bg)',
        foreground: 'var(--color-text)',
      },
      rotate: {
        45: "45deg",
      },
    },
  },
  darkMode: 'class',
  plugins: [],
};