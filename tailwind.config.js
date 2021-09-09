module.exports = {
  purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        primary: '#141414',
        lightGray: '#181818',
        tile: '#615F5F',
        background: '#232323',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
