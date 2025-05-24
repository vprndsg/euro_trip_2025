/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['index.html', 'src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        blue: {
          200: '#a0c8ff',
          500: '#1c7dff'
        }
      },
      borderRadius: {
        sheet: '24px'
      }
    }
  },
  plugins: []
};
