module.exports = {
  purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      width: {
        '500': '500px',
      }
    },
  },
  variants: {
    extend: {
      scale: ['active'],
    },
  },
  plugins: [
    require('@tailwindcss/forms')
  ],
}
