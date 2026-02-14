/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        // Reach-Out Custom Colors
        'dark': '#0a0e27',
        'dark-secondary': '#0f1535',
        'dark-tertiary': '#141b2f',
        'card': '#1a2749',
        'border': '#2d3748',
        'accent-teal': '#06b6d4',
        'accent-purple': '#a855f7',
        'accent-pink': '#ec4899'
      },
      fontFamily: {
        sans: ['Segoe UI', 'Tahoma', 'Geneva', 'sans-serif']
      },
      screens: {
        sm: '425px',
        md: '768px',
        lg: '1024px',
        xl: '1440px'
      },
      boxShadow: {
        'card': '0 4px 12px rgba(0, 0, 0, 0.3)',
        'hover': '0 8px 24px rgba(6, 182, 212, 0.15)'
      }
    }
  },
  plugins: []
};
