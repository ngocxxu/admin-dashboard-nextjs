/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx}',
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',

    // Or if using `src` directory:
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        hoverPurple400:'#6d88c2',
        purple300:'#88aaf3',
        gray400: '#a6aab4',
        gray500: '#868e96',
        gray600: '#8a909d'
      },
    },
  },
  plugins: [],
};
