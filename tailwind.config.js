module.exports = {
  mode : 'jit',
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  darkmode: false,
  theme: {
    extend: {
      fontFamily : {
        sans:['Barlow', 'sans-serif'],
      },
      colors: {
        gray : {
          100 : '#E8E6E9',
          500 : '#ABBBC2',
          700 : '#393C49',
          900 : '#1F1D28',
          800 : '#252836',
        }
      }
    },
  },
  plugins: [],
}
