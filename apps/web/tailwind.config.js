/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: 'var(--theme-primary)',
        secondary: 'var(--theme-secondary)',
        background: 'var(--theme-background)',
        surface: 'var(--theme-surface)',
        text: 'var(--theme-text)',
      },
      spacing: {
        18: '4.5rem',
        4.5: '1.125rem',
      },
      borderRadius: {
        md: '0.5rem',
        lg: '1rem',
        xl: '1.5rem',
        '2xl': '2rem',
      },
      boxShadow: {
        DEFAULT: '0 2px 8px rgba(0, 0, 0, 0.1)',
        card: '0 4px 12px rgba(0, 0, 0, 0.05)',
      },
      fontFamily: {
        sans: ['var(--theme-font-sans)'],
        display: ['var(--theme-font-display)'],
      },
      transitionTimingFunction: {
        DEFAULT: 'ease-in-out',
      },
      transitionDuration: {
        DEFAULT: '250ms',
      },
    },
  },
  plugins: [],
};
