/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['index.html', 'src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#0ea5e9',
        'accent-red': '#dc2626',
        'accent-green': '#16a34a'
      },
      borderRadius: {
        sheet: '24px'
      }
    }
  },
  plugins: []
};
