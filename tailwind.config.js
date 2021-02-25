module.exports = {
  purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        'paris': ['Parisienne', 'cursive'],
        'quiksand': ['Quicksand', 'sans-serif'],
        'heebo': ['Heebo', 'sans-serif'],
      },
      maxWidth: {
        '16rem': '16rem',
       },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
