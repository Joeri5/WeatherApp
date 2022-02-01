module.exports = {
  purge: ['./src/*/.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: 'media', // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        dark: "#222533",
        background: "#1B1D28",
        primary: "#7132C1"
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
